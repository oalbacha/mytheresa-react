import * as React from "react";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import { GlobalProvider } from "./context/GlobalState";

export default function App({ serverData = null }) {
  return (
    <React.StrictMode>
      <GlobalProvider>
        <div>
          <Navbar />
          <Routes>
            {routes.map(({ path, fetchInitialData, component: C }) => (
              <Route
                key={path}
                path={path}
                element={
                  <C data={serverData} fetchInitialData={fetchInitialData} />
                }
              />
            ))}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </GlobalProvider>
    </React.StrictMode>
  );
}
