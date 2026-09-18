ecommerce-frontend/
│
├── public/
│ └── images/
│
├── src/
│ │
│ ├── assets/
│ │ └── images/
│ │
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Buttton.jsx
│ │ ├── ProductCard.jsx
│ │ ├── ProductGrid.jsx
│ │ ├── CategoryCard.jsx
│ │ ├── SearchBar.jsx
│ │ ├── Filter.jsx
│ │ ├── SortDropdown.jsx
│ │ ├── CartItem.jsx
│ │ └── Loader.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Products.jsx
│ │ ├── ProductDetails.jsx
│ │ ├── Cart.jsx
│ │ ├── Checkout.jsx
│ │ ├── Login.jsx
│ │ └── NotFound.jsx
│ │
│ ├── context/
│ │ └── CartContext.jsx
│ │
│ ├── data/
│ │ ├── products.js
│ │ └── categories.js
│ │
│ ├── hooks/
│ │ └── useCart.js
│ │
│ ├── utils/
│ │ └── formatPrice.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
└── vite.config.js

Home
│
├── Navbar
├── HeroSection
├── Categories
├── FeaturedProducts
├── PromotionalBanner
├── NewArrivals
└── Footer

┌─────────────────────────────────────────────┐
│ Logo Men Women Electronics 🔍 🛒 👤 │
├─────────────────────────────────────────────┤
│ │
│ BIG HERO BANNER │
│ "Summer Collection" │
│ [Shop Now] │
│ │
├─────────────────────────────────────────────┤
│ Categories │
│ │
│ [Men] [Women] [Shoes] [Electronics] │
│ │
├─────────────────────────────────────────────┤
│ Featured Products │
│ │
│ [Product] [Product] [Product] [Product] │
│ │
└─────────────────────────────────────────────┘

# Products.jsx

Products
│
├── Navbar
│
├── SearchBar
│
├── Filter + Sort
│
└── ProductGrid
│
├── ProductCard
├── ProductCard
├── ProductCard
└── ProductCard

Products

Search: [ Nike shoes________________ ]

Category: [All ▼] Sort: [Price ▼]

---

Filters Products

☐ Men [Product] [Product] [Product]
☐ Women [Product] [Product] [Product]
☐ Shoes [Product] [Product] [Product]
☐ Electronics

#ProductCard.jsx

┌──────────────────────┐
│ │
│ Product Image │
│ │
├──────────────────────┤
│ Nike Air Max │
│ ⭐ 4.5 │
│ ₹7,999 │
│ │
│ [Add to Cart] │
└──────────────────────┘

# 4. 🔍 ProductDetails.jsx

Product Details
│
├── Navbar
│
├── Product Image
│
├── Product Information
│ ├── Name
│ ├── Rating
│ ├── Price
│ ├── Description
│ ├── Quantity
│ └── Add to Cart
│
├── Product Specifications
│
└── Related Products

┌──────────────────────────────────────────────────┐
│ │
│ [ PRODUCT IMAGE ] Nike Air Max │
│ ⭐ 4.5 │
│ ₹7,999 │
│ │
│ Comfortable running shoe │
│ │
│ Quantity: [-] 1 [+] │
│ │
│ [ ADD TO CART ] │
│ │
└──────────────────────────────────────────────────┘

# 5. 🛒 Cart.jsx

Cart
│
├── Navbar
│
├── CartItem
│ ├── Image
│ ├── Name
│ ├── Price
│ ├── Quantity
│ └── Remove
│
├── CartItem
│
└── CartSummary
├── Subtotal
├── Shipping
├── Discount
└── Total

      Your Cart

┌───────────────────────────────────────┐
│ 👟 Nike Air Max │
│ ₹7,999 │
│ Quantity: [-] 2 [+] [Remove] │
└───────────────────────────────────────┘

┌───────────────────────────────────────┐
│ 👕 Oversized T-Shirt │
│ ₹999 │
│ Quantity: [-] 1 [+] [Remove] │
└───────────────────────────────────────┘

Order Summary

Subtotal ₹16,997
Shipping ₹100
Discount -₹500

---

Total ₹16,597

[ Proceed to Checkout ]

# 7. 🧭 Navbar.jsx

┌──────────────────────────────────────────────────┐
│ 🛍️ SHOP Home Products Categories │
│ │
│ 🔍 Search 👤 🛒 3 │
└──────────────────────────────────────────────────┘

Navbar
│
├── Logo
├── NavLinks
├── SearchBar
├── UserIcon
└── CartIcon

# 8. 🏷️ CategoryCard.jsx

Categories

┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ 👕 │ │ 👟 │ │ 💻 │ │ 🎧 │
│ Fashion │ │ Shoes │ │ Laptop │ │ Audio │
└──────────┘ └──────────┘ └──────────┘ └──────────┘

# 9. 💳 Checkout.jsx

Checkout
│
├── Shipping Information
│ ├── Name
│ ├── Email
│ ├── Phone
│ ├── Address
│ ├── City
│ └── Pincode
│
├── Payment Method
│ ├── Card
│ ├── UPI
│ └── Cash on Delivery
│
└── Order Summary

# 🔄 How everything connects

                         App
                          │
                    React Router
                          │
        ┌─────────────────┼─────────────────┐
        ↓                 ↓                 ↓
      Home             Products           Cart
        │                 │                 │
        │                 │                 │

ProductGrid Filter/Search CartItem
│ │ │
ProductCard ProductGrid CartSummary
│ │
└──────────┐ │
↓ ↓
ProductDetails
│
↓
Add to Cart
│
↓
CartContext
│
↓
Cart

# 🛠️ Build it in this order

Don't try to build the whole thing at once.

Phase 1 — UI

1. Navbar
2. Home page
3. ProductCard
4. ProductGrid
5. CategoryCard
6. Footer
   Phase 2 — Product functionality
7. Products page
8. Search
9. Category filter
10. Sort
11. Product details
12. React Router
    Phase 3 — Cart
13. CartContext
14. Add to cart
15. Remove from cart
16. Increase/decrease quantity
17. Calculate total
18. Empty cart
    Phase 4 — Forms
19. Login
20. Signup
21. Checkout
22. Form validation
    Phase 5 — Polish
23. Loading states
24. Error states
25. Responsive design
26. Animations
27. Empty states
28. Mobile navbar
    Phase 6 — Only after that

Connect an actual product API.

# Yes. Since you're building this mainly to **practice React**, I’d make the 7 days progressively harder. By Day 7, you should have a complete frontend with **routing, filtering, cart state, Context API, forms, and responsive UI**.

## 🗓️ Day 1 — Home Page & Basic Components

**Goal:** Learn to break the UI into reusable components.

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CategoryCard.jsx
│   ├── Categories.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   └── Footer.jsx
│
├── pages/
│   └── Home.jsx
│
├── data/
│   ├── products.js
│   └── categories.js
│
├── App.jsx
├── main.jsx
└── index.css
```

### Build

- Navbar
- Hero section
- Categories section
- Product section
- Footer
- Product cards using `.map()`

### React practice

```text
Components
Props
.map()
JSX
Tailwind
```

**Don't add any functionality yet.**

---

# 🗓️ Day 2 — Products Page + Routing

**Goal:** Learn how multiple pages work in React.

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CategoryCard.jsx
│   ├── Categories.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Products.jsx
│
├── data/
│   ├── products.js
│   └── categories.js
│
├── App.jsx
├── main.jsx
└── index.css
```

### Build

Routes:

```text
/
/products
```

Products page:

```text
Products

[ Search products... ]

[ All ] [ Men ] [ Women ] [ Shoes ] [ Electronics ]

Product Grid
```

### React practice

```text
React Router
useState
Event handling
Props
Conditional rendering
```

---

# 🗓️ Day 3 — Search, Filter & Sort

**Goal:** Make the product page interactive.

Add:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Filter.jsx
│   ├── SortDropdown.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Products.jsx
│
├── data/
│   ├── products.js
│   └── categories.js
│
├── App.jsx
├── main.jsx
└── index.css
```

### Build

Search:

```text
Search → "Nike"
             ↓
      Nike products
```

Filter:

```text
Category
   ↓
Shoes
   ↓
Only shoe products
```

Sort:

```text
Sort:
├── Price: Low → High
├── Price: High → Low
└── Rating
```

### React practice

```text
useState
.filter()
.sort()
.includes()
Multiple states
Derived data
```

This day is **very important**. Try solving the filtering logic yourself.

---

# 🗓️ Day 4 — Product Details

**Goal:** Learn dynamic routing and individual product pages.

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Filter.jsx
│   ├── SortDropdown.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── ProductInfo.jsx
│   ├── QuantitySelector.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   └── ProductDetails.jsx
│
├── data/
│   ├── products.js
│   └── categories.js
│
├── App.jsx
├── main.jsx
└── index.css
```

Click:

```text
ProductCard
     ↓
/products/5
     ↓
ProductDetails
```

### Product details

```text
┌──────────────────────────────────┐
│                                  │
│       Product Image              │
│                                  │
│                     Nike Air Max │
│                     ⭐ 4.5       │
│                     ₹7,999       │
│                                  │
│                     [-] 1 [+]    │
│                                  │
│                     [Add Cart]   │
└──────────────────────────────────┘
```

### React practice

```text
useParams()
useState
Dynamic routes
Conditional rendering
Props
```

---

# 🗓️ Day 5 — Cart + Context API

**Goal:** This is where your React knowledge becomes much more realistic.

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Filter.jsx
│   ├── SortDropdown.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── ProductInfo.jsx
│   ├── QuantitySelector.jsx
│   ├── CartItem.jsx
│   ├── CartSummary.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   └── Cart.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   ├── products.js
│   └── categories.js
│
├── App.jsx
├── main.jsx
└── index.css
```

### Cart features

```text
Add to Cart
Remove
Increase quantity
Decrease quantity
Clear cart
Calculate subtotal
```

Example:

```text
CartContext
     │
     ├── cartItems
     ├── addToCart()
     ├── removeFromCart()
     ├── increaseQuantity()
     ├── decreaseQuantity()
     └── clearCart()
```

Navbar:

```text
🛒 Cart (3)
```

### React practice

```text
createContext()
useContext()
useState()
Array methods
Global state
```

**This is probably the most valuable day for your React learning.**

---

# 🗓️ Day 6 — Checkout + Forms

**Goal:** Practice controlled components and form handling.

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── CartItem.jsx
│   ├── CartSummary.jsx
│   ├── CheckoutForm.jsx
│   ├── Input.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   ├── products.js
│   └── categories.js
│
├── App.jsx
├── main.jsx
└── index.css
```

### Checkout

```text
Checkout

Personal Information

Name
[________________]

Email
[________________]

Phone
[________________]


Address

[________________________]


Payment

○ UPI
○ Card
○ Cash on Delivery


Order Summary

Subtotal     ₹8,999
Shipping     ₹100
-------------------
Total        ₹9,099

[ Place Order ]
```

### Practice

```text
Controlled inputs
onChange
onSubmit
Form validation
useState
Conditional rendering
```

Don't connect a payment gateway. This is still a frontend project.

---

# 🗓️ Day 7 — Polish + Responsive Design

**Goal:** Turn everything you've built into a proper finished website.

Final structure:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CategoryCard.jsx
│   ├── Categories.jsx
│   ├── SearchBar.jsx
│   ├── Filter.jsx
│   ├── SortDropdown.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── ProductInfo.jsx
│   ├── QuantitySelector.jsx
│   ├── CartItem.jsx
│   ├── CartSummary.jsx
│   ├── CheckoutForm.jsx
│   ├── Input.jsx
│   ├── Loader.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   ├── products.js
│   └── categories.js
│
├── hooks/
│   └── useCart.js
│
├── utils/
│   └── formatPrice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

### Polish everything

Add:

- 📱 Mobile responsive navbar
- 📱 Mobile product grid
- Loading states
- Empty cart state
- No search results state
- 404 page
- Hover effects
- Button animations
- Product image effects
- Form validation messages
- Responsive checkout
- Consistent spacing/typography

---

# 🧠 What you'll learn in 7 days

```text
DAY 1
Components + Props
        ↓
DAY 2
React Router
        ↓
DAY 3
State + Filtering
        ↓
DAY 4
Dynamic Routes
        ↓
DAY 5
Context API + Global State
        ↓
DAY 6
Controlled Forms
        ↓
DAY 7
Responsive UI + Polish
```

And your final app will look roughly like:

```text
                    E-COMMERCE APP
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
        HOME          PRODUCTS         CART
          │              │              │
       Hero         Search/Filter    Cart Items
       Categories      Sort          Cart Summary
       Products        Cards              │
          │              │                ↓
          └──────→ Product Details     Checkout
                         │
                         ↓
                      Add Cart
                         │
                         ↓
                    CartContext
```

### 🔥 One rule for these 7 days

**Don't ask me for the code immediately when you get stuck.**

First spend **20–30 minutes trying to solve it yourself**. Then send me:

> **"I'm on Day 3. Here's my code and here's the problem."**

I'll help you debug it and explain **why** it works, rather than simply giving you the finished solution. That will make this project much more valuable for your React learning.
