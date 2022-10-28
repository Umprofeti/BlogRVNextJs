import Iframe from 'react-iframe'
import { Sections } from './Sections';
import { ConatinerLoading } from "./LoadingComponents/ContainerLoading";
import { ContainerArticle } from "./ContainerArticle/ContainerArticle";
import { Sociedad } from './Sociedad';

const DesktSect = (props) => {

    const Category = {
        ACTUALIDAD:'ACTUALIDAD',
        NEGOCIOS:'NEGOCIOS',
        MARLOPORTS:'MARLOPORTS'
    
    }

    const {data: DataDestActu} = props.props.DestActualidad;
    const {data: DataSectActu} = props.props.SectActu; 
    const {data: DataDesctMarlo} =  props.props.DestMarlo;
    const {data: DataSectMarlo} = props.props.SectMarlo;
    const {data: DataDestNegocios} =  props.props.DestNegocios;
    const {data: DataSectNego} = props.props.SectNego;
    const {data: DataSectSociedad} = props.props.SectSociedad;
    return(
        <div className='flex flex-col px-9 mt-9' key='desktop-section-posts'>
            <Sections props= {{dataDesct:DataDestActu, dataSect: DataSectActu, Category:Category.ACTUALIDAD}}/>
            <Sections props= {{dataDesct:DataDesctMarlo, dataSect:DataSectMarlo, Category:Category.MARLOPORTS}}/>
            <Sections props= {{dataDesct:DataDestNegocios, dataSect:DataSectNego, Category:Category.NEGOCIOS}}/>
            <Sociedad props= {DataSectSociedad}/>
        </div>
    );
}

export const IndexDesktop = (props) => {
    const {PostMarlo, PostNegocios,PostSociedad, PostActualidad, DestActualidad, SectActu, DestMarlo,SectMarlo, SectNego, DestNegocios, SectSociedad, VideoRV } = props.props;
    const {data:DataMarlo, loading:LoadingMarlo} = PostMarlo;
    const {data: DataNegocios, loading:LoadingNegocios} =  PostNegocios;
    const {data: DataSociedad, loading: LoadingSociedad} = PostSociedad;
    const {data: DataActualidad, loading: LoadingActualidad} = PostActualidad;
    const dataVideo = VideoRV.data.videosRevista.nodes[0].videoDeLaRevista.video;
    

    return(
        <>
            <div className='flex flex-col mt-9 bg-white'>
                <div className='flex flex-row mt9 bg-white'>
                    <div className='border-r-2 border-black w-[25%] pl-6'>
                        {LoadingSociedad ? <ConatinerLoading/>: <ContainerArticle props={DataSociedad} key='post-sociedad'/>}
                        {LoadingActualidad ? <ConatinerLoading/>: <ContainerArticle props={DataActualidad} key='post-actualidad' />}
                    </div>
                    <div className='my-auto w-[50%] aspect-video'>
                        <Iframe url={dataVideo}  
                                width="90%"
                                className="mx-auto h-[50vh]"
                        />
                    </div>
                    <div className='border-l-2 border-black w-[25%] pr-6'>
                        {LoadingNegocios? <ConatinerLoading/>: <ContainerArticle props={DataNegocios} key='post-negocio' /> }
                        {LoadingMarlo? <ConatinerLoading/>: <ContainerArticle props={DataMarlo} key='post-marloports'/> }
                    </div>
                </div>
            </div>
            <DesktSect props={{DestActualidad, SectActu, DestMarlo, SectMarlo, SectNego, DestNegocios, SectSociedad}}/>
        </>
    );


}