import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import {Heroe} from "../types.ts";
import Hero from "../components/Hero.tsx";


export const handler : Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        const url = new URL(ctx.url);
        const name = url.searchParams.get("name");      //cojo el nombre de la url (esta en la url porq es como lo devuelve el form)
        if(name === "") return ctx.render();    //si no hay nombre no tengo ningun personaje q devolver
        const response =  await axios.get<Heroe[]>(`https://supermondongo.deno.dev/${name}`)

         //debugger;
         if(!response){ 
            return new Response ("Error fetching heroes", {status:500});
          }
    
          //return ctx.render(response.data[0]);
          return ctx.render(response.data[0]);
    }
}

//el input se va al search params cuando hagamos el submit

const Page = (props: PageProps) => {
    return(
        <div>
            <form>
                <div>
                    <input type ="text" id="name" name="name" placeholder={"Introduce un nombre"} /> 
                    <button type="submit"> Buscar</button>
                </div>
                
                <div>
                    {props.data !== undefined && <Hero name = {props.data.name} image = {props.data.image} sound = {props.data.sound}/>}
                </div> 
            </form>
            
        </div>
    )
}

export default Page;