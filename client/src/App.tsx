import Layout from "pages/Layout";
import ThemeProvider from "shared_components/Theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
