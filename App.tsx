import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TenantManager from "./get/TenantManager";
import GetTokenForPB from "./gem/GetTokenForPB";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/get/tenant-manager" />} />
            <Route path="/get/tenant-manager" element={<TenantManager />} />
            <Route path="/gem/get-token-for-pb" element={<GetTokenForPB />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
