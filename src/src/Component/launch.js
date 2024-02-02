import { useNavigate } from "react-router-dom"
import { useCallback } from "react";

export default function Launch() {
    const navigate = useNavigate(); 

    const lc = useCallback(() => {
        navigate("/main")
    }, [])

    return (
        <div className="center" >
            <h1 style={{fontSize:"70px", margin : 'auto auto'}}>Travel TRPG</h1>
            <h2 style={{fontSize:"40px"}}>-절찬리 개발중-</h2>
            <button id="playBtn" onClick={lc}>플레이</button>
        </div>
    )
}