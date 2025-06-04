# E-Commerce React.js Frontend

This project is a complete implementation of an e-commerce website frontend built with React.js based on the provided design mockups. The implementation includes all the required pages, components, styling, and functionality.

## Project Structure

```
e-commerce-react-app/
├── public/
└── src/
    ├── assets/
    │   └── images/
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx
    │   │   └── Footer.jsx
    │   ├── ui/
    │   │   └── ProductCard.jsx
    │   └── ProtectedRoute.jsx
    ├── context/
    │   └── AppContext.js
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── ProductDetailsPage.jsx
    │   ├── AboutPage.jsx
    │   ├── ContactPage.jsx
    │   ├── CartPage.jsx
    │   ├── CheckoutPage.jsx
    │   ├── LoginPage.jsx
    │   ├── SignUpPage.jsx
    │   ├── AccountPage.jsx
    │   └── NotFoundPage.jsx
    ├── styles/
    │   ├── GlobalStyles.js
    │   └── theme.js
    ├── App.js
    ├── index.js
    └── routes.js
```

## Features Implemented

1. **Responsive Design**: The website is fully responsive and works well on desktop, tablet, and mobile devices.

2. **Pages**:
   - Home Page with featured products, categories, and promotional banners
   - Product Details page with images, options, and related products
   - About page with company information
   - Contact page with contact form
   - Cart page with product listing and summary
   - Checkout page with billing form and order summary
   - Account page with profile management
   - Login and Sign Up pages
   - 404 Error page

3. **Components**:
   - Header with navigation, search, and account dropdown
   - Footer with subscription form and links
   - Product Card for displaying products
   - Protected Route for authenticated access

4. **Mobile-Specific Features**:
   - Hamburger menu for small devices (screens smaller than 992px)
   - Full-screen mobile navigation drawer that slides in from the left
   - Product categories in the mobile menu:
     - Woman's Fashion
     - Men's Fashion
     - Electronics
     - Home & Lifestyle
     - Medicine
     - Sports & Outdoor
     - Baby's & Toys
     - Groceries & Pets
     - Health & Beauty
   - Optimized layout for touch interactions
   - Responsive search and navigation elements

5. **State Management**:
   - Context API for managing cart, wishlist, and user authentication

6. **Routing**:
   - React Router for navigation between pages
   - Protected routes for authenticated access

## Technologies Used

- React.js (v19.1.0)
- React Router (v7.6.0) for navigation
- Styled Components (v6.1.18) for styling
- Material UI (v7.1.0) for UI components and icons
- Context API for state management

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd e-commerce-react-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The application will be available at http://localhost:3000

4. Build for production:
   ```
   npm run build
   ```
   This will create an optimized production build in the `build` folder.

## Implementation Notes

- All pages and components are implemented according to the provided design mockups
- The website is fully responsive and works well on all device sizes
- Global styling ensures consistent design across all pages
- Context API is used for state management (cart, wishlist, user)
- Protected routes ensure authenticated access to account and checkout pages
- The hamburger menu on mobile devices provides access to all navigation links and product categories

## Browser Compatibility

The application is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Development Commands

- `npm start` - Starts the development server
- `npm test` - Runs the test suite
- `npm run build` - Creates a production build
- `npm run eject` - Ejects from create-react-app (not recommended)
