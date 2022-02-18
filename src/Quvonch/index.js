import React from 'react';
import {Provider} from "react-redux";
import store from "./redux";
import Header from "./components/Header";
import Landing from "./components/section/LandingPage/landing";

function Index(props) {
    return (

        <Provider store={store}>
            <>
                <Header />
                <Landing />
            </>
        </Provider>
    );
}

export default Index;