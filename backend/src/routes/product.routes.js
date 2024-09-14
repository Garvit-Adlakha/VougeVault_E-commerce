import { Router } from 'express';
import { addProduct, removeProduct, getAllProducts, uploadProductImage } from '../controllers/product.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
const router = Router();

router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.get('/allproducts', getAllProducts);
router.post('/upload', upload.single('product'), uploadProductImage);

export default router;
