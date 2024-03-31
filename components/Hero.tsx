import { FunctionComponent } from "preact";
import { DeleteHero } from "../islands/DeleteHero.tsx";

type HeroProps = {
    name: string,
    image: string,
    sound: string,
}

const Hero: FunctionComponent<HeroProps> = (props) => {
    const {name, image, sound} = props
    return (
        <a  href={`/search/${name}`}>
            <div class = "heroe">
                <h3>{name}</h3>
                <image src={image} alt={"imagen del heroe: " + name} class="heroImage"/>
                <audio controls> <source src={sound} /> </audio>

                <DeleteHero name = {name}/>
                <input type = "text" value={name} name = "name" hidden = {true}/>
            </div>
        </a>
        
    )
}

export default Hero;