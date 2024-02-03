function Navbar({ children }) {
  return (
    <div className="w-full shadow-sm flex flex-row justify-end border-b gap-2">
      {children}
    </div>
  );
}

export default Navbar;
