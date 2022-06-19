import React from "react";

import { Facebook, GitHub } from 'react-feather';

export default function SocialFollow() {
  return (
    <div>
      <ul>
        <li className="nav-item">
          <a className="nav-link" href="https://www.facebook.com/beemoncs/" target="_blank">
            <Facebook color="#4267B2" size={35} />
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            <GitHub color="#FFFFFF" size={35} />
          </a>
        </li>
      </ul> 
    </div>
  );
}