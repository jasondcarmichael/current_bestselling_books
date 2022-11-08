import Carousel from 'better-react-carousel'

export default function Home (props) {

    console.log(props)

    // let fictionImg = props.books[0].book_image
    // console.log(fictionImg)
    // let nonfictionImg = props.nonfiction[0].book_image
    // let childrensImg = props.pictureBooks[0].book_image

    if (!props.books || !props.nonfiction || !props.pictureBooks) {
        return <h2> Loading please wait... </h2>
    } else {
        return (
            <Carousel cols={2} rows={1} gap={10} loop>

                {
                 props.books.map((book) => (
                    <Carousel.Item>
                    <img width="50%" src="book[0].book_image" />
                    </Carousel.Item>

                ))  
                }
            </Carousel>
           

        
            //     <img width="100%" src="props.nonfiction[0].book_image" />
            // <Carousel.Item>

            // </Carousel.Item>
            //     <img width="100%" src="props.pictureBooks[0].book_image" />
            // <Carousel.Item> */}

            // {/* </Carousel.Item> */}
        )
    }
}