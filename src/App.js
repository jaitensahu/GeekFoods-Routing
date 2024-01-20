import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Food from "./Components/Food/Food";
import Restaurants from "./Components/Restaurants/Restaurants";
import Contact from "./Components/Contact/Contact";
import Quote from "./Components/Quote/Quote";
import Layout from "./Components/Food/Layout";
import ShowFoodByCategory from "./Components/Food/ShowFoodByCategory";
import Datastore from "./Components/DataStore/Datastore";
import ShowMealDetails from "./Components/Food/ShowMealDetails";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/restaurants",
      element: <Restaurants />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/quote",
      element: <Quote />,
    },
    {
      path: "/food",
      element: <Layout />,
      children: [
        {
          path: "/food",
          element: <Food />,
        },
        {
          path: "/food/:category",
          element: <Layout />,
          children: [
            {
              path: "/food/:category/",
              element: <ShowFoodByCategory />,
            },
            {
              path: "/food/:category/:id",
              element:<ShowMealDetails />
            }
          ],
        },
      ],
    },
  ]);

  return (
    <Datastore>
      <RouterProvider router={router} />
    </Datastore>
  ); 

}

export default App;
