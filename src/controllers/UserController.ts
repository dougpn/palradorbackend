import { Request, Response } from "express";

import User from "../schemas/User";

class UserController {
  public async login(req: Request, res: Response) {
    const tuser = req.body.email;
    const tsenha = req.body.password;

    User.find({ email: tuser, password: tsenha }, { nome: 1 })
      .then((data) => {
        if (data.length === 0)
          res.status(404).send({ message: "Deu ruim " + tuser });
        else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Eita rapaz" + tuser });
      });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();
