import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import MenuBar from '../../components/MenuBar/MenuBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../containers/Cards/Cards';

import classes from './Layout.css';


class Layout extends Component {
    state = {
        data: [],
        hidden: [],
        searchTerm: ''
    }

    componentDidMount() {
        axios.get('http://localhost/react-cheat-sheet/json/get-contents.php')
            .then(res => {
                console.log(res.data.data);
                if(res.data.status === 'success') {
                    this.setState({
                        data: this.state.data.concat(res.data.data)
                    });
                }
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    onInputChangeHandler = (event) => {
        const searchTerm = event.target.value;
        this.setState({
            searchTerm: event.target.value
        });
        if(searchTerm !== '') {
            this.setState(prevState => ({
                hidden: []
            }));
            this.state.data.map(card => {
                if(card.heading.includes(searchTerm)) {
                    this.setState(prevState => ({
                        hidden: [...prevState.hidden, card.id]
                    }));
                }
                return true;
            });
        } else {
            this.setState(prevState => ({
                hidden: []
            }));
            // reappear all the cards;
        }
    }

    render() {
        return (
            <Aux>
                <MenuBar />
                <main className={classes.Content}>
                    <SearchBar placeholder="Search" content={this.state.data} change={this.onInputChangeHandler} />
                    <Cards data={this.state.data} hiddenOrNot={this.state.hidden} searchTerm={this.state.searchTerm} />
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;