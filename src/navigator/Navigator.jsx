import { View } from 'react-native';
import HomeScreen from '../components/HomeScreen';
import PokemonScreen from '../components/PokemonScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Navigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				title: false,
				cardStyle: {
					backgroundColor: '#f9f9f9',
					flex: 1,
					justifyContent: 'space-around',
					alignItems: 'center',
				},
			}}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="PokemonScreen" component={PokemonScreen} />
		</Stack.Navigator>
	);
};
