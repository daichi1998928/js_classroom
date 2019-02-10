let num = 0;

while (num < 100) {

  console.log(num);

  num = num + 1;
}


const question = "パンんはパンでも食べられないパンは？";

const answer = "フライパン";

let input ;

//比較演算子は＝＝＝を使うといいよ

while (answer !== input ){

 input = prompt(question);

 if (answer === input){
  alert("正解です");
 }else if( answer !== input) {
  alert("不正解です");
 }


}
