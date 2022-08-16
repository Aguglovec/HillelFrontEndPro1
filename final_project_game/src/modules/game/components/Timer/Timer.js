import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startTimeSelector } from '../../../../selectors/selectors';
import { setEndTime, setStartTime } from '../../../../store/actions/game25Actions';
import { timeMsToMin } from '../../../utils/utils';

function Timer() {
const start = useMemo(() => Date.now(), []);
const [time, setTime] = useState(Date.now());


useEffect(() => {
    const timer = setInterval(() => {setTime (Date.now() - start)}, 111)

    return () => {
        clearInterval(timer);
    }
}, [])

    return (
    <div>Time passed: {timeMsToMin(time)} </div>
    )
}

export default Timer