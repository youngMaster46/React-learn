import React from 'react';
import preloader from '../../../assets/images/preload.gif';

type PropsType = {

}
let Preloader: React.FC<PropsType> = () => {
   return <div>
        <img src={preloader} alt='preloader'/>
    </div>
}

export default Preloader;