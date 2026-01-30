# Blueprint: Installment Management System

## Overview

This project is a web-based installment management system for an administrator. It provides a secure login, a central dashboard, and functionalities to manage customer installments. The system is built using Astro.js, focusing on a clean, modern, and responsive user interface.

## Implemented Features & Styles

*   **Authentication & Core Pages:** Secure login, dashboard, and basic installment management pages are in place.
*   **Premium Form UI (`/admin/installments/new`):**
    *   **Layout:** A sophisticated, single-column layout on a floating card with a textured, premium background.
    *   **Dynamic "Other" Field:** A "Type" dropdown that dynamically shows a text input when "Other" is selected.
    *   Fields for customer details and total amount.

## Current Plan: Professional Installment Schedule UI

**Goal:** Elevate the dynamically generated installment schedule to a highly professional and organized UI, improving clarity and usability.

**Strategy:**

1.  **"Card-in-Card" Design:** Each generated installment will be presented in its own distinct, styled "card". This visually separates each installment group.

2.  **Intra-Card Grid Layout:** Within each installment card, the input fields (Amount, Due Date, Status) will be arranged horizontally using a responsive CSS grid. This creates a compact, modern, and easy-to-scan layout.

3.  **Refined Styling & Hierarchy:**
    *   Each installment card will have a clear, prominent header (e.g., "القسط 1").
    *   The card will have a subtle background, rounded corners, and padding to distinguish it from the main form background.
    *   The layout will be fully responsive, stacking the grid items vertically on smaller screens for optimal mobile viewing.

4.  **Flawless Floating Labels:** Ensure the floating label behavior is perfectly implemented for all fields within the new grid layout, maintaining a consistent user experience.

5.  **Update `new.astro`:** Apply all the above CSS and JS changes to `src/pages/admin/installments/new.astro` to bring this professional design to life.
