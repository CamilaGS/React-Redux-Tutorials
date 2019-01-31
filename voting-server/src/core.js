import {List, Map} from 'immutable';

export function setEntries(state){  //, entries){
    const entries = state.get('entries');    
    return state.merge({//.set('entries', entries);
        vote: Map({pair: entries.take(2)}),
        entries: entries.skip(2)
    });
}