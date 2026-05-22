import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersonaId } from '../data/personas';

const KEYS = {
  persona: '@investiq/persona',
  quizComplete: '@investiq/quiz_complete',
  savedTerms: '@investiq/saved_terms',
} as const;

export async function savePersona(id: PersonaId): Promise<void> {
  await AsyncStorage.setItem(KEYS.persona, id);
  await AsyncStorage.setItem(KEYS.quizComplete, 'true');
}

export async function getPersona(): Promise<PersonaId | null> {
  const value = await AsyncStorage.getItem(KEYS.persona);
  return value as PersonaId | null;
}

export async function hasCompletedQuiz(): Promise<boolean> {
  return (await AsyncStorage.getItem(KEYS.quizComplete)) === 'true';
}

export async function resetApp(): Promise<void> {
  await AsyncStorage.multiRemove([KEYS.persona, KEYS.quizComplete, KEYS.savedTerms]);
}

export async function getSavedTerms(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(KEYS.savedTerms);
  return raw ? JSON.parse(raw) : [];
}

export async function toggleSavedTerm(term: string): Promise<string[]> {
  const current = await getSavedTerms();
  const next = current.includes(term)
    ? current.filter((t) => t !== term)
    : [...current, term];
  await AsyncStorage.setItem(KEYS.savedTerms, JSON.stringify(next));
  return next;
}
