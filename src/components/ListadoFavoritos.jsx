import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { MyContext } from './context/MyContext';
import { Link } from 'react-router-dom'


const ListadoFavoritos = props => {
    const { fotos, setFotos, favoritos, setFavoritos } = useContext(MyContext)
    function handleClick(id) {
        const indice = fotos.findIndex(foto => foto.id == id);
        fotos[indice].liked = !fotos[indice].liked;
        setFotos([...fotos]);
    }
    return (
        <>
            <Container className="d-flex flex-wrap gap-2 pt-4">
                {fotos.map((foto) => {
                    if (foto.liked) {
                        console.log('favorito')
                        return (
                            <Card style={{ width: '18rem' }} key={foto.id} onClick={() => handleClick(foto.id)}>
                                <Card.Img variant="top" src={foto.src.original} />
                                <i className={`fa-solid fa-heart fa-2x ${foto.liked}`}></i>
                            </Card>
                        )
                    }
                })}
            </Container >
        </>
    )
}



export default ListadoFavoritos