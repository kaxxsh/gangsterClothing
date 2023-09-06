"use client";
import React, { useState } from "react";
import style from "@/styles/login.module.css";

const page = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.logo}>GANGSTER CLOTHING</div>
        <div className={style.signup}>
          <div className={style.title}>SIGN UP</div>
          <div className={style.inputfield}>
            <label>Username</label>
            <input type="text" />
          </div>
          <div className={style.inputfield}>
            <label>Email or Mobile number</label>
            <input type="text" />
          </div>
          <div className={style.inputfield}>
            <label>Password</label>
            <input type="text" />
          </div>
          <div className={style.inputfield}>
            <label>Confirm Password</label>
            <input type="text" />
          </div>
          <button>Continue</button>
          <div className={style.terms}>
            By continuing, you agree to gangster clouthing Conditions of Use and
            Privacy Notice.
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
