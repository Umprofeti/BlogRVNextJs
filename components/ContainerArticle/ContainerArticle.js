import Link from 'next/link';
export const ContainerArticle = (props) => {

    let MediaUrl;
    let MediaTitle;

    if(props.props.featuredImage !== null){
        MediaUrl = props.props.featuredImage.node.mediaItemUrl;
        MediaTitle = props.props.featuredImage.node.title;
    }else{
        MediaUrl = '';
        MediaTitle = 'No-Imagen-Disponible';
    }

    const AuthorName = props.props.author.node.name;
    const DatePost = props.props.date;
    const TitlePost = props.props.title;
    const Categories = props.props.categories.edges[0].node.name;
    const slug = props.props.slug;

    const time = new Date (DatePost);
    const months = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const formatDate = (time)=>{
        let formatted_date = time.getDate() + " De " + months[time.getMonth()] + " Del " + time.getFullYear()
        return formatted_date;
    }


  return (
    <div className='px-5 mb-6'>
        <div>
            <img 
                src={`${MediaUrl}`} 
                alt={MediaTitle}
                className='mx-auto w-full object-cover'
            />
           <div className='w-full bg-black relative bottom-6'>
            <span className='text-white text-[1rem] p-3 font-Volkhov'>{Categories}</span>
           </div>
        </div>
        <div className='w-full pb-5 mt-[-0.5rem]'>
            <Link href={`/post/${slug}`} >
                <h5 className='text-[1.5rem] font-Volkhov no-underline text-black hover:cursor-pointer hover:text-[#ad8d32]'>
                    {TitlePost}
                </h5>
            </Link>
        </div>
        <div className='text-left mt-3 border-t-2 border-gray-400 w-[50%] pt-3'>
            <p className='text-[0.7rem] font-Volkhov'>Por: {AuthorName}</p>
            <p className='text-[0.7rem] font-Volkhov'>{formatDate(time)}</p>
        </div>
    </div>
  );
};
