export interface InitialState {
    value: number
}

type Action = 
  | { type: 'INC_ONE' }
  | { type: 'DEC_ONE' }
  | { type: 'INC_FIVE' }
  | { type: 'DEC_FIVE' }
  | { type: 'RANDOM_NUM', payload: number}

const initialState: InitialState = {value: 0}

const reducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case 'INC_ONE': 
            return {
                ...state,
                value: state.value + 1
            }
        case 'DEC_ONE': 
            return {
                ...state,
                value: state.value - 1
            }
        case 'INC_FIVE': 
            return {
                ...state,
                value: state.value + 5
            }
        case 'DEC_FIVE': 
            return {
                ...state,
                value: state.value - 5
            }
        case 'RANDOM_NUM':
            return {
                ...state,
                value: action.payload
            }
        default: return state;
    }
}

export default reducer