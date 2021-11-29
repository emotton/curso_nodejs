import { Router } from "express";
import { getRepository } from "typeorm";
import User from "../entity/User";

const userRouter = Router();

userRouter.post("/", async (request, response) => {
  try {
    const repo = getRepository(User);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log("err.message :>> ", err.message);
  }
});

userRouter.get("/", async (request, response) => {
  response.json(await getRepository(User).find());
});

userRouter.delete("/", async (request, response) => {
  response.json(await getRepository(User).delete(request.body.id));
});

userRouter.put("/", async (request, response) => {

  let user = await getRepository(User).findOne(request.body.id);
  if(user){
    user.firstName = request.body.firstName || user.firstName;
    user.lastName = request.body.lastName || user.lastName;
    user.age = request.body.age || user.age;
    user = await getRepository(User).save(user);
    response.json(user);
  } else {
    response.json({ success: false})
  }
});

export default userRouter;
