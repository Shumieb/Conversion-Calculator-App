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
    paddingTop: 25,
    paddingBottom: 20
  }
})
