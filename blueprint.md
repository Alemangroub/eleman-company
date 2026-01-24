
# Blueprint: Website Redesign & Theming

## Overview

This document outlines the successful redesign of the corporate website, transitioning from a dark, image-heavy theme to a clean, minimalist, and professional design. It also details the implementation of a CSS variable-based theming system for easy customization of the site's color palette and a comprehensive "Golden Theme" application.

## Implemented Styles, Designs, and Features

### Theming System

- **CSS Variables:** A robust theming system has been established using CSS variables defined in the `src/layouts/Layout.astro` file.
- **Golden Theme:** A luxurious golden theme has been consistently applied across the website for a unified and premium user experience.

### General

- **Color Palette:** The entire site now uses a consistent color scheme based on the new CSS variables.
- **Typography:** The existing "Cairo" and "Orbitron" fonts have been maintained for their modern and readable quality, with a clear typographic hierarchy for headings and paragraphs.
- **Layout:** Global layout styles have been updated to ensure a clean and consistent presentation across all pages.

### Component-Specific Changes

- **Header & Sidebar:** 
    - **Logo Animation:** Implemented a multi-layered animation on the company logo for a sophisticated and lively effect:
        1.  **Dual "Shine" Effect:** Two alternating beams of light pass over the logo from opposite directions, giving it a dynamic, premium metallic glint. This uses the `::before` and `::after` pseudo-elements with staggered CSS animations.
        2.  **"Breathing" Effect:** The logo itself slowly fades in and out (from 40% to 100% opacity), creating a calm, "breathing" rhythm. This is achieved with a separate `slow-fade` animation on the `img` element.
        *This was all made possible by first replacing the original `.jpg` logo with a transparent `.png` version.*
    - The header's behavior has been simplified to scroll naturally with the page content.
    - Main navigation links are styled in `--logo-gold`, turning to `--logo-blue` on hover or when active.

- **Footer, Welcome Section, Projects, etc.:** 
    - All other components have been consistently styled with the golden theme, including text, links, buttons, and backgrounds, creating a unified and premium look and feel across the entire website.

### Page-Specific Changes

- **All Pages:** All pages now consistently use the new theming system.

## Current Plan

- **Action:** Added a final layer of animation to the logo: a slow "breathing" effect where the logo gently fades in and out. This complements the existing dual shine effect, adding more life and sophistication.
- **Next Step:** Commit all changes to the version control system.
