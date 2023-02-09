import { TarifarioContext } from "./tarifarioContext"

export const TarifarioProvider = ({children, data}) => {

    return(
    <TarifarioContext.Provider value={data}>
        {children}
    </TarifarioContext.Provider>
    )

}