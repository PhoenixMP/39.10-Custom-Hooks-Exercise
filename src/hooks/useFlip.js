import React, { useState } from "react";

const useFlip = (initialState = true) => {
    const [isFacingUp, setIsFacingUp] = useState(initialState);
    const toggleState = () => {
        setIsFacingUp(isFacingUp => !isFacingUp)
    }
    return [isFacingUp, toggleState]
}


export default useFlip