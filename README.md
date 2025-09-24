# Eli Movies App

A cross-platform Movie Recommendation Application built with **React Native**, **Expo**, and **Next.js** (Web/PWA variant).  
The app allows users to discover, view, and save their favorite movies while showcasing dynamic routing, API integration, and responsive UI design.

This project was developed as part of the **ProDev FE Real-World Application case study**, reflecting real-world challenges developers face when building scalable, user-focused applications.

---

## Overview

The **Movie Explorer App** enables users to:

- Browse trending and recommended movies via a public API (**OMDb**).
- Save and manage favorite movies locally using **Context API** or persistent storage.
- Navigate to detailed movie pages using **dynamic routing**.
- Experience a responsive, interactive, and visually appealing dashboard across devices.

This case study highlights:

- Dynamic routing with **Next.js/Expo Router**.  
- Local storage & personalization for user favorites.  
- Reusable UI components built with **Styled Components**.  
- Cross-platform support (**Web, Mobile, and PWA**).  

---

## Project Goals

- **Dynamic Routing**  
  Implement detailed pages for movies using Next.js dynamic routing.  

- **User Personalization**  
  Save favorite movies locally or via an API backend.  

- **Interactive Dashboard**  
  Deliver a responsive and engaging UI to browse and manage movies.  

---

## Technologies Used

- **React Native / Expo** – Mobile-first development.  
- **Next.js** – Dynamic routing and SSR for web.  
- **TypeScript** – Type safety and scalable code.  
- **Styled Components** – Reusable, styled UI components.  

---

## Key Features

### API Integration

- Fetch and display trending and recommended movies using the **OMDb API**.  
- Handle loading states and errors gracefully.  

### Dynamic Routing

- Create detailed pages for individual movies.  
- Use `/details/[imdbID]` routes for optimized navigation.  

### Favorites Management

- Save and access favorite movies locally.  
- Manage favorites in a dedicated dashboard.  

### Responsive UI

- Mobile-first design with Styled Components.  
- Smooth animations and hover effects on movie cards.  

---

## Project Structure

app/
├── details/
│ ├── _layout.tsx
│ └── imdbID.tsx
├── home/
│ ├──_layout.tsx
│ ├── Favorites.tsx
│ ├── index.tsx
│ ├── info.tsx
│ └── search.tsx
assets/
components/
├── common/
│ ├── Button.tsx
│ ├── FavoritesCard.tsx
│ ├── MovieCard.tsx
│ └── Banner.tsx
├── MovieDetailsCard.tsx
└── OnboardingScreen.tsx
constants/
└── index.ts
context/
├── FavoritesContext.tsx
└── MovieContext.tsx
interfaces/
└── index.ts
services/
└── omdb.ts
styles/
├── banner.ts
├── details.ts
├── favourites.ts
├── home.ts
├── info.ts
├── search.ts
└── startScreen.ts
utils/
├──getRandomTitles.ts

### Functionality

- Fetches and displays trending/recommended movies.  
- Implements detailed movie pages.  
- Saves favorite movies locally or via API.  

### User Experience

- Smooth navigation with fast page load times.  
- Responsive and visually engaging movie cards.  
- Intuitive UI for saving and managing favorites.  

## Development Notes

- Movie data is fetched from **OMDb API** using IMDb IDs.  
- Favorites are stored in memory via **Context API**
- Navigation between screens is handled via **dynamic routing**.  
- Components are modular and reusable, separating **logic, layout, and styling**.  
