import React from 'react';

interface propTypes {
    children : JSX.Element
}

const Layout : React.FunctionComponent<propTypes> = ({ children }) : JSX.Element => {

    return(
        <main>
            <nav className='top_nav'>
                <img width={50} src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt=""/>

                <button type='button'>logout</button>
            </nav>

            <section className='content_wrapper'>
                <nav className='sideNav'>

                </nav>

                <section className='main_content'>
                    {children}
                </section>
            </section>
        </main>
    );
};


export default Layout;
