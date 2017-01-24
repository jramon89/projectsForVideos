import { ADD_COMPUTER, DELETE_COMPUTER } from '../actions/actionsTypes';
const init = [{name: 'Asus'}]
export default function(state=init, action){
	switch(action.type){
		case ADD_COMPUTER:
			return  [
				...state,
				{name: action.name}
			]
			break;
		case DELETE_COMPUTER:
			return []
			break;
		default:
			return state;
	}
}