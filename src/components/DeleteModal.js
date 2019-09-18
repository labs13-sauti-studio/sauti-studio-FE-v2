import * as React from "react";
import { connect } from "react-redux";

import { deleteProject, setDeleteState } from "../actions";
class DeleteModal extends React.Component {
    state = {
        // local State Indicator Providing Styling Functionality
        delete_project: false,
    };

    componentDidMount(){
        this.setState({
            ...this.state,
            delete_project: this.props.delete_project
        });
    }

    componentDidUpdate(prevProps, prevState){
        // Handle Project delete state on update
        if(this.state.delete_project !== this.props.delete_project || prevProps.delete_project !== this.props.delete_project){
            this.setState({
                ...this.state,
                delete_project: this.props.delete_project
            });
        }
      }

    render(){
        return(
            <>
                <div className={`delete-${this.state.delete_project}`}>
                    <div className="delete-container">
                        <h3>Confirm App Deletion</h3>
                        <div className="btn-container">
                        <button
                            onClick={() => {
                                this.props.deleteProject(this.props.project_id, this.props.props);
                            }}
                            className="delete-btn-yes"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() =>{
                                this.props.setDeleteState(this.props.delete_project);
                                }
                            }
                            className="delete-btn-no"
                        >
                            Return
                        </button>
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
    delete_project: state.delete_project
});

// Connecting State and Rdux Reducer Methods
export default connect(
mapStateToProps,
{ deleteProject, setDeleteState }
)(DeleteModal); 