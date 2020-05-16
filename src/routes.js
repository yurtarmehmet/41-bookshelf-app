import React from "react";
import { Homepage, AddBook, BookDetail } from "./containers";

const routes = [
  {
    title: "Home Page",
    path: "/",
    exact: true,
    componentProps: {
    },
    component: Homepage,
  },
  {
    title: "Add Book",
    path: "/add-book",
    exact: false,
    componentProps: {
    },
    component: AddBook,
  },
  {
    title: "Edit Book",
    path: "/edit-book/:id",
    exact: false,
    componentProps: {
      isEdit: true
    },
    component: AddBook
  },
  {
    title: "Book Detail",
    path: "/book-detail/:id",
    exact: false,
    componentProps: {},
    component: BookDetail
  },
];

export default routes;
