import { useState } from 'react'
import ItemData from '../data/ItemData.json'
import PlayerData from '../data/PlayerData.json'

export default function Store() {
    return <div className="center">
         <h1>골드 : {PlayerData.Inv.Gold}</h1>
        <div style={{width:"100%",height:"80%",overflow:"auto"}}>
        <table className="table-fill">
                <thead>
                    <tr>
                        <th class="text-center">이름</th>
                        <th class="text-center">가격</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-hover">
                    {Object.keys(ItemData)
                        .filter(e => {
                            return ItemData[e]["등급"] === "조잡" || ["체력", "마나"].includes(ItemData[e]["종류"])
                        })
                        .map(e => <tr>
                                <td style={{fontSize:"20px"}}>{e}</td>
                                <td style={{fontSize:"20px"}}>{ItemData[e]["가격"]}</td>
                                <td><button className='Btn' style={{fontSize:"15px",width:"100px",height:"40px"}}>구입</button></td>
                            </tr>)}
                </tbody>
            </table>
            </div>
    </div>
}