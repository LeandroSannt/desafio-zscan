import States from "./pages/States";
import GlobalStyles from "./global";
import { StateProvider } from "./hooks/useState";
import { ToastProvider } from "./hooks/useToast";
function App() {
  return (
    <ToastProvider>
      <StateProvider>
        <GlobalStyles />
        <States />
      </StateProvider>
    </ToastProvider>
  );
}

export default App;
