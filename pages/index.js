import Head from 'next/head';
import client from '../apollo-client';
import { gql } from '@apollo/client';
import { IndexDesktop } from '../components/IndexDesktop';
import { Slider } from '../components/Slider';
import ImagenIcon from '../public/favicon.ico';
import { RecomendacionesRV } from '../components/RecomendacionesRV';
import {SizeWindow} from '../helpers/getSizeWindow';
import { IndexMovil } from '../components/IndexMovil';

export async function getServerSideProps(){
  const {data:DataDestActualidad, loading:LoadingDestActualidad} = await client.query({
    query:gql`query getDestacdaActualidad {
      tags(where: {nameLike: "actualidad-destacada"}) {
        edges {
          node {
            posts(first: 1) {
              edges {
                node {
                  title
                  excerpt
                  date
                  featuredImage {
                    node {
                      mediaItemUrl
                      title
                    }
                  }
                  author {
                    node {
                      name
                    }
                  }
                  id
                  slug
                }
              }
            }
          }
        }
      }
    }`,
  });

  const {data: DataDestMarlo, loading:LoadingDestMarlo} = await client.query({
    query: gql`query getDestacdaActualidad {
      tags(where: {nameLike: "marloports-destacada"}) {
        edges {
          node {
            posts(first: 1) {
              edges {
                node {
                  title
                  excerpt
                  date
                  featuredImage {
                    node {
                      mediaItemUrl
                      title
                    }
                  }
                  author {
                    node {
                      name
                    }
                  }
                  id
                  slug
                }
              }
            }
          }
        }
      }
    }`
  });

  const {data: DataDestNegocios, loading: LoadingDestNegocios} = await client.query({
    query: gql`query getDestacdaNegocios {
      tags(where: {nameLike: "negocios-destacada"}) {
        edges {
          node {
            posts(first: 1) {
              edges {
                node {
                  title
                  excerpt
                  date
                  featuredImage {
                    node {
                      mediaItemUrl
                      title
                    }
                  }
                  author {
                    node {
                      name
                    }
                  }
                  id
                  slug
                }
              }
            }
          }
        }
      }
    }`
  });

  const {data: DataPostActualidad, loading: LoadingPostActualidad} = await client.query({
    query: gql`query getPostActualidad {
      posts(where: {categoryId: 10}, first: 1) {
        edges {
          node {
            id
            slug
            title
            date
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
            categories(where: {nameLike: "ACTUALIDAD"}) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }`
  });

  const {data: DataPostMarlo, loading: LoadingPostMarlo} = await client.query({
    query: gql`query getPostMarloports {
      posts(where: {categoryId: 6}, first: 1) {
        edges {
          node {
            id
            slug
            title
            date
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
            categories(where: {nameLike: "MARLOPORTS"}) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }`
  });

  const {data: DataPostSociedad, loading: LoadingPostSociedad} = await client.query({
    query: gql`query getPostSociedad {
      posts(where: {categoryId: 16}, first: 1) {
        edges {
          node {
            id
            slug
            title
            date
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
            categories(where: {nameLike: "Sociedad"}) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }`
  });

  const {data: DataPostNego, loading: LoadingPostNego} = await  client.query({
    query: gql`query getPostNegocios {
      posts(where: {categoryId: 11}, first: 1) {
        edges {
          node {
            id
            slug
            title
            date
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
            categories(where: {nameLike: "NEGOCIOS"}) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }`
  });

  const {data: DataSectActu, loading: LoadingSectActu} = await  client.query({
    query: gql`query getPostsActualidad {
      posts(first: 4, where: {categoryId: 10}) {
        edges {
          node {
            title
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
            id
            slug
          }
        }
      }
    }`
  });

  const {data: DataSectMarlo, loading: LoadingSectMarlo} = await  client.query({
    query: gql`query getPostsActualidad {
      posts(first: 4, where: {categoryId: 6}) {
        edges {
          node {
            title
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
            id
            slug
          }
        }
      }
    }`
  });

  const {data: DataSectNego, loading: LoadingSectNego} = await client.query({
    query: gql`query getPostsActualidad {
      posts(first: 4, where: {categoryId: 11}) {
        edges {
          node {
            title
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
            id
            slug
          }
        }
      }
    }`
  });

  const {data: DataSectSociedad} = await client.query({
    query: gql`query getSectionSociedad {
      posts(where: {categoryId: 16}, first: 8) {
        edges {
          node {
            id
            slug
            title
            date
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
            categories(where: {nameLike: "SOCIEDAD"}) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }`
  });

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

  const {data: DataEntretenimiento} =  await client.query({
    query: gql`query getEntretenimiento {
      entreteiminetos(first: 10) {
        edges {
          node {
            id
            excerpt
            featuredImage {
              node {
                mediaItemUrl
                title
                id
              }
            }
            entretenimientocampo {
              seccion
            }
          }
        }
      }
    }`
  });

  const {data: DataLibros} = await client.query({
    query: gql`query getLibros {
      libros(first: 10) {
        edges {
          node {
            id
            title
            libroCampos {
              author
              link
            }
            excerpt
            featuredImage {
              node {
                id
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }`
  })

  const {data:DataDestinos} = await client.query({
    query: gql`query getDestinos {
      hoteles(first: 10) {
        edges {
          node {
            title
            id
            featuredImage {
              node {
                mediaItemUrl
                title
                id
              }
            }
            destinocampo {
              descripcion
              link
              puntuacion
            }
          }
        }
      }
    }`
  })

  return{
   props:{
    Sliders: {
      data:DataSlider.sliders,
    },
    DestActualidad: {
        data: DataDestActualidad.tags.edges[0].node.posts.edges[0].node,
        loading: LoadingDestActualidad
    },
    DestMarlo: {
      data: DataDestMarlo.tags.edges[0].node.posts.edges[0].node,
      loading: LoadingDestMarlo
    },
    DestNegocios: {
      data: DataDestNegocios.tags.edges[0].node.posts.edges[0].node,
      loading: LoadingDestNegocios
    },
    PostActualidad: {
      data: DataPostActualidad.posts.edges[0].node,
      loading: LoadingPostActualidad
    },
    PostMarlo: {
      data: DataPostMarlo.posts.edges[0].node,
      loading: LoadingPostMarlo
    },
    PostSociedad: {
      data: DataPostSociedad.posts.edges[0].node,
      loading: LoadingPostSociedad
    },
    PostNegocios: {
      data: DataPostNego.posts.edges[0].node,
      loading: LoadingPostNego
    },
    SectActu: {
      data: DataSectActu.posts,
      loading : LoadingSectActu
    },
    SectMarlo: {
      data: DataSectMarlo.posts,
      loading: LoadingSectMarlo
    },
    SectNego: {
      data: DataSectNego.posts,
      loading: LoadingSectNego
    },
    SectSociedad:{
      data: DataSectSociedad.posts,
    },
    Entretenimiento: {
      data: DataEntretenimiento
    },
    Libros:{
      data: DataLibros
    },
    Destinos:{
      data: DataDestinos
    }
   }
  };
}

export default function Index({DestActualidad, DestMarlo, DestNegocios, PostActualidad, PostMarlo, PostSociedad, PostNegocios, SectActu, SectMarlo, SectNego, SectSociedad, Sliders, Entretenimiento, Libros, Destinos }) {
  
  return (
    <>
      <Head>
          <title>RENDEZ-VOUS</title>
          <meta name='title' content={`Rendez-Vous magazine`}/>
          <meta name="description" content={`La Revista`}/>

          <meta property='og:type' content='website'/>
          <meta property='og:url' content={`https://www.rendezvouscorp.com/`}/>
          <meta property="og:title" content={`Rendez-Vous magazine`}/>
          <meta property='og:image' itemProp="image" content={`https://apiblog.rendezvouscorp.com/wp-content/uploads/2021/09/Logo.png`}/>
          <meta property='og:description' content={`La Revista`}/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content={`https://www.rendezvouscorp.com/`}/>
          <meta property="twitter:title" content={`Rendez-Vous magazine`}/>
          <meta property="twitter:description" content={`La Revista`}/>
          <meta property="twitter:image" content={`https://apiblog.rendezvouscorp.com/wp-content/uploads/2021/09/Logo.png`}/>
      </Head>
      <main>
        <div className='mt-6 md:w-[75%] md:mx-auto px-3'>
          <Slider props={Sliders}/>
        </div>

        { SizeWindow() > 1280 ? <IndexDesktop props={{DestActualidad, DestMarlo, DestNegocios, PostActualidad, PostMarlo, PostSociedad, PostNegocios, SectActu, SectMarlo, SectNego, SectSociedad }}/>
      
        :
        
          <IndexMovil props={{DestActualidad, DestMarlo, DestNegocios, PostActualidad, PostMarlo, PostSociedad, PostNegocios, SectActu, SectMarlo, SectNego, SectSociedad}}/>
        }
        <RecomendacionesRV props={{Entretenimiento, Libros, Destinos}} />
      </main>
    </>
  )
}
