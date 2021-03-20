import React from 'react';
import './css/Tooltip.css';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import SmsIcon from '@material-ui/icons/Sms';
import PersonIcon from '@material-ui/icons/Person';
export const Tooltip = () => {

  return (
    <div className="tooltipcontainer">
      <div className='tooltip'>
        <ul>
          <li>
            <a href="#">
              <span className="icon"><HomeIcon className='i'/></span>
              <span className="title">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><PersonIcon className='i'/></span>
              <span className="title">Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><SmsIcon className='i'/></span>
              <span className="title">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><LiveHelpIcon className='i'/></span>
              <span className="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><SettingsIcon className='i'/></span>
              <span className="title">Setting</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
