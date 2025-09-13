import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#fcfdfe',
                tabBarInactiveTintColor: "#eaebef",
                tabBarStyle: {
                    backgroundColor: "#e64459",
                    borderColor: "#e64459"
                },
                tabBarLabelStyle: {
                    fontSize: 12
                },
                headerStyle: {
                    backgroundColor: '#e64459',
                    shadowOpacity: 0,
                    elevation: 0,
                    height: 90
                },
                headerTintColor: '#fcfdfe',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: "center"
            }}
        >
            <Tabs.Screen
                name="LengthConversions"
                options={{
                    title: "Length Conversions",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome5
                            name={focused ? 'tape' : 'tape'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="TempConversions"
                options={{
                    headerShown: false,
                    title: "Temperature Conversions",
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome5
                            name={focused ? 'thermometer-full' : 'thermometer-empty'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="WeightConversions"
                options={{
                    headerShown: false,
                    title: "Weight Conversions",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'weight' : 'weight'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default TabLayout