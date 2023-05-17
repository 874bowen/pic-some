import React, {useEffect, useState} from "react";

interface Photo {
   url: string;
   id: string;
   isFavorite: boolean;
}

const Context = React.createContext<{allPhotos: Photo[], cartItems: Photo[], toggleFavorite: (id:string) => void, addToCart: (newItem: Photo) => void, removeFromCart: (id:string) => void, setCartItems: (value: any) => void} | undefined>(undefined)

const {Provider} = Context

function ContextProvider({children}: any) {
   const [allPhotos, setAllPhotos] = useState<Photo[]>([])
   const [cartItems, setCartItems] = useState<Photo[]>([])

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

   const addToCart = (newItem: Photo) => {
      setCartItems(prev => [...prev, newItem])
   }

   const removeFromCart = (id: string) => {
      setCartItems(prev => prev.filter(item => item.id !== id))
   }

   useEffect(() => {
      fetch(url).then(res => res.json()).then(res => {
         setAllPhotos(res)
      })
   }, [])
   
   console.log(cartItems)

   return (
      <Provider value={{allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart, setCartItems}}>
         {children}
      </Provider>
   )
}

export {ContextProvider, Context}