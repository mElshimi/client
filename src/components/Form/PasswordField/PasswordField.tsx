import { Controller, FieldValues } from "react-hook-form";
import { ITextFieldProps } from "../../../interfaces/interfaces";
import { useState } from "react";
import { FaKey, FaLock, FaLockOpen } from "react-icons/fa";

const PasswordField = <TFieldValue extends FieldValues>({
  name,
  label,
  error,
  placeholder,
  control,
  defaultValue,
}: ITextFieldProps<TFieldValue>) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <div className="w-full  my-1">
            <div>
              <label
                htmlFor={name}
                className={`block text-sm font-medium mb-2 ${
                  error ? "text-red-500" : "text-white"
                }`}
              >
                {label}
              </label>
              <div className="relative">
                <div
                  className={`absolute inset-y-0 end-0 flex items-center z-20 pe-4`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
                  >
                    <FaKey />
                  </button>
                </div>
                <input
                  autoComplete="false"
                  {...field}
                  type={showPassword ? "text" : "password"}
                  id={name}
                  className={`bg-transparent py-3 px-4 ps-11 block w-full border-2 ${
                    error ? "border-red-500" : "border-white"
                  } shadow-sm rounded-lg text-sm focus:outline-none  disabled:opacity-50 disabled:pointer-events-none text-white ${
                    error ? "placeholder-red-500" : "placeholder-white"
                  }`}
                  placeholder={placeholder}
                />
                <div
                  className={`absolute inset-y-0 start-0 flex ${
                    error ? "text-red-500" : "text-white"
                  } items-center pointer-events-none z-20 ps-4`}
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </div>
              </div>
              {error && <p className="text-red-500 ps-2"> {error}</p>}
            </div>
          </div>
        )}
      />
    </>
  );
};

export default PasswordField;
