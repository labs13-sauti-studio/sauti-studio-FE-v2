import * as React from "react";
import { connect } from "react-redux";
import { setSimulationState } from "../actions";

class SimulationModal extends React.Component {
    state = {
        // local State Indicator Providing Styling Functionality
        simulate_project: false
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            simulate_project: this.props.simulate_project
        });
    }

    componentDidUpdate(prevProps, prevState){
        // Handle project simulation state on update
        if(this.state.simulate_project !== this.props.simulate_project || prevProps.simulate_project !== this.props.simulate_project){
            this.setState({
                ...this.state,
                simulate_project: this.props.simulate_project
            });
        }
      }

    render(){
        return(
            <>
                <div className={`simulation-${this.state.simulate_project}`}>
                    <div className="simulation-container">
                        <div 
                            className="cancel-container"
                            title="Cancel Simulation"
                            onClick={() => {
                            this.props.setSimulationState(this.props.simulate_project);
                            }}
                        >
                            <i class="fas fa-window-close"></i>
                        </div>
                        <div className="simulation-screen-container">
                            <div className="to-container">
                                <p>To: Place Holder</p>
                            </div>
                            <div className="receive-container"></div>
                            <div className="send-container">
                                <p>Send:</p>
                                <input type="text" name="" id=""/>
                            </div>
                        </div>
                        <div className="simulation-btn-container">
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

// Global Redux State
const mapStateToProps = state => ({
    user_id: state.user_id,
    project_id: state.project_id,
    project_title: state.project_title,
    graph_json: state.graph_json,
    fetching: state.fetching,
    error: state.error,
    loggedIn: state.loggedIn,
    saving_canvas: state.saving_canvas,
    delete_project: state.delete_project,
    simulate_project: state.simulate_project
});
 
// Connecting State and Rdux Reducer Methods
export default connect(
    mapStateToProps,
    { setSimulationState }
)(SimulationModal); 