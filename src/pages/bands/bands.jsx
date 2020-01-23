import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../layout/layout";
import BandPreview from "../../components/bandPreview/bandPreview";
import BandList from "../../components/bandList/bandList"

const Bands = () => {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await axios
        .get("https://iws-recruiting-bands.herokuapp.com/api/bands")
        .then(res => {
          setBands(res.data);
          setLoading(false);
        })
        .catch(err => console.log(err));
    })();
  }, []);

  return (
    <Layout>
      {loading ? "loading..." : null}
      <BandList>
        {bands.map(band => {
          return (
            <BandPreview
              key={band.id}
              image_url={band.image}
              name={band.name}
              plays={band.numPlays}>
              {band.name}
            </BandPreview>
          );
        })}
      </BandList>
    </Layout>
  );
};

export default Bands;
