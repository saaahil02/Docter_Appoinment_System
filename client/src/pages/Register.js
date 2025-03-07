import React from 'react'
import {  Form, Input,message} from 'antd';
import {Link,useNavigate} from 'react-router-dom';
import '../styles/Register.css'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';

const Register = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const onfinishHandler=async(values)=>{
        try{
            dispatch(showLoading())
            const res=await axios.post('/api/v1/user/register',values)
            dispatch(hideLoading())
            if(res.data.success){
                message.success("Register Successfully");
                navigate('/login')
            }else{
                message.error(res.data.message);
            }


        }catch(error){
            dispatch(hideLoading())
            console.log(error)
            message.error('something went wrong');
        }
    }
  return (
    <>
       <div className='form-constainer'>
        <Form layout="vertical" onFinish={onfinishHandler}>
            <h3 className='text-center'>Register Form</h3>
            <Form.Item label="Name" name="name">
                <Input type="text" required />
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type="password" required />
            </Form.Item>
            
            <button className='btn btn-primary' type="submit">
                Register
            </button>
            <Link to="/login" className="m-2">
            Already have an account? Login here 
            </Link>
        </Form>
        </div>    
    </>
  )
}

export default Register