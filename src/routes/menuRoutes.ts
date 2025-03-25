import express from 'express';
// ✅ Correct way
import { createMenu,getMenus} from '../controllers/menuController';
import { welcomeMessage } from '../controllers/menuController';
import { add } from '../controllers/menuController';
const router = express.Router();

router.post('/', createMenu);
router.get('/',getMenus);
router.post("/addItem", add);




export default router;
