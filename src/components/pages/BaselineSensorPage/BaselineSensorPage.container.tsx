/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';
import data from '../../../data/baseline';


/************************************/
/*            INTERFACES            */
/************************************/
/* Own Props */
interface IOwnProps {
}

/**
 * @desc Represents Baseline Sensor Page Component
 * @class BaselineSensorPageContainer
 * @extends {React.Component}
 * @returns component page view (Stateful component)
 */
class BaselineSensorPageContainer extends React.Component<IOwnProps, any> {

    private baselineData: any;

    constructor() {
        super();
        this.baselineData = [];
        for (var i = 0; i < data.length; i++) {
            this.baselineData.push(data[i]);
        }
    }


    _buildBaseline(status: string) {
        switch (status) {
            case 'ok':
                return  <i className="color-positive fontSize-xxl fa fa-check-circle" aria-hidden="true" />;
            case 'warning':
                return  <i className="color-warning fontSize-xxl fa fa-exclamation-circle" aria-hidden="true" />;
            case 'normal':
            default:
                return  <i className="color-silver fontSize-xxl fa fa-circle-o" aria-hidden="true" />;
        }
    }

    _handleMinChange(id: number, value: number) {
        this.setState({ 
            id,
            min: value
        });
    }

    _handleMaxChange(id: number, value: number) {
        this.setState({ 
            id,
            max: value
        });
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
            <section className="BaselineSensorPage container">

                {/* Title */}
                <div className="row mb-4">
                    <div className="col text-center">
                        <h3>
                            Baseline Sensor Manage
                        </h3>
                    </div>
                </div>

                {/* Baseline sensor ranges list */}
                <div className="row">
                    <div className="col">

                        <div className="d-flex flex-wrap align-items-center justify-content-center mb-3">
                            <div className="d-flex flex-wrap align-items-center fontSize-xxl">
                                <form className="form-inline">
                                    <p className="color-slate m-0 mr-3" style={{width: '80px'}}>Parts</p>
                                    <div className="form-group text-center mb-0">
                                        <p className="color-slate m-0" style={{width: '100px'}}>Min</p>
                                    </div>
                                    <div className="form-group mx-sm-3 text-center mb-0">
                                        <p className="color-slate m-0" style={{width: '100px'}}>Max</p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Parts List Generator */}
                        {this.baselineData.map((baseline: any) => (
                            <div key={baseline.id} className="d-flex flex-wrap align-items-center justify-content-center mb-3">
                                <div className="d-flex flex-wrap align-items-center fontSize-xxl">
                                    <form className="form-inline">
                                        <p className="color-silver mr-3" style={{width: '80px'}}>{baseline.label}</p>
                                        <div className="form-group">
                                            <input type="text" style={{width: '100px'}} 
                                                    value={baseline.min}
                                                    onChange={() => this._handleMinChange(baseline.id, baseline.max)}/>
                                        </div>
                                        <div className="form-group mx-sm-3">
                                            <input type="text" style={{width: '100px'}} 
                                                    value={baseline.max}
                                                    onChange={() => this._handleMaxChange(baseline.id, baseline.max)}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <hr className="borderStyle-dashed mb-5" />

                <div className="row mb-5">
                    <div className="col">
                        <button className="btn btn-success btn-lg btn-block">
                            Save
                        </button>
                    </div>
                </div>
            </section>
        );


    }

}


/* Export */
export default BaselineSensorPageContainer;