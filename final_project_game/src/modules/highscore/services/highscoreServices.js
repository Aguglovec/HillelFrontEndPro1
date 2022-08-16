import React from 'react'
import api from '../../../api'
import { getList } from '../../RestApi/RestApi'


function getHighscores(diff) {
    return api.get(diff).then((resp) => resp.data);

    // return getList()
}

export default getHighscores