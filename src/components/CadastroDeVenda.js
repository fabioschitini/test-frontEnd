import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { Form,Button,Container,Col,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as yup from 'yup';




const Venda = (props) => {
    const navigate = useNavigate();




    const schema = yup.object().shape({
      cliente: yup.string().required("Esse campo é obrigatorio"),
      produtos: yup.string().required("Esse campo é obrigatorio"),
      valor: yup.string().required("Esse campo é obrigatorio"),
      quantidade: yup.string().required("Esse campo é obrigatorio"),
      status: yup.string().required("Esse campo é obrigatorio"),

  
    });


    return (
        <div>
<Container>
<Formik
      validationSchema={schema}
      onSubmit={values=>{
        console.log("Submiting")
        console.log('valueeeeeeeeeeeeeeeees',values)
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
        <Form.Label>Status</Form.Label>
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
        <Form.Label>Status</Form.Label>
        <Form.Select  name="cliente" 
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
</div>
    )
}
export default Venda