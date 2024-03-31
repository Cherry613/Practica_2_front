import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../islands/Form.tsx";
import axios from "npm:axios";

type addHeroProps = {
    message: string,
    error: string
}

export const handler: Handlers = {
     
    POST: async (req: Request, ctx: FreshContext<unknown, addHeroProps>) => {
        const form = await req.formData();
        const data ={
            name: form.get("name") || undefined,
            image: form.get("image") || undefined,
            sound: form.get("sound") || undefined,
            creator: form.get("creator") || undefined,
        }

        const response = await axios.post<addHeroProps>("https://supermondongo.deno.dev/", {
            name: data.name,
            image: data.image,
            sound: data.sound,
            creator: data.creator,
        });

        if(response.status !== 201){
            return ctx.render({
                message: "",
                error: "No se ha podido crear el heroe"
            })
        }

        return ctx.render({
            message: "heroe creado",
            error: ""
        })

    }
}


const Page = (props: PageProps<addHeroProps>) => {
    const message = props.params.message
    const error = props.params.error

    return(
        <body class = "fondo-add">
            <div class = "add">
                <Form />
                <div>
                    {message !== "" && <div>{message}</div>}
                    {error !== "" && <div>{error}</div>}
                </div>
            </div>
        </body>
        
        
    )
}

export default Page;