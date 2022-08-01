import Carousel from "react-multi-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-multi-carousel/lib/styles.css";
import { Libro } from "./Libro";
import { SizeWindow } from "../helpers/getSizeWindow";
export const Libros = (props) => {
    let items = []

    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 463, min: 0 },
            items: 1
        }
    }

    if (props && props.props) {
        props.props.edges.map((post, key) => {
            return items = [...items, <Libro props={post.node} key={key}/>]
        })
    }

    return (
        <div className='py-3 xl:px-9 px-2'>
            <h4 className='font-Volkhov text-left text-[1.3rem] px-2 mb-6 xl:px-6 xl:text-[1.9rem]'>Libros</h4>
            {SizeWindow() > 1279 ?
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    showDots={false}
                    autoPlay={true}
                    arrows={false}
                    centerMode={true}
                    itemClass={`!w-[25vw] !mr-3 !snap-x`}
                >

                    {items}

                </Carousel>
                :
                <Carousel
                    responsive={responsive}
                    transitionDuration={500}
                    infinite={true}
                    autoPlay={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    showDots={false}
                    arrows={false}
                    sliderClass={`!flex !flex-row !justify-center`}
                    itemClass={`!sm-xl:!w-[94vw] !mr-3 !md:!w-[10vw] !snap-x`}
                >

                    {items}

                </Carousel>
            }
        </div>
    );

}