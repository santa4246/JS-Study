/* document에서 값 가져오기 */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

/* 반복 text 변수로 저장하기 */
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* 로그인 정보가 없을 때 실행 */
function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

/* 로그인 정보가 있을 때 실행 */
function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* 로컬 스토리지에서 로그인 정보 가져오기 */
const savedUsername = localStorage.getItem(USERNAME_KEY);

/* 로컬 스토리지에 값이 있는 지, 없는 지 확인하고 실행 */
if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}