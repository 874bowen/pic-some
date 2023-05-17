import React, {useEffect, useState} from "react";

interface Photo {
   url: string;
   id: string;
   isFavorite: boolean;
}

const Context = React.createContext<{allPhotos: Photo[], toggleFavorite: (id:string) => void} | undefined>(undefined)

const {Provider} = Context

function ContextProvider({children}: any) {
   const [allPhotos, setAllPhotos] = useState<Photo[]>([])

   const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"


   const toggleFavorite = (id: string) => {     
      setAllPhotos(prev => {
         const updatedArr = prev.map(photo => {
            if(photo.id === id) {
               return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
         })
         return updatedArr
      })
   }

   useEffect(() => {
      fetch(url).then(res => res.json()).then(res => {
         setAllPhotos(res)
      })
   }, [])
   
   return (
      <Provider value={{allPhotos, toggleFavorite}}>
         {children}
      </Provider>
   )
}

export {ContextProvider, Context}