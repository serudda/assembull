/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';
import data from '../../../data/realTimeSensor';
import { Redirect } from 'react-router';


/************************************/
/*            INTERFACES            */
/************************************/
/* Own Props */
interface IOwnProps {
}

interface IState {
    inputValues: {};
    redirect?: any;
}

/**
 * @desc Represents Real Time Sensor Page Component
 * @class BaselineSensorPageContainer
 * @extends {React.Component}
 * @returns component page view (Stateful component)
 */
class RealTimeSensorPageContainer extends React.Component<IOwnProps, IState> {

    private realTimeSensorData: any;

    constructor() {
        super();
        this.realTimeSensorData = [];
        for (var i = 0; i < data.length; i++) {
            this.realTimeSensorData.push(data[i]);
        }
        let localSt: any = localStorage.getItem('realTimeData');
        this.state = {
            inputValues: JSON.parse(localSt) || {}
        };

        // tslint:disable-next-line:no-console
        console.log('STATE INIT: ', this.state.inputValues);
    }

    /*_handleRealTimeChange(id: number, value: number) {
        this.setState({ 
            inputValues: this.state.inputValues.concat([{id, distance: value}])
        }); 

        // tslint:disable-next-line:no-console
        console.log('State:', this.state.inputValues);
    }*/

    _handleRealTimeChange(id: number, e: any) {

        let inputValues = Object.assign({}, this.state.inputValues);
        
        // tslint:disable-next-line:no-console
        console.log('inputValues: ', inputValues);

        inputValues[id] = e.target.value;

        /* set the state to the new variable */
        this.setState({inputValues: inputValues});

        // tslint:disable-next-line:no-console
        console.log('this.state.inputValues: ', this.state.inputValues);
        // tslint:disable-next-line:no-console
        console.log('this.realTimeSensorData.: ', this.realTimeSensorData);
    
    }

    _handleClick(self: any) {  

        let inputValues = Object.assign({}, self.state.inputValues);
        for (let i = 0; i < self.realTimeSensorData.length; i++) {
            let exist = false;
            // if(this.state.inputValues)
            // tslint:disable-next-line:no-console
            for (var key in self.state.inputValues) {
                
                // tslint:disable-next-line:radix
                if (parseInt(key) === i) {
                    exist = true;
                }
            }

            if (!exist) {
                // Does not exist
                // let inputValues = Object.assign({}, self.state.inputValues);
                 inputValues[i] = '-1';
                // this.setState({inputValues: inputValues});
            }
        }

        // self.setState({redirect: true});
        self.setState(function() {            
            return {inputValues: inputValues, redirect: true};
        });
        
        localStorage.setItem('realTimeData', JSON.stringify(inputValues));
    }


    /*   COMPONENTDIDMOUNT    */
    /**************************/
    componentDidMount() {        
        //
    }


    /*         RENDER         */
    /**************************/
    render() {

        if (this.state.redirect) {
            // tslint:disable-next-line:jsx-boolean-value
            return <Redirect push to="/progress" />;
        }
        
    
        /*         MARKUP          */
        /***************************/
        return (
            <section className="RealTimeSensorPage container">

                {/* Title */}
                <div className="row mb-4">
                    <div className="col text-center">
                        <h3>
                            Real-Time Sensor Manage
                        </h3>
                    </div>
                </div>

                {/* Real-time sensor ranges list */}
                <div className="row">
                    <div className="col">

                        <div className="d-flex flex-wrap align-items-center justify-content-center mb-3">
                            <div className="d-flex flex-wrap align-items-center fontSize-xxl">
                                <form className="form-inline">
                                    <p className="color-slate m-0 mr-3" style={{width: '80px'}}>Parts</p>
                                    <div className="form-group text-center mb-0">
                                        <p className="color-slate m-0" style={{width: '100px'}}>Distance</p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Parts List Generator */}
                        {this.realTimeSensorData.map((realTimeSensor: any) => (
                            <div key={realTimeSensor.id} className="d-flex flex-wrap align-items-center justify-content-center mb-3">
                                <div className="d-flex flex-wrap align-items-center fontSize-xxl">
                                    <form className="form-inline">
                                        <p className="color-silver mr-3" style={{width: '90px'}}>R - {realTimeSensor.label}</p>
                                        <div className="form-group">
                                            <input type="text" style={{width: '100px'}} 
                                                    value={this.state.inputValues[realTimeSensor.id]}
                                                    onChange={(event) => this._handleRealTimeChange(realTimeSensor.id, event)}/>
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
                        <button className="btn btn-success btn-lg btn-block"
                                onClick={() => this._handleClick(this)}>
                            Save
                        </button>
                    </div>
                </div>
            </section>
        );


    }

}


/* Export */
export default RealTimeSensorPageContainer;