import React from "react";

const Prices = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Mobile Layout */}
      <div className="">
        {/* Top Button */}
        <div className=" flex items-center justify-between px-4 py-4 bg-white shadow-md">
          <div className="w-fit bg-black rounded-full">
            <img src="/logo.png" className="" />
          </div>
          <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-2 rounded-lg font-semibold text-sm shadow-lg hover:bg-green-50 transition-colors">
            توفير خدمة
          </button>
        </div>

        {/* Hero Section with Card */}
        <div className="relative pb-6 lg:hidden">
          {/* Background Image */}
          <div className="relative w-full h-[400px] overflow-hidden">
            <picture>
              <source
                media="(max-width: 639px)"
                sizes="100vw"
                srcSet="https://cdn.armut.com/images/services/mobile/16347-home-cleaning.jpg?tr=w-640 640w, https://cdn.armut.com/images/services/mobile/16347-home-cleaning.jpg?tr=w-750 750w"
              />
              <img
                alt="تنظيف منازل"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://cdn.armut.com/images/services/mobile/16347-home-cleaning.jpg?tr=w-640"
              />
            </picture>
          </div>

          {/* White Content Card */}
          <div className="relative mx-4 -mt-48 bg-white rounded-2xl shadow-xl p-6 z-10">
            <h1 className="text-2xl font-bold text-gray-900 mb-3 text-right leading-tight">
              أسعار تنظيف منازل موجودة على هوم رن!
            </h1>

            <div className="mb-2">
              <span className="text-xs text-gray-500 text-right block">
                متوسط السعر
              </span>
            </div>

            <div className="mb-4">
              <span className="text-2xl font-bold text-green-600 text-right block">
                250 ر.س. - 2,500 ر.س.
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed text-right mb-6">
              أفضل أسعار تنظيف منازل في انتظارك على هوم رن. إذا كنت ترغب في
              الحصول على خدمة تنظيف منازل تكون احترافية وموثوقة، فيمكنك إنشاء
              طلب ومقارنة أسعار تنظيف منازل الواردة وإنجاز الخدمة التي تريدها
              بسهولة.
            </p>

            <a
              href="/new-date"
              className="block w-fit bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6  rounded-lg transition-colors text-center"
            >
              متابعة الحجز
            </a>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 text-right">
              نحيطكم علمًا بأنه رسوم حجز الخدمة مبلغ 30 SAR كدفعة مقدمة قبل
              الحجز لخدمة تنظيف الشقة ، وسيتم التواصل معكم لتأكيد التفاصيل خلال
              60 دقيقة .{" "}
            </p>
          </div>
        </div>
        <div className="mx-4 my-6 bg-white rounded-2xl shadow-lg p-6 lg:hidden">
          <h2 className="text-lg font-bold text-gray-900 mb-4 text-right">
            متوسط سعر تنظيف منازل
          </h2>

          <div className="relative">
            <svg
              fill="none"
              height="156"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 324 156"
            >
              <g clipPath="url(#clip0_mobile)">
                <g clipPath="url(#clip1_mobile)">
                  <path
                    clipRule="evenodd"
                    d="M107.351 156.662L107.351 51.4253C123.725 39.588 140.532 30.1265 160.528 30.1265C181.178 30.1265 198.798 43.6465 215.653 56.4984L215.424 156.662H160.528H107.351Z"
                    fill="#C6F1D1"
                    fillRule="evenodd"
                    opacity="0.5"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M47.6086 79.605C19.6163 90.1445 6.7713 92.659 -22.2364 96.496V157.824H47.6086V79.605ZM275.206 157.824H343.848V96.8304C337.256 96.2629 310.373 94.2429 275.206 80.2448V157.824Z"
                    fill="url(#paint0_linear_mobile)"
                    fillOpacity="0.6"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="M47.7983 156.662V0.474121"
                    opacity="0.5"
                    stroke="#2CB34F"
                    strokeDasharray="3.45 5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M275.798 156.662V0.474121"
                    opacity="0.5"
                    stroke="#2CB34F"
                    strokeDasharray="3.45 5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M106.798 156.662V0.474121"
                    stroke="#20853B"
                    strokeDasharray="3.45 5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M161.957 156.662V0.474121"
                    stroke="#20853B"
                    strokeDasharray="3.45 5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M215.31 156.662V0.474121"
                    stroke="#20853B"
                    strokeDasharray="3.45 5"
                    strokeLinecap="round"
                  ></path>
                </g>
                <path
                  clipRule="evenodd"
                  d="M163.736 30.2535C163.813 31.3553 162.983 32.3111 161.881 32.3883C131.105 34.5429 112.072 51.3728 90.3703 74.0686C62.8694 102.83 27.021 115.889 3.44056 118.892C2.34484 119.032 1.34346 118.256 1.20392 117.161C1.06438 116.065 1.83952 115.064 2.93524 114.924C25.7614 112.017 60.7125 99.2977 87.4793 71.3042C109.244 48.5416 129.2 30.6664 161.601 28.398C162.703 28.3209 163.659 29.1516 163.736 30.2535Z"
                  fill="url(#paint1_linear_mobile)"
                  fillRule="evenodd"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M160.932 30.2535C160.855 31.3553 161.685 32.3111 162.787 32.3883C193.563 34.5429 212.597 51.3728 234.298 74.0686C261.799 102.83 297.647 115.889 321.228 118.892C322.323 119.032 323.325 118.256 323.464 117.161C323.604 116.065 322.829 115.064 321.733 114.924C298.907 112.017 263.956 99.2977 237.189 71.3042C215.424 48.5416 195.468 30.6664 163.067 28.398C161.965 28.3209 161.009 29.1516 160.932 30.2535Z"
                  fill="url(#paint2_linear_mobile)"
                  fillRule="evenodd"
                ></path>
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_mobile"
                  x1="-22.2364"
                  x2="343.848"
                  y1="115.09"
                  y2="115.09"
                >
                  <stop stopColor="white"></stop>
                  <stop
                    offset="0.175824"
                    stopColor="white"
                    stopOpacity="0.8"
                  ></stop>
                  <stop offset="0.501515" stopColor="white"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_mobile"
                  x1="82.4644"
                  x2="82.4644"
                  y1="28.3931"
                  y2="118.908"
                >
                  <stop stopColor="#09872B"></stop>
                  <stop offset="1" stopColor="#09872B" stopOpacity="0.3"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint2_linear_mobile"
                  x1="242.204"
                  x2="242.204"
                  y1="28.3931"
                  y2="118.908"
                >
                  <stop stopColor="#09872B"></stop>
                  <stop offset="1" stopColor="#09872B" stopOpacity="0.3"></stop>
                </linearGradient>
                <clipPath id="clip0_mobile">
                  <rect
                    fill="white"
                    height="156"
                    transform="translate(0.799316)"
                    width="323"
                  ></rect>
                </clipPath>
                <clipPath id="clip1_mobile">
                  <rect
                    fill="white"
                    height="181.147"
                    transform="translate(0.548828)"
                    width="323.071"
                  ></rect>
                </clipPath>
              </defs>
            </svg>

            <div className="flex justify-around mt-4">
              <div className="text-right">
                <span className="text-sm font-bold text-green-700">
                  250 ر.س.
                </span>
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-green-700">
                  5,560 ر.س.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block bg-white">
        <div className="max-w-7xl mx-auto px-8 py-8 relative ">
          {/* Breadcrumb */}
          <div className="mb-12">
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-900">
                  HomeRun
                </a>
              </li>
              <li>
                <svg
                  fill="none"
                  height="12"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m8 20 8.5-8.5L8 3"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeWidth="2"
                  ></path>
                </svg>
              </li>
              <li className="text-gray-900 font-medium">
                التكاليف والأسعار تنظيف منازل
              </li>
            </ul>
          </div>
          <div className="flex w-full justify-center  ">
            {/* Main Content Grid - Image LEFT, Content RIGHT */}
            <div
              className="grid lg:grid-cols-2 gap-16 items-start mb-16"
              dir="rtl"
            >
              {/* LEFT Column - Image */}
              <div className="order-2">
                <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      sizes="100vw"
                      srcSet="https://cdn.armut.com/images/services/desktop-large/16347-home-cleaning.jpg?tr=w-640 640w, https://cdn.armut.com/images/services/desktop-large/16347-home-cleaning.jpg?tr=w-1080 1080w"
                    />
                    <img
                      alt="تنظيف منازل"
                      className="absolute inset-0 w-full h-full object-cover"
                      src="https://cdn.armut.com/images/services/desktop-large/16347-home-cleaning.jpg?tr=w-1080"
                    />
                  </picture>
                </div>
              </div>

              {/* RIGHT Column - Content */}
              <div className="order-1">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-right leading-tight">
                    أسعار تنظيف منازل موجودة على هوم رن!
                  </h1>

                  <div>
                    <span className="text-sm text-gray-500 text-right block mb-2">
                      متوسط السعر
                    </span>
                    <span className="text-3xl font-bold text-green-600 text-right block">
                      250 ر.س. - 2,500 ر.س.
                    </span>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed text-right">
                    أفضل أسعار تنظيف منازل في انتظارك على هوم رن. إذا كنت ترغب
                    في الحصول على خدمة تنظيف منازل تكون احترافية وموثوقة، فيمكنك
                    إنشاء طلب ومقارنة أسعار تنظيف منازل الواردة وإنجاز الخدمة
                    التي تريدها بسهولة.
                  </p>

                  <div className="flex justify-start pt-4">
                    <a
                      href="/new-date"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-4 rounded-xl transition-colors text-lg"
                    >
                      متابعة الحجز
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 text-right">
                      نحيطكم علمًا بأنه رسوم حجز الخدمة مبلغ 30 SAR كدفعة مقدمة
                      قبل الحجز لخدمة تنظيف الشقة ، وسيتم التواصل معكم لتأكيد
                      التفاصيل خلال 60 دقيقة .{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Chart Section - Separate Card Below */}
          <div className="max-w-md mx-auto lg:mx-0 -mt-10 absolute left-20 bottom-32  ">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-right">
                متوسط سعر تنظيف منازل
              </h2>

              <div className="relative">
                <svg
                  fill="none"
                  height="156"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 324 156"
                >
                  <g clipPath="url(#clip0_desktop)">
                    <g clipPath="url(#clip1_desktop)">
                      <path
                        clipRule="evenodd"
                        d="M107.351 156.662L107.351 51.4253C123.725 39.588 140.532 30.1265 160.528 30.1265C181.178 30.1265 198.798 43.6465 215.653 56.4984L215.424 156.662H160.528H107.351Z"
                        fill="#C6F1D1"
                        fillRule="evenodd"
                        opacity="0.5"
                      ></path>
                      <path
                        clipRule="evenodd"
                        d="M47.6086 79.605C19.6163 90.1445 6.7713 92.659 -22.2364 96.496V157.824H47.6086V79.605ZM275.206 157.824H343.848V96.8304C337.256 96.2629 310.373 94.2429 275.206 80.2448V157.824Z"
                        fill="url(#paint0_linear_desktop)"
                        fillOpacity="0.6"
                        fillRule="evenodd"
                      ></path>
                      <path
                        d="M47.7983 156.662V0.474121"
                        opacity="0.5"
                        stroke="#2CB34F"
                        strokeDasharray="3.45 5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M275.798 156.662V0.474121"
                        opacity="0.5"
                        stroke="#2CB34F"
                        strokeDasharray="3.45 5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M106.798 156.662V0.474121"
                        stroke="#20853B"
                        strokeDasharray="3.45 5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M161.957 156.662V0.474121"
                        stroke="#20853B"
                        strokeDasharray="3.45 5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M215.31 156.662V0.474121"
                        stroke="#20853B"
                        strokeDasharray="3.45 5"
                        strokeLinecap="round"
                      ></path>
                    </g>
                    <path
                      clipRule="evenodd"
                      d="M163.736 30.2535C163.813 31.3553 162.983 32.3111 161.881 32.3883C131.105 34.5429 112.072 51.3728 90.3703 74.0686C62.8694 102.83 27.021 115.889 3.44056 118.892C2.34484 119.032 1.34346 118.256 1.20392 117.161C1.06438 116.065 1.83952 115.064 2.93524 114.924C25.7614 112.017 60.7125 99.2977 87.4793 71.3042C109.244 48.5416 129.2 30.6664 161.601 28.398C162.703 28.3209 163.659 29.1516 163.736 30.2535Z"
                      fill="url(#paint1_linear_desktop)"
                      fillRule="evenodd"
                    ></path>
                    <path
                      clipRule="evenodd"
                      d="M160.932 30.2535C160.855 31.3553 161.685 32.3111 162.787 32.3883C193.563 34.5429 212.597 51.3728 234.298 74.0686C261.799 102.83 297.647 115.889 321.228 118.892C322.323 119.032 323.325 118.256 323.464 117.161C323.604 116.065 322.829 115.064 321.733 114.924C298.907 112.017 263.956 99.2977 237.189 71.3042C215.424 48.5416 195.468 30.6664 163.067 28.398C161.965 28.3209 161.009 29.1516 160.932 30.2535Z"
                      fill="url(#paint2_linear_desktop)"
                      fillRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_desktop"
                      x1="-22.2364"
                      x2="343.848"
                      y1="115.09"
                      y2="115.09"
                    >
                      <stop stopColor="white"></stop>
                      <stop
                        offset="0.175824"
                        stopColor="white"
                        stopOpacity="0.8"
                      ></stop>
                      <stop offset="0.501515" stopColor="white"></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint1_linear_desktop"
                      x1="82.4644"
                      x2="82.4644"
                      y1="28.3931"
                      y2="118.908"
                    >
                      <stop stopColor="#09872B"></stop>
                      <stop
                        offset="1"
                        stopColor="#09872B"
                        stopOpacity="0.3"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint2_linear_desktop"
                      x1="242.204"
                      x2="242.204"
                      y1="28.3931"
                      y2="118.908"
                    >
                      <stop stopColor="#09872B"></stop>
                      <stop
                        offset="1"
                        stopColor="#09872B"
                        stopOpacity="0.3"
                      ></stop>
                    </linearGradient>
                    <clipPath id="clip0_desktop">
                      <rect
                        fill="white"
                        height="156"
                        transform="translate(0.799316)"
                        width="323"
                      ></rect>
                    </clipPath>
                    <clipPath id="clip1_desktop">
                      <rect
                        fill="white"
                        height="181.147"
                        transform="translate(0.548828)"
                        width="323.071"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>

                <div className="flex justify-between mt-6">
                  <div className="text-right">
                    <span className="text-base font-bold text-green-700">
                      250 ر.س.
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-base font-bold text-green-700">
                      2,500 ر.س.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factors Section - Desktop */}
        <div className="max-w-7xl mx-auto px-8 pb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              العوامل المؤثرة في سعر تنظيف منازل
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Table */}
              <div className="order-2 ">
                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="grid grid-cols-4 gap-4 pb-4 border-b-2 border-gray-200">
                    <div className="col-span-2"></div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-gray-600">
                        الأدنى
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-gray-600">
                        الأعلى
                      </span>
                    </div>
                  </div>

                  {/* Row 1 */}
                  <div className="grid grid-cols-4 gap-4 py-4 bg-gray-200 rounded-lg px-4">
                    <div className="flex items-center col-span-2">
                      <span className="text-sm text-gray-900 text-right font-medium">
                        ما هو نوع التنظيف الذي ترغب فيه؟
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <span className="text-base font-bold text-gray-900">
                        250 ر.س.
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <span className="text-base font-bold text-gray-900">
                        2,000 ر.س.
                      </span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-4 gap-4 py-4 bg-gray-100 rounded-lg px-4">
                    <div className="flex items-center col-span-2">
                      <span className="text-sm text-gray-900 text-right font-medium">
                        ما نوع التنظيف الذي تريده؟
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <span className="text-base font-bold text-gray-900">
                        250 ر.س.
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <span className="text-base font-bold text-gray-900">
                        250 ر.س.
                      </span>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-4 gap-4 py-4 bg-gray-200 rounded-lg px-4">
                    <div className="flex items-center col-span-2">
                      <span className="text-sm text-gray-900 text-right font-medium">
                        كم هو عدد الصالات والغرف في المنزل؟
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <span className="text-base font-bold text-gray-900">
                        250 ر.س.
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <span className="text-base font-bold text-gray-900">
                        250 ر.س.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="order-1  flex justify-center">
                <img src="/prices1.png" className="w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Factors Section - Mobile */}
      <div className="lg:hidden px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 px-2">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            العوامل المؤثرة في سعر تنظيف منازل
          </h2>

          {/* Mobile Table */}
          <div className="space-y-4">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-2 pb-3 border-b-2 border-gray-200">
              <div className="col-span-2"></div>
              <div className="text-center">
                <span className="text-xs font-semibold text-gray-600">
                  الأدنى
                </span>
              </div>
              <div className="text-center">
                <span className="text-xs font-semibold text-gray-600">
                  الأعلى
                </span>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-4 gap-2 py-3 bg-gray-200 rounded-lg px-3">
              <div className="flex items-center col-span-2">
                <span className="text-xs text-gray-900 text-right font-medium  ">
                  ما هو نوع التنظيف الذي ترغب فيه؟
                </span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">
                  250 ر.س.
                </span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">
                  2,000 ر.س.
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-4 gap-2 py-3 bg-gray-100 rounded-lg px-3">
              <div className="flex items-center col-span-2">
                <span className="text-xs text-gray-900 text-right font-medium">
                  ما نوع التنظيف الذي تريده؟
                </span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">
                  250 ر.س.
                </span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">
                  250 ر.س.
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-4 gap-2 py-3 bg-gray-200 rounded-lg px-3">
              <div className="flex items-center col-span-2">
                <span className="text-xs text-gray-900 text-right font-medium">
                  كم هو عدد الصالات والغرف في المنزل؟
                </span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">
                  250 ر.س.
                </span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">
                  250 ر.س.
                </span>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="mt-8 flex justify-center">
            <img src="/prices1.png" className="w-2/3" />
          </div>
        </div>
      </div>

      {/* Local Prices Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="  p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
            اسعار تنظيف منازل المحلية
          </h2>
          <div className="text-center">
            <a
              href="/new-date"
              className="inline-block  font-semibold text-base lg:text-lg underline"
            >
              التكاليف والأسعار الرياض تنظيف منازل
            </a>
          </div>
        </div>
      </div>

      {/* Example Jobs Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
            مثال على أسعار تنظيف منازل
          </h2>
        </div>

        {/* Job Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:flex justify-around">
          {/* Card Header */}
          <div className="p-6 lg:p-8">
            <div className="flex items-start gap-4">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src="https://cdn.armut.com/UserPics/0bb4308e-0654-4755-9c76-a8f33a9880b3.jpeg?tr=w-80,h-80,fo-auto"
                  alt="Profile"
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                />
              </div>

              {/* Job Info */}
              <div className="flex-1 space-y-3">
                {/* Location */}
                <div className="flex items-center gap-2">
                  <svg
                    fill="none"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      clipRule="evenodd"
                      d="M4.084 6.667a3.917 3.917 0 1 1 7.833 0c0 1.722-1.017 3.38-2.147 4.672A15.212 15.212 0 0 1 8 13.05a15.212 15.212 0 0 1-1.769-1.71c-1.13-1.291-2.147-2.95-2.147-4.672zm3.48 7.943.437-.61-.436.61.436.312.436-.312L8 14l.436.61.002-.001.004-.003.013-.01a5.038 5.038 0 0 0 .205-.154 16.698 16.698 0 0 0 2.238-2.114c1.202-1.376 2.518-3.384 2.518-5.661a5.417 5.417 0 1 0-10.833 0c0 2.277 1.316 4.285 2.519 5.66a16.703 16.703 0 0 0 2.238 2.115 9.832 9.832 0 0 0 .205.155l.013.009.004.003.001.001zM8 3.916a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm-1.25 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
                      fill="rgb(41,45,51)"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-700">
                    الرياض / حي الياسمين
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <svg
                    fill="none"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      clipRule="evenodd"
                      d="M6.083 1.25v1.333h3.833V1.25h1.5v1.333h2.667V14.75H1.916V2.583h2.667V1.25h1.5zm-1.5 2.833H3.416V7.25h9.167V4.083h-1.167v1.334h-1.5V4.083H6.083v1.334h-1.5V4.083zm8 4.667H3.416v4.5h9.167v-4.5z"
                      fill="rgb(41,45,51)"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-600">14 أغسطس 2025</span>
                </div>

                {/* Price Range */}
                <div className="flex items-center gap-2">
                  <svg
                    fill="none"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      clipRule="evenodd"
                      d="M13 5.667v8.667h-2V5.667h2zM9 1.667v12.667H7V1.667h2zM5 8.333v6H3v-6h2z"
                      fill="rgb(41,45,51)"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    200 ر.س. - 650 ر.س.
                  </span>
                </div>

                {/* Final Price Badge */}
                <div className="inline-block bg-green-100 px-4 py-2 rounded-lg">
                  <span className="text-lg font-bold text-green-700">
                    650 ر.س.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 lg:hidden"></div>

          {/* Job Details */}
          <div className="p-6 lg:p-8 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-base font-bold text-gray-900 block">
                  تفاصيل الطلب
                </span>
                <span className="text-sm text-gray-600">تنظيف منازل</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  fill="none"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    clipRule="evenodd"
                    d="M6.083 1.25v1.333h3.833V1.25h1.5v1.333h2.667V14.75H1.916V2.583h2.667V1.25h1.5zm-1.5 2.833H3.416V7.25h9.167V4.083h-1.167v1.334h-1.5V4.083H6.083v1.334h-1.5V4.083zm8 4.667H3.416v4.5h9.167v-4.5z"
                    fill="rgb(41,45,51)"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span>14 أغسطس 2025</span>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Question 1 */}
            <div className="flex flex-col  items-start gap-2">
              <span className="text-sm  font-bold text-gray-900 text-right">
                ما هو نوع التنظيف الذي ترغب فيه؟
              </span>
              <span className="text-sm ">أخرى</span>
            </div>

            <hr className="border-gray-200" />

            {/* Question 2 */}
            <div className="flex flex-col  items-start gap-2">
              <span className="text-sm  font-bold text-gray-900 text-right">
                ما نوع التنظيف الذي تريده؟
              </span>
              <span className="text-sm ">تنظيف منزل عادي</span>
            </div>

            <hr className="border-gray-200" />

            {/* Question 3 */}
            <div className="flex flex-col  items-start gap-2">
              <span className="text-sm  font-bold text-gray-900 text-right">
                كم هو عدد الصالات والغرف في المنزل؟
              </span>
              <span className="text-sm ">3</span>
            </div>

            <hr className="border-gray-200" />

            {/* Question 4 */}
            <div className="flex flex-col  items-start gap-2">
              <span className="text-sm  font-bold text-gray-900 text-right">
                ما هو عدد الحمامات؟
              </span>
              <span className="text-sm  ">2</span>
            </div>

            <hr className="border-gray-200" />

            {/* Job Description */}
            <div className="flex flex-col  items-start gap-2">
              <span className="text-sm  font-bold text-gray-900 text-right">
                تفاصيل الوظيفة
              </span>
              <span className="text-sm  text-gray-900 text-right flex-1">
                لا يوجد اثاث ٣ غرف في دور مع المكيفات ٣ و حمامين
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-2 lg:px-8 pb-12 lg:py-16">
        <div className=" rounded-3xl shadow-lg p-8 px-4 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Button 1 - Get Quotes */}
            <a
              href="/new-date"
              className="block bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-4 rounded-xl transition-colors text-center   shadow-lg"
            >
              احصل على 4 عروض اسعار لخدمة تنظيف منازل
            </a>

            {/* Button 2 - Sign Up as Provider */}
            <a
              href="/new-date"
              className="block  font-bold py-5 px-4 rounded-xl transition-colors text-center text-lg border border-gray-200 shadow-lg"
            >
              اشترك معنا كمقدم خدمة
            </a>
          </div>
        </div>
      </div>
      {/* Popular Other Services Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-6 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            أسعار الخدمات الشعبية الأخرى
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1  lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف شقق
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف المنزل الفارغ
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                مكافحة الحشرات
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف فلل
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تعقيم
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                رش مبيدات
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف ما بعد البناء
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                غسيل خزانات
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف سجاد
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف خزانات
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                غسيل مكيفات سبليت
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                غسيل سجاد
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف مجالس
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف شاليهات
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف مسابح
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف كنب
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تعقيم وتطهير
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف مكاتب
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                بوابة تعقيم
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                فك وتركيب مكيفات
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف واجهات زجاج
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف مكيفات سبليت
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                رش حشرات
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                عاملات بالساعة
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                كى الملابس
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف بيت
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف شبابيك
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                مكافحة فئران
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف بالبخار
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                مكافحة الحمام
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                مكافحة البق
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                تنظيف الكنب بالبخار
              </span>
            </a>

            <a href="/new-date" className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                عاملات بالشهر
              </span>
            </a>

            <a href="/new-date   " className="text-center underline">
              <span className="text-sm font-semibold text-gray-800 hover:text-green-600">
                عاملة منزلية بالساعة
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
            تقييمات اسعار تنظيف منازل
          </h2>
        </div>

        {/* Reviews Carousel */}
        <div className="relative overflow-x-auto">
          <div className="flex gap-6 pb-4 items-center justify-center">
            {/* Review Card */}
            <div className="flex-shrink-0 w-[320px] lg:w-[360px]">
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900">
                    فارس ا.
                  </span>
                  <span className="text-sm text-gray-500">07 مارس 2021</span>
                </div>

                {/* Service Type */}
                <div className="mb-4">
                  <span className="text-sm text-gray-500">تنظيف منازل</span>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill="rgb(247,190,44)"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.42 0H7.38L5.75 5.32H.88L.5 6.44l3.72 3.23-1.8 5.28.88.66 4.6-3.2 4.6 3.2.89-.66-1.8-5.28 3.99-3.33-.37-1.02h-5.16L8.42 0Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                {/* Review Content */}
                <div className="text-sm text-gray-700 leading-relaxed">
                  <p>‏الدقة في المواعيد فقد حضر على الموعد بالضبط</p>
                  <p className="mt-2">‏السرعة في التنفيذ والإتقان والجودة</p>
                  <p className="mt-2">‏حسن التعامل في العاملين</p>
                </div>
              </div>
            </div>

            {/* Add more review cards as needed */}
          </div>
        </div>
      </div>

      {/* Monthly Price Change Chart */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-8 text-right">
            التغيير الشهري في أسعار تنظيف منازل
          </h2>

          {/* Chart Container */}
          <div className="relative w-full" style={{ height: "300px" }}>
            <svg
              width="100%"
              height="300"
              viewBox="0 0 360 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <defs>
                <linearGradient id="barGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="rgb(44,179,79)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(44,179,79)"
                    stopOpacity="0.4"
                  />
                </linearGradient>
              </defs>

              {/* Axes */}
              <line
                x1="60"
                x2="300"
                y1="240"
                y2="240"
                stroke="rgb(106, 116, 130)"
                strokeWidth="1"
              />
              <line
                x1="300"
                x2="300"
                y1="60"
                y2="240"
                stroke="rgb(106, 116, 130)"
                strokeWidth="1"
              />

              {/* Horizontal Grid Lines */}
              <path
                d="M300.558,189.767L59.442,189.767"
                stroke="rgb(184, 192, 202)"
                strokeWidth="1"
                strokeDasharray="4"
                strokeOpacity="0.5"
              />
              <path
                d="M300.558,139.535L59.442,139.535"
                stroke="rgb(184, 192, 202)"
                strokeWidth="1"
                strokeDasharray="4"
                strokeOpacity="0.5"
              />
              <path
                d="M300.558,89.302L59.442,89.302"
                stroke="rgb(184, 192, 202)"
                strokeWidth="1"
                strokeDasharray="4"
                strokeOpacity="0.5"
              />

              {/* Month Labels (Arabic) */}
              <text
                x="280.46"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                د
              </text>
              <text
                x="260.37"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                ي
              </text>
              <text
                x="240.28"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                ف
              </text>
              <text
                x="220.19"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                م
              </text>
              <text
                x="200.09"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                أ
              </text>
              <text
                x="180"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                و
              </text>
              <text
                x="159.91"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                ن
              </text>
              <text
                x="139.81"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                ل
              </text>
              <text
                x="119.72"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                غ
              </text>
              <text
                x="99.63"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                س
              </text>
              <text
                x="79.53"
                y="258.26"
                textAnchor="middle"
                fontSize="12"
                fill="rgb(41, 41, 41)"
              >
                ب
              </text>

              {/* Y-axis Labels */}
              <text
                x="308"
                y="244.26"
                textAnchor="start"
                fontSize="12"
                fill="rgb(37, 37, 37)"
              >
                Min
              </text>
              <text
                x="308"
                y="64.26"
                textAnchor="start"
                fontSize="12"
                fill="rgb(37, 37, 37)"
              >
                Max
              </text>

              {/* Bars */}
              <path
                d="M 274.47, 240 L 274.47, 178.36 A 4 4 0 0 1, 278.47, 174.36 L 282.47, 174.36 A 4 4 0 0 1, 286.47, 178.36 L 286.47, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 254.37, 240 L 254.37, 93.30 A 4 4 0 0 1, 258.37, 89.30 L 262.37, 89.30 A 4 4 0 0 1, 266.37, 93.30 L 266.37, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 234.28, 240 L 234.28, 213.30 A 4 4 0 0 1, 238.28, 209.30 L 242.28, 209.30 A 4 4 0 0 1, 246.28, 213.30 L 246.28, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 214.19, 240 L 214.19, 200.24 A 4 4 0 0 1, 218.19, 196.24 L 222.19, 196.24 A 4 4 0 0 1, 226.19, 200.24 L 226.19, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 194.09, 240 L 194.09, 180.71 A 4 4 0 0 1, 198.09, 176.71 L 202.09, 176.71 A 4 4 0 0 1, 206.09, 180.71 L 206.09, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 174, 240 L 174, 168.65 A 4 4 0 0 1, 178, 164.65 L 182, 164.65 A 4 4 0 0 1, 186, 168.65 L 186, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 153.91, 240 L 153.91, 210.51 A 4 4 0 0 1, 157.91, 206.51 L 161.91, 206.51 A 4 4 0 0 1, 165.91, 210.51 L 165.91, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 133.81, 240 L 133.81, 193.77 A 4 4 0 0 1, 137.81, 189.77 L 141.81, 189.77 A 4 4 0 0 1, 145.81, 193.77 L 145.81, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 113.72, 240 L 113.72, 191.20 A 4 4 0 0 1, 117.72, 187.20 L 121.72, 187.20 A 4 4 0 0 1, 125.72, 191.20 L 125.72, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 93.63, 240 L 93.63, 203.70 A 4 4 0 0 1, 97.63, 199.70 L 101.63, 199.70 A 4 4 0 0 1, 105.63, 203.70 L 105.63, 240 z"
                fill="url(#barGradient)"
              />
              <path
                d="M 73.53, 240 L 73.53, 199.35 A 4 4 0 0 1, 77.53, 195.35 L 81.53, 195.35 A 4 4 0 0 1, 85.53, 199.35 L 85.53, 240 z"
                fill="url(#barGradient)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
