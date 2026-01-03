import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [selectedCountry, setSelectedCountry] = useState("SA");
  const { pathname } = useLocation();
  if (
    pathname.includes("payment") ||
    pathname.includes("navaz") ||
    pathname.includes("new-date")
  )
    return null;

  return (
    <footer className="bg-white py-12 px-4 w-11/12" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Contact Column */}
          <div className="space-y-6">
            {/* HomeRun Logo */}
            <a
              onClick={() => (window.location.href = "/")}
              className="inline-block"
            >
              <svg
                fill="none"
                height="28"
                width="142"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 142 28"
              >
                <path
                  d="M14.04 2.25a4.08 4.08 0 0 0-5.8 0 4.15 4.15 0 0 0 0 5.84l5.8-5.84ZM8.26 8.1l-.01-.02L0 16.38V27.4h16.5V16.38L8.25 8.1Z"
                  fill="#2CB34F"
                ></path>
                <path
                  d="M79.75 11.47a6.5 6.5 0 0 0-3.3-.9 6.5 6.5 0 0 0-3.32.9 6.48 6.48 0 0 0-1.65 1.37 6.48 6.48 0 0 0-1.65-1.37 6.5 6.5 0 0 0-3.3-.9 6.5 6.5 0 0 0-3.31.9 6.66 6.66 0 0 0-3.3 5.77V27.5h3.3V17.24c0-1.84 1.48-3.33 3.3-3.33s3.31 1.49 3.31 3.33v9.15c0 .62.5 1.11 1.1 1.11h2.2V17.24a3.31 3.31 0 1 1 6.61 0v9.15c0 .62.5 1.11 1.1 1.11h2.21V17.24a6.66 6.66 0 0 0-3.3-5.77Zm58.94 0a6.5 6.5 0 0 0-3.3-.9 6.5 6.5 0 0 0-3.7 1.15l-.2.15-.18.13-.2.17c-.06.05-.13.1-.18.16l-.17.15a6.6 6.6 0 0 0-.33.35v.01a5.93 5.93 0 0 0-.4.5l-.26.4-.04.06c-.1.16-.18.32-.26.49l-.02.03a7.6 7.6 0 0 0-.24.57l-.17.5v.03c-.06.18-.1.36-.13.54l-.02.12a6.76 6.76 0 0 0-.06.44l-.02.15a6.15 6.15 0 0 0-.03.57V27.5h3.31V17.24a3.32 3.32 0 0 1 3.3-3.33c1.83 0 3.31 1.49 3.31 3.33v9.15c0 .62.5 1.11 1.1 1.11h2.2V17.24a6.67 6.67 0 0 0-3.3-5.77Zm-15.28-.61v10.26a3.32 3.32 0 0 1-3.3 3.33 3.32 3.32 0 0 1-3.31-3.33V10.86h-3.31v10.26a6.66 6.66 0 0 0 3.3 5.76 6.5 6.5 0 0 0 3.31.9 6.5 6.5 0 0 0 3.3-.9 6.66 6.66 0 0 0 3.31-5.76V10.86h-3.3Zm-73.55-.28a8.57 8.57 0 0 0-8.54 8.6c0 4.75 3.82 8.6 8.54 8.6 4.71 0 8.54-3.85 8.54-8.6s-3.83-8.6-8.54-8.6Zm3.52 12.44a4.57 4.57 0 0 1-3.53 1.43A4.58 4.58 0 0 1 46.32 23 5.57 5.57 0 0 1 45 19.1a5.3 5.3 0 0 1 1.34-3.74 4.53 4.53 0 0 1 3.5-1.45c1.46 0 2.64.48 3.54 1.45a5.43 5.43 0 0 1 1.32 3.83c0 1.6-.44 2.87-1.32 3.83Zm-17.3-11.55a6.5 6.5 0 0 0-3.3-.9 6.5 6.5 0 0 0-3.3.9V6.45h-3.31V27.5h3.3V17.24c0-1.84 1.49-3.33 3.31-3.33s3.3 1.49 3.3 3.33v9.15c0 .62.5 1.11 1.1 1.11h2.21V17.24a6.66 6.66 0 0 0-3.3-5.77Zm75.16-.37c-.4-.17-.8-.3-1.24-.39-3.42-.55-4.64 1.81-4.64 1.81v-1.66h-3.3V27.5h3.3V17.24c0-.23.03-.46.07-.67a3.38 3.38 0 0 1 .5-1.2c.12-.17.25-.34.4-.49a3.42 3.42 0 0 1 1.05-.71 3.36 3.36 0 0 1 1.29-.26 3.3 3.3 0 0 1 1.29.26c.2.08.38.19.56.3l1.85-2.75a6.46 6.46 0 0 0-1.13-.62ZM92.73 27.78c-2.4 0-4.35-.78-5.79-2.32-1.45-1.56-2.18-3.67-2.18-6.26 0-2.57.71-4.67 2.12-6.26a7.3 7.3 0 0 1 5.64-2.33c2.36 0 4.25.76 5.61 2.27 1.36 1.5 2.05 3.62 2.05 6.3v.63H88.18l.03.31c.1 1.44.58 2.6 1.41 3.47.84.86 1.93 1.3 3.24 1.3 1.01 0 1.87-.26 2.54-.75a9.47 9.47 0 0 0 2.03-2.4l2.77 1.55c-.45.74-.92 1.38-1.4 1.92a8.37 8.37 0 0 1-1.75 1.47c-.6.38-1.28.66-1.99.84a10 10 0 0 1-2.34.26Zm-.13-14.24c-.5 0-.96.08-1.4.23a4.07 4.07 0 0 0-1.2.67c-.37.28-.68.64-.94 1.04a4.88 4.88 0 0 0-.58 1.37l-.1.36h8.48l-.1-.36c-.57-2.2-1.97-3.31-4.16-3.31Z"
                  fill="#111321"
                ></path>
              </svg>
            </a>

            {/* Contact Link */}
            <div>
              <a
                href="#"
                className="text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                اتصل بنا
              </a>
            </div>
          </div>

          {/* Service Providers Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">مقدمي الخدمة</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                القريبين مني
              </a>
            </div>
          </div>

          {/* Pricing Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">الاسعار</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                نقل اثاث الأسعار
              </a>
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                ترميم منازل الأسعار
              </a>
            </div>
          </div>

          {/* Popular Searches Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-sm">الأكثر بحثا</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                الرياض بناء عظم
              </a>
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                الرياض بناء ملاحق
              </a>
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                الرياض ترميم منازل
              </a>
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                الرياض نقل اثاث
              </a>
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                جدة نقل اثاث
              </a>
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                الدمام نقل اثاث
              </a>
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                جدة نقل عفش
              </a>
              <a
                href="#"
                className="block text-sm text-gray-700 hover:text-green-600 transition-colors"
              >
                الرياض نقل عفش
              </a>
            </div>
          </div>
        </div>

        {/* Country Selector and Register Button Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-gray-200">
          {/* Country Selector */}
          <div className="relative ">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg  py-2 px-10 text-sm text-gray-900 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="SA">المملكة العربية السعودية</option>
              <option value="TR">تركيا</option>
              <option value="IT">إيطاليا</option>
              <option value="UK">المملكة المتحدة</option>
              <option value="ES">إسبانيا</option>
              <option value="RO">رومانيا</option>
              <option value="DE">ألمانيا</option>
              <option value="FR">فرنسا</option>
              <option value="EG">مصر</option>
              <option value="AT">النمسا</option>
              <option value="CZ">الجمهورية التشيكية</option>
              <option value="CH">سويسرا</option>
              <option value="HU">هنغاريا</option>
              <option value="PL">بولندا</option>
            </select>
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
              <svg
                fill="none"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  clipRule="evenodd"
                  d="M2.945 4.5 8 9.372 13.055 4.5 14 5.536 8 11.5 2 5.536 2.945 4.5z"
                  fill="rgb(41,45,51)"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          {/* Register as Professional Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors"
          >
            <span>سجل كمحترف</span>
            <svg
              fill="none"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                clipRule="evenodd"
                d="m11.856 8.75-3.917 3.916 1.06 1.061 5.198-5.197V7.47L9 2.271 7.939 3.333l3.916 3.917H2.583v1.5h9.273z"
                fill="rgb(255,255,255)"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 my-6" />

        {/* Bottom Section - Social Media and Legal Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <svg
                fill="none"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="23.4"
                  stroke="#F0F1F2"
                  strokeWidth="1.2"
                ></circle>
                <path
                  clipRule="evenodd"
                  d="M33.2 23.6C33.2 18.2981 28.9019 14 23.6 14C18.2981 14 14 18.2981 14 23.6C14 28.3916 17.5106 32.3632 22.1 33.0834V26.375H19.6625V23.6H22.1V21.485C22.1 19.079 23.5332 17.75 25.7261 17.75C26.7764 17.75 27.875 17.9375 27.875 17.9375V20.3H26.6645C25.4719 20.3 25.1 21.04 25.1 21.7992V23.6H27.7625L27.3369 26.375H25.1V33.0834C29.6894 32.3632 33.2 28.3916 33.2 23.6Z"
                  fill="#0E0F11"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <svg
                fill="none"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="23.4"
                  stroke="#F0F1F2"
                  strokeWidth="1.2"
                ></circle>
                <path
                  clipRule="evenodd"
                  d="M19.2692 14H27.8247C30.7303 14 33.0942 16.3639 33.0941 19.2693V27.8248C33.0941 30.7302 30.7303 33.0941 27.8247 33.0941H19.2692C16.3637 33.0941 14 30.7303 14 27.8248V19.2693C14 16.3639 16.3637 14 19.2692 14ZM27.8248 31.3999C29.7962 31.3999 31.4001 29.7962 31.4001 27.8248H31.3999V19.2693C31.3999 17.298 29.7961 15.6941 27.8247 15.6941H19.2692C17.2979 15.6941 15.6941 17.298 15.6941 19.2693V27.8248C15.6941 29.7962 17.2979 31.4001 19.2692 31.3999H27.8248ZM18.627 23.5473C18.627 20.8343 20.8341 18.6272 23.547 18.6272C26.26 18.6272 28.4671 20.8343 28.4671 23.5473C28.4671 26.2601 26.26 28.4671 23.547 28.4671C20.8341 28.4671 18.627 26.2601 18.627 23.5473ZM20.3211 23.5471C20.3211 25.3259 21.7683 26.7729 23.547 26.7729C25.3257 26.7729 26.773 25.3259 26.773 23.5471C26.773 21.7683 25.3259 20.3212 23.547 20.3212C21.7682 20.3212 20.3211 21.7683 20.3211 23.5471ZM27.7959 17.5544C28.0264 17.3228 28.347 17.1907 28.6734 17.1907C29.001 17.1907 29.3217 17.3228 29.5521 17.5544C29.7836 17.7848 29.9158 18.1055 29.9158 18.4331C29.9158 18.7595 29.7836 19.0802 29.5521 19.3117C29.3206 19.5421 29.001 19.6754 28.6734 19.6754C28.347 19.6754 28.0263 19.5421 27.7959 19.3117C27.5643 19.0802 27.4311 18.7596 27.4311 18.4331C27.4311 18.1055 27.5642 17.7848 27.7959 17.5544Z"
                  fill="#0E0F11"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/armut"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <svg
                fill="none"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="23.4"
                  stroke="#F0F1F2"
                  strokeWidth="1.2"
                ></circle>
                <path
                  clipRule="evenodd"
                  d="M18.1667 14H29.8333C32.135 14 34 15.8658 34 18.1667V29.8333C34 32.1342 32.135 34 29.8333 34H18.1667C15.8658 34 14 32.1342 14 29.8333V18.1667C14 15.8658 15.8658 14 18.1667 14ZM20.6667 29.8333V20.6667H18.1667V29.8333H20.6667ZM19.4167 19.61C18.6117 19.61 17.9583 18.9517 17.9583 18.14C17.9583 17.3283 18.6117 16.67 19.4167 16.67C20.2217 16.67 20.875 17.3283 20.875 18.14C20.875 18.9517 20.2225 19.61 19.4167 19.61ZM28.1667 29.8333H30.6667V24.2008C30.6667 19.8233 25.9967 19.9825 24.8333 22.1375V20.6667H22.3333V29.8333H24.8333V25.1633C24.8333 22.5692 28.1667 22.3567 28.1667 25.1633V29.8333Z"
                  fill="#0E0F11"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          {/* Legal Links and Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <a
                href="#"
                target="_self"
                rel="nofollow"
                className="hover:text-green-600 transition-colors"
              >
                اتفاقية المستخدم
              </a>
              <span>•</span>
              <a
                href="#"
                target="_self"
                rel="nofollow"
                className="hover:text-green-600 transition-colors"
              >
                الخصوصية
              </a>
              <span>•</span>
              <a
                href="#"
                target="_self"
                rel="nofollow"
                className="hover:text-green-600 transition-colors"
              >
                اعجاب
              </a>
            </div>
            <span className="text-gray-600">
              © 2011 - 2025 جميع الحقوق محفوظة، HomeRun
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
