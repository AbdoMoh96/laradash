import React from 'react';
import Layout from "../../Layout";

interface propTypes {}

const HomePage : React.FunctionComponent<propTypes> = () => {

    return (
        <Layout>
            <div>
                <h1>
                    welcome to dashboard home page
                </h1>
            </div>
        </Layout>
    );
};

export default HomePage;
