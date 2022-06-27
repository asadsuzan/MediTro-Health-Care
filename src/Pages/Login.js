import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";

import Header from "../Components/Header/Header";
import Loading from "../Components/Loading/Loading";
import auth from "../firebaseConfig";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    e.target.reset();
  };

  return (
    <>
      <Header />
      {loading && <Loading />}
      <AuthenticationForm action={handleLogin} error={error} />
    </>
  );
};

export default Login;
