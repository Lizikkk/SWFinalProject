import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query/queryClient';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;