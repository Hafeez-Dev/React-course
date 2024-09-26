import React from "react";

function Button({theme, onClick}) {
  return (
    <div>
      <button
        className="h-10 px-6 font-semibold rounded-full text-white"
        type="submit"
        style={{backgroundColor: theme.background}}
        onClick={onClick}
      >
        {theme.color}
      </button>
    </div>
  );
}

export default Button;
