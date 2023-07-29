const defaultState ={
    customers: []
  }
const ADD_CUSTOMER = 'ADD_СUSTOMER'
const GET_CUSTOMER = 'GET_CUSTOMER'
const ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER'
export const customerReducer = (state = defaultState, action) =>{
    switch (action.type) {
      case ADD_MANY_CUSTOMER :
        return  {...state, customers: [...state.customers, ...action.payload]}
      case ADD_CUSTOMER :
        return  {...state, customers: [...state.customers, action.payload]}
      case GET_CUSTOMER :
        return  {...state, customers: state.customers.filter(customer=> customer.id !== action.payload)}
      default:
        return state
    }
  }
export const addCustomerAction = (payload) =>({type: ADD_CUSTOMER, payload})
export const getCustomerAction = (payload) =>({type: GET_CUSTOMER, payload})
export const addManyCustomerAction = (payload) =>({type: ADD_MANY_CUSTOMER, payload})