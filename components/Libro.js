
export const Libro = (props) => {
    const description = props.props.excerpt;
    const id = props.props.id;
    const {author, link} = props.props.libroCampos;
    const title = props.props.title;
    let regexp = new RegExp(/[<p>](?:[Aa-zZ])?[</p>]/g);
    const newDesc = description.replace(regexp,' ');
    const {mediaItemUrl, title:imgTitle, id:idImg} = props.props.featuredImage.node;
    
  return (
    <a key={id} className='flex flex-row border-2 overflow-hidden rounded-lg border-black w-[100%] mx-5 xl:max-h-[29.5vh] md:h-[205px] xl:ml-5 snap-center' href={link}>
        <img src={mediaItemUrl} alt={imgTitle} key={idImg} className=' rounded-l-lg object-cover w-[100px] xl:w-[120px] laptopL:w-[125px] 3xl:w-[140px]' />
        <div className='scroll-bar flex flex-col overflow-y-scroll overflow-x-hidden  mb-3 max-h-[20vh] md:max-h-[25vh] lg:max-h-[35vh] mt-2 mr-3'>
          <h4 className='font-Volkhov px-2 text-left text-[0.9rem]'>{title}</h4>
          <p className='mt-6 px-2 font-Volkhov text-left text-[0.8rem]' dangerouslySetInnerHTML={{__html:newDesc}}></p>
          <p className='mt-2 px-2 font-Volkhov text-left text-[0.8rem]'>Autor: {author}</p>
        </div>
    </a>
    );
}
