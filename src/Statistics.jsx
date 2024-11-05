import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#9538E2', '#00C49F', '#9538E2', '#FF8042', 'red', '#9538E2',"#9538E2","#00C49F",'red',"#FF8042"];
  
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
const Statistics = () => {
  const alldata = useLoaderData()
    return (
        <div>
          <div className="mb-10">
            <div className='text-center pt-2 bg-[#9538E2] text-white  pb-32'>
              <h1 className='text-3xl font-bold my-3'>Statistics</h1>
               <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            </div>
        </div>
        <BarChart
      width={1480}
      height={500}
      data={alldata}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 15,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {alldata.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
    );
};

export default Statistics;