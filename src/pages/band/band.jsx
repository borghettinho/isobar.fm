import React, {useState} from "react";

import BandPreview from '../../components/bandPreview/bandPreview'
import BandDetails from '../../components/bandDetails/bandDetails'

import {Band} from './band.styles';

export default ({band}) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Band onClick={() => {setExpanded(!expanded)}}>
      <BandPreview
      image_url={band.image}
      name={band.name}
      plays={band.numPlays} />
      <BandDetails expanded={expanded} id={band.id}/>
    </Band>
    
  );
};
