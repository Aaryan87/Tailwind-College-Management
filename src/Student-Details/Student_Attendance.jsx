import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'FEE',
    attendance: 70, // Adjusted value to represent percentage out of 100
    amt: 2400,
  },
  {
    name: 'PA',
    attendance: 80, // Adjusted value to represent percentage out of 100
    amt: 2210,
  },
  {
    name: 'VES',
    attendance: 55,
    amt: 2290,
  },
  {
    name: 'NALR-1',
    attendance: 90.123,
    amt: 2000,
  },
  {
    name: 'Back-End',
    attendance: 87.23,
    amt: 2181,
  },
  {
    name: 'System-Design',
    attendance: 23.67,
    amt: 2500,
  },
  {
    name: 'NALR-2',
    attendance: 34.98,
    amt: 2100,
  },
];

export default class Student_Attendance extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

  render() {
    return (
      <div className='flex flex-col justify-center items-center mt-8'>
      <h1 className='mt-2 mb-10 text-5xl font-semibold'>Attendance Overview</h1>
        <BarChart
          width={900}
          height={550}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="attendance" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </div>
    );
  }
}
