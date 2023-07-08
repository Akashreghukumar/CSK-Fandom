import React from 'react'
import { batters } from '../../ConstVariables/squad'
import {motion} from "framer-motion"
import './team.css'

const TeamPlayers = () => {
  return (
    <div className='section_container batters'>
        {
            batters.map((player)=>{
                return(
                    <motion.div whileHover={{ scale: 1.1 }}  className='player_card'>
                        <div className='imagearea'>
                            <img className='playerimage' src={player.img} alt="" />
                        </div>
                        <div className='namearea'>
                            <h3>{player.name}</h3>
                            <p>{player.role}</p>
                        </div>
                    </motion.div>
                )
            })
        }


    </div>
  )
}

export default TeamPlayers