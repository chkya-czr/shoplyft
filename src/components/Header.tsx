import { HeaderText } from "../constants/Text";

function Header() {
  return (
    <div className="flex bg-black justify-center py-1">
      <p className="text-white">{HeaderText}</p>
    </div>
  );
}

export default Header;
