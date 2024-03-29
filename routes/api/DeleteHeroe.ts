import { Handlers } from "$fresh/server.ts";


export const handler: Handlers = {
    DELETE: async (req: Request) => {
        const data = await req.json();
        
        console.log(data.name);

        const response = await fetch(`https://supermondongo.deno.dev/${data.name}`, 
            {method: "delete",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({creator: data.creator}),
            });

        return response;
    }
}