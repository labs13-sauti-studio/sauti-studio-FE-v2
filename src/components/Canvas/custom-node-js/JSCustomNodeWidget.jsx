import * as React from 'react';

import { PortWidget } from '@projectstorm/react-diagrams';
import { Toolkit } from '@projectstorm/react-canvas-core';
export class JSCustomNodeWidget extends React.Component {
	constructor(props) {
    super(props);
    this.ENTER_KEY = 13;
    this.state = {
      description: "",
      nodeTitle: "",
      editing: false,
      editingDesc: false,
      selected: false
    };
	}
	
  componentDidMount() {
    this.setState({
      ...this.state,
      nodeTitle: this.props.node.options.name,
			description: this.props.node.options.description
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

  handleChange = (event) => {
    event.stopPropagation();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
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
        this.props.node.options.description = this.state[event.target.name];
      } else if (event.target.name === "nodeTitle") {
        this.setState({
          ...this.state,
          [event.target.name]: val,
					editing: !this.state.editing
        });
        this.props.node.options.name = this.state[event.target.name];
      } else {
        let mod = event.target.name;
        let id = mod.slice(0,-1);
        this.setState({
          ...this.state,
          [event.target.name]: val,
          [id]: !this.state[id]
        });
        let obj = this.props.node.ports;
        for (let key in obj) {
          if (obj[key].options.id === id) {
            obj[key].options.label = this.state[event.target.name];
          }
        }
      }
    }
  }

  handleKeyDown = (event, countName) => {
    event.stopPropagation();
    if (event.which === this.ENTER_KEY) {
      this.handleSubmit(event, countName);
    }
  }

  addSubMenu = (event) => {
    event.stopPropagation();
    let UI = Toolkit.UID();
    console.log(UI);
    let x = this.props.node.addOutPort("Edit Menu Option..", `out-${this.props.node.options.id + UI + 1}`);
    let promise = new Promise(function(resolve, reject) {
        resolve(x);
    });
    promise.then(()=>{
      this.props.engine.repaintCanvas();
    });
  };

  deletePortAndLinks = (port) =>{
    let x = this.props.node.removePort(port, this.props.engine);
    let promise = new Promise(function(resolve, reject) {
        resolve(x);
    });
    promise.then(()=>{
      this.props.engine.repaintCanvas();
    });
  }

  selectNode = () => {
    this.setState({
      ...this.state,
      selected: !this.state.selected
    });
  }

  subMenuGenerator = () => {
    let obj = this.props.node.ports;
    // console.log("obj",this.props.node.ports);
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
        console.log("obj[key]",obj[key]);
        let length = Object.keys(obj[key].links).length;
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
            <div className="submenu-text-container">
            <h2 className="number">{count}</h2>
            <h2
              className={this.state[id] ? "hidden" : "option-text"}
              onDoubleClick={()=>this.handleEdit(mod)}
              title="Double Click to Edit"
              >
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
            </div>
            <div onClick={()=>this.deletePortAndLinks(obj[key])} className="trash-icon">
              <i 
                className="fas fa-trash-alt"
                title="Delete Option"
              ></i>
            </div>
            <div className={`line-out ${length > 0?"fill-port":"fill-port2"}`}>
							<PortWidget engine={this.props.engine} port={this.props.node.getPort(obj[key].options.name)} />
            </div>
          </div>
        );
			}
    }
    return menus;
  };

	render() {
    console.log("this.props.node",this.props.node);
    console.log("this.props.node.getPort('in')",this.props.node.getPort('in'));
    let length = Object.keys(this.props.node.getPort('in').links).length;
		return (
			<div 
      className={`custom-node selected-${this.props.node.isSelected()}`} 
      >
        <div className="custom-node-nodeTitle">
          <div className={`line-in ${length > 0?"fill-port":"fill-port2"}`}>
						<PortWidget engine={this.props.engine} port={this.props.node.getPort('in')}>
            </PortWidget>
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
          <i 
                className="fas fa-plus-square"
                title="Add Screen"
                onClick={(event) => {
              this.addSubMenu(event);
            }}
          ></i>
        </div>
      </div>
		);
	}
}
