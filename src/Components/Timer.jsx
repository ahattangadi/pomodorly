import React, { useState, useEffect, useContext } from "react";
import { TimerLengthInSeconds } from "./Context";

const Timer = () => {
    const [_IsRunning, _SetIsRunning] = useState(false);
    let _TimerLength = useContext(TimerLengthInSeconds);
    const [_Seconds, _SetSeconds] = useState(_TimerLength);
    
    function ToggleTimer() {
        _SetIsRunning(!_IsRunning);
    }

    function ResetTimer() {
        _SetSeconds(_TimerLength);
        _SetIsRunning(false);
    }

    useEffect(() => {
        let interval = null;
        if (_IsRunning) {
            interval = setInterval(() => {
                _SetSeconds((_Seconds) => _Seconds - 1);
            }, 1000);
        } else if (!_IsRunning && _Seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [_IsRunning, _Seconds]);

    function Pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }


    return (
        <>
            <div className="time">
                {Math.floor(_Seconds/60)} : {Pad(_Seconds % 60)}
            </div>
            <div>
                <button onClick={ToggleTimer}>{_IsRunning ? "Pause" : "Start"}</button>
                <button onClick={ResetTimer}>Reset</button>
            </div>
        </>
    );
};

export default Timer;