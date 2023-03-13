import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./utils/trpc";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:4000/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <div>
            <a href="https://trpc.io/v" target="_blank">
              <img src="/trpc.svg" className="logo" alt="tRPC logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src="/react.svg" className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>tRPC + React</h1>
          <div className="card">
            <Welcome name="bitrockers" />
          </div>
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
