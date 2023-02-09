import { useState} from 'react'
import 'animate.css';
import client from '../apollo/apollo-client';
import client2 from '../apollo/apolloClientTarifario';
import { gql } from '@apollo/client';
import { TarifarioLoadign } from '../components/LoadingComponents/TarifarioLoading';
import { Slider } from '../components/Slider';
import Head from 'next/head';
import { TarifarioBeneficios } from '../components/TarifarioBeneficios';
import { TarifarioProvider } from '../context/TarifarioProvider';

export async function getServerSideProps() {

    await fetch("https://panel.rendezvouscorp.com/api/Usuarios", {
        headers: {
        Authorization: `Usuarios API-Key ${process.env.NEXT_API_KEY}`,
        },
    });


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

  const {data: DataTarifarioContent} =  await client2.query({
    query: gql`
    query GET_TARIFARIO_CONTENT{
      Tarifario {
        imagenSup{
          id
          url
          filename
        }
        tarifarioOptions {
          id
          beneficio
          icono{
            url
            filename
            id
          }
          precio
          imagenBeneficio{
             id
            url
            filename
          }
        }
        imagenInf{
          id
          url
          filename
        }
      }
    }`
  })

  return {
    props: {
      Sliders: {
        data: DataSlider.sliders,
      },
      TarifarioContent:{
        data: DataTarifarioContent
      }
    }
  }
}



export default function TarifarioRV({ Sliders, TarifarioContent }) {

  const [loading, setLoading] = useState(true);
  const [tarifario, setTarifario] = useState(TarifarioContent?.data)

  return (
    <TarifarioProvider data={tarifario}>
      <div onLoad={()=>{setLoading(false)}}>
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
        <div className="mt-6">
          {loading ? <TarifarioLoadign/> : <TarifarioBeneficios/>}
        </div>
      </div>
    </TarifarioProvider>
  )
}
