import PlayerData from '../data/PlayerData.json'
import { useState, useEffect } from 'react'
import stat from './StaTable'
import '../App.css'

//const { ipcRenderer } = window.require('electron');

const {StaTable, StatInfo} = stat;

export default function Stat() {
    const [StatData, setStatData] = useState({...PlayerData.Stat});

    const Statup = function(name) {
        const res = {...StatData};
        res[name] += StatInfo[name].uppoint;
        setStatData(() => {
            //ipcRenderer.send('Stat',{...PlayerData, Stat : res})
            return res
        })
    }

    return <div className="center">
        {Object.keys(StatData)
            .filter(e => !['CurHP', 'CurMANA'].includes(e))
            .map(e => 
                <div className="statTb" key={e}>
                    <StaTable name={e} stat={StatData[e]}/>
                    <button onClick={() => Statup(e)} className='statUpBtn'>스탯 업</button>
                </div>
            )
        }
    </div>
}