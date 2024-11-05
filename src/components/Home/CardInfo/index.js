import Evoluation from "./Evoluation";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo"
const CardInfo = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Evoluation text="Evolution" />
      <TypeEffect text=" TyeEffect " />
      <Logo text="Logo" />
    </div>
  );
};
export default CardInfo;