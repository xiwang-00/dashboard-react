import React from 'react'

class Button extends React.Component {
    
    render() { 
        return (
          <button type={this.props.type} className={this.props.btnClass}>
            <span className="btn-icon">{this.props.icon}</span>
            <span>{this.props.title}</span>
          </button>
        );
    }
}
 
export default Button;