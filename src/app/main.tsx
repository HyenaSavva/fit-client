import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import { apiMockWorker } from "./apiMockWorkwer";
import ReactDOM from "react-dom/client";
import App from "app/App";

import store from "app/store";
import { Provider } from "react-redux";

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
