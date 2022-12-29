import {Route,Routes} from 'react-router-dom'
import {Product} from "./components/Product";
import {ProductPages} from "./pages/ProductPages";
import {AboutPages} from "./pages/AbouttPages";


function App() {
    return(
        <Routes>
            <Route path="/" element={<ProductPages/>}></Route>
            <Route path="about" element={<AboutPages/>}></Route>

        </Routes>

    )

}

export default App;
