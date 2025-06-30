import {getTypeIconSrc} from './utils';

export default function PokemonTypes({types}) {
    return (
        <div className="types">
                        {types.map(({name}) => (
                            <div key={name} className={name}>
                                <img src={getTypeIconSrc(name)} />
                                <span>{name}</span>
                            </div>
        
                        ))} 
                        </div>
    )
}