import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import * as ReactDOM from "react-dom";
import * as React from "react";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
