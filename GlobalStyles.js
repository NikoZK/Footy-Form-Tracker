import { StyleSheet } from 'react-native';

export const THEME = {
  primary: '#092646',
  primaryDark: '#0056B3',
  background: '#F9F9F9',
  surface: '#FFFFFF',
  text: '#1C1C1E',
  textMuted: '#8E8E93',
  border: '#E5E5EA',
  error: '#FF3B30',
  radius: 12,
};


export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: THEME.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: THEME.surface,
    borderRadius: THEME.radius,
    padding: 24,
    width: '100%',
    maxWidth: 340,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, 
  },
  formGroup: {
    marginBottom: 16,
    width: '100%',
  },

  // Typography
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: THEME.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: THEME.textMuted,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.text,
    marginBottom: 6,
  },

  // Form Inputs
  input: {
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius - 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: THEME.text,
  },

  // Interactive Buttons
  button: {
    backgroundColor: THEME.primary,
    borderRadius: THEME.radius,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});