const StatInfo = {
    MaxHP:{
        name : "체력",
        uppoint : 5,
    },
    ATK:{
        name : "힘",
        uppoint : 1,
    },
    LUK:{
        name : "행운",
        uppoint : 1,
    },
    MAG:{
        name : "마력",
        uppoint : 1,
    },
    ADEF:{
        name : "물리 방어",
        uppoint : 1,
    },
    MDEF:{
        name : "마법 방어",
        uppoint : 1,
    },
    MaxMANA:{
        name : "마나",
        uppoint : 5,
    }
}

function StaTable({name,stat}) {

    return <div className="StaTable">
            <h1>{StatInfo[name].name} : {stat}</h1>
        </div>
}

const md = {
    StaTable : StaTable,
    StatInfo : StatInfo,
}

export default md;