import {useState} from 'react'
import 'animate.css';
import client from '../apollo-client';
import { gql } from '@apollo/client';
import {ReactComponent as Tarifario} from '../public/TARIFARIO-2022-COMPLETO.svg';
import  Beneficio1 from '../public/pag completa taf1.svg';
import  Beneficio2 from '../public/pag completa taf2.svg';
import  Beneficio3 from '../public/pag completa taf3.svg';
import { Slider } from '../components/Slider';


export async function getServerSideProps(){
    const {data: DataSlider} = await client.query({
        query: gql`query getSliders {
          sliders(first: 10) {
            edges {
              node {
                id
                excerpt
                featuredImage {
                  node {
                    title
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }`
    });

    return{
        props:{
            Sliders: {
                data:DataSlider.sliders,
              },
        }
    } 
}

export default function TarifarioRV ({Sliders}){

  const [beneficio1, setBeneficio1] = useState(false)
  const [beneficio2, setBeneficio2] = useState(false)
  const [beneficio3, setBeneficio3] = useState (false);
  const BeneficiosCerrar = (e)=> {
    e.preventDefault();
    setBeneficio1(false);
  }

  const BeneficiosCerrar2 = (e) => {
    e.preventDefault();
    setBeneficio2(false);
  }

  const BeneficiosCerrar3 = (e) => {
    e.preventDefault();
    setBeneficio3(false);
  }

  const beneficiosTarifario = () => {

    if(typeof document !== 'undefined'){
        const boton1 =  document.querySelector('#TARIFARIO-2022-COMPLETO_svg__boton');
        const boton2 =  document.querySelector('#TARIFARIO-2022-COMPLETO_svg__boton2');
        const boton3 =  document.querySelector('#TARIFARIO-2022-COMPLETO_svg__boton3');

        boton1.addEventListener('click', ()=>{
        setBeneficio1(true);
        });

        boton2.addEventListener('click', ()=>{
        setBeneficio2(true)
        });

        boton3.addEventListener('click', ()=>{
        setBeneficio3(true)
        });
    }
  } 

  return (
    <>
        <div className='mt-6 md:w-[75%] md:mx-auto px-3'>
          <Slider props={Sliders}/>
        </div>
        {beneficio1
          ?
            <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] xl:h-[100vh] flex items-center top-[-0rem]'>
              <div  className='z-50 animate__fadeInTopLeft animate__animated w-[100%] h-[100%] flex mx-auto items-center xl:w-[52vw] xl:h-[100vw] md:w-[80vw] lg:w-[59vw]'>
                <img src={Beneficio1} alt='Beneficio-1' onClick={(e)=> {BeneficiosCerrar(e)}} />
              </div>
            </div>
          : null}
        {beneficio2? <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] flex items-center top-[-0rem]'>
                <div  className='z-50 animate__fadeInTopLeft animate__animated xl:w-[52vw] w-[100%] h-[100vw] flex mx-auto items-center md:w-[80vw] lg:w-[59vw]'>
                  <img src={Beneficio2} alt='Beneficio-2' onClick={(e)=> {BeneficiosCerrar2(e)}} />
                </div>
              </div>
          :null }
        {beneficio3? 
          <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] flex items-center top-[-0rem]'>
            <div  className='z-50 animate__fadeInTopLeft animate__animated xl:w-[45vw] w-[100%] h-[100vw] flex mx-auto items-center md:w-[60vw] lg:w-[50vw]'>
              <img src={Beneficio3} alt='Beneficio-3' onClick={(e)=> BeneficiosCerrar3(e)}/>
            </div>
          </div>
        :null}
        <div onLoad={beneficiosTarifario()} className="mt-6 ">
          <Tarifario/>
        </div>
    </>
  )
}
