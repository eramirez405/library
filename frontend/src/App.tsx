import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
