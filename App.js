import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventList from "./components/EventList";
import EventForm from "./components/EventForm";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={style.navContainer}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={EventList} />
        <Stack.Screen name="Add Event" component={EventForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  navContainer: {
    textAlign: 'center'
  }
})

export default App;