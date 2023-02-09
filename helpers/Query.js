import { gql } from '@apollo/client';
import client from '../apollo/apollo-client';
import client2 from '../apollo/apolloClientTarifario';

export const DataDestActualidad = await client.query({
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

export const DataDestMarlo = await client.query({
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

export const DataDestNegocios = await client.query({
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

export const DataPostActualidad = await client.query({
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

export const DataPostMarlo = await client.query({
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

export const DataPostSociedad = await client.query({
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

export const DataPostNego = await  client.query({
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

export const DataSectActu = await  client.query({
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

export const DataSectMarlo = await  client.query({
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

export const DataSectNego = await client.query({
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

export const DataSectSociedad = await client.query({
  query: gql`query getPostsActualidad {
    posts(first: 4, where: {categoryId: 16}) {
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

export const getPortadaRevista = await client2.query({
  query: gql`query getPortadaPost {
    RevistaContents(where: {position: {equals: 1}}  ){
      docs{
        id
        imagen
        magazineImage{
          id
          filename
          url
        }
      }
    }
  }`
})

export const DataTarifario = await client2.query({
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