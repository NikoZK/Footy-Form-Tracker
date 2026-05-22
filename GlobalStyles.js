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
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
    margin: 12,
    textAlign: 'center'
  },

  input: {
    width: '100%',
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 8,
    fontSize: 16,
    color: THEME.text,
  },

  button: {
    backgroundColor: '#fffef8',
    borderRadius: THEME.radius,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  group: {
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    padding: 12,
    margin: 8,
    alignItems: 'center'
  },
  groupLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: THEME.textMuted,
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius - 4,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  optionText: {
    fontSize: 14,
    color: THEME.text,
  },
});