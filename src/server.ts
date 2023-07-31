import express, { Request, Response } from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { productRouter, productsRouter } from "./routes/product";
import { userRouter } from "./routes/user";
import { errorMiddleware } from "./middleware/errorMiddleware";

const application = express();

application.use(compression());
application.use(helmet());
application.use(cors());
application.use(express.json());

application.get('/healthcheck', (_req: Request, res: Response): void => {
  res.send('OK!')
})

application.use('/product', productRouter)
application.use('/products', productsRouter)
application.use('/user', userRouter)

application.use(errorMiddleware)

export default application
