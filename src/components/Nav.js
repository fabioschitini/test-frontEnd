import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://test-sorocaba.herokuapp.com/",
  
})


const Navs = (props) => {
   const navigate=useNavigate()
    function logOut(){
      instance.get("/logout")
      .then(function (response) {
        props.setUserData(response.data.user)
        navigate('/')
      })

  }

    //console.log(props.userData)
    return (
       <div> 

         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
         <Container>
         <Navbar.Brand href="#home">Portfolio Blog</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
           <Link to="/">  <Nav.Link href="#home">Sign-in</Nav.Link></Link>   
{props.user?
<Link to="/">  <Nav.Link onClick={logOut} href="#home">Log Out</Nav.Link></Link>
 :
<Link to="/login">  <Nav.Link  href="#home">Login</Nav.Link></Link>
}
{props.user?
<Link to="/cliente">  <Nav.Link  href="#home">Cliente</Nav.Link></Link>
 :null}
 {props.user?
<Link to="/produto">  <Nav.Link  href="#home">Produto</Nav.Link></Link> 
      :null}
{props.user?
<Link to="/venda">  <Nav.Link  href="#home">Venda</Nav.Link></Link>
:null}
<Link to="/pedidos">  <Nav.Link  href="#home">Pedidos</Nav.Link></Link>
           </Nav>
         
         </Navbar.Collapse>
         </Container>
       </Navbar>
      
        
        
   

              
           
     </div>
    )
}
export default Navs