import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const SocialButton = (props)=>{
    let icono = props.icono;
    if(icono === "facebook"){
        return(
            <Icon.Facebook color="blue" size={50}/>
        );
    }else if(icono === "twitter"){
        return(
            <Icon.Twitter color="blue" size={50}/>
        );
    }else if(icono === "instagram"){
        return(
            <Icon.Instagram color="blue" size={50}/>
        );
    }
}
export default SocialButton; 