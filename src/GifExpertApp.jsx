import { useState } from "react"
import { AddCategory,GifGrid } from "./components"


export const GifExpertApp = () => {
 
 //esto se utiliza cuando se necesita cambiar el listado del html
 const [categories, setCategories] = useState(['One punch'])

 const onCategory = (newcategory) => {

  //Valido que la categoria no exista 
  if (categories.includes(newcategory)) return;
  
  setCategories([newcategory, ...categories])


 }

  return (
    <>

{/** titulo */}
        <div>GifExpertApp</div>
{/** input */}
<AddCategory 
  // 1 forma
  // setCategorias={setCategories} 

  // 2 forma
  onNewcategory={event => onCategory(event)}

/>
{/** listado */}

{categories.map(
  (category) => (
    <GifGrid
    key={category}
    category={category}
    />
  )
)}
        {/** listado de item */}
    </>



  )
}
