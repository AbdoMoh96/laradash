import React from 'react';
import Layout from "../../Layout";

interface propTypes {}

const HomePage : React.FunctionComponent<propTypes> = () => {

    const prentTest  = () : Array<JSX.Element> => {
        let elements = [];
        for(let i = 0; i < 200; i++){
            elements = [...elements, <h1 key={i}>
                welcome to dashboard home page
            </h1>];
        }
        return elements;
    };

    return (
        <Layout>
            <div>
                {prentTest()}
            </div>
        </Layout>
    );
};

export default HomePage;
