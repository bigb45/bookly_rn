# Bookly (React Native / Expo)

This is a minimal Expo React Native scaffold that mirrors the Flutter `bookly` app structure.

What I created:

- Expo project scaffold (package.json)
- `App.js` with bottom tab navigation (Home, Customers, POS, Assistant)
- `HomeEventsHubScreen` with platform-adaptive segmented control and two tabs (Dashboard, Calendar)
- Simple `DashboardTab` and `CalendarTab` (placeholder for vertical day view)
- `CustomersScreen`, `POSScreen`, `AssistantScreen` (with toast)

How to run:

1. Install dependencies:

```bash
cd bookly_rn
npm install
# or yarn
```

2. Start Expo:

```bash
npm run start
# or
expo start
```

3. Open on iOS simulator or Android emulator or Expo Go on device.

Notes / next steps:

- The calendar is a placeholder using `react-native-calendars`. To fully match the Flutter Syncfusion vertical timeline + resources view, you'd implement a custom vertical scheduler or integrate a library that supports resource columns.
- Add state management (Context/Redux/MobX) to mirror providers in Flutter.
- Port over styling tokens from Flutter `CustomTheme`.
- Add appointment creation, details modals, employee resources, and routing as needed.

This scaffold gives you a runnable starting point to port the Flutter app to React Native.
