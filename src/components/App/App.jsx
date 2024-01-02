import { Route, Routes, Navigate } from "react-router-dom";

import { StyledApp } from "./App.styled";


import { routes } from "routes";
import { Suspense, lazy } from "react";
import Header from "components/Header/Header";
import Loader from "components/Loader/Loader"

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies"));
const MovieDetails = lazy(() => import("../../pages/MovieDetails/MovieDetails"));


export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routes.HOME}>
            <Route index element={<Home />} />
            <Route path={routes.MOVIES} element={<Movies />} />
            <Route path={`${routes.MOVIE_ID}/*`} element={<MovieDetails />} />
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </StyledApp>
  );
};
