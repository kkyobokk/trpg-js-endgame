import PlayerData from '../data/PlayerData.json'
import { useState } from 'react'
import StaTable from './StaTable'

//const { ipcRenderer } = window.require('electron');

export default function Stat() {
    const [StatData, setStatData] = useState(PlayerData.Stat)

    const ATKup = function() {
        setStatData(() => {
            const res = {...StatData,ATK : StatData.ATK + 1}
            //ipcRenderer.send('Stat',{...PlayerData, Stat : res})
            return res
        })
    }

    return <div className="center">
        {[...Object.keys(PlayerData.Stat)].map(e => <StaTable name={e} stat={PlayerData.Stat[e]}></StaTable>)}
    </div>
}