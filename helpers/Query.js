import { gql } from '@apollo/client';
import client from '../apollo-client';

export async function getStaticProps(){
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

    const {data: DataSectSociedad, loading: LoadingSectSociedad} = await client.query({
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

    return{
     props:{
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
        data: DataPostActualidad.edges[0].node,
        loading: LoadingPostActualidad
      },
      PostMarlo: {
        data: DataPostMarlo.edges[0].node,
        loading: LoadingPostMarlo
      },
      PostSociedad: {
        data: DataPostSociedad.edges[0].node,
        loading: LoadingPostSociedad
      },
      PostNegocios: {
        data: DataPostNego.edges[0].node,
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
        loading: LoadingSectSociedad
      }
     }
    };
  }