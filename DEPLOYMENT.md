# BioGold eCommerce - Deployment Guide

This guide explains how to separate the frontend and backend of the BioGold eCommerce application for deployment.

## Project Structure

The project is structured as follows:

- **Frontend**: HTML, CSS, and JavaScript files in the root directory
- **Backend**: Node.js application in the `server` directory

## Changes Made for Deployment

1. **Created a config.js file**
   - Centralized API URL configuration
   - Added helper function for image URL handling

2. **Updated API calls**
   - Changed all hardcoded URLs to use the API_BASE_URL variable
   - Updated image paths to use the getImageUrl helper function

3. **Created package.json for frontend**
   - Added configuration for GitHub Pages deployment
   - Set up scripts for easy deployment

4. **Created deployment scripts**
   - deploy-frontend.sh for GitHub Pages deployment
   - deploy-backend.sh with instructions for various hosting services

5. **Added .gitignore**
   - Configured to exclude backend files from frontend repository

## Deployment Process

### Frontend Deployment to GitHub Pages

1. Create a new GitHub repository for the frontend
2. Update the API_BASE_URL in config.js to point to your deployed backend
3. Push the frontend code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/biogold-frontend.git
   git push -u origin main
   ```
4. Install GitHub Pages dependencies:
   ```bash
   npm install --save-dev gh-pages
   ```
5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
6. Go to your repository settings and ensure GitHub Pages is enabled

### Backend Deployment

1. Create a new GitHub repository for the backend
2. Copy the server directory to a new location
3. Initialize a new Git repository in that directory:
   ```bash
   cd server
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/biogold-backend.git
   git push -u origin main
   ```
4. Deploy to your preferred hosting service:
   - Heroku
   - Railway
   - Render
   - Digital Ocean
   - AWS
   - etc.
5. Set up environment variables on your hosting service:
   - Database connection strings
   - API keys
   - PORT
   - Other configuration values

6. After deploying, update the `API_BASE_URL` in the frontend's `config.js` file to point to your deployed backend URL.

## Local Development

For local development, follow these steps:

1. Run the backend:
   ```bash
   cd server
   npm install
   npm start
   ```
2. In a separate terminal, serve the frontend:
   ```bash
   # Using a simple HTTP server like live-server
   npx live-server
   ```
3. Make sure config.js has `API_BASE_URL` set to `http://localhost:5000` or whatever port your backend uses.

## Testing API Connection

To test if your frontend is correctly connecting to the backend:

1. Open your browser's developer tools
2. Go to the Network tab
3. Reload the page and look for API requests
4. Verify they're going to the correct URL and returning successful responses

## Troubleshooting

- If images aren't loading, check the network tab to see if the URLs are correct
- CORS issues: Ensure your backend has proper CORS configuration
- 404 errors: Check if API endpoints are correctly implemented and accessible
- Authentication issues: Verify tokens and credentials if your API uses authentication 