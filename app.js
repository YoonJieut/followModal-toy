console.log('hi');

const body = document.body;
const root = document.getElementById('root');
const modal = document.getElementById('modal');
console.log(body, root, modal);
console.dir(root);

// ! 마우스를 올릴 때, 좌표를 따라오는 이벤트
// * 마우스가 움직일 때마다 작동하는 mousemove와
// * dom요소가 기준이 되는 offset을 기준으로 작성해본다.

// 내무 로직 선언
const Game = function(e){
  setTimeout(function(){
    modal.style.left = e.offsetX+"px";
    modal.style.top = e.offsetY+"px";
  },250)
};


// 모달이 따라오는 로직
function mouseOver(){
  root.addEventListener('mousemove', Game);
}
// 모달 따라오는 로직 종료
function mouseOverEnd(){
  console.log('종료')
  root.removeEventListener('mousemove', Game);
};

// ! modal이 클릭되면 삭제되는 로직
// 모달을 누르면 윈도우가 종료

const closeEvent = function(e){
  if(e.target.id === "modal"){
    console.log("모달 이프문 true")
    setTimeout(function(){
      window.close();
    }, 1000)
  }
}

function modalClick(){
  modal.addEventListener('click', closeEvent);
}
// 이벤트 종료
function modalClickEnd(){
  modal.removeEventListener('click', closeEvent);
}



// ! 이벤트 작동 로직
body.addEventListener('click', function(e){
  console.dir(e.target);
  if(e.target.id === "root") {
    console.log("true");
    mouseOver();
    modalClick();
    // ! 5초간 게임을 시작한다. - 5초 후 이벤트 삭제 로직
    setTimeout(function(){
      modalClickEnd();
      mouseOverEnd();
      console.log(modal.type);
      // ! 현재 이벤트 타겟이 종료되지 않는 현상이 발견됨
      // ? 그러나 event.type을 조회해본 결과 갑자기 종료됨, removeEventLitener의 event 매개변수의 문제로 예상된다.
    }, 5000)
  } else { 
    console.log('바른 곳을 눌러주세요')
  }
});


