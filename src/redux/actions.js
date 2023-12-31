
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types'
import axios from "axios";

export const addFav = (character) => {
    const endpoint = 'https://rick-and-morty-server.onrender.com/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)

            if(!data) throw new Error('There was no data')

            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
            
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const removeFav = (id) => {
    const endpoint = `https://rick-and-morty-server.onrender.com/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(endpoint)

            if(!data) throw new Error('There was no data')

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
            
        } catch (error) {
            console.log(error.message);
        }
        
    };
};

export const filterCards = (gender) => {

    return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {

    return { type: ORDER, payload: order }
}