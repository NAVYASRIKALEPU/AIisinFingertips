// Editorial SaaS Interactive Script
// Tab Content Database
const tabData = {
  newsletters: {
    eyebrow: "1. NEWSLETTERS",
    heading: "Engage. Nurture. Convert.",
    subheading: "Elegant email newsletters crafted to keep your audience engaged, share weekly updates, and drive repeat product sales.",
    features: [
      {
        icon: "mail",
        title: "Direct Connection",
        desc: "Deliver valuable updates straight to your subscribers' inbox."
      },
      {
        icon: "smile",
        title: "Build Relationships",
        desc: "Nurture your audience over time with highly personal content."
      },
      {
        icon: "bar-chart-2",
        title: "Actionable Insights",
        desc: "Track open rates, click trends, and reader satisfaction in depth."
      }
    ],
    cta1: "Create Newsletter",
    cta2: "See Examples",
    cardTag: "NEWSLETTERS",
    cardIcon: "mail",
    cardTopic: "The Weekly Focus #42",
    cardDesc: "Curated insights on design, tech, and building in public.",
    cardMetric: "2 min read",
    bgFilter: "sepia(0.2) hue-rotate(-10deg) saturate(0.9)" // subtle warmth
  },
  blog: {
    eyebrow: "2. BLOG ARTICLES",
    heading: "Educate. Inform. Build Authority.",
    subheading: "In-depth articles that educate your audience, answer their questions, and establish your brand as a trusted resource.",
    features: [
      {
        icon: "book-open",
        title: "Share Knowledge",
        desc: "Deliver valuable insights your audience actually cares about."
      },
      {
        icon: "award",
        title: "Build Authority",
        desc: "Position your brand as an expert in your industry."
      },
      {
        icon: "trending-up",
        title: "Drive Engagement",
        desc: "Attract, engage, and convert readers into loyal followers."
      }
    ],
    cta1: "Start Publishing",
    cta2: "Explore Templates",
    cardTag: "EDITORIAL",
    cardIcon: "text-quote",
    cardTopic: "10 Productivity Tips for Focused Work",
    cardDesc: "Provide actionable value that keeps readers coming back.",
    cardMetric: "5 min read",
    bgFilter: "none"
  },
  cases: {
    eyebrow: "3. CASE STUDIES",
    heading: "Prove Value. Convert Skeptics.",
    subheading: "Real stories of customer success, showing concrete metrics and detailed workflows that prove your product's true ROI.",
    features: [
      {
        icon: "file-text",
        title: "Detailed Workflows",
        desc: "Showcase step-by-step how your product achieved stellar results."
      },
      {
        icon: "shield-check",
        title: "Unshakeable Trust",
        desc: "Leverage direct quotes, real metrics, and customer testimonials."
      },
      {
        icon: "zap",
        title: "High-Intent Leads",
        desc: "Target qualified leads with compelling proof of real efficiency."
      }
    ],
    cta1: "Publish Case Study",
    cta2: "View Sample Studies",
    cardTag: "PROOF",
    cardIcon: "activity",
    cardTopic: "How Acme Corp Scaled to 10M+",
    cardDesc: "A complete breakdown of real infrastructure and speed gains.",
    cardMetric: "8 min read",
    bgFilter: "hue-rotate(30deg) saturate(1.1)" // subtle cyan tint
  }
};
// DOM Elements
const tabs = document.querySelectorAll('.selector-tab');
const eyebrow = document.getElementById('hero-eyebrow');
const heading = document.getElementById('hero-heading');
const subheading = document.getElementById('hero-subheading');
const featuresList = document.getElementById('features-list');
const primaryCta = document.getElementById('primary-cta');
const secondaryCta = document.getElementById('secondary-cta');
const mockupBg = document.getElementById('mockup-bg-image');
const animateWrapper = document.querySelector('.content-animate-wrapper');
// Card elements
const cardTag = document.getElementById('card-tag');
const cardIcon = document.getElementById('indicator-icon');
const cardTopic = document.getElementById('card-topic');
const cardDesc = document.getElementById('card-desc');
const cardMetric = document.getElementById('card-footer-metric');
// Customizer Elements
const customizerToggle = document.getElementById('customizer-toggle');
const customizerClose = document.getElementById('customizer-close');
const customizerCard = document.querySelector('.customizer-card');
const colorDots = document.querySelectorAll('.color-dot');
const radiusSlider = document.getElementById('radius-slider');
const spacingSlider = document.getElementById('spacing-slider');
const radiusVal = document.getElementById('radius-val');
const spacingVal = document.getElementById('spacing-val');
// Initialize Lucide Icons
lucide.createIcons();
// Tab Switch Function
function switchTab(tabKey) {
  const data = tabData[tabKey];
  if (!data) return;
  // Add transition class to fade out left column
  animateWrapper.classList.add('content-animating');
  // Fade out image and floating card
  mockupBg.style.opacity = 0.5;
  setTimeout(() => {
    // Update Text Content
    eyebrow.textContent = data.eyebrow;
    heading.textContent = data.heading;
    subheading.textContent = data.subheading;
    primaryCta.textContent = data.cta1;
    secondaryCta.textContent = data.cta2;
    // Update Features List HTML
    featuresList.innerHTML = data.features.map(f => `
      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <i data-lucide="${f.icon}" class="feature-icon"></i>
        </div>
        <div class="feature-text">
          <h3 class="feature-title">${f.title}</h3>
          <p class="feature-desc">${f.desc}</p>
        </div>
      </div>
    `).join('');
    // Update Floating Card Content
    cardTag.textContent = data.cardTag;
    cardTopic.textContent = data.cardTopic;
    cardDesc.textContent = data.cardDesc;
    cardMetric.textContent = data.cardMetric;
    
    // Update card icon markup
    cardIcon.setAttribute('data-lucide', data.cardIcon);
    // Apply color filter to workspace image to match mood
    mockupBg.style.filter = data.bgFilter;
    // Re-render Lucide icons for the new dynamic markup
    lucide.createIcons();
    // Fade back in
    animateWrapper.classList.remove('content-animating');
    mockupBg.style.opacity = 1;
  }, 300);
}
// Add Tab Event Listeners
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    switchTab(tab.getAttribute('data-tab'));
  });
});
// 2. Customizer Interface Logic
customizerToggle.addEventListener('click', () => {
  customizerCard.classList.toggle('open');
});
customizerClose.addEventListener('click', () => {
  customizerCard.classList.remove('open');
});
// Color Preset Selector
colorDots.forEach(dot => {
  dot.addEventListener('click', () => {
    colorDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    const selectedColor = dot.getAttribute('data-color');
    document.documentElement.style.setProperty('--bg-color', selectedColor);
  });
});
// Radius Slider
radiusSlider.addEventListener('input', (e) => {
  const val = e.target.value;
  radiusVal.textContent = `${val}px`;
  document.documentElement.style.setProperty('--radius-default', `${val}px`);
  document.documentElement.style.setProperty('--radius-card', `${Math.max(8, val - 4)}px`);
});
// Spacing Slider
spacingSlider.addEventListener('input', (e) => {
  const val = e.target.value;
  spacingVal.textContent = `${val}px`;
  document.documentElement.style.setProperty('--spacing-main', `${val}px`);
});
// Auto close customizer if click outside
document.addEventListener('click', (e) => {
  if (!customizerCard.contains(e.target) && !customizerToggle.contains(e.target)) {
    customizerCard.classList.remove('open');
  }
});
