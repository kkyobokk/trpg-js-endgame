import { useNavigate } from "react-router-dom"
import { useCallback } from "react";

export default function Main() {
    const navigate = useNavigate(); 

    const ClickBtn = useCallback(() => {
        navigate("/stat")
    }, [])
    return (
        <div className="center">
            <h1> Main </h1>
            <div className="StatBtn">
                <button onClick={ClickBtn} id="StatBtn">스탯</button>
            </div>
        </div>
    )
}