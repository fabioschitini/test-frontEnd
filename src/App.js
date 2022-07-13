import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Cliente from './components/CadastroClientes'
import Produto from './components/CadastroProduto'
import Venda from './components/CadastroDeVenda'
import Pedido from './components/sub-components/Pedidos'
import Tab from './components/PedidosTab'



//import PostUpdate from './components/PostUpdate'


function App() {
  const [backendDataPost,setBackendDataPost]=useState([{}])
  const [userData,setUserData]=useState(undefined)
//baby do bab do birulaibe laibe'


  return (
    <div className="App">
  
      <div className="App">
      <Router>
      <Nav /> 
           <Routes>
           <Route exact path='/' element={<SignIn />}/>
           <Route exact path='/login' element={<Login />}/>
           <Route exact path='/cliente' element={<Cliente />}/>
           <Route exact path='/produto' element={<Produto />}/>
           <Route exact path='/venda' element={<Venda />}/>
           <Route exact path='/pedidos' element={<Tab />}/>


           </Routes>
         </Router>
       </div>
    </div>
  );


}

export default App;

