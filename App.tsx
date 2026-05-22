import React, { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import {
  Fraunces_600SemiBold,
  Fraunces_700Bold,
} from '@expo-google-fonts/fraunces';
import {
  DMSans_400Regular,
  DMSans_500Medium,
} from '@expo-google-fonts/dm-sans';

import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { QuizScreen } from './src/screens/QuizScreen';
import { ResultScreen } from './src/screens/ResultScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { GlossaryScreen } from './src/screens/GlossaryScreen';
import { AboutScreen } from './src/screens/AboutScreen';

import { PersonaId } from './src/data/personas';
import { getPersona, hasCompletedQuiz, savePersona } from './src/storage/storage';
import { colors } from './src/theme/theme';

SplashScreen.preventAutoHideAsync();

type Stage = 'loading' | 'welcome' | 'quiz' | 'result' | 'main';

const Tab = createBottomTabNavigator();

export default function App() {
  const [stage, setStage] = useState<Stage>('loading');
  const [personaId, setPersonaId] = useState<PersonaId | null>(null);

  const [fontsLoaded] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_700Bold,
    DMSans_400Regular,
    DMSans_500Medium,
  });

  useEffect(() => {
    (async () => {
      const done = await hasCompletedQuiz();
      const persona = await getPersona();
      if (done && persona) {
        setPersonaId(persona);
        setStage('main');
      } else {
        setStage('welcome');
      }
    })();
  }, []);

  const onReady = useCallback(async () => {
    if (fontsLoaded && stage !== 'loading') {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, stage]);

  if (!fontsLoaded || stage === 'loading') {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={colors.amber} />
      </View>
    );
  }

  const handleQuizComplete = async (id: PersonaId) => {
    await savePersona(id);
    setPersonaId(id);
    setStage('result');
  };

  const handleReset = () => {
    setPersonaId(null);
    setStage('welcome');
  };

  if (stage === 'welcome') {
    return (
      <View style={styles.app} onLayout={onReady}>
        <StatusBar style="dark" />
        <WelcomeScreen onStart={() => setStage('quiz')} />
      </View>
    );
  }

  if (stage === 'quiz') {
    return (
      <View style={styles.app} onLayout={onReady}>
        <StatusBar style="dark" />
        <QuizScreen onComplete={handleQuizComplete} />
      </View>
    );
  }

  if (stage === 'result' && personaId) {
    return (
      <View style={styles.app} onLayout={onReady}>
        <StatusBar style="dark" />
        <ResultScreen personaId={personaId} onContinue={() => setStage('main')} />
      </View>
    );
  }

  if (stage === 'main' && personaId) {
    return (
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.ink,
            tabBarInactiveTintColor: colors.fog,
            tabBarStyle: {
              backgroundColor: colors.cream,
              borderTopColor: colors.bone,
              paddingTop: 6,
              height: 64,
            },
            tabBarLabelStyle: {
              fontFamily: 'DMSans_500Medium',
              fontSize: 11,
              letterSpacing: 0.4,
              textTransform: 'uppercase',
            },
          }}
        >
          <Tab.Screen
            name="Library"
            options={{ tabBarIcon: ({ color }) => <TabIcon icon="◆" color={color} /> }}
          >
            {() => <HomeScreen personaId={personaId} />}
          </Tab.Screen>
          <Tab.Screen
            name="Glossary"
            component={GlossaryScreen}
            options={{ tabBarIcon: ({ color }) => <TabIcon icon="▤" color={color} /> }}
          />
          <Tab.Screen
            name="About"
            options={{ tabBarIcon: ({ color }) => <TabIcon icon="✦" color={color} /> }}
          >
            {() => <AboutScreen onReset={handleReset} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return null;
}

const TabIcon: React.FC<{ icon: string; color: string }> = ({ icon, color }) => (
  <Text style={{ color, fontSize: 16 }}>{icon}</Text>
);

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: colors.cream },
  loader: {
    flex: 1,
    backgroundColor: colors.cream,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
