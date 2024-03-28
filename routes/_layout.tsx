import { PageProps } from "$fresh/server.ts";

const layout = (props: PageProps) => {
    const Component = props.Component;

    return(
        <div>
            <a href ="/addHeroe">Crear heroe</a>
            <a href = "/SearchHeroe"> Buscar heroe </a>
            <div>
                <Component/>
            </div> 
        </div>
       
    )
}

export default layout;