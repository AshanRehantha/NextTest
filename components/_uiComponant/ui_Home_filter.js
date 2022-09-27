import React from 'react';
import style from '../../styles/_uiStyle.module.css';

const HomeFilter = (props) => {
  return (
    <div className={style.home_filter}>
        <div className={style.home_face_counter}>{props.counter} new faces</div>
        <div className={style.home_filter_right}> 
            Show
            <button className={props.selectGender == 'all' ? style.home_selected_button : style.home_filter_button} onClick={() => props.selectedGender("all")} >All</button>
            <button className={props.selectGender == 'male' ? style.home_selected_button : style.home_filter_button}  onClick={() => props.selectedGender("male")}>Gents</button>
            <button className={props.selectGender == 'female' ? style.home_selected_button : style.home_filter_button}  onClick={() => props.selectedGender("female")}>Ladies</button>
        </div>
    </div>
  )
}

export default HomeFilter