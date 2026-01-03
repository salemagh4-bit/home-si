import React from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import NavBar from "../component/NavBar";

// export const serverRoute = "http://localhost:8080";
export const serverRoute = "https://home-ser1.onrender.com";
export const socket = io(serverRoute);

const Main = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    sessionStorage.clear();
    window.location.href = "/prices";
  };
  return (
    <div className="w-full flex flex-col bg-white h-full relative">
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet="https://cdn.armut.com/images/themes/sa/hero.jpg?tr=w-3840"
            />
            <img
              alt="احصل بسهولة على الخدمة"
              className="absolute h-full w-full left-0 top-0 right-0 bottom-0   object-center object-cover"
              sizes="100vw"
              src="https://cdn.armut.com/images/themes/sa/hero-mobile.jpg?tr=w-1920"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/60"></div>
        </div>

        {/* Header */}
        <NavBar />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto mt-50 px-4 flex items-end ">
          <div className="max-w-2xl mr-auto text-right " dir="rtl">
            <h1 className="text-4xl lg:text-7xl font-bold text-white  leading-tight">
              احصل بسهولة على الخدمة
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-5 leading-relaxed">
              احصل على عروض اسعار مجاناً و قارن. الآلاف من مزودي الخدمة في
              انتظارك.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-2xl mb-5">
              <div className="flex">
                <div className="flex-1 p-5 py-3">
                  <input
                    type="search"
                    id="service-search"
                    name="service-search"
                    placeholder="ما هي الخدمة التي تبحث عنها؟"
                    className="w-full text-right outline-none text-gray-800 placeholder-gray-500 text-lg"
                    dir="rtl"
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="بحث"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-2 text-lg font-bold transition-colors"
                  onClick={() => handleGetStarted()}
                >
                  بحث
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Services Section */}
      <div className="bg-white py-16 px-4" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-right">
            الخدمات الرائجة هذا الأسبوع
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Service Card 1 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/00032-boyaci-boya-badana-ustasi.jpg?tr=w-400"
                  alt="صبغ الجدران"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  صبغ الجدران
                </h4>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1,699 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.5 (613 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 2 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/82810-bathroom-insulation.jpg?tr=w-400"
                  alt="عزل حمامات"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  عزل حمامات
                </h4>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>414 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.2 (480 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 3 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/05358-bathroom-finishing.jpg?tr=w-400"
                  alt="تشطيب حمامات"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  تشطيب حمامات
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>279 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.4 (733 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 4 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/101380-kashf-tasribat-aliastah.jpg?tr=w-400"
                  alt="كشف تسربات الاسطح"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  كشف تسربات الاسطح
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>455 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.2 (488 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 5 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/02712-water-leak-examination.jpg?tr=w-400"
                  alt="فحص تسربات المياه"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  فحص تسربات المياه
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>511 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.6 (355 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 6 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/07753-room-building.jpg?tr=w-400"
                  alt="بناء غرفة"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  بناء غرفة
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1,553 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.4 (696 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 7 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/02715-water-tank-cleaning.jpg?tr=w-400"
                  alt="تنظيف خزانات المياه"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  تنظيف خزانات المياه
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>773 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.6 (554 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 8 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/16350-water-leak-detection.jpg?tr=w-400"
                  alt="كشف تسربات المياه"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  كشف تسربات المياه
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1,731 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.6 (260 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 9 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/003395-bina-manzil.jpg?tr=w-400"
                  alt="بناء منزل"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  بناء منزل
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1,295 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.4 (768 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 10 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/76680-villa-renovation.jpg?tr=w-400"
                  alt="ترميم فيلا"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  ترميم فيلا
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1,247 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.1 (296 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 11 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/16352-surface-insulation.jpg?tr=w-400"
                  alt="عزل الاسطح"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  عزل الاسطح
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>953 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>5.0 (67 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>

            {/* Service Card 12 */}
            <a
              href="#"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://cdn.armut.com/images/services/077912-kesf-tesribat-alhamaamat.jpg?tr=w-400"
                  alt="كشف تسربات الحمامات"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  كشف تسربات الحمامات
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M4.63177 3.58451C4.63177 2.82611 5.24552 2.2127 6.0009 2.2127C6.75628 2.2127 7.37003 2.82611 7.37003 3.58451C7.37003 4.34291 6.75628 4.95632 6.0009 4.95632C5.24552 4.95632 4.63177 4.34291 4.63177 3.58451ZM6.0009 1.0127C4.58124 1.0127 3.43177 2.1649 3.43177 3.58451C3.43177 5.00411 4.58124 6.15632 6.0009 6.15632C7.42056 6.15632 8.57003 5.00411 8.57003 3.58451C8.57003 2.1649 7.42056 1.0127 6.0009 1.0127ZM4.0308 6.92847C3.34916 6.92847 2.69561 7.19962 2.21386 7.68202C1.73215 8.16439 1.46167 8.81846 1.46167 9.50028V10.9791H2.66167V9.50028C2.66167 9.13619 2.80612 8.78718 3.06297 8.52997C3.31979 8.2728 3.66795 8.12847 4.0308 8.12847H7.96907C8.33192 8.12847 8.68008 8.2728 8.9369 8.52997C9.19375 8.78718 9.3382 9.13619 9.3382 9.50028V10.9791H10.5382V9.50028C10.5382 8.81845 10.2677 8.16439 9.78601 7.68202C9.30426 7.19962 8.65071 6.92847 7.96907 6.92847H4.0308Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>901 المهنيين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M6.22743 1.5H5.60941L4.63417 4.56823H1.72464L1.5 5.21352L3.72137 7.07233L2.64354 10.1177L3.17124 10.5L5.91842 8.65305L8.66561 10.5L9.1933 10.1177L8.11598 7.07427L10.5 5.15547L10.2789 4.56823H7.20217L6.22743 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>4.6 (344 تعليقات)</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  احصل على عروض الاسعار
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-right">
              <div className="flex items-center gap-x-2 mb-4">
                <div className="flex justify-center ">
                  <svg
                    fill="none"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="bg-[#07e7252c] rounded-full p-2 mr-3"
                  >
                    <path
                      d="M22 9.79H2m3.684-5.264 6.13 15.326a.2.2 0 0 0 .372 0l6.13-15.326m-5.79 16.316h-.947L2 10.105v-.737L5.684 4H12m.526 16.842L22 10.422v-1.37L18.316 4H12m.526 16.842h-1.052M12 4 7.684 9.79M12 4l4.316 5.79"
                      stroke="rgb(44,179,79)"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  احصل على جودة في الخدمة
                </h3>
              </div>
              <p className="text-gray-600 w-11/12">
                لاتخاذ قرارك بثقة، يمكنك التحقق من مستوى جودة الخدمات التي
                يقدّمها مزود الخدمة عبر قراءة تقييمات حقيقية لعملاء سبق وتعاملوا
                معه.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-right">
              <div className="flex items-center gap-x-2 mb-4">
                <div className="flex justify-center">
                  <svg
                    fill="none"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="bg-[#07e7252c] rounded-full p-2 mr-3"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.9 3.5h1.35V2h-4v1.5H9.4v1.53A8.23 8.23 0 0 0 2 13.25a8.3 8.3 0 0 0 8.25 8.25c2.3 0 4.38-.95 5.88-2.5h4.12v-1.5h-2.96c.38-.63.68-1.32.88-2.05l-1.44-.4A6.75 6.75 0 0 1 10.25 20a6.8 6.8 0 0 1-6.75-6.75c0-3.7 2.98-6.75 6.65-6.75 2.08 0 3.87.9 5.03 2.24l.23.26h4.84V7.5h-4.17a8.1 8.1 0 0 0-5.18-2.47V3.5Zm5.56 7.05c.36.8.54 1.7.54 2.7V14h5.25v-1.5h-3.78a7.79 7.79 0 0 0-.63-2.55l-1.38.6Z"
                      fill="rgb(44,179,79)"
                      fillRule="evenodd"
                    />
                    <path
                      d="M9.42 8.25h1.5v4.25h2.25V14H9.42V8.25Z"
                      fill="rgb(44,179,79)"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">وفر وقتك</h3>
              </div>
              <p className="text-gray-600 w-11/12">
                لا تضيّع وقتك في التحقق من مراجع الأصدقاء والعائلة. احصل على
                عروض مخصصة للخدمة التي تريدها عبر الإنترنت، واحتفظ بوقتك لقضائه
                مع أحبائك.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-right">
              <div className="flex items-center gap-x-2 mb-4">
                <div className="flex justify-center">
                  <svg
                    fill="none"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="bg-[#07e7252c] rounded-full p-2 mr-3"
                  >
                    <path
                      clipRule="evenodd"
                      d="m20.25 4.942 2.793-2.924L21.957.982 9.326 14.207 6.56 11.105l-1.12.998 3.253 3.647h1.234l8.823-9.237v6.71c0 1.977-.882 3.687-2.389 4.79l-5.111 3.572-5.128-3.584-.011-.007c-1.459-.946-2.361-2.764-2.361-4.77V5.25h10.772v-1.5H2.25v9.474c0 2.42 1.085 4.751 3.033 6.021l5.967 4.17 5.983-4.181.007-.005c1.903-1.39 3.01-3.554 3.01-6.005V4.942z"
                      fill="rgb(44,179,79)"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  مجموعة واسعة من الخدمات
                </h3>
              </div>
              <p className="text-gray-600 w-11/12">
                نريد التأكد من أن جميع مقدمي الخدمة لدينا يقدمون أفضل خدماتهم و
                يقدمون مجموعة واسعة من الخدمات المختلفة في متناولك.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-right">
              <div className="flex items-center gap-x-2 mb-4">
                <div className="flex justify-center">
                  <svg
                    fill="none"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="bg-[#07e7252c] rounded-full p-2 mr-3"
                  >
                    <path
                      clipRule="evenodd"
                      d="M11.702 1C6.914 1 3 4.914 3 9.702c0 3.002 1.571 5.7 3.96 7.266l.651 3.072.694.562h.161l1.003 2.006.635.392H13.4l.635-.392 1.003-2.006h.061l.691-.548.687-2.945.097-.242c2.285-1.543 3.83-4.195 3.83-7.165C20.404 4.914 16.49 1 11.702 1zm1 16.305h-4.22l.398 1.878h5.656l.571-2.449.032-.102.2-.5.278-.335c2.005-1.276 3.368-3.553 3.368-6.095 0-4.004-3.279-7.283-7.283-7.283-4.004 0-7.283 3.28-7.283 7.283 0 2.568 1.383 4.886 3.484 6.184H12.7v1.42zM8.515 9.203v-.71h-1.42v.71c0 1.436 1.38 2.308 2.708 2.308.707 0 1.428-.247 1.949-.694.52.447 1.241.694 1.948.694 1.329 0 2.708-.872 2.708-2.308v-.71h-1.42v.71c0 .363-.419.889-1.288.889-.651 0-1.05-.295-1.209-.596.013-.095.02-.193.02-.293v-.71H10.993v.71c0 .1.007.198.02.293-.16.3-.558.596-1.209.596-.87 0-1.288-.526-1.288-.889zm2.026 12.378-.49-.979h3.399l-.49.979h-2.419z"
                      fill="rgb(44,179,79)"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  استخدمه ببساطة
                </h3>
              </div>
              <p className="text-gray-600 w-11/12">
                خذ دقيقة من وقتك للإجابة على أسئلة مخصصة بالخدمة التي تريدها
                لتحقيق ما تريده بسهولة.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-gray-50 py-16 px-4" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              كيف تعمل؟
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 mt-2 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        1. ادخل طلبك
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      هدفنا في هوم رن هو ان نسهّل عليك عملية البحث على مزودي
                      الخدمات. اجب على بعض الأسئلة و قم بإدخال معلومات الاتصال
                      بك. هوم رن يضمن الحفاظ على سرية معلوماتك.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <img
                  src="https://cdn.armut.com/images/public-pages/how-it-works/date/middle-east.png?tr=w-500"
                  alt="ادخل طلبك"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 mt-2 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        2. تلقى عدة عروض الأسعار و قارنها
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      عندما نتلقى طلبك، نقوم بارساله لمزودي الخدمة القريبين منك.
                      مزودي الخدمة المتاحين و المهتمين سوف يرسلون عرض اسعار خاص
                      لطلبك.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <img
                  src="https://cdn.armut.com/images/public-pages/how-it-works/quotes/middle-east.png?tr=w-500"
                  alt="تلقى عدة عروض الأسعار و قارنها"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 mt-2 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold"></div>{" "}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        3. اكتب تعليق عن تجربتك ما بعد الخدمة
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      عندما تتلقى عرض اسعار من مزود الخدمة، راجع التقييمات من
                      العملاء السابقين و تفاوض على السعر. لا تنسى كتابة تعليقك
                      الخاص ما بعد الخدمة.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <img
                  src="https://cdn.armut.com/images/public-pages/how-it-works/picking/middle-east.png?tr=w-500"
                  alt="اكتب تعليق عن تجربتك ما بعد الخدمة"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Signup Banner */}
      <div className=" py-16 px-4" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-xl bg-[#94949470] flex  flex-col md:flex-row items-center">
            <img
              src="https://cdn.armut.com/images/homepage/pro-signup-banner/middle-east.png?tr=w-1920"
              alt="انضم إلينا كمقدم خدمة"
              className="w-full max-h-52 md:max-h-96  object-cover object-top"
            />
            <div className="relative z-10 py-8 px-8 lg:px-16">
              <div className="max-w-2xl mr-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  انضم إلينا كمقدم خدمة
                </h2>
                <p className="text-lg text-white -6">
                  HomeRun يتلقى أكثر من مليون طلب خدمة كل عام. إذا كنت تجيد ما
                  تفعله و كنت بحاجة الى مزيد من العملاء يمكنك الانضمام إلينا.
                  التسجيل مجاني.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-10 gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  <span>نضم الان</span>
                  <svg
                    fill="none"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    style={{ transform: "scaleX(-1)" }}
                  >
                    <path
                      clipRule="evenodd"
                      d="m11.856 8.75-3.917 3.916 1.06 1.061 5.198-5.197V7.47L9 2.271 7.939 3.333l3.916 3.917H2.583v1.5h9.273z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16 px-4" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            الخدمات
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "بناء عظم", href: "#" },
              { name: "بناء غرفة", href: "#" },
              {
                name: "بناء غرفة في السطح",
                href: "#",
              },
              { name: "بناء فلل", href: "#" },
              { name: "بناء ملاحق", href: "#" },
              { name: "تخزين اثاث", href: "#" },
              { name: "تركيب بلاط", href: "#" },
              {
                name: "تركيب كاميرات مراقبة",
                href: "#",
              },
              { name: "ترميم", href: "#" },
              {
                name: "ترميم حمامات",
                href: "#",
              },
              {
                name: "ترميم منازل",
                href: "#",
              },
              { name: "تنظيف", href: "#" },
              {
                name: "تنظيف المنزل الفارغ",
                href: "#",
              },
              { name: "تنظيف شقق", href: "#" },
              {
                name: "تنظيف ما بعد البناء",
                href: "#",
              },
              {
                name: "تنظيف منازل",
                href: "#",
              },
              { name: "سباكه", href: "#" },
              { name: "شحن", href: "#" },
              { name: "مقاول بناء", href: "#" },
              {
                name: "مقاول ترميم",
                href: "#",
              },
              {
                name: "مقاولات عامة",
                href: "#",
              },
              { name: "نجار", href: "#" },
              { name: "نقل اثاث", href: "#" },
              { name: "نقل عفش", href: "#" },
            ].map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="text-sm text-gray-700 hover:text-green-600 hover:underline transition-colors"
              >
                {service.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Search Banner */}
      <div className="bg-white py-16 px-4" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://cdn.armut.com/images/homepage/search-banner/middle-east.png?tr=w-1920"
              alt="اتركها علينا"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            <div className="relative z-10 py-16 px-8 lg:px-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  اتركها علينا
                </h2>
                <p className="text-lg text-white mb-6">
                  احصل على عروض الأسعار مجانًا وقارنها. 100.000 محترف جاهزون لك.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  <svg
                    fill="none"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      clipRule="evenodd"
                      d="M2.75 7.333a4.583 4.583 0 1 1 7.99 3.066l-.341.342A4.583 4.583 0 0 1 2.75 7.334zm8.322 4.8a6.083 6.083 0 1 1 1.06-1.06l2.398 2.397.53.53L14 15.06l-.53-.53-2.398-2.397z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>بحث</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Near Me Section */}
      <div className="bg-gray-50 py-16 px-4" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            القريبين مني
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              {
                name: "الرياض",
                href: "#",
              },
              { name: "جدة", href: "#" },
              {
                name: "الدمام",
                href: "#",
              },
              { name: "ابها", href: "#" },
              {
                name: "الاحساء",
                href: "#",
              },
              {
                name: "الباحة",
                href: "#",
              },
              {
                name: "الجبيل",
                href: "#",
              },
              {
                name: "الجوف",
                href: "#",
              },
              {
                name: "الخبر",
                href: "#",
              },
              {
                name: "الخفجي",
                href: "#",
              },
              {
                name: "الطائف",
                href: "#",
              },
              {
                name: "الظهران",
                href: "#",
              },
              {
                name: "القصيم",
                href: "#",
              },
              {
                name: "القطيف",
                href: "#",
              },
              {
                name: "المدينة المنورة",
                href: "#",
              },
              {
                name: "الهفوف",
                href: "#",
              },
              { name: "بقيق", href: "#" },
              { name: "بيشة", href: "#" },
              { name: "تبوك", href: "#" },
              {
                name: "جازان",
                href: "#",
              },
              { name: "حائل", href: "#" },
              {
                name: "حفر الباطن",
                href: "#",
              },
              {
                name: "خميس مشيط",
                href: "#",
              },
              { name: "رابغ", href: "#" },
              {
                name: "راس تنورة",
                href: "#",
              },
              { name: "عسير", href: "#" },
              {
                name: "محافظات الرياض",
                href: "#",
              },
              {
                name: "مكة المكرمة",
                href: "#",
              },
              {
                name: "نجران",
                href: "#",
              },
              { name: "ينبع", href: "#" },
            ].map((city, index) => (
              <a
                key={index}
                href={city.href}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 hover:underline transition-colors"
              >
                <svg
                  fill="none"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    clipRule="evenodd"
                    d="M4.084 6.667a3.917 3.917 0 1 1 7.833 0c0 1.722-1.017 3.38-2.147 4.672A15.212 15.212 0 0 1 8 13.05a15.212 15.212 0 0 1-1.769-1.71c-1.13-1.291-2.147-2.95-2.147-4.672zm3.48 7.943.437-.61-.436.61.436.312.436-.312L8 14l.436.61.002-.001.004-.003.013-.01a5.038 5.038 0 0 0 .205-.154 16.698 16.698 0 0 0 2.238-2.114c1.202-1.376 2.518-3.384 2.518-5.661a5.417 5.417 0 1 0-10.833 0c0 2.277 1.316 4.285 2.519 5.66a16.703 16.703 0 0 0 2.238 2.115 9.832 9.832 0 0 0 .205.155l.013.009.004.003.001.001zM8 3.916a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm-1.25 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="bg-white py-16 px-4" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                قم بالتحميل الآن، وانجز الأمور!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                قم بتنزيل تطبيق HomeRun مجانًا، وشاهد عروض الأسعار على الفور
                وتحدث بسهولة مع مزودي الخدمة.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" rel="nofollow" target="_blank">
                  <img
                    src="/apple.svg"
                    alt="Download on App Store"
                    className="h-12"
                  />
                </a>
                <a href="#" rel="nofollow" target="_blank">
                  <img
                    src="/play.svg"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full opacity-50 blur-3xl"></div>
              <img
                src="https://cdn.armut.com/images/public-pages/app-download/sa.png?tr=w-600"
                alt="قم بالتحميل الآن"
                className="relative w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
