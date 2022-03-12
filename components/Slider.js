import AliceCarousel from "react-alice-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Slider = (props)=> {

    let items = []

    const responsive = {
        desktop:{
            breakpoint: {max: 1920, min: 1280},
            items: 1
        },
        tablet:{
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile:{
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    }


    const ImgSlider = () => {
        props.props.data.edges.map((slider)=> {
            const {mediaItemUrl, title} = slider.node.featuredImage.node;
            const link = slider.node.excerpt;
            let regexp = new RegExp(/[<p>](?:[Aa-zZ])?[</p>]/g);
            const id= slider.node.id; 
            const newLink = link.replace(regexp,' ')
            items = [...items,<a key={id} href={newLink}><img src={mediaItemUrl} alt={title} /></a>];
            return (items); 
        });
    }
    ImgSlider();
    return(
        
        <Carousel responsive={responsive} 
                infinite={true} 
                transitionDuration={1000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                showDots={false}
                autoPlay={true}
                arrows={false}
                customTransition={`transform 1000ms ease-in-out`}
        >
            {items}
        </Carousel>
        
        
    );
}