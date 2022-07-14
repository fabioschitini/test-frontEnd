import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { Form,Button,Container,Col,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as yup from 'yup';


const instance = Axios.create({
    baseURL: 'http://localhost:3001',
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
      {props.user?
        
        <Container>
        <Formik
              validationSchema={schema}
              onSubmit={values=>{
                console.log("submiting")
                instance.post(`/cliente`,{razao:values.razao,cnpj:values.cnpj,endereco:values.endereco}).then(result=>{console.log(result)})
                console.log("Submited succefully")
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
                        placeholder="Your razao"
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
                        placeholder="enderecos..."
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
export default Cliente