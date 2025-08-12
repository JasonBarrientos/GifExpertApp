import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"

describe('Pruebas component  <GifGrid></GifGrid>', () => {
    const category = ['One Punch']
    test('Debe de mostrar el loading inicialmente', () => {
        render(<GifGrid category={category} > </GifGrid>)
        expect(screen.getByText('Cargando...')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()

        screen.debug()
    })

    test('Debe de mostrar items cuando se cargan las imagenes', () => { 
        
     })
})