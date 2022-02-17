import React from 'react';
import {Provider} from "react-redux";
import store from "./redux";

function Index(props) {
    return (

        <Provider store={store}>
            <>

            </>
        </Provider>
    );
}

export default Index;