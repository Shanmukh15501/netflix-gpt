import Header from "../components/Header";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { CheckValidData } from "../utils/validate";
import { addUser } from "../utils/userSlice";
import {PHOTO_URL} from "../utils/constants"; 
 
const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [formErrorMsg, setFormErrorMsg] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleToggleMode = () => {
    setIsSignIn((prev) => !prev);
    setFormErrorMsg("");
  };

  const handleSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
      setFormErrorMsg(`${error.code} - ${error.message}`);
    }
  };

  const handleSignUp = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (name.trim()) {
        await updateProfile(userCredential.user, {
          displayName: name.trim(),
          photoURL: PHOTO_URL
        });
      }

      dispatch(
        addUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: name.trim() || userCredential.user.displayName,
          photoURL: PHOTO_URL,
        })
      );

    } catch (error) {
      setFormErrorMsg(`${error.code} - ${error.message}`);
    }
  };

  const handleFormSubmit = () => {
    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    const validationError = CheckValidData(
      isSignIn ? null : name,
      email,
      password
    );

    setFormErrorMsg(validationError);

    if (validationError) return;

    if (isSignIn) {
      handleSignIn(email, password);
    } else {
      handleSignUp(name, email, password);
    }
  };

  return (
    <div className="absolute w-full">
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/75772f65-58b5-465f-b642-fa858b6168ca/web/IN-en-20260302-TRIFECTA-perspective_26418256-c5f3-4e9a-8160-a6b534228a2f_large.jpg"
        alt="Netflix Background"
        className="w-full"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 h-[450px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-left bg-opacity-80"
      >
        <h1 className="font-bold text-3xl m-2 text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter Name"
            ref={nameRef}
            className="p-3 m-2 w-[90%] bg-gray-600"
          />
        )}

        <input
          type="text"
          placeholder="Enter Email"
          ref={emailRef}
          className="p-3 m-2 w-[90%] bg-gray-600"
        />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          className="p-3 m-2 w-[90%] bg-gray-600"
        />

        <button
          type="button"
          onClick={handleFormSubmit}
          className="p-3 m-2 w-[90%] bg-red-600 text-white block"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="font-bold text-red-500 mx-2 text-center">
          {formErrorMsg}
        </p>

        <p className="p-4 text-white">
          {isSignIn ? (
            <>
              Are you new to Netflix?
              <button
                type="button"
                onClick={handleToggleMode}
                className="p-2 underline underline-offset-4"
              >
                Sign Up
              </button>
              Now
            </>
          ) : (
            <>
              Already a user?
              <button
                type="button"
                onClick={handleToggleMode}
                className="p-2 underline underline-offset-4"
              >
                Sign In
              </button>
              Now
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;