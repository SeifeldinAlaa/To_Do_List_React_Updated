import React, { Component } from 'react';


class List extends Component {
    createTexts(item) {
        return (
            <div>

                <li key={item.key}>{item.text}</li>

            </div>
        )
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTexts)

        return (

            <ul className="theList">
                {listItems}
            </ul>);

    }

}

export default List;