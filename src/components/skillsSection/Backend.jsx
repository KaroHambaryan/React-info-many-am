import React from 'react';

const Backend = ({ skills }) => {
	return (
		<div className={skills.content}>
			<h3 className={skills.title}>Backend Developer</h3>

			<div className={skills.box}>
				<div className={skills.group}>
					<div className={skills.data}>
						<i className={`${skills.bx_badge_check} bx bx-badge-check`}></i>

						<div>
							<h3 className={skills.name}>PHP</h3>
							<span className={skills.level}>Intermediate</span>
						</div>
					</div>

					<div className={skills.data}>
						<i className={`${skills.bx_badge_check} bx bx-badge-check`}></i>

						<div>
							<h3 className={skills.name}>Node Js</h3>
							<span className={skills.level}>Basic</span>
						</div>
					</div>

					<div className={skills.data}>
						<i className={`${skills.bx_badge_check} bx bx-badge-check`}></i>

						<div>
							<h3 className={skills.name}>Python</h3>
							<span className={skills.level}>Intermediate</span>
						</div>
					</div>
				</div>

				<div className={skills.group}>
					<div className={skills.data}>
						<i className={`${skills.bx_badge_check} bx bx-badge-check`}></i>

						<div>
							<h3 className={skills.name}>MySQL</h3>
							<span className={skills.level}>Intermediate</span>
						</div>
					</div>

					<div className={skills.data}>
						<i className={`${skills.bx_badge_check} bx bx-badge-check`}></i>

						<div>
							<h3 className={skills.name}>Firebase</h3>
							<span className={skills.level}>Intermediate</span>
						</div>
					</div>

					<div className={skills.data}>
						<i className={`${skills.bx_badge_check} bx bx-badge-check`}></i>

						<div>
							<h3 className={skills.name}>SQL</h3>
							<span className={skills.level}>Intermediate</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Backend;