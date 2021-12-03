import { Request, Response } from "express";

import Posts from "../schemas/Posts";

class PostsController {
  public async findpost(req: Request, res: Response) {

    Posts.find({}, "nome text createdAt")
      .then((data) => {
        if (data.length === 0)
          res.status(404).send({ message: "Deu ruim " });
        else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Eita rapaz" });
      });
  }

  public async createpost(req: Request, res: Response): Promise<Response> {
    const post = await Posts.create(req.body);
    return res.json(post);
  }
  public async editpost(req: Request, res: Response) {
    const id = req.body._id;
    const text = req.body.text;

    Posts.findOneAndUpdate({_id: id}, {$set: {text:text}} , function(err, result){
      if(err){
        res.send(err);
      } else {
        res.json(result);
      }
    })
  }
  public async deletepost(req: Request, res: Response) {
    const id = req.body._id;

    Posts.deleteOne( {_id: id}, function(err){
      if(err){
        res.send(err);
      }
    })
  }
}
  

export default new PostsController();
