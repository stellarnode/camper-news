import React from 'react';

export default class Post extends React.Component {

    render() {

        let data = this.props.data;
        let date = new Date(data.timePosted);
        date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        return (
                <div className="post-block">
                  <div className="avatar-area">
                    <a href={ data.link } className="feature-link" target="_blank">
                      <div className="avatar">
                        <div className="overlay-post"><i className="icono-plus"></i></div>
                        <img src={ data.author.picture } className="img-responsive" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="lead-area-post">
                    <div className="info-area">
                      <div className="date">{date + " | " + data.author.username}</div>
                      <div className="upvotes"><i className="fa fa-heart"></i><span className="number"> { data.rank }</span></div>
                    </div>
                    <div className="title-area">
                      <a href={ data.link } className="title-link" target="_blank"><h6 className="title-post">{ data.headline }</h6></a>
                    </div>
                  </div>
                </div>
        );
    }


}