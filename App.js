
import 'react-native-gesture-handler';
import  React from 'react';
import { View, Text, StatusBar} from 'react-native';
import  Home  from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator(); 
const Test = () => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  )
  
}

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        options={{
          headerShown: false
        }}
        >
          {(props) => <Home {...props} username="This is the jedi master." />}
        </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
