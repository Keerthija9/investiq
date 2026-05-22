import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Button } from '../components/Button';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { colors, typography, spacing } from '../theme/theme';

interface Props {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>InvestIQ · Vol. 01</Text>
          <View style={styles.rule} />
        </View>

        <View style={styles.hero}>
          <Text style={styles.title}>
            Investing,{'\n'}
            <Text style={styles.titleItalic}>understood.</Text>
          </Text>
          <Text style={styles.subtitle}>
            A guided path through the world of markets, money, and meaning — tailored to how you
            think.
          </Text>
        </View>

        <View style={styles.features}>
          <Feature number="01" title="Take a 2-minute reflection" body="Seven questions about how you think about money and time." />
          <Feature number="02" title="Discover your investor profile" body="One of five honest archetypes. No flattery." />
          <Feature number="03" title="Get a curated reading list" body="Books, channels, and free resources matched to your profile." />
        </View>

        <View style={styles.footer}>
          <Button label="Begin the reflection" onPress={onStart} />
          <View style={{ height: spacing.md }} />
          <DisclaimerBanner />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Feature: React.FC<{ number: string; title: string; body: string }> = ({
  number,
  title,
  body,
}) => (
  <View style={styles.feature}>
    <Text style={styles.featureNumber}>{number}</Text>
    <View style={styles.featureBody}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureText}>{body}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream },
  container: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xxl },
  header: {
    paddingTop: spacing.md,
    marginBottom: spacing.xl,
  },
  eyebrow: {
    ...typography.caption,
    color: colors.amber,
    marginBottom: spacing.sm,
  },
  rule: {
    height: 1,
    backgroundColor: colors.ink,
    opacity: 0.15,
  },
  hero: {
    marginBottom: spacing.xxl,
  },
  title: {
    ...typography.displayLarge,
    color: colors.ink,
    marginBottom: spacing.md,
  },
  titleItalic: {
    fontStyle: 'italic',
    color: colors.amber,
  },
  subtitle: {
    ...typography.bodyLarge,
    color: colors.charcoal,
    maxWidth: 340,
  },
  features: {
    marginBottom: spacing.xxl,
    gap: spacing.lg,
  },
  feature: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  featureNumber: {
    ...typography.headline,
    color: colors.amber,
    fontStyle: 'italic',
    width: 44,
  },
  featureBody: {
    flex: 1,
  },
  featureTitle: {
    ...typography.title,
    color: colors.ink,
    marginBottom: spacing.xs,
  },
  featureText: {
    ...typography.body,
    color: colors.slate,
  },
  footer: {
    marginTop: spacing.xl,
  },
});
