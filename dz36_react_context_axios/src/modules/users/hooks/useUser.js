import { UserContext } from '../providers/UserProvider';
import { useContext } from 'react';

export default function useUser() {
    return useContext(UserContext);
}
