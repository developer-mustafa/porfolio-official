import React from 'react';
import './ContactBottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactBottom = () => {

    const notify = () => toast("+8801840643946");
    return (
        <footer className="py-5 d-flex justify-content-center align-items-center">
           
            <div className="contact-icons d-flex flex-wrap justify-content-center align-items-center mt-5">

                <a href="https://github.com/developer-mustafa" className="icon me-3 me-md-5 mb-4 mb-md-0 mb-xl-0 fs-3" target="blank" rel="noreferrer"><FontAwesomeIcon className="" icon={faGithub} /></a>

                <a href="https://www.linkedin.com/in/developer-mustafa/" className="icon me-3 me-md-5 mb-4 mb-md-0 mb-xl-0 fs-3" target="blank" ><FontAwesomeIcon className="" icon={faLinkedinIn} /></a>

                <a href="https://www.facebook.com/Mustafa24hours" className="icon me-3 me-md-5 mb-4 mb-md-0 mb-xl-0 fs-3" target="blank" ><FontAwesomeIcon className="" icon={faFacebookF} /></a>

                <a href="https://www.instagram.com/developer_mustafa_rahman/" className="icon me-3 me-md-5 mb-4 mb-md-0 mb-xl-0 fs-3" target="blank" ><FontAwesomeIcon className="" icon={faInstagram} /></a>

                <a href="mailto:mustafarahman792@gmail.com" className="icon me-3 me-md-5 fs-3" target="blank" ><FontAwesomeIcon className="" icon={faEnvelope} /></a>
                {/* <button onClick={() => { setIsNumber(!isNumber) }} className="icon me-3 me-md-5 fs-3">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </button> */}
                <div className="nti">

                <button  onClick={notify} className="icon me-3 me-md-5 fs-3">
                    <FontAwesomeIcon icon={faPhoneAlt} />

                </button>
                <ToastContainer />
                </div>
            </div>
        </footer>

    );
};

export default ContactBottom;