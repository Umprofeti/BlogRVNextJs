import { ContainerArticle2 } from './ContainerArticle/ContainerArticle2';
import PortadaSociedad from '../public/portada.svg';
import  Link  from 'next/link';
export const Sociedad = (props) => {
    let itemsToRender;
    const data = props;
    
    if(data.props && data.props.edges ){
        itemsToRender = data.props.edges.map((post)=> {
            return <ContainerArticle2 props={post.node} key={post.node.id}/>
        })
    }
    
  return (
    <div className='flex flex-col mt-6'>
        <div className='flex flex-row items-center justify-between'>
            <p className='font-Metropolis text-[0.9rem] hidden lg:block'>@rendezvousmagazinel</p>
            <div className='border border-black w-full hidden lg:block'></div>
            <span className='bg-black px-2 py-1 font-Volkhov text-white text-left w-[100%] lg:w-[40%]'>SOCIEDAD</span>
        </div>
        <div className='flex lg:flex-row flex-col mt-6 lg:overflow-hidden lg:max-h-[80vh] shadow-inner-lg '>
            <div className='w-[33%] hover:cursor-pointer'>
                <Link href='https://revista.rendezvouscorp.com/'>
                    <div className='w-[100vw] xl:w-[30vw] xl:h-[82vh] h-[80vh] relative z-10 after:content-[""] after:absolute after:top-0 after:left-0 after:w-[100vw] xl:after:w-[30vw] after:h-full after:z-0 after:bg-gradient-to-t after:from-black after:to-transparent mb-6 laptopL:after:w-[30vw] after:object-cover'>
                            <img src={PortadaSociedad} alt="Portada-Sociedad" className='z-0 object-cover xl:h-[82vh] h-[80vh] w-[100vw] xl:w-[30vw]' />
                            <p className='text-white text-center text-[1.3rem] absolute top-[60vh] z-20 px-6 font-Volkhov'>VISITA NUESTRA PRIMERA EDICION DE LA REVISTA</p>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col xl:grid xl:grid-cols-2 xl:pr-6 xl:overflow-y-scroll scroll-sociedad xl:overflow-x-hidden'>
                {itemsToRender}
            </div>
        </div>
    </div>
  );
}
