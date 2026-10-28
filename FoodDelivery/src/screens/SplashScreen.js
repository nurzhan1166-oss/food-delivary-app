import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        F<Text style={styles.accent}>oo</Text>d
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    fontSize: 48,
    fontWeight: '700',
    color: colors.dark,
  },
  accent: {
    color: colors.orange,
  },
});