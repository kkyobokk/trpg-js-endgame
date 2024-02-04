import { useNavigate } from "react-router-dom"
import { useCallback } from "react";

export default function Main() {
    const navigate = useNavigate(); 

    const ClickBtn = useCallback(() => {
        navigate("/stat")
    }, [])

    const ClickMap = useCallback(()=>{
        navigate("/map")
    })

    const ClickStore = useCallback(()=>{
        navigate("/store")
    })

    const ClickInv = useCallback(()=>{
        navigate("/inv")
    })

    return (
        <div className="center">
            <h1> Main </h1>
            <button onClick={ClickBtn} className="Btn">스탯</button>
            <button onClick={ClickMap} className="Btn">맵</button>
            <button onClick={ClickStore} className="Btn">상점</button>
            <button onClick={ClickInv} className="Btn">가방</button>
        </div>
    )
}