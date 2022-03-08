import "./http/axios";
import react, { useEffect } from "react";
import TabScreenA from "./screens/TabScreenA"; //引入
import TabScreenB from "./screens/TabScreenB"; //引入
import TabScreenC from "./screens/TabScreenC"; //引入
import ScreenG from "./screens/stackScreen/ScreenG"; //引入
import ScreenE from "./screens/stackScreen/ScreenE"; //引入
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { State } from "./context/state";
import { AntDesign } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#1296db",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let icon;
          if (route.name === "页面A") {
            icon = focused ? (
              <Image
                source={require("./assets/images/react1.png")}
                style={{ width: 29, height: 25 }}
              />
            ) : (
              <Image
                source={require("./assets/images/react.png")}
                style={{ width: 27.5, height: 25 }}
              />
            );
          } else if (route.name == "页面B") {
            icon = focused ? (
              <Image
                source={require("./assets/images/react1.png")}
                style={{ width: 29, height: 25 }}
              />
            ) : (
              <Image
                source={require("./assets/images/react.png")}
                style={{ width: 29, height: 25 }}
              />
            );
          } else if (route.name === "页面C") {
            icon = focused ? (
              <Image
                source={require("./assets/images/react1.png")}
                style={{ width: 31, height: 25 }}
              />
            ) : (
              <Image
                source={require("./assets/images/react.png")}
                style={{ width: 29, height: 25 }}
              />
            );
          }
          return icon;
        },
      })}
    >
      <Tab.Screen name="页面A" component={TabScreenA} />
      <Tab.Screen name="页面B" component={TabScreenB} />
      <Tab.Screen name="页面C" component={TabScreenC} />
    </Tab.Navigator>
  );
}
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const barHeight = getStatusBarHeight();
  useEffect(() => {
    console.log("height", getStatusBarHeight());
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <State>
        <View style={{ flex: 1, marginTop: barHeight }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="TabScreenA"
                component={HomeTabs}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Screen_G"
                component={ScreenG}
                options={{
                  title: "Stack页面",
                  headerTitleStyle: { fontSize: 15 },
                  headerStyle: { backgroundColor: "#1296db" },
                }}
              />
              <Stack.Screen
                name="Screen_E"
                component={ScreenE}
                options={{
                  title: "详情",
                  headerTitleStyle: { fontSize: 15 },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </State>
    );
  }
}
const styles = StyleSheet.create({});
