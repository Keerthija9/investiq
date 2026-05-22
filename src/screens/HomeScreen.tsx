import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Linking } from 'react-native';
import { recommendations, Resource } from '../data/recommendations';
import { personas, PersonaId } from '../data/personas';
import { getTipForDay } from '../data/tips';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { colors, typography, spacing, radii } from '../theme/theme';

interface Props {
  personaId: PersonaId;
}

export const HomeScreen: React.FC<Props> = ({ personaId }) => {
  const persona = personas[personaId];
  const resources = recommendations[personaId];
  const [tip] = useState(getTipForDay());

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>Your Library</Text>
            <Text style={styles.headerTitle}>{persona.name}</Text>
          </View>
          <Text style={styles.emoji}>{persona.emoji}</Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipLabel}>Today's reflection</Text>
          <Text style={styles.tipText}>"{tip.text}"</Text>
          {tip.attribution && <Text style={styles.tipAttribution}>— {tip.attribution}</Text>}
        </View>

        <Text style={styles.sectionLabel}>Curated for you</Text>
        <View style={styles.resourceList}>
          {resources.map((resource, i) => (
            <ResourceCard key={i} resource={resource} index={i + 1} />
          ))}
        </View>

        <DisclaimerBanner />
      </ScrollView>
    </SafeAreaView>
  );
};

const ResourceCard: React.FC<{ resource: Resource; index: number }> = ({ resource, index }) => {
  const handlePress = () => {
    if (resource.url) Linking.openURL(resource.url);
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={!resource.url}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardIndex}>{String(index).padStart(2, '0')}</Text>
        <View style={styles.cardMeta}>
          <Text style={styles.cardType}>
            {resource.type} · {resource.free ? 'Free' : 'Paid'}
          </Text>
        </View>
      </View>
      <Text style={styles.cardTitle}>{resource.title}</Text>
      <Text style={styles.cardSource}>{resource.source}</Text>
      <Text style={styles.cardDescription}>{resource.description}</Text>
      {resource.url && <Text style={styles.cardLink}>Open →</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream },
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: spacing.xl,
  },
  eyebrow: {
    ...typography.caption,
    color: colors.amber,
    marginBottom: spacing.xs,
  },
  headerTitle: {
    ...typography.headline,
    color: colors.ink,
  },
  emoji: {
    fontSize: 36,
  },
  tipCard: {
    backgroundColor: colors.ink,
    padding: spacing.lg,
    borderRadius: radii.lg,
    marginBottom: spacing.xl,
  },
  tipLabel: {
    ...typography.caption,
    color: colors.amber,
    marginBottom: spacing.sm,
  },
  tipText: {
    ...typography.headline,
    color: colors.cream,
    fontStyle: 'italic',
    marginBottom: spacing.sm,
  },
  tipAttribution: {
    ...typography.label,
    color: colors.fog,
  },
  sectionLabel: {
    ...typography.caption,
    color: colors.slate,
    marginBottom: spacing.md,
  },
  resourceList: {
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.paper,
    borderRadius: radii.md,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.bone,
  },
  cardPressed: {
    backgroundColor: colors.bone,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  cardIndex: {
    ...typography.headline,
    color: colors.amber,
    fontStyle: 'italic',
  },
  cardMeta: {},
  cardType: {
    ...typography.caption,
    color: colors.slate,
  },
  cardTitle: {
    ...typography.title,
    color: colors.ink,
    marginBottom: spacing.xs,
  },
  cardSource: {
    ...typography.label,
    color: colors.slate,
    marginBottom: spacing.sm,
  },
  cardDescription: {
    ...typography.body,
    color: colors.charcoal,
    marginBottom: spacing.sm,
  },
  cardLink: {
    ...typography.bodyMedium,
    color: colors.amber,
  },
});
