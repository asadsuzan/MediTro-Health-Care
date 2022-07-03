import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Components/Loading/Loading";
import auth from "../firebaseConfig";
import { Navigate, useLocation } from "react-router-dom";
import { UseAdmin } from "../hooks";
import { signOut } from "firebase/auth";

const RequieAdmin = ({ children }) => {
  let [user, loading] = useAuthState(auth);
  const [isAdmin, isLoading] = UseAdmin(user);

  let location = useLocation();

  if (loading || isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (isAdmin === false || !user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequieAdmin;
