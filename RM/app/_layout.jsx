import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
        }} />
      <Tabs.Screen
        name='Card'
        options={{ title: '${props.name}',
          href: null,
        }} />
      <Tabs.Screen
        name='settings'
        options={{
          title:'Settings'
        }} />
    </Tabs> 
  )
}
