
const main = (state = {}, action) => {
    let newState;
    let goal;
    let selProj;
    switch(action.type) {
        case 'TEST':
          return Object.assign({}, state, {
            data: action.data
          });
        default:
            return state;
    }
};

export default main;
