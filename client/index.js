import React from 'react';
import ReactDOM from 'react-dom';
import ContentBlock from './ContentBlock';

import getAjaxData from './getAjaxData';


class ContentContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            data: {
                content: "Loading...",
                windowWidth: window.innerWidth
            } 
        };
    }

    changeWindowWidth(e) {
        this.setState({ data: {
            content: this.state.data.content,
            windowWidth: window.innerWidth
        } });
    }

    componentWillMount() {
        this.getData();
    }

    componentDidMount() {
        window.addEventListener('resize', this.changeWindowWidth.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.changeWindowWidth.bind(this));
    }

    getData() {
        getAjaxData((res) => {
            this.setState({ data: {
                content: res,
                windowWidth: this.state.data.windowWidth,
            }});
        });
    }

    render() {
        return (
            <ContentBlock data={this.state.data} />
        );
    }


}

const container = document.getElementById('content-container');

ReactDOM.render(<ContentContainer />, container);