import Gen1 from "./Gen 1";
import Gen2 from "./Gen 2";
import Gen3 from "./Gen 3";
import Gen4 from "./Gen 4";
const Generation = ({ text }) => {
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
export default Generation;