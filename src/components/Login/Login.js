import { Button, Form, Input } from 'antd';
import "./Login.css";
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
    console.log('username', username);
  }

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
    console.log('password', password);
  }

  const navigate = useNavigate();
  const loginHandler = (e) => {
    const upload_url = "http://192.168.0.108:8099/cinemuadmin/login";
    e.preventDefault();
    let data = {
      lid: username,
      lpwd: password
    };
    axios.post(upload_url, data).then((res) => {

      console.log('data=>' + res.data.lid);
      if (res.data.lid === "") {
        console.log("login 실패");
        alert("계정을 다시 확인해 주세요.");
      } else if (res.data.lid === "admin") {
        onLogin(true); // show 값을 부모 컴포넌트로 전달
        sessionStorage.setItem('show', true);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        navigate("/main");
      } else if (res.data.lid !== "admin") {
        alert("관리자가 아닙니다.");
      }
    })
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form className='loginformall'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <h2 className='logintitle'>Admin Login</h2>
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input onChange={changeUsernameHandler} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={changePasswordHandler} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={loginHandler}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;