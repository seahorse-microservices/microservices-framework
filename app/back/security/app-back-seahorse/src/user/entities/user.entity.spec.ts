import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { User } from "./user.entity";



describe("User Entity", () => {
  
  it("should create a new instance without validation errors", async () => {
    const data : User = new User();
    data.id = 1;
    data.email = "pepe@mail.com";
    data.name = "Pepe";
    data.password = "changeme";


    const userEntity = plainToInstance(User, data);
    const errors = await validate(userEntity);
   

    expect(errors.length).toBe(0);
  });

});