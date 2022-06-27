import React from "react";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import Header from "../Components/Header/Header";
import auth from "../firebaseConfig";
import Loading from "../Components/Loading/Loading";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let [VerifiedUser] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    e.target.reset();
  };
  if (VerifiedUser) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <Header />
      {loading && <Loading />}
      <AuthenticationForm action={handleSignup} error={error} />
    </>
  );
};

export default SignUp;
