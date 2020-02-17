import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleOnSubmit}>
                    <label>Search:</label>
                    <input type="text"
                    value={this.props.searchQuery}
                    onChange={this.props.handleSearchText}/>
                    <button>Search!</button>
                </form>
            </div>
        )
    }
}
