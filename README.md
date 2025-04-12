# BioGold - An eCommerce Website

BioGold is a fully responsive ecommerce website built using HTML, CSS, and JavaScript, with a Node.js backend.

## Demo

![BioGold Desktop Demo](./website-demo-image/desktop.png "Desktop Demo")
![BioGold Mobile Demo](./website-demo-image/mobile.png "Mobile Demo")

## Project Structure

This project uses a separated frontend and backend architecture:

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, Sequelize

## Frontend Deployment on GitHub Pages

### Preparing the Frontend for GitHub Pages

1. The project has been set up with `config.js` to separate the backend API URL configuration.

2. To deploy on GitHub Pages:
   - Fork or clone this repository
   - Open `config.js` and update the `API_BASE_URL` to point to your deployed backend:
   
   ```javascript
   const API_BASE_URL = 'https://your-backend-url.com';
   ```

3. Make sure all API calls use the `API_BASE_URL` variable instead of hardcoded URLs.

4. Use the `getImageUrl()` helper function for all image paths to ensure they're correctly loaded from the backend.

### Setting Up GitHub Pages

1. Push your frontend code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for frontend"
   git branch -M main
   git remote add origin https://github.com/yourusername/biogold-frontend.git
   git push -u origin main
   ```

2. Go to your GitHub repository → Settings → Pages
3. Select the main branch and the root folder
4. Click "Save" and your site will be published

## Backend Deployment

### Deploying the Backend Separately

1. The backend code is in the `server` directory.

2. Deploy your backend to a service like Heroku, Railway, Render, or any other Node.js hosting:
   ```bash
   cd server
   npm install
   git init
   git add .
   git commit -m "Initial commit for backend"
   git branch -M main
   git remote add origin https://github.com/yourusername/biogold-backend.git
   git push -u origin main
   ```

3. Set up environment variables on your hosting platform:
   - `PORT`: The port your server will run on
   - `DB_CONNECTION_STRING`: Your database connection string
   - Any other env variables your app uses

4. Once deployed, update the frontend `config.js` to point to your backend URL.

## Local Development

To run the project locally:

1. Start the backend:
   ```bash
   cd server
   npm install
   npm start
   ```

2. Open the frontend in a browser (either using Live Server in VS Code or any other local server).

3. Make sure `config.js` is set to use `http://localhost:5000` or whatever port your backend runs on.

## Additional Information

- Images and uploads are stored in the backend's `uploads` directory
- The frontend uses local storage for cart and wishlist functionality
- API endpoints are defined in the `server/routes` directory

## License

This project is **free to use** and does not contain any license.
