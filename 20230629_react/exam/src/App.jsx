import './App.css'
import Button from './components/Button.jsx'
import Heading from './components/Heading.jsx'
import Flex from './components/Flex.jsx'

function App() {
  return (
    <>
      <Flex>
        <Heading title="안녕하세요"/>
        <Button title="1번버튼" color="red" size="20px"/>
        <Button title="2번버튼" color="green" size="30px"/>
        <Button title="3번버튼" color="gray" size="40px"/>
      </Flex>
    </>
  )
}

export default App
