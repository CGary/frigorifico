import express from "express";
import { execPromise, verifyJsonWebToken } from "../tools";
import { login, resetpass, setpass, changepass } from "./actions";

//exportacion del router de express
const router = express.Router();

router.post("/login", (req, res) => execPromise(login, req.body, res));

router.post("/resetpass", (req, res) => execPromise(resetpass, req.body, res));

// ruta que realiza la validación para hacer uso de los metodos dentro de logged
router.use("/logged/:ruta", (req, res, next) => {
  verifyJsonWebToken(req.headers["authorization"])
    .then((jwt) => {
      res.jwt = jwt;
      next();
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/logged/setpass", (req, res) =>
  execPromise(setpass, req.body, res)
);

router.post("/logged/logout", (req, res) =>
  res.status(200).json({
    icLogin: false,
  })
);

router.post("/logged/changepass", (req, res) =>
  execPromise(changepass, req.body, res)
);

export default router;
