import React from 'react';
import Article from './Article';
import Post from './Post';

export default class Column extends React.Component {


    createItem(data, idx) {
        if (data.image) {
            return (
                <Article data={data} key={ idx + Date.now() } />
            );
        } else {
            return (
                <Post data={data} key={ idx + Date.now() } />
            );
        }
    }

    render() {

        let content = this.props.content;

        return (
            <div>
                { content.map(this.createItem) }
            </div>
        );
    }

}