import React, { useRef } from "react";

interface ITodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };
  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Set the task"
        onKeyPress={KeyPressHandler}
      />
      <label htmlFor="title">Set the task</label>
    </div>
  );
};
