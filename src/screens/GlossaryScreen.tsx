import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import { glossary, GlossaryTerm } from '../data/glossary';
import { colors, typography, spacing, radii } from '../theme/theme';

const CATEGORIES: Array<{ id: GlossaryTerm['category'] | 'all'; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'basics', label: 'Basics' },
  { id: 'stocks', label: 'Stocks' },
  { id: 'funds', label: 'Funds' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'risk', label: 'Risk' },
  { id: 'crypto', label: 'Crypto' },
  { id: 'tax', label: 'Tax' },
];

export const GlossaryScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]['id']>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return glossary.filter((t) => {
      const matchCategory = category === 'all' || t.category === category;
      const matchQuery =
        !query ||
        t.term.toLowerCase().includes(query.toLowerCase()) ||
        t.definition.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Reference</Text>
        <Text style={styles.title}>Glossary</Text>
        <Text style={styles.subtitle}>{glossary.length} terms, defined plainly.</Text>
      </View>

      <View style={styles.searchWrap}>
        <TextInput
          style={styles.search}
          placeholder="Search a term..."
          placeholderTextColor={colors.fog}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow} contentContainerStyle={styles.chipRowContent}>
        {CATEGORIES.map((cat) => (
          <Pressable
            key={cat.id}
            onPress={() => setCategory(cat.id)}
            style={[styles.chip, category === cat.id && styles.chipActive]}
          >
            <Text style={[styles.chipText, category === cat.id && styles.chipTextActive]}>
              {cat.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
        {filtered.map((term) => {
          const isOpen = expanded === term.term;
          return (
            <Pressable
              key={term.term}
              onPress={() => setExpanded(isOpen ? null : term.term)}
              style={styles.termCard}
            >
              <View style={styles.termHeader}>
                <Text style={styles.termName}>{term.term}</Text>
                <Text style={styles.termToggle}>{isOpen ? '−' : '+'}</Text>
              </View>
              {isOpen && (
                <View style={styles.termBody}>
                  <Text style={styles.termDefinition}>{term.definition}</Text>
                  {term.example && (
                    <Text style={styles.termExample}>e.g., {term.example}</Text>
                  )}
                </View>
              )}
            </Pressable>
          );
        })}
        {filtered.length === 0 && (
          <Text style={styles.empty}>No terms match "{query}"</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
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
  subtitle: {
    ...typography.body,
    color: colors.slate,
  },
  searchWrap: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  search: {
    ...typography.body,
    color: colors.ink,
    backgroundColor: colors.paper,
    borderWidth: 1,
    borderColor: colors.bone,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: radii.md,
  },
  chipRow: {
    maxHeight: 50,
    flexGrow: 0,
  },
  chipRowContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    paddingBottom: spacing.md,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.bone,
    backgroundColor: colors.paper,
  },
  chipActive: {
    backgroundColor: colors.ink,
    borderColor: colors.ink,
  },
  chipText: {
    ...typography.label,
    color: colors.ink,
  },
  chipTextActive: {
    color: colors.cream,
  },
  list: { flex: 1 },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
    gap: spacing.sm,
  },
  termCard: {
    backgroundColor: colors.paper,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.bone,
    padding: spacing.md,
  },
  termHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  termName: {
    ...typography.title,
    color: colors.ink,
  },
  termToggle: {
    ...typography.headline,
    color: colors.amber,
    width: 24,
    textAlign: 'center',
  },
  termBody: {
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.bone,
  },
  termDefinition: {
    ...typography.body,
    color: colors.charcoal,
  },
  termExample: {
    ...typography.body,
    color: colors.slate,
    fontStyle: 'italic',
    marginTop: spacing.sm,
  },
  empty: {
    ...typography.body,
    color: colors.slate,
    textAlign: 'center',
    paddingVertical: spacing.xxl,
  },
});
