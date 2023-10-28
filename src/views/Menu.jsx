import { useState, useEffect } from "react"
import { db } from "../config/Firebase"
import { collection, getDocs } from "firebase/firestore"
import { Button, Card, CardGroup} from "react-bootstrap"

const Menu = () => {

    const [menu, setMenu] = useState([]);

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
        <CardGroup className="justify-content-center mt-3">
            {menu.map((plato) => (
                <div key={plato.id} className="mx-3 ms-1 text-center">    
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



