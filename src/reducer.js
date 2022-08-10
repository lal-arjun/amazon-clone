export const initialState = {
    basket: [],
    user: null
};

//selector

export const getBasketTotal = (basket) =>
basket?.reduce((total, item) => item.price + total,0)

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketitem) => basketitem.id==action.id);

            // console.log(action.id);
            let newbasket = [...state.basket];
            if (index >= 0){
                newbasket.splice(index, 1);
            }
            else {
                console.warn('can remove product id')
            }

            return {
                ...state,
                basket: newbasket
            }
         default:
             return state;
         
        case 'ADD_USER':

            return {
                ...state,
                user: action.user    
            } 
        }

            
};

export default reducer;
