import { useState } from 'react'
import PlayerData from '../data/PlayerData.json'

// const InvData = PlayerData.Inv.Inv
// const EquipData = PlayerData.Inv.EquipInv
// const GoldData = PlayerData.Inv.Gold

const {Inv : InvData, EquipInv : EquipData, Gold : GoldData} = PlayerData.Inv

export default function Inv() {
    const [Amount,setAmount] = useState({...EquipData})

    const EquipItem = function(name) {
        const res = {...Amount};
        if (res[name] > 0) {
            res[name] -= 1
        }
        else {
            res[name] = 0
            alert("수량부족")
        }

        setAmount(() => {
            //ipcRenderer.send('Equip',{...PlayerData, EquipInv : res})
            return res
        })
    }

    return <div className="center">
        <div style={{width:"100%",height:"80%",overflow:"auto"}}>
            <h1>골드 : {GoldData}G</h1>
            <table className="table-fill">
                <thead>
                    <tr>
                        <th className="text-center">이름</th>
                        <th className="text-center">수량</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-hover">
                    {Object.keys(InvData)
                        .map(e => <tr>
                                <td>{e}</td>
                                <td>{InvData[e]}</td>
                                <td></td>
                            </tr>)}
                    {Object.keys(EquipData)
                        .map(e => <tr>
                                <td>{e}</td>
                                <td>{Amount[e]}</td>
                                <td className='text-center'><button onClick={() => EquipItem(e)} className='EquipBtn'>착용</button></td>
                            </tr>)}
                </tbody>
            </table>
            </div>
        </div>
}