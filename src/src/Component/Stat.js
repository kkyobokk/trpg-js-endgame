import PlayerData from '../data/PlayerData.json'
import { useState, useEffect, useRef } from 'react'
import stat from './StaTable'
import '../App.css'
import { useNavigate } from "react-router-dom"

//const { ipcRenderer } = window.require('electron');

const {StaTable, StatInfo} = stat;

export default function Stat() {
    const enter = useRef();
    const navigate = useNavigate()
    const [StatData, setStatData] = useState({...PlayerData.Stat});

    const Statup = function(name) {
        const res = {...StatData};
        res[name] += StatInfo[name].uppoint;
        setStatData(() => {
            //ipcRenderer.send('Stat',{...PlayerData, Stat : res})
            return res
        })
    }

    const Back = e =>{
        if(e.key === 'Escape') {
            navigate(-1)
        }
    }

    useEffect(() => {
        enter.current.focus();
      }, [])

    return <div className="center" onKeyDown={Back} style={{padding:"20px"}}>
        {Object.keys(StatData)
            .filter(e => !['CurHP', 'CurMANA'].includes(e))
            .map(e => 
                <div className="statTb" key={e}>
                    <StaTable name={e} stat={StatData[e]}/>
                    <button onClick={() => Statup(e)} className='Btn' ref={enter} style={{width:"180px",fontSize:"27px"}}>스탯 업</button>
                    <button onClick={() => Statup(e)} className='Btn' ref={enter} style={{width:"180px",fontSize:"27px"}}>스탯 업</button>
                </div>
            )
        }
    </div>
}