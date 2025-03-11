import { useState, useEffect } from "react"
import { db } from "../config/Firebase"
import { collection, getDocs } from "firebase/firestore"
import { Button, Card, CardGroup} from "react-bootstrap"
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from "../components/CardSkeleton"

const Menu = () => {

    const [menu, setMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getMenu = async() => {
            try {
                const collectionRef = collection(db, "Menus");
                const response = await getDocs(collectionRef)
                
                const docs = response.docs.map((doc) => {
                    const data = doc.data()  //info de cada doc que guarda firestore
                    return data
                })

                setMenu(docs);
                setIsLoading(false);

            } catch (error) {
                console.log(error)
            }
        }
        getMenu();
    }, [])

  return (
    //Aquí va el menú
    <div id="menu-fondo">
        <h1 className="text-center">Menú</h1>
        {/* {isLoading && <p>Cargando...</p>} */}
        
        <CardGroup className="justify-content-center mt-3" >
        {isLoading && <CardSkeleton cards={15} />}
            {menu.map((plato) => (
                <div key={plato.id } className="mx-3 ms-1 text-center" >    
                    <Card style={{width: "18rem", height:"380px"}}>
                        <Card.Img style={{height: "200px"}} variant="top" src={plato.imagen} alt={plato.nombre} />
                        <Card.Body>
                            <Card.Title>{plato.nombre}</Card.Title>
                            <Card.Text>{plato.detalle}</Card.Text>
                            <Button variant="black" className="boton-menu">Precio:${plato.precio} clp</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}            
        </CardGroup>
    </div>
  )
}

export default Menu



