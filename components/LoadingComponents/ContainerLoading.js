export const ConatinerLoading = () => {
    return (
      <div className="bg-white xl:w-[20vw]  w-[100vw] h-[60vh]  flex flex-col px-5 mb-6">
          <div className='flex flex-col'>
              <div className='bg-gray-300 xl:w-[20vw]  w-[90vw] h-[30vh] animate-pulseFixed'>
              </div>
              <div className='bg-gray-400 xl:w-[20vw]  w-[90vw] h-[3vh] relative bottom-[20px] rounded-md animate-pulseFixed'>
              </div>
          </div>
          <div className='flex flex-col relative bottom-4'>
              <div className='bg-gray-300 xl:w-[20vw] w-[90vw] h-[5vh] rounded animate-pulseFixed'></div>
          </div>
          <div className='flex flex-col border-t-2 border-gray-400 w-[50%] pt-3'>
              <div className='bg-gray-300 w-[20vw] h-[2vh] animate-pulseFixed'></div>
              <div className='bg-gray-300 w-[20vw] h-[2vh] animate-pulseFixed mt-2'></div>
          </div>
      </div>
    )
}