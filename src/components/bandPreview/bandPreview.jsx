import React from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';

import { BandPreview, Avatar, Infos } from "./bandPreview.styles";

export default ({ image_url, name, plays }) => {

  return (
    <BandPreview>
      <Avatar>
        <LazyLoadImage
          placeholder={<span>...</span>}
          src={image_url}
          alt={name}/>
      </Avatar>
      <Infos>
        <h2>{name}</h2>
        <p>{plays} PLAYS</p>
      </Infos>
    </BandPreview>
  );
};
