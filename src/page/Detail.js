import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  let { id } = useParams();
  let finder = props.content.find((x) => x.id == id);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  });

  return (
    <div className="container">
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
    </div>
  );
}

export default Detail;
