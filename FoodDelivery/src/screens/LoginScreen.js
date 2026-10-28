import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

// Кіру экраны (Log In)
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Қою көк тақырып бөлігі */}
      <View style={styles.top}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>Please sign in to your existing account</Text>
      </View>

      {/* Ақ карточка: өрістер мен түйме */}
      <View style={styles.form}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor={colors.gray}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor={colors.gray}
          secureTextEntry
        />

        <View style={styles.row}>
          <Text style={styles.remember}>Remember me</Text>
          <Text style={styles.link}>Forgot Password</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>
          Don't have an account? <Text style={styles.link}>SIGN UP</Text>
        </Text>

        <Text style={styles.or}>Or</Text>

        <View style={styles.social}>
          <View style={[styles.socialBtn, { backgroundColor: '#395998' }]}>
            <Text style={styles.socialText}>f</Text>
          </View>
          <View style={[styles.socialBtn, { backgroundColor: '#169CE8' }]}>
            <Text style={styles.socialText}>t</Text>
          </View>
          <View style={[styles.socialBtn, { backgroundColor: '#1B1F2F' }]}>
            <Text style={styles.socialText}>a</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.dark },
  top: { paddingTop: 100, paddingBottom: 40, alignItems: 'center' },
  title: { fontSize: 30, fontWeight: '700', color: colors.white },
  subtitle: { marginTop: 8, fontSize: 14, color: colors.white, opacity: 0.8 },
  form: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  label: { marginTop: 16, marginBottom: 8, fontSize: 13, color: colors.text },
  input: {
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.light,
    fontSize: 14,
    color: colors.text,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 24,
  },
  remember: { fontSize: 13, color: colors.gray },
  link: { fontSize: 13, color: colors.orange },
  button: {
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { fontSize: 16, fontWeight: '700', color: colors.white },
  bottomText: { marginTop: 24, textAlign: 'center', fontSize: 14, color: colors.gray },
  or: { marginVertical: 16, textAlign: 'center', color: colors.gray },
  social: { flexDirection: 'row', justifyContent: 'center', gap: 20 },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: { color: colors.white, fontWeight: '700' },
});