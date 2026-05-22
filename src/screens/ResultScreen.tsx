import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Button } from '../components/Button';
import { personas, PersonaId } from '../data/personas';
import { colors, typography, spacing, radii } from '../theme/theme';

interface Props {
  personaId: PersonaId;
  onContinue: () => void;
}

export const ResultScreen: React.FC<Props> = ({ personaId, onContinue }) => {
  const persona = personas[personaId];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>Your Investor Profile</Text>
        <View style={styles.rule} />

        <Text style={styles.emoji}>{persona.emoji}</Text>
        <Text style={styles.name}>{persona.name}</Text>
        <Text style={styles.tagline}>{persona.tagline}</Text>

        <Text style={styles.description}>{persona.description}</Text>

        <Section title="Your strengths" items={persona.strengths} accent={colors.bull} />
        <Section title="Watch out for" items={persona.watchouts} accent={colors.bear} />

        <View style={styles.focusBlock}>
          <Text style={styles.sectionHeading}>What to learn next</Text>
          <View style={styles.tagRow}>
            {persona.focusAreas.map((area) => (
              <View key={area} style={styles.tag}>
                <Text style={styles.tagText}>{area}</Text>
              </View>
            ))}
          </View>
        </View>

        <Button label="See my reading list" onPress={onContinue} style={{ marginTop: spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Section: React.FC<{ title: string; items: string[]; accent: string }> = ({
  title,
  items,
  accent,
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionHeading}>{title}</Text>
    {items.map((item, i) => (
      <View key={i} style={styles.bullet}>
        <View style={[styles.dot, { backgroundColor: accent }]} />
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
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
    marginBottom: spacing.sm,
  },
  rule: {
    height: 1,
    backgroundColor: colors.ink,
    opacity: 0.15,
    marginBottom: spacing.xl,
  },
  emoji: {
    fontSize: 56,
    marginBottom: spacing.md,
  },
  name: {
    ...typography.display,
    color: colors.ink,
    marginBottom: spacing.xs,
  },
  tagline: {
    ...typography.bodyLarge,
    color: colors.amber,
    fontStyle: 'italic',
    marginBottom: spacing.lg,
  },
  description: {
    ...typography.bodyLarge,
    color: colors.charcoal,
    marginBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionHeading: {
    ...typography.caption,
    color: colors.slate,
    marginBottom: spacing.sm,
  },
  bullet: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    paddingVertical: spacing.xs,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 9,
  },
  bulletText: {
    ...typography.body,
    color: colors.ink,
    flex: 1,
  },
  focusBlock: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tag: {
    backgroundColor: colors.ink,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radii.pill,
  },
  tagText: {
    ...typography.label,
    color: colors.cream,
  },
});
