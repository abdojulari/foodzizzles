
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router/Router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <AppRoutes />
            </Router>
        </QueryClientProvider>
    );
}

export default App;

