import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter";
import { ProfileProvider } from "./context/ProfileContext";
import store from "./app/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ProfileProvider>
        <AppRouter />
      </ProfileProvider>
    </Provider>
  </StrictMode>
);
