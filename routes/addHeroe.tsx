import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../islands/Form.tsx";
import axios from "npm:axios";

type addHeroProps = {
    message: string,
    error: string
}

export const handler: Handlers = {
     
    POST: async (req: Request, ctx: FreshContext<unknown, string>) => {
        const form = await req.formData();

        const name = form.get("name")
        const image = form.get("image")
        const sound = form.get("sound")
        const creator = form.get("creator")

        debugger;

        const data ={
            name: name,
            image: image,
            sound: sound,
            creator: creator,
        }

        const response = await axios.post("https://supermondongo.deno.dev/", {
            name: data.name,
            image: data.image,
            sound: data.sound,
            creator: data.creator,
        });

        if(!response){
            return new Response ("Error al añadir un heroe", {status: 500})
        }
        
        return ctx.render("Heroe creado");

        /*if(response.status !== 201){
            return ctx.render({
                message: "",
                error: "No se ha podido crear el heroe"
            })
        }

        return ctx.render({
            message: "heroe creado",
            error: ""
        })*/

    }
}


const Page = (props: PageProps) => {
    const message = props.params.message
    const error = props.params.error

    return(
        <body class = "fondo-add">
            <div class = "add">
                <Form />
                <div>
                    <p>{props.data}</p>
                </div>
            </div>
        </body>
        
        
    )
}

export default Page;