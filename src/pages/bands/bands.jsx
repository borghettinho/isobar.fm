import React, { useContext, useState, useEffect } from "react";

import {BandContext} from '../../components/bandContext/bandContext'

import Layout from "../layout/layout";
import BandList from "../../components/bandList/bandList"
import NoResults from "../../components/noResults/noResults"

import Band from '../band/band'

const Bands = () => {
  // get search and filter from context
  const { state } = useContext(BandContext)
  const [renderedBands, setRenderedBands] = useState([])

  useEffect(() => {

    const filteredBands = state.fetchedBands.filter((band) => {
      const bandName = band.name.toUpperCase();
      const search = state.search.toUpperCase();

      if(bandName.includes(search)) {
        return band
      }

      return;
    })

    setRenderedBands(filteredBands.map((band) => {
        return (
          <Band key={band.id} band={band}/>
        );
    }))
  }, [state.search, state.fetchedBands])


  return (
    <Layout>
      {state.loading ? "loading..." : null}
      {
        !state.loading && renderedBands.length === 0 ? <NoResults /> : null
      }
      <BandList>
        {renderedBands}
      </BandList>
    </Layout>
  );
};

export default Bands;
