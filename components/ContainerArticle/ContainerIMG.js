import PortadaSociedad from '../../public/portada.svg';
import  Link  from 'next/link';
export const ConatinerIMG = () => {
  return(
    <Link href='https://revista.rendezvouscorp.com/'>
      <div className='w-[100vw] xl:w-[30vw] xl:h-[82vh] h-[80vh] relative z-10 after:content-[""] after:absolute after:top-0 after:left-0 after:w-[100vw] xl:after:w-[30vw] after:h-full after:z-0 after:bg-gradient-to-t after:from-black after:to-transparent mb-6 laptopL:after:w-[30vw] after:object-cover'>
            <img src={PortadaSociedad.src} alt="Portada-Sociedad" className='z-0 object-cover xl:h-[82vh] h-[80vh] w-[100vw] xl:w-[30vw]' />
            <p className='text-white text-center text-[1.3rem] absolute top-[60vh] z-20 px-6 font-Volkhov'>VISITA NUESTRA PRIMERA EDICION DE LA REVISTA</p>
      </div>
    </Link>
  );
};
