import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';


import RotasTab from './pages/RotasTabs.js';
export default function App() {
  return (
   <NavigationContainer>

    <RotasTab  />

   </NavigationContainer>
  );
}

