export function HandlerDelayApresentation(state: boolean, amount: number = 5000): Promise<boolean> {
    return new Promise((resolve, reject) => setTimeout(() => { resolve(state ? false : true) }, amount))
}