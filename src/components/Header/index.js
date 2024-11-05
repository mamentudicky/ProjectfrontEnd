import Gen1 from "./Generations/Gen1";
import Gen2 from "./Generations/Gen2";
import Gen3 from "./Generations/Gen3";
import Gen4 from "./Generations/Gen4";
const Generations = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Gen1 text="Gen1" />
      <Gen2 text="Gen2" />
      <Gen3 text="Gen3" />
      <Gen4 text="Gen4" />
    </div>
  );
};
export default Generations;