// Configuration file for BioGold e-commerce frontend

// Base URL for the API
// For local development, use http://localhost:5000
// For production, replace with your deployed backend URL
const API_BASE_URL = 'http://localhost:5000';

// Image URL handler - ensures correct path for images
function getImageUrl(imagePath) {
  // If already a complete URL or a local asset path, return as is
  if (!imagePath) return './assets/images/products/default.jpg';
  if (imagePath.startsWith('http') || imagePath.startsWith('./')) return imagePath;
  
  // Otherwise, prepend the API base URL
  return `${API_BASE_URL}/${imagePath}`;
}

// Export configuration
window.API_BASE_URL = API_BASE_URL;
window.getImageUrl = getImageUrl; 