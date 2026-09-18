import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import {BookProvider} from "./context/BookContext.jsx"

function App() {
  return (
    <BrowserRouter>
  <BookProvider>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Books />} />
          {/* <Route path="/books" element={<Books />} /> */}
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </BookProvider>
    </BrowserRouter>
  );
}

export default App;