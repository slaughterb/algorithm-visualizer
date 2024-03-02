import React, { Component } from 'react';
import RuntimeImage from '../../assets/images/sorting-runtimes.png';
import './styles.css';

class Footer extends Component {
	render() {
		return (
			<div className="footerContainer">
				<div id="footer-note">To provide context accompanying the visuals, the image below shows
            the runtimes and space complexities of the common sorting algorithms, including
            the ones demonstrated in this program. Note that Bubble Sort and Insertion Sort are stable algorithms
            while Selection Sort is not.
            	</div>
            	<img alt="runtimes complexity analysis" src={RuntimeImage} />
			</div>
		);
	}
}

export default Footer;