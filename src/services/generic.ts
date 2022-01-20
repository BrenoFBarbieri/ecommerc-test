export function HandlerDelayApresentation( state:any, setState:any, amount = 5000 ) {
    return setTimeout(() => { setState(state === true ? false : true) }, amount) 
}