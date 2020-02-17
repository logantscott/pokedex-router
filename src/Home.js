import React, { Component } from 'react';
import { Search } from './Search.js';
import { PokeList } from './PokeList.js';

export default class Home extends Component {

    state = { searchQuery: '' }

    handleOnSubmit = e => {
        

        this.props.history.push(this.state.searchQuery)
    }

    handleSearchText = e => {
        this.setState({searchQuery: e.target.value});
    }

    render() {
        return (
            <div>
                <Search handleOnSubmit={this.handleOnSubmit}
                searchQuery={this.state.searchQuery}
                handleSearchText={this.handleSearchText} />
                <PokeList searchQuery={this.state.searchQuery} />
            </div>
        )
    }
}
