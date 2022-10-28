import Link  from 'next/link';

export const ContainerArticle2 = (props) => {
    let MediaUrl ='';
    let MediaTitle = '';

    if(props.props.featuredImage !== null){
        MediaUrl = props.props.featuredImage.node.mediaItemUrl;
        MediaTitle = props.props.featuredImage.node.title;
    }else{
        MediaUrl = ''
        MediaTitle = 'No-Imagen-Disponible'
    }

    const AuthorName = props.props.author.node.name;
    const DatePost = props.props.date;
    
    
    const TitlePost = props.props.title;
    const Categories = props.props.categories.edges[0].node.name;
    const slug =  props.props.slug;
    const time = new Date (DatePost);
    const months = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const formatDate = (time)=>{
        let formatted_date = time.getDate() + " De " + months[time.getMonth()] + " Del " + time.getFullYear()
        return formatted_date;
    }

    return (
    <div className='px-5 mb-[3rem]'>
        <div className='xl:h-[300px]'>
           <div className='w-full bg-white mb-2'>
            <span className='text-black text-[1rem] p-3 font-Volkhov '>{Categories}</span>
           </div>
            <img 
                src={MediaUrl} 
                alt={MediaTitle}
                className='mx-auto w-full object-cover aspect-[3/2] 3xl:max-h-[270px] 2xl:max-h-[280px]'
            />
        </div>
        <div className='w-full pb-5 mt-3'>
            <Link href={`/post/${slug}`}>
                <h5 className='text-[1.5rem] font-Volkhov no-underline text-black hover:cursor-pointer hover:text-[#ad8d32]'>
                    {TitlePost}
                </h5>
            </Link>
        </div>
        <div className='text-left mt-3 border-t-2 border-black pt-2'>
            <p className='text-[0.7rem] font-Volkhov'>Por: {AuthorName}</p>
            <p className='text-[0.7rem] font-Volkhov'>{formatDate(time)}</p>
        </div>
    </div>
  );
};
