// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cardinput.css';

function Cardinput() {
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        if (!name || !jobTitle || !email || !phone || !linkedin || !image) {
            alert("Please fill out all fields and upload an image before generating the card.");
            return;
        }

        navigate('/card', { state: { name, jobTitle, email, phone, linkedin, image } });
    };

    return (
        <div>
            <h1 className='headCard'>Enter Your Buzz Card Details</h1>
            <br />
            <br />
            <br />

            <form className='form'>
            <h1 className='headCard'>Enter Your Buzz Card Details</h1>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='Alonso'
                    />
                </label>
                <br />

                <label>
                    Job Title:
                    <input 
                        type="text" 
                        value={jobTitle} 
                        onChange={(e) => setJobTitle(e.target.value)} 
                        placeholder='CEO'
                    />
                </label>
                <br />

                <label>
                    Enter your work email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='example@example.com'
                    />
                </label>
                <br />

                <label>
                    Enter phone number, with country code:
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder='+91 928XX9XXX'
                    />
                </label>
                <br />

                <label>
                    Linkedin profile link:
                    <input 
                        type="url" 
                        value={linkedin} 
                        onChange={(e) => setLinkedin(e.target.value)} 
                        placeholder='linkedin.com/your-profile/'
                    />
                </label>
                <br />

                <label>
                    Profile Picture:
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                    />
                </label>
                <br />
                <br />
                <br />
                <br />

                <div className='cardButton'>
                    <button 
                        className='buttonCard' 
                        type="button" 
                        onClick={handleSubmit}
                    >
                        Generate Card
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Cardinput;
