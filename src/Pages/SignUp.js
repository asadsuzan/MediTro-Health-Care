import React from "react";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import Header from "../Components/Header/Header";
import auth from "../firebaseConfig";
import { async } from "@firebase/util";
import Loading from "../Components/Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    e.target.reset();
  };

  return (
    <>
      <Header />
      {loading && <Loading />}
      <AuthenticationForm action={handleSignup} error={error} />
    </>
  );
};

export default SignUp;
