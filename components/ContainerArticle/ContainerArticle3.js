import { formatDate } from '../../helpers/getDateFormat';
import Link from 'next/link';

export const ContainerArticle3 = (props) => {

  let mediaItemUrl;
  let TitleImg;

  if(props.props.featuredImage.node !== null){
    mediaItemUrl = props.props.featuredImage.node.mediaItemUrl;
    TitleImg = props.props.featuredImage.node.title;
  }else{
    mediaItemUrl = '';
    TitleImg = 'No-Imagen-Disponible';
  }

  const {date, excerpt, title} = props.props;
  const author = props.props.author.node.name;
  const slug = props.props.slug;
  const time = new Date(date);
  
  return(
    <div className='px-2 mt-6'>
        <div className='xl:flex xl:flex-row-reverse'>
          <div className='w-full object-cover '>
              <img
                  src={mediaItemUrl}
                  className='mb-3 xl:rounded-r-lg mx-auto 3xl:max-h-[350px]'
                  alt={TitleImg}
              />
          </div>
          <div className='px-6 mb-6'>
              <Link href={`/post/${slug}`}>
                <h5 className='text-[1.2rem] font-Volkhov mb-3 xl:pt-6 no-underline text-black hover:text-[#ad8d32] hover:cursor-pointer'>
                  {title}
                </h5>
              </Link>
              <p className='text-[1rem] font-Volkhov mb-3 text-left'>{excerpt.replace(/<.+?>/, '').replace(/<.+?>/, '')}</p>
              <p className='text-[0.9rem] font-Volkhov mb-3 text-left'>Por: {author} - {formatDate(time)}</p>
          </div>
        </div>
      <div className='w-full border-dashed border-gray-500 h-9 border-b-2'></div>
    </div>
  );
};
