import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

const Form :FunctionComponent = () => {

    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [sound, setSound] = useState<string>("");
    const [creator, setCreator] = useState<string>("");
    const [error, setError] = useState<string>("");

    //hacer funcion q saque errores segun lo que falte como en la practica aquella del profe
    const faltanDatos = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const errorMsg: string[] = [];

        if(name === "") {
            errorMsg.push("You must provide a name");
        }
        if(image === ""){
            errorMsg.push("You must provide an image url");
        }
        if(sound === ""){
            errorMsg.push("You must provide an sound url");
        }
        if(creator === ""){
            errorMsg.push("You must provide a creator");
        }

        if(errorMsg.length > 0) setError(errorMsg.join(" | "));
        else{
            setError("");
            e.currentTarget.submit();
        }
    }

    return (
        <div>
            <form class = "formAdd" action ="/addHeroe" method="POST" onSubmit={faltanDatos}>
                <h1>Introduce los datos del heroe</h1>
                <div> 
                   <input class = "inputAdd" type="text" id="name" name="name"
                    placeholder={"Nombre"}
                    onFocus={() => setError("")}
                    onInput={(p) => setName(p.currentTarget.value)}/>                    
                </div>
                <div>
                   <input class = "inputAdd" type="text" id="image" name="image"
                   placeholder={"Imagen"}
                   onFocus={() => setError("")}
                   onInput={(p) => setImage(p.currentTarget.value)}/>                    
                </div>
                <div> 
                   <input class = "inputAdd" type="text" id="sound" name="sound"
                   placeholder={"Sonido"}
                   onFocus={() => setError("")}
                   onInput={(p) => setSound(p.currentTarget.value)}/>                    
                </div>
                <div>
                   <input class = "inputAdd" type="text" id="creator" name="creator"
                   placeholder={"Creador"}
                   onFocus={() => setError("")}
                   onInput={(p) => setCreator(p.currentTarget.value)}/>                    
                </div>
                <div>
                   <button class = "submit" type="submit" disabled = {error !== ""}>Submit</button> 
                </div>
                <div>
                    {error !== "" && <div class="error">{error}</div>}
                </div>
            </form>
        </div>
    )
}

export default Form;