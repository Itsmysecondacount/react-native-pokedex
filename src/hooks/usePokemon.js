import React, { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemon = (id) => {
	const [isLoading, setIsLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const loadPokemon = async () => {
		const resp = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		setPokemon(resp.data);
		setIsLoading(false);
	};

	useEffect(() => {
		loadPokemon();
	}, []);

	return { isLoading, pokemon };
};
