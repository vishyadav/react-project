const INIT_STATE = {
    Account: []
};
export const accountreducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case "ADD_Account":

        const IteamIndex = state.Account.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex >= 0){
            state.Account[IteamIndex].qnty +=1
            return {
                ...state,
                Account:[...state.Account]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                Account: [...state.Account, temp]
            }
        }
        default:
            return state
    }


}