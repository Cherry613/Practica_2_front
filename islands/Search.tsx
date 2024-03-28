//AL FINAL LO HICE EN EL SERVIDOR PQ NO QUIERE Q HAGAMOS UNA API DENTRO DE UNA API

import { useState } from "preact/hooks";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Heroe } from "../types.ts";
import axios from "npm:axios"
import Hero from "../components/Hero.tsx";

export const Search: FunctionComponent = () => {
    //va a cambiar el heroe que se muestre en la pagina + voy a necesitar un nombre q guardar del input 
    const [heroe, setHeroe] = useState<Heroe | undefined>();
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    debugger;
    //si no hay nombre, q haya un error
    const noNombre = () => {
        if(name === ""){
            setError("No se ha introducido ningun nombre");
        }
    }

    const buscarPersonaje = async (name) => {
        const response = await axios.get<Heroe[]>(`https://supermondongo.deno.dev/${name}`)

        if(!response){ 
            return new Response ("Error fetching heroes", {status:500});
          }

        const character = response.data.find((elem) => elem.name.toLowerCase() === name.toLowerCase())

        setHeroe(character);
        
        return heroe;
    }

    return(
        <div>
            <input type ="text" id="name" name="name" 
                   placeholder={"Introduce un nombre"} 
                   onFocus={() => setError("")}
                   onInput={(p) => setName(p.currentTarget.value)}
                   onBlur={() => noNombre()}>
            </input>
            <button type="submit" disabled = {error !== ""} onClick={() => buscarPersonaje(name)}>Buscar</button>
            <div>
                {error !== "" && error}
            </div>
            <div>
                {heroe !== undefined && <Hero name = {heroe.name} image = {heroe.image} sound = {heroe.sound}/>}
            </div>
        </div>
    )

}

