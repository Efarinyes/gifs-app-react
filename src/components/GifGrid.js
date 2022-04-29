import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {categoria} ) => {
    
    const { data: images, loading} = useFetchGifs( categoria )

    // CODI FUNCIONAL SENSE EL custom hook useFetchGifs
    // LA NETEJA DEL COMPONENT ES CONSIDERABLE


    //  const apiKey = 'Aqui va el teu APIKEY'
    //  const url = 'https://api.giphy.com/v1/gifs/search/'
    //  const categoriaConsulta = { categoria }

    // const cercaGifs = async() => {
        
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=AQUI EL TEU APIKEY`;
    //     const resp = await fetch( url );
    //     const {data} = await resp.json();
    //     const gif = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })
    //     console.log(gif);
    //     setimages( gif );
    // }
   // cercaGifs()

    return (
        <>
         <h3 className="animate__animated animate__fadeIn"> {categoria} </h3>
         
        { loading && <p className ="animate__animated' animate__flash">Carregant...</p>}
          <div className='card-grid'>
                    {
                        images.map( img => (
                            <GifGridItem 
                                key = { img.id}
                                {...img}
                            />
                        ))
                    }
                
                
            </div> 
        </>
    )
}


