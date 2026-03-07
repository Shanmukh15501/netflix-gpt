import Header from "../components/Header";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { CheckValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formErrorMsg, setFormErrorMsg] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInToggle = () => {
    setIsSignIn((prev) => !prev);
    setFormErrorMsg("");
  };

  const handleFormData = () => {
    const nameValue = name.current?.value ?? "";
    const emailValue = email.current?.value ?? "";
    const passwordValue = password.current?.value ?? "";

    const result = CheckValidData(
      isSignIn ? null : nameValue,
      emailValue,
      passwordValue,
    );
    setFormErrorMsg(result);

    if (result) {
      return;
    }

    if (isSignIn) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(() => {
          setFormErrorMsg("");
          console.log("success")
        })
        .catch((error) => {
          setFormErrorMsg(`${error.code} - ${error.message}`);
        });
      return;
    }

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(() => {
        setFormErrorMsg("");
      })
      .catch((error) => {
        setFormErrorMsg(`${error.code} - ${error.message}`);
      });
  };

  return (
    <div className="absolute w-full">
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/75772f65-58b5-465f-b642-fa858b6168ca/web/IN-en-20260302-TRIFECTA-perspective_26418256-c5f3-4e9a-8160-a6b534228a2f_large.jpg"
        alt="netflix-header"
        className="w-full"
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 h-[450px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-left bg-opacity-80"
      >
        <h1 className="font-bold text-3xl m-2 text-white">
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </h1>

        {!isSignIn ? (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-3 m-2 w-[90%] bg-gray-600"
            ref={name}
          />
        ) : null}

        <input
          type="text"
          placeholder="Enter Email"
          ref={email}
          className="p-3 m-2 w-[90%] bg-gray-600"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 m-2 w-[90%] bg-gray-600"
        />

        <button
          type="button"
          onClick={handleFormData}
          className="p-3 m-2 w-[90%] bg-red-600 text-white block"
        >
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </button>

        <p className="font-bold text-1xl text-red-500 mx-2 text-center">
          {formErrorMsg}
        </p>

        <p className="p-4 text-white">
          {isSignIn ? (
            <>
              Are you new to Netflix?{" "}
              <button
                type="button"
                onClick={handleSignInToggle}
                className="p-2 underline underline-offset-4"
              >
                Sign-Up
              </button>{" "}
              Now
            </>
          ) : (
            <>
              Already a user?{" "}
              <button
                type="button"
                onClick={handleSignInToggle}
                className="p-2 underline underline-offset-4"
              >
                Sign-In
              </button>{" "}
              Now
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
