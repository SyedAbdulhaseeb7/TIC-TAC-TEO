let boxes =document.querySelectorAll('.box1');
let msg_win=document.querySelector('.msg_contenair');
let new_game = document.querySelector('.btn2');
let turn = true;
let pattern =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];

const newgame =()=>{
    msg_win.classList.add('hide');
    turn=true;
    enabled();
}
new_game.addEventListener('click',newgame);


const winerr = (winner)=>{
    msg_win.innerHTML=`${winner}  are winner `

    msg_win.classList.remove('hide');
}
const win_pattres=()=>{
    for(let patterns of pattern){
          let val =boxes[patterns[0]].innerHTML;
          let val2 = boxes[patterns[1]].innerHTML;
          let val3 = boxes[patterns[2]].innerHTML
          if(val != '' && val2!= ''&& val3!=''){
          if(val == val2 && val2 == val3){
         winerr(val);
        
        disabled();
          }}
       
    }
}


boxes.forEach((box) => {
    box.addEventListener('click',()=> {
        if(turn){
            box.innerHTML=('0')
            
            turn=false
        }else{
            box.innerHTML=('X')
            turn=true
        }
        box.disabled=true;
        win_pattres()
    })
   
});
const disabled = ()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const enabled = ()=>{
    for( let box1 of boxes){
        box1.disabled=false;
        box1.innerHTML='';
    }
}
 

