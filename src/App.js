import { useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';
import data from './Component/data';
import detailPage from './page/Detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import baby from './img/baby.jpg';
import feet from './img/feet.jpg';
import sailboat from './img/sailboat.jpg';
import Detail from './page/Detail';

function App() {
  let [content] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            {/* <Nav.Link href="#features">detail</Nav.Link> */}
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {/* <Card content={content[1]} i={2}></Card>
          <Card content={content[2]} i={3}></Card> */}
                  {content.map((a, i) => {
                    return <Card content={content[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail content={content} />} />
        <Route path="/detail/:id" element={<Detail content={content} />} />
        {/* <Route path="/about/member" element={<About />} /> */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<>없는 페이지요</>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width="80%"
      />
      <h5>{props.content.title}</h5>
      <p>{props.content.price}</p>
    </div>
  );
}

export default App;

{
  /* <Card content={content[0]}></Card>
          <Card content={content[1]}></Card>
          <Card content={content[2]}></Card> */
}

{
  /* <div className='col-md-4'>
<img src={feet} width={'80%'}/>
<h4>{content[0].title}</h4>
<p>{content[0].price}</p>
</div>
<div className='col-md-4'>
<img src={baby} width={'80%'}/>
<h4>{content[1].title}</h4>
<p>{content[1].price}</p></div>
<div  className='col-md-4'>
<img src={sailboat} width={'80%'}/>
<h4>{content[2].title}</h4>
<p>{content[2].price}</p></div> */
}
