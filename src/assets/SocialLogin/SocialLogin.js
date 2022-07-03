import React from "react";
import "./SocialLogin.css";
import { FcGoogle } from "react-icons/fc";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebaseConfig";
import Loading from "../../Components/Loading/Loading";
import { UseToken } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = UseToken(user);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="social-login mt-5">
      <div className="divider d-flex justify-content-between align-items-center my-4">
        <div className="divider-line"></div>
        <div>or</div>
        <div className="divider-line"></div>
      </div>
      <div>
        <MyButtonLg
          action={() => signInWithGoogle()}
          style={{
            background: "#e1e2f6",
            width: "100%",
            padding: "5px 0",
            color: "#1f2278",
          }}
        >
          <FcGoogle color="red" size={"2rem"} className="pe-2" />
          login
        </MyButtonLg>
      </div>
    </div>
  );
};

export default SocialLogin;
