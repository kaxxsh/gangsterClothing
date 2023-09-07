"use client";
import React, { useState } from "react";
import style from "@/styles/login.module.css";
import { toast } from "react-toastify";

const Login = () => {
  const [credentials, setcredentials] = useState({
    Email: "",
    Password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(BASE_URL + "/api/login", {
      cache: "no-store",
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        Email: credentials.Email,
        Password: credentials.Password,
      }),
    });
    const data = await response.json();
    if (response.status > 399 && response.status < 499) {
      toast.error(data?.message, { autoClose: 3000 });
    } else {
      toast(data?.message, { autoClose: 1000 });
      router.push("/profile");
    }
  };
  return (
    <section>
      <div className={style.container}>
        <div className={style.logo}>GANGSTER CLOTHING</div>
        <div className={style.login}>
          <div className={style.title}>SIGN IN</div>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className={style.inputfield}>
              <label>Email or Mobile number</label>
              <input
                type="text"
                name="email"
                onChange={(e) =>
                  setcredentials({ ...credentials, Email: e.target.value })
                }
              />
            </div>
            <div className={style.inputfield}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) =>
                  setcredentials({ ...credentials, Password: e.target.value })
                }
              />
            </div>
            <button type="submit">Continue</button>
          </form>
          <div className={style.terms}>
            By continuing, you agree to gangster clouthing Conditions of Use and
            Privacy Notice.
          </div>
          <div className={style.create}>
            <div className={style.title}>New to gangster?</div>
            <a href="/auth/signup">Create your Gangster account</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
