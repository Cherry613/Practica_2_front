import { FunctionComponent } from "preact";
import {Heroe} from "../types.ts"
import HeroComp from "./Hero.tsx";

type HeroesProps ={
    data : Heroe[];
}


const Heroes: FunctionComponent<HeroesProps> = (props) => {
    const {data} = props
    return (
        <div class = "heroes">
           {data.map((hero) => <HeroComp name = {hero.name} image = {hero.image} sound = {hero.sound}/>)} 
        </div>
    )
}

export default Heroes;