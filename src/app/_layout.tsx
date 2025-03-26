import { router, Slot, Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="newsArticle/[id]"
          options={{
            headerTitle: "",
            headerLeft: () => (
              <Ionicons
                name="chevron-back"
                size={25}
                color={"black"}
                onPress={() => router.back()}
              />
            ),
            headerRight: () => {
              return (
                <View
                  style={{
                    gap: 10,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Ionicons
                    name="share-outline"
                    size={20}
                    color={"black"}
                    style={{
                      backgroundColor: "#EEEEEE",
                      borderRadius: 15,
                      padding: 5
                    }}
                  />
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color={"black"}
                    style={{
                      backgroundColor: "#EEEEEE",
                      borderRadius: 15,
                      padding: 2
                    }}
                  />
                </View>
              );
            }
          }}
        />
      </Stack>
    </PaperProvider>
  );
}
