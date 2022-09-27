import React from 'react';
import UiStyle from '../../styles/_uiStyle.module.css';

const ImagesCard = (props) => {
    console.log(props.GenFace);
  return (
    <div>
        <ul className={UiStyle.imageCard}>
            {props.GenFace.map(faces => (
            <li key={faces.cell}>
                <a href={'/face_user/' + faces.email}>
                  <img src={faces.picture.thumbnail} alt="faceimages" />
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ImagesCard