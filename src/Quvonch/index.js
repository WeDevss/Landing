import React from 'react';
import {Provider} from "react-redux";
import store from "./redux";
import Header from "./components/Header";

function Index(props) {
    return (

        <Provider store={store}>
            <>
                <Header />
            </>
        </Provider>
    );
}

export default Index;