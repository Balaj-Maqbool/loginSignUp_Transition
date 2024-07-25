let signUpSlider = document.querySelector(".sign-up-slider");
let logInSlider = document.querySelector(".sign-in-slider");
let signupBtn = document.querySelector("#sign-up-button");
let loginBtn = document.querySelector("#sign-in-button");
let signupForm = document.querySelector(".sign-up-form");
let loginForm = document.querySelector(".log-in-form");

signupBtn.onclick = () => {
  signUpSlider.classList.add("SignUpSlideRight");
  logInSlider.classList.add("SignInSlideRight");
  signupForm.classList.add("signUpFormVisibilityRight");
  loginForm.classList.add("signInFormVisibilityRight");

  signUpSlider.classList.remove("SignUpSlideLeft");
  logInSlider.classList.remove("SignInSlideLeft");
  signupForm.classList.remove("signUpFormVisibilityLeft");
  loginForm.classList.remove("signInFormVisibilityLeft");
};

loginBtn.onclick = () => {
  signUpSlider.classList.remove("SignUpSlideRight");
  logInSlider.classList.remove("SignInSlideRight");
  signupForm.classList.remove("signUpFormVisibilityRight");
  loginForm.classList.remove("signInFormVisibilityRight");

  signUpSlider.classList.add("SignUpSlideLeft");
  logInSlider.classList.add("SignInSlideLeft");
  signupForm.classList.add("signUpFormVisibilityLeft");
  loginForm.classList.add("signInFormVisibilityLeft");
};
