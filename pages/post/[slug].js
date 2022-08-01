import client from '../../apollo-client';
import { gql } from '@apollo/client';
import Head from 'next/head';
import { Slider } from '../../components/Slider';

export async function getServerSideProps(context) {

  const { slug } = context.params;

  const { data } = await client.query({
    query: gql`query getContentPost {
            postBy(slug: "${slug}") {
              blocks {
                ... on CoreParagraphBlock {
                  attributes {
                    ... on CoreParagraphBlockAttributes {
                      content
                      dropCap
                    }
                  }
                  name
                }
                ... on CoreVerseBlock {
                  attributes {
                    ... on CoreVerseBlockAttributes {
                      content
                      textAlign
                    }
                  }
                  name
                }
                ... on CoreImageBlock {
                  attributes {
                    ... on CoreImageBlockAttributes {
                      url
                    }
                  }
                  name
                }
                ... on CoreHeadingBlock {
                  attributes {
                    ... on CoreHeadingBlockAttributes {
                      textAlign
                      content
                    }
                  }
                  name
                }
              }
              author {
                node {
                  name
                }
              }
              date
              id
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              excerpt
              slug
            }
          }`
  });
  const dataReduce = data.postBy

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
  })

  return {
    props: {
      data: dataReduce,
      Sliders: {
        data: DataSlider.sliders,
      },
    }
  }

}


const slug = ({ data, Sliders }) => {

  const { title, excerpt, id, date, slug } = data
  if (data.featuredImage === null) {
    const author = data.author.node.name
    const newExcerpt = excerpt.replace(/<.+?>/, '').replace(/<.+?>/, '')
    let itemsToRender = [];

    const formatDate = (time) => {
      let time2 = new Date(time);

      const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      let formatted_date = time2.getDate() + " De " + months[time2.getMonth()] + " Del " + time2.getFullYear()
      return formatted_date;
    }

    let newDate = formatDate(date);

    if (data && data.blocks) {
      itemsToRender = data.blocks.map((block, key) => {
        switch (block.name) {
          case 'core/image':

            return itemsToRender = <div className='rounded-t-lg text-center h-[200px] bg-zinc-400 flex items-center justify-center' key={key}>
            <span className='text-black font-Karla'>No hay Imagen disponible</span>  
          </div>
            break;
          case 'core/paragraph':
            if (block.attributes.dropCap) {
              return itemsToRender = <p className='font-Volkhov first-letter:uppercase first-letter:text-7xl first-letter:font-bold first-letter:mt-9 first-letter:text-[#ad8d32] text-left mt-3' dangerouslySetInnerHTML={{ __html: block.attributes.content }} key={key}></p>;
            } else {
              return itemsToRender = <p className='font-Volkhov text-left mt-3 mb-3' dangerouslySetInnerHTML={{ __html: block.attributes.content }} key={key}></p>;
            }
            break;
          case 'core/heading':
            switch (block.attributes.textAlign) {
              case 'left':
                return itemsToRender = <h5 className='font-Volkhov text-left my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>
                break;
              case 'center':
                return itemsToRender = <h5 className='font-Volkhov text-center my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>
                break;
              case 'right':
                return itemsToRender = <h5 className='font-Volkhov text-right my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>
                break;
              default:
                return itemsToRender = <h5 className='font-Volkhov text-center my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>
                break;
            }
            break;
          case 'core/verse':
            switch (block.attributes.textAlign) {
              case 'left':
                return itemsToRender = <p className='font-Volkhov italic text-left mt-1' key={key}
                  dangerouslySetInnerHTML={{ __html: block.attributes.content }}></p>;
                break;
              case 'center':
                return itemsToRender = <p className='font-Volkhov italic text-center mt-1' key={key}
                  dangerouslySetInnerHTML={{ __html: block.attributes.content }}></p>;
                break;
              case 'right':
                return itemsToRender = <p className='font-Volkhov italic text-right mt-1' key={key} dangerouslySetInnerHTML={{ __html: block.attributes.content }}></p>;
                break;
            }
            break;

        }
      })
    }
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name='title' content={`${title}`} />
          <meta name="description" content={`${newExcerpt}`} />

          <meta property='og:type' content='article' />
          <meta property='og:url' content={`${process.env.DOMAIN}${slug}`} />
          <meta property="og:title" content={`${title}`} />
          <meta property='og:description' content={`${newExcerpt}`} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`${process.env.REACT_APP_DOMAIN}${slug}`} />
          <meta property="twitter:title" content={`${title}`} />
          <meta property="twitter:description" content={`${newExcerpt}`} />
        </Head>
        <main className='mt-12'>
          <div className='mt-6 md:w-[75%] md:mx-auto px-3 mb-6'>
            <Slider props={Sliders} />
          </div>
          <div key={id} className='px-9 py-3 w-full shadow-md mt-6'>
            <h4 className='font-Volkhov text-[1.3rem] text-center mb-5 md:text-[1.8rem]' key='post-title'>{title}</h4>
            <p className='font-Volkhov text-[0.8rem] italic' key='post-meta-data'>Por: {author} - {newDate}</p>
          </div>
          <div className='px-2 mb-9 xl:px-[3.5rem]'>
            {itemsToRender}
          </div>
        </main>
      </>
    );
  }
  const mediaItemUrl = data.featuredImage 
  const author = data.author.node.name
  const newExcerpt = excerpt.replace(/<.+?>/, '').replace(/<.+?>/, '')

  let itemsToRender = [];

  const formatDate = (time) => {
    let time2 = new Date(time);

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let formatted_date = time2.getDate() + " De " + months[time2.getMonth()] + " Del " + time2.getFullYear()
    return formatted_date;
  }

  let newDate = formatDate(date);

  if (data && data.blocks) {
    itemsToRender = data.blocks.map((block, key) => {
      switch (block.name) {
        case 'core/image':

          return itemsToRender = <img src={block.attributes.url} alt='IMG post' className='w-full mx-auto mt-9 mb-6 xl:w-[50%]' key={key} />
          break;
        case 'core/paragraph':
          if (block.attributes.dropCap) {
            return itemsToRender = <p className='font-Volkhov first-letter:uppercase first-letter:text-7xl first-letter:font-bold first-letter:mt-9 first-letter:text-[#ad8d32] text-left mt-3' dangerouslySetInnerHTML={{ __html: block.attributes.content }} key={key}></p>;
          } else {
            return itemsToRender = <p className='font-Volkhov text-left mt-3 mb-3' dangerouslySetInnerHTML={{ __html: block.attributes.content }} key={key}></p>;
          }
          break;
        case 'core/heading':
          switch (block.attributes.textAlign) {
            case 'left':
              return itemsToRender = <h5 className='font-Volkhov text-left my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>
              break;
            case 'center':
              return itemsToRender = <h5 className='font-Volkhov text-center my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>
              break;
            case 'right':
              return itemsToRender = <h5 className='font-Volkhov text-right my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>
              break;
            default:
              return itemsToRender = <h5 className='font-Volkhov text-center my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>
              break;
          }
          break;
        case 'core/verse':
          switch (block.attributes.textAlign) {
            case 'left':
              return itemsToRender = <p className='font-Volkhov italic text-left mt-1' key={key}
                dangerouslySetInnerHTML={{ __html: block.attributes.content }}></p>;
              break;
            case 'center':
              return itemsToRender = <p className='font-Volkhov italic text-center mt-1' key={key}
                dangerouslySetInnerHTML={{ __html: block.attributes.content }}></p>;
              break;
            case 'right':
              return itemsToRender = <p className='font-Volkhov italic text-right mt-1' key={key} dangerouslySetInnerHTML={{ __html: block.attributes.content }}></p>;
              break;
          }
          break;

      }
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='title' content={`${title}`} />
        <meta name="description" content={`${newExcerpt}`} />

        <meta property='og:type' content='article' />
        <meta property='og:url' content={`${process.env.NEXT_PUBLIC_DOMAIN}${slug}`} />
        <meta property="og:title" content={`${title}`} />
        <meta property='og:image' itemProp="image" content={`${mediaItemUrl.mediaItemUrl}`} />
        <meta property='og:description' content={`${newExcerpt}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}${slug}`} />
        <meta property="twitter:title" content={`${title}`} />
        <meta property="twitter:description" content={`${newExcerpt}`} />
        <meta property="twitter:image" content={`${mediaItemUrl.mediaItemUrl}`} />
      </Head>
      <main className='mt-12'>
        <div className='mt-6 md:w-[75%] md:mx-auto px-3 mb-6'>
          <Slider props={Sliders} />
        </div>
        <div key={id} className='px-9 py-3 w-full shadow-md mt-6'>
          <h4 className='font-Volkhov text-[1.3rem] text-center mb-5 md:text-[1.8rem]' key='post-title'>{title}</h4>
          <p className='font-Volkhov text-[0.8rem] italic' key='post-meta-data'>Por: {author} - {newDate}</p>
        </div>
        <div className='px-2 mb-9 xl:px-[3.5rem]'>
          {itemsToRender}
        </div>
      </main>
    </>
  );
}

export default slug;