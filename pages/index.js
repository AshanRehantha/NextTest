import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImagesCard from './_uiComponant/ui_ImagesCared'
import Headers from './_uiComponant/Ui_Header'
import HomeFilter from './_uiComponant/ui_Home_filter'

export async function getServerSideProps() {
  const res = await fetch(`https://randomuser.me/api/?results=560`)
  const data = await res.json()
  return { props: { data } }
}

export default function Home(data) {
  const [fetchData, setFetchData] = useState(data.data.results);
  const [gender, setGender] = useState("all");

  const genData = async() => {
    const res = await fetch(`https://randomuser.me/api/?results=560`)
    const data = await res.json()
    setFetchData(data.results);
  }

  const filterGender = () => {
    if(gender == "all"){
      return fetchData;
    }else{
      return fetchData.filter(gen => gen.gender === gender);
    }
  }

  console.log('====================================');
  console.log(filterGender());
  console.log('====================================');
  return (
    <>
      <Headers
        genNewUsers={genData}
      />
      <HomeFilter
        selectedGender={setGender}
        counter={filterGender().length}
      />

      <ImagesCard
        GenFace={filterGender()}
      />
      {/* {filterGender().map(faces => (
        <ImagesCard
          key={faces.cell}
        />
      ))} */}
    </>
  )
}
