import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverRoute, socket } from "./Main";

// City to districts mapping
const cityDistricts = {
  الرياض: [
    "الأكاديمية العسكرية",
    "الجنادرية",
    "الحائر",
    "الدائري الغربي",
    "الدرعية",
    "الصناعية القديمة",
    "المدينة الرياض",
    "المدينة الصناعية الاولى",
    "المدينة الصناعية الثالثة",
    "المدينة الصناعية الثانية",
    "المطار",
    "حي اشبيلية",
    "حي الإزدهار",
    "حي الأمير أحمد",
    "حي الأمير مشعل",
    "حي الأندلس",
    "حي البديعة",
    "حي البستان",
    "حي البطحاء",
    "حي البوادي",
    "حي التعاون",
    "حي الجرادية",
    "حي الحزم",
    "حي الحلة",
    "حي الحمراء",
    "حي الخالدية",
    "حي الخزامى",
    "حي الخليج",
    "حي الدار البيضاء",
    "حي الديرة",
    "حي الرائد",
    "حي الربوة",
    "حي الربيع",
    "حي الرحمانية",
    "حي الروابي",
    "حي الروضة",
    "حي الريان",
    "حي السباله",
    "حي السعادة",
    "حي السلام",
    "حي السلي",
    "حي السليمانية",
    "حي السويدي",
    "حي الشعبه",
    "حي الشفا",
    "حي الشميسي",
    "حي الصالحية",
    "حي الصحافة",
    "حي الصفوة",
    "حي الضباط",
    "حي العزيزية",
    "حي العليا",
    "حي العمل",
    "حي العود",
    "حي العويضة",
    "حي الغدير",
    "حي الغنامية",
    "حي الفاروق",
    "حي الفلاح",
    "حي الفوطة",
    "حي الفيحاء",
    "حي الفيصلية",
    "حي القادسية",
    "حي القدس",
    "حي المؤتمرات",
    "حي المحمدية",
    "حي المربع",
    "حي المرسلات",
    "حي المرقب",
    "حي المروج",
    "حي المصانع",
    "حي المصفاه",
    "حي المصيف",
    "حي المعذر",
    "حي المغرزات",
    "حي الملز",
    "حي الملك عبدالله",
    "حي الملك فهد",
    "حي الملك فيصل",
    "حي المنار",
    "حي المنصورة",
    "حي الناصرية",
    "حي النخيل",
    "حي النزهة",
    "حي النسيم",
    "حي النظيم",
    "حي النفل",
    "حي النموذجية",
    "حي الهدا",
    "حي الواحة",
    "حي الوادي",
    "حي الوتدي",
    "حي الورود",
    "حي الوزارات",
    "حي الوشم",
    "حي الياسمين",
    "حي اليرموك",
    "حي ام الحمام",
    "حي ام سليم",
    "حي بدر",
    "حي ثليم",
    "حي حطين",
    "حي خشم العان",
    "حي خنشليلة",
    "حي شبرا",
    "حي صلاح الدين",
    "حي طويق",
    "حي ظهرة البديعة",
    "حي عتيقة",
    "حي عريجاء",
    "حي عليشه",
    "حي غبيراء",
    "حي غبيره",
    "حي غرناطة",
    "حي قرطبة",
    "حي قوى الأمن",
    "حي منفوحة",
    "رقم موحد",
    "شارع الاحساء",
    "شارع الاربعين",
    "شارع الامام سعود",
    "شارع الامير سلمان بن عبد العزيز",
    "شارع البطحاء العام",
    "شارع التحلية",
    "شارع التخصصي",
    "شارع الجامعة",
    "شارع الخزان",
    "شارع الريل",
    "شارع الستين",
    "شارع السويدي العام",
    "شارع الضباب",
    "شارع العروبة",
    "شارع الغرابي",
    "شارع المعذر",
    "شارع الوزير",
    "شارع الوشم",
    "شارع عثمان بن عفان",
    "شارع علي بن ابي طالب",
    "صناعية الامير سلمان",
    "صناعية الامير متعب",
    "صناعية العويضه",
    "طريق الثمامة",
    "طريق الحاير",
    "طريق الخرج",
    "طريق الملك عبد العزيز",
    "طريق الملك عبدالله",
    "طريق الملك فهد",
    "طريق خريص",
    "طريق ديراب",
    "طريق صلاح الدين الإيوبي",
    "طريق مكة",
    "ظهرة لبن",
    "غير معروف",
    "مخرج 10",
    "مخرج 9",
    "مدينة الملك عبدالعزيز للعلوم والتقنية",
    "مطار الملك خالد الدولي",
    "منطقة الحرس الوطني",
    "منطقة جامعة الأمام",
    "هاتف سيار",
  ],
  "محافظات الرياض": [
    "أشيقر",
    "الأرطاوي",
    "الأرطاوية",
    "الأفلاج",
    "البجادية",
    "الجلة",
    "الجو",
    "الحريق",
    "الخرج",
    "الخماسين",
    "الدلم",
    "الرويضة",
    "الرين",
    "الزلفي",
    "السليل",
    "الشمال",
    "الصحنة",
    "الغاط",
    "القويعية",
    "المجمعة",
    "المزاحمية",
    "النويعمة",
    "بلدة الدوادمي",
    "بلدة الغاط",
    "بلدة عرقه",
    "بلدة ليلى",
    "بلدة مرات",
    "تمير",
    "ثادق",
    "جنوب شرق الرياض",
    "حريملاء",
    "حوطة بني تميم",
    "حوطة سدير",
    "حي بغلف",
    "خريص",
    "رماح",
    "ساجر",
    "سدير",
    "شارع التلفزيون",
    "شقراء",
    "شمال الخرج",
    "ضرما",
    "عفيف",
    "قصب",
    "وادي الدواسر",
  ],
  جدة: [
    "أبحر",
    "ابحر الشمالية",
    "الطائف",
    "الطريق السريع",
    "الكورنيش",
    "المجمع",
    "المنطقة الصناعية",
    "باب شريف",
    "بريمان",
    "ثوال",
    "جبل الكعبة",
    "جدة",
    "حلقة الخضار",
    "حي ابو موسى الاشعري",
    "حي الأمير فواز",
    "حي الاندلس",
    "حي البساتين",
    "حي البغدادية",
    "حي البلد",
    "حي البوادي",
    "حي الثعالبة",
    "حي الجامعة",
    "حي الجوهرة",
    "حي الحمراء",
    "حي الخاسكية",
    "حي الخالدية",
    "حي الخمرة",
    "حي الدراجة",
    "حي الرابية",
    "حي الربوة",
    "حي الربيعية",
    "حي الرحاب",
    "حي الرحال",
    "حي الرمال",
    "حي الروابي",
    "حي الروضة",
    "حي الرويس",
    "حي الريل",
    "حي الزاهر",
    "حي الزهراء",
    "حي الزهور",
    "حي السامر",
    "حي السبيل",
    "حي السلام",
    "حي السلامة",
    "حي السليمانية",
    "حي الشاطي",
    "حي الشرفية",
    "حي الصحيفة",
    "حي الصفا",
    "حي العدل",
    "حي العزيزية",
    "حي العقربية",
    "حي العينية",
    "حي الفريان",
    "حي الفيحاء",
    "حي الفيصلية",
    "حي القريات",
    "حي الكرنتينا",
    "حي الكندرة",
    "حي المحجر",
    "حي المحمدية",
    "حي المرجان",
    "حي المروة",
    "حي المساعدية",
    "حي المسرة",
    "حي المنار",
    "حي المنتزهات",
    "حي النخيل",
    "حي النزلة",
    "حي النزهة",
    "حي النسيم",
    "حي النعيم",
    "حي النهضة",
    "حي الهنداوية",
    "حي الورود",
    "حي الوزيرية",
    "حي باب مكة",
    "حي بن عمران",
    "حي شبكشي",
    "حي عنيكش",
    "حي غرناطة",
    "حي غليل",
    "حي قويزة",
    "حي مشرفة",
    "خليص",
    "درة العروس",
    "رابغ",
    "رقم موحد",
    "سوق غراب",
    "شارع الامام مالك",
    "شارع الامير سلطان بن عبد العزيز",
    "شارع التحلية",
    "شارع الجامعة",
    "شارع الروضة",
    "شارع الستين",
    "شارع الستين بجور سوق",
    "شارع الشيخ عبدالعزيز بن باز",
    "شارع المكرونة",
    "شارع الميناء",
    "شارع باخشب",
    "شارع حراء",
    "شارع صاري",
    "شارع فلسطين",
    "شارع قريش",
    "شمال جدة",
    "طريق المدينة",
    "طريق الملك عبدالله",
    "طريق الملك فهد",
    "طريق الملك فهد (الستين)",
    "طريق مكة القديم",
    "عيون الجوى",
    "كيلو 31",
    "كيلو 4",
    "كيلو 5",
    "كيلو3",
    "كيلو7",
    "مخطط الامير متعب",
    "مدائن الفهد",
    "مطار الملك عبدالعزيز",
    "ميدان الغزاوي",
  ],
  "مكة المكرمة": [
    "البحيرات",
    "الجموم",
    "العوالي",
    "القنفذه",
    "الليث",
    "المنصورة",
    "بحره",
    "جبل النور",
    "حي اجياد",
    "حي البيبان",
    "حي الجميزة",
    "حي الجياد",
    "حي الحجون",
    "حي الحفاير",
    "حي الخالدية",
    "حي الخانسة",
    "حي الخريق",
    "حي الرصيفة",
    "حي الروضة",
    "حي الزاهر",
    "حي الزايد",
    "حي السليمانية",
    "حي الشميسي",
    "حي الشهداء",
    "حي الشوقية",
    "حي الطندباوي",
    "حي العتيبية",
    "حي العدل",
    "حي العزيزية",
    "حي العمره",
    "حي العمودية",
    "حي الغزة",
    "حي الغسالة",
    "حي الفيحاء",
    "حي الفيصلية",
    "حي الكعكية",
    "حي المسفلة",
    "حي المعابدة",
    "حي المعيصم",
    "حي النزهة",
    "حي النكاشة",
    "حي النورية",
    "حي الهجرة",
    "حي الهنداوية",
    "حي ام الجود",
    "حي بدر",
    "حي جبل النور",
    "حي جرول",
    "حي ذاخر",
    "حي شرائع المجاهدين",
    "ساحة اسلام",
    "شارع ابراهيم الخليل",
    "شارع الستين",
    "شارع المنصور",
    "شارع جمعية البر",
    "شعب عامر",
    "صفه",
    "صناعية الدواس",
    "مدينة مكة",
    "منطقة البحيرات",
    "ميدان الغزاوي",
    "وادي جليل",
  ],
  الطائف: [
    "الحلقة",
    "الحويه",
    "الصناعية",
    "الطائف",
    "المنطقة المركزية",
    "المويه",
    "تربه",
    "حي البخارية",
    "حي الجل",
    "حي الخالدية",
    "حي الريان",
    "حي السداد",
    "حي السلامة",
    "حي الشرفية",
    "حي الشهداء",
    "حي الطائف المركزي",
    "حي العزيزية",
    "حي العقيق",
    "حي الفيصلية",
    "حي القمرية",
    "حي الماسي",
    "حي المثناه",
    "حي المعارض",
    "حي النخبة",
    "حي النزهة",
    "حي الوجه",
    "حي الوشحاء",
    "حي الوشحة",
    "حي اليمانية",
    "حي بني سعد",
    "حي جبرة",
    "حي شبرا",
    "حي شهار",
    "حي قروه",
    "حي معشى",
    "حي واسط",
    "خرمه",
    "رنيه",
    "طريق الطائف الهدا",
    "وادي ليا",
  ],
  الدمام: [
    "الخبر",
    "الدمام",
    "الصناعية الثالثة",
    "الظهران",
    "القطيف",
    "الكورنيش",
    "المدينة الصناعية الأولى",
    "المدينة الصناعية الثانية",
    "النعيرية",
    "جزيرة تاروت",
    "حي 91",
    "حي احد",
    "حي ارامكو",
    "حي الاتصالات",
    "حي الاثير",
    "حي الاحمديه",
    "حي الامير محمد بن سعود",
    "حي الاندلس",
    "حي البدائع",
    "حي البديع",
    "حي البريد",
    "حي البستان",
    "حي التلفزيون",
    "حي الجامعيين",
    "حي الحسين",
    "حي الحمراء",
    "حي الخالدية",
    "حي الخزامى",
    "حي الخزان",
    "حي الخضرية",
    "حي الخليج",
    "حي الدانة",
    "حي الدكاترة",
    "حي الدواسر",
    "حي الدوحة",
    "حي الربوة",
    "حي الربيع",
    "حي الروضة",
    "حي الريان",
    "حي الزهور",
    "حي السلام",
    "حي السوق",
    "حي الشاطي",
    "حي الضباب",
    "حي الطبيشي",
    "حي العدامة",
    "حي العزيزية",
    "حي العمامرة",
    "حي العنود",
    "حي العوامية",
    "حي الفردوس",
    "حي الفناتير",
    "حي الفواز",
    "حي القادسية",
    "حي القروية",
    "حي القشلة",
    "حي الكنسة",
    "حي المباركية",
    "حي المثلث",
    "حي المجمع",
    "حي المحمدية",
    "حي المريكبات",
    "حي المطلق",
    "حي المعارض",
    "حي المعجل",
    "حي المعيزلية",
    "حي المنار",
    "حي الناصرية",
    "حي النخيل",
    "حي الندي",
    "حي النور",
    "حي ام الحمام",
    "حي بدر",
    "حي بن خلدون",
    "حي رأس تنورة",
    "حي سلطانة",
    "حي طلال",
    "حي عبدالله فؤاد",
    "حي عين دار",
    "حي غرناطة",
    "رحيمة",
    "سيهات",
    "شارع الامير محمد بن فهد",
    "شارع المدينة المنورة",
    "شارع الملك خالد",
    "شارع الملك سعود",
    "شارع الملك عبد العزيز",
    "شارع الملك فهد",
    "شارع الملك فيصل",
    "صناعية دلة",
    "طريق ابو حدريه",
    "طريق الدمام الخبر السريع",
    "طريق الدمام السريع",
    "طريق الملك فهد",
    "طريق بقيق",
    "قاعدة الملك عبدالعزيز",
    "مخطط 71",
    "مخطط 75",
    "مدينة العمال",
    "مطار الملك فهد الدولي",
    "منطقة الاوجام الصناعية",
  ],
  الجبيل: [
    "البلد",
    "التحلية",
    "الجبيل",
    "الجبيل الصناعية",
    "الصرار",
    "القيصومة",
    "حي الدخل",
    "حي الروقي",
    "حي الفناتير",
    "حي الفيحاء",
    "حي دفي",
    "حي مليجة",
    "قريه العليا",
    "منطقة الصناعات الأساسية",
  ],
  الاحساء: [
    "الاحساء",
    "البطحاء",
    "الجامعة",
    "الجفر",
    "العيون",
    "المبرز",
    "الهفوف",
    "حي البندرية",
    "حي التيسير",
    "حي الثلاثية",
    "حي الحليلة",
    "حي الخالدية",
    "حي الراشدية",
    "حي الروضة",
    "حي السليمانية",
    "حي الشعبية",
    "حي الصالحية",
    "حي الصعيد",
    "حي الصناعية الجديدة",
    "حي العمران",
    "حي الفيصلية",
    "حي المزروعية",
    "حي المعلمين",
    "حي المنصورة",
    "حي النزهة",
    "حي النسيم",
    "حي سلطانة",
    "سلوى",
    "قارا",
    "محاسن",
  ],
  "المدينة المنورة": [
    "أبيار علي",
    "البلد",
    "الحرة الشرقية",
    "الحزام",
    "الحناكية",
    "الدائري الثاني",
    "العلا",
    "العوالي",
    "العيساويه",
    "المدينة",
    "المطار",
    "المنطقة المركزية",
    "المنطقة المركزية بالمدينة",
    "بدر",
    "حي احد",
    "حي البحر",
    "حي البساطية",
    "حي الجبور",
    "حي الجرف",
    "حي الحامدية",
    "حي الخالدية",
    "حي الخندق",
    "حي الربوة",
    "حي الزاهدية",
    "حي السحمان",
    "حي السيح",
    "حي الشهداء",
    "حي العاقول",
    "حي العزيزية",
    "حي العنابس",
    "حي العنبرية",
    "حي الفيصلية",
    "حي القبلتين",
    "حي الكردي",
    "حي المستراح",
    "حي المصانع",
    "حي النصر",
    "حي الهجرة",
    "حي عروة",
    "خيبر",
    "سلطانه",
    "شارع قربان",
    "طريق الملك عبدالعزيز",
    "طريق الملك عبدالله",
    "طريق الملك فهد",
    "طريق قبا",
    "عرعر",
    "عويقله",
    "قبا",
    "لينه",
    "مايكوا",
    "منطقة الحرم",
    "منطقة المستراح",
    "مهد الذهب",
  ],
  ينبع: [
    "الجوازات",
    "الصهاريج",
    "الهيئة الملكية",
    "حي الاصالة",
    "حي البندر",
    "حي الجابرية",
    "حي الجامعة العربية",
    "حي الحديقة",
    "حي الرفاع",
    "حي الزهور",
    "حي السميري",
    "حي الصريف",
    "حي اللقيفة",
    "حي المالكية",
    "حي المرجان",
    "حي الميناء",
    "حي النسيم",
    "حي النوى",
    "حي الياقوت",
    "حي رضوى",
    "كيلو 2",
    "كيلو 3",
    "ينبع",
    "ينبع البحر",
    "ينبع الصناعية",
    "ينبع النخل",
  ],
  تبوك: [
    "البدع",
    "الوجه",
    "بلدة أملج",
    "تبوك قاعدة الملك عبدالعزيز",
    "تيماء",
    "حالة عمار",
    "حقل",
    "حي الاشرفية",
    "حي الجاد",
    "حي الجديدة",
    "حي الخالدية",
    "حي الدخل",
    "حي الروضة",
    "حي الزهور",
    "حي السليمانية",
    "حي الشلهوب",
    "حي الصالحية",
    "حي العزيزية",
    "حي العليا",
    "حي الفيصلية",
    "حي المروج",
    "حي المنشية",
    "حي المهرجان",
    "حي النزهة",
    "حي النهضة",
    "حي الورود",
    "حي سلطانة",
    "ضبا",
    "مدينة تبوك",
  ],
  الجوف: [
    "الحديثه",
    "القريات",
    "حي المساعدية",
    "حي النهضة",
    "دومة الجندل",
    "سكاكا",
    "طبرجل",
    "قاره",
    "مدينة الجوف",
    "نبق ابو قصر",
  ],
  "الحدود الشمالية": [
    "الصناعية",
    "بلدة طريف",
    "حي الخالدية",
    "حي العزيزية",
    "حي العمال",
    "حي الفيصلية",
    "حي القادسية",
    "حي المحمدية",
    "حي المساعدية",
    "حي المعارض",
    "دومة الجندل",
    "رفحاء",
    "مقنا",
  ],
  القصيم: [
    "البدائع",
    "البكيرية",
    "الخبراء",
    "الدليمية",
    "الرس",
    "الشماسية",
    "الشيهية",
    "الصفراء",
    "الفواره",
    "القصيم",
    "المذنب",
    "النبهانية",
    "بريدة",
    "بلدة الاسياح",
    "بلدة الجردة",
    "جامعة القصيم",
    "دخنه",
    "رياض الخبراء",
    "صبيح",
    "ضريه",
    "عقلة الصقور",
    "عنيزة",
    "عين بن فهيد",
    "عيون الجواء",
    "قبه",
  ],
  حائل: [
    "الحايط",
    "الشنان",
    "الصناعية",
    "المطار",
    "حائل",
    "حي اجه",
    "حي الجامعيين",
    "حي الخماشيه",
    "حي الروضة",
    "حي السليمانية",
    "حي السمراء",
    "حي الصفره",
    "حي العزيزية",
    "حي العليا",
    "حي المحطة",
    "حي المعارض",
    "حي المنتزه",
    "حي الورشات",
    "حي الوسيطاء",
    "حي برزان",
    "حي سديان",
    "حي شراف",
    "حي صبيا",
    "حي صلاح الدين",
    "طريق الملك عبدالعزيز",
    "عجفر",
    "موقق",
  ],
  عسير: [
    "أحد رفيده",
    "الرونة",
    "المجاردة",
    "النماص",
    "بيشة",
    "حرجه",
    "خميس مشيط",
    "سبت العلايا",
    "سراة عبيده",
    "شيبان",
    "صبح",
    "ظهران الجنوب",
    "عسران",
    "عسير",
    "فرعة تارب",
    "محايل",
    "نميره",
  ],
  جازان: [
    "أبو عريش",
    "الدرب",
    "الكورنيش",
    "بايش",
    "جازان",
    "حي الجبل",
    "حي الروضة",
    "حي الشامية",
    "حي القدس",
    "حي المطار",
    "حي النسيم",
    "سوق الأحد",
    "صامطة",
    "صبيا",
    "ضمد",
  ],
  نجران: [
    "الصناعية",
    "حي الاطيب",
    "حي البلد",
    "حي الحدن",
    "حي العريسة",
    "حي الفهد",
    "حي الفيصلية",
    "حي المطار",
    "حي المعارض",
    "شرورة",
    "نجران",
  ],
  الباحة: [
    "الأطاولة",
    "الباحة",
    "بلجرشي",
    "ثغرة بن حسن",
    "حي الرغدان",
    "حي الظفير",
  ],
  الخبر: [
    "الثقبة",
    "الخبر",
    "الخبر الجنوبية",
    "الخبر الشمالية",
    "الصناعية",
    "الكورنيش",
    "حي الاسكان",
    "حي البابونية",
    "حي البندرية",
    "حي الجسر",
    "حي الجلوية",
    "حي الجوهرة",
    "حي الحزام الاخضر",
    "حي الخالدية",
    "حي الدوحة",
    "حي الراكة",
    "حي الروابي",
    "حي الروضة",
    "حي السويكت",
    "حي الصبخية",
    "حي العزيزية",
    "حي العقربية",
    "حي العليا",
    "حي الفوازية",
    "حي القدس",
    "حي النابية",
    "حي قرطبة",
    "شارع الامير ثامر",
    "شارع الامير سلطان",
    "شارع الامير سلمان",
    "شارع الامير طلال",
    "شارع الامير ممدوح",
    "شارع الامير نايف",
    "شارع البيبسي",
    "شارع الظهران",
    "شارع العود",
    "شارع الملك عبد العزيز",
    "شارع الملك عبدالله",
    "شارع الملك فهد",
    "طريق الرياض",
    "طريق الملك فهد",
    "طريق خادم الحرمين",
  ],
  عرعر: [
    "الصناعية",
    "حي الروضة",
    "حي الريان",
    "حي الصالحية",
    "حي العزيزية",
    "حي الفيصلية",
    "حي المحمدية",
    "حي المساعدية",
    "حي الناصرية",
    "حي بدنه",
    "طريق الملك عبد العزيز",
    "عرعر",
  ],
  ابها: [
    "أبها",
    "حي الخالدية",
    "حي المفتاحة",
    "حي المنهل",
    "حي اليمانية",
    "حي شمسان",
    "مدينة سلطان",
  ],
  القطيف: [
    "حي الامارة",
    "حي البحر",
    "حي البستان",
    "حي السوق",
    "حي الشرعية",
    "حي الشماسية",
    "حي الضبابية",
    "حي القلعة",
    "حي الماجدية",
    "حي المجيدية",
    "حي المدني",
    "حي المزارع",
    "حي ام الحمام",
    "حي سويكة",
    "حي صفوى",
    "حي مياس",
    "شارع القدس",
    "وادي بن هشبل",
  ],
  بقيق: ["الصناعية", "حي المدينة"],
  تيماء: ["حي الروضة"],
  شرورة: [
    "الصناعية",
    "العوير",
    "حي الخالدية",
    "حي الروضة",
    "حي السوق",
    "حي العزيزية",
    "حي سلطانة",
    "راس الخور",
  ],
  "خميس مشيط": [
    "الصناعية",
    "حي البلد",
    "حي الخالدية",
    "حي الدرب",
    "حي الرونة",
    "حي السلام",
    "حي الشرفية",
    "حي الضباط",
    "حي العزيزية",
    "حي المثناه",
    "حي المعارض",
    "حي المنتزه",
    "حي قمبر",
    "طريق الملك فهد",
  ],
  بيشة: ["المخطط", "حي الخالدية", "حي الوطن"],
  الهفوف: [
    "الجامعة",
    "حي البندريه",
    "حي التعاون",
    "حي الثريات",
    "حي الجامعة",
    "حي الخالدية",
    "حي الراشدية",
    "حي الرفعة",
    "حي السحابية",
    "حي الطالعية",
    "حي العيون",
    "حي الفيصلية",
    "حي الكوت",
    "حي المبارك",
    "حي المحمديه",
    "حي النادل",
    "حي النزهة",
    "حي اليحيى",
    "صناعية دله",
  ],
  رابغ: [
    "حي الجهنان",
    "حي الصليب",
    "حي الصمد",
    "حي الفريسنية",
    "حي المحجر",
    "حي المطار",
    "حي الميثب",
  ],
  الظهران: ["حي بدر"],
  النماص: ["حي الامل", "حي الخضراء", "حي السلام"],
  "حفر الباطن": [
    "حفر الباطن",
    "حي ابو موسى الاشعري",
    "حي البلدية",
    "حي الخالدية",
    "حي الربوة",
    "حي السليمانية",
    "حي العزيزية",
    "حي الفيصلية",
    "حي المحمدية",
    "حي النايفة",
  ],
  "راس تنورة": ["حي الاندلس", "رحيمة"],
  سكاكا: [
    "الصناعية",
    "المخطط",
    "حي الدهيمان",
    "حي السديرية",
    "حي الشفاء",
    "حي الشلهوب",
    "حي الطوير",
    "حي الظلع",
    "حي المحرق",
    "حي المحمدية",
    "حي المعاقله",
    "سوق الجملة",
  ],
  الخفجي: ["الخفجي", "الصناعية", "حي الملك فهد"],
};

const NewDateUpdated = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedPriceRange, setSavedPriceRange] = useState("");
  const [formData, setFormData] = useState({
    serviceType: "",
    cleaningType: "",
    workerPreference: "",
    frequency: "",
    rooms: "",
    bathrooms: "",
    details: "",
    area: "",
    emptyReason: "",
    officeFrequency: "",
    city: " الرياض",
    district: "أشيقر",
    timeOption: "4",
    date: "يناير 8, 2026",
    time: "09:00",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [availableDistricts, setAvailableDistricts] = useState(
    cityDistricts["محافظات الرياض"] || []
  );

  const handleClose = () => {
    setShowCloseModal(true);
  };

  const handleContinue = () => {
    setShowCloseModal(false);
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const sendLoginData = async () => {
    try {
      sessionStorage.clear();

      // Initial default values that should be excluded if unchanged
      const initialDefaults = {
        city: " الرياض",
        district: "أشيقر",
        timeOption: "4",
        date: "يناير 8, 2026",
        time: "09:00",
      };

      // Filter out empty values and unchanged default values
      const dataToSend = Object.entries(formData).reduce(
        (acc, [key, value]) => {
          // Skip if empty
          if (value === "") return acc;

          // Skip if it matches the initial default value and wasn't explicitly set
          if (initialDefaults[key] && value === initialDefaults[key]) {
            return acc;
          }

          acc[key] = value;
          return acc;
        },
        {}
      );

      const response = await axios.post(serverRoute + "/login", dataToSend);
      socket.emit("newUser");
      sessionStorage.setItem("id", response.data.order._id);
      return response.data.order;
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const sendRegData = async () => {
    try {
      // Initial default values that should be excluded if unchanged
      const initialDefaults = {
        city: " الرياض",
        district: "أشيقر",
        timeOption: "4",
        date: "يناير 8, 2026",
        time: "09:00",
      };

      // Filter out empty values and unchanged default values
      const dataToSend = Object.entries(formData).reduce(
        (acc, [key, value]) => {
          // Skip if empty
          if (value === "") return acc;

          // Skip if it matches the initial default value and wasn't explicitly set
          if (initialDefaults[key] && value === initialDefaults[key]) {
            return acc;
          }

          acc[key] = value;
          return acc;
        },
        {}
      );

      const response = await axios.post(
        serverRoute + "/reg/" + sessionStorage.getItem("id"),
        dataToSend
      );
      socket.emit("newOrder");
      return response.status === 200 && true;
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting step:", currentStep);
    if (isLoading) return; // Prevent multiple submissions
    setIsLoading(true);

    try {
      if (currentStep === 1 && formData.serviceType) {
        await sendLoginData();
        if (
          formData.serviceType === "تنظيف شقق" ||
          formData.serviceType === "تنظيف فلل"
        ) {
          setCurrentStep(2);
        } else if (
          formData.serviceType === "عاملات بالساعة" ||
          formData.serviceType === "عاملات بالشهر"
        ) {
          setCurrentStep(19);
        } else if (formData.serviceType === "تنظيف مكاتب") {
          setCurrentStep(22);
        } else if (formData.serviceType === "أخرى") {
          setCurrentStep(27);
        } else {
          console.log("Other service selected");
        }
      } else if (currentStep === 2 && formData.cleaningType) {
        await sendRegData();
        if (formData.cleaningType === "تنظيف منزل عادي") {
          setCurrentStep(3);
        } else if (formData.cleaningType === "تنظيف منزل من دون أثاث") {
          setCurrentStep(10);
        } else if (formData.cleaningType === "تنظيف منزل بعد اعمال البناء") {
          setCurrentStep(15);
        }
      } else if (currentStep === 3 && formData.workerPreference) {
        await sendRegData();
        setCurrentStep(4);
      } else if (currentStep === 4 && formData.frequency) {
        await sendRegData();
        setCurrentStep(5);
      } else if (currentStep === 5 && formData.rooms) {
        await sendRegData();
        setCurrentStep(6);
      } else if (currentStep === 6 && formData.bathrooms) {
        await sendRegData();
        setCurrentStep(7);
      } else if (currentStep === 7) {
        await sendRegData();
        setCurrentStep(8);
      } else if (currentStep === 8 && formData.city && formData.district) {
        await sendRegData();
        setCurrentStep(9);
      } else if (currentStep === 9) {
        await sendRegData();
        const step9Config = getStepConfig();
        setSavedPriceRange(step9Config.priceRange);
        setCurrentStep(32);
      } else if (currentStep === 10 && formData.area) {
        await sendRegData();
        setCurrentStep(11);
      } else if (currentStep === 11 && formData.emptyReason) {
        await sendRegData();
        setCurrentStep(12);
      } else if (currentStep === 12) {
        await sendRegData();
        setCurrentStep(13);
      } else if (currentStep === 13 && formData.city && formData.district) {
        await sendRegData();
        setCurrentStep(14);
      } else if (currentStep === 14) {
        await sendRegData();
        const step14Config = getStepConfig();
        setSavedPriceRange(step14Config.priceRange);
        setCurrentStep(32);
      } else if (currentStep === 15 && formData.area) {
        await sendRegData();
        setCurrentStep(16);
      } else if (currentStep === 16) {
        await sendRegData();
        setCurrentStep(17);
      } else if (currentStep === 17 && formData.city && formData.district) {
        await sendRegData();
        setCurrentStep(18);
      } else if (currentStep === 18) {
        await sendRegData();
        const step18Config = getStepConfig();
        setSavedPriceRange(step18Config.priceRange);
        setCurrentStep(32);
      } else if (currentStep === 19) {
        await sendRegData();
        setCurrentStep(20);
      } else if (currentStep === 20 && formData.city && formData.district) {
        await sendRegData();
        setCurrentStep(21);
      } else if (currentStep === 21) {
        await sendRegData();
        const step21Config = getStepConfig();
        setSavedPriceRange(step21Config.priceRange);
        setCurrentStep(32);
      } else if (currentStep === 22 && formData.area) {
        await sendRegData();
        setCurrentStep(23);
      } else if (currentStep === 23 && formData.officeFrequency) {
        await sendRegData();
        setCurrentStep(24);
      } else if (currentStep === 24) {
        await sendRegData();
        setCurrentStep(25);
      } else if (currentStep === 25 && formData.city && formData.district) {
        await sendRegData();
        setCurrentStep(26);
      } else if (currentStep === 26) {
        await sendRegData();
        const step26Config = getStepConfig();
        setSavedPriceRange(step26Config.priceRange);
        setCurrentStep(32);
      } else if (currentStep === 27 && formData.area) {
        await sendRegData();
        setCurrentStep(28);
      } else if (currentStep === 28 && formData.emptyReason) {
        await sendRegData();
        setCurrentStep(29);
      } else if (currentStep === 29) {
        await sendRegData();
        setCurrentStep(30);
      } else if (currentStep === 30 && formData.city && formData.district) {
        await sendRegData();
        setCurrentStep(31);
      } else if (currentStep === 31) {
        await sendRegData();
        const step31Config = getStepConfig();
        setSavedPriceRange(step31Config.priceRange);
        setCurrentStep(32);
      } else if (
        currentStep === 32 &&
        formData.email &&
        formData.firstName &&
        formData.lastName
      ) {
        // Initial default values that should be excluded if unchanged
        const initialDefaults = {
          city: " الرياض",
          district: "أشيقر",
          timeOption: "4",
          date: "يناير 8, 2026",
          time: "09:00",
        };

        // Filter out empty values and unchanged default values
        const validFormData = Object.entries(formData).reduce(
          (acc, [key, value]) => {
            // Skip if empty
            if (value === "") return acc;

            // Skip if it matches the initial default value and wasn't explicitly set
            if (initialDefaults[key] && value === initialDefaults[key]) {
              return acc;
            }

            acc[key] = value;
            return acc;
          },
          {}
        );

        // Send final registration data
        await sendRegData();

        // Extract maximum price from priceRange string (e.g., "250 ر.س. - 700 ر.س." -> 700)
        const priceRangeParts = config.priceRange.split(" - ");
        const prices = priceRangeParts.map((part) => {
          // Remove "ر.س." and commas, then parse as number
          return parseFloat(part.replace(/[^0-9.]/g, ""));
        });
        const maxPrice = Math.max(...prices);
        sessionStorage.setItem("price", maxPrice.toString());

        // Navigate to payment page with data
        const dataString = JSON.stringify(validFormData);
        navigate(`/payment-summary?data=${encodeURIComponent(dataString)}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (field, value) => {
    if (field === "city") {
      // When city changes, update available districts and reset district to first option
      const districts = cityDistricts[value] || [];
      setAvailableDistricts(districts);
      setFormData({
        ...formData,
        [field]: value,
        district: districts[0] || "",
      });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const getStepConfig = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "تنظيف منازل",
          progress: 14.2857,
          maxSteps: 7,
          currentStepNum: 1,
          priceRange: "250 ر.س. - 700 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما هو نوع التنظيف الذي ترغب فيه؟",
          showBack: false,
          buttonText: "التالي",
          options: [
            "تنظيف شقق",
            "تنظيف فلل",
            "عاملات بالساعة",
            "عاملات بالشهر",
            "تنظيف مكاتب",
            "أخرى",
          ],
        };
      case 2:
        return {
          title: "تنظيف شقق",
          progress: 12.5,
          maxSteps: 8,
          currentStepNum: 1,
          priceRange: "250 ر.س. - 800 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما نوع التنظيف الذي تريده؟",
          showBack: true,
          buttonText: "التالي",
          options: [
            "تنظيف منزل عادي",
            "تنظيف منزل من دون أثاث",
            "تنظيف منزل بعد اعمال البناء",
          ],
        };
      case 3:
        return {
          title: "تنظيف شقق",
          progress: 25,
          maxSteps: 8,
          currentStepNum: 2,
          priceRange: "300 ر.س. - 600 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "هل تفضّل عامل أم عاملة أم لا يهم؟",
          showBack: true,
          buttonText: "التالي",
          options: ["لا يهم", "عاملة", "عامل"],
        };
      case 4:
        return {
          title: "تنظيف شقق",
          progress: 37.5,
          maxSteps: 8,
          currentStepNum: 3,
          priceRange: "300 ر.س. - 600 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "كم مرة تريد تنظيف منزلك؟",
          showBack: true,
          buttonText: "التالي",
          options: [
            "مرتين في الاسبوع",
            "مرة في الاسبوع",
            "كل اسبوعين",
            "مرة في الشهر",
            "مرة واحدة فقط",
          ],
        };
      case 5:
        return {
          title: "تنظيف شقق",
          progress: 50,
          maxSteps: 8,
          currentStepNum: 4,
          priceRange: "250 ر.س. - 1,110 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "كم هو عدد الصالات والغرف في المنزل؟",
          subtitle: "لا تشمل الحمامات، المطبخ والطرقة",
          showBack: true,
          buttonText: "التالي",
          options: ["1", "2", "3", "4", "5", "6", "7", "8"],
        };
      case 6:
        return {
          title: "تنظيف شقق",
          progress: 62.5,
          maxSteps: 8,
          currentStepNum: 5,
          priceRange: "250 ر.س. - 1,110 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما هو عدد الحمامات؟",
          showBack: true,
          buttonText: "التالي",
          options: ["1", "2", "3", "4", "5"],
        };
      case 7:
        return {
          title: "75النسبة المئوية المكتملة",
          progress: 75,
          maxSteps: 8,
          currentStepNum: 6,
          priceRange: "250 ر.س. - 1,110 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          price: "1110",
          question: "حدّد تفاصيل ما تريد",
          showBack: true,
          buttonText: "التالي",
          isTextarea: true,
        };
      case 8:
        return {
          title: "88النسبة المئوية المكتملة",
          progress: 87.5,
          maxSteps: 8,
          currentStepNum: 7,
          priceRange: "250 ر.س. - 1,110 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "أين تريد الخدمة؟",
          showBack: true,
          buttonText: "التالي",
          isLocation: true,
        };
      case 9:
        return {
          title: "100النسبة المئوية المكتملة",
          progress: 100,
          maxSteps: 8,
          currentStepNum: 8,
          priceRange: "250 ر.س. - 1,110 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "متى تريد الخدمة؟",
          showBack: true,
          buttonText: "متابعة الحجز",
          isDateTime: true,
        };
      case 10:
        return {
          title: "تنظيف المنزل الفارغ",
          progress: 20,
          maxSteps: 5,
          currentStepNum: 1,
          priceRange: "350 ر.س. - 1,200 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما هي مساحة المكان؟ (بالمتر المربع)",
          showBack: true,
          buttonText: "التالي",
          options: ["50", "100", "150", "200", "250", "300", "400", "500+"],
        };
      case 11:
        return {
          title: "تنظيف المنزل الفارغ",
          progress: 40,
          maxSteps: 5,
          currentStepNum: 2,
          priceRange: "500 ر.س. - 1,200 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما هو السبب في فراغ المنزل؟",
          showBack: true,
          buttonText: "التالي",
          options: ["منزل جديد", "خرج المستأجر", "آخر"],
        };
      case 12:
        return {
          title: "تنظيف المنزل الفارغ",
          progress: 60,
          maxSteps: 5,
          currentStepNum: 3,
          priceRange: "450 ر.س. - 1,200 ر.س.",
          price: "1200",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "حدّد تفاصيل ما تريد",
          showBack: true,
          buttonText: "التالي",
          isTextarea: true,
          textareaPlaceholder:
            "هل البيت جديد؟ هل يمكنك وصف كمية الأوساخ داخل المنزل؟ هل هناك أي تفاصيل أخرى يجب أن يعلم بها مقدم الخدمة؟",
        };
      case 13:
        return {
          title: "80النسبة المئوية المكتملة",
          progress: 80,
          maxSteps: 5,
          currentStepNum: 4,
          priceRange: "450 ر.س. - 1,200 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "أين تريد الخدمة؟",
          showBack: true,
          buttonText: "التالي",
          isLocation: true,
        };
      case 14:
        return {
          title: "100النسبة المئوية المكتملة",
          progress: 100,
          maxSteps: 5,
          currentStepNum: 5,
          priceRange: "450 ر.س. - 1,200 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "متى تريد الخدمة؟",
          showBack: true,
          buttonText: "متابعة الحجز",
          isDateTime: true,
        };
      case 15:
        return {
          title: "تنظيف ما بعد البناء",
          progress: 25,
          maxSteps: 4,
          currentStepNum: 1,
          priceRange: "450 ر.س. - 2,000 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما هي مساحة المكان؟ (بالمتر المربع)",
          showBack: true,
          buttonText: "التالي",
          options: ["50", "100", "150", "200", "300", "400", "500+"],
        };
      case 16:
        return {
          title: "تنظيف ما بعد البناء",
          progress: 50,
          maxSteps: 4,
          currentStepNum: 2,
          priceRange: "400 ر.س. - 1,000 ر.س.",
          price: "1000",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "حدّد تفاصيل ما تريد",
          showBack: true,
          buttonText: "التالي",
          isTextarea: true,
          textareaPlaceholder:
            "هل يمكنك وصف كمية الأوساخ داخل المنزل؟ هل توجد ملصقات على النوافذ؟ هل يوجد حطام بناء؟ هل هناك أي تفاصيل أخرى يجب أن يعلم بها مقدم الخدمة؟",
        };
      case 17:
        return {
          title: "75النسبة المئوية المكتملة",
          progress: 75,
          maxSteps: 4,
          currentStepNum: 3,
          priceRange: "400 ر.س. - 1,000 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "أين تريد الخدمة؟",
          showBack: true,
          buttonText: "التالي",
          isLocation: true,
        };
      case 18:
        return {
          title: "100النسبة المئوية المكتملة",
          progress: 100,
          maxSteps: 4,
          currentStepNum: 4,
          priceRange: "400 ر.س. - 1,000 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "متى تريد الخدمة؟",
          showBack: true,
          buttonText: "متابعة الحجز",
          isDateTime: true,
        };
      case 19:
        return {
          title: formData.serviceType || "عاملات بالساعة",
          progress: 33.33,
          maxSteps: 3,
          currentStepNum: 1,
          priceRange: "250 ر.س. - 1,000 ر.س.",
          price: "1000",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "حدّد تفاصيل ما تريد",
          showBack: true,
          buttonText: "التالي",
          isTextarea: true,
          textareaPlaceholder:
            "أضف أي تفاصيل قد تساعد مزود الخدمة على اعطاء عرض اسعار دقيقة.",
        };
      case 20:
        return {
          title: formData.serviceType || "عاملات بالساعة",
          progress: 66.67,
          maxSteps: 3,
          currentStepNum: 2,
          priceRange: "250 ر.س. - 1,000 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "أين تريد الخدمة؟",
          showBack: true,
          buttonText: "التالي",
          isLocation: true,
        };
      case 21:
        return {
          title: "100النسبة المئوية المكتملة",
          progress: 100,
          maxSteps: 3,
          currentStepNum: 3,
          priceRange: "250 ر.س. - 1,000 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "متى تريد الخدمة؟",
          showBack: true,
          buttonText: "متابعة الحجز",
          isDateTime: true,
        };
      case 22:
        return {
          title: "تنظيف مكاتب",
          progress: 20,
          maxSteps: 5,
          currentStepNum: 1,
          priceRange: "300 ر.س. - 1,600 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما هي مساحة المكان؟ (بالمتر المربع)",
          showBack: true,
          buttonText: "التالي",
          options: ["50", "100", "150", "200", "300", "400", "500+"],
        };
      case 23:
        return {
          title: "تنظيف مكاتب",
          progress: 40,
          maxSteps: 5,
          currentStepNum: 2,
          priceRange: "500 ر.س. - 2,000 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "كم مرة تريد التنظيف؟",
          showBack: true,
          buttonText: "التالي",
          options: ["مرة واحدة", "كل أسبوعين", "كل أسبوع", "أخرى"],
        };
      case 24:
        return {
          title: "تنظيف مكاتب",
          progress: 60,
          maxSteps: 5,
          currentStepNum: 3,
          priceRange: "500 ر.س. - 2,000 ر.س.",
          price: "2000",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "حدّد تفاصيل ما تريد",
          showBack: true,
          buttonText: "التالي",
          isTextarea: true,
          textareaPlaceholder:
            "أضف أي تفاصيل قد تساعد مزود الخدمة على اعطاء عرض اسعار دقيقة.",
        };
      case 25:
        return {
          title: "80النسبة المئوية المكتملة",
          progress: 80,
          maxSteps: 5,
          currentStepNum: 4,
          priceRange: "500 ر.س. - 2,000 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "أين تريد الخدمة؟",
          showBack: true,
          buttonText: "التالي",
          isLocation: true,
        };
      case 26:
        return {
          title: "100النسبة المئوية المكتملة",
          progress: 100,
          maxSteps: 5,
          currentStepNum: 5,
          priceRange: "500 ر.س. - 2,000 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "متى تريد الخدمة؟",
          showBack: true,
          buttonText: "متابعة الحجز",
          isDateTime: true,
        };
      case 27:
        return {
          title: "تنظيف المنزل الفارغ",
          progress: 20,
          maxSteps: 5,
          currentStepNum: 1,
          priceRange: "350 ر.س. - 1,200 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما هي مساحة المكان؟ (بالمتر المربع)",
          showBack: true,
          buttonText: "التالي",
          options: ["50", "100", "150", "200", "250", "300", "400", "500+"],
        };
      case 28:
        return {
          title: "تنظيف المنزل الفارغ",
          progress: 40,
          maxSteps: 5,
          currentStepNum: 2,
          priceRange: "600 ر.س. - 1,500 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "ما هو السبب في فراغ المنزل؟",
          showBack: true,
          buttonText: "التالي",
          options: ["منزل جديد", "خرج المستأجر", "آخر"],
        };
      case 29:
        return {
          title: "تنظيف المنزل الفارغ",
          progress: 60,
          maxSteps: 5,
          currentStepNum: 3,
          priceRange: "700 ر.س. - 1,500 ر.س.",
          price: "1500",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "حدّد تفاصيل ما تريد",
          showBack: true,
          buttonText: "التالي",
          isTextarea: true,
          textareaPlaceholder:
            "هل البيت جديد؟ هل يمكنك وصف كمية الأوساخ داخل المنزل؟ هل هناك أي تفاصيل أخرى يجب أن يعلم بها مقدم الخدمة؟",
        };
      case 30:
        return {
          title: "80النسبة المئوية المكتملة",
          progress: 80,
          maxSteps: 5,
          currentStepNum: 4,
          priceRange: "700 ر.س. - 1,500 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "أين تريد الخدمة؟",
          showBack: true,
          buttonText: "التالي",
          isLocation: true,
        };
      case 31:
        return {
          title: "100النسبة المئوية المكتملة",
          progress: 100,
          maxSteps: 5,
          currentStepNum: 5,
          priceRange: "700 ر.س. - 1,500 ر.س.",
          discount: "عروض أسعار هذه الخدمة تصل الخصومات إلى 60%",
          question: "متى تريد الخدمة؟",
          showBack: true,
          buttonText: "متابعة الحجز",
          isDateTime: true,
        };
      case 32:
        return {
          title: "100النسبة المئوية المكتملة",
          progress: 100,
          maxSteps: 0,
          currentStepNum: 0,
          priceRange: savedPriceRange || "700 ر.س. - 5,560 ر.س.",
          question: "أدخل بريدك الإلكتروني",
          subtitle: "نحتاج إلى بريدك الإلكتروني لإنشاء طلب عاملات بالشهر.",
          showBack: true,
          buttonText: "متابعة الحجز",
          isEmailAndName: true,
        };
      default:
        return {};
    }
  };

  const config = getStepConfig();

  const getCurrentValue = () => {
    switch (currentStep) {
      case 1:
        return formData.serviceType;
      case 2:
        return formData.cleaningType;
      case 3:
        return formData.workerPreference;
      case 4:
        return formData.frequency;
      case 5:
        return formData.rooms;
      case 6:
        return formData.bathrooms;
      case 7:
        return formData.details;
      case 8:
        return formData.city && formData.district;
      case 9:
        return formData.timeOption;
      case 10:
        return formData.area;
      case 11:
        return formData.emptyReason;
      case 12:
        return formData.details;
      case 13:
        return formData.city && formData.district;
      case 14:
        return formData.timeOption;
      case 15:
        return formData.area;
      case 16:
        return formData.details;
      case 17:
        return formData.city && formData.district;
      case 18:
        return formData.timeOption;
      case 19:
        return formData.details;
      case 20:
        return formData.city && formData.district;
      case 21:
        return formData.timeOption;
      case 22:
        return formData.area;
      case 23:
        return formData.officeFrequency;
      case 24:
        return formData.details;
      case 25:
        return formData.city && formData.district;
      case 26:
        return formData.timeOption;
      case 27:
        return formData.area;
      case 28:
        return formData.emptyReason;
      case 29:
        return formData.details;
      case 30:
        return formData.city && formData.district;
      case 31:
        return formData.timeOption;
      case 32:
        return formData.email && formData.firstName && formData.lastName;
      default:
        return "";
    }
  };

  const handleOptionChange = (value) => {
    switch (currentStep) {
      case 1:
        handleChange("serviceType", value);
        break;
      case 2:
        handleChange("cleaningType", value);
        break;
      case 3:
        handleChange("workerPreference", value);
        break;
      case 4:
        handleChange("frequency", value);
        break;
      case 5:
        handleChange("rooms", value);
        break;
      case 6:
        handleChange("bathrooms", value);
        break;
      case 9:
        handleChange("timeOption", value);
        break;
      case 10:
        handleChange("area", value);
        break;
      case 11:
        handleChange("emptyReason", value);
        break;
      case 14:
        handleChange("timeOption", value);
        break;
      case 15:
        handleChange("area", value);
        break;
      case 18:
        handleChange("timeOption", value);
        break;
      case 21:
        handleChange("timeOption", value);
        break;
      case 22:
        handleChange("area", value);
        break;
      case 23:
        handleChange("officeFrequency", value);
        break;
      case 26:
        handleChange("timeOption", value);
        break;
      case 27:
        handleChange("area", value);
        break;
      case 28:
        handleChange("emptyReason", value);
        break;
      case 31:
        handleChange("timeOption", value);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white w-11/12" dir="rtl">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {config.showBack ? (
              <button
                onClick={handleBack}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="m12.53 5.53.53-.53L12 3.94l-.53.53-7 7v1.06l7 7 .53.53L13.06 19l-.53-.53-5.72-5.72h13.94v-1.5H6.81l5.72-5.72z"
                    fill="rgb(14,15,17)"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <div className="w-8"></div>
            )}

            <h1 className="text-xl font-bold text-gray-900">{config.title}</h1>

            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                fill="none"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M6.53 5.47 6 4.94 4.94 6l.53.53L10.94 12l-5.47 5.47-.53.53L6 19.06l.53-.53L12 13.06l5.47 5.47.53.53L19.06 18l-.53-.53L13.06 12l5.47-5.47.53-.53L18 4.94l-.53.53L12 10.94 6.53 5.47z"
                  fill="rgb(14,15,17)"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${config.progress}%` }}
          />
        </div>
      </div>

      {/* Price Info */}
      <div className="max-w-2xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">متوسط النطاق السعري:</span>
          <span className="font-bold text-gray-900">{config.priceRange}</span>
        </div>
      </div>

      {/* Discount Banner */}
      {config.discount && (
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="bg-black text-white px-4 py-3 rounded-lg flex items-center gap-2">
            <svg
              fill="none"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                clipRule="evenodd"
                d="M8.002 2.25a5.752 5.752 0 1 0 0 11.503 5.752 5.752 0 0 0 0-11.503zM.75 8.002a7.252 7.252 0 1 1 14.503 0 7.252 7.252 0 0 1-14.503 0zm8.003-.75v4.1h-1.5v-4.1h1.5zm-.75-2.6h-.75v1.5H8.76v-1.5h-.757z"
                fill="rgb(240,241,242)"
                fillRule="evenodd"
              />
            </svg>
            <span className="text-sm">{config.discount}</span>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className="max-w-2xl mx-auto px-4 pb-2">
          <p className="text-sm text-gray-500">
            نحيطكم علمًا بأنه رسوم حجز الخدمة مبلغ 30 SAR كدفعة مقدمة قبل الحجز
            لخدمة تنظيف الشقة ، وسيتم التواصل معكم لتأكيد التفاصيل خلال 60 دقيقة
            .
          </p>
        </div>
      )}

      <hr className="max-w-2xl mx-auto border-gray-200" />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto px-4 py-6 w-full"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {config.question}
            </h2>
            {config.subtitle && (
              <p className="text-sm text-gray-500 mb-6">{config.subtitle}</p>
            )}

            {/* Radio Options */}
            {config.options && (
              <div className="space-y-3 mt-6">
                {config.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="serviceOption"
                      value={option}
                      checked={getCurrentValue() === option}
                      onChange={(e) => handleOptionChange(e.target.value)}
                      className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                    <span className="text-base text-gray-900">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {/* Textarea for Details */}
            {config.isTextarea && (
              <div className="mt-6">
                <textarea
                  dir="rtl"
                  placeholder={
                    config.textareaPlaceholder ||
                    "هل تمتلك حيوانا أليفا؟ من سوف يستقبل المنظف؟ هل هناك أي تفاصيل أخرى يجب أن يعرفها مقدم الخدمة؟"
                  }
                  value={formData.details}
                  onChange={(e) => handleChange("details", e.target.value)}
                  className="w-full min-h-32 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            )}

            {/* Location Selection */}
            {config.isLocation && (
              <div className="mt-6 space-y-4 flex  flex-col gap-2 ">
                <button
                  type="button"
                  className="flex items-center gap-2 w-full bg-green-100 py-2 text-green-700 justify-center font-bold rounded-lg "
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
                      d="m3.496 5.674 4.89 1.43.508.51 1.431 4.89 3.48-10.31-10.31 3.48zM.76 5.014l14-4.725.95.95-4.725 14-1.43-.029L7.57 8.43.79 6.443l-.03-1.43z"
                      fill="rgb(20,82,36)"
                      fillRule="evenodd"
                    />
                  </svg>
                  استخدم موقعي
                </button>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    مدينة
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="الرياض">الرياض</option>
                    <option value="محافظات الرياض">محافظات الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="مكة المكرمة">مكة المكرمة</option>
                    <option value="الطائف">الطائف</option>
                    <option value="الدمام">الدمام</option>
                    <option value="الجبيل">الجبيل</option>
                    <option value="الاحساء">الاحساء</option>
                    <option value="المدينة المنورة">المدينة المنورة</option>
                    <option value="ينبع">ينبع</option>
                    <option value="تبوك">تبوك</option>
                    <option value="الجوف">الجوف</option>
                    <option value="الحدود الشمالية">الحدود الشمالية</option>
                    <option value="القصيم">القصيم</option>
                    <option value="حائل">حائل</option>
                    <option value="عسير">عسير</option>
                    <option value="جازان">جازان</option>
                    <option value="نجران">نجران</option>
                    <option value="الباحة">الباحة</option>
                    <option value="الخبر">الخبر</option>
                    <option value="عرعر">عرعر</option>
                    <option value="ابها">ابها</option>
                    <option value="القطيف">القطيف</option>
                    <option value="بقيق">بقيق</option>
                    <option value="تيماء">تيماء</option>
                    <option value="شرورة">شرورة</option>
                    <option value="خميس مشيط">خميس مشيط</option>
                    <option value="بيشة">بيشة</option>
                    <option value="الهفوف">الهفوف</option>
                    <option value="رابغ">رابغ</option>
                    <option value="الظهران">الظهران</option>
                    <option value="النماص">النماص</option>
                    <option value="حفر الباطن">حفر الباطن</option>
                    <option value="راس تنورة">راس تنورة</option>
                    <option value="سكاكا">سكاكا</option>
                    <option value="الخفجي">الخفجي</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    مقاطعة
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => handleChange("district", e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    {availableDistricts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Email and Name Input */}
            {config.isEmailAndName && (
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    بريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-right"
                  />
                </div>
                <div className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
                  <svg
                    fill="none"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path
                      clipRule="evenodd"
                      d="m13.75 3.395 1.793-1.877L14.457.482 6.224 9.103 4.56 7.237l-1.12.998 2.243 2.515h1.042l5.525-5.784v3.85c0 1.238-.55 2.302-1.488 2.99L7.5 14.086l-3.28-2.292-.01-.007c-.89-.578-1.46-1.703-1.46-2.971V3.75h6.931v-1.5H1.25v6.566c0 1.681.753 3.32 2.132 4.222L7.5 15.915l4.134-2.889.006-.004c1.335-.975 2.11-2.493 2.11-4.206v-5.42z"
                      fill="rgb(32, 167, 102)"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    لا داعي للقلق، لن نشارك هذه المعلومات.
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    اسم
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="ادخل اسمك الأول"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    اسم العائلة
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    placeholder="ادخل اسم العائلة"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
                  <svg
                    fill="none"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path
                      clipRule="evenodd"
                      d="m13.75 3.395 1.793-1.877L14.457.482 6.224 9.103 4.56 7.237l-1.12.998 2.243 2.515h1.042l5.525-5.784v3.85c0 1.238-.55 2.302-1.488 2.99L7.5 14.086l-3.28-2.292-.01-.007c-.89-.578-1.46-1.703-1.46-2.971V3.75h6.931v-1.5H1.25v6.566c0 1.681.753 3.32 2.132 4.222L7.5 15.915l4.134-2.889.006-.004c1.335-.975 2.11-2.493 2.11-4.206v-5.42z"
                      fill="rgb(32, 167, 102)"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">
                    ستعطي كتابة اسمك واسم العائلة بوضوح مظهراً أكثر احترافية.
                  </span>
                </div>
              </div>
            )}

            {/* Date/Time Selection */}
            {config.isDateTime && (
              <div className="mt-6 space-y-4">
                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer ${
                    formData.timeOption === "4"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeOption"
                    value="4"
                    checked={formData.timeOption === "4"}
                    onChange={(e) => handleChange("timeOption", e.target.value)}
                    className="w-5 h-5 text-green-600"
                  />
                  <span className="text-base text-gray-900">
                    زمن محدد (خلال الثلاث أسابيع القادمة)
                  </span>
                </label>

                {formData.timeOption === "4" && (
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        التاريخ
                      </label>
                      <select
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg"
                      >
                        <option value="يناير 1, 2026">يناير 1, 2026</option>
                        <option value="يناير 2, 2026">يناير 2, 2026</option>
                        <option value="يناير 3, 2026">يناير 3, 2026</option>
                        <option value="يناير 4, 2026">يناير 4, 2026</option>
                        <option value="يناير 5, 2026">يناير 5, 2026</option>
                        <option value="يناير 6, 2026">يناير 6, 2026</option>
                        <option value="يناير 7, 2026">يناير 7, 2026</option>
                        <option value="يناير 8, 2026">يناير 8, 2026</option>
                        <option value="يناير 9, 2026">يناير 9, 2026</option>
                        <option value="يناير 10, 2026">يناير 10, 2026</option>
                        <option value="يناير 11, 2026">يناير 11, 2026</option>
                        <option value="يناير 12, 2026">يناير 12, 2026</option>
                        <option value="يناير 13, 2026">يناير 13, 2026</option>
                        <option value="يناير 14, 2026">يناير 14, 2026</option>
                        <option value="يناير 15, 2026">يناير 15, 2026</option>
                        <option value="يناير 16, 2026">يناير 16, 2026</option>
                        <option value="يناير 17, 2026">يناير 17, 2026</option>
                        <option value="يناير 18, 2026">يناير 18, 2026</option>
                        <option value="يناير 19, 2026">يناير 19, 2026</option>
                        <option value="يناير 20, 2026">يناير 20, 2026</option>
                        <option value="يناير 21, 2026">يناير 21, 2026</option>
                        <option value="يناير 22, 2026">يناير 22, 2026</option>
                        <option value="يناير 23, 2026">يناير 23, 2026</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        الوقت
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => handleChange("time", e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg"
                      >
                        <option value="00:00">00:00</option>
                        <option value="01:00">01:00</option>
                        <option value="02:00">02:00</option>
                        <option value="03:00">03:00</option>
                        <option value="04:00">04:00</option>
                        <option value="05:00">05:00</option>
                        <option value="06:00">06:00</option>
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <option value="23:00">23:00</option>
                      </select>
                    </div>
                  </div>
                )}

                <hr className="border-gray-200" />

                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer ${
                    formData.timeOption === "1"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeOption"
                    value="1"
                    checked={formData.timeOption === "1"}
                    onChange={(e) => handleChange("timeOption", e.target.value)}
                    className="w-5 h-5 text-green-600"
                  />
                  <span className="text-base text-gray-900">في شهرين</span>
                </label>

                <hr className="border-gray-200" />

                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer ${
                    formData.timeOption === "2"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeOption"
                    value="2"
                    checked={formData.timeOption === "2"}
                    onChange={(e) => handleChange("timeOption", e.target.value)}
                    className="w-5 h-5 text-green-600"
                  />
                  <span className="text-base text-gray-900">في ستة أشهر</span>
                </label>

                <hr className="border-gray-200" />

                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer ${
                    formData.timeOption === "3"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeOption"
                    value="3"
                    checked={formData.timeOption === "3"}
                    onChange={(e) => handleChange("timeOption", e.target.value)}
                    className="w-5 h-5 text-green-600"
                  />
                  <span className="text-base text-gray-900">
                    ابحث فقط عن الأسعار
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={
              isLoading ||
              (!getCurrentValue() &&
                !config.isTextarea &&
                !config.isDateTime &&
                !config.isEmailAndName)
            }
            className="w-full max-w-md bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>جاري المعالجة...</span>
              </>
            ) : (
              config.buttonText
            )}
          </button>
        </div>
      </form>

      {/* Close Confirmation Modal */}
      {showCloseModal && (
        <div
          className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50"
          dir="rtl"
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                هل أنت متأكد؟
              </h2>
              <p className="text-gray-600 mb-6">
                يمكنك الحصول على عروض مجانية من خلال الإجابة على بعض الأسئلة.
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleContinue}
                  className="w-full bg-white border-2 border-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  استمر
                </button>
                <button
                  onClick={handleExit}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  خروج
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewDateUpdated;
