import Carousel from 'better-react-carousel'
import { useEffect, useState } from 'react'

export default function Home (props) {

    console.log(props)

    const fiction = props.books
    const fiction1 = fiction.find(({rank}) => rank === 1)
    console.log(fiction1)

    const nonfiction = props.nonfiction
    const nonfiction1 = nonfiction.find(({rank}) => rank === 3)
    console.log(nonfiction1)

    const childrens = props.pictureBooks
    const childrens1 = childrens.find(({rank}) => rank === 8)
    console.log(childrens1)


    return fiction1, nonfiction1, childrens1 ? (
        <div className="carousel-container"> 
            <Carousel cols={2} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img width="50%" src={fiction1.book_image} />
                    <h2>{fiction1.title}</h2>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={nonfiction1.book_image} />
                    <h2>{nonfiction1.title}</h2>
                </Carousel.Item>

                <Carousel.Item>
                    <img width="50%" src={childrens1.book_image} />
                    <h2>{childrens1.title}</h2>
                </Carousel.Item>

            </Carousel>
            </div>

    ) : null;
}

    
