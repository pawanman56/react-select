
import { useState } from "react"
import { Select, SelectOption } from "./Select"

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
]

function App() {
  const [valueMul, setValueMul] = useState<SelectOption[]>([options[0]])
  const [valueS, setValueS] = useState<SelectOption | undefined>(options[0])

  return (
    <>
      <Select multiple options={options} value={valueMul} onChange={option => setValueMul(option)}/>
      <br/>
      <Select options={options} value={valueS} onChange={option => setValueS(option)}/>
    </>
  )
}

export default App
