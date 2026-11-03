import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import Home from './src/screens/Home';
import Detalhes from './src/screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Filmes' }} />
          <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={{ title: 'Detalhes do filme' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
