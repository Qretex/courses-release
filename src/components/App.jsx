import Main from "./Main";
import CoursePage from "./CoursePage";
import Nav from "./Nav";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [target, setTarget] = useState("")
  return (
    <div className="root">
       <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Main  isOpen={isOpen} setOpen={setOpen} heading={heading} setHeading={setHeading}  target={target} setTarget={setTarget} ></Main>} /> {/* Default component */}
        </Route>
        <Route path="/course" element={<CoursePage  isOpen={isOpen} setOpen={setOpen} heading={heading} setHeading={setHeading}  target={target} setTarget={setTarget} ></CoursePage>}>

        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
