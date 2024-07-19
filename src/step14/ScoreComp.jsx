import { useState } from "react";

function Grade (props){
    if(props.score >= 60){
        return (<p>합격입니다.</p>);
    }else { return (<p>불합격입니다.</p>)};

}
export function ScoreComp(props){
    const [score, setScore] = useState(100);
    function ChangeText(event){
        console.log(event.target.value);
        let _score = Number(event.target.value);
        setScore(_score);
    }
    return(
        <p>
            <input type="text" onChange={(event)=>ChangeText(event)} />
            <Grade score={score}></Grade>
        </p>
    );
}