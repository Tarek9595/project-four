import { Link } from "react-router-dom";

export default function MyCard(props) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={props.img}
            alt="Shoes"
            className="w-full h-50 object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.price} EGP</p>
          <div className="card-actions justify-end">
            {" "}
            <Link to={"/product/" + props.id} className="btn btn-success">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
