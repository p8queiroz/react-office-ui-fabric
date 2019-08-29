import React from 'react'
import {Link} from 'office-ui-fabric-react/lib/Link'
import './Footer.css'

const Footer = () => (
  <div className="footer-container">
    {'© FOOTER COMPONENT  2019. '}
    <Link href="https://github.com/p8queiroz/react-office-ui-fabric">Get in touch!</Link>
    {' -- Made with '}
    <span className="text-red">love</span>
    {' by '}
    <Link href="https://github.com/p8queiroz">Paulo Queiroz{'<@p8queiroz>'}</Link>    
  </div>
)

export default Footer