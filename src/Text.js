import React, { Component } from 'react';

import List from './List';

import './Text.css';

class Text extends Component {
    constructor(props) {
        super(props);


        this.state = {
            items: []
        };


        this.addItem = this.addItem.bind(this);
    }


    addItem(e) {
        if (this._inputElement.value !== "") {

            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState({


                items: this.state.items.concat(newItem)

            });

        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault();
    }


    render() {
        return (

            <React.Fragment>
                <h2 >To Do List</h2>
                <div className="textMain">

                    <div className="header">
                        <form onSubmit={this.addItem}>
                            <input ref={(a) => this._inputElement = a} placeholder="enter text">

                            </input>
                            <button type="submit">+</button>
                        </form>

                    </div>
                    <List entries={this.state.items} />
                </div>

            </React.Fragment>
        );
    }
}

export default Text;