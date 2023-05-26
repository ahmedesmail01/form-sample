import "./basicInfo.css";
import { useState } from "react";

const BasicInfo = () => {
	const [salutation, setSalutation] = useState("");
	const [isMyPatient, setIsMyPatient] = useState(false);
	const [dropdownValue, setDropdownValue] = useState("");
	const [firstName, setFirstName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [lastName, setLastName] = useState("");
	const [isHomeless, setIsHomeless] = useState(false);
	const [addressOne, setAddressOne] = useState("");
	const [addressTwo, setAddressTwo] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [country, setCountry] = useState("");
	const [province, setProvince] = useState("");
	const [city, setCity] = useState("");
	const [ethnicity, setEthnicity] = useState("");
	const [primaryPhone, setPrimaryPhone] = useState("");
	const [secondaryPhone, setSecondaryPhone] = useState("");
	const [email, setEmail] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [emergencyContactName, setEmergencyContactName] = useState("");
	const [emergencyContactRelation, setEmergencyContactRelation] = useState("");
	const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
	const [emergencyContactEmail, setEmergencyContactEmail] = useState("");
	const [password, setPassword] = useState("");
	const [notes, setNotes] = useState("");

	const handleSalutationChange = (event) => {
		setSalutation(event.target.value);
	};

	const handleMyPatientChange = (event) => {
		setIsMyPatient(event.target.checked);
	};

	const handleDropdownChange = (event) => {
		setDropdownValue(event.target.value);
	};

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handleMiddleNameChange = (event) => {
		setMiddleName(event.target.value);
	};

	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};

	const handleHomelessPatientChange = (event) => {
		setIsHomeless(event.target.checked);
	};

	const handleAddressOneChange = (event) => {
		setAddressOne(event.target.value);
	};

	const handleAddressTwoChange = (event) => {
		setAddressTwo(event.target.value);
	};

	const handlePostalCodeChange = (event) => {
		setPostalCode(event.target.value);
	};

	const handleCountryChange = (event) => {
		setCountry(event.target.value);
	};

	const handleProvinceChange = (event) => {
		setProvince(event.target.value);
	};

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};

	const handleEthnicityChange = (event) => {
		setEthnicity(event.target.value);
	};

	const handlePrimaryPhoneChange = (event) => {
		setPrimaryPhone(event.target.value);
	};

	const handleSecondaryPhoneChange = (event) => {
		setSecondaryPhone(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleDateOfBirthChange = (event) => {
		setDateOfBirth(event.target.value);
	};

	const handleEmergencyContactNameChange = (event) => {
		setEmergencyContactName(event.target.value);
	};

	const handleEmergencyContactRelationChange = (event) => {
		setEmergencyContactRelation(event.target.value);
	};

	const handleEmergencyContactPhoneChange = (event) => {
		setEmergencyContactPhone(event.target.value);
	};

	const handleEmergencyContactEmailChange = (event) => {
		setEmergencyContactEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleNotesChange = (event) => {
		setNotes(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = {
			salutation,
			isMyPatient,
			dropdownValue,
			firstName,
			middleName,
			lastName,
			isHomeless,
			addressOne,
			addressTwo,
			postalCode,
			country,
			province,
			city,
			ethnicity,
			primaryPhone,
			secondaryPhone,
			email,
			dateOfBirth,
			emergencyContactName,
			emergencyContactRelation,
			emergencyContactPhone,
			emergencyContactEmail,
			password,
			notes,
		};

		const formDataString = JSON.stringify(formData, null, 2);
		alert(`Form data:\n${formDataString}`);
		console.log(formData);
		setSalutation("");
		setIsMyPatient(false);
		setDropdownValue("");
		setFirstName("");
		setMiddleName("");
		setLastName("");
		setIsHomeless(false);
		setAddressOne("");
		setAddressTwo("");
		setPostalCode("");
		setCountry("");
		setProvince("");
		setCity("");
		setEthnicity("");
		setPrimaryPhone("");
		setSecondaryPhone("");
		setEmail("");
		setDateOfBirth("");
		setEmergencyContactName("");
		setEmergencyContactRelation("");
		setEmergencyContactPhone("");
		setEmergencyContactEmail("");
		setPassword("");
		setNotes("");
	};

	return (
		<div>
			<div className="heading">
				<h3>Basic Information</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="top">
					<fieldset>
						<label htmlFor="salutation">Salutation:</label>
						<select
							name="salutation"
							id="salutaton"
							onChange={handleSalutationChange}
						>
							<optgroup>
								<option value="Mr">Mr</option>
								<option value="Miss">Miss</option>
							</optgroup>
						</select>
					</fieldset>
					<fieldset className="check">
						<input
							checked={isMyPatient}
							onChange={handleMyPatientChange}
							type="checkbox"
							id="my-patient"
							name="my-patient"
						/>
						<label htmlFor="my-patient">My Patient</label>
					</fieldset>
					<fieldset>
						<select
							id="dropdown"
							name="dropdown"
							value={dropdownValue}
							onChange={handleDropdownChange}
						>
							<option value="kabsha , Yannik">(kabsha , Yannik)</option>
							<option value="example one">example one</option>
							<option value="example two">example two</option>
						</select>
					</fieldset>
				</div>
				<fieldset className="normal_f">
					<label id="name-label" htmlFor="name">
						First Name:{" "}
					</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						placeholder="Enter your name"
						value={firstName}
						onChange={handleFirstNameChange}
					/>
				</fieldset>
				<fieldset className="normal_f">
					<label id="middle-name-label" htmlFor="middle-name">
						Middle name:{" "}
					</label>
					<input
						id="middle-name"
						name="middle-name"
						type="text"
						required
						placeholder="Enter your middle name"
						value={middleName}
						onChange={handleMiddleNameChange}
					/>
				</fieldset>
				<fieldset className="normal_f">
					<label id="last-name-label" htmlFor="last-name">
						Last name:{" "}
					</label>
					<input
						id="last-name"
						name="last-name"
						type="text"
						required
						placeholder="Enter your last name"
						value={lastName}
						onChange={handleLastNameChange}
					/>
				</fieldset>
				<fieldset className="check">
					<label htmlFor="homeless-patient">Patient is Homeless</label>
					<input
						type="checkbox"
						id="homeless-patient"
						name="homeless-patient"
						checked={isHomeless}
						onChange={handleHomelessPatientChange}
					/>
				</fieldset>
				<div className="split">
					<div>
						<fieldset className="normal_f">
							<label id="address-one-label" htmlFor="address-one">
								Address 1{" "}
							</label>
							<input
								className="split_input"
								id="address-one"
								name="address-one"
								type="text"
								required
								placeholder="Enter your address"
								value={addressOne}
								onChange={handleAddressOneChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label id="address-two-label" htmlFor="address-two">
								Address 2{" "}
							</label>
							<input
								className="split_input"
								id="address-two"
								name="address-two"
								type="text"
								required
								placeholder="Enter your address"
								value={addressTwo}
								onChange={handleAddressTwoChange}
							/>
						</fieldset>
						<div className="inner">
							<fieldset>
								<label id="postal-code-label" htmlFor="postal-code">
									Postal code:{" "}
								</label>
								<input
									className="split_input"
									style={{ width: "200px" }}
									id="postal-code"
									name="postal-code"
									type="number"
									required
									placeholder="Enter your postal code"
									value={postalCode}
									onChange={handlePostalCodeChange}
								/>
							</fieldset>
							<fieldset>
								<label htmlFor="country">country</label>
								<select
									id="country"
									name="country"
									value={country}
									onChange={handleCountryChange}
								>
									<option value="">choose country</option>
									<option value="Egypt">Egypt</option>
									<option value="Canada">Canada</option>
									<option value="USA">USA</option>
									<option value="KSA">KSA</option>
								</select>
							</fieldset>
							<fieldset>
								<label htmlFor="province">Province</label>
								<select
									id="province"
									name="province"
									value={province}
									onChange={handleProvinceChange}
								>
									<option value="">choose province</option>
									<option value="Egypt">Egypt</option>
									<option value="Canada">Canada</option>
									<option value="USA">USA</option>
									<option value="KSA">KSA</option>
								</select>
							</fieldset>
							<fieldset>
								<label htmlFor="city">city</label>
								<select
									id="city"
									name="city"
									value={city}
									onChange={handleCityChange}
								>
									<option value="">choose city</option>
									<option value="cairo">cairo</option>
									<option value="tanta">tanta</option>
									<option value="giza">giza</option>
									<option value="alex">alex</option>
								</select>
							</fieldset>
							<fieldset>
								<label htmlFor="ethnicity">Ethnicity</label>
								<select
									id="ethnicity"
									name="ethnicity"
									value={ethnicity}
									onChange={handleEthnicityChange}
								>
									<option value="">choose ethnicity</option>
									<option value="Egypt">Egypt</option>
									<option value="Canada">Canada</option>
									<option value="USA">USA</option>
									<option value="KSA">KSA</option>
								</select>
							</fieldset>
						</div>
					</div>
					<div>
						<fieldset className="normal_f">
							<label htmlFor="phone-primary">Primary Phone Number:</label>
							<input
								className="split_input"
								type="tel"
								id="phone-primary"
								name="phone-primary"
								required
								value={primaryPhone}
								onChange={handlePrimaryPhoneChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label htmlFor="phone-seconday">Secondary Phone Number:</label>
							<input
								className="split_input"
								type="tel"
								id="phone-seconday"
								name="phone-seconday"
								required
								value={secondaryPhone}
								onChange={handleSecondaryPhoneChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label htmlFor="email">Email</label>
							<input
								className="split_input"
								type="email"
								name="email"
								id="email"
								required
								value={email}
								onChange={handleEmailChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label htmlFor="date">Date of birth</label>
							<input
								className="split_input"
								type="date"
								name="date"
								id="date"
								required
								value={dateOfBirth}
								onChange={handleDateOfBirthChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label id="emergency-name-label" htmlFor="emergency-name">
								Emergency Contact Name:{" "}
							</label>
							<input
								className="split_input"
								id="emergency-name"
								name="emergency-name"
								type="text"
								required
								placeholder="Enter name"
								value={emergencyContactName}
								onChange={handleEmergencyContactNameChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label id="emergency-relation-label" htmlFor="emergency-relation">
								Emergency Contact Relation:{" "}
							</label>
							<input
								className="split_input"
								id="emergency-relation"
								name="emergency-relation"
								type="text"
								required
								placeholder="Enter name"
								value={emergencyContactRelation}
								onChange={handleEmergencyContactRelationChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label id="emergency-phone-label" htmlFor="emergency-phone">
								Emergency Contact Phone:{" "}
							</label>
							<input
								className="split_input"
								id="emergency-phone"
								name="emergency-phone"
								type="tel"
								required
								placeholder="Enter phone"
								value={emergencyContactPhone}
								onChange={handleEmergencyContactPhoneChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label id="emergency-email-label" htmlFor="emergency-email">
								Emergency Contact Email:{" "}
							</label>
							<input
								className="split_input"
								id="emergency-email"
								name="emergency-email"
								type="email"
								required
								placeholder="Enter email"
								value={emergencyContactEmail}
								onChange={handleEmergencyContactEmailChange}
							/>
						</fieldset>
						<fieldset className="normal_f">
							<label htmlFor="password">Password</label>
							<input
								className="split_input"
								type="password"
								name="password"
								id="password"
								value={password}
								onChange={handlePasswordChange}
							/>
						</fieldset>
					</div>
				</div>
				<div className="textarea">
					<label htmlFor="notes">General Notes</label>
					<textarea
						value={notes}
						onChange={handleNotesChange}
						name="notes"
						id="notes"
						cols="30"
						rows="8"
					></textarea>
				</div>
				<input id="submit" type="submit" value="save" />
			</form>
		</div>
	);
};

export default BasicInfo;
