import { GifsList } from "./gifs/GifsList"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto"></CustomHeader>
    <SearchBar placeholder="Busca lo que quieras"></SearchBar>
   <PreviousSearches searches={['goku','saitama','vegueta']}></PreviousSearches>

    {/*Gifs*/}
    <GifsList gifs={mockGifs}></GifsList>
    </>



  )
}
