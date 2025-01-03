import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [userDelete, setUserDelete] = useState("");

    return (
        <>
            <Navbar />
            <div className="container border rounded shadow-lg p-4 bg-light">
                {store.contacts.map((item) => {
                    return (
                        <div className="row border-bottom py-3 align-items-center" key={item.id}>
                            <div className="col-2">
                                <img
                                    src="https://picsum.photos/100/100"
                                    alt="Contact"
                                    className="rounded-circle shadow-sm"
                                />
                            </div>
                            <div className="col-6">
                                <h5 className="text-primary">{item.name}</h5>
                                <p className="mb-1">
                                    <i className="fa-solid fa-location-dot pe-2 text-danger"></i>
                                    {item.address}
                                </p>
                                <p className="mb-1">
                                    <i className="fa-solid fa-phone pe-2 text-success"></i>
                                    {item.phone}
                                </p>
                                <p className="mb-0">
                                    <i className="fa-solid fa-envelope pe-2 text-info"></i>
                                    {item.email}
                                </p>
                            </div>
                            <div className="col-4 text-end">
                                <Link to={`/edit-contact/${item.id}`}>
                                    <button type="button" className="btn btn-outline-primary mx-2 shadow-sm">
                                        <i className="fa-solid fa-pencil"></i> Editar
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setUserDelete(item.id)}
                                    className="btn btn-outline-danger shadow-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    <i className="fa-solid fa-trash"></i> Eliminar
                                </button>
                            </div>

                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content bg-light shadow">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-danger" id="exampleModalLabel">
                                                ¿Seguro que quieres eliminar este contacto?
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            Esta acción no se puede deshacer.
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => actions.deleteContact(userDelete)}
                                                className="btn btn-dark"
                                                data-bs-dismiss="modal"
                                            >
                                                Confirmar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
