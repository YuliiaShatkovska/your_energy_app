import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "components/Header/Header";

const HomePage = lazy(() => import("../../pages/HomePage"));
const FavouritePage = lazy(() => import("../../pages/FavouritesPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
