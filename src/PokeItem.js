import React, { Component } from 'react'

export class PokeItem extends Component {
    render() {
        return (
            <li className="grid-item" style={{borderColor:this.props.pokemon.color_1}}>
            <div className="itemHeader">
                <h3>{this.props.pokemon.pokemon}</h3>
                <h3>#{ String(this.props.pokemon.id.toString()).padStart(3, '0') }</h3>
            </div>
            <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
            <p>
                <span className="bodydetail">
                    height: {(this.props.pokemon.height /10).toFixed(1)} m
                </span>
                <span className="bodydetail">
                    weight: {(this.props.pokemon.weight / 10).toFixed(1)} kg
                </span>
            </p>
            {/* <p>Types:</p> */}
            <p>
                <span style={{backgroundColor:this.props.pokemon.color_1 === 'NA' ? 'transparent' : this.props.pokemon.color_1}}>
                    {this.props.pokemon.type_1 === 'NA' ? '' : this.props.pokemon.type_1}
                </span>
                <span style={{backgroundColor:this.props.pokemon.color_2 === 'NA' ? 'transparent' : this.props.pokemon.color_2}}>
                    {this.props.pokemon.type_2 === 'NA' ? '' : this.props.pokemon.type_2}
                </span>
            </p>
            {/* <p className="abilities">
                <span>{this.props.pokemon.ability_1 !== 'NA' ? this.props.pokemon.ability_1 : ''}</span>
                <span>{this.props.pokemon.ability_2 !== 'NA' ? this.props.pokemon.ability_2 : ''}</span>
                <span>{this.props.pokemon.ability_hidden !== 'NA' ? this.props.pokemon.ability_hidden + '(hidden)' : ''}</span>
            </p> */}
            <table>
                <thead>
                    <tr>
                        <th>hp</th>
                        <th>atk</th>
                        <th>def</th>
                        <th>sp atk</th>
                        <th>sp def</th>
                        <th>speed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.pokemon.hp}</td>
                        <td>{this.props.pokemon.attack}</td>
                        <td>{this.props.pokemon.defense}</td>
                        <td>{this.props.pokemon.special_attack}</td>
                        <td>{this.props.pokemon.special_defense}</td>
                        <td>{this.props.pokemon.speed}</td>
                    </tr>
                </tbody>
            </table>
      </li>
        )
    }
}
