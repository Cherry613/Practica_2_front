import { PageProps } from "$fresh/server.ts";

const layout = (props: PageProps) => {
    const Component = props.Component;

    return(
        <div>
            <div class = "layout">
                <a href ="/addHeroe">Crear heroe</a>
                <a href ="/">Todos los heroes</a>
                <a href = "/SearchHeroe"> Buscar heroe </a>
            </div>
            <Component/>
        </div>
        
       
    )
}

export default layout;