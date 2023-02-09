import Image from "next/image"
import { useContext, useState } from "react"
import 'animate.css';
import { TarifarioContext } from "../context/tarifarioContext";

let gShowImage = false

export const TarifarioBeneficios = () => {
    const dataTarifario = useContext(TarifarioContext)
    const {imagenInf, imagenSup, tarifarioOptions} = dataTarifario.Tarifario
    const [imageToShow, setImageToShow] = useState()
    const [showBeneficio, setShowBeneficio] = useState(gShowImage)
    gShowImage = showBeneficio
    const handleImageBeneficio = (idBeneficio) => {
        setImageToShow(idBeneficio)
        setShowBeneficio(true)
    }
    
    const resetVaule = () => {
        setShowBeneficio(false)
    }
    return (
        <div className="bg-black">
            {/* Imagen Sup */}
            <div className="w-full flex justify-center items-center">
                <Image 
                    src={imagenSup?.url}
                    alt= {imagenSup?.filename}
                    width={1080}
                    height={1758}
                    objectFit='contain'
                />
            </div>
            {/* TarifarioOptions */}
            <div className="bg-black flex flex-col md:flex-row gap-1">
                {
                    tarifarioOptions.map((data) => {
                        let price = data?.precio
                        return(
                            <div key={data.id} className="flex flex-col justify-center items-center">
                                <div className="w-[50%]">
                                    <Image
                                        src={data?.icono?.url}
                                        alt= {data?.icono?.filename}
                                        width={2000}
                                        height={2000}
                                    />
                                </div>
                                <div className="text-white font-light mt-[-10%] mb-3">
                                    {data?.beneficio}
                                </div>
                                <div className="text-white font-bold text-3xl">
                                    B/. {Number.parseFloat(price).toFixed(2)}
                                </div>
                                <div className="text-white font-normal text-md ">
                                    DESDE
                                </div>
                                <button className="mt-5 px-4 py-2 font-bold bg-white font-Lato rounded-full" onClick={()=>{handleImageBeneficio(data.imagenBeneficio.url)}} onFocus={resetVaule}>
                                    Ver Beneficios
                                </button>
                            </div>
                        )
                    })
                    
                }
                {showBeneficio ? <ImagenBeneficio urlImage={tarifarioOptions.find(item => item.imagenBeneficio.url == imageToShow)} hideImage={showBeneficio}/>:null}
            </div>

            {/* Imagen Inf */}
            <div className="w-full mt-10 flex justify-center items-center">
                <Image 
                    src={imagenInf?.url}
                    alt= {imagenInf?.filename}
                    width={1080}
                    height={758}
                />
            </div>
        </div>
    )
}

const ImagenBeneficio = ({urlImage, hideImage}) => {
    let image = urlImage.imagenBeneficio.url
    let id = urlImage.imagenBeneficio.id
    let filename = urlImage.imagenBeneficio.filename
    const [hide, setHide] = useState(hideImage)

    const handleShowImage = () => {
        setHide(!hide)
        gShowImage = hide
    }
    return (
        <>
        {hide ? <div key={id} className="fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] flex items-center top-[-0rem]" >
            <div className="z-50 animate__fadeInTopLeft animate__animated xl:w-[45vw] w-[100vw] h-[100vw] flex mx-auto items-center md:w-[60vw] lg:w-[50vw]" >
                <Image src={encodeURI(image)} width={4000} height={4000} alt={filename} onClick={handleShowImage}/>
            </div>
        </div>:null}
        </>
    );
}