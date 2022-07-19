import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Button,Col,Form} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const instance = Axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3001",
    
  })



const SignIn = () => {
    const navigate = useNavigate();



    
    const schema = yup.object().shape({
        name: yup.string().required("Esse campo é obrigatorio"),
        username: yup.string().required("Esse campo é obrigatorio"),
        password: yup.string().required("Esse campo é obrigatorio"),

      });

   
    return (
      <div className="container col-xl-10 col-xxl-8 px-4 py-5"> 
        <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Cadastro de usuario</h1>
        <p className="col-lg-10 fs-4">E aqui que voce pode fazer o cadastro do seu usuario</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5"> 
    <Formik
        validationSchema={schema}
      onSubmit={values=>{
        instance.post(`/signIn`,{name:values.name,username:values.username,password:values.password}).then(result=>{console.log(result)})
        navigate("/login")
      }}
      initialValues={{
        name:'',
        username: '',
        password:'',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form className="p-4 p-md-7 border rounded-3 bg-light" noValidate onSubmit={handleSubmit}>
     
     <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                required
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid={ !!errors.name}

                placeholder="Name"
              />
  <Form.Control.Feedback >Looks okay!</Form.Control.Feedback>  
  <Form.Control.Feedback type='invalid' >This camp must not be empty</Form.Control.Feedback>         
       
                 </Form.Group>

            <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                isValid={touched.username && !errors.username}
                isInvalid={ !!errors.username}
                placeholder="Username"
              />
  <Form.Control.Feedback >Looks okay!</Form.Control.Feedback>   
  <Form.Control.Feedback type='invalid' >This camp must not be empty</Form.Control.Feedback>         
      
                 </Form.Group>

                 <Form.Group as={Col} md="10" controlId="validationFormik01">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={ !!errors.password}
                placeholder="Password"
              />
  <Form.Control.Feedback >Looks okay!</Form.Control.Feedback>
    <Form.Control.Feedback type='invalid' >This camp must not be empty</Form.Control.Feedback>         
         
                 </Form.Group>
            
          <Button className="w-100 btn btn-lg btn-primary" style={{marginTop:"10vh"}} type="submit">Sign-In</Button>
        </Form>
      )}
    </Formik>
    </div>
   
    </div>
</div>
    )
}
export default SignIn