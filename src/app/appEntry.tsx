import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router-dom";
import { apiMockWorker } from "./apiMockWorkwer";
import ReactDOM from "react-dom/client";
import { router } from "./appRouter";

import { Provider } from "react-redux";
import { store } from "shared/model";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "shared/base.css";

apiMockWorker.start();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </Provider>
);
