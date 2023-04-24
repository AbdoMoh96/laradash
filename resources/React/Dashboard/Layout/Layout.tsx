import React,{useState} from 'react';
import './Assets/Sass/index.scss';

interface propTypes {
    children : JSX.Element
}

const Layout : React.FunctionComponent<propTypes> = ({ children }) : JSX.Element => {

    const [sideMenuState, setSideMenuState] = useState<boolean>(false);

    const handelSideMenuStateChange = () => {
        setSideMenuState(!sideMenuState);
    };

    return(
        <main>
            <aside className={`side_bar ${sideMenuState ? 'side_bar_show' : ''}`}>
               <h1 style={{color: "white", width: "10vw"}}>Lorem ipsum dolor sit amet, consectetur adipisicin</h1>
            </aside>

            <section className={`content_wrapper ${sideMenuState ? 'content_wrapper_shrink' : ''}`}>
                <nav className='top_nav'>
                    <img className='user_img' src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt=""/>

                    <button type='button' onClick={() => handelSideMenuStateChange()}>side menu</button>
                </nav>

                <section className='main_content'>
                    {children}
                </section>
            </section>
        </main>
    );
};


export default Layout;
