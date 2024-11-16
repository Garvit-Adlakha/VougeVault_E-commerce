import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js'
import cartRoutes from './routes/cart.routes.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import portfinder from 'portfinder';

const app = express();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Use JSON middleware to parse JSON payloads with a size limit of 16KB
app.use(express.json({
    limit: "16kb" // Limit the size of JSON payloads
}));

// Use URL-encoded middleware to parse URL-encoded payloads with a size limit of 16KB
app.use(express.urlencoded({
    extended: true, // Allows for rich objects and arrays to be encoded into the URL-encoded format
    limit: "16kb" // Limit the size of URL-encoded payloads
}));

// Serve static files from the "public/temp/upload/images" directory
app.use('/api/v1/products/images', express.static(path.join(__dirname, '../public/temp/upload/images')));

// Use cookie parser middleware to parse cookies
app.use(cookieParser());

// Set up routes
app.get("/", (req, res) => {
    res.send("Express App is running");
});

// Import and use routes
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/cart',cartRoutes) // Updated to use the /api/v1/users path

// Start the server
portfinder.getPortPromise()
    .then((port) => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error finding a port:', err);
    });

// Export the app for use in other modules
export { app };
