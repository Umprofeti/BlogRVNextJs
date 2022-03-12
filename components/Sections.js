import { ConatinerArticle4 } from "./ContainerArticle/ContainerArticle4";
import {ContainerArticle3} from "./ContainerArticle/ContainerArticle3";
export const Sections = (props) => {
    const {dataDesct, dataSect, Category} = props.props;
    let itemsToRender;

    if(dataSect && dataSect.edges){
        itemsToRender = dataSect.edges.map((post, key)=> {
            return <ConatinerArticle4 props={post.node} key={key}/>
        })
    }
    
        
    return(
        <div className='flex flex-col' key={`container-section-${Category}`}>
            <div className='flex flex-row items-center justify-between' key={`section-${Category}`}>
                <p className='font-Metropolis text-[0.9rem] hidden md:block'>@rendezvousmagazinel</p>
                <div className='border border-black w-full hidden md:block'></div>
                <span className='bg-black px-2 py-1 font-Volkhov text-white text-left w-[100%] lg:w-[40%]'>{Category}</span>
            </div>
            <div className='flex flex-col'>
                <ContainerArticle3 props={dataDesct}/>
                <div className='flex flex-col lg:grid lg:grid-rows-1 lg:grid-flow-col lg:gap-4'>
                    {itemsToRender}
                </div> 
            </div> 
        </div>
    );


}