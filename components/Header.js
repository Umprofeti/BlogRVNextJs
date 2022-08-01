import { useState } from 'react/cjs/react.production.min';
import { SizeWindow } from '../helpers/getSizeWindow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import RVLOGO from '../public/RV logo.png';
import Link from 'next/link';
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
                    <Link href={`/categories/negocios`} >
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">NEGOCIOS</a>
                    </Link>
                    <Link href={`/categories/marloports`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">MARLOPORTS</a>
                    </Link>
                    <Link href={`/categories/actualidad`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">ACTUALIDAD</a>
                    </Link>
                    <Link href={`/categories/sociedad`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">SOCIEDAD</a>
                    </Link>
                    <Link href={`/tarifario`}>
                        <a className="w-full text-center py-5 no-underline hvr-underline-from-left">TARIFARIO</a>
                    </Link>
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
              <Link href={`/categories/NEGOCIOS`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>NEGOCIOS</a>
              </Link>
              <Link href={`/categories/MARLOPORTS`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>MARLOPORTS</a>
              </Link>
              <Link href={`/categories/ACTUALIDAD`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>ACTUALIDAD</a>
              </Link>
              <Link href={`/categories/SOCIEDAD`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>SOCIEDAD</a>
              </Link>
              <Link href={`/tarifario`}>
                <a className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>TARIFARIO</a>
              </Link>
            </div>
          </div>
        </div>
    );
}

const HeaderContentFetch = (generalSettings) => {
    const {description, title} = generalSettings.props.props.data.generalSettings;
    return(
        <header>
            <div>
                <div className='hidden xl:flex xl:fixed left-[-14vw] 2xl:left-[-12vw] h-[5vh] pl-[9rem] pr-[9rem] mt-[9rem] rotate-90 items-center justify-center z-30 border-b-[30px] border-b-[#ad8d32] border-r-[30px] border-r-transparent 3xl:left-[-9.5%] laptopL:left-[-13vw]'>
                <p className='font-Volkhov text-white rotate-180 relative top-[11px] text-[0.9rem] 2xl:top-[18px]'>{description}</p>
                </div>
            </div>  
            <div className=' hidden xl:block'>
                <div className='flex flex-col px-[21rem]'>
                <h1 className='font-Metropolis text-[5rem] text-center pt-6'>{title}</h1>
                <h2 className='font-Metropolis text-[2rem] text-center font-light relative left-[7rem] bottom-[2rem] '>magazine</h2>
                </div>
            </div>
            <NavBar/>
        </header>
    );
}

export const Header = (generalSettings)=>{
    return(
        <HeaderContentFetch props={generalSettings}/>
    );
}