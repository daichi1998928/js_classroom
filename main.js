function kadai_3 (age, callback){

  callback(message){

    if (age > 20){
      alert('値は20以上です');
    }else if(age < 20 && age >= 10 ){
      alert('値は10以上20未満です');
    }else if(age < 10){
      alert('値は10未満です');
    }else


  };


}


const kaddai_3 = (age, callback) => {
  let message;
  if (typeof age !== number){
    message = '数値が入力されていません';
  }else if(age >= 20){
    message = '値が20以上';
  }else if(age >=10){
    message = '値が10以上';
  }else{
    message = '値が10未満です';
  }
  callback(message);

};


kaddai_3(30, (message)=> {
  alert(message)

});
