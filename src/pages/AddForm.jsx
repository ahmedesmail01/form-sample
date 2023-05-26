import { Container } from "@mui/material";
import "./addForm.css";
import { useState } from "react";
import BasicInfo from "./BasicInfo";

//
const AddForm = () => {
	const [tap, setTap] = useState("basic");

	const handleTap = (val) => {
		setTap(val);
	};

	function tapStyle(val) {
		let style = {
			backgroundColor: "white",
			borderRadius: "4px",
			padding: "6px 12px",
			cursor: "pointer",
		};

		if (val === tap) {
			style = {
				backgroundColor: "#8294C4",
				color: "white",
				borderRadius: "4px",
				padding: "6px 12px",
				cursor: "pointer",
			};
		}

		return style;
	}

	let component = <div>basic</div>;

	if (tap === "basic") {
		component = <BasicInfo />;
	}
	if (tap === "personal") {
		component = <div>personal</div>;
	}
	if (tap === "medication") {
		component = <div>medication</div>;
	}
	if (tap === "residency") {
		component = <div>residency</div>;
	}

	return (
		<div>
			<Container className="form_container" style={{ marginTop: "20px" }}>
				<div className="heading">
					<h2>Add Patient</h2>
				</div>
				<ul>
					<li style={tapStyle("basic")} onClick={() => handleTap("basic")}>
						Basic information
					</li>
					<li
						style={tapStyle("personal")}
						onClick={() => handleTap("personal")}
					>
						Personal Identification
					</li>
					<li
						style={tapStyle("medication")}
						onClick={() => handleTap("medication")}
					>
						Medications
					</li>
					<li
						style={tapStyle("residency")}
						onClick={() => handleTap("residency")}
					>
						Residency
					</li>
				</ul>
				<div>{component}</div>
			</Container>
		</div>
	);
};

export default AddForm;
