# Shopping App

## Setup Instructions

1. Install dependencies

   npm install

2. Start the development server

   npm run dev

3. Open the URL shown in the terminal (usually http://localhost:5173)


## 🗄 Initial Data Setup

By default, the application automatically loads dummy data into `localStorage` when it runs for the first time.

The following data is preloaded:

- Products
- Users
- Invoices
- Sponsors

This is handled by the `setupInitialData()` function.

### 🔁 Resetting Data

If you want to reset the app data and reload the default dummy data, set:

App.tsx
setupInitialData(true);


## ✨ Features

### 🏠 Home Page
- Collapsible side menu (open / close)
- Header section
- Product carousel
- Product list
- Sponsors section
- Footer
- Buy Product modal (from carousel and product list)

### 👤 Users Section
- Fixed side menu
- List of users who have purchased items
- Edit user functionality
- Edit User modal

### 💳 Billing Section
- Fixed side menu
- Trending products display
- Invoice list with purchase details

