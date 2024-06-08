import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          (+225) 07 09 04 3557 -  (+509) 4088 4271
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          contact@webwazedigital.com
        </li>
        {/*<li>*/}
        {/*  {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}*/}
        {/*  50 Wall Street Suite, 44150 <br/>Ohio, United States*/}
        {/*</li>*/}
      </ul>
    </>
  )
}
