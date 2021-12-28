import React, {useState} from "react";

const Counter = function () {
    const [likes, setLikes] = useState(0)
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={()=>setLikes(likes - 1)}>Уменьшить</button>
            <button onClick={()=>setLikes(likes + 1)}>Увеличить</button>
        </div>
    )
}

export default Counter;