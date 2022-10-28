import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Entretenimiento = (props)=> {
    let items = []

    const responsive = {
        desktop:{
            breakpoint: {max: 1920, min: 1280},
            items: 8
        },
        tablet:{
            breakpoint: {max: 1024, min: 464},
            items: 6
        },
        mobile:{
            breakpoint: {max: 464, min: 0},
            items: 3
        }
    }
    

    if(props && props.props.edges){
        props.props.edges.map((post)=> {
            const link = post.node.excerpt;
            const {id,mediaItemUrl, title}= post.node.featuredImage.node;
            const idItem = post.node.id;
            let regexp = new RegExp(/[<p>](?:[Aa-zZ])?[</p>]/g);
            const newLink = link.replace(regexp,' ');
            items= [...items, <a href={newLink} key={idItem} ><img src={mediaItemUrl} key={id} alt={title} className='rounded-full w-[100%] xl:w-[90%] p-1 border-2 border-[#ad8d32] hover:border-[black] hover:animate-pulse ml-0 mr-3'/></a>];
            return(items);
        })
    } 

    return(
        <div className='my-3 xl:px-9 px-2'>
            <h4 className='font-Volkhov text-left text-[1.3rem] px-2 mb-6 xl:px-6 xl:text-[1.9rem] '>Entrenenimiento</h4>
            <Carousel responsive={responsive} 
                infinite={true} 
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                showDots={false}
                autoPlay={true}
                arrows={false}
        >
            {items}
        </Carousel>
        </div>
        
    );

}