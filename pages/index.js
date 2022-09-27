import React, {useState} from 'react'
import ImagesCard from '../components/_uiComponant/ui_ImagesCared'
import Headers from '../components/_uiComponant/Ui_Header'
import HomeFilter from '../components/_uiComponant/ui_Home_filter'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  const res = await fetch(`https://randomuser.me/api/?results=560`)
  const data = await res.json()
  return { props: { data } }
}

export default function Home(data) {
  const [fetchData, setFetchData] = useState(data.data.results);
  const [gender, setGender] = useState("all");
  const router = useRouter();

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

  return (
    <>
      <Headers
        genNewUsers={genData}
        pathname={router.pathname}
      />
      <HomeFilter
        selectedGender={setGender}
        counter={filterGender().length}
        selectGender={gender}
      />
      <ImagesCard
        GenFace={filterGender()}
      />
    </>
  )
}
