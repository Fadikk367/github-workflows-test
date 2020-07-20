import { Router } from 'express';
import { exampleGetController, examplePostController } from '../controllers';

const router = Router();


router.get('/', exampleGetController);
router.post('/', examplePostController);


export default router;