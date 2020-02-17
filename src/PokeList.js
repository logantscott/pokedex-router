import React, { Component } from 'react';
import { PokeItem } from './PokeItem.js';
import { getPokedex } from './pokedex-api.js';;

export class PokeList extends Component {
    state = { pokedex: [] }

    async componentDidMount() {
        const data = await getPokedex();
        
        if (data.body.results) {


        this.setState({ pokedex: data.body.results })
            
        }
    }
    
    render() {
        return (
            <ul className="grid-container">
                {this.state.pokedex.map(pokemon => (
                    <PokeItem pokemon={pokemon} />
                ))}
            </ul>
        )
    }
}
