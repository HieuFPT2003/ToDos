// Destructuring in ES6. It divided(phan biet)input become two data type (string and value) 
export default function html([first,...strings],...values){

    return values.reduce((acc,cur) =>
        acc.concat(cur,strings.shift()),[first]
    )
    .filter(x => x && x !== true || x === 0 )
    .join('')
    
}

export function createStore(reducer){
    let state = reducer()
    const roots = new Map()
    // map to set key is object or something, normal we just set key a object by string
    // example:"name","age","address".

    // render to screen information in roots
    function render(){
        for(const [root,component] of roots){
            const output = component()
            root.innerHTML =  output
        }
    }
    return {
        attach(component,root){
            roots.set(root,component)
            render()
        },
        connect(selector = state => state){
            return component => (props, ...args)=>{
                component(Object.assign({},props,selector(state), ...args))
            }
        },
        dispatch(action, ...args){
            state = reducer(state,action,args)
            render()
        }
    }
}