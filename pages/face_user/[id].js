import React, {useEffect, useState} from 'react'
import Headers from '../../components/_uiComponant/Ui_Header';
import { useRouter } from 'next/router';
import SingleStyle from '../../styles/Face.module.css';
import { AiFillMail, AiTwotonePushpin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const SingleUser = () => {
    const router = useRouter();
    const [singleData, setSingleData] = useState(null);
    const back = () => {
        router.push('/')
    }

    const getSingleData = async(id) => {
        const res = await fetch(`https://randomuser.me/api/?email=${id}`)
        const data = await res.json();
        setSingleData(data.results[0])
    }

    useEffect(() => {
        if(router.query.id != undefined) {
            getSingleData(router.query.id)
        }
    },[router.query.id])


    console.log(singleData);

  return (
    <div className={SingleStyle.single_wapper}>
        <Headers
            pathname={router.pathname}
            backButton={back}
        />
        <div className={SingleStyle.single_top}></div>
        <div className={SingleStyle.single_bot}>
            <div className={SingleStyle.images_border}>
                <img src={singleData!= null ? singleData.picture.large : ""} alt="Image"/>
            </div>
            <div className={SingleStyle.userDetailsWapper}>
                <div className={SingleStyle.userDetailsWapperUserName}>{singleData!= null ? singleData.name.first + " " + singleData.name.last : ""}</div>
                <div className={SingleStyle.usercontactwrapper}>
                    <div className={SingleStyle.userDetailsCard}>
                        <div className={SingleStyle.usercontactIcon}><AiFillMail/></div><span className={SingleStyle.userText}>{singleData!= null ? singleData.email : ""}</span>
                    </div>
                    <div className={SingleStyle.userDetailsCard}>
                        <div className={SingleStyle.usercontactIcon}><AiTwotonePushpin/></div><span className={SingleStyle.userText}>{singleData!= null ? singleData.location.country : ""}</span>
                    </div>
                    <div className={SingleStyle.userDetailsCard}>
                        <div className={SingleStyle.usercontactIcon}><BsFillTelephoneFill/></div><span className={SingleStyle.userText}>{singleData!= null ? singleData.cell : ""}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleUser