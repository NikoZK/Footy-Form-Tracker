import { StyleSheet } from "react-native"

export const THEME = {
  primary: "#51833a",
  primaryDark: "#12381f",
  background: "#eef3ee",
  surface: "rgba(255,255,255,0.95)",
  text: "#132018",
  textMuted: "#5c6b61",
  border: "#d8e0d7",
  error: "#FF3B30",
  radius: 12,
}

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: THEME.background,
    alignItems: "center",
    padding: 20,
  },
  screenBackground: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  screenOverlay: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(238, 243, 238, 0.82)",
  },

  homeOverlay: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "rgba(238, 243, 238, 0.27)",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: THEME.radius,
    padding: 22,
    width: "100%",
    borderWidth: 1,
    borderColor: THEME.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  formGroup: {
    marginBottom: 16,
    width: "100%",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: THEME.text,
    marginBottom: 8,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: THEME.textMuted,
    marginBottom: 24,
    textAlign: "center",
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    margin: 12,
    textAlign: "center",
  },

  decidedText: {
    fontSize: 18,
    fontWeight: "600",
    color: THEME.primary,
    margin: 12,
  },

  input: {
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 8,
    fontSize: 16,
    color: THEME.text,
    width: "100%",
  },

  inputAfter: {
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 8,
    fontSize: 16,
    color: THEME.text,
    width: "100%",
  },

  button: {
    backgroundColor: THEME.primary,
    borderRadius: THEME.radius,
    paddingVertical: 14,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },

  mapButton: {
    backgroundColor: "#22aeff",
    borderRadius: THEME.radius,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },

  deleteButton: {
    backgroundColor: "#f01e1e",
    borderRadius: THEME.radius,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },

  deleteText: {
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: '600'
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  group: {
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    padding: 12,
    margin: 8,
    alignItems: "start",
    backgroundColor: "rgba(255, 255, 255, 0.93)",
    minHeight: 92,
    justifyContent: "center",
  },

  groupLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: THEME.textMuted,
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },
  optionButton: {
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#ffffff",
  },
  optionText: {
    fontSize: 14,
    color: THEME.text,
  },

  statText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    margin: 12,
    textAlign: "left",
  },
})
