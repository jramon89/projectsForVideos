import { ADD_COMPUTER, DELETE_COMPUTER } from './actionsTypes';

export function addComputer(name){
	return {
		type: ADD_COMPUTER,
		name: name
	}
}


export function deleteComputer(id){
	return{
		type: DELETE_COMPUTER,
		id: id
	}

}