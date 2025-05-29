/* 
 * ملف JavaScript الرئيسي لموقع شركة الوليد للإطارات والدواليب
 * تم تطويره بواسطة فريق مانوس
 */

// انتظار تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة المتغيرات العامة
    initVariables();
    
    // تفعيل القائمة المتجاوبة
    initMobileNav();
    
    // تفعيل تأثيرات التمرير
    initScrollEffects();
    
    // تفعيل تأثيرات الأزرار
    initButtonEffects();
    
    // تفعيل الخلفية المتحركة
    initMovingBackground();
    
    // تفعيل تأثيرات الجزيئات
    initParticles();
    
    // تفعيل شرائح الشهادات
    initTestimonialSlider();
    
    // تفعيل فلتر المنتجات
    initProductsFilter();
});

// تهيئة المتغيرات العامة
function initVariables() {
    window.scrollPos = 0;
    window.isScrolling = false;
    window.isMenuOpen = false;
}

// تفعيل القائمة المتجاوبة
function initMobileNav() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileNavToggle && navList) {
        mobileNavToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            window.isMenuOpen = !window.isMenuOpen;
            
            // تغيير أيقونة القائمة
            this.innerHTML = window.isMenuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // إغلاق القائمة عند النقر على أي رابط
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    navList.classList.remove('active');
                    window.isMenuOpen = false;
                    mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
}

// تفعيل تأثيرات التمرير
function initScrollEffects() {
    // تغيير حالة الهيدر عند التمرير
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
    
    // تفعيل تأثيرات ظهور العناصر عند التمرير
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length > 0) {
        // تحقق من العناصر المرئية عند تحميل الصفحة
        checkFadeElements();
        
        // تحقق من العناصر المرئية عند التمرير
        window.addEventListener('scroll', function() {
            if (!window.isScrolling) {
                window.isScrolling = true;
                setTimeout(function() {
                    checkFadeElements();
                    window.isScrolling = false;
                }, 50);
            }
        });
    }
    
    // تفعيل تأثير التمرير السلس للروابط الداخلية
    const smoothLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    smoothLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// التحقق من العناصر المرئية وتفعيل تأثير الظهور
function checkFadeElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // التحقق مما إذا كان العنصر مرئياً في نافذة العرض
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// تفعيل تأثيرات الأزرار
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // إضافة تأثير الموجة عند النقر
        button.classList.add('btn-ripple');
        
        // إضافة تأثير التوهج عند المرور
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// تفعيل الخلفية المتحركة
function initMovingBackground() {
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        heroBg.classList.add('moving-bg');
    }
}

// تفعيل تأثيرات الجزيئات
function initParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    
    if (particlesContainer) {
        // إنشاء جزيئات عشوائية
        for (let i = 0; i < 50; i++) {
            createParticle(particlesContainer);
        }
    }
}

// إنشاء جزيء واحد
function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // تعيين خصائص عشوائية للجزيء
    const size = Math.random() * 5 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    // تطبيق الخصائص على الجزيء
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // إضافة الجزيء إلى الحاوية
    container.appendChild(particle);
}

// تفعيل شرائح الشهادات
function initTestimonialSlider() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialItems.length > 1 && testimonialSlider) {
        let currentSlide = 0;
        
        // إخفاء جميع الشرائح ما عدا الأولى
        testimonialItems.forEach((item, index) => {
            if (index !== 0) {
                item.style.display = 'none';
            }
        });
        
        // إنشاء أزرار التنقل
        const prevBtn = document.createElement('button');
        prevBtn.classList.add('slider-btn', 'prev-btn');
        prevBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        const nextBtn = document.createElement('button');
        nextBtn.classList.add('slider-btn', 'next-btn');
        nextBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        testimonialSlider.appendChild(prevBtn);
        testimonialSlider.appendChild(nextBtn);
        
        // تفعيل أزرار التنقل
        prevBtn.addEventListener('click', function() {
            showSlide(currentSlide - 1);
        });
        
        nextBtn.addEventListener('click', function() {
            showSlide(currentSlide + 1);
        });
        
        // تفعيل التبديل التلقائي للشرائح
        setInterval(function() {
            showSlide(currentSlide + 1);
        }, 5000);
        
        // عرض شريحة محددة
        function showSlide(index) {
            // التأكد من أن الفهرس ضمن النطاق
            if (index < 0) {
                index = testimonialItems.length - 1;
            } else if (index >= testimonialItems.length) {
                index = 0;
            }
            
            // إخفاء الشريحة الحالية
            testimonialItems[currentSlide].style.display = 'none';
            
            // عرض الشريحة الجديدة
            testimonialItems[index].style.display = 'block';
            
            // تحديث الفهرس الحالي
            currentSlide = index;
        }
    }
}

// تفعيل فلتر المنتجات
function initProductsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-card');
    
    if (filterButtons.length > 0 && productItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // إزالة الفئة النشطة من جميع الأزرار
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // إضافة الفئة النشطة للزر المحدد
                this.classList.add('active');
                
                // الحصول على فئة التصفية
                const filterValue = this.getAttribute('data-filter');
                
                // تصفية المنتجات
                productItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// تأثيرات إضافية للعناصر المتحركة
window.addEventListener('load', function() {
    // تفعيل تأثير النبض للعناصر
    const pulseElements = document.querySelectorAll('.animate-pulse');
    pulseElements.forEach(element => {
        setInterval(function() {
            element.classList.add('pulse');
            setTimeout(function() {
                element.classList.remove('pulse');
            }, 1000);
        }, 2000);
    });
    
    // تفعيل تأثير الطفو للعناصر
    const floatElements = document.querySelectorAll('.animate-float');
    floatElements.forEach(element => {
        element.style.animation = 'float 3s ease-in-out infinite';
    });
});

// تأثيرات خاصة للصفحة الرئيسية
function initHeroEffects() {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        // إضافة تأثير تحريك الخلفية عند تحريك الماوس
        heroSection.addEventListener('mousemove', function(e) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            const heroBg = document.querySelector('.hero-bg');
            if (heroBg) {
                heroBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    }
}

// تفعيل تأثيرات الصفحة الرئيسية
initHeroEffects();

// تفعيل تأثيرات الأيقونات
function initIconEffects() {
    const icons = document.querySelectorAll('.feature-icon, .contact-icon, .social-links a');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });
}

// تفعيل تأثيرات الأيقونات
initIconEffects();

// تفعيل تأثيرات الصور
function initImageEffects() {
    const images = document.querySelectorAll('.product-image, .partner-item, .author-image');
    
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// تفعيل تأثيرات الصور
initImageEffects();

// تفعيل تأثير الدوران للإطارات
function initTireRotation() {
    const tireElements = document.querySelectorAll('.tire-animation');
    
    tireElements.forEach(tire => {
        tire.style.animation = 'rotate 10s linear infinite';
    });
}

// تفعيل تأثير دوران الإطارات
initTireRotation();

// تأثير الإطار المتحرك في الخلفية
function createMovingTires() {
    const tiresContainer = document.querySelector('.moving-tires-container');
    
    if (tiresContainer) {
        for (let i = 0; i < 5; i++) {
            createMovingTire(tiresContainer);
        }
    }
}

// إنشاء إطار متحرك
function createMovingTire(container) {
    const tire = document.createElement('div');
    tire.classList.add('moving-tire');
    
    // تعيين خصائص عشوائية للإطار
    const size = Math.random() * 100 + 50;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 30 + 20;
    const delay = Math.random() * 10;
    
    // تطبيق الخصائص على الإطار
    tire.style.width = `${size}px`;
    tire.style.height = `${size}px`;
    tire.style.left = `${posX}%`;
    tire.style.top = `${posY}%`;
    tire.style.animationDuration = `${duration}s`;
    tire.style.animationDelay = `${delay}s`;
    
    // إضافة الإطار إلى الحاوية
    container.appendChild(tire);
}

// تفعيل الإطارات المتحركة في الخلفية
createMovingTires();
