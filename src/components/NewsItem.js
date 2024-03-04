import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  return (
    <div className="card my-1">
      <div>
        <span
          className="badge rounded-pill bg-danger"
          style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0", top: "-10px" }}
        >
          {props.source}
        </span>
      </div>
      <img
        src={props.imageUrl ? props.imageUrl : "/news.jpg"}
        className="card-img-top"
        style={{ height: "12rem" }}
        alt="..."
      />
      <div
        className={`card-body bg-${props.mode}`}
        style={props.mode === "light" ? { color: "black" } : { color: "white", border: ".5px solid white" }}
      >
        <h5 className="card-title">
          <span>{props.title}</span>
        </h5>
        <p className="card-text">{props.description ? props.description : "Read the article for full description."}</p>
        <label className="card-text">
          <small className={props.mode === "light" ? "text-muted" : "text-white-50"}>
            By {props.author ? props.author : "Unknown"}
          </small>
        </label>
        <p className="card-text">
          <small className={props.mode === "light" ? "text-muted" : "text-white-50"}>
            {new Date(props.date).toGMTString()}
          </small>
        </p>
        {props.description === "[Removed]" ? (
          <div style={{ padding: "3px 0px 3px 0px" }}>&nbsp;</div>
        ) : (
          <Link className="btn btn-sm btn-primary" to={props.newsUrl} target="_blank" rel="noreferrer">
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
