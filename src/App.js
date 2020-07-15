import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Views/Home"
import About from "./Views/About"
import Products from "./Views/Products"



function App() {
  return (
    <div class="relative pb-10 min-h-screen">
        <Router>
            <Header />
            <div class="p-3">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/products/:id">
                        <Products />
                    </Route>
                </Switch>
            </div>

            <Footer />
        </Router>
        
    </div>
  );
}

export default App;
