import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="text-black bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
