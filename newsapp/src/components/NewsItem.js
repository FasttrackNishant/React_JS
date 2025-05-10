import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, desc, imageUrl, newsUrl } = this.props;
        return (

            < div >
                <div className="my-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={!imageUrl ? "https://images.livemint.com/img/2022/09/24/600x338/26de40aa-fb8b-11eb-9351-32be236c0b91_1630581868515_1663984121006_1663984121006.jpg" : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{desc}...</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
