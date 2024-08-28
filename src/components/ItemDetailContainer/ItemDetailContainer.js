import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Services/firebase/firebaseConfig'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()){
                console.log("Document data:", resp.data());
                setItem({ ...resp.data(), id: resp.id });
                }
            })
            .catch((error) => console.log("Error", error))
    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;