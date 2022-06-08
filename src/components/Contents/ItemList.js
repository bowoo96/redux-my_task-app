import Item from "./Item";

import { useSelector } from "react-redux";

const ItemList = () => {
    const itemList = useSelector((state) => state.item.items);

    return (
        <div className="grocery-container show-container">
            <div className="grocery-list">
                {itemList.map((item) => (
                    <Item key={item.id} id={item.id} title={item.data} />
                ))}
            </div>
            <button className="clear-btn">clear items</button>
        </div>
    );
};

export default ItemList;
