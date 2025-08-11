import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas component <GifItem></GifItem> ', () => { 
const title= 'titulo prueba';
const url='http://url.prueba.com'

    test('Debe coincidir con el snatshop', () => { 

        const {container}= render(<GifItem title={ title  } url= { url}/>)
        expect(container).toMatchSnapshot()
     })
     test('Debe demsotrar la iamgen con el url y el alt indicado', () => { 
        render(<GifItem title={ title  } url= { url}/>)
        const {src,alt}=screen.getByRole('img')
        expect(src).toContain(url)
        expect(alt).toContain(title)
      })
       test('Debe demsotrar titulo en el componente', () => { 
        render(<GifItem title={ title  } url= { url}/>)
        expect(screen.getByText(title)).toBeTruthy();
      })

 })