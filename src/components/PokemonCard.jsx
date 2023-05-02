import { useNavigation } from '@react-navigation/core';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useColor } from 'color-thief-react';

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({ pokemon }) => {
	const [bgColor, setBgColor] = useState('gray');
	const isMounted = useRef(true);
	const navigation = useNavigation;

	useEffect(() => {
		const { data, loading, error } = useColor(pokemon.picture);

		console.log(data, loading, error);
		setBgColor(data);
	}, []);

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={() =>
				navigation.navigate('PokemonScreen', {
					simplePokemon: pokemon,
					color: bgColor,
				})
			}
		>
			<View
				style={{
					...styles.container,
					backgroundColor: bgColor,
				}}
			>
				<Text style={styles.nombre}>
					{pokemon.name.toUpperCase()}
					{'\n#' + pokemon.id}
				</Text>
				<Image
					source={require('../assets/pokebola-blanca.png')}
					style={styles.pokebola}
				/>
				<Image source={{ uri: pokemon.picture }} style={styles.pokemon} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: windowWidth * 0.5 - 15,
		height: windowWidth * 0.4 - 15,
		borderRadius: 20,
		marginBottom: 10,
		marginLeft: 10,
		flexDirection: 'column',
		justifyContent: 'space-around',
		elevation: 10,

		// Sombras en IOS

		// shadowColor: '#000',
		// shadowOffset: {
		//     width: 5,
		//     height: 5,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 20,
	},

	nombre: {
		color: '#fff',
		marginLeft: 15,
		marginTop: 15,
		fontSize: 12,
	},
	pokebola: {
		width: 110,
		height: 110,
		position: 'absolute',
		opacity: 0.2,
		right: -20,
		bottom: -20,
		zIndex: -100,
	},
	pokemon: {
		width: 90,
		height: 90,
		alignSelf: 'flex-end',
	},
});
