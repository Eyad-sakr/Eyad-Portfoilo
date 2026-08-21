import z from "zod";
export const GetInTouchSehema = z.object({
    name:z.string().min(2,{message:"Enter A Vailed Name"}).max(15,{message:"Enter A Vailed Name"}),
    email:z.email(),
    message:z.string().min(5,{message:"Enter Vailed Message"}).max(100,{message:"Enter Vailed Message"})
})