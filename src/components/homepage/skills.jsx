import React from "react";
import { faFire } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/skills.css";

const Skills = () => {
	return (
		<div className="skills">
			<Card
				icon={faFire}
				title="Skills"
				body={
					<div className="skills-body">
						<div className="all-skills">
							{INFO.skills.map((skill, index) => (
								<img
									src={skill.src}
									alt={skill.alt}
									className="skill-image"
								/>
							))}
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Skills;
