# AI FREEDOM FORMULA - Complete Website Package

## 🎨 What's New in This Version

### ✅ Redesigned with Better Colors
- **Modern Color Palette**: Indigo (#6366F1), Pink (#EC4899), Amber (#F59E0B)
- **Better Gradients**: Professional and eye-catching combinations
- **Improved Alignment**: Centered sections, better spacing
- **Indian-Friendly Design**: Optimized for Indian market

### ✅ INR Pricing
- ₹24,999 (AI Starter)
- ₹58,999 (AI Freedom Pro) - Most Popular
- ₹1,68,999 (AI Elite VIP)

### ✅ Enhanced Features
- **Sliding Testimonials**: Auto-scrolling carousel
- **Company Logo Support**: Upload company-logo.png
- **Company Image**: Upload company-image.jpg (team photo)
- **Instructor Image**: Upload instructor-image.jpg
- **Made in India 🇮🇳**: Proudly Indian company

## 📦 Files Included

1. **index.html** - Main landing page
2. **signup.html** - Registration page
3. **login.html** - Login page
4. **payment.html** - Payment processing
5. **course-portal.html** - Course access
6. **styles.css** - Modern redesigned styles
7. **auth.css** - Authentication styles
8. **script.js** - Main JavaScript
9. **auth.js** - Authentication logic
10. **README.md** - This file

## 🖼️ Images You Need to Upload

### Required Images:
1. **company-logo.png** (200x60px recommended)
   - Your company logo
   - Will appear in header and footer

2. **instructor-image.jpg** (400x500px recommended)
   - Your professional photo
   - Shows in hero section with floating badges

3. **company-image.jpg** (600x500px recommended)
   - Team photo / office photo / company culture
   - Shows in About section

**If images are missing**: Placeholder gradients will appear

## 🚀 Quick Setup (3 Steps)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "+ New repository"
3. Name it: `ai-freedom-formula`
4. Make it Public
5. Click "Create repository"

### Step 2: Upload All Files
1. Click "uploading an existing file"
2. Drag ALL files (HTML, CSS, JS, MD)
3. Add your 3 images (logo, instructor, company)
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to Settings → Pages
2. Source: Deploy from branch → main
3. Click Save
4. Your site will be live at: `https://yourusername.github.io/ai-freedom-formula/`

## 🌐 Custom Domain with Cloudflare (Optional)

### 1. Buy a Domain
- Namecheap, GoDaddy, or any registrar
- Example: `aifreedomformula.com`

### 2. Add to Cloudflare
1. Create free account at [cloudflare.com](https://cloudflare.com)
2. Add your domain
3. Update nameservers at your registrar

### 3. Configure DNS
Add these records in Cloudflare:
- Type: CNAME, Name: @, Target: `yourusername.github.io`
- Type: CNAME, Name: www, Target: `yourusername.github.io`

### 4. Update GitHub
1. GitHub repo → Settings → Pages
2. Custom domain: `yourdomain.com`
3. ✅ Enforce HTTPS

## 💳 Payment Integration

### Current: Demo Mode
- Simulates payment flow
- For testing only

### Production Options:

#### Option 1: Razorpay (Recommended for India)
**Best for**: Indian businesses, UPI, cards

```html
<!-- Add to payment.html -->
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
var options = {
  key: "YOUR_KEY_ID",
  amount: 5899900, // ₹58,999 in paise
  currency: "INR",
  name: "AI Freedom Formula",
  description: "AI Freedom Pro Course",
  handler: function (response) {
    alert("Payment successful!");
    window.location.href = 'course-portal.html';
  }
};
var rzp = new Razorpay(options);
rzp.open();
</script>
```

**Fees**: 2% (standard Indian pricing)
**Website**: [razorpay.com](https://razorpay.com)

#### Option 2: Instamojo
**Best for**: Easy setup, no tech knowledge needed

1. Create account at [instamojo.com](https://instamojo.com)
2. Create payment links
3. Replace signup buttons with Instamojo links

**Fees**: 2% + ₹3

#### Option 3: Stripe
**Best for**: Global payments

**Fees**: 2.9% + ₹2

## 🎨 Customization Guide

### Change Colors
Edit `styles.css`:
```css
:root {
    --primary: #6366F1;  /* Change to your brand color */
    --secondary: #EC4899;
    --accent: #F59E0B;
}
```

### Update Pricing
Edit prices in `index.html`:
```html
<span class="price">58,999</span>  <!-- Change here -->
```

### Add Social Links
Replace `#` with your actual links:
```html
<a href="https://youtube.com/yourchannel" class="social-card youtube">
```

### Change Course Content
Edit modules in `course-portal.html`

## 🔧 Recommended Indian Services

### Email Marketing
- **SendinBlue** (Free up to 300 emails/day)
- **Mailchimp** (Free up to 2,000 contacts)
- **ConvertKit** (Creator-friendly)

### Video Hosting
- **Vimeo** (Private videos, ₹500/month)
- **Wistia** (Marketing features)
- **YouTube** (Unlisted, free)

### Community
- **WhatsApp Channel** (Free)
- **Telegram** (Free)
- **Discord** (Free)

## 📱 Mobile Responsive
Fully optimized for:
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

## 🔒 Security Notes

**Current Demo**:
- LocalStorage for user data
- Client-side authentication
- Payment simulation

**For Production**:
- Use backend (Firebase, Supabase)
- Hash passwords
- Server-side validation
- JWT tokens

## 📊 Add Analytics

### Google Analytics
Add before `</head>` in all HTML files:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## ✅ Launch Checklist

- [ ] Uploaded all files to GitHub
- [ ] Added company-logo.png
- [ ] Added instructor-image.jpg
- [ ] Added company-image.jpg
- [ ] Enabled GitHub Pages
- [ ] Tested signup flow
- [ ] Updated social media links
- [ ] Integrated payment gateway
- [ ] Added analytics
- [ ] Custom domain (optional)
- [ ] SSL enabled
- [ ] Tested on mobile

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in repository root
- Clear browser cache

**GitHub Pages not working?**
- Wait 5-10 minutes after enabling
- Check repository is Public
- Verify branch is set to "main"

**Payment not redirecting?**
- Check browser console for errors
- Test in incognito mode
- Verify localStorage is enabled

## 📞 Support Resources

- GitHub Pages Docs: [pages.github.com](https://pages.github.com)
- Cloudflare Docs: [developers.cloudflare.com](https://developers.cloudflare.com)
- Razorpay Docs: [razorpay.com/docs](https://razorpay.com/docs)

## 🎉 You're Ready to Launch!

Your professional, conversion-optimized course website is ready. Just:
1. Upload your images
2. Update social links
3. Integrate payment
4. Start marketing!

---

**Made with ❤️ for Indian Entrepreneurs**
**AI FREEDOM FORMULA - A TOP1WAY Company**

Version: 2.0 (Redesigned)
Last Updated: February 2026
