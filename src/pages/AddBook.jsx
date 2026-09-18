import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  useBooks  from "../context/BookContext";


function AddBook() {

  const navigate = useNavigate();

  const {
    addBook
  } = useBooks();


  const [title, setTitle] = useState("");

  const [author, setAuthor] = useState("");

  const [category, setCategory] =
    useState("Programming");

  const [status, setStatus] =
    useState("Available");

  const [description, setDescription] =
    useState("");


  const [loading, setLoading] =
    useState(false);


  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);


    const newBook = {

      title,
      author,
      category,
      status,
      description

    };


    try {

      await addBook(newBook);

      alert("Book added successfully!");

      navigate("/");

    } catch (error) {

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="row justify-content-center">

      <div className="col-md-6">

        <div className="card shadow">

          <div className="card-body">

            <h3 className="text-center mb-4">
              Add New Book
            </h3>


            <form onSubmit={handleSubmit}>


              {/* Title */}

              <div className="mb-3">

                <label className="form-label">
                  Book Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  required
                />

              </div>


              {/* Author */}

              <div className="mb-3">

                <label className="form-label">
                  Author
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={author}
                  onChange={(e) =>
                    setAuthor(e.target.value)
                  }
                  required
                />

              </div>


              {/* Category */}

              <div className="mb-3">

                <label className="form-label">
                  Category
                </label>

                <select
                  className="form-select"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                >

                  <option value="Programming">
                    Programming
                  </option>

                  <option value="Fiction">
                    Fiction
                  </option>

                  <option value="Self Help">
                    Self Help
                  </option>

                  <option value="Biography">
                    Biography
                  </option>

                </select>

              </div>


              {/* Status */}

              <div className="mb-3">

                <label className="form-label">
                  Status
                </label>

                <select
                  className="form-select"
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                >

                  <option value="Available">
                    Available
                  </option>

                  <option value="Issued">
                    Issued
                  </option>

                </select>

              </div>


              {/* Description */}

              <div className="mb-3">

                <label className="form-label">
                  Description
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                />

              </div>


              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >

                {loading
                  ? "Adding..."
                  : "Add Book"}

              </button>


            </form>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AddBook;