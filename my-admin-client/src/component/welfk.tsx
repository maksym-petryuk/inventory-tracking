import {useEffect, useState} from "react";

function FSS(){
    const [dea, setDea] = useState(0)
    useEffect(() => {
        console.log("dea", dea)
    }, [dea])
    return(  <>
            <button onClick={()=> setDea(dea - 1)}>-</button>
            <h3>{dea}</h3>
            <button onClick={()=> setDea(dea + 1)}>+</button>
        </>)

}
export default { FSS }