import express from "express";
import sequelize, { testDB } from "./db/testDB.js"
import cors from "cors"
import productRouter from './services/product_routes.js'
import reviewRouter from './services/review_routes.js'
import userRouter from "./services/user_routes.js";
import categoryRouter from './services/category_routes.js'



const server = express();

server.use(cors());
server.use(express.json())


server.use('/products', productRouter)
server.use('/reviews', reviewRouter)
server.use('/categories', categoryRouter)
server.use('/users', userRouter)

server.listen(process.env.PORT || 3001, async () => {
    console.log("server is running on port ", process.env.PORT || 3001);
    await testDB();
    sequelize
      .sync()
      .then(() => {
        console.log("synchronised");
      })
      .catch((e) => {
        console.log(e);
      });
  });