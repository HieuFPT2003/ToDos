const init = {
    todos: [
        {
            title: 'Learn JavaScript',
            completed:true,
        },{
            title: 'Learn HTML,CSS',
            completed:false,
        }
    ]
}

export default function reducer(state = init,action, args){
    switch(action){
        default:
            return state;
    }
    
}