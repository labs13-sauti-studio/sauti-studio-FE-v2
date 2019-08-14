import * as React from "react";
import { connect } from "react-redux";
import { deleteProject, setDeleteState } from "../actions";

class DeleteModal extends React.Component {
    constructor() {
        super();
        this.state = {
            delete_project: false,
        };
    }

    componentDidMount(){
        console.log("delete 2");
        this.setState({
            ...this.state,
            delete_project: this.props.delete_project
        });
    }

    componentDidUpdate(prevProps, prevState){
        // Handle Project title update on initial load
        if(this.state.delete_project !== this.props.delete_project || prevProps.delete_project !== this.props.delete_project){
            console.log("delete 3");
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
                        <h3>Are you sure you want to delete this Project?</h3>
                        <div className="btn-container">
                        <button
                            onClick={() => {
                                this.props.deleteProject(this.props.project_id, this.props.props);
                            }}
                            className="delete-btn-yes"
                        >
                            Delete Project
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
  
  export default connect(
    mapStateToProps,
    { deleteProject, setDeleteState }
    )(DeleteModal); 