import React, { useContext, useEffect } from "react";
import Input from "../components/input/Input";
import Dropdown from "../components/dropdown/Dropdown";
import { ItemContext } from "../context/ItemContextProvider";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { state, dispatch, items, setItems } = useContext(ItemContext);
  let cpyItems = [...items];
  const { id } = useParams();
  const editItem = cpyItems[parseInt(id)];
  const navigate = useNavigate();

  useEffect(() => {
    if (editItem) {
      dispatch({
        type: "edit_item",
        payload: {
          name: editItem.name,
          price: editItem.price,
          quantity: editItem.quantity,
          town: editItem.town,
          payment_method: editItem.payment_method,
        },
      });
    }

    // console.log(state);
  }, [id]);

  const saveChanges = (e) => {
    e.preventDefault();

    let newItems = [];

    cpyItems[id] = state;

    newItems = [cpyItems];

    setItems(newItems);

    console.log("new item", items);

    navigate("/orders");
  };
  return (
    <form onSubmit={(e) => saveChanges(e)} className="flex flex-col gap-3">
      <Input
        label={"Item Name: "}
        type={"text"}
        placeholder={"Enter item name"}
        value={state.name}
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />
      <Input
        label={"Item Price: "}
        type={"number"}
        placeholder={"Enter item price"}
        value={state.price}
        onChange={(e) => dispatch({ type: "price", payload: e.target.value })}
      />
      <Input
        label={"Item Quantity: "}
        type={"number"}
        placeholder={"Enter item quantity"}
        value={state.quantity}
        onChange={(e) =>
          dispatch({ type: "quantity", payload: e.target.value })
        }
      />

      <div className="flex flex-col gap-3">
        <Dropdown
          options={["tubigon", "calape", "loon"]}
          label={"select town"}
          onChange={(e) => dispatch({ type: "town", payload: e.target.value })}
        />
        <Dropdown
          options={["gcash", "paymaya", "cash on delivery"]}
          label={"select payment method"}
          onChange={(e) =>
            dispatch({ type: "payment", payload: e.target.value })
          }
        />
      </div>

      <button
        className="inline-block mx-auto w-1/2 py-2 px-3 rounded-full border-green-600 border-[1px] font-semibold hover:bg-green-600 hover:text-white duration-100"
        type="submit"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Edit;
