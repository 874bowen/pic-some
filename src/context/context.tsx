import React, {useEffect, useState} from "react";

interface Photo {
   url: string;
   id: string;
   isFavorite: boolean;
}

const Context = React.createContext<{allPhotos: Photo[]} | undefined>(undefined)

const {Provider} = Context

function ContextProvider({children}: any) {
   const [allPhotos, setAllPhotos] = useState<Photo[]>([])

   const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

   useEffect(() => {
      fetch(url).then(res => res.json()).then(res => {
         setAllPhotos(res)
      })
   }, [])
   
   return (
      <Provider value={{allPhotos}}>
         {children}
      </Provider>
   )
}

export {ContextProvider, Context}