import Header from "./components/Header";
import ItemData from "./data/ItemData";
import ItemList from "./components/ItemList";
import {useState} from 'react';


function App(){

    const [item, setItem] = useState(ItemData)

    return (
        <>
            <Header />
            <div className="">  
            <ItemList 
                item = {item}
            />
            </div>
        
        </>
    )
}

export default App;