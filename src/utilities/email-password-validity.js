//these functions take in 'refs' from components

const checkValidUserName = (inp) => {
  let user = inp.current.value;
  if (/^[a-zA-Z0-9]{4,10}$/.test(user)) {
    inp.current.style.border = "";
    return true;
  } else {
    inp.current.style.border = "1px red solid";
    return false;
  }
};

const checkValidEmail = (inp) => {
  let email = inp.current.value;
  if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    inp.current.style.border = "";
    return true;
  } else {
    inp.current.style.border = "1px red solid";
    return false;
  }
};
const checkValidPassword = (inp) => {
  let password = inp.current.value;
  if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
    inp.current.style.border = "";
    return true;
  } else {
    inp.current.style.border = "1px red solid";
    return false;
  }
};

export { checkValidEmail, checkValidPassword, checkValidUserName };
