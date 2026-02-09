// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }
}

// Countdown Timer
function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    function update() {
        const now = new Date();
        const diff = targetDate - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        countdownEl.textContent = `${days}d ${hours}h`;
    }
    
    update();
    setInterval(update, 3600000); // Update every hour
}

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.problem-card, .pricing-box, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Image Error Handling
const instructorImg = document.getElementById('instructor-img');
if (instructorImg) {
    instructorImg.onerror = function() {
        this.parentElement.innerHTML = `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#6366F1,#8B5CF6);display:flex;align-items:center;justify-content:center;color:white;font-size:1.5rem;font-weight:600;text-align:center;padding:20px;">
                Upload Your Photo<br>(instructor-image.jpg)
            </div>
        `;
    };
}

const companyImg = document.getElementById('company-img');
if (companyImg) {
    companyImg.onerror = function() {
        this.parentElement.innerHTML = `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#EC4899,#F59E0B);display:flex;align-items:center;justify-content:center;color:white;font-size:1.5rem;font-weight:600;text-align:center;padding:20px;">
                Upload Company Image<br>(company-image.jpg)
            </div>
        `;
    };
}

const logos = document.querySelectorAll('#company-logo, #footer-logo');
logos.forEach(logo => {
    logo.onerror = function() {
        this.style.display = 'none';
    };
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    
    // Pause testimonial animation on hover
    const track = document.getElementById('testimonial-track');
    if (track) {
        track.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        track.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }
});

// Header hide/show on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
