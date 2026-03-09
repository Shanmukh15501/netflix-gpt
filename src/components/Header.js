import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {REACT_APP_NETFLIX_LOGO_URL} from "../utils/constants"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get user from Redux store
  const currentUser = useSelector((store) => store.user);

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {

      if (firebaseUser) {
        const { uid, email, displayName, photoURL } = firebaseUser;

        // Store user in Redux
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );

        // Redirect to browse page
        navigate("/browse");

      } else {
        // Remove user from Redux
        dispatch(removeUser());

        // Redirect to login page
        navigate("/");
      }
    });

    // Cleanup listener when component unmounts
    return () => unsubscribeAuth();

  }, [dispatch, navigate]);

  // Logout handler
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      navigate("/error");
    }
  };

  return (
    <div className="flex items-center justify-between w-screen h-20 absolute top-0 left-0 z-20 px-6 md:px-10">

      {/* Netflix Logo */}
      <img
        src={REACT_APP_NETFLIX_LOGO_URL}
        alt="Netflix Logo"
        className="h-20 w-auto"
      />

      {/* Show only when user is logged in */}
      {currentUser && (
        <div className="flex items-center gap-4">

          {/* User Avatar */}
          <img
            src={currentUser.photoURL}
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />

          {/* Logout Icon */}
          <FiLogOut
            className="text-white text-2xl cursor-pointer hover:text-red-500"
            title="Sign Out"
            onClick={handleSignOut}
          />

        </div>
      )}

    </div>
  );
};

export default Header;