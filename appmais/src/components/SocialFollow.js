import React from "react";

import { Camera, Facebook, GitHub } from 'react-feather';

export default function SocialFollow() {
  return (
    <div>
      <ul>
      <li className="nav-item">
              <a className="nav-link" href="#">
              <Facebook color="#4267B2" size={48} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
              <GitHub color="#FFFFFF" size={48} />
              </a>
            </li>
      </ul>

    </div>
  );
}