import Layout from "./layout";
import "./styles/global.css";
import RouteComponent from "./routes/routes";

function App() {
  return (
    <Layout>
      <RouteComponent />
    </Layout>
  );
}
export default App;