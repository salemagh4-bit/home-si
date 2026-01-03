import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  if (window.location.pathname.includes("navaz")) return;

  return (
    <header className="relative z-10 w-full bg-transparent">
      <div
        className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between "
        dir="rtl"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center self-center flex-1 justify-center md:flex-none"
        >
          <div className="w-40 lg:w-52">
            <img src="/logo.png" alt="Home Run Logo" />
          </div>
        </a>
        {/* Menu Button */}
        <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden flex gap-x-1">
          <span className=" text-white">قائمة</span>
          <svg
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              clipRule="evenodd"
              d="M2.25 5.25h19.5v1.5H2.25v-1.5zm0 6h19.5v1.5H2.25v-1.5zm.75 6h-.75v1.5h19.5v-1.5H3z"
              fill="rgb(255,255,255)"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="/category/home"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            منزلية
          </a>
          <a
            href="/category/moving"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            نقل
          </a>
          <a
            href="/category/cleaning"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            تنظيف
          </a>
          <a
            href="/category/repair"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            تركيب وتصليح
          </a>
        </nav>

        {/* Right Side Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/help"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            مساعدة
          </a>
          <a
            href="/account"
            className="text-white hover:text-green-400 font-medium transition-colors"
          >
            الحساب
          </a>
          <button className="text-white hover:text-green-400 font-medium transition-colors">
            تسجيل خروج
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
