import { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'FA-1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FA-2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'ST-1',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'ST-2',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Pre-Board-1',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Pre-Board-2',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Final Exam',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Student_Graph extends PureComponent {

  render() {
    return (
        <BarChart
          width={850}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
    );
  }
}
