import React from "react";

export default function LampCard({ lamp }) {
    return (
        <div className="card">
            <img src={lamp.image} alt={lamp.name} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{lamp.name}</h2>
                <p className="card-description">{lamp.description}</p>
                <div className="card-info">
                    <p className="card-price">{lamp.price} บาท</p>
                    <p className="card-stock">Stock: {lamp.stock}</p>
                </div>
            </div>
        </div>
    );
}
