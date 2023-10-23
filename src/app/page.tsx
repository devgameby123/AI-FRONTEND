import "./home.css"
import "./globals.css"

import Card2 from '../../components/Card2';


async function getData(c_name:string) {
  const res = await fetch(`http://52.221.250.124:8000/Category/${c_name}`,{next:{revalidate:3000}})
  const data = res.json()
  return data
}
async function getDataRating() {
  const res = await fetch(`http://52.221.250.124:8000/Rating`,{next:{revalidate:3000}})
  const data = res.json()
  return data
}

async function renderimage() {
  const data = await getDataRating();
  const realData:[] = await data['data']
      return await realData.map((d) => (
      <>  
          <Card2 Data={d} classNameCTN="container-card2" classNameC="container-image2" w={266} h={344}/>
      </>
  ));
}


async function renderimage1() {
  const data = await getData('Comedy');
  const realData:[] = await data['data']

      return await realData.map((d) => (
      <>  
          <Card2 Data={d} classNameCTN="container-card2" classNameC="container-image2" w={266} h={344}/>
      </>
  ));
}
async function renderimage2() {
  const data = await getData('Horror');
  const realData:[] = await data['data']

  return await realData.map((d) => (
      <>  
          <Card2 Data={d} classNameCTN="container-card2" classNameC="container-image2" w={266} h={344}/>
      </>
  ));
}
async function renderimage3() {
  const data = await getData('Horror');
  const realData:[] = await data['data']

  return await realData.map((d) => (
      <>  
          <Card2 Data={d} classNameCTN="container-card2" classNameC="container-image2" w={266} h={344}/>
      </>
  ));
}
async function renderimage4() {
  const data = await getData('Action');
  const realData:[] = await data['data']

  return await realData.map((d) => (
      <>  
          <Card2 Data={d} classNameCTN="container-card2" classNameC="container-image2" w={266} h={344}/>
      </>
  ));
}

export default function Home() {

  return (
    <>
      <h1 id="TRENDING">Trending</h1>
      <div className='container-content'>
          {renderimage()}
      </div>
      <h1>COMEDY</h1>
      <div id="COMEDY" className="container-content-sm">
          {renderimage1()}
      </div>
      <h1>HORROR</h1>
      <div id="HORROR" className="container-content-sm">
          {renderimage2()}
      </div>
      <h1>Science Fiction</h1>
      <div id="SCIFI" className="container-content-sm">
          {renderimage3()}
      </div>
      <h1>Action</h1>
      <div id="ACTION" className="container-content-sm">
      {renderimage4()}
      </div>
    </>
  )
}
