import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Books = () => {
  const [book, setBook] = useState({ title: "" });
  const [isLoading, setIsLoading] = useState(true);
  const getBook = async (url: string) => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setBook(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBook("https://openlibrary.org/books/OL7353617M.json");
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      Books <h1>{book.title}</h1>
    </div>
  );
};
