import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="info-cards">
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      <p className="info-card-title">{props.title}</p>

      {expanded ? (
        <p className="info-card-description">{props.description}</p>
      ) : (
        <p className="info-card-description">{props.description.slice(0, 100)}...</p>
      )}

      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default InformationCard;

