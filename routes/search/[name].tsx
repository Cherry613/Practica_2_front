import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import {Heroe} from "../../types.ts";
import Hero from "../../components/Hero.tsx";


export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown,Heroe>) => {
        const {name} = ctx.params;
        //debugger; 

        const response = await axios.get<Heroe[]>(`https://supermondongo.deno.dev/${name}`)

        const character = response.data.find((elem) => elem.name.toLowerCase() === name.toLowerCase())

        //debugger;
        if(!response){ 
          return new Response ("Error fetching heroes", {status:500});
        }
  
        //return ctx.render(response.data[0]);
        return ctx.render(character);
    }
}

const Page = (props: PageProps<Heroe>) => {
    const {name, image, sound} = props.data

    return (
        <div>
            <Hero name = {name} image = {image} sound = {sound}/>
        </div>
    )
}

export default Page;
