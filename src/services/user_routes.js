import express from "express";
import { User } from "../db/models/allModules.js";
import sequelize from "sequelize";
const { Op } = sequelize;
const userRouter = express.Router();

userRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await User.findAll({
        where: {
            ...(req.query.search && {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${ req.query.search }%` }, },
                    { lastName: { [Op.iLike]: `%${ req.query.search }%` } },
                    { email: { [Op.iLike]: `%${ req.query.search }%` } }
                ]
            }),
            ...(req.query.search && {
                age: {
                    [Op.between]: req.query.age.split(",")
                }
            }),
        },
      
    });
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await User.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

userRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });

      res.send(data[1][0]);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await User.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.send({ rows: data });
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default userRouter;
