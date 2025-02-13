import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (

    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          href: null,
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notes',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          href: null,
        }}
      />
      <Tabs.Screen
        name="lab_3"
        options={{
          title: 'Lab 3',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          href: null,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          tabBarStyle: {display: 'none'}, // Hide the nav bar when in the login screen
          href: null,
        }}
      />
      <Tabs.Screen
        name="yyc"
        options={{
          title: 'Calgary',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="mountain-city" color={color} />,
        }}
      />
      <Tabs.Screen
        name="yeg"
        options={{
          title: 'Edmonton',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="tree-city" color={color} />,
        }}
      />
      <Tabs.Screen
        name="welcome"
        options={{
          title: 'Welcome',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="tree-city" color={color} />,
          href: null,
        }}
      />
    </Tabs>
  );
}
