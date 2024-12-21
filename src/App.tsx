import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackgroundBeams } from "./components/ui/background-beams";
import UserProfile from "./UserProfile";
import Card from "./Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for root path ("/") */}
        <Route 
          path="/" 
          element={
            <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
              <BackgroundBeams />
             <Card/>
            </div>
          }
        />
        
        {/* Route for user profile */}
        <Route 
          path="/result" 
          element={
            
              <UserProfile />
           
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
