import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, catagory, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Coffee has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="card card-side shadow-xl p-6 bg-amber-50 ">
      <figure>
        <img src={photo} />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>

        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-2">
            <Link className="btn ">View</Link>
            <Link className="btn ">Edit</Link>
            <Link className="btn ">Delete</Link>
            {/* <Link to={`updateCoffee/${_id}`}>Edit</Link>
            <Link onClick={() => handleDelete(_id)} className="btn">
              Delete
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
