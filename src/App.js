/*eslint-disable*/

import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';
import './App.css';

function App() {
  
  let [종족,종족변경] = useState(['저그', '테란', '프로토스'])
  let [배럭,배럭변경] = useState(['마린', '메딕', '고스트', '파이어벳']);
  let [풍선,풍선변경] = useState(0);

  function 종족바꾸기() {
    let newArray = [...종족];
    newArray[0] = '테란';
    종족변경 ( newArray );
  }

  function 영웅뽑기() {
    let newArray = [...종족];
    newArray[0] = '짐레이너';
    종족변경( newArray );
  }
  function 순서정렬() {
    let newArray = [...배럭];
    newArray[0] = '고스트';
    newArray[1] = '마린';
    newArray[2] = '메딕';
    배럭변경( newArray );
  }

  function Modal(){
    return(
      <div className='Modal'>
        <h2>이름:타이커스</h2>
        <p>죄목:살인,방화,절도 등...</p>
        <p>형량:무기징역</p>
      </div>
    )
  }

  

  return (
    <div className="App">
      <div className='black-nav'>
        <div>{ 종족[0] }</div>
        <button type="button" class="btn btn-outline-info" onClick={ 종족바꾸기 }>변경</button>
        <button type="button" class="btn btn-outline-info" onClick={ 영웅뽑기 }>영웅바꾸기</button>
      </div>

      <button type="button" style={{marginTop:'16px'}} class="btn btn-outline-danger" onClick={ 순서정렬 }>순서정렬</button>

      <div className='list'>
        <h3>{ 배럭[0] } <span onClick={()=>{ 풍선변경(풍선 + 1)}}>🎈</span> {풍선}</h3>
        <p>미네랄50 인구1</p>
      </div>
        <hr/>

      <div className='list'>
        <h3>{ 배럭[1] }</h3>
        <p>미네랄75/가스25</p>
      </div>
      <hr/>

      <div className='list'>
        <h3>{ 배럭[2] }</h3>
        <p>미네랄/가스50</p>
      </div>
      <hr/>
      <Modal/>
    </div>
  );
}

export default App;
