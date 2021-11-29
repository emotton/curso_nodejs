import { Router } from "express";
import { getRepository } from "typeorm";
import Client from "../entity/Client";

const clientRouter = Router();

clientRouter.post("/", async (request, response) => {
  try {
    const repo = getRepository(Client);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log("err.message :>> ", err.message);
  }
});

clientRouter.get("/", async (request, response) => {
  response.json(await getRepository(Client).find());
});

clientRouter.delete("/", async (request, response) => {
  response.json(await getRepository(Client).delete(request.body.id));
});

clientRouter.put("/", async (request, response) => {

    let client = await getRepository(Client).findOne(request.body.id);
    if(client){
        client.name = request.body.name || client.name;
        client.cnpj = request.body.cnpj || client.cnpj;
        client = await getRepository(Client).save(client);
      response.json(client);
    } else {
      response.json({ success: false})
    }
  });

export default clientRouter;
