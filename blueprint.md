# Project Blueprint

## Overview

This project is a static-first web application for a real estate company, built with Astro.js. The primary goal is to create a fast, performant, and scalable website that showcases the company's projects, values, and contact information. The application also includes a private admin dashboard for managing property listings and installment plans.

## Core Technologies

- **Frontend Framework:** Astro.js
- **UI Components:** Astro components, with potential for React/Vue/Solid for interactive islands.
- **Styling:** Tailwind CSS (or other utility-first framework), standard CSS/SCSS.
- **Database:** Firebase Firestore
- **Deployment:** Firebase Hosting

## Implemented Features & Design

### Public-Facing Site

- **Homepage:** Hero section with a strong headline and subtitle.
- **About Page:** Company values and mission.
- **Contact Page:** Contact information and form.
- **Styling:** Modern, clean design with a focus on readability and visual appeal.
- **Colors:** A vibrant and energetic color palette.
- **Fonts:** Expressive typography to guide the user's attention.

### Admin Dashboard

- **Authentication:** Secure login for admin users.
- **Installment Management:**
  - View a list of all installment contracts.
  - Add new installment contracts.
  - Edit existing installment contracts.
  - Delete installment contracts.
- **Installment Alerts:**
  - A new section on the dashboard displays upcoming installment payments due within the next seven days.
  - Alerts are fetched directly from the Firestore database.
  - The UI is designed to be clear and intuitive, showing the customer's name, due date, amount, and a direct link to their phone number.

## Current Task: Installment Alerts System

### Plan

1.  **[COMPLETED]** Create a `blueprint.md` file to document the project architecture and plan.
2.  **[COMPLETED]** Modify the `src/pages/admin/dashboard.astro` file to fetch data on upcoming installment payments from the database.
3.  **[COMPLETED]** Add a new section to the dashboard's UI to display these alerts, ensuring the design is clear and intuitive.
4.  **[COMPLETED]** Update the `blueprint.md` file to reflect the new changes and mark the initial implementation as complete.
