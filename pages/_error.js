function Error({ statusCode }) {
  return (
    <div className="w-[94vw] h-[100vh] flex flex-row justify-center items-center">
      <div className="border-r-2 border-r-black py-6">
        <p className="font-Volkhov text-black px-2 text-[1rem] md:text-[1.5rem] md:px-12 ">
          {`Error: ${statusCode}`}
        </p>
      </div>
      <p className="font-Volkhov text-black px-2 text-[1rem] md:text-[1.5rem] md:px-12 ">
        {statusCode === 404 ? 'Página no encontrada': `Se ha producido un error en el cliente`}
      </p>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error