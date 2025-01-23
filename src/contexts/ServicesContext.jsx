import { createContext, useState } from "react";

export const ServiceContext = createContext();

export const ServiceProvider = ({children}) => {
    const [isICT , setIsICT] = useState(true);

    return (
       <ServiceContext.Provider
         value={{isICT , setIsICT}}
       >
         {children}
       </ServiceContext.Provider>
    )

}
