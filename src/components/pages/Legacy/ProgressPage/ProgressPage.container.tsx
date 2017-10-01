/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data/baseline';


/************************************/
/*            INTERFACES            */
/************************************/
/* Own Props */
interface IOwnProps {
}

interface IState {
    realTimeValues: Array<any>;
    baselineData: Array<any>;
    iconStates: Array<IiconState>;
}

interface IiconState {
    id: string;
    statusClass: string;
}

/**
 * @desc Represents Progress Page Component
 * @class ProgressPageContainer
 * @extends {React.Component}
 * @returns component page view (Stateful component)
 */
class ProgressPageContainer extends React.Component<IOwnProps, IState> {


    constructor() {
        super();

        // Real Time Values
        let localSt: any = localStorage.getItem('realTimeData');
        let parsedLocalSt = JSON.parse(localSt);

        // Baseline Data
        this.state = {
            baselineData: [],
            realTimeValues: JSON.parse(localSt),
            iconStates: []
        };

        // tslint:disable-next-line:no-console
        console.log('parsedLocalSt: ', parsedLocalSt);

        if (parsedLocalSt !== null) {
            Object.keys( parsedLocalSt ).forEach( key => {
                this.state.iconStates.push({
                    id: key,
                    statusClass: 'color-silver fontSize-xxl fa fa-circle-o'
                });
            });
        }

        // tslint:disable-next-line:no-console
        console.log('this.state.iconStates: ', this.state.iconStates);


        for (var i = 0; i < data.length; i++) {
            // tslint:disable-next-line:no-console
            console.log('data[i]: ', data[i]);
            this.state.baselineData.push(data[i]);
        }

        // tslint:disable-next-line:no-console
        console.log('STATE INIT PROGRESS_PAGE: ', this.state);
    }


    _buildPart(status: string) {
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

    _calculateRange() {
        
        Object.keys( this.state.realTimeValues ).forEach( key => {
            // tslint:disable-next-line:no-console
            console.log('ENTRO Y ESTA ES LA DATA: ', this.state.realTimeValues[key] );
            let value = this.state.realTimeValues[key];

            for (let i = 0; i < this.state.baselineData.length; i++) {
                // tslint:disable-next-line:no-console
                console.log('this.state.baselineData', this.state.baselineData);
                // tslint:disable-next-line:no-console
                console.log('i', i);
                // tslint:disable-next-line:triple-equals
                if (this.state.baselineData[i].id == key) {

                    // tslint:disable-next-line:curly
                    if (value >= this.state.baselineData[i].min &&
                        value <= this.state.baselineData[i].max &&
                        value !== '') {
                        // Checked
                        // tslint:disable-next-line:no-console
                        console.log('KEY: ' +  key + ' & VALUE: ' + value + ' is Checked');
                        
                        let newArr = this.state.iconStates.filter((state: IiconState) => {
                            if (state.id === key) {
                                return state.statusClass = 'color-positive fontSize-xxl fa fa-check-circle';
                            }
                            return state;
                        });
                        
                        this.setState({
                            iconStates: newArr
                        });

                    } else  {
                        // Warning
                        // tslint:disable-next-line:no-console
                        let newArr = this.state.iconStates.filter((state: IiconState) => {
                            if (state.id === key) {
                                return state.statusClass = 'color-warning fontSize-xxl fa fa-exclamation-circle';
                            }
                            return state;
                        });
                        
                        this.setState({
                            iconStates: newArr
                        });
                    }
                }
            }

        });
        
    }

    _getStatusClass(part: any) {
        // tslint:disable-next-line:radix
        let parsedPartId = part.id;
        if (parsedPartId <= 8) {
            for (var i = 0; i < this.state.iconStates.length; i++) {
                if (this.state.iconStates[i].id === parsedPartId) {
                    return this.state.iconStates[parsedPartId].statusClass;
                } else {
                    return 'color-silver fontSize-xxl fa fa-circle-o';
                }
            }
        }
        return 'color-silver fontSize-xxl fa fa-circle-o';
    }


    _handleClick() {
        this._calculateRange();
    }

    /*   COMPONENTDIDMOUNT    */
    /**************************/
    componentDidMount() {        
        //
    }


    /*         RENDER         */
    /**************************/
    render() {

        /*       PROPERTIES       */
        /**************************/
        /* const partsList = [
            {   
                id: 1,
                status: 'normal'
            },
            {   
                id: 2,
                status: 'normal'
            },
            {   
                id: 3,
                status: 'normal'
            },
            {   
                id: 4,
                status: 'normal'
            },
            {   
                id: 5,
                status: 'normal'
            },
            {   
                id: 6,
                status: 'normal'
            },
            {   
                id: 7,
                status: 'normal'
            },
            {   
                id: 8,
                status: 'normal'
            },
        ]; */
        
    
        /*         MARKUP          */
        /***************************/
        return (
            <section className="ProgressPage container mt-3">

                {/* Parts List Generator */}
                {this.state.iconStates.map((part: any) => (
                    <div key={part.id} className="row">
                        <div className="col text-center">
                        {/* tslint:disable-next-line:radix */}
                        <i className={part.statusClass} aria-hidden="true" />
                            <span className="ml-2 color-silver fontSize-xxl">
                                Part #{part.id} position
                            </span>
                        </div>
                    </div>
                ))}
         
                <hr className="m-4" />

                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-primary btn-lg btn-block mb-2"
                                onClick={() => this._handleClick()}>
                            Check my progress
                        </button>
                        <Link className="color-silver fontSize-xl fontWeight-2 textDecoration-underline" 
                              to={`/sensor/config`}>
                            Real-time sensor manage
                        </Link>
                        {/*<Link className="color-silver fontSize-xl fontWeight-2 textDecoration-underline" 
                              to={`/baseline/config`}>
                            Baseline sensor manage
                        </Link>*/}
                    </div>
                </div>
                
            </section>
        );


    }

}


/* Export */
export default ProgressPageContainer;