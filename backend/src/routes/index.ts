import { Router } from "express";
 
import { LoginUserController } from "../Controllers/User/LoginUserController";

import { CreatContactController } from "../Controllers/Contatos/CreatContactController";
import { ListContactController } from "../Controllers/Contatos/ListContactController";
import { DeletContactController } from "../Controllers/Contatos/DeletContactController"

import { CreatRedeController } from "../Controllers/Redes/CreatRedeController";
import { ListRedeController } from "../Controllers/Redes/ListRedeController";
import { DeletRedeController } from "../Controllers/Redes/DeletRedeController";
import { addOrUpdateBannerController } from "../Controllers/Banner/AddOrUpDataBannerController";
import { AddOrUpDateLogoController } from "../Controllers/Logo/AddOrUpDataLogoController";
import { AddOrUpDateLocationController } from "../Controllers/Location/AddOrUpDateLocationController";

import { CreatVehicleController } from "../Controllers/Vehicle/CreatVehicleController";
import { SearchController } from "../Controllers/Search/SearchController";
import { ViewBannerController } from "../Controllers/Banner/ViewBannerController";
import { ViewLocationController } from "../Controllers/Location/ViewLocationController";
import { ViewLogoController } from "../Controllers/Logo/ViewLogoController";

import { ListTypeRedeController } from "../Controllers/TypeRedes/ListTypeRedeController";

import { ListFuelsTypeController } from "../Controllers/fuels/ListFuelsTypeController";
import { ListExchangesTypeController } from "../Controllers/exchanges/ListExchangesTypeController";
import { ListBodyworksTypeController } from "../Controllers/bodyworks/ListFuelsTypeController";
import { GetVehicleController } from "../Controllers/Vehicle/GetVehicleController";

const router = Router();

router.post('/login', LoginUserController);

router.post('/contact/creat', CreatContactController);
router.get('/contact/list', ListContactController);
router.delete('/contact/remove', DeletContactController);

router.post('/rede/creat', CreatRedeController);
router.get('/rede/list', ListRedeController);
router.delete('/rede/remove', DeletRedeController);

router.get('/typerede/list', ListTypeRedeController);
 
router.post('/banner', addOrUpdateBannerController);
router.get('/banner', ViewBannerController);

router.post('/logo', AddOrUpDateLogoController);
router.get('/logo', ViewLogoController);

router.post('/location', AddOrUpDateLocationController);
router.get('/location', ViewLocationController);

router.post('/vehicle', CreatVehicleController);
router.get('/vehicle/:id', GetVehicleController);

router.post('/search', SearchController);

router.get('/fuels', ListFuelsTypeController);
router.get('/bodyworks', ListBodyworksTypeController);
router.get('/exchanges', ListExchangesTypeController);

export default router;