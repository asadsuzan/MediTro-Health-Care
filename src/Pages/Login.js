import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import Footer from "../Components/Footer/Footer";

import Header from "../Components/Header/Header";
import Loading from "../Components/Loading/Loading";
import auth from "../firebaseConfig";
import { UseToken } from "../hooks";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let [VerifiedUser, isLoading] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = UseToken(user);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    e.target.reset();
  };
  if (isLoading || loading) {
    return <Loading />;
  }
  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <Header />
      {loading && <Loading />}
      <div style={{ marginTop: "120px" }}>
        {" "}
        <AuthenticationForm action={handleLogin} error={error} />
      </div>
      <Footer />
    </>
  );
};

export default Login;
