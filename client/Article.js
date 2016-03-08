import React from 'react';

export default class Article extends React.Component {

    render() {
        let data = this.props.data;
        let date = new Date(data.timePosted);
        date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        return (
                <div className="article-block">
                  <a href={ data.link } className="feature-link" target="_blank">
                    <div className="feature">
                      <div className="overlay-article"><i className="icono-plus"></i></div>
                      <img src={ data.image } className="img-responsive" alt="" />
                    </div>
                  </a>
                  <div className="lead-area">
                    <div className="info-area">
                      <div className="date">{ date + " | " + data.author.username }</div>
                      <div className="upvotes"><i className="fa fa-heart"></i><span className="number"> { data.rank }</span></div>
                    </div>
                    <div className="title-area">
                      <a href={ data.link } className="title-link" target="_blank"><h4 className="title-article">{ data.headline }</h4></a>
                    </div>
                  </div>
                </div>
        );
    }


}