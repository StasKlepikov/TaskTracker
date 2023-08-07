import style from './ErrorPage.module.css';

function ErrorPage() { 
    return (
        <div className={style.errorPage}>
            <h3>Oops... Page not found :(</h3>
        </div>
    );
}

export default ErrorPage;