import './Index.css';
import { useNavigate } from "react-router-dom";

function Index() {
    const navigate = useNavigate();

    return (
        <>
            <div className='head'>
                <h1 className="heading"><span className="underline--magical">Buzz Cards</span></h1>
                <br />
                <br />
                <br />
            </div>

            <p className='des'>
                This website allows you to create virtual business cards and share them for free. 
                Click the button below to create a virtual business card.
            </p>

            <br />
            <br />
            <br />

            <div className="button-container">
                
                <button className="sty" onClick={() => navigate("/cardinput")}>Buzz!</button>
            </div>
        </>
    );
}

export default Index;
