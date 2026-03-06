import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Browse from "../pages/Browse";
import Error from "../pages/Error";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/browse" element={<Browse />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export default AppRoutes;