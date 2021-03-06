import React from 'react';
import Styles from './HumbergerIcon.module.scss';

const humbergerIcon = props =>{
  
  
  return (
    
    <div onClick={props.click} className={Styles.Main}>
      { props.toggle ? 
         <React.Fragment>
        <div className={Styles.Line1}></div>
        <div className={Styles.Line2}></div>
        <div className={Styles.Line3}></div>
        <div className={Styles.Line4}></div>
        </React.Fragment>
      : 

      <div className={Styles.Close}>  x</div>
      
      }

    </div>
    

  );
};

export default humbergerIcon;