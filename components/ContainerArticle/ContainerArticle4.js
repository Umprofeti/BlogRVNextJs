import React from 'react';
import Link from 'next/link';
export const ConatinerArticle4 = (props) => {
    const Author = props.props.author.node.name;
    const title = props.props.title;
    const id = props.props.id;
    const slug = props.props.slug;

    if(props.props.featuredImage === null){
      return (
        <div className='flex flex-col my-5 ' key={id}>
            <div className='rounded-t-lg text-center h-[200px] bg-zinc-400 flex items-center justify-center'>
              <span className='text-black font-Karla'>No hay Imagen disponible</span>  
            </div>
            <Link href={`/post/${slug}`} key={slug}>
              <h5 className='text-[1.2rem] font-Volkhov mb-3 xl:pt-6 no-underline text-black hover:text-[#ad8d32]' key={`noImage${slug}`}>
                {title}
              </h5>
            </Link>
            <div className='text-gray-900 font-Volkhov italic px-3'>
                <small>Por: {Author}</small>
            </div>
        </div>
      );
    }
    const {mediaItemUrl, title:TitleImg} = props.props.featuredImage.node;
    

    return (
      <div className='flex flex-col my-5 mx-3 ' key={id}>
          <div className='rounded-t-lg '>
            {mediaItemUrl !== null && TitleImg !== null? <img
                  src={mediaItemUrl}
                  alt={TitleImg}
                  className='rounded-t-lg mx-auto xl
                  :max-h-[150px] w-[100%] aspect-[3/2] object-cover'
              />: <span>No hay Imagen disponible</span> }
              
          </div>
          <Link href={`/post/${slug}`}>
            <h5 className='text-[1.2rem] font-Volkhov mb-3 xl:pt-6 no-underline text-black hover:text-[#ad8d32] hover:cursor-pointer' key={`Image${slug}`} >
              {title}
            </h5>
          </Link>
          <div className='text-gray-900 font-Volkhov italic px-3'>
              <small>Por: {Author}</small>
          </div>
      </div>
    );
};
