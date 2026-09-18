import { Link } from "react-router-dom";
import  useBooks  from "../context/BookContext";


function BookCard({ book }) {

  const {
    deleteBook
  } = useBooks();


  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );


    if (!confirmDelete) {
      return;
    }


    try {

      await deleteBook(book._id);

      alert("Book deleted successfully.");

    } catch (error) {

      alert(error.message);

    }

  };


  return (

    <div className="col-md-6 col-lg-4 mb-4">

      <div className="card shadow-sm h-100">

        <div className="card-body">

          <h5 className="card-title">
            📕 {book.title}
          </h5>


          <p className="mb-2">
            <strong>Author:</strong>{" "}
            {book.author}
          </p>


          <p className="mb-2">
            <strong>Category:</strong>{" "}
            {book.category}
          </p>


          <p>

            <strong>Status:</strong>{" "}

            <span
              className={
                book.status === "Available"
                  ? "badge bg-success"
                  : "badge bg-warning text-dark"
              }
            >
              {book.status}
            </span>

          </p>


          <div className="mt-3">

            <Link
              to={`/books/${book._id}`}
              className="btn btn-primary me-2"
            >
              View Details
            </Link>


            <button
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default BookCard;