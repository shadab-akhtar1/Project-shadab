import React from 'react';
import './Dharequest.css';
import {Navbar} from './Navbar';
import Footer from './Footer';
import prof from '../Assets/Ellipse 187.jpg';
import prof2 from '../Assets/Ellipse 187 (1).jpg';
import prof3 from '../Assets/Ellipse 187 (2).jpg';
import prof4 from '../Assets/Ellipse 187 (3).jpg';
import prof5 from '../Assets/Ellipse 187 (4).jpg';
import prof6 from '../Assets/Ellipse 187 (5).jpg';
import {FaLessThan} from 'react-icons/fa6';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {FaGreaterThan} from 'react-icons/fa6';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from "react-router-dom";


export const Dharequest = () => {
  return (
    <div>
    <div className='management'><Navbar/></div>
        <div className='middle_section'>
            <div className='heading_box1'>
                <div className='heading_content_box'>
                <h2> <BiArrowBack className="left_logo"/>DHA Requests</h2>
                </div>
                
            </div>
            <div className='option'>
                <table className='request_table'>
                    <thead>
                        <tr>
                            <th>DHA Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr> <Link to={"/dhadetailsview"}>
                            <td className='data_user_prof_2'><img src={prof} alt="" className='user_prof_2'/>Jacob Jones</td>
                            </Link>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td className='data_user_prof_2'><img src={prof2} alt="" className='user_prof_2'/>Darrell Steward</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td className='data_user_prof_2'><img src={prof3} alt="" className='user_prof_2'/>Esther Howard</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td className='data_user_prof_2'><img src={prof4} alt="" className='user_prof_2'/>Arlene McCoy</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr className='table_row'>
                            <td className='data_user_prof_2'><img src={prof5} alt="" className='user_prof_2'/>jane Cooper</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td className='data_user_prof_2'><img src={prof6} alt="" className='user_prof_2'/>Ralph Edwards</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                           
                        </tr>
                    </tbody>
                </table>

                <div className='pag'>
                    <a href=''>< PiCaretDoubleLeftBold className='left_arrow'/></a>
                    <a href=''><FaLessThan className='left_1_arrow'/></a>
                    <a href=''className='active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href=''>...</a>
                    <a href=''>10</a>
                    <a href=''><FaGreaterThan className='left_1_arrow'/></a>
                    <a href=''><PiCaretDoubleRightBold className='left_arrow'/></a>


                </div>
            </div>
        </div>
        <div className='footer_dha'><Footer/></div>
    </div>

  )
}
export default Dharequest
