import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { Form,Button,Container,Col,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as yup from 'yup';


const instance = Axios.create({
    baseURL: 'https://blooming-peak-71078.herokuapp.com',
    withCredentials:true
  });

const Cliente = (props) => {
    const navigate = useNavigate();




    const schema = yup.object().shape({
      razao: yup.string().required("Esse campo é obrigatorio"),
      cnpj: yup.string().required("Esse campo é obrigatorio"),
      endereco: yup.string().required("Esse campo é obrigatorio"),
    
  
    });


    return (
        <div>
<Container>
<Formik
      validationSchema={schema}
      onSubmit={values=>{
        console.log("Submiting")
      }}
      initialValues={{
        razao: '',
        cnpj: '',
        endereco: '',
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
            <Form.Group   md="10" controlId="validationFormik01">
              <Form.Label>Razão Social</Form.Label>
              <Form.Control
                type="text"
                name="razao"
                value={values.razao}
                onChange={handleChange}
                isValid={touched.razao && !errors.razao}
                placeholder="Your title"
                rows={3}  as="textarea"
              />
              <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                name="cnpj"
                value={values.cnpj}
                onChange={handleChange}
                isValid={touched.cnpj && !errors.cnpj}
                rows={3}  
              />
  <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>            
      </Form.Group>

                 <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                name="endereco"
                value={values.endereco}
                onChange={handleChange}
                isValid={touched.endereco && !errors.endereco}
                placeholder="Features..."
                rows={3} 
              />
    <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>                  
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
export default Cliente