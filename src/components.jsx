export function Word({ className, divClassName, state, text, onClick, disabled }) {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`${className} ${divClassName} ${state} rounded-lg px-4 py-2 shadow-md ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {text}
    </div>
  );
}