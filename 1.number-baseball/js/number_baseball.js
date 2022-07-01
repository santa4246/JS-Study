let randomNum = document.querySelector("#randomNum");
let putNum = document.querySelector("#putNum");
let num = 1;
let testValue = "";
changeNum();

randomNum.addEventListener("click", changeNum);
putNum.addEventListener("click", compareNum);

function changeNum(){
  num = 1;
  let userInputNum = document.querySelector("#userInputNum");
  testValue = Math.floor(Math.random() * 8999 + 1000);
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

    if(num <= 10){
      score.innerHTML += "<p class='round'>Round " + num + " > " + userInputNum.value + " ---> strike : " + strike + ", ball : " + ball + "</p>";
      num += 1;
    } else{
      alert("10라운드가 종료되었습니다. 정답은 <" + testValue + "> 입니다. \n다시 한 번 플레이 해보세요.\n(창을 닫으면 컴퓨터 숫자는 자동으로 변경됩니다)");
      changeNum();
    }
    if(strike == 4){
      score.innerHTML += "<h3 class='success'>Congratulation!!</h3>";
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