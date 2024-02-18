import React from 'react'
import NanniesCard from 'components/NanniesCard/NanniesCard'
import css from './NanniesList.module.css'

const NanniesList = ({ loadedNannies }) => {

  return (
   <ul className={css.nanniesList}>
    <NanniesCard/>
   </ul>
  )
}

export default NanniesList