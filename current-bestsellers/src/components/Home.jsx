import Carousel from 'better-react-carousel'
import { useEffect, useState } from 'react'

export default function Home (props) {

    console.log(props)

    const fiction = props.books
    const fiction1 = fiction.find(({rank}) => rank === 1)
    console.log(fiction1)

    const fiction2 = props.books
    const fiction2a = fiction2.find(({rank}) => rank === 2)
    console.log(fiction2a)

    const fiction3 = props.books
    const fiction3a = fiction3.find(({rank}) => rank === 8)
    console.log(fiction3a)

    const nonfiction = props.nonfiction
    const nonfiction1 = nonfiction.find(({rank}) => rank === 3)
    console.log(nonfiction1)

    const nonfiction2 = props.nonfiction
    const nonfiction2a = nonfiction2.find(({rank}) => rank === 5)
    console.log(nonfiction2a)

    const nonfiction3 = props.nonfiction
    const nonfiction3a = nonfiction3.find(({rank}) => rank === 12)
    console.log(nonfiction3a)

    const childrens = props.pictureBooks
    const childrens1 = childrens.find(({rank}) => rank === 8)
    console.log(childrens1)

    const childrens2 = props.pictureBooks
    const childrens2a = childrens2.find(({rank}) => rank === 5)
    console.log(childrens2a)

    const childrens3 = props.pictureBooks
    const childrens3a = childrens3.find(({rank}) => rank === 1)
    console.log(childrens3a)


    return fiction1, fiction2a, fiction3a, nonfiction1, nonfiction2a, nonfiction3a, childrens1, childrens2a, childrens3a ? (
        <div className="carousel-container"> 
            <Carousel cols={3} rows={1} gap={10} loop>
                <Carousel.Item className="carousel-item">
                    <img width="90%" src={fiction1.book_image} />
                    {/* <h2>{fiction1.title}</h2> */}
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img width="90%" src={fiction2a.book_image} />
                    {/* <h2>{fiction1.title}</h2> */}
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img width="90%" src={fiction3a.book_image} />
                    {/* <h2>{fiction1.title}</h2> */}
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img width="90%" src={nonfiction1.book_image} />
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img width="90%" src={nonfiction2a.book_image} />
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img width="90%" src={nonfiction3a.book_image} />
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img width="90%" src={childrens1.book_image} />
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img width="90%" src={childrens2a.book_image} />
                </Carousel.Item>

                <Carousel.Item className="carousel-item">
                    <img width="90%" src={childrens3a.book_image} />
                </Carousel.Item>

            </Carousel>
            </div>

    ) : null;
}

    
