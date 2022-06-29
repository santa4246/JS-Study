let randomNum = document.querySelector("#randomNum");
let putNum = document.querySelector("#putNum");
changeNum();

randomNum.addEventListener("click", changeNum);
putNum.addEventListener("click", compareNum);

function changeNum(){
  let userInputNum = document.querySelector("#userInputNum");
  let testValue = Math.floor(Math.random() * 8999 + 1000);
  let testValueArr = (testValue + '').split('');
  let setTestValueArr = new Set(testValueArr);

  if(testValueArr.length === setTestValueArr.size){
    randomNumValue = testValue;
    console.log("changed randomNumValue", randomNumValue);
    let score = document.querySelector("#score");
    score.innerHTML = "";
    putNum.disabled = false;
    userInputNum.value = "";
    userInputNum.focus();
  } else{
    changeNum();
  }
}

function changeNumArray(randomNumValue){
  return (randomNumValue + '').split('');
}

function compareNum(){
  let userInputNum = document.querySelector("#userInputNum");
  let score = document.querySelector("#score");
  let userInputNumArrayValue = userInputNumArray();
  let comInputArrayValue = changeNumArray(randomNumValue);

  let userValue = new Set(userInputNumArrayValue);

  if(userInputNum.value.length != 4){
    alert("4자리 숫자만 입력이 가능합니다.");
  } else if(userInputNumArrayValue.length !== userValue.size){
    alert("중복된 숫자가 없는지 확인하세요.");
  } else {
    
    let strike = 0;
    let ball = 0;
    console.log(userInputNumArrayValue);
    console.log(comInputArrayValue);

    for(let i=0; i<4; i++){
      if(userInputNumArrayValue[i] == comInputArrayValue[i]){
        strike += 1;
      } else {
        for(let j=0; j<4; j++){
          if(userInputNumArrayValue[i] == comInputArrayValue[j]){
            ball += 1;
          }
        }
      }
    }

    score.innerHTML += "<p>" + userInputNum.value + " ---> strike : " + strike + ", ball : " + ball + "</p>";
    if(strike == 4){
      score.innerHTML += "<h3>Congratulation!!</h3>";
      putNum.disabled = true;
    }
    userInputNum.select();
  }
}

function userInputNumArray(){
  let userInputNum = document.querySelector("#userInputNum");
  return (userInputNum.value + '').split('');
}

function enterkey(event) {
	if (window.event.keyCode == 13) {
    event.preventDefault();
    compareNum();
  }
}