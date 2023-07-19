
import {useContext} from 'react'
import {AppContext} from '../App'
import { CounterContext } from './Counter'

const SubCounter = (props) => {
    const {count, setCount} = useContext(AppContext)
    const {title} = useContext(CounterContext)
    return (
      <>
      <h1>{title}</h1>
        <h3>{count}</h3>
        
        <button onClick={()=>setCount(count+1)}>Add</button>
        
      </>
    )
  }
export default SubCounter