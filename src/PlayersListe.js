import React from 'react'
import data from './Data'
import Players from './Players'




function PlayersListe() {
  return (
    <div className='name'  >
      {data.map((e)=> <Players  e={e}  />       )}
    </div>
  )
}


export default PlayersListe
