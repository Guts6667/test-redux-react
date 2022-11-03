import React from "react";
import "./Home.scss"
import Counter from "../../Components/Counter";

const Home = () => {

    return(

        <section className="container__home">
            <h1>Hello World</h1>
            <Counter />
        </section>
    )
}

export default Home;