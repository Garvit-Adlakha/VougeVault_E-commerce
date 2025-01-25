import { Router } from 'express';

import { addProduct, removeProduct, getAllProducts, getProductsByCategory,getProductById } from '../controllers/product.controller.js';

import { upload } from '../middlewares/multer.middleware.js';
const router = Router();

router.route('/addproduct').post(
    upload.fields([
        {
            name: "image",
        }
    ]),
    addProduct
);
router.post('/products/remove', removeProduct);
router.get('/allproducts', getAllProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/product/:id', getProductById);

export default router;
