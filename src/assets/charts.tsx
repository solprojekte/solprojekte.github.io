import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { question_one, question_three, question_two } from './content';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Charts = () => {
  return (
    <div className='charts'>
      <Pie data={question_one}/>
      <Pie data={question_two} />
      <Pie data={question_three}/>
    </div>
  )
}
