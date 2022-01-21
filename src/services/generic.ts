export function HandlerDelayApresentation(state: boolean, amount = 5000) {
    return new Promise((resolve, reject) => setTimeout(() => { resolve(state ? false : true) }, amount))
}