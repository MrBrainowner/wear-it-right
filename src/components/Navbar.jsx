const Navbar = () => {
  return (
    <div className="absolute w-full p-5 grid grid-flow-row grid-cols-5 gap-4">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="flex justify-end">
        <ul className="uppercase text-end">
          <li>home</li>
          <li>gallery</li>
          <li>trends</li>
          <li>contact</li>
          <li>about</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
