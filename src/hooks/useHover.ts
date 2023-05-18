import { useEffect, useState, useRef } from "react";

function useHover(){
      const ref = useRef<HTMLDivElement>(null);
      const [hovered, setHovered] = useState(false);    
      const enter = () => setHovered(true);
      const leave = () => setHovered(false);

      useEffect(() => {
         const element = ref.current;
         element?.addEventListener("mouseenter", enter);
         element?.addEventListener("mouseleave", leave);
      
         // return a clean up function when the component unmounts
         return () => {
            element?.removeEventListener("mouseenter", enter);
            element?.removeEventListener("mouseleave", leave);
         }
      }, []);
      

      return [hovered, ref];
}

export default useHover;