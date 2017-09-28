/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';


/************************************/
/*            INTERFACES            */
/************************************/
/* Own Props */
interface IOwnProps {
}

/**
 * @desc Represents Progress Page Component
 * @class ProgressPageContainer
 * @extends {React.Component}
 * @returns component page view (Stateful component)
 */
class ProgressPageContainer extends React.Component<IOwnProps, any> {


    constructor() {
        super();
    }


    _handleClick(tab: number) {
        //
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
            <section className="ProgressPage">
                <button className="btn btn-primary">
                    Check my progress
                </button>
            </section>
        );


    }

}


/* Export */
export default ProgressPageContainer;