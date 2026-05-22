import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert, Pressable, Linking } from 'react-native';
import Constants from 'expo-constants';
import { Button } from '../components/Button';
import { resetApp } from '../storage/storage';
import { colors, typography, spacing } from '../theme/theme';

interface Props {
  onReset: () => void;
}

const privacyPolicyUrl =
  (Constants.expoConfig?.extra?.privacyPolicyUrl as string | undefined) ?? undefined;

export const AboutScreen: React.FC<Props> = ({ onReset }) => {
  const handleReset = () => {
    Alert.alert(
      'Retake the quiz?',
      'This will clear your saved profile and let you start over.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            await resetApp();
            onReset();
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>About</Text>
        <Text style={styles.title}>InvestIQ</Text>
        <Text style={styles.tagline}>Investing literacy for curious minds.</Text>

        <Section title="What this app is">
          InvestIQ is an educational guide that suggests reading and learning resources based on
          your investing interests. It does not collect personal information, does not track you,
          and does not handle money. Everything lives on your device.
        </Section>

        <Section title="What this app is NOT">
          This is not financial advice. We are not a broker, advisor, or registered financial
          professional. Nothing in this app should be taken as a recommendation to buy or sell any
          specific security or asset. Always do your own research and consult a licensed advisor
          before investing real money.
        </Section>

        <Section title="Privacy">
          We collect zero personal data. Your quiz answers and persona are stored only on your
          device. There is no account, no email, no analytics that identify you.
        </Section>
        {privacyPolicyUrl ? (
          <Pressable onPress={() => Linking.openURL(privacyPolicyUrl)}>
            <Text style={styles.link}>View privacy policy</Text>
          </Pressable>
        ) : null}

        <Section title="Risk reminder">
          All investing involves risk, including the possible loss of your entire investment. Past
          performance does not guarantee future results. Markets can fall sharply and unexpectedly.
        </Section>

        <View style={{ height: spacing.xl }} />
        <Button label="Retake the quiz" onPress={handleReset} variant="secondary" />

        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const Section: React.FC<{ title: string; children: string }> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionBody}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream },
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  eyebrow: {
    ...typography.caption,
    color: colors.amber,
    marginBottom: spacing.xs,
  },
  title: {
    ...typography.display,
    color: colors.ink,
    marginBottom: spacing.xs,
  },
  tagline: {
    ...typography.bodyLarge,
    color: colors.amber,
    fontStyle: 'italic',
    marginBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    ...typography.title,
    color: colors.ink,
    marginBottom: spacing.sm,
  },
  sectionBody: {
    ...typography.body,
    color: colors.charcoal,
  },
  version: {
    ...typography.caption,
    color: colors.fog,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
  link: {
    ...typography.body,
    color: colors.amber,
    textDecorationLine: 'underline',
    marginBottom: spacing.lg,
  },
});
