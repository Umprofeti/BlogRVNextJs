import { useState } from 'react'
import 'animate.css';
import client from '../apollo-client';
import { gql } from '@apollo/client';
import { ReactComponent as Tarifario } from '../public/Tarifario-Editado.svg';
import Beneficio1 from '../public/pag completa taf1.svg';
import Beneficio2 from '../public/pag completa taf2.svg';
import Beneficio3 from '../public/pag completa taf3.svg';
import { TarifarioLoadign } from '../components/LoadingComponents/TarifarioLoading';
import { Slider } from '../components/Slider';
import Head from 'next/head';

export async function getServerSideProps() {
  const { data: DataSlider } = await client.query({
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

  return {
    props: {
      Sliders: {
        data: DataSlider.sliders,
      },
    }
  }
}

export default function TarifarioRV({ Sliders }) {

  const [beneficio1, setBeneficio1] = useState(false);
  const [beneficio2, setBeneficio2] = useState(false);
  const [beneficio3, setBeneficio3] = useState(false);
  const [loading, setLoading] = useState(true);

  const BeneficiosCerrar = (e) => {
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

    let boton1; 
    let boton2; 
    let boton3; 

    if(typeof document !== 'undefined'){

      boton1 = document.querySelector('#Tarifario-Editado_svg__boton');
      boton2 = document.querySelector('#Tarifario-Editado_svg__boton2');
      boton3 = document.querySelector('#Tarifario-Editado_svg__boton3');

    }

    if(typeof addEventListener !== 'undefined'){
      if( boton1 !== null && boton2 !== null && boton3 !== null){
        boton1.addEventListener('click', () => {
          setBeneficio1(true);
        });
    
        boton2.addEventListener('click', () => {
          setBeneficio2(true)
        });
    
        boton3.addEventListener('click', () => {
          setBeneficio3(true)
        });
      }
    }
    setLoading(false);
  }

  return (
    <div onLoad={()=>{beneficiosTarifario()}}>
      <Head>
        <title>TARIFARIO</title>
        <meta name='title' content={`Rendez-Vous magazine`} />
        <meta name="description" content={`La Revista`} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={`https://www.rendezvouscorp.com/tarifario`} />
        <meta property="og:title" content={`Rendez-Vous magazine`} />
        <meta property='og:image' itemProp="image" content={`https://apiblog.rendezvouscorp.com/wp-content/uploads/2021/09/Logo.png`} />
        <meta property='og:description' content={`La Revista`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.rendezvouscorp.com/tarifario`} />
        <meta property="twitter:title" content={`Rendez-Vous magazine`} />
        <meta property="twitter:description" content={`La Revista`} />
        <meta property="twitter:image" content={`https://apiblog.rendezvouscorp.com/wp-content/uploads/2021/09/Logo.png`} />
      </Head>
      <div className='mt-6 md:w-[75%] md:mx-auto px-3'>
        <Slider props={Sliders} />
      </div>
      {beneficio1
        ?
        <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] xl:h-[100vh] flex items-center top-[-0rem]'>
          <div className='z-50 animate__fadeInTopLeft animate__animated w-[100%] h-[100%] flex mx-auto items-center xl:w-[52vw] xl:h-[100vw] md:w-[80vw] lg:w-[59vw]'>
            <img src={Beneficio1} alt='Beneficio-1' onClick={(e) => { BeneficiosCerrar(e) }} />
          </div>
        </div>
        : null}
      {beneficio2 ? <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] flex items-center top-[-0rem]'>
        <div className='z-50 animate__fadeInTopLeft animate__animated xl:w-[52vw] w-[100%] h-[100vw] flex mx-auto items-center md:w-[80vw] lg:w-[59vw]'>
          <img src={Beneficio2} alt='Beneficio-2' onClick={(e) => { BeneficiosCerrar2(e) }} />
        </div>
      </div>
        : null}
      {beneficio3 ?
        <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] flex items-center top-[-0rem]'>
          <div className='z-50 animate__fadeInTopLeft animate__animated xl:w-[45vw] w-[100%] h-[100vw] flex mx-auto items-center md:w-[60vw] lg:w-[50vw]'>
            <img src={Beneficio3} alt='Beneficio-3' onClick={(e) => BeneficiosCerrar3(e)} />
          </div>
        </div>
        : null}
      <div className="mt-6">
        {loading ? <TarifarioLoadign/> : <Tarifario className="w-[100%] h-[100%]"/>}
      </div>
    </div>
  )
}
