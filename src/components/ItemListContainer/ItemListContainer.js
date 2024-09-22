import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Services/firebase/firebaseConfig";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            })
            .catch((error) => {
                console.error("Error al obtener datos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoria]);

    return (
        <div className="container mt-4">
            {loading ? (
                <Row>
                    <Col className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </Spinner>
                    </Col>
                </Row>
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    );
};

export default ItemListContainer;