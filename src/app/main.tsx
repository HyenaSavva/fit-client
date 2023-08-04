import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "app/App";
import store from "app/store";

import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </Provider>
);
