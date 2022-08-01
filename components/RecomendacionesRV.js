import { Destinos } from './Destinos';
import { Entretenimiento } from './Entretenimiento';
import { Libros } from './Libros';



export const RecomendacionesRV = (props) => {
    console.log();
  return (
    <div className='my-1'>
        <h3 className='font-Metropolis text-black text-[1.3rem] md:text-[1.5rem] my-3 p-3 text-center xl:text-left xl:text-[3rem] xl:px-6'>RENDEZ-VOUS Te recomienda</h3>
        <Entretenimiento props= {props.props.Entretenimiento.data.entreteiminetos}/>
        <Libros props={props.props.Libros.data.libros}/>
        <Destinos props= {props.props.Destinos.data.hoteles}/>
    </div>
  )
}
