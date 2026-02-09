// Plan Management
function showPlanModal() {
    document.getElementById('plan-modal').style.display = 'block';
}

function closePlanModal() {
    document.getElementById('plan-modal').style.display = 'none';
}

function confirmPlan() {
    const selected = document.querySelector('input[name="plan"]:checked');
    const planNames = {
        starter: 'AI Starter',
        pro: 'AI Freedom Pro',
        vip: 'AI Elite VIP'
    };
    
    document.getElementById('plan-name-display').textContent = planNames[selected.value];
    document.getElementById('plan-price-display').textContent = selected.getAttribute('data-price').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    
    sessionStorage.setItem('selectedPlan', selected.value);
    sessionStorage.setItem('selectedPlanPrice', selected.getAttribute('data-price'));
    
    closePlanModal();
}

// Initialize plan from URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const planParam = urlParams.get('plan');
    
    if (planParam) {
        const radio = document.querySelector(`input[value="${planParam}"]`);
        if (radio) {
            radio.checked = true;
            confirmPlan();
        }
    }
});

// Signup Form
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = signupForm.querySelectorAll('input');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;
        const confirmPassword = inputs[3].value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        const plan = sessionStorage.getItem('selectedPlan') || 'pro';
        const planPrice = sessionStorage.getItem('selectedPlanPrice') || '58999';
        
        const userData = {
            name,
            email,
            password,
            plan,
            planPrice,
            hasPaid: false,
            createdAt: new Date().toISOString()
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userEmail', email);
        
        window.location.href = `payment.html?plan=${plan}`;
    });
}

// Login Form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        
        if (!storedUser.email) {
            alert('No account found. Please sign up first!');
            window.location.href = 'signup.html';
            return;
        }
        
        if (storedUser.email === email && storedUser.password === password) {
            if (storedUser.hasPaid) {
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userEmail', email);
                window.location.href = 'course-portal.html';
            } else {
                alert('Please complete your payment first.');
                window.location.href = `payment.html?plan=${storedUser.plan}`;
            }
        } else {
            alert('Invalid email or password!');
        }
    });
}

// Check Authentication
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!isLoggedIn || !user.hasPaid) {
        alert('Please login and complete payment to access courses');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Logout
function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}
