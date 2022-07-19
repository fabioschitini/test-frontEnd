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

const Produto = (props) => {
    const navigate = useNavigate();




    const schema = yup.object().shape({
      codigo: yup.string().required("Esse campo é obrigatorio"),
      descricao: yup.string().required("Esse campo é obrigatorio"),
      compra: yup.string().required("Esse campo é obrigatorio"),
      venda: yup.string().required("Esse campo é obrigatorio"),
      medida: yup.string().required("Esse campo é obrigatorio"),

  
    });


    return (
        <div>
          {props.user?
          
          <Container>
<Formik
      validationSchema={schema}
      onSubmit={values=>{
        console.log("submiting")
        instance.post(`/produto`,{codigo:values.codigo,descricao:values.descricao,medida:values.medida,compra:values.compra,venda:values.venda}).then(result=>{console.log('result')})
        navigate('/')  
          }}
      initialValues={{
        codigo: '',
        descricao: '',
        medida: '',
        compra:'',
        venda:''
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
        <Form.Label>Unidade de Medida</Form.Label>
        <Form.Select  name="medida" 
        values={values.medida}
        onChange={handleChange}
        isValid={touched.codigo && !errors.medida}
        isInvalid={errors.medida}

        >
            <option value="" label="Selecione uma unidade de medida"></option>
          <option value='metro'>m</option>
          <option value='centimetro'>cm</option>

        </Form.Select>
        <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Esse campo e obrigatorio</Form.Control.Feedback>

      </Form.Group>

            <Form.Group   md="10" controlId="validationFormik01">
              <Form.Label>Codigo do Produto</Form.Label>
              <Form.Control
                type="text"
                name="codigo"
                value={values.codigo}
                onChange={handleChange}
                isValid={touched.codigo && !errors.codigo}
                placeholder="Your title"
                rows={3}  
              />
              <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Descricao do produto</Form.Label>
              <Form.Control
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
                isValid={touched.descricao && !errors.descricao}
                rows={3}  as="textarea"
              />
  <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>            
      </Form.Group>

                 <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Preco de compra</Form.Label>
              <Form.Control
                type="number"
                name="compra"
                value={values.compra}
                onChange={handleChange}
                isValid={touched.compra && !errors.compra}
                placeholder="Features..."
                rows={3} 
              />
    <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>                  
                 </Form.Group>

                 <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Preço de Venda</Form.Label>
              <Form.Control
                type="number"
                name="venda"
                value={values.venda}
                onChange={handleChange}
                isValid={touched.venda && !errors.venda}
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
export default Produto