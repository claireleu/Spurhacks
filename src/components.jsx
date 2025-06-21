export function Word({ className, divClassName, state, text }) {
  return (
    <div className={`${className} ${divClassName} ${state} bg-white rounded-lg px-4 py-2 shadow-md cursor-pointer`}>
      {text}
    </div>
  );
}