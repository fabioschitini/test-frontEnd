import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import SignIn from './components/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Cliente from './components/CadastroClientes'
import Produto from './components/CadastroProduto'
import Venda from './components/CadastroDeVenda'
import Tab from './components/PedidosTab'



//import PostUpdate from './components/PostUpdate'

import Axios from 'axios'
const instance = Axios.create({
  baseURL: "https://test-sorocaba.herokuapp.com/",
  withCredentials:true

});


function App() {
  const [userData,setUserData]=useState(undefined)




  useEffect(()=>{
    instance.get("/login").then((response)=>{
     if(!response){
      setUserData(undefined)
     
     }
     else{ 
      setUserData(response.data.user)
    //setBackendDataPost(response.data.post) }

  }
    
    
})
  },[])


  return (
    <div className="App">
  
      <div className="App">
      <Router>
      <Nav user={userData} setUserData={setUserData} /> 
           <Routes>
           <Route exact path='/' element={<SignIn />}/>
           <Route exact path='/login' element={<Login  user={userData} setUserData={setUserData}/>}/>
           <Route exact path='/cliente' element={<Cliente user={userData} />}/>
           <Route exact path='/produto' element={<Produto user={userData} />}/>
           <Route exact path='/venda' element={<Venda user={userData} />}/>
           <Route exact path='/pedidos' element={<Tab user={userData} />}/>
           </Routes>
         </Router>
       </div>
    </div>
  );


}

export default App;

