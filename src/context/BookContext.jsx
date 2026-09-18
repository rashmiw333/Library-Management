import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const BookContext = createContext();
const API_URL = "https://library-management-bk.vercel.app/books";


export function BookProvider({ children }) {

  const [refresh, setRefresh] = useState(0);

  const {
    data: books,
    loading,
    error
  } = useFetch(`${API_URL}?refresh=${refresh}`, []);


  // Add Book
  const addBook = async (newBook) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
      });


      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to add book");
      }
      setRefresh((prev) => prev + 1);
      return data;
    } catch (error) {
      throw error;
    }

  };


  // Delete Book
  const deleteBook = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE"
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to delete book");
      }
      setRefresh((prev) => prev + 1);
      return data;
    } catch (error) {
      throw error;
    }

  };


  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        error,
        addBook,
        deleteBook
      }}
    >
      {children}
    </BookContext.Provider>
  );

}


function useBooks() {
  return useContext(BookContext);
}

export default useBooks;