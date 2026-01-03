import { useEffect } from "react";

const Success = () => {
  const order = JSON.parse(sessionStorage.getItem("order"));

  useEffect(() => {
    // Clear session data after displaying success
    // Optionally, you can keep the order data for reference
  }, []);

  if (order) {
    return (
      <div
        className="w-full min-h-screen bg-gray-100 py-10 flex justify-center"
        dir="rtl"
      >
        <div className="max-w-2xl w-11/12 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white text-center py-6">
            <div className="flex items-center justify-center mb-2">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold">
              تم تسجيل طلبك بنجاح
            </h2>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            <p className="text-lg">
              مرحبًا{" "}
              <b>
                {order.firstName} {order.lastName}
              </b>
            </p>
            <p className="text-gray-700">
              شكرًا لك على طلب الخدمة! نحن نقدر ثقتك بنا ونتمنى أن تكون راضيًا
              عن خدماتنا.
            </p>

            {/* Order Summary */}
            <div>
              <h3 className="text-gray-800 font-bold text-lg mb-4">
                📋 ملخص الطلب
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                {order.serviceType && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      نوع الخدمة:
                    </span>
                    <span className="text-gray-600">{order.serviceType}</span>
                  </div>
                )}
                {order.cleaningType && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      نوع التنظيف:
                    </span>
                    <span className="text-gray-600">{order.cleaningType}</span>
                  </div>
                )}
                {order.frequency && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      التكرار:
                    </span>
                    <span className="text-gray-600">{order.frequency}</span>
                  </div>
                )}
                {order.rooms && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      عدد الغرف:
                    </span>
                    <span className="text-gray-600">{order.rooms}</span>
                  </div>
                )}
                {order.bathrooms && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      عدد الحمامات:
                    </span>
                    <span className="text-gray-600">{order.bathrooms}</span>
                  </div>
                )}
                {order.area && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">
                      المساحة:
                    </span>
                    <span className="text-gray-600">{order.area} م²</span>
                  </div>
                )}
              </div>
            </div>

            {/* Location Details */}
            {(order.city || order.district) && (
              <div>
                <h3 className="text-gray-800 font-bold text-lg mb-4">
                  📍 موقع الخدمة
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg leading-relaxed">
                  {order.city && (
                    <div className="mb-2">
                      <span className="font-semibold">المدينة: </span>
                      {order.city}
                    </div>
                  )}
                  {order.district && (
                    <div>
                      <span className="font-semibold">الحي: </span>
                      {order.district}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Date & Time */}
            {(order.date || order.time) && (
              <div>
                <h3 className="text-gray-800 font-bold text-lg mb-4">
                  🕐 موعد الخدمة
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {order.date && (
                    <div className="mb-2">
                      <span className="font-semibold">التاريخ: </span>
                      {order.date}
                    </div>
                  )}
                  {order.time && (
                    <div>
                      <span className="font-semibold">الوقت: </span>
                      {order.time}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Additional Details */}
            {order.details && (
              <div>
                <h3 className="text-gray-800 font-bold text-lg mb-4">
                  📝 تفاصيل إضافية
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{order.details}</p>
                </div>
              </div>
            )}

            {/* Note */}
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                ✅ نحن نقوم حاليًا بمعالجة طلبك، وسيتم التواصل معك قريبًا من قبل
                مقدمي الخدمة. إذا كان لديك أي استفسار، لا تتردد في التواصل معنا.
              </p>
            </div>

            {/* Contact Information */}
            {(order.email || order.phone) && (
              <div>
                <h3 className="text-gray-800 font-bold text-lg mb-4">
                  📞 معلومات التواصل
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  {order.email && (
                    <div>
                      <span className="font-semibold">البريد الإلكتروني: </span>
                      {order.email}
                    </div>
                  )}
                  {order.phone && (
                    <div>
                      <span className="font-semibold">رقم الهاتف: </span>
                      {order.phone}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Footer */}
            <hr className="border-gray-200" />
            <div className="text-center text-gray-600 text-sm space-y-2 py-3">
              <p className="text-lg font-semibold text-gray-800">
                شكراً لاختياركم خدماتنا
              </p>
              <p>سنتواصل معك قريباً</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="w-full min-h-screen bg-gray-100 flex items-center justify-center"
        dir="rtl"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            لا يوجد طلب للعرض
          </h2>
          <p className="text-gray-600">يرجى إكمال عملية الحجز أولاً</p>
        </div>
      </div>
    );
  }
};

export default Success;
