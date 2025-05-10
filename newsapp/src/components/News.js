import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Michael Blinn",
            "title": "Celtics reporter Amanda Pflugrad rips 'disgusting' Ime Udoka media speculation - New York Post ",
            "description": "Brad Stevens wasn’t alone in calling out the rampant speculation surrounding coach Ime Udoka’s suspension.",
            "url": "https://nypost.com/2022/09/23/celtics-reporter-rips-disgusting-ime-udoka-media-speculation/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/09/amanda-pflugrad-index.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-09-24T02:32:00Z",
            "content": "Brad Stevens called out the rampant speculation surrounding coach Ime Udoka’s suspension as “bulls–t” on Friday. \r\nHe wasn’t alone.\r\n“As a female of the Celtics organization, watching these last few … [+1397 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Janelle Ash",
            "title": "Taylor Swift turned down Super Bowl halftime offer: report - Fox News",
            "description": "Taylor Swift reportedly turned down the offer from the NFL to perform during the 2023 Super Bowl halftime show. The pop star reportedly wants to finish rerecording her first six albums.",
            "url": "https://www.foxnews.com/entertainment/taylor-swift-turned-down-super-bowl-halftime-offer-report",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Taylor_Swift.jpg",
            "publishedAt": "2022-09-24T02:02:39Z",
            "content": "Taylor Swift was reportedly asked to host the 2023 Super Bowl halftime show, but turned down the offer because the timing is not right.\r\nAccording to TMZ, Swift was approached by the NFL to host the … [+2614 chars]"
        }
    ]
    constructor() {

        super();
        console.log("this is constructor from the News Component");
        this.state =
        {
            articles: [],
            loading: false,
            page: 1,


        }

    }

    async componentDidMount() {
        console.log("cmd");
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ddc1426c15ca42d3912775d96024176a&page=1&pagesize=4";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })

    }

    handlePrevious = async () => {
        console.log("previous clicked");
        console.log(this.state.page);


        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ddc1426c15ca42d3912775d96024176a&page=${this.state.page - 1}&pagesize=4`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);



        this.setState(
            {
                page: this.state.page + 1
            })



    }
    handleNext = async () => {
        console.log("next clicked ")


        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ddc1426c15ca42d3912775d96024176a&page=${this.state.page + 1}&pagesize=4`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);



        this.setState(
            {
                page: this.state.page - 1
            })

    }

    render() {
        console.log("render")
        return (
            <div className="container my-3 py-3">
                <h2>News Monkey Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col md-4" key={element.url} >

                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" class="btn btn-success" onClick={this.handlePrevious}> &larr; Previous</button>
                        <button type="button" class="btn btn-danger" onClick={this.handleNext}>Next &rarr;</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default News
