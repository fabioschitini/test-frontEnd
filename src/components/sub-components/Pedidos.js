import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
const instance = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
  
})


const Pedido = (props) => {
 
const [vendaData,setVendaData]=useState()

  useEffect(()=>{
    instance.get("/venda").then((response)=>{
     if(!response){
      setVendaData(undefined)
     }
     else{ console.log('response',response.data)
     setVendaData(response.data)
  }
})
  },[])


    return (
        <div>

    <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       
                <div>
              
             <div className="col">
               <div className="card shadow-sm">
     
                 <div style={{padding:"20px"}} className="card-body">
                   <p  className="card-text">Cliente</p>
                   <p  className="card-text">Produto</p>
                   <p  className="card-text">Quantidade</p>
                   <p  className="card-text">Valor</p>
                   <p  className="card-text">Status:</p>

                   <div className="d-flex justify-content-between align-items-center">
                     <div className="btn-group">
                    
                       <button   type="button" className="btn btn-sm btn-outline-secondary">Aprovar pedido</button>
                     </div>
                     <small className="text-muted">9 mins</small>
                   </div>
                 </div>
               </div>
             </div>
     </div>

           </div>
</div>
</div>

 </div>);
             
      
   
}




export default Pedido