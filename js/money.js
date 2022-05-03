let menu;
let price;
let result = 0;
 document.getElementById("total").addEventListener('click',sum);



 
// 선택한 상품의 가격을 추가한다.
function add(price,menu) {
  result += parseInt(price);
  document.querySelector("#total").innerText = result + "원";
}

// 선택한 상품의 가격을 차감한다.

function sub(price) {
    if(result>0)
        result -= parseInt(price);
        if(result>0)
            document.querySelector("#total").innerText = result + "원";
        else
            document.querySelector("#total").innerText ="0원";

}
function submit(){
    alert("주문이 완료되었습니다")
    result = 0;
    document.querySelector("#total").innerText = result + "원";
}
function reset(){
    result = parseInt(0);
    document.querySelector("#total").innerText = result + "원";
}