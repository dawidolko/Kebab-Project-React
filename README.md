# Kebab

> 🥙 **The cart is in one place** — a restaurant menu in React where the badge, the buttons and the preview panel all read the same reducer

**Kebab** is an ordering page for a kebab restaurant: the menu, a sidebar cart and a checkout preview. The cart lives in a React context with a reducer, because three separate parts of the tree need it at once — the add buttons on each product, the counter in the navbar and the panel that lists what you picked. Passing it down as props would have meant threading state through every layer between them.

The site is a static build published to GitHub Pages, styled with styled-components, with no backend behind it.

![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-5-CA4245?logo=reactrouter&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-5-DB7093?logo=styledcomponents&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-222222?logo=githubpages&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Live:** [kebab.dawidolko.pl](https://kebab.dawidolko.pl)

---

## 🎯 Key Features

- **One cart, three consumers** — `CartContext` holds the items and the open/closed state; the product buttons dispatch into it, the navbar badge counts it and the sidebar renders it. No prop drilling, no duplicated totals.
- **Quantities keyed by product name** — the name is unique in the data file and is also what the customer reads, so a duplicate key would show up as a visible bug rather than a silent one.
- **A sidebar, not a separate page** — the cart slides over the menu, so adding a second item never costs you your place in the list.
- **Menu driven by data** — products come from a data file, so extending the menu means editing a list, not writing components.
- **Styled with styled-components** — styles travel with the component they belong to; the global reset lives in `GlobalStyle.js`.
- **Responsive from the start** — the menu is a grid on a desktop and a single column on a phone, with the cart becoming a full-height panel.

---

## 🛠️ Technology Stack

| Technology            | Version | Role                                                       |
| --------------------- | ------- | ---------------------------------------------------------- |
| **React**             | 17      | Component model; `useReducer` + context for the cart.      |
| **React Router**      | 5       | Client-side routing.                                       |
| **styled-components** | 5       | Component-scoped styling and the global reset.             |
| **react-icons**       | 3       | Icon set.                                                  |
| **gh-pages**          | 3       | Publishing the build to GitHub Pages.                      |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or newer (the build uses `--openssl-legacy-provider` for older webpack)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/dawidolko/Kebab-Project-React.git
cd Kebab-Project-React
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run

```bash
npm start       # development server at http://localhost:3000
npm run build   # production build into build/
npm run publish # deploy build/ to GitHub Pages
```

---

## 📁 Project Structure

```
Kebab-Project-React/
├── public/                  # index.html, favicon, CNAME
└── src/
    ├── App.js               # routes and layout
    ├── GlobalStyle.js       # reset and shared tokens
    ├── context/
    │   └── CartContext.js   # items, quantities, open state — one reducer
    ├── components/
    │   ├── Navbar/          # navigation with the cart badge
    │   ├── Hero/            # opening section
    │   ├── Products/        # the menu grid
    │   ├── Cart/            # the cart list and totals
    │   ├── Sidebar/         # the sliding panel
    │   ├── Feature/         # highlighted items
    │   └── Footer/
    └── images/
```

---

## 📄 License

MIT © [Dawid Olko](https://dawidolko.pl)
