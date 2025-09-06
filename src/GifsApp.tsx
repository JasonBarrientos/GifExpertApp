import { useState } from "react"
import { GifsList } from "./gifs/GifsList"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['goku'])
  
  const handleTermClicked=(term:string)=>{
    console.log(term);
    
  }
  
  return (
    <>
      <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto"></CustomHeader>
      <SearchBar placeholder="Busca lo que quieras"></SearchBar>
      <PreviousSearches onLabelClick={handleTermClicked} searches={previousTerms}></PreviousSearches>
      <GifsList gifs={mockGifs} ></GifsList>
    </>



  )
}
