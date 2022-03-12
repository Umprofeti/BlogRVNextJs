import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Destino } from "./Destino";
import {SizeWindow} from '../helpers/getSizeWindow';
export const Destinos = (props)=> {

    let items = []

    const responsive = {
        desktop:{
            breakpoint: {max: 1920, min: 1280},
            items: 5
        },
        tablet:{
            breakpoint: {max: 1024, min: 464},
            items: 3
        },
        mobile:{
            breakpoint: {max: 464, min: 0},
            items: 2
        }
    }

    if(props && props.props){
        props.props.edges.map((post, key)=>{
            return items = [...items, <Destino props={post.node} key={key}/>]
        })
    }


    return(
        <div className="xl:px-9 px-2 mt-6">
            <h4 className='font-Volkhov text-left text-[1.3rem] px-2 mb-6 xl:px-6 xl:text-[1.9rem] '>destinos</h4>
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
                itemClass={`!w-[20vw] !snap-x`}
                >
                    {items}
                </Carousel>
            : 
            <Carousel
                responsive={responsive} 
                infinite={true} 
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                showDots={false}
                autoPlay={true}
                arrows={false}
                centerMode={true}
                itemClass={`!w-[50vw] !snap-x`}
            >
                {items}
            </Carousel>
            }
        </div>
    );

}