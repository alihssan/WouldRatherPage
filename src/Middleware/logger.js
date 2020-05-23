const logger=(store)=>(next)=>(action)=>{
    console.group(action.type)
        console.log('Action is',action)
        const ret=next(action)
        console.log('The New State is',store.getState())
    console.groupEnd()
    return ret

}
export default logger