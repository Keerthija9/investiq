import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, radii } from '../theme/theme';

export const DisclaimerBanner: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.label}>For Education Only</Text>
    <Text style={styles.text}>
      InvestIQ provides general educational content. It is not financial advice. Consult a licensed
      advisor before making investment decisions.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bone,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: radii.md,
    borderLeftWidth: 3,
    borderLeftColor: colors.amber,
  },
  label: {
    ...typography.caption,
    color: colors.amber,
    marginBottom: spacing.xs,
  },
  text: {
    ...typography.label,
    color: colors.charcoal,
  },
});
