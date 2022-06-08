import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../Store/item-slice";

const SubmitContent = () => {
    const dispatch = useDispatch();
    const buttonText = useSelector((state) => state.item.button);
    const [isInputData, setIsInputData] = useState("");

    // form 제출하면 ItemList 보이게 flag
    const submitHandler = (event) => {
        event.preventDefault();
        if (!isInputData) {
            return;
        } else {
            dispatch(itemActions.visible());
        }
    };

    // input value를 변경
    const inputHandler = (event) => {
        setIsInputData(event.target.value);
    };

    // 변경된 input value를 dipatch
    const submitButton = () => {
        if (!isInputData) {
            return;
        } else {
            dispatch(itemActions.addItems(isInputData));
        }
    };

    return (
        <form className="grocery-form" onSubmit={submitHandler}>
            <p className="alert"></p>
            <h3>grocery bud</h3>
            <div className="form-control">
                <input
                    type="text"
                    id="grocery"
                    placeholder="e.g. eggs"
                    onChange={inputHandler}
                />
                <button
                    type="submit"
                    className="submit-btn"
                    onClick={submitButton}
                >
                    {buttonText}
                </button>
            </div>
        </form>
    );
};

export default SubmitContent;
