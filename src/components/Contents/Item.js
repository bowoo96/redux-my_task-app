import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { itemActions } from "../Store/item-slice";

const Item = (props) => {
    const dispatch = useDispatch();

    const editHandler = () => {
        dispatch(itemActions.buttonChange());
        dispatch(itemActions.editItems(props.id));
    };

    return (
        <article className="grocery-item" data-id={props.id}>
            <p className="title">{props.title}</p>
            <div className="btn-container">
                <button
                    className="edit-btn"
                    type="button"
                    onClick={editHandler}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="delete-btn" type="button">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </article>
    );
};

export default Item;
