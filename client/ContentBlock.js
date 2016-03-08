import React from 'react';
import Column from './Column';
import Article from './Article';
import Post from './Post';

export default class ContentBlock extends React.Component {

    componentWillMount() {
        this.state = { data: this.props.data };
        this.buildColumns();
    }

    componentWillReceiveProps(newProps) {
        this.state = { data: newProps.data };
        this.buildColumns();
        // console.log(this.state.data.content[0]);
    }

    componentDidMount() {

    }

    buildColumns() {

        let width = this.state.data.windowWidth;
        let points = [0];
        let cols = [];

        if (width > 768 && width <= 992) {
            cols = [ [], [] ];
            points.push(15);
        } else if (width > 992) {
            cols = [ [], [], [] ];
            points = [0, 0, 0];
        }

        if (typeof this.state.data.content !== "object") {
            // console.log("it is not an array");
            this.state.cols = cols;
            return;
        }

        for (let i = 0; i < this.state.data.content.length; i++) {

            let item = this.state.data.content[i].image ? "Article" : "Post";

            let whereTo = points.indexOf(Math.min.apply(Math, points));

            if (whereTo === -1) whereTo = i % cols.length;

            switch(whereTo) {

                case 0:
                    cols[0].push(this.state.data.content[i]);
                    points[0] = (item === "Article") ? points[0] + 3 : points[0] + 1;
                    break;

                case 1:
                    cols[1].push(this.state.data.content[i]);
                    points[1] = (item === "Article") ? points[1] + 3 : points[1] + 1;
                    break;

                case 2:
                    cols[2].push(this.state.data.content[i]);
                    points[2] = (item === "Article") ? points[2] + 3 : points[2] + 1;
                    break;

                default:
                    cols[0].push(this.state.data.content[i]);
                    points[0] = (item === "Article") ? points[0] + 3 : points[0] + 1;
                    break; 

            }

        }

        this.state.cols = cols;

    }


    render() {

        return (
            <div key={Date.now()} className="row content-container">                
                {this.state.cols.map( (el, idx) => {
                    return (
                        <div id={"column" + idx + Date.now() } key={"column" + idx + Date.now() } class="col-md-4 col-sm-6 col-xs-12">
                            <Column key={idx + Date.now()} content={el} />
                        </div>
                    );
                })}

            </div>
        );
    }

}



