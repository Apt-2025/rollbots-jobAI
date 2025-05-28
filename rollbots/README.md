# ROLLBOTS

This is a [React](https://reactjs.org/) project bootstrapped with [`create-react-app`](https://create-react-app.dev/).

## 📦 Getting Started

### First, install the dependencies:

npm install
or
yarn

### Then, run the development server:

npm run start
or
yarn start

Open http://localhost:3000 with your browser to see the result.

You can start editing the app by modifying files inside the src/ directory. The page will auto-reload as you make changes.

## 🛠️ Build for Production

### To create an optimized production build:

npm run build
or
yarn build

The build output will be in the build/ folder. You can then deploy this folder to any static hosting service like Vercel, Netlify, Firebase, or GitHub Pages.

## 🌐 Deployment Notes

To see the changes online:

If you're not the owner of the repository:
On Vercel, delete the existing project and create a new one using the same repository.
Don’t forget to add the domain: "malaysia.rollbots.ai".

If you are the owner of the repository:
Just commit and push your changes to GitHub. Vercel will auto-deploy.

## 📁 Project Structure

public/
Contains assets that are copied as-is into the build/ folder.

Duplicate of some icons and images already found in build/.

index.html is the base template where React injects the final JS bundle.

src/
Your actual source code.

components/ - Cleanly structured by feature:

blogs/: Blog components like grids and featured posts.

cards/: Portfolio, profiles, sliders, etc.

cta/: Call-to-action UI sections.

faqs/, features/: Modular feature and FAQ sections.
