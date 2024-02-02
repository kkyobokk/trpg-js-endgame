export default function StaTable({name,stat}) {
    const StatName = {"MaxHP":"체력","ATK":"힘","LUK":"행운","MAG":"마력","ADEF":"물리 방어","MDEF":"마법 방어","MaxMANA":"마나"}
    return StatName[name] !== undefined ? <div><h1>{StatName[name]} : {stat}</h1></div> : null
}