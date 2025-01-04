import { Router } from 'express';
import { addProduct, removeProduct, getAllProducts } from '../controllers/product.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
const router = Router();

router.route('/addproduct').post(
    upload.fields([
        {
            name:"image",
        }
    ]),
    addProduct
);
router.post('/removeproduct', removeProduct);
router.get('/allproducts', getAllProducts);

export default router;
