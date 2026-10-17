export const siteData = {
  name: "مطعم أمير القلوب",
  tagline: "Restaurant amir alqulub",
  description: "نقدم لكم أشهى الأطباق المتنوعة من البيتزا، الفطائر، الصاج، البركر، والقص، محضرة بعناية لترضي جميع الأذواق.",
  contact: {
    address: "Nasiriyah, Iraq, 6400 حي العسكري شارع المدراس",
    phone: "+964 780 656 3170",
    whatsapp: "+964 780 656 3170",
    email: "مستقبلاً",
    hours: "ساعات العمل تبدأ من الساعة 3 عصراً الى 2 صباحاً"
  },
  social: {
    instagram: "https://www.instagram.com/a_mer_iq?mdxt=MTJoYXRiNnEyN29jaQ==",
    facebook: "https://www.facebook.com/share/1ExQsM2FBM/"
  }
};

export const menuCategories = ["قسم البيتزا", "قسم الفطائر", "قسم الصاج", "قسم البركر", "قسم الكص", "قسم الفلافل", "أطباق الأمير"];

export const menuItems = [
  // قسم البيتزا
  { id: 1, name: "بيتزا لحم جامبو", description: "", price: 10000, category: "قسم البيتزا", isFeatured: true, image: "/2.jpg" },
  { id: 2, name: "بيتزا لحم عائلي", description: "", price: 8000, category: "قسم البيتزا", isFeatured: false },
  { id: 3, name: "بيتزا لحم وسط", description: "", price: 6000, category: "قسم البيتزا", isFeatured: false },
  { id: 4, name: "بيتزا دجاج جامبو", description: "", price: 10000, category: "قسم البيتزا", isFeatured: false },
  { id: 7, name: "بيتزا خضار جامبو", description: "", price: 10000, category: "قسم البيتزا", isFeatured: true, image: "/4.jpg" },
  { id: 10, name: "بيتزا خضار الامير", description: "", price: 5000, category: "قسم البيتزا", isFeatured: false },

  // قسم الفطائر
  { id: 11, name: "فطيره لحم جامبو", description: "", price: 10000, category: "قسم الفطائر", isFeatured: false, image: "/8.jpg" },
  { id: 14, name: "فطيره دجاج جامبو", description: "", price: 10000, category: "قسم الفطائر", isFeatured: false },
  { id: 17, name: "لحم بعجين دبل بالبيض والجبن", description: "", price: 4000, category: "قسم الفطائر", isFeatured: false },
  { id: 19, name: "لحم بعجين عادي", description: "", price: 2000, category: "قسم الفطائر", isFeatured: false },

  // قسم الصاج
  { id: 20, name: "صاج لحم ايطالي الجامبو", description: "", price: 10000, category: "قسم الصاج", isFeatured: false },
  { id: 23, name: "صاج دجاج ايطالي جامبو", description: "", price: 10000, category: "قسم الصاج", isFeatured: true, image: "/7.jpg" },
  { id: 26, name: "لغم لحم جامبو", description: "", price: 10000, category: "قسم الصاج", isFeatured: false },
  { id: 28, name: "لغم دجاج جامبو", description: "وجبة متكاملة", price: 10000, category: "قسم الصاج", isFeatured: true, image: "/3.jpg" },
  { id: 30, name: "صاج لحم", description: "مقطع مع مقبلات", price: 2000, category: "قسم الصاج", isFeatured: false, image: "/10.jpg" },
  { id: 31, name: "صاج دجاج", description: "مقطع مع بطاطا", price: 2000, category: "قسم الصاج", isFeatured: false, image: "/5.jpg" },

  // قسم البركر
  { id: 34, name: "بركر الامير دبل", description: "", price: 3000, category: "قسم البركر", isFeatured: false },
  { id: 35, name: "بركر الامير بالجبن", description: "", price: 2000, category: "قسم البركر", isFeatured: false },
  { id: 36, name: "بركر عادي", description: "", price: 1000, category: "قسم البركر", isFeatured: false },

  // قسم الكص
  { id: 37, name: "كص لحم", description: "", price: 1500, category: "قسم الكص", isFeatured: false, image: "/6.jpg" },
  { id: 38, name: "كص دجاج", description: "", price: 1500, category: "قسم الكص", isFeatured: false },

  // قسم الفلافل
  { id: 39, name: "فلافل مشكل", description: "", price: 500, category: "قسم الفلافل", isFeatured: false },
  { id: 40, name: "عصير بأنواعه", description: "", price: 500, category: "قسم الفلافل", isFeatured: false },

  // أطباق الأمير
  { id: 41, name: "طبق مشكل جامبو", description: "تشكيلة رائعة من الأصناف المتنوعة", price: 20000, category: "أطباق الأمير", isFeatured: true, image: "/1.jpg" },
  { id: 42, name: "طبق مقبلات مشكل", description: "مقبلات طازجة متنوعة", price: 15000, category: "أطباق الأمير", isFeatured: false, image: "/9.jpg" }
];
