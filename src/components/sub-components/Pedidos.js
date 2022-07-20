import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://test-sorocaba.herokuapp.com/",

  
})


const Pedido = (props) => {

  const navigate = useNavigate();

 
const [vendaData,setVendaData]=useState([])

  useEffect(()=>{
    instance.get("/venda").then((response)=>{
     if(!response){
      setVendaData(undefined)
     }
     else{
     setVendaData(response.data.venda.rows)
  }
})
  },[])

function aprovar(e){
  console.log(e,"idddddd")
  instance.put(`/venda`,{id:e.target.id}).then(result=>{console.log(result)})
  navigate('/')

}
    return (
        <div>

    <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       
            {vendaData.filter(ven=>ven.status===props.status).map(venda=>{
              return(
<div>
              
              <div className="col">
                <div className="card shadow-sm">
      
                  <div style={{padding:"20px"}} className="card-body">
                    <p  className="card-text">CNPJ do Cliente:{venda.cliente}</p>
                    <p  className="card-text">Codigo do Produto:{venda.produto}</p>
                    <p  className="card-text">Quantidade:{venda.quantidade}</p>
                    <p  className="card-text">Valor:{venda.valor}</p>
                    <p  className="card-text">Status:{venda.status}</p>
 
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        {props.status==="PROCESSO"?
                          props.user?
                            <button id={venda.venda_id} onClick={aprovar} type="button" className="btn btn-sm btn-outline-secondary">Aprovar pedido</button>
                            :null
                        
                        :null}
                    
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
      </div>
              )
            })}    

           </div>
</div>
</div>

 </div>);
             
      
   
}




export default Pedido