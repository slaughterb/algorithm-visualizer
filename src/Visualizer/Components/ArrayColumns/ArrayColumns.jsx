
import React, { Component } from 'react';
import './styles.css';

class ArrayColumns extends Component {
	render() {
		return (
			<div className="colContainer">
				{this.props.array.map((val, i) => (
					<div className="col" key={i}>
						<div className="side top"></div>
						<div className="side bottom"></div>
						<div className="side right">
							<div className="colColor rightColFill" style={{
								height: `${val}vh`,
								transform: `translateY(${70 - val}vh)`,
							}}></div>
						</div>
						<div className="side left">
							<div className="colColor leftColFill" style={{
								height: `${val}vh`,
								transform: `translateY(${70 - val}vh)`
							}}></div>
						</div>
						<div className="side front">
							<div className="colColor frontColFill" style={{
								height: `${val}vh`,
								transform: `translateY(${70 - val}vh)`
							}}><div className="colValue">{val}</div></div>
						</div>
						<div className="side back">
							<div className="colColor backColFill" style={{
								height: `${val}vh`,
								transform: `translateY(${70 - val}vh)`
							}}></div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default ArrayColumns;