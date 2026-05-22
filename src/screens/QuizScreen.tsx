import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from 'react-native';
import * as Haptics from 'expo-haptics';
import { quizQuestions } from '../data/quiz';
import { scoresToPersona, tallyScores } from '../data/personas';
import { colors, typography, spacing, radii } from '../theme/theme';

interface Props {
  onComplete: (personaId: ReturnType<typeof scoresToPersona>) => void;
}

export const QuizScreen: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<(typeof quizQuestions)[number]['options'][number]['scores']>>([]);

  const current = quizQuestions[step];
  const progress = ((step + 1) / quizQuestions.length) * 100;

  const handleSelect = (optionIndex: number) => {
    Haptics.selectionAsync();
    const newAnswers = [...answers, current.options[optionIndex].scores];
    if (step + 1 >= quizQuestions.length) {
      const totals = tallyScores(newAnswers);
      const persona = scoresToPersona(totals);
      onComplete(persona);
    } else {
      setAnswers(newAnswers);
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step === 0) return;
    Haptics.selectionAsync();
    setAnswers(answers.slice(0, -1));
    setStep(step - 1);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Pressable onPress={handleBack} disabled={step === 0} style={styles.backButton}>
          <Text style={[styles.backText, step === 0 && styles.backDisabled]}>← Back</Text>
        </Pressable>
        <Text style={styles.progressText}>
          {step + 1} / {quizQuestions.length}
        </Text>
      </View>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>

      <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
        <Text style={styles.question}>{current.question}</Text>
        {current.hint && <Text style={styles.hint}>{current.hint}</Text>}

        <View style={styles.options}>
          {current.options.map((option, i) => (
            <Pressable
              key={i}
              onPress={() => handleSelect(i)}
              style={({ pressed }) => [styles.option, pressed && styles.optionPressed]}
            >
              <Text style={styles.optionLetter}>{String.fromCharCode(65 + i)}</Text>
              <Text style={styles.optionText}>{option.label}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  backButton: { padding: spacing.xs },
  backText: { ...typography.bodyMedium, color: colors.ink },
  backDisabled: { opacity: 0.3 },
  progressText: { ...typography.caption, color: colors.slate },
  progressBar: {
    height: 3,
    backgroundColor: colors.bone,
    marginHorizontal: spacing.lg,
    borderRadius: radii.pill,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.amber,
  },
  body: { flex: 1 },
  bodyContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  question: {
    ...typography.display,
    color: colors.ink,
    marginBottom: spacing.md,
  },
  hint: {
    ...typography.body,
    color: colors.slate,
    fontStyle: 'italic',
    marginBottom: spacing.xl,
  },
  options: {
    gap: spacing.md,
    marginTop: spacing.md,
  },
  option: {
    backgroundColor: colors.paper,
    padding: spacing.lg,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.bone,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  optionPressed: {
    backgroundColor: colors.bone,
    transform: [{ scale: 0.99 }],
  },
  optionLetter: {
    ...typography.title,
    color: colors.amber,
    fontStyle: 'italic',
    fontFamily: 'Fraunces_600SemiBold',
    width: 20,
  },
  optionText: {
    ...typography.bodyLarge,
    color: colors.ink,
    flex: 1,
  },
});
