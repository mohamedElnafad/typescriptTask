import React, { useRef } from "react";
import "./inputField.css";

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAddToDoItem: (event: React.FormEvent) => void;
}

const InputField = ({ toDo, setToDo, handleAddToDoItem }: Props) => {
  const handleChange = (event: any) => {
    setToDo(event.target.value);
  };

  // useRef here to remove the blur from outside the input when press Enter button
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddToDoItem(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        placeholder="Enter Task"
        type="input"
        className="input__box"
        value={toDo}
        onChange={handleChange}
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
