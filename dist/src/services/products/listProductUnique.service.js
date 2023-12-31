"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductUniqueService = void 0;
const data_source_1 = require("../../data-source");
const errors_1 = require("../../errors");
const entities_1 = require("../../entities");
const products_schemas_1 = require("../../schemas/products.schemas");
const listProductUniqueService = (pubId) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = data_source_1.AppDataSource.getRepository(entities_1.Product);
    const findProducts = yield productRepository.findOne({
        where: {
            pub: {
                id: pubId
            },
        },
        relations: {
            pub: true
        }
    });
    if (!findProducts) {
        throw new errors_1.AppError('Produto não encontrado', 404);
    }
    const products = products_schemas_1.productsSchemaResponse.parse(findProducts);
    return products;
});
exports.listProductUniqueService = listProductUniqueService;
