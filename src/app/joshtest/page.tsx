import React from 'react'
import Image from 'next/image';
import './style.css'
import Card2 from '../../../components/Card2';
type Props = {}

async function getData() {
    const res = await fetch('http://127.0.0.1:8000/movies',{cache:"no-cache"})
    const data = res.json()
    return data
}

async function renderimage() {
    const data = await getData();
    const realData:[] = data['data']

    return realData.map((d) => (
        <>  
            <Card2 Data={d} classNameCTN="container-card2" classNameC="container-image2" w={266} h={344}/>
        </>
    ));
}

export default async function page(props: Props) {
    return (
        <>
            <div className='Movie-container'>
                {await renderimage()}
            </div>
        </>
      )
}