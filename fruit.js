var btn = document.querySelector('button');
var input = document.querySelector('input');
var p = document.querySelector('p');
var img = document.querySelector('img');
btn.addEventListener('click',fruit)
function fruit(){
    p.textContent = input.value;
    switch(input.value){
        case 'cam':
            img.setAttribute('src','images/1x/cam.jfif')
            break;
        case 'dưa hấu':
            img.setAttribute('src','images/1x/duahau.jfif');
            break;
        case 'chôm chôm':
            img.setAttribute('src','images/1x/chomchom.jfif');
            break;
        case 'khế':
            img.setAttribute('src','images/1x/khe.jfif')
            break;
        case 'vải':
            img.setAttribute('src','images/1x/vai.jfif')
            break;
        default:
            document.write('Không có ảnh về hoa quả này');
    }
  
}

// cách 2
// //Phân tích Bài toán lúc này: Nhấn vào BUTTON > thay đổi P 
// // 1. Xác định các đối tượng chịu tác động
// let txtFruit        = document.getElementById("txtFruit");
// let btnShowFruit    = document.getElementById("btnShowFruit");
// let lblTitle        = document.getElementById("lblTitle");
// // let imgContainer    = document.getElementById("imgContainer");
// let imgItem = document.getElementById("imgItem");

// // 2. Xử lý: Bắt sự kiện (Có nhiều cách)
// btnShowFruit.addEventListener("click", hamGiDo);

// // 3. Hàm xử lý sự kiện:
// function hamGiDo(){
//     let listFruits = ['banana','orange','lemon','strawberry','watermelon'];
//     let fruit = txtFruit.value;

//     // Can hoc va ren luyen tu duy Lap trinh truoc do
//     if(fruit == ''){
//         alert('You must input a fruit');
//     }else{
//         let result = false;
//         for(let i=0; i<listFruits.length; i++){
//             if(fruit == listFruits[i]){
//                 result = true;
//                 break;
//             }
//         }
