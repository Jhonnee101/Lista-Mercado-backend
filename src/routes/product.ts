import express from "express";
import { registerProductHandler } from "../handler/registerProduct";
import { listProductsHandler } from "../handler/listProducts";
import { deleteProductHandler } from "../handler/deleteProduct";
import { deleteAllProductsHandler } from "../handler/deleteAllProducts";

const productRouter = express.Router();

productRouter.post("/", registerProductHandler);
productRouter.delete("/:id", deleteProductHandler);

const productsRouter = express.Router();

productsRouter.get("/", listProductsHandler);
productsRouter.delete("/", deleteAllProductsHandler);

export { productRouter, productsRouter };
