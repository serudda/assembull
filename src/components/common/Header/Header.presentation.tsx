/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';

// const logo = require('../../../resources/images/Stylepills-main-short-logo.svg');


/************************************/
/*            INTERFACES            */
/************************************/
interface IHeaderProps {}


/***********************************************************************/
/*           STATELESS FUNCTIONAL COMPONENT (SFC) DEFINITION           */
/***********************************************************************/
const Header: React.SFC<IHeaderProps> = () => (

    <header className="Header p-2">

        <div className="container color-silver text-center fontFamily-poppins fontSize-xxl">
            Assembull
        </div>

        <hr className="w-50 mt-1 borderStyle-dashed" />

    </header>
    
);

/* Export */
export default Header;