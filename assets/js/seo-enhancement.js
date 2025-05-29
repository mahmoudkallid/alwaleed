/* 
 * ملف تحسين الروابط الداخلية والبيانات الهيكلية
 * الوليد للإطارات والدواليب
 */

// إضافة البيانات الهيكلية (Schema Markup) لجميع صفحات الموقع
document.addEventListener('DOMContentLoaded', function() {
    // إضافة بيانات هيكلية للشركة (Organization Schema)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "شركة الوليد للإطارات والدواليب",
        "url": "https://www.alwaleed-tires.com",
        "logo": "https://www.alwaleed-tires.com/assets/images/alwaleed_logo_new.jpg",
        "description": "شركة الوليد للإطارات والدواليب هي الشركة الرائدة في مجال توفير الإطارات عالية الجودة وخدمات الصيانة المتميزة بأسعار تنافسية.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "الطريق الدائري الشرقي، حي النزهة",
            "addressLocality": "الرياض",
            "addressRegion": "الرياض",
            "addressCountry": "المملكة العربية السعودية"
        },
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
    };

    // إضافة بيانات هيكلية للمنتجات (Product Schema) - يتم إضافتها في صفحة المنتجات
    if (window.location.pathname.includes('products.html')) {
        const productSchemas = [
            {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "إطارات بريميوم للسيارات الفاخرة",
                "image": "https://www.alwaleed-tires.com/assets/images/products/premium-tires.jpg",
                "description": "إطارات عالية الجودة مصممة خصيصاً للسيارات الفاخرة، توفر أداءً استثنائياً وراحة فائقة أثناء القيادة.",
                "brand": {
                    "@type": "Brand",
                    "name": "الوليد"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://www.alwaleed-tires.com/products.html",
                    "priceCurrency": "SAR",
                    "price": "1200",
                    "availability": "https://schema.org/InStock"
                }
            },
            // يمكن إضافة المزيد من المنتجات هنا
        ];

        // إضافة البيانات الهيكلية للمنتجات إلى الصفحة
        productSchemas.forEach(schema => {
            addSchemaToPage(schema);
        });
    }

    // إضافة بيانات هيكلية للخدمات (Service Schema) - يتم إضافتها في صفحة الخدمات
    if (window.location.pathname.includes('services.html')) {
        const serviceSchemas = [
            {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "تركيب وموازنة الإطارات",
                "description": "خدمة احترافية لتركيب وموازنة الإطارات باستخدام أحدث التقنيات والمعدات.",
                "provider": {
                    "@type": "Organization",
                    "name": "شركة الوليد للإطارات والدواليب"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "المملكة العربية السعودية"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://www.alwaleed-tires.com/services.html",
                    "priceCurrency": "SAR",
                    "price": "150",
                    "availability": "https://schema.org/InStock"
                }
            },
            // يمكن إضافة المزيد من الخدمات هنا
        ];

        // إضافة البيانات الهيكلية للخدمات إلى الصفحة
        serviceSchemas.forEach(schema => {
            addSchemaToPage(schema);
        });
    }

    // إضافة بيانات هيكلية للمقالات (Article Schema) - يتم إضافتها في صفحة المدونة
    if (window.location.pathname.includes('blog.html')) {
        const articleSchemas = [
            {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "كيف تختار الإطار المناسب لسيارتك؟",
                "image": "https://www.alwaleed-tires.com/assets/images/blog/choose-right-tire.jpg",
                "datePublished": "2025-05-15T08:00:00+03:00",
                "dateModified": "2025-05-15T08:00:00+03:00",
                "author": {
                    "@type": "Person",
                    "name": "أحمد محمد"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "شركة الوليد للإطارات والدواليب",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.alwaleed-tires.com/assets/images/alwaleed_logo_new.jpg"
                    }
                },
                "description": "يعد اختيار الإطار المناسب لسيارتك من أهم القرارات التي تؤثر على أداء السيارة وسلامتها. في هذا المقال، نقدم لك دليلاً شاملاً لاختيار الإطار المناسب بناءً على نوع السيارة، ظروف القيادة، والميزانية."
            },
            // يمكن إضافة المزيد من المقالات هنا
        ];

        // إضافة البيانات الهيكلية للمقالات إلى الصفحة
        articleSchemas.forEach(schema => {
            addSchemaToPage(schema);
        });
    }

    // إضافة بيانات هيكلية للفروع (LocalBusiness Schema) - يتم إضافتها في صفحة اتصل بنا
    if (window.location.pathname.includes('contact.html')) {
        const localBusinessSchemas = [
            {
                "@context": "https://schema.org",
                "@type": "AutoRepair",
                "name": "شركة الوليد للإطارات والدواليب - فرع الرياض",
                "image": "https://www.alwaleed-tires.com/assets/images/branches/riyadh.jpg",
                "telephone": "+966112345678",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "الطريق الدائري الشرقي، حي النزهة",
                    "addressLocality": "الرياض",
                    "addressRegion": "الرياض",
                    "addressCountry": "المملكة العربية السعودية"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "24.6883066841197",
                    "longitude": "46.72386491500158"
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
                ]
            },
            // يمكن إضافة المزيد من الفروع هنا
        ];

        // إضافة البيانات الهيكلية للفروع إلى الصفحة
        localBusinessSchemas.forEach(schema => {
            addSchemaToPage(schema);
        });
    }

    // إضافة البيانات الهيكلية للشركة إلى جميع الصفحات
    addSchemaToPage(organizationSchema);

    // وظيفة مساعدة لإضافة البيانات الهيكلية إلى الصفحة
    function addSchemaToPage(schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
    }
});

// تحسين الروابط الداخلية
document.addEventListener('DOMContentLoaded', function() {
    // إضافة سمة rel="nofollow" للروابط الخارجية
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="alwaleed-tires.com"])');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'nofollow');
        link.setAttribute('target', '_blank');
    });

    // إضافة عناوين وصفية للروابط
    const links = document.querySelectorAll('a:not([title])');
    links.forEach(link => {
        if (link.textContent.trim() !== '') {
            link.setAttribute('title', link.textContent.trim());
        }
    });

    // تحسين سرعة تحميل الصور
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// تحسين سرعة تحميل الصفحات
document.addEventListener('DOMContentLoaded', function() {
    // تأجيل تحميل الصور غير المرئية
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    observer.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // تأجيل تحميل الأكواد غير الضرورية
    setTimeout(() => {
        // تحميل الأكواد غير الضرورية بعد تحميل الصفحة
        const nonCriticalScripts = [
            // يمكن إضافة مسارات الأكواد غير الضرورية هنا
        ];
        
        nonCriticalScripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        });
    }, 2000);
});
