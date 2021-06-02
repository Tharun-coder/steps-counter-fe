import axios from "./apiConnect";

const getData = async () => {
  try {
    let res = await axios.get("/steps");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const addSteps = async (steps) => {
  try {
    axios.post("/steps/add", { steps });
  } catch (err) {
    console.log(err);
  }
};
export { getData, addSteps };
