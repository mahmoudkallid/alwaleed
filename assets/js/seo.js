/* 
 * ملف تحسين محركات البحث (SEO) لموقع شركة الوليد للإطارات والدواليب
 * يحتوي على الكلمات المفتاحية والوصف والعلامات الوصفية لتحسين ظهور الموقع في محركات البحث
 */

// الكلمات المفتاحية الرئيسية
const mainKeywords = [
  "الوليد للإطارات",
  "إطارات سيارات",
  "دواليب",
  "إطارات شاحنات",
  "إطارات رياضية",
  "إطارات طرق وعرة",
  "صيانة إطارات",
  "موازنة إطارات",
  "بيع إطارات",
  "إطارات عالية الجودة",
  "خدمات إطارات"
];

// الكلمات المفتاحية طويلة الذيل
const longTailKeywords = [
  "أفضل إطارات سيارات في السعودية",
  "شركة إطارات موثوقة في الرياض",
  "أسعار إطارات السيارات الرياضية",
  "خدمة تبديل إطارات متنقلة",
  "إطارات شاحنات متينة بأسعار منافسة",
  "أفضل إطارات للطرق الوعرة",
  "صيانة وموازنة إطارات احترافية",
  "عروض على إطارات السيارات الفاخرة",
  "إطارات مقاومة للحرارة للمناخ الصحراوي",
  "ضمان على إطارات السيارات"
];

// وصف الصفحات
const pageDescriptions = {
  home: "شركة الوليد للإطارات والدواليب - الرائدة في مجال الإطارات عالية الجودة والخدمات المتميزة في المملكة العربية السعودية",
  products: "تشكيلة واسعة من إطارات السيارات والشاحنات والإطارات الرياضية وإطارات الطرق الوعرة من أشهر العلامات التجارية العالمية",
  services: "خدمات متكاملة من البيع والتركيب إلى الصيانة الدورية والإصلاح بأيدي خبراء متخصصين في مجال الإطارات",
  about: "تعرف على شركة الوليد للإطارات والدواليب، تاريخها، رؤيتها، قيمها وفريق العمل المحترف الذي يقف خلف نجاحها",
  gallery: "معرض صور لمنتجات شركة الوليد للإطارات والدواليب، معارضها، مراكز الخدمة والفعاليات المختلفة",
  blog: "مدونة شركة الوليد للإطارات والدواليب - مقالات ونصائح حول العناية بالإطارات وأحدث التقنيات في عالم السيارات",
  contact: "تواصل مع شركة الوليد للإطارات والدواليب - معلومات الاتصال، العناوين، أرقام الهواتف وساعات العمل"
};

// العلامات الوصفية الهيكلية
const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "شركة الوليد للإطارات والدواليب",
    "url": "https://www.alwaleed-tires.com",
    "logo": "https://www.alwaleed-tires.com/assets/images/alwaleed_logo_new.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966112345678",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/alwaleedtires",
      "https://www.twitter.com/alwaleedtires",
      "https://www.instagram.com/alwaleedtires",
      "https://www.linkedin.com/company/alwaleedtires"
    ]
  },
  
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "TireShop",
    "name": "شركة الوليد للإطارات والدواليب",
    "image": "https://www.alwaleed-tires.com/assets/images/store-front.jpg",
    "telephone": "+966112345678",
    "email": "info@alwaleed-tires.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "الطريق الدائري الشرقي",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "postalCode": "12345",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.713454",
      "longitude": "46.723862"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "14:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "$$"
  },
  
  product: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "إطار بريميوم للسيارات",
    "image": "https://www.alwaleed-tires.com/assets/images/products/premium-tire.jpg",
    "description": "إطار عالي الجودة للسيارات، يوفر أداءً ممتازاً على جميع الطرق وعمراً طويلاً",
    "brand": {
      "@type": "Brand",
      "name": "الوليد"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.alwaleed-tires.com/products/premium-tire.html",
      "priceCurrency": "SAR",
      "price": "750",
      "availability": "https://schema.org/InStock"
    }
  }
};

// تحسين الروابط الداخلية
const internalLinkingStrategy = {
  homePage: [
    { target: "products.html", anchor: "تصفح منتجاتنا", importance: "high" },
    { target: "services.html", anchor: "خدماتنا المتميزة", importance: "high" },
    { target: "about.html", anchor: "تعرف علينا", importance: "medium" },
    { target: "contact.html", anchor: "تواصل معنا", importance: "high" }
  ],
  
  productsPage: [
    { target: "index.html", anchor: "العودة للرئيسية", importance: "medium" },
    { target: "services.html", anchor: "خدمات التركيب والصيانة", importance: "high" },
    { target: "product-details.html", anchor: "تفاصيل المنتج", importance: "high" }
  ],
  
  blogPage: [
    { target: "index.html", anchor: "الرئيسية", importance: "medium" },
    { target: "products.html", anchor: "تسوق الإطارات", importance: "high" },
    { target: "contact.html", anchor: "طلب استشارة", importance: "medium" }
  ]
};

// استراتيجية الكلمات المفتاحية للصفحات
const keywordStrategy = {
  homePage: {
    title: "الوليد للإطارات والدواليب - الرائدة في مجال الإطارات عالية الجودة",
    h1: "الوليد للإطارات والدواليب",
    h2: ["لماذا تختار الوليد؟", "منتجاتنا المميزة", "آراء عملائنا", "شركاؤنا", "تواصل معنا"],
    metaDescription: "شركة الوليد للإطارات والدواليب - الرائدة في مجال الإطارات عالية الجودة والخدمات المتميزة في المملكة العربية السعودية",
    focusKeywords: ["الوليد للإطارات", "إطارات سيارات", "دواليب", "إطارات عالية الجودة"]
  },
  
  productsPage: {
    title: "منتجاتنا | الوليد للإطارات والدواليب - تشكيلة واسعة من الإطارات",
    h1: "منتجات الوليد للإطارات والدواليب",
    h2: ["إطارات السيارات", "إطارات الشاحنات", "الإطارات الرياضية", "إطارات الطرق الوعرة"],
    metaDescription: "تشكيلة واسعة من إطارات السيارات والشاحنات والإطارات الرياضية وإطارات الطرق الوعرة من أشهر العلامات التجارية العالمية",
    focusKeywords: ["منتجات الوليد", "إطارات سيارات", "إطارات شاحنات", "إطارات رياضية"]
  },
  
  servicesPage: {
    title: "خدماتنا | الوليد للإطارات والدواليب - خدمات متكاملة للإطارات",
    h1: "خدمات الوليد للإطارات والدواليب",
    h2: ["تركيب وموازنة الإطارات", "الصيانة والفحص", "الاستشارات الفنية", "الضمان والدعم"],
    metaDescription: "خدمات متكاملة من البيع والتركيب إلى الصيانة الدورية والإصلاح بأيدي خبراء متخصصين في مجال الإطارات",
    focusKeywords: ["خدمات الإطارات", "تركيب إطارات", "صيانة إطارات", "موازنة إطارات"]
  }
};

// استراتيجية وسائل التواصل الاجتماعي
const socialMediaStrategy = {
  platforms: [
    { name: "Facebook", url: "https://www.facebook.com/alwaleedtires", icon: "fab fa-facebook-f" },
    { name: "Twitter", url: "https://www.twitter.com/alwaleedtires", icon: "fab fa-twitter" },
    { name: "Instagram", url: "https://www.instagram.com/alwaleedtires", icon: "fab fa-instagram" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/alwaleedtires", icon: "fab fa-linkedin-in" },
    { name: "WhatsApp", url: "https://wa.me/966501234567", icon: "fab fa-whatsapp" }
  ],
  
  sharingButtons: [
    { platform: "Facebook", action: "share", text: "مشاركة على فيسبوك" },
    { platform: "Twitter", action: "tweet", text: "تغريد على تويتر" },
    { platform: "WhatsApp", action: "send", text: "مشاركة عبر واتساب" },
    { platform: "LinkedIn", action: "share", text: "مشاركة على لينكد إن" }
  ],
  
  openGraph: {
    title: "الوليد للإطارات والدواليب - الرائدة في مجال الإطارات عالية الجودة",
    description: "شركة الوليد للإطارات والدواليب - الرائدة في مجال الإطارات عالية الجودة والخدمات المتميزة في المملكة العربية السعودية",
    image: "https://www.alwaleed-tires.com/assets/images/og-image.jpg",
    url: "https://www.alwaleed-tires.com",
    type: "website",
    locale: "ar_SA",
    siteName: "الوليد للإطارات والدواليب"
  },
  
  twitterCard: {
    card: "summary_large_image",
    site: "@alwaleedtires",
    title: "الوليد للإطارات والدواليب - الرائدة في مجال الإطارات عالية الجودة",
    description: "شركة الوليد للإطارات والدواليب - الرائدة في مجال الإطارات عالية الجودة والخدمات المتميزة في المملكة العربية السعودية",
    image: "https://www.alwaleed-tires.com/assets/images/twitter-card.jpg"
  }
};

// تحسين سرعة الموقع
const performanceOptimization = {
  imageOptimization: {
    formats: ["WebP", "JPEG", "PNG"],
    lazyLoading: true,
    responsiveImages: true,
    compressionLevel: "high"
  },
  
  codeOptimization: {
    minifyHTML: true,
    minifyCSS: true,
    minifyJS: true,
    deferNonCriticalJS: true,
    inlineCriticalCSS: true
  },
  
  caching: {
    browserCache: true,
    serverCache: true,
    cdnCache: true
  },
  
  serverOptimization: {
    gzipCompression: true,
    httpsRedirect: true,
    http2Enabled: true
  }
};

// تصدير الوظائف والمتغيرات
export {
  mainKeywords,
  longTailKeywords,
  pageDescriptions,
  structuredData,
  internalLinkingStrategy,
  keywordStrategy,
  socialMediaStrategy,
  performanceOptimization
};
