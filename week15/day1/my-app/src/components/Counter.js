import {useContext, createContext, useState} from 'react'
import {AppContext} from '../App'
import SubCounter from './SubCounter'

export const CounterContext = createContext(null)

const Counter = (props) => {
    const [title, setTitle] = useState('Hello USER')
    const {count} = useContext(AppContext)
    return (
      <>
        <h3>{count}</h3>
        <CounterContext.Provider value={{title}}>
        <SubCounter />
        </CounterContext.Provider>
      </>
    )
  }
export default Counter