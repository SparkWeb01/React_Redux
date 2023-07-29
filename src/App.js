import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, getCustomerAction } from './store/customerReducer';
function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const addMoney = (cash) =>{
    dispatch({type:'ADD_MONEY', payload: cash})
  }
  const getMoney = (cash) =>{
    dispatch({type:'GET_MONEY', payload: cash})
  }
  const addCustomer = (name) =>{
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  const remCustomer = (customer) =>{
    dispatch(getCustomerAction(customer))
  }
  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={()=>addMoney(Number(prompt()))}>Добавить деньги</button>
      <button onClick={()=>getMoney(Number(prompt()))}>Снять деньги</button>
      <button onClick={()=>addCustomer(prompt())}>Добавить Клиента</button>
      <button onClick={()=>dispatch(fetchCustomers())}>Добавить Клиентов из Базы Данных</button>
      {customers.length > 0
      ?
      <div>
        {customers.map(customer=>
          <div onClick={()=>remCustomer(customer.id)} style={{cursor: 'pointer', display: 'flex', maxWidth: '100px', margin: '10px', border:'2px solid black'}}>
            {customer.name}
          </div>
          )}
      </div>
      :
      <div> 
        Клиенты отсутствуют
      </div>
    }
    </div>
  );
}
export default App;
