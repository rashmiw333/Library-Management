import { useState } from "react";
import  useBooks  from "../context/BookContext";
import BookCard from "../components/Bookcard";


function Books() {

  const {
    books,
    loading,
    error
  } = useBooks();


  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");


  if (loading) {

    return (
      <h3 className="text-center">
        Loading books...
      </h3>
    );

  }


  if (error) {

    return (
      <h3 className="text-center text-danger">
        Error: {error}
      </h3>
    );

  }


  const filteredBooks = books.filter((book) => {

    const matchesSearch =
      book.title
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      category === "All" ||
      book.category === category;


    return matchesSearch && matchesCategory;

  });


  return (

    <div>

      <h2 className="text-center mb-4">
        Library Management System
      </h2>


      {/* Search and Filter */}

      <div className="row mb-4">

        <div className="col-md-8">

          <input
            type="text"
            className="form-control"
            placeholder="Search books by title..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <div className="col-md-4">

          <select
            className="form-select"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >

            <option value="All">
              All Categories
            </option>

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

      </div>


      {/* Book List */}

      <div className="row">

        {filteredBooks.length > 0 ? (

          filteredBooks.map((book) => (

            <BookCard key={book._id} book={book}
            />

          ))

        ) : (

          <div className="text-center">

            <h5>No books found.</h5>

          </div>

        )}

      </div>

    </div>

  );

}

export default Books;