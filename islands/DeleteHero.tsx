import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import axios from "npm:axios";

type deleteProps = {
    name: string,
}

export const DeleteHero: FunctionComponent<deleteProps> = (props) => {

    const {name} = props;
    const [creator, setCreator] = useState<string> ("");
    const [message, setMessage] = useState<string> ("");

    const deleteHero = async () => {
        //llamo a la api de la carpeta de rutas api
        console.log("a");
        const response = await axios.delete(`/api/DeleteHeroe`, {data: {
            name: name,
            creator: creator,
        }});
        
        if(response.status === 204){
            setMessage("Se ha borrado el heroe")
        }
        
    }

    return(
        <div>
            <input type = "text" id = "creator" name = "creator" placeholder={"Creador"} onInput={(c) => setCreator(c.currentTarget.value)}/>
            <button onClick = {deleteHero}>Delete</button>
            {message !== "" && <div>{message}</div>}
        </div>
        
    )
}