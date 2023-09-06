"use client";
import React, { useState } from "react";
import style from "@/styles/login.module.css";

const page = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.logo}>GANGSTER CLOTHING</div>
        <div className={style.login}>
          <div className={style.title}>SIGN IN</div>
          <div className={style.inputfield}>
            <label>Email or Mobile number</label>
            <input type="text" />
          </div>
          <div className={style.inputfield}>
            <label>Password</label>
            <input type="text" />
          </div>
          <button>Continue</button>
          <div className={style.terms}>
            By continuing, you agree to gangster clouthing Conditions of Use and
            Privacy Notice.
          </div>
          <div className={style.create}>
            <div className={style.title}>New to gangster?</div>
            <a href="/signup">Create your Gangster account</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
