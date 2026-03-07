export const CheckValidData = (name, email, password) => {


  if (name !== undefined && name !== null && name !== "") {
    const isNameValid = /^[A-Za-z ]{2,}$/.test(name);
    if (!isNameValid) {
      return "Name is not valid";
    }
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!isEmailValid) {
    return "Email is not valid";
  } 
  else if (!isPasswordValid) {
    return "Password is not valid";
  } 
  else {
    return null;
  }
};

export default CheckValidData;