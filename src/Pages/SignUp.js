import React from "react";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import Header from "../Components/Header/Header";
import auth from "../firebaseConfig";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    console.log(user);
  }
  if (error) {
    console.error(error.message);
  }

  return (
    <>
      <Header />
      <AuthenticationForm action={handleSignup} />
    </>
  );
};

export default SignUp;
