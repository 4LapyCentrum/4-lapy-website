// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu if open
            const mobileNav = document.querySelector('.mobile-nav');
            if (mobileNav && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('active');
            }
        });

        // Close mobile menu on window resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileNav.classList.remove('active');
            }
        });
    }

    // Header background change on scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(139, 195, 74, 0.95)';
            } else {
                header.style.background = 'linear-gradient(135deg, #8BC34A 0%, #689F38 100%)';
            }
        });
    }

    // Form validation and submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                } else {
                    field.style.borderColor = '#8BC34A';
                }
            });
            
            if (isValid) {
                // Show success message
                alert('Dziękuję za wypełnienie formularza! Odezwę się do Ciebie w ciągu 24 godzin.');
                
                // In a real application, you would send the form data to a server
                // For now, we'll just reset the form
                form.reset();
            } else {
                alert('Proszę wypełnić wszystkie wymagane pola.');
            }
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#e74c3c';
                } else {
                    this.style.borderColor = '#e9ecef';
                }
            });
        });
    }

    // CTA button scroll to contact section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const contactSection = document.querySelector('.contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});