import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { useState,useEffect } from 'react'
import { Form,Button,Container,Col,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as yup from 'yup';

const instance = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
  
})


const Venda = (props) => {
   // const navigate = useNavigate();

    const [produtoData,setProdutoData]=useState()
    const [clienteData,setClienteData]=useState()

    useEffect(()=>{
      instance.get("/cliente").then((response)=>{
       if(!response){
        setClienteData(undefined)
       }
       else{ console.log('response cliente',response.data)
       setClienteData(response.data)
    }
  })

  instance.get("/produto").then((response1)=>{
    if(!response1){
     setProdutoData(undefined)
    }
    else{ console.log('response produto',response1.data)
    setProdutoData(response1.data)
 }
})

    },[])
  


    const schema = yup.object().shape({
      cliente: yup.string().required("Esse campo é obrigatorio"),
      produtos: yup.string().required("Esse campo é obrigatorio"),
      valor: yup.string().required("Esse campo é obrigatorio"),
      quantidade: yup.string().required("Esse campo é obrigatorio"),
      status: yup.string().required("Esse campo é obrigatorio"),

    });


    return (
        <div>

     {props.user?
     
     <Container>
<Formik
      validationSchema={schema}
      onSubmit={values=>{
        console.log("submiting")
        instance.post(`/produto`,{cliente:values.cliente,produtos:values.produtos,status:values.status,valor:values.valor,quantidade:values.quantidade}).then(result=>{console.log(result)})
        console.log("Submited succefully")
      }}
      initialValues={{
        cliente: '',
        produtos: '',
        status: '',
        valor:'',
        quantidade:''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isValidating,
        validate,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
        <Row>
        <Col>

     

        <Form.Group className="mb-3">
        <Form.Label>Cliente</Form.Label>
        <Form.Select  name="cliente" 
        values={values.cliente}
        onChange={handleChange}
        isValid={touched.cliente && !errors.cliente}
        isInvalid={errors.cliente}
        >
            <option value="" label="Selecione o cliente"></option>
          <option value='metro'>cliente 1</option>
          <option value='centimetro'>cliente 2</option>

        </Form.Select>
        <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Esse campo e obrigatorio</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Produtos</Form.Label>
        <Form.Select  name="produtos" 
        values={values.produtos}
        onChange={handleChange}
        isValid={touched.produtos && !errors.produtos}
        isInvalid={errors.produtos}
        >
            <option value="" label="Selecione o produto"></option>
          <option value='metro'>produto 1</option>
          <option value='centimetro'>produto 2</option>

        </Form.Select>
        <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Esse campo e obrigatorio</Form.Control.Feedback>
      </Form.Group>

                 <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="text"
                name="valor"
                value={values.valor}
                onChange={handleChange}
                isValid={touched.valor && !errors.valor}
                placeholder="Valor"
                rows={3} 
              />
    <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>                  
                 </Form.Group>

                 <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="text"
                name="quantidade"
                value={values.quantidade}
                onChange={handleChange}
                isValid={touched.quantidade && !errors.quantidade}
                placeholder="Quantidade"
                rows={3} 
              />
    <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>                  
                 </Form.Group>

                 <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select  name="status" 
        values={values.status}
        onChange={handleChange}
        isValid={touched.status && !errors.status}
        isInvalid={errors.status}
        >
            <option value="" label="Selecione o status"></option>
          <option value='metro'>PROCESSO</option>
          <option value='centimetro'>APROVADOS</option>

        </Form.Select>
        <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Esse campo e obrigatorio</Form.Control.Feedback>
      </Form.Group>

            </Col>
        
            </Row>
            
          <Button style={{marginTop:"10vh"}} type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
</Container>
     
     :
<div class="container col-xl-10 col-xxl-8 px-4 py-5"> 
        <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">Permissao Negada </h1>
        <p class="col-lg-10 fs-4">Somente pessoas logadas podem accesar essa pagina</p>
      </div>
      </div>
      </div>     
     }     

</div>
    )
}
export default Venda