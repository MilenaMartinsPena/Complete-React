import React, { useState } from 'react'

function ClickablePicture(props) {

    const { img, imgClicked } = props
    const [clicked, setClicked] = useState(false)

    return (
        <img onClick={() => setClicked(!clicked)} src={clicked ? imgClicked : img} />
    )
}

export default ClickablePicture
