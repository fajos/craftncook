# CraftnCook - Personal Chef & Bespoke Catering Website

**CraftnCook** is a modern, high-performance web application designed for personal chefs, luxury private dining, and boutique catering.

This codebase is reverse-engineered from and built to match the aesthetic, structural, and functional elegance of the ThemeForest template **[Alanzo - Personal Chef & Catering WP Theme](https://preview.themeforest.net/item/alanzo-personal-chef-catering-wp-theme/full_screen_preview/21582441)** by AncoraThemes & ThemeREX.

---

## 🔍 Reverse-Engineering Analysis & Live Evidence

The original website template was inspected at its live preview endpoint:
- **Live Preview Target:** `https://alanzo.ancorathemes.com/` (HTTP 200 OK)
- **Item ID:** `21582441` (ThemeForest)

### 1. Typography Architecture
Extracted directly from the template's Google Fonts stylesheet declarations:
- **Headings Font:** `Fjalla One` (`sans-serif`, 400) — Bold, uppercase condensed typography evoking high-end modern culinary editorial design.
- **Body Font:** `Average` (`serif`, 400 & italic) — Elegant literary serif typeface providing warmth and timeless luxury.
- **Subtitles & Badges:** `Montserrat` (`sans-serif`, uppercase tracking-widest)

### 2. Extracted Color Palette
Extracted from `__colors.css` and live theme parameters:
- **`#f2ece0` / `#f2ece1`**: Signature warm creamy beige background (giving the site its distinct culinary parchment aesthetic).
- **`#1e1d22` / `#0e0d12`**: Deep charcoal marble and slate tones used for headers, dark mode sections, and contrast banners.
- **`#f4d699`**: Warm champagne gold accent (found in `--booked_button_color: #f4d699`).
- **`#fe7259`**: Vibrant coral/orange accent (found in `alter_link_color: #fe7259`).
- **`#b49ebf`**: Softened lavender purple accent.
- **`#313131` / `#222222`**: Deep charcoal typography.

### 3. Original WordPress Plugin Stack & Modern Replacement
| Alanzo WP Stack | Function in Template | CraftnCook Modern Implementation |
|---|---|---|
| **Slider Revolution (SR7)** | Animated hero slideshow & feature cards | React `HeroSlider` with auto-play, pause, manual controls & floating cards |
| **QuickCal / Booked** | Appointment & catering calendar booking | Interactive `BookingSection` with guest slider & live price quote calculation |
| **ThemeREX Addons** | Custom post types (`dishes`, `services`) | Filterable `MenuSection` & `ServicesSection` with modals |
| **Essential Grid** | Filterable portfolio & gallery | `GallerySection` with category filtering & full-screen Lightbox |
| **WPBakery / Elementor** | Column layouts & visual shortcodes | Tailwind CSS utility system + responsive grid layout |
| **Header 1 / 2 Variants** | Dark Slate vs Light Cream navigation | Interactive one-click layout switcher in the top navigation bar |

### 4. Extracted Dishes & Content Evidence
The exact signature dishes from the live Alanzo demonstration site are faithfully modeled:
- *Warm Mackerel and Potato Salad* ($12.00)
- *Mushroom & Lentil Pappardelle Bolognese* ($8.00)
- *Baked Chicken & Porcini Risotto* ($8.00)
- *Balinese Chicken Curry* ($6.00)
- *Hot Vindaloo with Pork Belly* ($24.00)
- *Asian-Steamed Sea Bass* ($23.00)
- *Steaming Artisan Ramen* ($11.00)
- *Super Greens Cannelloni* ($18.00)
- *Wilted Spinach with Yoghurt* ($4.00)
- *Wild Rice Salad* ($15.00)
- *Client Personas:* Karen L., James B., Lucinda D., Thomas S.
- *Studio Details:* 8500 Lorem Street, Chicago IL 55030, Phone (844) 595-0487.

---

## 🚀 Key Features in CraftnCook

1. **Header Layout Switcher:** Instant toggle between **Header 1 (Dark Slate / Gold)** and **Header 2 (Light Creamy Beige)**.
2. **Hero Showcase:** Auto-rotating hero slider highlighting bespoke dining, with the three signature feature cards (*Catering Services*, *Table Ready Meals*, *Sample Menus*).
3. **The Process & Story:** 4-step consultative timeline: *01 Consultation*, *02 Menu Design*, *03 Tasting Session*, *04 Flawless Execution*.
4. **Specialized Catering Offerings:** 6 detailed service cards (Corporate Events, Weddings & Galas, Special Events, Cooking Classes, In-Home Meal Prep, Restaurant Consulting) with full inclusion modals.
5. **Interactive Filterable Menus:**
   - Tabs: All Creations, Dinner Menu, Brunch Menu, Vegan & Gluten Free, Chef's Tasting.
   - Live search input & quick dietary toggles (Vegan, Gluten-Free).
   - "Learn More" dish modal displaying ingredients, calories, prep time, and allergens.
   - "+ Add to Tasting" feature allowing clients to build a custom event degustation menu.
6. **Tasting Selection Drawer:** Slide-out panel calculating the per-guest course total with a 1-click action to transfer selected dishes directly into the event booking system.
7. **Digital Gift Certificate Generator:** Denomination selector ($100, $250, $500, $1000), recipient customization, and real-time digital pass preview.
8. **Online Appointment & Booking Engine:**
   - Experience selection, date picker, time slot selector.
   - Interactive guest count slider with dynamic catering estimate calculation.
   - Dietary restrictions input and instant reservation confirmation with unique booking reference stored to `localStorage`.
9. **Stats Counter ("My Work in Numbers"):** 1,046 Happy Clients, 350+ Events Catered, 120+ Recipes, 18 Years Experience.
10. **Testimonials Carousel:** Real quotes with star ratings and client avatars.
11. **Culinary Gallery with Lightbox:** Filter by *Culinary Art*, *Weddings & Galas*, *Chef At Work*, and *Tablescapes*.
12. **Contact & Studio Desk:** Operating hours, direct phone, and contact message form with field validation.
13. **Live Template Evidence Modal:** One-click inspector in the header and footer providing direct transparency into the extracted evidence from ThemeForest Item 21582441.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+ or v24+)
- npm (v9+)

### Installation & Development
```bash
# Navigate to the project directory
cd C:\Users\saintsbuilder\Documents\Projects\craftncook

# Install dependencies (already installed)
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
craftncook/
├── dist/                      # Production compiled assets
├── public/                    # Static assets & favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Sticky header with style switcher & tasting indicator
│   │   ├── HeroSlider.jsx     # Hero slider & 3 quick-feature cards
│   │   ├── AboutSection.jsx   # Story, chef philosophy & 4-step process
│   │   ├── ServicesSection.jsx# 6 catering services with modal details
│   │   ├── MenuSection.jsx    # Filterable dishes, search, dietary toggles
│   │   ├── GiftCertificate.jsx# Gift voucher generator & live card preview
│   │   ├── BookingSection.jsx # Reservation wizard with live price calculation
│   │   ├── StatsCounter.jsx   # "My Work in Numbers"
│   │   ├── TestimonialsSection.jsx # Customer review carousel
│   │   ├── GallerySection.jsx # Masonry image grid with modal lightbox
│   │   ├── ContactSection.jsx # Studio address, map representation, inquiry form
│   │   ├── Footer.jsx         # Footer navigation & newsletter subscription
│   │   ├── DishModal.jsx      # Dish details modal
│   │   ├── TastingBasketDrawer.jsx # Slide-out selected courses drawer
│   │   └── EvidenceDrawer.jsx # Template reverse-engineering inspector
│   ├── data/
│   │   ├── dishes.js          # Authentically extracted dishes & pricing
│   │   ├── services.js        # Catering offerings & process steps
│   │   ├── testimonials.js    # Client reviews & work numbers
│   │   └── gallery.js         # Plating & event photography
│   ├── App.jsx                # Main application state & section orchestration
│   ├── index.css              # Custom Tailwind styling & typography rules
│   └── main.jsx               # React DOM entrypoint
├── index.html                 # Google fonts & meta tags
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Design tokens, colors, & typography fonts
└── README.md                  # Documentation & evidence summary
```
