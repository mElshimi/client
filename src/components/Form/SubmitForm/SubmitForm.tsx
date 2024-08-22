import { Button } from "flowbite-react";
import { ISubmitForm } from "../../../interfaces/interfaces";

const SubmitForm = ({ children, disabled, className }: ISubmitForm) => {
  return (
    <>
      <Button
        disabled={disabled}
        className={`bg-[#06b6d4] hover:scale-105 hover:shadow-lg duration-700 ${className}`}
        type="submit"
      >
        {children}
      </Button>
    </>
  );
};

export default SubmitForm;
