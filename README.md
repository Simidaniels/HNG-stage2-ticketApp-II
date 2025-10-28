# vue-project

Ticket Management Web Application (Vue.js)

This version of the Ticket Management App was built with Vue 3, taking full advantage of the Composition API to create modular, reactive components. The goal is to provide a smooth, intuitive user experience consistent with the React and Twig counterparts.

The Landing Page welcomes users with a modern wavy background and floating decorative circles that create a soft, fluid introduction to the app. Buttons direct the user to either log in or register, and all content sits neatly centered within a 1440px container.

The Login and Signup pages simulate user authentication using localStorage, storing the session key under ticketapp_session. Invalid credentials display inline validation errors and toast messages using Vue Toastification. Successful login redirects users to the Dashboard, where statistics for total, open, and resolved tickets are shown.

The Ticket Management Page is where CRUD operations take place. Users can add new tickets, edit existing ones, delete them with confirmation prompts, or view all tickets as responsive cards. Validation rules are strict:

The title and status fields are mandatory.

The status can only be "open", "in_progress", or "closed".

All fields display real-time validation feedback through VeeValidate.

Each ticket’s color reflects its status — green for open, amber for in-progress, and gray for closed. The consistent color language ensures a uniform interface across all implementations.

The Vue version uses Pinia for state management, offering a simple yet reactive store to handle authentication state and ticket data. Vue Router provides route protection, ensuring that only authenticated users can access restricted pages.
