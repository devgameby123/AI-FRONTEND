'use client';
import { useParams } from 'next/navigation';
import "./style.css";
import Card2 from '../../../components/Card2';
async function getData(c_name:string) {
    const res = await fetch(`http://52.221.250.124:8000/Category/${c_name}`,{next:{revalidate:3000}})
    const data = res.json()
    return data
}

async function renderimage(Cat:string) {
  const data = await getData(Cat);
  const realData:[] = await data['data']

      return await realData.map((d) => (
      <>  
          <Card2 Data={d} classNameCTN="container-card2" classNameC="container-image2" w={266} h={344}/>
      </>
  ));
}

const User = () => {
    const params = useParams();
    const category = params.category;
  return (
    <>
    <h1>{category}</h1>
    <div className="container-content-sm">
      {renderimage(category.toString())}
    </div>
    </>)
};



export default User;