// import { Component, ReactNode } from "react";
// import { Navigate } from "react-router-dom";
// import { Props, State } from "../type/Types";


// interface CurrentUser {
//   username: string;
//   password: string;
// }

// class Login extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     const jsonUser: string | null = localStorage.getItem("isLoggedIn");
//     const user: CurrentUser = jsonUser !== null && JSON.parse(jsonUser);

//     this.state = {
//       username: "",
//       password: "",
//       isLoggedIn: user.username === "admin" && user.password === "123",
//     };
//   }

//   handleSubmit = () => {
//     if (this.state.username === "admin" && this.state.password === "123") {
//       const user: CurrentUser = {
//         username: this.state.username,
//         password: this.state.password,
//       };
//       console.log(user);
//       localStorage.setItem("isLoggedIn", JSON.stringify(user));
//       this.setState({ isLoggedIn: true });
//       return;
//     }
//     alert("Thông tin đăng nhập chưa đúng!");
//   };

//   render(): ReactNode {
//     return this.state.isLoggedIn ? (
//       <Navigate to="/pages" />
//     ) : (
//       <div className="login-container">
//         <form onSubmit={this.handleSubmit}>
//           <h2>Login</h2>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={this.state.username}
//               onChange={(e) => this.setState({ username: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={this.state.password}
//               onChange={(e) => this.setState({ password: e.target.value })}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import { CurrentUser, Props, State } from '../type/Types';
import './Login.css';

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const jsonUser: string | null = localStorage.getItem('isLoggedIn');
    const user: CurrentUser = jsonUser !== null ? JSON.parse(jsonUser) : { username: "", password: "" };

    this.state = {
      username: "",
      password: "",
      isLoggedIn: user.username === "admin" && user.password === "123",
    };
  }

  handleSubmit = (values: any) => {
    const { username, password } = values;
    if (username === 'admin' && password === '123') {
      const user: CurrentUser = { username, password };
      console.log(user);
      localStorage.setItem('isLoggedIn', JSON.stringify(user));
      this.setState({ isLoggedIn: true });
    } else {
      alert('Thông tin đăng nhập chưa đúng!');
    }
  };

  onFinishFailed: FormProps<any>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return this.state.isLoggedIn ? (
      <Navigate to="/pages" />
    ) : (
      <div className="login-container" style={{ maxWidth: 600, margin: '0 auto' }}>
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={this.handleSubmit}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
        >
          <h1 style={{ textAlign: 'center' }}>Login</h1>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
