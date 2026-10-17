export const siteData = {
  name: "مطعم امير القلوب",
  tagline: "حيث تلتقي الأصالة بالفخامة",
  description: "نقدم لك تجربة تذوق لا تُنسى في أجواء كلاسيكية هادئة، مع أطباق محضرة بعناية من أجود المكونات الطازجة. جميع أطباقنا تعكس تراثنا العريق.",
  contact: {
    address: "https://www.google.com/maps/place/375C%2BCX8+%D9%85%D8%B7%D8%B9%D9%85+%D8%A7%D9%85%D9%8A%D8%B1+%D8%A7%D9%84%D9%82%D9%84%D9%88%D8%A8%D8%8C+%D8%A7%D9%84%D9%86%D8%A7%D8%B5%D8%B1%D9%8A%D8%A9%D8%8C+%D8%B0%D9%8A+%D9%82%D8%A7%D8%B1%E2%80%8E+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x3fdde35e68426527:0xcddf3acce9ffb06f!18m1!1e1?utm_source=mstt_1&g_ep=CAESBzI2LjQxLjMYACCenQoqxwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwODM1NzEwLDEwMDgyNTAyNSwxMDA4MjAyMzcsMTAwODIyNDk0LDEwMDgyNzk3NSwxMDA4MzgzNTksMTIxODE2NDYxQgJJUQ%3D%3D&skid=302015c7-1394-4458-9f4f-215e67599c8f&entry=ml&utm_campaign=ml-ardl&coh=192189%2C230964",
    phone: "+9647806563170",
    whatsapp: "+9647806563170",
    hours: "يومياً: 1:00 مساءً - 11:30 مساءً"
  },
  social: {
    instagram: "https://www.instagram.com/a_mer_iq?srtk=MTJoYXRiNnEyN29jaQ==",
    facebook: "https://www.facebook.com/share/1NKFD6TfMg/"
  }
};

export const menuCategories = ["المقبلات", "الأطباق الرئيسية", "المشويات", "الحلويات", "المشروبات"];

export const menuItems = [
  {
    id: 1,
    name: "حمص بالكمأة",
    nameEn: "Truffle Hummus",
    description: "حمص ناعم مع زيت الكمأة الفاخر والصنوبر المحمص.",
    price: 8000,
    category: "المقبلات",
    image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?q=80&w=800&auto=format&fit=crop",
    isFeatured: false
  },
  {
    id: 2,
    name: "كباب عراقي ملكي",
    nameEn: "Royal Iraqi Kebab",
    description: "سيخ كباب لحم غنم طازج متبل بخلطتنا السرية، يقدم مع الخضار المشوية.",
    price: 22000,
    category: "المشويات",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    isFeatured: true
  },
  {
    id: 3,
    name: "موزات لحم بالزعفران",
    nameEn: "Saffron Lamb Shanks",
    description: "موزات لحم مطهوة ببطء مع أرز الزعفران والمكسرات المحمصة.",
    price: 28000,
    category: "الأطباق الرئيسية",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    isFeatured: true
  },
  {
    id: 4,
    name: "كنافة الفستق",
    nameEn: "Pistachio Kunafa",
    description: "كنافة ذهبية محشوة بالقشطة الطازجة ومغطاة بالفستق الحلبي.",
    price: 10000,
    category: "الحلويات",
    image: "https://images.unsplash.com/photo-1551024506-0cb4a1692231?q=80&w=800&auto=format&fit=crop",
    isFeatured: false
  }
];
