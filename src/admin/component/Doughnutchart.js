// import React from 'react'
// import { Doughnut } from 'react-chartjs-2'




// function Doughnutchart() {
//   return (
//     <div>
//         <Doughnut data={chartData} options={chartOptions} />
//     </div>
//   )
// }

// export default Doughnutchart
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const chartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

function Doughnutchart() {
  return (
    <div>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  )
}

export default Doughnutchart;
