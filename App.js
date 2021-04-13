
import 'react-native-gesture-handler';
import  React from 'react';
import { View, Text, StatusBar} from 'react-native';
import  Home  from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import Tickets from './tickets';
import Contact from './Contact';
import TicketPurchase from './TicketPurchase';
import News from './News';


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
          {(props) => <Home {...props} username="This is the jedi master." lightsaber="Blue" />}
        </Stack.Screen>
        <Stack.Screen
          name='Tickets'
          component={Tickets}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'}
          }}
        />
        <Stack.Screen
          name='Contact'
          component={Contact}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
            headerTitle: 'Contact Us'
          }}

        />
        <Stack.Screen
          name='Purchase'
          component={TicketPurchase}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
            headerTitle: 'Purchase Tickets'
          }}
        />
        <Stack.Screen
          name='News'
          component={News}
          options={{
            headerTittleAlign: 'center',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
            headerTitle: 'Latest News'
          }}
        />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
