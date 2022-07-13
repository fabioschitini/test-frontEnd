import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

    

const Navs = (props) => {
    const navigate=useNavigate()

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
           <Link to="/login">  <Nav.Link  href="#home">Login</Nav.Link></Link>
           <Link to="/cliente">  <Nav.Link  href="#home">Cliente</Nav.Link></Link>
           <Link to="/produto">  <Nav.Link  href="#home">Produto</Nav.Link></Link>
           <Link to="/venda">  <Nav.Link  href="#home">Venda</Nav.Link></Link>
           <Link to="/pedidos">  <Nav.Link  href="#home">Pedidos</Nav.Link></Link>

           </Nav>
         
         </Navbar.Collapse>
         </Container>
       </Navbar>
      
        
        
   

              
           
     </div>
    )
}
export default Navs