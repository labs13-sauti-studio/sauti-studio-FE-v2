import * as React from "react";
import { connect } from "react-redux";
import { setSimulationState } from "../actions";
import axios from "axios"

class SimulationModal extends React.Component {
    state = {
        // local State Indicator Providing Styling Functionality
        simulate_project: false,
        incoming:'',
        text: '',
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            simulate_project: this.props.simulate_project,
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
      textHandler = (event) =>{
          this.setState({text: event.target.value})
      }

      submitMSG = event => {
				event.preventDefault();
				const reqBody = {
					user_id: this.props.user_id,
					text: this.state.text
				};
				console.log(reqBody);
				axios
					.post(
						`${process.env.REACT_APP_BE_API_URL}/workflows/sim/${this.props.project_id}`,
						reqBody
					)
					.then(response => {
                        console.log(response)
                        this.setState({ incoming: response.data });
                        this.setState({ text: ''})
					})
					.catch(err => console.log(err));
			};

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
                                <p>Hosted At: {`${process.env.REACT_APP_BE_API_URL}/workflows/sim/${this.props.project_id}`} </p>
                            </div>
                            <div className="receive-container">
                                <p>{this.state.incoming ? this.state.incoming.display.text : 'Press Enter in the Text Box to Begin'}</p>
                                {this.state.incoming ? this.state.incoming.display.options.map((item, index) => {
                                    return <p>{` ${index + 1})${item}`}</p>
                                }):''}
                            </div>
                            <div className="send-container">
                                <p>Send:</p>
                                <form onSubmit={this.submitMSG}>
                                <input type="text" name="" id="" value={this.state.text} onChange={this.textHandler}/>
                                </form>
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
                            <div className="fake-btn"><p>00 = Home</p></div>
                            <div className="fake-btn"></div>
                            <div className="fake-btn"> <p>99 = Previous</p></div>
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