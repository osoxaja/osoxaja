import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import lakeImg from '../assets/lake.jpg';
import ntownImg from '../assets/ntown.jpg';
export default class CarouselBox extends Component {
    render(){
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                       ClassName="d-block w-100"
                       src={ lakeImg }
                       alt="Lake"                   
                    />
                    <Carousel.Caption>
                        <h3>Lake Image</h3>
                        <p>This lake beautifull isn't it?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                       ClassName="d-block w-100"
                       src={ ntownImg }
                       alt="Town"                   
                    />
                    <Carousel.Caption>
                        <h3>Town Image</h3>
                        <p>This town beautifull isn't it?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                       ClassName="d-block w-100"
                       src={ lakeImg }
                       alt="Lake"                   
                    />
                    <Carousel.Caption>
                        <h3>Lake Image</h3>
                        <p>This lake beautifull isn't it?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }

 }
