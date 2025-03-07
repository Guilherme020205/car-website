"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginUserController_1 = require("./Controllers/User/LoginUserController");
const CreatContactController_1 = require("./Controllers/Contatos/CreatContactController");
const ListContactController_1 = require("./Controllers/Contatos/ListContactController");
const DeletContactController_1 = require("./Controllers/Contatos/DeletContactController");
const CreatRedeController_1 = require("./Controllers/Redes/CreatRedeController");
const ListRedeController_1 = require("./Controllers/Redes/ListRedeController");
const DeletRedeController_1 = require("./Controllers/Redes/DeletRedeController");
const AddOrUpDataBannerController_1 = require("./Controllers/Banner/AddOrUpDataBannerController");
const AddOrUpDataLogoController_1 = require("./Controllers/Logo/AddOrUpDataLogoController");
const AddOrUpDateLocationController_1 = require("./Controllers/Location/AddOrUpDateLocationController");
const CreatVehicleController_1 = require("./Controllers/Vehicle/CreatVehicleController");
const SearchController_1 = require("./Controllers/Search/SearchController");
const ViewBannerController_1 = require("./Controllers/Banner/ViewBannerController");
const ViewLocationController_1 = require("./Controllers/Location/ViewLocationController");
const ViewLogoController_1 = require("./Controllers/Logo/ViewLogoController");
const ListTypeRedeController_1 = require("./Controllers/TypeRedes/ListTypeRedeController");
const ListFuelsTypeController_1 = require("./Controllers/fuels/ListFuelsTypeController");
const ListExchangesTypeController_1 = require("./Controllers/exchanges/ListExchangesTypeController");
const ListFuelsTypeController_2 = require("./Controllers/bodyworks/ListFuelsTypeController");
const GetVehicleController_1 = require("./Controllers/Vehicle/GetVehicleController");
const router = (0, express_1.Router)();
router.post('/login', LoginUserController_1.LoginUserController);
router.post('/contact/creat', CreatContactController_1.CreatContactController);
router.get('/contact/list', ListContactController_1.ListContactController);
router.delete('/contact/remove', DeletContactController_1.DeletContactController);
router.post('/rede/creat', CreatRedeController_1.CreatRedeController);
router.get('/rede/list', ListRedeController_1.ListRedeController);
router.delete('/rede/remove', DeletRedeController_1.DeletRedeController);
router.get('/typerede/list', ListTypeRedeController_1.ListTypeRedeController);
// router.post('/banner', upload.single('linck'), addOrUpdateBannerController);
router.post('/banner', AddOrUpDataBannerController_1.addOrUpdateBannerController);
router.get('/banner', ViewBannerController_1.ViewBannerController);
router.post('/logo', AddOrUpDataLogoController_1.AddOrUpDateLogoController);
router.get('/logo', ViewLogoController_1.ViewLogoController);
router.post('/location', AddOrUpDateLocationController_1.AddOrUpDateLocationController);
router.get('/location', ViewLocationController_1.ViewLocationController);
router.post('/vehicle', CreatVehicleController_1.CreatVehicleController);
router.get('/vehicle/:id', GetVehicleController_1.GetVehicleController);
router.post('/search', SearchController_1.SearchController);
router.get('/fuels', ListFuelsTypeController_1.ListFuelsTypeController);
router.get('/bodyworks', ListFuelsTypeController_2.ListBodyworksTypeController);
router.get('/exchanges', ListExchangesTypeController_1.ListExchangesTypeController);
exports.default = router;
