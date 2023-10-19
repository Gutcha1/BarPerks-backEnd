"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRescueHistoryRoutes = exports.pubRescueHistoryRoutes = void 0;
const express_1 = require("express");
const ensureAuthIsValid_middleware_1 = __importDefault(require("../middlewares/ensureAuthIsValid.middleware"));
const rescueHistory_controllers_1 = require("../controllers/rescueHistory.controllers");
const validateData_middleware_1 = __importDefault(require("../middlewares/validateData.middleware"));
const rescueHistory_schemas_1 = require("../schemas/rescueHistory.schemas");
const pubRescueHistoryRoutes = (0, express_1.Router)();
exports.pubRescueHistoryRoutes = pubRescueHistoryRoutes;
const clientRescueHistoryRoutes = (0, express_1.Router)();
exports.clientRescueHistoryRoutes = clientRescueHistoryRoutes;
pubRescueHistoryRoutes.get('/:id', ensureAuthIsValid_middleware_1.default, rescueHistory_controllers_1.listRescueHistoryForPubController);
pubRescueHistoryRoutes.get('/search/:id/:codeRescue', ensureAuthIsValid_middleware_1.default, rescueHistory_controllers_1.listSearchRescueHistoryForPubController);
pubRescueHistoryRoutes.patch('/:id', ensureAuthIsValid_middleware_1.default, rescueHistory_controllers_1.updateRescueHistoryForPubController);
clientRescueHistoryRoutes.post('/:id', ensureAuthIsValid_middleware_1.default, (0, validateData_middleware_1.default)(rescueHistory_schemas_1.rescueHistorySchemaRequest), rescueHistory_controllers_1.createRescueHistoryForClientController);
clientRescueHistoryRoutes.get('', ensureAuthIsValid_middleware_1.default, rescueHistory_controllers_1.listRescueHistoryForClientController);
clientRescueHistoryRoutes.delete('/:id', ensureAuthIsValid_middleware_1.default, rescueHistory_controllers_1.deleteRescueHistoryForClientController);