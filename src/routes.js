import { Homepage, AddBook } from "./containers";

const routes = [
  {
    title: "Home Page",
    path: "/",
    exact: true,
    component: Homepage,
  },
  {
    title: "Add Book",
    path: "/add-book",
    exact: false,
    component: AddBook,
  },
];

export default routes;
