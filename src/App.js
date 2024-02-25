import "./App.css";
import { properties } from "./dummyData";
import PropertyList from "./components/PropertyList";
function App() {
  return (
    <>
      <div style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h1 className="py-4">Search properties to rent</h1>
          <PropertyList properties={properties} />
        </div>
      </div>
    </>
  );
}

export default App;
