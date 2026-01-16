// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light mode'
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Advanced Scroll Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe scroll reveal elements
document.querySelectorAll('.scroll-reveal, .timeline-item, .skill-category, .stat, .achievement-item').forEach(el => {
    el.classList.add('scroll-reveal');
    scrollObserver.observe(el);
});

// Scroll shadow effect on navbar with enhanced transition
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 102, 204, 0.2)';
        navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
    }
});

// Navigation active link with enhanced effects
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav link on scroll with smooth transitions
let currentSection = '';
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    if (current !== currentSection) {
        currentSection = current;
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }
});

// Hamburger menu with smooth animations
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    navMenu.style.animation = isOpen ? '' : 'slideDown 0.3s ease';
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
        hamburger.classList.remove('active');
    });
});

// Advanced Contact form with validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    // Add floating labels animation
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.animation = 'popIn 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.animation = '';
            }
        });
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff6b6b';
                input.style.animation = 'wobble 0.5s ease';
            }
        });
        
        if (!isValid) return;
        
        // Get form values
        const formData = new FormData(this);
        
        // Show success message with enhanced animation
        const originalButton = this.querySelector('button');
        const originalText = originalButton.textContent;
        
        originalButton.textContent = '✓ Pesan terkirim!';
        originalButton.style.background = 'linear-gradient(135deg, #51cf66, #37b24d)';
        originalButton.style.animation = 'heartbeat 0.6s ease';
        originalButton.disabled = true;
        
        // Reset form
        this.reset();
        inputs.forEach(input => input.style.borderColor = '');
        
        // Reset button after 3 seconds
        setTimeout(() => {
            originalButton.textContent = originalText;
            originalButton.style.background = '';
            originalButton.style.animation = '';
            originalButton.disabled = false;
        }, 3000);
    });
}

// Intersection Observer for fade in animations (legacy support)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .skill-category, .stat, .achievement-item').forEach(el => {
    observer.observe(el);
});

// Scroll reveal for sections
const revealElements = document.querySelectorAll('.about-text p, .timeline-content');
revealElements.forEach(el => {
    observer.observe(el);
});

// Enhanced parallax effect to hero section with multiple layers
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');
    const scrollPosition = window.scrollY;
    
    if (hero && hero.offsetTop + hero.offsetHeight > scrollPosition) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
        if (heroText) {
            heroText.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
    }
});

// Advanced Cursor Tracking & Mouse Effects
const createMouseTracker = () => {
    const container = document.querySelector('.hero');
    if (!container) return;

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const xPercent = (x / window.innerWidth) * 100;
        const yPercent = (y / window.innerHeight) * 100;

        // Update CSS variables for potential use
        document.documentElement.style.setProperty('--mouse-x', xPercent + '%');
        document.documentElement.style.setProperty('--mouse-y', yPercent + '%');

        // Apply to hero section
        const hero = document.querySelector('.hero');
        if (hero && hero.offsetTop + hero.offsetHeight > window.scrollY) {
            const heroX = e.clientX / window.innerWidth - 0.5;
            const heroY = e.clientY / window.innerHeight - 0.5;

            const profileImg = document.querySelector('.profile-img');
            if (profileImg) {
                profileImg.style.transform = `perspective(1000px) rotateX(${heroY * 20}deg) rotateY(${heroX * 20}deg) scale(1.08)`;
            }
        }
    });

    document.addEventListener('mouseleave', () => {
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            profileImg.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1.08)';
        }
    });
};

// Initialize mouse tracker when page loads
document.addEventListener('DOMContentLoaded', createMouseTracker);

// Animate numbers in stats with enhanced effect
const stats = document.querySelectorAll('.stat h3');
let hasAnimated = false;

const animateNumbers = () => {
    if (hasAnimated) return;
    
    const statsSection = document.querySelector('.about-stats');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    if (rect.top > window.innerHeight) return;
    
    hasAnimated = true;
    
    stats.forEach((stat, index) => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30;
        
        // Add stagger effect
        setTimeout(() => {
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + '+';
                    stat.style.animation = 'heartbeat 0.6s ease';
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + '+';
                }
            }, 50);
        }, index * 200);
    });
};

window.addEventListener('scroll', animateNumbers);

// Responsive nav menu toggle with smooth transitions
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    }
});

// Skill tags hover interaction
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
    
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotate(5deg)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Timeline content hover effects
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const marker = this.querySelector('.timeline-marker');
        if (marker) {
            marker.style.boxShadow = '0 0 30px rgba(0, 102, 204, 0.7)';
            marker.style.transform = 'scale(1.2) rotate(10deg)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const marker = this.querySelector('.timeline-marker');
        if (marker) {
            marker.style.boxShadow = '';
            marker.style.transform = '';
        }
    });
});

// Achievement items interactive effect
const achievementItems = document.querySelectorAll('.achievement-item');
achievementItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.animation = 'heartbeat 0.6s ease-in-out';
        }
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.animation = 'pageLoad 0.8s ease';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set first nav link as active with animation
    const firstLink = document.querySelector('.nav-link');
    if (firstLink) {
        firstLink.classList.add('active');
    }
    
    // Hide nav menu on mobile by default
    if (window.innerWidth <= 768) {
        navMenu.style.display = 'none';
    }
    
    // Add scroll reveal to about section elements
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        const aboutElements = aboutSection.querySelectorAll('p');
        aboutElements.forEach((el, index) => {
            el.classList.add('scroll-reveal');
            el.style.animationDelay = `${index * 0.2}s`;
            scrollObserver.observe(el);
        });
    }
});

// Smooth header reveal on scroll
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = 'transform 0.3s ease';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});

console.log('🚀 Portfolio website loaded with enhanced animations!');

