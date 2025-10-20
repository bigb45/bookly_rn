import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarBlank } from "phosphor-react-native";
import QuickActions from "../../components/QuickActions";
import { useTheme } from "../../theme/useTheme";

interface Stat {
  title: string;
  value: string;
  color: string;
}

interface Appointment {
  id: number;
  name: string;
  service: string;
  time: string;
  price: string;
  status: string;
}

const DashboardTab: React.FC = () => {
  const theme = useTheme();

  // Hardcoded sample values for the scaffold. Replace with real data later.
  const stats: Stat[] = [
    { title: "Total Appointments", value: "4", color: "#2F6BFF" },
    { title: "Confirmed", value: "2", color: "#2BC48A" },
    { title: "Completed", value: "1", color: "#66B3FF" },
    { title: "Today's Revenue", value: "$65", color: "#FF6BA6" },
  ];

  const appointments: Appointment[] = [
    {
      id: 1,
      name: "Alice Williams",
      service: "Haircut",
      time: "9:30 AM",
      price: "$65",
      status: "Confirmed",
    },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
    >
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryLight]}
        style={[styles.welcomeCard, { borderRadius: theme.borderRadius.lg }]}
      >
        <Text style={[styles.greeting, theme.typography.headlineMedium]}>
          Good Evening
        </Text>
        <Text style={[styles.welcomeTitle, theme.typography.displayMedium]}>
          Welcome back to Bookly
        </Text>
        <Text style={[styles.welcomeSubtitle, theme.typography.bodyLarge]}>
          Here's what's happening today
        </Text>
      </LinearGradient>

      <View style={{ height: theme.spacing.lg }} />

      <View style={styles.statsGrid}>
        {stats.map((s, i) => (
          <View
            key={i}
            style={[
              styles.statCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
                borderRadius: theme.borderRadius.lg,
                ...theme.shadows.sm,
              },
            ]}
          >
            <View
              style={[
                styles.statIcon,
                {
                  backgroundColor: s.color + "1A",
                  borderRadius: theme.borderRadius.md,
                },
              ]}
            >
              <CalendarBlank size={18} color={s.color} weight="fill" />
            </View>
            <Text style={[theme.typography.displaySmall, { color: s.color }]}>
              {s.value}
            </Text>
            <Text
              style={[
                theme.typography.labelMedium,
                {
                  color: theme.colors.textSecondary,
                  marginTop: theme.spacing.xs,
                },
              ]}
            >
              {s.title}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ height: theme.spacing.lg }} />

      <Text
        style={[theme.typography.headlineMedium, { color: theme.colors.text }]}
      >
        Today's Appointments
      </Text>
      <View style={{ height: theme.spacing.sm }} />

      {appointments.map((a) => (
        <View
          key={a.id}
          style={[
            styles.appointmentCard,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
              borderRadius: theme.borderRadius.lg,
            },
          ]}
        >
          <View>
            <Text
              style={[
                theme.typography.titleLarge,
                { color: theme.colors.text, marginBottom: theme.spacing.xs },
              ]}
            >
              {a.name}
            </Text>
            <Text
              style={[
                theme.typography.bodyMedium,
                {
                  color: theme.colors.textSecondary,
                  marginBottom: theme.spacing.xs,
                },
              ]}
            >
              ✂️ {a.service}
            </Text>
            <Text
              style={[
                theme.typography.bodyMedium,
                {
                  color: theme.colors.textSecondary,
                  marginBottom: theme.spacing.xs,
                },
              ]}
            >
              ⏱️ {a.time} (60min)
            </Text>
            <View
              style={[
                styles.statusPill,
                { borderRadius: theme.borderRadius.md },
              ]}
            >
              <Text style={[theme.typography.labelSmall, styles.statusText]}>
                {a.status}
              </Text>
            </View>
          </View>
          <Text
            style={[
              theme.typography.headlineMedium,
              { color: theme.colors.primary },
            ]}
          >
            {a.price}
          </Text>
        </View>
      ))}

      <QuickActions />
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeCard: {
    marginTop: 16,
    padding: 24,
  },
  greeting: {
    color: "rgba(255,255,255,0.95)",
  },
  welcomeTitle: {
    color: "#fff",
    marginTop: 4,
  },
  welcomeSubtitle: {
    color: "rgba(255,255,255,0.85)",
    marginTop: 6,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  statIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  appointmentCard: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusPill: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  statusText: {
    color: "#2BC48A",
    fontWeight: "600",
  },
});

export default DashboardTab;
