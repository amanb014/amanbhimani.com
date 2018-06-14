import React from 'react'
import Link from 'gatsby-link'

const Intro = (props) => {
	const list = Object.keys(props.content).map((line, i) => {
		return (
			<div className="item">
				<div>{i < 9 ? '0' + (i+1) : (i+1) }</div>
				<div>{line} =</div>
				<div>{props.content[line]}</div>
			</div>
		)
	})

	return (
		<div className="intro-container">
			<h4>/* Hello World! */</h4>
			{list}
		</div>
	)
}

export default Intro