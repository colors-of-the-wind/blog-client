import * as Types from '../../actions/types'

const initialState = {
	username: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case Types.SET_USERINFO:
			return { ...state, ...action.payload }
		default:
			return state
	}
}