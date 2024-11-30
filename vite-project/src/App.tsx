import { Button } from "@mui/material"
import styles from './App.module.scss'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { inc_one, dec_one, inc_five, dec_five, random_num } from "./actions"
import { InitialState } from "./reducer"
import { bindActionCreators } from "redux"

const useTypeSelector: TypedUseSelectorHook<InitialState> = useSelector;

function App() {
  const dispatch = useDispatch()
  const counter = useTypeSelector((state) => state.value);

  const actions = bindActionCreators({ inc_one, dec_one, inc_five, dec_five, random_num }, dispatch)

  const handleSetRandomNum = () => {
      const randomValue = Math.floor(Math.random() * 100)
      actions.random_num(randomValue)
  }

  return (
    <div className={styles.container}>
      <div className={styles.counter}>{counter}</div>

      <div className={styles.wrapper}>
          <Button variant="contained" onClick={actions.inc_one}>+1</Button>
          <Button variant="contained" onClick={actions.dec_one}>-1</Button>
          <Button variant="contained" onClick={actions.inc_five}>+5</Button>
          <Button variant="contained" onClick={actions.dec_five}>-5</Button>
          <Button variant="contained" onClick={handleSetRandomNum}>RANDOM</Button>
      </div>
    </div>
  )
}

export default App
