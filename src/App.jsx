import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCoctailLoader } from "./pages/Cocktail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCoctailLoader(queryClient),
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>;
};
export default App;
