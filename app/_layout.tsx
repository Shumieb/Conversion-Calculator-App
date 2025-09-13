import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e64459',
        },
        headerTintColor: '#fcfdfe',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: "center"
      }}
    >

      <Stack.Screen
        name="index"
        options={{
          title: "Conversion App"
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false
        }}
      />

    </Stack>
  )
}
