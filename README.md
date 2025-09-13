# 🚐 TravelTrucks – Camper Rental Frontend

<p align="center">
  <img src="/assets/bgr-picture.webp" alt="TravelTrucks Camper" width="600"/>
</p>

## 🌍 Project Overview

**TravelTrucks** is the frontend part of a web application for a company
specializing in camper rentals.  
The application includes multiple pages:

- **Home** – landing page with a banner and call-to-action (CTA)
- **Catalog** – camper catalog with filtering and favorites functionality
- **Camper Detail** – camper detail page with reviews and a booking form

🔗 Live Demo: [TravelTrucks on Vercel](https://campers-orpin.vercel.app/)  
🔗 API: [MockAPI – Campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

---

## 🔗 API Endpoints

- `GET /campers` – fetch all camper listings (filtering performed on the
  backend)
- `GET /campers/:id` – fetch detailed info for a specific camper by ID

---

## ⚙️ Tech Stack

- **Vite + React** – fast development
- **Redux Toolkit** – global state management
- **React Router** – routing
- **Axios** – HTTP requests
- **CSS styling** – any library of choice (CSS Modules, styled-components, MUI,
  etc.)

---

## 🗂 Pages & Routing

| Route          | Description                                 |
| -------------- | ------------------------------------------- |
| `/`            | Home page with banner and CTA               |
| `/catalog`     | Camper catalog with filters and favorites   |
| `/catalog/:id` | Camper detail page with reviews and booking |
| `/favorites`   | List of favorites campers                   |

---

## 🗄 State Management

Global state includes:

- list of campers
- active filters
- favorites list (persisted across reloads)

> ⚡ When applying new filters, previous results are cleared to ensure accuracy.

---

## ✨ Features

- **Home → Catalog Navigation**: "View Now" button redirects to catalog
- **Filtering** (performed on the backend):
  - Location (text input)
  - Body type (single selection)
  - Features (AC, kitchen, etc. – multiple selection)
- **Favorites**:
  - Add campers to favorites
  - Persist favorites on reload
- **Pricing**:
  - Displayed as a single value (e.g., `€8000.00`)
- **Detail Navigation**:
  - "Show more" button opens camper detail page in a new tab
- **Load More**:
  - Button to fetch additional campers with current filters
- **Reviews**:
  - Display user reviews with 5-star rating system
- **Booking Form**:
  - Submit booking request
  - Show success notification on submission

---

## 🚐 Camper Details

**Use the following properties if available:**

- **Features:** transmission, engine, AC, bathroom, kitchen, TV, radio,
  refrigerator, microwave, gas, water
- **Specifications:** form, length, width, height, tank, consumption

---

## 🎨 Design Guidelines

- Follow the provided design mockup
- **Desktop layout** required
- Responsive design optional but encouraged

---

## 📌 Development Principles

- Component-based architecture
- Follow **DRY** (Don't Repeat Yourself) principle
- Write clean, readable code with comments when needed

---

## 🚀 Deployment

The project is deployed on **Vercel**:  
👉 [https://campers-orpin.vercel.app/](https://campers-orpin.vercel.app/)
