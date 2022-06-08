import "./App.css";
import SubmitContent from "./components/Contents/SubmitContent";
import ItemList from "./components/Contents/ItemList";

import { useSelector } from "react-redux";

function App() {
    const itemListShow = useSelector((state) => state.item.show);

    return (
        <div className="App">
            <div className="section-center">
                <SubmitContent />
                {itemListShow && <ItemList />}
            </div>
        </div>
    );
}

export default App;
