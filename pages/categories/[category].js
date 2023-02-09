import { gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import { useRouter } from "next/router";
import Link from 'next/link';
import { ConatinerArticle4 } from "../../components/ContainerArticle/ContainerArticle4";
import { Slider } from '../../components/Slider';
import Head from 'next/head';
import ImagenIcon from '../../public/favicon.ico';

export async function getServerSideProps(context) {
  const category = context.query.category;
  const first = context.query.first || null;
  const last = context.query.last || null;
  const after = context.query.after || null;
  const before = context.query.before || null;

  const variables = {
    first: parseInt(first),
    last: parseInt(last),
    after,
    before
  }
  const { data } = await client.query({
    query: gql`query getPostsCategory($first: Int, $last: Int, $after: String, $before: String){
        posts(
          where: {categoryName: "${category}"}
          first: $first
          last: $last
          after: $after
          before: $before
        ) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            node {
              id
              slug
              title
              featuredImage {
                node {
                  mediaItemUrl
                  title
                  id
                }
              }
              author {
                node {
                  name
                  id
                }
              }
            }
            cursor
          }
        }
      }`,
    variables
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
  })

  return {
    props: {
      Posts: {
        data: data.posts.edges,
        pageInfo: data.posts.pageInfo
      },
      Sliders: {
        data: DataSlider.sliders,
      }
    }
  }
}

const Post = (props) => {

  let itemsToRender = [];
  props.props.map((post, key) => {
    return itemsToRender = [...itemsToRender, <ConatinerArticle4 props={post.node} key={key}/>]
  })


  return (
    <div className="grid xl:grid-cols-4 xl:gap-4 grid-cols-1 gap-0 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
      {itemsToRender}
    </div>
  );
}

const Category = ({ Posts, Sliders }) => {
  const router = useRouter();
  const { endCursor, startCursor, hasNextPage, hasPreviousPage } = Posts.pageInfo;
  if(router.query.category == 'marloports'){
    router.query.category = 'Marítimo, Logístico, Portuario y agrologístico';
  }


  return (
    <>
      <Head>
        <title className="uppercase">{router.query.category.toUpperCase()}</title>
        <meta name='title' content={`Rendez-Vous magazine`} />
        <meta name="description" content={`La Revista`} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={`https://www.rendezvouscorp.com/`} />
        <meta property="og:title" content={`Rendez-Vous magazine`} />
        <meta property='og:image' itemProp="image" content={`${ImagenIcon.src}`} />
        <meta property='og:description' content={`La Revista`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.rendezvouscorp.com/`} />
        <meta property="twitter:title" content={`Rendez-Vous magazine`} />
        <meta property="twitter:description" content={`La Revista`} />
        <meta property="twitter:image" content={`${ImagenIcon.src}`} />
      </Head>
      <main>
        <div className='mt-6 md:w-[75%] md:mx-auto px-3 mb-6'>
          <Slider props={Sliders} />
        </div>
        <div className="xl:px-12 mt-12 lg:px-3">
          <h2 className="font-Volkhov text-[1.9rem] text-center uppercase">{router.query.category.toUpperCase()}</h2>
          <div>
            {Posts && Posts.data ? <Post props={Posts.data} /> : null}
          </div>
          <div className="mx-auto flex flex-row justify-center items-center">
            <div className="mx-3">
              {hasPreviousPage ?
                <Link href={{ pathname: `/categories/${router.query.category}`, query: { last: 24, before: startCursor } }}>
                  <button className="mx-2 px-3 py-2 rounded-sm font-Metropolis bg-[#a58d32] my-6">Anterior</button>
                </Link>
                : null}
            </div>
            <div className="mx-3">
              {hasNextPage ?
                <Link href={{ pathname: `/categories/${router.query.category}`, query: { first: 24, after: endCursor } }}>
                  <button className="mx-2 px-3 py-2 rounded-sm font-Metropolis bg-[#a58d32] my-6">Siguiente</button>
                </Link>
                : null}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Category;
