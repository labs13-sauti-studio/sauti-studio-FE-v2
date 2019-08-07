
import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

import TrashCan from "./icons/trash.png";

export class JSCustomNodeWidget extends React.Component {
	constructor(props) {
    super(props);
    this.ENTER_KEY = 13;
    this.state = {
      description: "",
      nodeTitle: "",
      editing: false,
      editingDesc: false,
    };
	}
	

  componentDidMount() {
    this.setState({
      ...this.state,
      nodeTitle: this.props.node.name,
			description: this.props.node.description
    });
  }


  handleEdit = (name) => {
    if (name === "description") {
      this.setState({
        ...this.state,
        editingDesc: !this.state.editingDesc
      });
    } else if (name === "nodeTitle") {
      this.setState({
        ...this.state,
        editing: !this.state.editing
      });
    } else {
      let mod = name;
      let id = mod.slice(0,-1);
      this.setState({
        ...this.state,
        [id]: !this.state[id]
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (event) => {
    var val = this.state[event.target.name];
    if (val) {
      if (event.target.name === "description") {
        this.setState({
          ...this.state,
          [event.target.name]: val,
          editingDesc: !this.state.editingDesc
        });
        this.props.node.description = this.state[event.target.name];
      } else if (event.target.name === "nodeTitle") {
        this.setState({
          ...this.state,
          [event.target.name]: val,
					editing: !this.state.editing
        });
        this.props.node.name = this.state[event.target.name];
      } else {
        let mod = event.target.name;
        let id = mod.slice(0,-1);
        this.setState({
          ...this.state,
          [event.target.name]: val,
          [id]: !this.state[id]
        });
        let obj = this.props.node.ports;
        console.log('obj', obj);
        for (let key in obj) {
          if (obj[key].options.id === id) {
            console.log('if got called');
            obj[key].options.label = this.state[event.target.name];
          }
        }
      }
    }
  }

  handleKeyDown = (event, countName) => {
    if (event.which === this.ENTER_KEY) {
      this.handleSubmit(event, countName);
    }
  }

  addSubMenu = () => {
    this.props.node.addOutPort("Edit Menu Option..");
    this.props.engine.repaintCanvas();
  };

  deletePortAndLinks = (port) =>{
    this.props.node.removePort(port);
    this.props.engine.repaintCanvas();
  }

  subMenuGenerator = () => {
		let obj = this.props.node.ports;
    let menus = [];
    let count = "00";
    for (let key in obj) {
      if (obj[key].options.in === false) {
        count = (Number(count) + 1).toString();
        if(count.length < 2){
          count = 0 + count + ".";
        }else{
          count = count + ".";
        }
				let id = obj[key].options.id;
        let mod = id + "a";
        let countName = count + mod;
        if(this.state[id] === undefined){
          this.setState({
            ...this.state,
            [id]: false,
            [mod]: obj[key].options.label,
            [countName]: count
          });
        }
        menus.push(
          <div key={key} className="custom-node-submenus">
            <h2>{count}</h2>
            <h2
              className={this.state[id] ? "hidden" : ""}
              onDoubleClick={()=>this.handleEdit(mod)}>
              {this.state[mod]}
            </h2>
            <input
              name={mod}
              placeholder="Enter something..."
              className={this.state[id] ? "" : "hidden"}
              value={this.state[mod]}
              onChange={this.handleChange}
              onKeyDown={(event)=>{
                this.handleKeyDown(event, countName)
                }}
              onKeyUp={(event) => {
              event.stopPropagation();
            }}
            />
            <div onClick={()=>this.deletePortAndLinks(obj[key])} className="trash-icon">
              <img src={TrashCan} alt="trash icon"/>
            </div>
            <div className="line-out">
							<PortWidget engine={this.props.engine} port={this.props.node.getPort(obj[key].options.name)} />
            </div>
          </div>
        );
			}
    }
    return menus;
  };

	render() {
		return (
			<div className="custom-node">
        <div className="custom-node-nodeTitle">
          <div className="line-in">
						<PortWidget engine={this.props.engine} port={this.props.node.getPort('in')} />
          </div>
          <h1
            className={this.state.editing ? "hidden" : ""}
            onDoubleClick={() => this.handleEdit("nodeTitle")}
          >
            {this.state.nodeTitle}
          </h1>
          <input
            name="nodeTitle"
            placeholder="Enter something..."
            className={this.state.editing ? "" : "hidden"}
            value={this.state.nodeTitle}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onKeyUp={(event) => {
              event.stopPropagation();
            }}
          />
        </div>

        {/* <NodeScreen /> */}
        <div className="custom-node-screen">
          <p
            className={this.state.editingDesc ? "hidden" : ""}
            onDoubleClick={() => this.handleEdit("description")}
          >
            {this.state.description}
          </p>
          <textarea
            name="description"
            placeholder="Enter something..."
            wrap="hard"
            maxLength="182"
            className={this.state.editingDesc ? "" : "hidden"}
            value={this.state.description}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onKeyUp={(event) => {
              event.stopPropagation();
            }}
          />
        </div>

        <div>{this.subMenuGenerator()}</div>
        <div className="custom-node-addMenuOption">
          <h2>Add menu option...</h2>
          <img
            className="button-add-port"
            onClick={() => {
              this.addSubMenu();
            }}
            src="https://image.flaticon.com/icons/svg/32/32339.svg"
            alt="plus sign"
          />
        </div>
      </div>
		);
	}
}
