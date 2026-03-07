import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // Get user from Redux store
  const currentUser = useSelector((store) => store.user);

  useEffect(() => {
    
    // Start listening to authentication changes
    const stopAuthListener = onAuthStateChanged(auth, (firebaseUser) => {

      if (firebaseUser) {
        const { uid, email, displayName, photoURL } = firebaseUser;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );

      } else {
        dispatch(removeUser());
      }

    });

    // Cleanup listener when component unmounts
    return stopAuthListener;

  }, [dispatch]);

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
    <div className="flex items-center justify-between w-screen h-20 absolute top-0 left-0 z-10 px-4 bg-gradient-to-b from-black">
      
      {/* Netflix Logo */}
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="h-20 w-auto"
      />

      {/* Show only if user is logged in */}
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