import React from "react";

import { BandPreview, Avatar, Infos } from "./bandPreview.styles";

export default ({ image_url, name, plays }) => {
  const bandPreviewAnimation = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }

  return (
    <BandPreview>
      <Avatar>
        <img src={image_url} alt={name} />
      </Avatar>
      <Infos>
        <h2>{name}</h2>
        <p>{plays} PLAYS</p>
      </Infos>
    </BandPreview>
  );
};
