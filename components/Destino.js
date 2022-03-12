import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
export const Destino = (props) => {
    const { descripcion, link, puntuacion} = props.props.destinocampo
    const {id:idImg, mediaItemUrl, title: titleImg} = props.props.featuredImage.node
    const {id, title} = props.props

    /* 0.1-0.5 media estrella
       0.6-1 Una estrella
       1.1-1.5 Una estrella y media
       1.6-2 Dos estrellas
       2.1-2.5 Dos Estrellas y media
       2.6-3 Tres estrellas
       3.1-3.5 Tres estrellas y media
       3.6-4 Cuatro estrellas
       4.1-4.5 cuatro estrellas y media
       4.6-5 Cinco estrellas    
    */

    const iconStars = (puntuacion) => {
        if(puntuacion === 0){
            return (<span className='text-[#ffbc00]'>
                <FontAwesomeIcon icon={faStar}/> 
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/> 
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </span>)
        }
        if(puntuacion <= 0.5 && puntuacion > 0){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarHalf}/> 
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            );
        }
        if(puntuacion <= 1 && puntuacion > 0.5){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            );
        }
        if(puntuacion <= 1.5 && puntuacion > 1){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStarHalf}/> 
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            );
        }
        if(puntuacion <= 2 && puntuacion > 1.5){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            );
        }
        if(puntuacion <= 2.5 && puntuacion > 2){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStarHalf}/>
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            );
        }
        if(puntuacion <= 3 && puntuacion > 2.5){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStarSolid} /> 
                    <FontAwesomeIcon icon= {faStarSolid} />
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            );
        }
        if(puntuacion <= 3.5 && puntuacion > 3){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStarSolid}/>
                    <FontAwesomeIcon icon={faStarHalf}/> 
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            );
        }
        if(puntuacion <= 4 && puntuacion > 3.5){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStarSolid}/>
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            );
        }
        if(puntuacion <= 4.5 && puntuacion > 4){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStarSolid}/>
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStarHalf}/>
                </span>
            );
        }
        if(puntuacion <= 5 && puntuacion > 4.5){
            return(
                <span className='text-[#ffbc00]'>
                    <FontAwesomeIcon icon={faStarSolid} />
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStarSolid}/>
                    <FontAwesomeIcon icon={faStarSolid}/> 
                    <FontAwesomeIcon icon={faStarSolid}/>
                </span>
            );
        }
    }

  return (
    <a href={link} className='flex flex-col border-2 border-black max-w-[150px] max-h-[250px] mx-2 rounded-lg xl:max-h-[360px] snap-center xl:max-w-[250px]' key={id}>
        <img src={mediaItemUrl} alt={titleImg} key={idImg} className='mx-auto w-full max-h-[200px] aspect-[3/2] rounded-t-lg'/>
        <div className='flex flex-col font-Volkhov px-1 overflow-y-scroll scroll-bar mt-3 mb-3 '>
            <h5 className='text-center xl:text-[1.3rem]'>{title}</h5>    
            <span className='mt-2 xl:text-left text-[0.8rem] text-center xl:text-[1rem]'> {puntuacion} {iconStars(puntuacion)}</span>
            <p className='text-[0.8rem] mt-2 text-left px-3 xl:text-[1rem]'>{descripcion}</p>
        </div>
    </a>
  )
}
