import React, { useContext } from 'react'
import { useEffect } from "react";
import { MyContext } from './context/MyContext';


const ReadAPI = props => {
    const { fotos, setFotos } = useContext(MyContext)
    useEffect(() => {
        ReadAPI()
    }, [])
    async function ReadAPI() {
        try {
            var misCabeceras = new Headers();
            misCabeceras.append('Authorization', 'G3VL793bzpbjJjspqglfU12iFM08K4LkSVMCs4JU9gFfXbG1rapRNwc2');
            const response = await fetch('https://api.pexels.com/v1/curated?per_page=20', {
                method: 'GET',
                headers: misCabeceras,
                mode: 'cors',
                cache: 'default'
            })
            const data = await response.json()

            setFotos(data.photos)
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <></>
    )
}


export default ReadAPI