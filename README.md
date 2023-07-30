# Amazon Clone with Authentication using Firebase, Data Storage with Firestore, and Payments with Stripe

This is a full-stack web application that replicates the core functionalities of the popular e-commerce platform Amazon. The application uses Firebase for authentication, Firestore for data storage, and Stripe for processing actual payments. The backend is built using Node.js and Express, while the frontend is developed using React.

## Features

- User authentication using Firebase Auth.
- Browse through various products.
- Add products to the cart.
- Update and remove items from the cart.
- Checkout process with real payment functionality using Stripe.
- Real-time product updates.
- Responsive design for mobile and desktop.

## Deployment

-Under progress-

## Screenshots

<img width="948" alt="image" src="https://github.com/d3monv3num/Amazon-Clone/assets/77112679/7a3965b3-fd26-40e6-957e-04c77abe1863">

<img width="960" alt="image" src="https://github.com/d3monv3num/Amazon-Clone/assets/77112679/b24ae3da-807f-4299-8d82-f0d157f9bba1">

<img width="590" alt="image" src="https://github.com/d3monv3num/Amazon-Clone/assets/77112679/071d89c4-2679-46ad-8cdc-e0f14a8f42af">  <img width="380" alt="image" src="https://github.com/d3monv3num/Amazon-Clone/assets/77112679/b89c77e1-3450-422e-bbc8-8a7e0a0ea562">

<img width="950" alt="image" src="https://github.com/d3monv3num/Amazon-Clone/assets/77112679/71dd3271-06a3-4207-be73-e0706a4ae5e7">

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
npm install
```

4. Set up Firebase:

   - Create a new project on Firebase and enable Authentication and Firestore.
   - Go to the project settings and find the web app configuration.
   - Copy the configuration object and replace it in `src/firebase.js`.

5. Set up Stripe:

   - Create an account on Stripe (if you haven't already).
   - Get your Stripe API key.
   - Replace the placeholder in `payment.js` with your Stripe API key.

6. Run the application:

```bash
# From the backend directory
npm start

# From the frontend directory
npm start
```

7. Open your browser and navigate to `http://localhost:3000` to view the application.

## Folder Structure

```
amazon-clone/
|-- functions/
|   |-- index.js
|-- 
|   |-- public/
|   |-- src/
|   |   |-- components
|   |   |-- App.js
|   |   |-- index.js
|
|-- README.md
```

## Acknowledgements

- This project is inspired by the Amazon website.
- Special thanks to Firebase, Firestore, and Stripe for providing the authentication, data storage, and payment processing capabilities.
