import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { colors, typography, radii, spacing } from '../theme/theme';

interface Props {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<Props> = ({
  label,
  onPress,
  variant = 'primary',
  disabled,
  style,
}) => {
  const handlePress = () => {
    if (disabled) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        disabled && styles.disabled,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.label, styles[`${variant}Label` as const]]}>{label}</Text>
      {variant === 'primary' && <View style={styles.arrow}><Text style={styles.arrowText}>→</Text></View>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.pill,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  primary: {
    backgroundColor: colors.ink,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.ink,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.4,
  },
  label: {
    ...typography.button,
  },
  primaryLabel: {
    color: colors.cream,
  },
  secondaryLabel: {
    color: colors.ink,
  },
  ghostLabel: {
    color: colors.ink,
  },
  arrow: {
    marginLeft: spacing.xs,
  },
  arrowText: {
    color: colors.amber,
    fontSize: 18,
    fontFamily: 'DMSans_500Medium',
  },
});
