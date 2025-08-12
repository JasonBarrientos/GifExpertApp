import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas component  <GifGrid></GifGrid>', () => {
    const category = ['One Punch']
    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })
        render(<GifGrid category={category} > </GifGrid>)
        expect(screen.getByText('Cargando...')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()

    })

    test('Debe de mostrar items cuando se cargan las imagenes', () => { 
        const gifs= [
            {
                id:'abc',
                title:' saitama',
                url:'rul de saitama'
            }, {
                id:'abc',
                title:' goku',
                url:'rul de goku'
            }
        ]
          useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        })
        render(<GifGrid category={category} > </GifGrid>)
        expect(screen.getAllByRole('img').length).toBe(2)
        screen.debug()
     })
})