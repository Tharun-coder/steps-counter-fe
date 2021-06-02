import "./App.css";
import React, { useEffect, useState } from "react";
import { addSteps, getData } from "./helpers/controllers";
import Form from "./components/Form";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let res = await getData();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (steps) => {
    try {
      await addSteps(steps);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  console.log(data);

  const dateFormatter = (item) => moment(item).format("DD-MMMM-YY");

  return (
    <div className="App">
      <h1>Welcome to Steps Counter</h1>
      <Form handleClick={handleClick} />
      {/* Chart */}
      <ResponsiveContainer width={800} height={500} className="chart">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={dateFormatter} />
          <YAxis />
          <Tooltip labelFormatter={dateFormatter} />
          <Legend />
          <Bar dataKey="steps" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
