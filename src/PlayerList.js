import React from 'react'
import players from './players'



import Player from './Player';
const PlayerList = () => {
  return (
   
        <div   > 
           { players.map(el=>( <Player  x={el} />  ))}
       </div>
    
  )
}

export default PlayerList