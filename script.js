// ========== ROTATING TAGLINE ==========
const taglines = [
    "Memories That Last a Lifetime 📸",
    "Freeze the Moment ✨",
    "Perfect Frames Forever 🖼️",
    "Candid. Real. Beautiful. ❤️",
    "Where Every Click Tells a Tale 📖"
];

let taglineIndex = 0;
const rotatingText = document.getElementById('rotating-text');

if (rotatingText) {
    setInterval(() => {
        taglineIndex = (taglineIndex + 1) % taglines.length;
        rotatingText.style.opacity = '0';
        setTimeout(() => {
            rotatingText.textContent = taglines[taglineIndex];
            rotatingText.style.opacity = '1';
        }, 200);
    }, 3000);
}

// ========== WHATSAPP BOOK NOW ==========
const whatsappNumber = '919260958466';
const whatsappMsg = encodeURIComponent('Hi! I want to book a photoshoot with Perfect Picture Wala.');

function openWhatsApp(e) {
    e.preventDefault();
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');
}

const bookNowBtn = document.getElementById('bookNowBtn');
const ctaBookBtn = document.getElementById('ctaBookBtn');

if (bookNowBtn) bookNowBtn.addEventListener('click', openWhatsApp);
if (ctaBookBtn) ctaBookBtn.addEventListener('click', openWhatsApp);

// ========== GOOGLE MAPS - MALIHABAD LUCKNOW ==========
const mapLink = document.getElementById('googleMapLink');
if (mapLink) {
    // Exact Google Maps link for Malihabad, Lucknow
    mapLink.href = 'https://share.google/CQovmFM9cSsaJ04AC';
    mapLink.target = '_blank';
    mapLink.rel = 'noopener noreferrer';
}
// ========== PORTFOLIO FILTER ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterBtns.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('visible'), 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ========== SCROLL ANIMATIONS (FADE IN ON SCROLL) ==========
const animateOnScroll = () => {
    const elements = document.querySelectorAll(
        '.gallery-item, .about-content, .stat, .step, .benefit-card, .portfolio-item, .footer-col, .behind-lens h2, .why-choose-us h2'
    );
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
};

// Initial check on load
window.addEventListener('load', () => {
    animateOnScroll();
    
    // Add visible class to gallery items with delay
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100);
    });
    
    // Add visible class to stats with delay
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.classList.add('visible');
        }, index * 150);
    });
    
    // Add visible class to steps with delay
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('visible');
        }, index * 100);
    });
    
    // Add visible class to benefit cards with delay
    const benefits = document.querySelectorAll('.benefit-card');
    benefits.forEach((benefit, index) => {
        setTimeout(() => {
            benefit.classList.add('visible');
        }, index * 80);
    });
    
    // Add visible class to portfolio items with delay
    const portfolioItemsAll = document.querySelectorAll('.portfolio-item');
    portfolioItemsAll.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100);
    });
    
    // Add visible class to footer columns
    const footerCols = document.querySelectorAll('.footer-col');
    footerCols.forEach((col, index) => {
        setTimeout(() => {
            col.classList.add('visible');
        }, index * 100);
    });
});

// Animate on scroll
window.addEventListener('scroll', animateOnScroll);

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });
    
    navMenu.addEventListener('click', (e) => {
        const rect = navMenu.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x > rect.width - 55 && y < 55) {
            navMenu.classList.remove('active');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            e.target !== hamburger) {
            navMenu.classList.remove('active');
        }
    });
}

// ========== SMOOTH SCROLL ==========
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}