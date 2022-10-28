import RVLOGO from '../../public/RV logo.png';

export const TarifarioLoadign = () =>{

    return(
        <section className="w-[94vw] h-[100vh] flex justify-center items-center bg-white z-50 flex-col">
            <img src={RVLOGO.src} alt="Logo-RV" className='w-[25%] animate-pulse'/>
            <p className="text-[2.5rem] text-black font-Volkhov">Cargando Tarifario...</p>
        </section>
    );


}