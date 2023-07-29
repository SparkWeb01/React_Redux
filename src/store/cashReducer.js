const defaultState ={
    cash: 0
  }
  
export const cashReducer = (state = defaultState, action) =>{
    switch (action.type) {
      case 'ADD_MONEY':
        return  {...state, cash: state.cash + action.payload}
      case 'GET_MONEY':
        return  {...state, cash: state.cash - action.payload}
      default:
        return state
    }
  }