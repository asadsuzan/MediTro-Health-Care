import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import Header from "../Components/Header/Header";
import auth from "../firebaseConfig";
import Loading from "../Components/Loading/Loading";
import Footer from "../Components/Footer/Footer";
import { UseToken } from "../hooks";

const SignUp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let [VerifiedUser] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [token] = UseToken(user);

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    e.target.reset();
  };
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <Header />
      {loading && <Loading />}
      <AuthenticationForm action={handleSignup} error={error} />
      <Footer />
    </>
  );
};

export default SignUp;
