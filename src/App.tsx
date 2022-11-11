import React, { useEffect, useState } from "react";
import './App.css';
import { Layout, Menu } from 'antd';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const { Header } = Layout;


function App() {
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">이력서</Link>
            </li>
            <li>
              <Link to="/portfolio">포트폴리오</Link>
            </li>
          </ul>
        </nav>
        </Header>
        <Layout.Content style={{ padding: "0 50px "}}>
        <Routes>
          <Route path="/portfolio" element={ <Portfolio />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        </Layout.Content>
      </Router>
      </Layout>
  );
}


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
const Home = () => {
  return <>홈페이지
  </>
}

export default App;
