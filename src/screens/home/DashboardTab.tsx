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
      style={styles.container}
      contentContainerStyle={{ padding: 16 }}
    >
      <View style={styles.segmentWrap}>
        <View style={styles.segmentInner}>
          <TouchableOpacity
            style={[
              styles.segmentBtn,
              styles.segmentBtnLeft,
              { backgroundColor: "#1976FF" },
            ]}
            activeOpacity={0.9}
          >
            <Text style={[styles.segmentText, { color: "#fff" }]}>
              Dashboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segmentBtn, styles.segmentBtnRight]}
            activeOpacity={0.9}
          >
            <Text style={styles.segmentText}>Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <LinearGradient
        colors={["#1E66FF", "#4D8DFF"]}
        style={styles.welcomeCard}
      >
        <Text style={styles.greeting}>Good Evening</Text>
        <Text style={styles.welcomeTitle}>Welcome back to Bookly</Text>
        <Text style={styles.welcomeSubtitle}>
          Here's what's happening today
        </Text>
      </LinearGradient>

      <View style={{ height: 24 }} />

      <View style={styles.statsGrid}>
        {stats.map((s, i) => (
          <View key={i} style={styles.statCard}>
            <View
              style={[styles.statIcon, { backgroundColor: s.color + "1A" }]}
            >
              <CalendarBlank
                size={18}
                color={s.color}
                weight="fill"
              />
            </View>
            <Text style={[styles.statValue, { color: s.color }]}>
              {s.value}
            </Text>
            <Text style={styles.statTitle}>{s.title}</Text>
          </View>
        ))}
      </View>

      <View style={{ height: 24 }} />

      <Text style={styles.sectionTitle}>Today's Appointments</Text>
      <View style={{ height: 12 }} />

      {appointments.map((a) => (
        <View key={a.id} style={styles.appointmentCard}>
          <View>
            <Text style={styles.appName}>{a.name}</Text>
            <Text style={styles.appMeta}>✂️ {a.service}</Text>
            <Text style={styles.appMeta}>⏱️ {a.time} (60min)</Text>
            <View style={styles.statusPill}>
              <Text style={styles.statusText}>{a.status}</Text>
            </View>
          </View>
          <Text style={styles.appPrice}>{a.price}</Text>
        </View>
      ))}

      <QuickActions />
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FBFBFF" },
  segmentWrap: { paddingTop: 8, paddingHorizontal: 16 },
  segmentInner: {
    width: "100%",
    height: 44,
    backgroundColor: "#F7F7FB",
    borderRadius: 22,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  segmentBtn: { flex: 1, alignItems: "center", justifyContent: "center" },
  segmentBtnLeft: { borderTopLeftRadius: 22, borderBottomLeftRadius: 22 },
  segmentBtnRight: { borderTopRightRadius: 22, borderBottomRightRadius: 22 },
  segmentText: { color: "#0A0A0A", fontWeight: "600" },

  welcomeCard: {
    marginTop: 16,
    borderRadius: 16,
    padding: 24,
    backgroundColor: "#2F6BFF",
  },
  greeting: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 20,
    fontWeight: "300",
  },
  welcomeTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 4,
  },
  welcomeSubtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 15,
    marginTop: 6,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(10,10,10,0.04)",
  },
  statIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  statValue: { fontSize: 28, fontWeight: "700" },
  statTitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
    fontWeight: "500",
  },

  sectionTitle: { fontSize: 20, fontWeight: "700" },

  appointmentCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(10,10,10,0.04)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appName: { fontSize: 17, fontWeight: "600", marginBottom: 6 },
  appMeta: { fontSize: 14, color: "#666", marginBottom: 4 },
  statusPill: {
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  statusText: { fontSize: 12, color: "#2BC48A", fontWeight: "600" },
  appPrice: { fontSize: 20, fontWeight: "700", color: "#2F6BFF" },
});

export default DashboardTab;
