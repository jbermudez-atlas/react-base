import * as ItemsConst from '../constants'
import createReducer from '../shared/create-reducer';
const initialState = []

function itemsRequest( state, action ){ return state }

function itemsError( state, action ){ return state }

function itemsSucess(state, action) {
	return { ...state, data: action.result }
}

	/*
	switch (action.type) {

		case ITEMS_SUCESS:
		return { ...state, data: action.data }

		case CHANGE_ITEM_STATE:
			state.data.map(function (item, id) {
				if (item.id === action.id) {
			    item.removed = !item.removed
					}
					items.push(item)
				})

		return { ...state, data: items }

			default:
				return state
	  }
}*/


const handlers ={
	[ItemsConst.ITEMS_REQUEST]: itemsRequest,
	[ItemsConst.ITEMS_SUCESS]: itemsSucess,
	[ItemsConst.ITEMS_ERROR]: itemsError,
}

export default createReducer( initialState, handlers );
