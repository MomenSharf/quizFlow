import z from "zod";


const UserSchema = z.object({
  email: z.email().optional(),

})