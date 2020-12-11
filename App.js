import React from 'react';
import { KeyboardAvoidingView, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';
enableScreens();

const AppStack = createStackNavigator();

function Screen1() {
  const [value, onChangeText] = React.useState('');
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder='Input'
        style={{ borderWidth: 1, width: '75%', padding: 10 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </ScrollView>
  );
}

const USE_REACT_NAVIGATION = true;

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
        {
          USE_REACT_NAVIGATION ?
              <NavigationContainer>
                <AppStack.Navigator>
                  <AppStack.Screen name='App' component={Screen1} />
                </AppStack.Navigator>
              </NavigationContainer>
            :
              <Screen1 />
        }
      </KeyboardAvoidingView>
    );
  }
}
