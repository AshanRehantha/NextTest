import React from 'react';
import UiStyle from '../../styles/_uiStyle.module.css';

const ImagesCard = (props) => {
    console.log(props.GenFace);
  return (
    <div>
        <ul className={UiStyle.imageCard}>
            {props.GenFace.map(faces => (
            <li key={faces.cell}>
                <img src={faces.picture.thumbnail} alt="faceimages" />
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ImagesCard