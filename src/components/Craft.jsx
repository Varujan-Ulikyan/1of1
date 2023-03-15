
import "./added.css"
import { styles } from "../styles"
import { useState } from "react"

export const Craftmodal = ({CraftModalActive, setCraftModalActive }) => {
    return(
    <div className={CraftModalActive ? "CraftModal active bg-hero-pattern bg-cover bg-no-repeat bg-center" : "CraftModal"}
    onClick={() => setCraftModalActive(false)}>
        <div className="CraftModalContent" onClick={(e) => e.stopPropagation()}>

        </div>
    </div>
    )
}












const Craft = () => {
    const [CraftModalActive, setCraftModalActive] = useState(false)
    return (
        <>
        <div className={`Craft bg-hero-pattern bg-cover bg-no-repeat bg-center  `} >
            <div className="CraftContent">
                <h3 className={` ${styles.heroSubText}`}>Craft</h3>
                <button onClick={() => setCraftModalActive(true)}>Lets Start</button>
            </div>
        </div>
        <Craftmodal CraftModalActive={CraftModalActive} setCraftModalActive={setCraftModalActive}/>
        </>
    )
}

export default Craft