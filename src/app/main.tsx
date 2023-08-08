import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import { apiMockWorker } from "./apiMockWorkwer";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";

apiMockWorker.start();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </Provider>
);
