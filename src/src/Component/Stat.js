import PlayerData from '../data/PlayerData.json'
import { useState } from 'react'
import StaTable from './StaTable'

//const { ipcRenderer } = window.require('electron');

export default function Stat() {
    const [StatData, setStatData] = useState(PlayerData.Stat)

    const Statup = function(name) {
        let res = (name) => {switch (name){
            case "MaxHP":
                return {...StatData,MaxHP : StatData.MaxHP + 5} 
            case "ATK":
                return {...StatData,ATK : StatData.ATK + 1}
            case "LUK":
                return {...StatData,LUK : StatData.LUK + 1}
            case "MAG":
                return {...StatData,MAG : StatData.MAG + 1}
            case "ADEF":
                return {...StatData,ADEF : StatData.ADEF + 1}
            case "MDEF":
                return {...StatData,MDEF : StatData.MDEF + 1}
            case "MaxMANA":
                return {...StatData,MaxMANA : StatData.MaxMANA + 5}
            default:
                return 0
            }
        }
        setStatData(() => {
            //ipcRenderer.send('Stat',{...PlayerData, Stat : res})
            return res(name)
        })
    }

    return <div className="center">
        {[...Object.keys(PlayerData.Stat)].map(e => e !== "CurHP" ? e !== "CurMANA" ? <div><StaTable name={e} stat={StatData[e]}></StaTable><button onClick={() => Statup(e)} className='StatUpBtn'>스탯 업</button></div> : null : null)}
    </div>
}