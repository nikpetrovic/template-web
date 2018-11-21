import React from 'react'
import './LimitOfLiability.scss'

const LimitOfLiability = props => {
	return (
		<div className="limit-of-liability-container">
			<div className="repairs">
				<div className="previous-repairs-wrapper">
					<div className="previous-repairs">$150.00</div>
				</div>
				<div className="this-repair-wrapper">
					<div className="this-repair">$35.00</div>
				</div>
			</div>
			<div className="limit-of-liability-wrapper">
				<div className="limit">
					<div className="below-limit-wrapper">
						<div className="below-limit">$185.00/$299.99</div>
					</div>
					<div className="above-limit" />
				</div>
				<div className="limit-of-liability" />
			</div>
		</div>
	)
}

export default LimitOfLiability
