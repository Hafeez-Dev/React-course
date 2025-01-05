import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <>
        <div className="bg-white p-4 rounded-lg">
          <div className="relative bg-inherit">
            <input
              type={type}
              id={id}
              ref={ref}
              placeholder={label}
              className={`${className} peer bg-transparent h-10 w-72 rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600`}
              {...props}
            />
            {label && (
              <label
                htmlFor={id}
                className={`absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all`}
              >
                {label}
              </label>
            )}
          </div>
        </div>
      </>
    );
  }
);

export default Input;
