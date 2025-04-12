#!/bin/bash

# Frontend deployment script for BioGold eCommerce

echo "Starting Frontend Deployment Process..."

# Ensure we're in the right directory
echo "Moving to project root directory..."
cd "$(dirname "$0")"

# Copy frontend-package.json to package.json for deployment
echo "Setting up package.json for deployment..."
cp frontend-package.json package.json

# Install dependencies
echo "Installing dependencies..."
npm install

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Frontend deployment completed!"
echo "Your site should be available at the URL specified in your package.json homepage field." 