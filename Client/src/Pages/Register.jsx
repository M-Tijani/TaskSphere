import Contact from "../assets/Contact Phone.svg";
// Icons

import { FaGoogle } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { ShieldAlert } from "lucide-react";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

// States
import { useState, useRef } from "react";
import axios from "axios";
// routs
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const [password, setPassword] = useState("");
  const [type1, setType1] = useState("password");
  const [icon1, setIcon1] = useState(eyeOff);

  const handleToggle1 = () => {
    if (type1 === "password") {
      setIcon1(eye);
      setType1("text");
    } else {
      setIcon1(eyeOff);
      setType1("password");
    }
  };
  // API REGISTER
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordvalue, setPasswordvalue] = useState("");
  const [fileds, setFields] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(passwordvalue);
    console.log(username);
    console.log(email);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        {
          username: username,
          email: email,
          password: passwordvalue,
        }
      );
      // Navigate
      navigate("/login");
      console.log(response);
    } catch (err) {
      console.log(err);
      const response = err.response.data.message;
      setFields(response);
      console.log(response);
      setTimeout(() => {
        setFields("");
      }, 5000);
    }
  };
  // Navigate
  const navigate = useNavigate();
  return (
    <>
      {/* Breake Here */}
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
            onSubmit={handleRegister}
            className="flex flex-col w-full items-center "
            action=""
          >
            <div className="relative my-4">
              <div>
                <div className="relative">
                  <input
                    className="inupt"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Example : Tijani....."
                  />
                  <User className="absolute top-[7px] left-2" />
                </div>
              </div>
              <h1 className="absolute bottom-[40px] left-4 font-bold">
                Username
              </h1>
            </div>
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
                      value={password}
                      type={type1}
                      onChange={(e) => {
                        setPassword(e.target.value),
                          setPasswordvalue(e.target.value);
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
                onClick={handleToggle1}
              >
                <Icon className="" icon={icon1} size={25} />
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
                  Register
                </button>
                <div className="flex items-center justify-center gap-2">
                  <h1 className="font-bold">Continue with</h1>

                  <div className="relative icon_media cursor-pointer">
                    <span className=""></span>
                    <FaGoogle
                      color="2F2D2E"
                      size={22}
                      className="absolute top-[5px] left-[4px]"
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
                <Link to="/login">
                  <button className="btn_secondary">Login</button>
                </Link>

                <h1 className="font-bold">Elready have an account!</h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
