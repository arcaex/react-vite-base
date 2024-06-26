import './App.css'
import Menu from './components/menu/Menu'
import Layout from './components/layout/Layout'
import Formulario from './components/form/Form'

function App() {

  return (
    <>
    <div className='main'>
      <Menu></Menu>
      <Formulario></Formulario>
      <Layout></Layout>
    </div>
    </>
  )
}

export default App
