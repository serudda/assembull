/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';


/************************************/
/*            INTERFACES            */
/************************************/
/* Own Props */
interface IOwnProps {}


/* Mapped State to Props */
interface IStateProps {
    //
}


/**
 * @desc Represents Home Page
 * @class HomePageContainer
 * @extends {React.Component}
 * @returns component page view (Stateful component)
 */
class HomePageContainer extends React.Component<IOwnProps & IStateProps, {}> {

    constructor() {
        super();
    }

    /*   COMPONENTDIDMOUNT    */
    /**************************/
    componentDidMount() {        
        //
    }


    /*         RENDER         */
    /**************************/
    render() {


        /*         MARKUP          */
        /***************************/
        return (
            <div className="HomePage">
                HomePage
            </div>
        );
    }
}


/* Export */
export default HomePageContainer;