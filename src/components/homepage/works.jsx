import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						{INFO.experiences.map((experience, index) => (
							<div className="work">
								<img
									src={experience.src}
									alt={experience.alt}
									className="work-image"
								/>
								<div className="work-title">
									{experience.title}
								</div>
								<div className="work-subtitle">
									{experience.subtitle}
								</div>
								<div className="work-duration">
									{experience.duration}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
