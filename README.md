<<<<<<< HEAD
# 📚 Turn The Page — Used & Vintage Bookstore

> *"A reader lives a thousand lives before he dies."* — George R.R. Martin

A fully responsive, visually rich storefront for a fictional used and vintage bookstore. Built with React, Tailwind CSS, and Framer Motion — designed with a **Warm Brutalism** aesthetic that feels like stepping into a beloved neighbourhood institution.

---

## ✨ Live Features

| Feature | Description |
|---|---|
| 📖 **Book Grid** | Asymmetric masonry layout with 10 curated used books |
| 🎨 **Real Covers** | Book covers fetched live from the Open Library API by ISBN |
| 🔍 **Filtering** | Filter by Genre, Condition, and Price in real-time |
| 🛒 **Cart Drawer** | Slide-in cart with quantity controls and subtotal |
| 🌗 **Dark Mode** | Toggle between Warm and Midnight Reader themes |
| 🎭 **Mystery Section** | "Pick a Mystery" — books with hidden titles and poetic descriptions |
| 💬 **Rotating Quotes** | Literary quotes that auto-rotate based on reading length |
| 🤖 **AI Chat Agent** | Embedded Jotform AI assistant for customer queries |
| 🌱 **Store Policies** | Carbon Neutral Shipping & Buyback Programme |

---

## 🖼️ Design Language

**"Warm Brutalism meets Editorial Cozy"**

The design is raw, tactile, and literary — like recycled newsprint and cracked leather paired with sharp, confident typography.

- **Colors:** Deep forest green · Cream off-white · Faded crimson red · Charcoal black
- **Dark Mode:** Midnight blue · Warm gold · Cream
- **Fonts:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (serif body) · [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (sans-serif headlines)
- **Motion:** Framer Motion — 3D hover tilt on cards, animated cross-fade on cover reveal, smooth cart slide-in

---

## 🧩 Book Card Behaviour

Each card shows the **real cover photo** at rest (sourced from [Open Library](https://openlibrary.org/)) and on hover, **cross-fades to the warm gradient + title** style — like lifting a dust jacket off the spine. If no cover exists for a book, the gradient style is shown permanently with no broken images.

---

## 🛠️ Tech Stack

```
React 18          — UI framework
Tailwind CSS      — Utility-first styling
Framer Motion     — Animations and transitions
Lucide React      — Icons
Open Library API  — Book cover images (no key required)
Vite              — Dev server and build tool
TypeScript        — Type safety
pnpm workspaces   — Monorepo package management
```

---

## 📁 Project Structure

```
artifacts/turn-the-page/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BookCard.tsx        # Book card with cover + hover effect
│   │   ├── CartDrawer.tsx      # Slide-in cart panel
│   │   ├── Header.tsx          # Nav, dark mode toggle, cart icon
│   │   └── MysteryCard.tsx     # Blind-date mystery book cards
│   ├── lib/
│   │   ├── cart-context.tsx    # Global cart state (React Context)
│   │   └── data.ts             # Book data, types, condition colours
│   ├── App.tsx                 # Main layout, filters, hero, sections
│   ├── index.css               # CSS variables, theme tokens, animations
│   └── main.tsx                # Entry point
├── index.html                  # Root HTML (AI chat widget injected here)
└── package.json
```

---

## 🚀 Getting Started

### 🌐 Try It Live

**[View the live app →](https://attached-assets--lesgoaditya.replit.app)**

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) v8+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/turn-the-page.git
cd turn-the-page

# Install dependencies
pnpm install

# Start the development server
pnpm --filter @workspace/turn-the-page run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

```bash
pnpm --filter @workspace/turn-the-page run build
```

---

## 📦 Mock Inventory

The store ships with 10 pre-loaded books across 5 genres:

| Title | Author | Condition | Genre |
|---|---|---|---|
| Dune | Frank Herbert | Good | Sci-Fi |
| 1984 | George Orwell | Fair | Fiction |
| The Great Gatsby | F. Scott Fitzgerald | Collector's | Classic |
| Beloved | Toni Morrison | Like New | Fiction |
| Slaughterhouse-Five | Kurt Vonnegut | Well-Loved | Fiction |
| The Name of the Rose | Umberto Eco | Rare Find | Mystery |
| A Brief History of Time | Stephen Hawking | Good | Non-Fiction |
| Invisible Man | Ralph Ellison | Like New | Fiction |
| Blood Meridian | Cormac McCarthy | Good | Fiction |
| Solaris | Stanislaw Lem | Rare Find | Sci-Fi |

---

## 🎴 Condition Badge Guide

| Badge | Meaning |
|---|---|
| 🟡 **Rare Find** | Hard to come by — a genuine discovery |
| 🟢 **Like New** | Barely touched, pages pristine |
| 🩵 **Good** | Light wear, reads perfectly |
| 🩶 **Fair** | Loved and shows it |
| 🌸 **Well-Loved** | Dog-eared, annotated, full of character |
| 🟣 **Collector's** | Museum-quality or highly sought edition |

---

## 🌱 Store Policies

- **Carbon Neutral Shipping** — Every order is offset. We ship consciously.
- **Buyback Programme** — Bring (or send) your old books back. We'll give you store credit and find them a new reader.

---

## 🤝 Contributing

This is a prototype. Fork it, extend it, make it yours. A few ideas:

- Connect a real backend (Supabase, PlanetScale) for live inventory
- Add user accounts and wishlists
- Integrate a real payment gateway (Stripe)
- Expand the book catalogue with a search-by-title API

---

## 📄 License

MIT — free to use, remix, and build upon.

---

<p align="center">
  <em>Built with care for readers who love the hunt.</em>
</p>
=======
# turn-the-page
A fictional used bookstore website built with React and Tailwind CSS
>>>>>>> 5c7115a6f44b44d232044b1c34fe1697d8e45027
