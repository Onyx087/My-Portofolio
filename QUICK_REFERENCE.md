# ⚡ Quick Reference - Animation Cheat Sheet

## 🎯 Animation Classes & Effects

### Scroll Reveal Animations
```css
.scroll-reveal     /* Automatic fade-in on scroll */
.scroll-reveal.active  /* State setelah visible */
```

### Staggered Animations
```css
.nav-link:nth-child(n) { animation-delay: n * 0.1s; }
.skill-category:nth-child(n) { animation-delay: n * 0.1s; }
.timeline-item:nth-child(n) { animation-delay: n * 0.2s; }
```

---

## 🎨 Animation Names & Durations

| Animation | Duration | Where Used | Effect |
|-----------|----------|-----------|--------|
| `fadeInUp` | 0.6s | Most elements | Fade in + slide up |
| `slideDown` | 0.3-0.6s | Nav items | Slide down from top |
| `slideInRight` | 0.8s | Profile image | Slide from right |
| `glow` | 4s | Titles | Glowing text effect |
| `bounceIn` | 0.6s | Call-to-action | Bounce landing |
| `heartbeat` | 0.6s | Hover states | Pulsing effect |
| `wobble` | 0.5s | Form errors | Shake animation |
| `popIn` | 0.6s | Stats cards | Pop from center |
| `float-up` | 0.6s | Cards | Fade up float |
| `rotate` | 20s | SVG | Continuous rotation |
| `pulse` | 4s | Background | Scale pulsing |
| `swing` | 2s | Timeline markers | Swinging effect |
| `shimmerMove` | 0.5s | Hover overlays | Left-right shimmer |

---

## 🔧 Common Customizations

### Change Animation Speed
```css
/* Original */
animation: fadeInUp 0.6s ease forwards;

/* Faster */
animation: fadeInUp 0.3s ease forwards;

/* Slower */
animation: fadeInUp 1.2s ease forwards;
```

### Change Easing Function
```css
/* Available options */
ease, ease-in, ease-out, ease-in-out, linear
cubic-bezier(0.34, 1.56, 0.64, 1)  /* Springy */
cubic-bezier(0.25, 0.46, 0.45, 0.94) /* Smooth */
```

### Change Animation Delay
```css
.element {
    animation-delay: 0.2s;  /* Sebelum muncul */
}

.element:nth-child(2) {
    animation-delay: 0.4s;
}
```

### Change Colors
```css
:root {
    --primary-color: #new-color;
    --secondary-color: #new-color;
}
```

---

## 🖱️ JavaScript Interactions

### Scroll Animation Trigger
```javascript
// Automatically trigger saat viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});
```

### 3D Cursor Tracking
```javascript
// Profile image follow mouse
profileImg.style.transform = 
    `rotateX(${heroY * 20}deg) 
     rotateY(${heroX * 20}deg)`;
```

### Form Validation
```javascript
// Wobble pada error
input.style.animation = 'wobble 0.5s ease';
```

### Number Counter
```javascript
// Counting animation
for(let i = 0; i <= target; i++) {
    stat.textContent = i + '+';
}
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop - Full features */
@media (min-width: 1025px) { }

/* Tablet - Reduced animations */
@media (768px <= width < 1024px) { }

/* Mobile - Simplified animations */
@media (max-width: 767px) { }
```

---

## ⚡ Performance Tips

### ✅ DO (GPU Accelerated)
```css
transform: translateY(-10px);
opacity: 0.8;
```

### ❌ DON'T (CPU Heavy)
```css
top: -10px;
left: 0;
background-color: changes;
```

### Optimize with will-change
```css
.element-to-animate {
    will-change: transform;
}
```

---

## 🎯 Common Patterns

### Hover Effect
```css
.element {
    transition: all 0.3s ease;
}

.element:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}
```

### Staggered List Animation
```css
.list-item {
    animation: fadeInUp 0.6s ease forwards;
}

.list-item:nth-child(1) { animation-delay: 0.1s; }
.list-item:nth-child(2) { animation-delay: 0.2s; }
.list-item:nth-child(3) { animation-delay: 0.3s; }
```

### Shimmer Loading
```css
@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
}
```

### Glow Effect
```css
box-shadow: 0 0 20px rgba(0, 102, 204, 0.5);
text-shadow: 0 0 20px rgba(0, 102, 204, 0.8);
```

---

## 🎬 Timeline Reference

### Page Load Timeline
```
0.0s  - Page starts
0.5s  - Body fade-in
0.6s  - Nav items appear (staggered)
0.8s  - Hero section visible
1.0s+ - Background animations
```

### Scroll Timeline
```
Element enters viewport
  ↓
0.1s delay (staggered)
  ↓
0.6s fade-in animation
  ↓
Element fully visible
```

### Hover Timeline
```
Mouse over
  ↓
Immediate shadow change
  ↓
0.3s transform
  ↓
Continuous icon animation
```

---

## 🔍 Debugging Tips

### Check CSS Animations
```
Chrome DevTools → Animations Tab
Shows all running animations with timeline
```

### Check Performance
```
Chrome DevTools → Performance Tab
Record and check FPS, frame rendering
```

### Check Responsive
```
Chrome DevTools → Device Emulation
Test different screen sizes
```

### Check Dark Mode
```
Toggle .dark-mode class on body
Verify all animations work
```

---

## 🚀 Quick Edits

### Add New Animation
```css
@keyframes myAnimation {
    0% { /* start state */ }
    100% { /* end state */ }
}

.my-element {
    animation: myAnimation 0.6s ease forwards;
}
```

### Add New Interaction
```javascript
element.addEventListener('mouseenter', () => {
    element.style.animation = 'myAnimation 0.6s ease';
});
```

### Add New Hover Effect
```css
.element:hover {
    transform: scale(1.05) rotate(2deg);
    filter: brightness(1.1);
}
```

---

## 📊 Animation Property Reference

```css
animation: name duration timing-function delay iteration-count direction;

/* Example */
animation: fadeInUp 0.6s ease forwards;

/* Breakdown */
name: fadeInUp;
duration: 0.6s;
timing-function: ease;
fill-mode: forwards;  /* Tetap di state akhir */
```

---

## 🎨 Color Variables Reference

```css
:root {
    --primary-color: #0066cc;      /* Main blue */
    --secondary-color: #00a8ff;    /* Cyan accent */
    --accent-color: #ff6b6b;       /* Red warning */
    --success-color: #51cf66;      /* Green success */
    --dark-bg: #0a0e27;            /* Dark background */
    --light-bg: #f8f9fa;           /* Light background */
}
```

---

## ⌨️ Keyboard Shortcuts (Developer)

```
F12              - Open DevTools
Ctrl+Shift+C    - Inspect element
Ctrl+Shift+J    - Open Console
Alt+Cmd+U       - View Page Source
F5              - Refresh page
```

---

## 📱 Mobile Testing Checklist

- [ ] Animations smooth pada mobile?
- [ ] Touch interactions working?
- [ ] Hamburger menu animates?
- [ ] Forms accept input smoothly?
- [ ] Scroll animations trigger?
- [ ] Dark mode works?
- [ ] Responsive layout correct?
- [ ] No performance issues?

---

## 🎯 Before Deploy Checklist

- [ ] Test all animations di Chrome
- [ ] Test di Firefox
- [ ] Test di Safari
- [ ] Test di Edge
- [ ] Test responsive (mobile, tablet)
- [ ] Check performance (DevTools)
- [ ] Verify form validation
- [ ] Check dark mode
- [ ] Verify keyboard navigation
- [ ] Test links & navigation
- [ ] Check image loading
- [ ] Verify scroll effects

---

**Bookmark this page for quick reference! 📌**
