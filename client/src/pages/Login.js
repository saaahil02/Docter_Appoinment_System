import React from 'react'
import {  Form, Input,message} from 'antd';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';

const Login = () => {
  const navigate=useNavigate();
  const dispatch =useDispatch()
  //form handler
  const onfinishHandler=async(values)=>{
    try{
        dispatch(showLoading())
        const res=await axios.post('/api/v1/user/login',values)
        dispatch(hideLoading())
        if(res.data.success){
          localStorage.setItem("token",res.data.token);
          message.success('Login Successfully')
          navigate('/')
        }else{
          message.error(res.data.message);
        }
    }catch(error){
      dispatch(hideLoading())
        console.log(error)
        message.error('something went wrong')
    }
   
}
  return (
    <>
     <div className='form-constainer'>
        <Form layout="vertical" onFinish={onfinishHandler}>
            <h3 className='text-center'>Login Form</h3>
           
            <Form.Item label="Email" name="email">
                <Input type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type="password" required />
            </Form.Item>
            
            <button className='btn btn-primary' type="submit">
                Login
            </button>
            <Link to="/register" className="m-2">
            Don't have an account? Register here 
            </Link>
        </Form>
        </div>    
    </>
  )
}

export default Login