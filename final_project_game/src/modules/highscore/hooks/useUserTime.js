import { useSelector } from 'react-redux';
import { endTimeSelector, startTimeSelector } from '../../../selectors/selectors';

function useUserTime() {
    return useSelector(endTimeSelector) - useSelector(startTimeSelector);
}

export default useUserTime