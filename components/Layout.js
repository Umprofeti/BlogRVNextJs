import { useState } from 'react';
import { SizeWindow } from '../helpers/getSizeWindow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import RVLOGO from '../public/RV logo.png';
import Link from 'next/link';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const NavBar = () => {

  const [hideMenu, setHideMenu] = useState(true);
  

  let TamañoMin = 50;

  if(SizeWindow() >= 1280){
    TamañoMin = 200;
  }

  const ShowMenuMovil = () => {
    const HideMenu = document.getElementById('HideMenu');
    setHideMenu(false);
    HideMenu.classList.toggle('block');
    HideMenu.classList.remove('hidden');
  }

  const HideMenuMovil = () => {
      const HideMenu = document.getElementById('HideMenu');
      setHideMenu(true);
      HideMenu.classList.remove('block'); 
      HideMenu.classList.toggle('hidden');
  }
  

  if(typeof window !== 'undefined'){
    window.addEventListener('scroll', ()=> {

        let fixed = document.getElementById('fijado');
        if (window.scrollY > TamañoMin){
    
          fixed.classList.remove('fijado-no');
          fixed.classList.add('fixed');
          fixed.classList.add('top-[0vh]');
    
        }
        if(window.scrollY < TamañoMin){
          fixed.classList.remove('fixed');
          fixed.classList.remove('top-[0vh]');
          fixed.classList.add('fijado-no');
        }
      });
      
  }
    return(
        <div className='bg-white w-full drop-shadow-lg fijado-no z-20' id='fijado'>
            <div className='hidden xl:block'>
                <div className='flex flex-row justify-between py-5 text-black font-Volkhov px-[3rem]'>
                    <Link href={`/`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">INICIO</a>
                    </Link>
                    <Link href={`/categories/negocios?first=24`} >
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">NEGOCIOS</a>
                    </Link>
                    <Link href={`/categories/marloports?first=24`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">MARLOPORTS</a>
                    </Link>
                    <Link href={`/categories/actualidad?first=24`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">ACTUALIDAD</a>
                    </Link>
                    <Link href={`/categories/sociedad?first=24`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">SOCIEDAD</a>
                    </Link>
                    {/* <Link href={`/tarifario`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">TARIFARIO</a>
                    </Link> */}
                </div>
          </div>
          <div className='block xl:hidden'>
            <div className='flex flex-row py-1 items-center'>
              {
                hideMenu ?
                  <button className='flex items-center px-2 py-1 rounded animate__animated animate__zoomIn bg-black ml-2 my-3' onClick={ShowMenuMovil}>
                    <FontAwesomeIcon icon={faBars} className='text-white  text-[1.5rem]' />
                  </button>
                :
                  <button className='flex items-center px-2 py-1 rounded border-2 border-black bg-white animate__animated animate__rotateIn ml-2 my-3' onClick={HideMenuMovil}>
                    <FontAwesomeIcon icon={faBars} className='text-black  text-[1.5rem]' />
                  </button>
              }
              <Link href='/'>
                <img 
                    src={RVLOGO.src}
                    alt='Rendez-Vous Magazine'
                    className='w-[25%] mx-auto md:w-[10%]'
                />
              </Link>
            </div>
            <div className='flex flex-col mb-3 px-6 items-center hidden' id='HideMenu'>
              <Link href={`/`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>INICIO</a>
              </Link>
              <Link href={`/categories/negocios?first=24`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>NEGOCIOS</a>
              </Link>
              <Link href={`/categories/marloports?first=24`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>CUMBRE MARLOPORTS</a>
              </Link>
              <Link href={`/categories/actualidad?first=24`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>ACTUALIDAD</a>
              </Link>
              <Link href={`/categories/sociedad?first=24`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>SOCIEDAD</a>
              </Link>
              {/* <Link href={`/tarifario`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>TARIFARIO</a>
              </Link> */}
            </div>
          </div>
        </div>
    );
}

const HeaderContentFetch = () => {
    
    return(
        <header>
            <div>
                <div className='hidden xl:flex xl:fixed left-[-14vw] 2xl:!left-[-12vw] h-[5vh] pl-[9rem] pr-[9rem] mt-[9rem] rotate-90 items-center justify-center z-30 border-b-[30px] border-b-[#ad8d32] border-r-[30px] border-r-transparent 3xl:!left-[-9.5vw] laptopL:left-[-13vw] laptopXL:!left-[-10vw]'>
                    <p className='font-Volkhov text-white rotate-180 relative top-[11px] text-[0.9rem] 2xl:top-[18px]'>LA REVISTA</p>
                </div>
            </div>  
            <div className=' hidden xl:block'>
                <div className='flex flex-col px-[21rem]'>
                    <h1 className='font-Metropolis text-[5rem] text-center pt-6'>RENDEZ-VOUS</h1>
                    <h2 className='font-Metropolis text-[2rem] text-center font-light relative left-[7rem] bottom-[2rem] '>magazine</h2>
                </div>
            </div>        
            <NavBar/>
        </header>
    );
}

const Footer = () => {
    return(
        <>
            <div className='flex items-center justify-start w-[100%] xl:w-[40%] hover:cursor-pointer'>
                <Link href='/post/rendez-vous-magazine-latina'> 
                    <img  src={`https://wp.rendezvouscorp.com/wp/wp-content/uploads/2021/09/image.svg`} className='w-full' alt='CARTA-EDITORIAL'/>
                </Link>
            </div>
            <footer className='flex flex-col  bg-black justify-center'>
                <div className='flex flex-col md:flex-row justify-center md:mt-9'>
                    <div className='text-center mt-[2rem] flex items-center justify-center md:w-[33.3%]'>
                        <Link href={'/post/rendez-vous-magazine'}>
                            <span className='text-white font-Volkhov no-underline py-5 mb-6 hover:cursor-pointer'>CONÓCENOS</span>
                        </Link> 
                    </div>
                    <div className='md:w-[33.3%]'>
                        <figure>
                            <Link href='/'>
                                <img
                                    src={`https://wp.rendezvouscorp.com/wp/wp-content/uploads/2021/09/RV-LBlanco-300x240.png`} 
                                    alt='RV LOGO'
                                    className='mx-auto px-6'
                                />
                            </Link>
                        </figure>
                    </div>
                    <div className='text-center mt-[2rem] flex items-center justify-center md:w-[33.3%]'>
                        <div className='flex flex-row justify-between w-[50%] '>
                            <a href='https://www.instagram.com/rendezvousmagazinel/' ><FontAwesomeIcon className='text-white text-[2rem] md:mx-3 hover:animate-pulse' icon={faInstagram} /></a>
                            <a href='https://pa.linkedin.com/company/rendez-vous-magazine-latina' ><FontAwesomeIcon className='text-white text-[2rem] md:mx-3 hover:animate-pulse' icon={faLinkedin}/></a>
                            <a href='https://www.youtube.com/channel/UCcuQ_U31yTacoQ_aUpDoqUQ' ><FontAwesomeIcon className='text-white text-[2rem] md:mx-3 hover:animate-pulse' icon={faYoutube}/></a>
                        </div>
                    </div>
                </div>
                <div className='mt-[2rem] text-center px-6 mb-6'>
                    <p className='text-gray-100 font-Volkhov'>Copyright. Todos los derechos reservados a: <span className='font-Metropolis'>RENDEZ-VOUS magazine</span></p>
                </div>
            </footer>
        </>
    );
}

const Layout = ({children})=>{
    return(
        <>
            <HeaderContentFetch/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout