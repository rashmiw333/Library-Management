import { Link, useParams } from "react-router-dom";
import  useBooks  from "../context/BookContext";


function BookDetails() {

  const { bookId } = useParams();

  const {
    books,
    loading
  } = useBooks();


  if (loading) {

    return (
      <h3 className="text-center">
        Loading...
      </h3>
    );

  }


  const book = books.find(
    (book) => book._id === bookId
  );


  if (!book) {

    return (

      <div className="text-center">

        <h3>Book Not Found</h3>

        <Link
          to="/"
          className="btn btn-primary mt-3"
        >
          Back to Books
        </Link>

      </div>

    );

  }


  return (

    <div className="row justify-content-center">

      <div className="col-md-8">

        <div className="card shadow">

          <div className="card-body">

            <h2>{book.title}</h2>

            <hr />


            <p>
              <strong>Author:</strong>{" "}
              {book.author}
            </p>


            <p>
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


            <p>
              <strong>Description:</strong>
            </p>

            <p>
              {book.description}
            </p>


            <Link
              to="/"
              className="btn btn-secondary"
            >
              Back to Books
            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default BookDetails;