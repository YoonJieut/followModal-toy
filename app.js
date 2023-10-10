console.log('hi');

const body = document.body;
const root = document.getElementById('root');
const modal = document.getElementById('modal');
console.log(body, root, modal);
console.dir(root);

// ! 마우스를 올릴 때, 좌표를 따라오는 이벤트
// * 마우스가 움직일 때마다 작동하는 mousemove와
// * dom요소가 기준이 되는 offset을 기준으로 작성해본다.

root.addEventListener('mousemove',function(event){
  // console.dir(event);
  console.log(event.offsetX, event.offsetY)
  setTimeout(function(){
    modal.style.left = event.offsetX+"px";
    modal.style.top = event.offsetY+"px";
  },100)
});
