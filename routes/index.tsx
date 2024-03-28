import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Heroes from "../components/Heroes.tsx";
import { Heroe } from "../types.ts";
import axios from "npm:axios"

export const handler: Handlers  = {
    GET: async (_: Request, ctx: FreshContext<unknown, Heroe[]>) => {

      //const response = await fetch("https://supermondongo.deno.dev/");
      const response = await axios.get<Heroe[]>("https://supermondongo.deno.dev/")
      if(!response){ 
        return new Response ("Error fetching heroes", {status:500});
      }
      //const data = await response.json();

      return ctx.render(response.data);  //data es un array de heroes

    },
}


export default function Home(props: PageProps) {
  return (
    <div>
      <Heroes data = {props.data} />
    </div>
  );
}
