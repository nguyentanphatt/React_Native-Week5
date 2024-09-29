import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ItemDetail from './components/ItemDetail'
import Color from './components/Color'
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Item Page" component={ItemDetail}/>
        <Stack.Screen name="Color Page" component={Color}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


