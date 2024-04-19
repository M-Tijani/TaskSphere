import Contact from "../assets/Contact Phone.svg";
// Icons
import { FaGoogle } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { ShieldAlert } from "lucide-react";
//
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

// States
import { useState, useEffect } from "react";
import axios from "axios";
// routs
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
// Auth
// import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fileds, setFields] = useState("");

  // Set Cookies
  const [token, setToken] = useState("");
  const [emailCookie, setEmailCookie] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log(response);
      // let token1 = response.data.token;
      // let emailCookie1 = response.data.email;

      // setToken(token1);
      // setEmailCookie(emailCookie1);

      // Cookies.set("token", token);
      // Cookies.set("email", emailCookie);
      // Navigate
      navigate("/dashboard");
    } catch (err) {
      const response = err.response.data.message;
      setFields(response);
      setTimeout(() => {
        setFields("");
      }, 5000);
    }
  };
  const [password1, setPassword1] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  // Navigate
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:h-[750px] lg:gap-[100px] gap-5 duration-200">
        <img
          className="w-[300px] md:w-[450px] duration-200"
          src={Contact}
          alt=""
        />
        <div className="flex flex-col items-center gap-7">
          <div>
            <h1 className="text-2xl font-extrabold">Welcome to TaskSphere!</h1>
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full items-center "
            action=""
          >
            <div className="relative my-4">
              <div>
                <div className="relative">
                  <input
                    className="inupt"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Example : example@email.com....."
                  />
                  <Mail className="absolute  top-[7px] left-2" />
                </div>
              </div>
              <h1 className="absolute bottom-[40px] left-4 font-bold">Email</h1>
            </div>
            <div className="relative">
              <div className="relative my-4">
                <div>
                  <div className="relative">
                    <input
                      className="inupt"
                      value={password1}
                      type={type}
                      onChange={(e) => {
                        setPassword(e.target.value),
                          setPassword1(e.target.value);
                      }}
                      placeholder="Example : ************"
                    />
                    <Lock className="absolute  top-[7px] left-2" />
                  </div>
                </div>
                <h1 className="absolute bottom-[40px] left-4 font-bold">
                  Password
                </h1>
              </div>
              <span
                className="absolute top-[22px] right-[10px] cursor-pointer"
                onClick={handleToggle}
              >
                <Icon className="" icon={icon} size={25} />
              </span>
            </div>
            {/* Breake Here */}
            {fileds && (
              <div className=" flex items-center justify-center gap-1 mb-2">
                <ShieldAlert />
                <h1 className="text-red-500 font-bold">{fileds}</h1>
              </div>
            )}
            {/* Breake Here */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-between gap-2">
                <button type="submit" className="btn_main">
                  Login
                </button>
                <div className="flex items-center justify-center gap-2">
                  <h1 className="font-bold">Continue with</h1>
                  <div className="relative icon_media cursor-pointer">
                    <span className=""></span>
                    <FaGoogle
                      color="2F2D2E"
                      size={22}
                      className="absolute top-[4px] left-[4px]"
                    />
                  </div>
                  <div className="relative icon_media cursor-pointer">
                    <span className=""></span>
                    <FaGithubAlt
                      size={22}
                      color="2F2D2E"
                      className="absolute top-[4px] left-[4px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center justify-between gap-2">
                <Link to="/register">
                  <button className="btn_secondary">Register</button>
                </Link>

                <h1 className="font-bold">Don’t have an account!</h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
