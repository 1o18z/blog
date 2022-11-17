import React, { useEffect, useState } from "react";
import './App.css';
import { Button, Layout, Menu } from 'antd';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const { Header } = Layout;

function App() {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const { code } = codeResponse;
      console.log(codeResponse);
      await axios.post("http://localhost:5000/auth/google", {
        code,
      });
  },

    flow: 'auth-code',
  });

  const [time, setTime] = useState(new Date());
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);


  return (
    <Layout className="layout">
      <h3>현재 시간 : {time.toLocaleTimeString()}</h3>
      <Button onClick={() => {
        login();
      }}>
        로그인</Button>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
      }}
        onError={() => {
          console.log("Login Failed");
      }}
      />
      <Router>
        <Header>
        <Menu theme="dark"
         mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
              {
               key:1,
               label: <Link to="/"> HOME</Link>,
              },
              {
               key:2,
               label: <Link to="/resume">이력서</Link>,
              },
              {
               key: 3,
               label: <Link to="/portfolio">포트폴리오</Link>,
              },
            ]}
          />
        </Header>

    <Layout.Content style={{ padding: "0 50px", height: 300 }} >
      <div className="site-layout-content" style={{  }} >
        <Routes>
              <Route path="/portfolio" element={ <Portfolio />} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Layout.Content>
      </Router>
    </Layout>
  );
}

const Home = () => {
  return <div style={{
      background: "#fff",
      height: 200,
      padding: 24,
      marginTop: 60,
      marginBottom: 60,
      border: 5
   }}
  > 홈페이지 </div>;
};

const Resume = () => {
  return (
  <div>
      <h3>자기소개</h3>
      <h3>박은지</h3>
      <h3>학력</h3>
      <>
        <li>구리초</li>
        <li>토평중</li>
      </>
    </div>
  )
}

const Portfolio = () => {
  return <></>
}


export default App;
