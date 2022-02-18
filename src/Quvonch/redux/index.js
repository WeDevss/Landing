import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux"

const initialState = {

};

const reducer = (state = initialState, action) => {

};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

// store - omborxona, qiymatlar saqlanadigan joy, bank - katta bir obyekt
// const store = {
//   layout: {
//     openDrawer: false,
//     theme: "light",
//   },
//   user: { login: "", img: "", token: "" },
//   category: [],
//   products: [],
// };

// reducer - qora ishchi, togridan togri store bilan ishlaydi omborxonachi

// dispatch - funksiyalar toplamidan foydalanish, buyruq, pult
