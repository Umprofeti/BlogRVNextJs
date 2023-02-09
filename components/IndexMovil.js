import Iframe from 'react-iframe'
import { ContainerArticle } from './ContainerArticle/ContainerArticle';
import { Sections } from './Sections';
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
    const {data: dataPortada} = props.props.PortadaRV
    return(
        <div className='flex flex-col px-2 mt-9' key='desktop-section-posts'>
            <Sections props= {{dataDesct:DataDestActu, dataSect: DataSectActu, Category:Category.ACTUALIDAD}}/>
            <Sections props= {{dataDesct:DataDesctMarlo, dataSect:DataSectMarlo, Category:Category.MARLOPORTS}}/>
            <Sections props= {{dataDesct:DataDestNegocios, dataSect:DataSectNego, Category:Category.NEGOCIOS}}/>
            <Sociedad props= {{DataSectSociedad, dataPortada}}/>
        </div>
    );
}

export const IndexMovil = (props) => {

    const {DestActualidad, SectActu, DestMarlo,SectMarlo, SectNego, DestNegocios, SectSociedad, VideoRV, PortadaRV } = props.props;
    const dataVideo = VideoRV.data.videosRevista.nodes[0].videoDeLaRevista.video;
    return (
        <>
            <div className="flex flex-col px-1 overflow-hidden animate__animated animate__slideInLeft">
                <div className="py-6 border-dashed border-b-2 border-gray-500 w-full aspect-video">
                    <Iframe url={dataVideo } 
                                width="90%"
                                className="mx-auto h-[50vh]"
                        />
                </div>
                <div className='mt-6'>
                    <ContainerArticle props={props.props.PostSociedad.data} />
                    <ContainerArticle props={props.props.PostActualidad.data} />
                    <ContainerArticle props={props.props.PostNegocios.data} />
                    <ContainerArticle props= {props.props.PostMarlo.data} />
                </div>
                <div className='mt-6'>
                <DesktSect props={{DestActualidad, SectActu, DestMarlo, SectMarlo, SectNego, DestNegocios, SectSociedad, PortadaRV}}/>
                </div>
            </div>
        </>
    );

}