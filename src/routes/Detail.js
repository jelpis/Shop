import { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Context1 } from '../App';

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == 'blue' ? 'white' : 'black')};
//   padding: 10px;
// `;

// copy
// let NewBtn = styled.button(YellowBtn)`
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

function Detail(props) {
  // let { stock } = useContext(Context1);

  let { id } = useParams();
  let finder = props.content.find((x) => x.id == id);
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('');

  useEffect(() => {
    setFade2('end');
    return () => {
      setFade2('');
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <div className={'container start ' + fade2}>
      {/* <Box> */}
      {/* <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="yellow">버튼</YellowBtn> */}
      {/* </Box> */}

      {alert == true ? (
        <div className="container">
          <div className="alert alert-warning"> 2초 이내 구매 시 할인</div>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{finder.title}</h4>
          <p>{finder.content}</p>
          <p>{finder.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}
function TabContent({ tab }) {
  // 탭state변할 때 마다 end부착
  let [fade, setFade] = useState('');
  // let { stock } = useContext(Context1);

  useEffect(() => {
    //fade를 end로 변경
    setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      setFade('');
    };
  }, [tab]);

  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );

  {
    /* if (props.tab == 0) {
    return <div>내용0</div>;
  }
  if (props.tab == 1) {
    return <div>내용1</div>;
  }
  if (props.tab == 2) {
    return <div>내용2</div>;
  } */
  }
}

export default Detail;
