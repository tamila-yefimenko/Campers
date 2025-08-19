    Project Overview

This project is the frontend part of a web application for TravelTrucks, a
company specializing in camper rentals. The application includes multiple pages
such as: • Home page with a call-to-action banner • Catalog page with filtering
and favorites functionality • Camper detail page with reviews and a booking form
The frontend consumes a ready-made backend API available at:
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

    API Endpoints

- GET /campers – Fetch all camper listings (filtering must be performed on the
  backend)
- GET /campers/:id – Fetch detailed info for a specific camper by ID

  Tech Stack

- Vite + React for fast development
- Redux for global state management
- React Router for routing
- Axios for HTTP requests
- CSS styling: any library of your choice (e.g., CSS Modules, styled-components,
  MUI, etc.)

      Pages & Routing

  | Route | Description | | / | Home page with banner and CTA | | /catalog |
  Camper catalog with filters and favorites | | /catalog/:id | Camper detail
  page with reviews and booking form |

      State Management

- Global state includes:
- List of campers
- Active filters
- Favorites list (persisted across page reloads)
- When applying new filters, previous results must be cleared to ensure
  accuracy.

  Features

- Home → Catalog Navigation: "View Now" button redirects to catalog
- Filtering (performed on backend):
- Location (text input)
- Body type (single selection)
- Features (AC, kitchen, etc. – multiple selection)
- Favorites:
- Add campers to favorites
- Persist favorites on page reload
- Pricing:
- Displayed as a single value (e.g., 8000.00)
- Detail Navigation:
- "Show more" button opens camper detail page in a new tab
- Load More:
- Button to fetch additional campers based on current filters
- Reviews:
- Display user reviews with 5-star rating system
- Booking Form:
- Submit booking request
- Show success notification on submission

      Camper Details

  Use the following properties if available: Features: transmission, engine, AC,
  bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water
  Specifications: form, length, width, height, tank, consumption

      Design Guidelines

- Follow the provided design mockup
- Desktop layout required
- Responsive design is optional but encouraged

  Development Principles

- Component-based architecture
- Follow DRY (Don't Repeat Yourself) principle
- Write clean, readable code with comments where necessary

      Deployment

  The project is deployed on Vercel
