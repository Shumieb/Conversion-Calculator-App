import CustomScreenFooter from '@/components/CustomScreenFooter';
import HomeNavCard from '@/components/HomeNavCard';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <StatusBar style="light" />

      <View style={{ marginTop: 8 }}>
        <HomeNavCard
          title="Length Conversions"
          icon="length"
        />
        <HomeNavCard
          title="Temperature Conversions"
          icon="temp"
          extraPadding={true}
        />
        <HomeNavCard
          title="Weight Conversions"
          icon="weight"
        />
      </View>

      <CustomScreenFooter />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#eaebef",
    marginTop: 25,
    paddingBottom: 20
  },
  card: {
    backgroundColor: "#fcfdfe",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 5,
    marginBottom: 15,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    color: "#e64459",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  iconContainer: {
    backgroundColor: "#e64459",
    padding: 6,
    borderRadius: "50%"
  },
  extraPadding: {
    paddingHorizontal: 12
  }
})
