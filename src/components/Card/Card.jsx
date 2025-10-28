import React from "react";
import "./Card.css";

export default function Card({ image, title, description, tags }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <div className="card-tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className={`tag tag-${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
