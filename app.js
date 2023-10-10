console.log('hi');

const body = document.body;
const root = document.getElementById('root');
const modal = document.getElementById('modal');
console.log(body, root, modal);
console.dir(root);

// ! 마우스를 올릴 때, 좌표를 따라오는 이벤트
// * 마우스가 움직일 때마다 작동하는 mousemove와
// * dom요소가 기준이 되는 offset을 기준으로 작성해본다.

// 모달이 따라오는 로직
function mouseOver(){
  root.addEventListener('mousemove',function Game(event){
    // console.dir(event);
    // console.log(event.offsetX, event.offsetY)
    setTimeout(function(){
      modal.style.left = event.offsetX+"px";
      modal.style.top = event.offsetY+"px";
    },250)
  });
}
// 모달 따라오는 로직 종료
function mouseOverEnd(){
  root.removeEventListener('mousemove', Game(e));
};



body.addEventListener('click', function(e){
  console.dir(e.target);
  // 참일 때, root를 누르면 작동하라
  if(e.target.id === "root") {
    console.log("true");
    mouseOver();
    // 5초 동안 작동, 5초후 종료
    setTimeout(function(){
      console.log ("종료");
    }, 5000)
  } else {}
});

// ! 5초간 게임을 시작한다.

// 
