import { Text, View } from "react-native";
import { Link, Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-blue-950"
    >
        <Text
            className="text-5xl color-amber-50"
        >
          jetsetEngine
        </Text>
        <StatusBar style="auto" />
        <Link href={"/profile"} style={{color:'green'}}>Visit Profile</Link>
    </View>
  );
}
