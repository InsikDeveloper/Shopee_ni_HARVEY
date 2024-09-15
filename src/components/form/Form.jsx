import React, { useContext } from "react";
import Input from "../input/Input";
import Dropdown from "../dropdown/Dropdown";
import { ItemContext } from "../../context/ItemContextProvider";

const Form = () => {
  const { state, dispatch, items, setItems } = useContext(ItemContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, state]);

    console.log(state);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
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
        onChange={(e) =>
          dispatch({ type: "price", payload: parseFloat(e.target.value) })
        }
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
        Add to Cart
      </button>
    </form>
  );
};

export default Form;
