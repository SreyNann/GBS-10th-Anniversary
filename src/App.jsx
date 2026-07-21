import { Router } from "./routes";
import { LanguageProvider } from "./context/language";
function App() {
  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
}

export default App;
