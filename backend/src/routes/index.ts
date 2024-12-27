import { Router } from "express";

import { LoginUserController } from "../Controllers/User/LoginUserController";

import { CreatContactController } from "../Controllers/Contatos/CreatContactController";
import { ListContactController } from "../Controllers/Contatos/ListContactController";
import { DeletContactController } from "../Controllers/Contatos/DeletContactController"

import { CreatRedeController } from "../Controllers/Redes/CreatRedeController";

const router = Router();

router.post('/login', LoginUserController);

router.post('/contact/creat', CreatContactController);
router.get('/contact/list', ListContactController);
router.delete('/contact/remove', DeletContactController);

router.post('/rede/creat', CreatRedeController);
// router.get('/rede/list', ListRedeController);
// router.delete('/rede/remove', DeletRedeController);

export default router;
