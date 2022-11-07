import useSlider from "../hooks/useSlider"

export default function Slider () {
    const slideImage =
    const slideText =
    const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
        <div className="slider" ref={(slideImage)}>
            <div className="slider-content" >
                <button onClick={goToPreviousSlide} className="slider-btn-left">
                    <i className="fa-angle-left"></i>
                </button>
                <div className="slider-feature">
                    <h1 className="feature-title"> Bestseller </h1>
                    <p ref={slideText} className="feature-text"></p>
                    <button className="feature-btn"> Get Started </button>
                </div>
                <button onClick={goToNextSlide} className="slider-btn-right">
                    <i className="fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}