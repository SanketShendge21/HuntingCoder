import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [desc, setDesc] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(phone, desc, name, email);
		const data = { phone, name, email, desc };

		fetch("http://localhost:3000/api/postcontact", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.text())
			.then((data) => {
				console.log("Success:", data);
				alert("Thanks for contacting us");
				setPhone("");
				setName("");
				setDesc("");
				setEmail("");
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	const handleOnChange = (e) => {
		if (e.target.name === "name") {
			setName(e.target.value);
		} else if (e.target.name === "phone") {
			setPhone(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "desc") {
			setDesc(e.target.value);
		}
	};
	return (
		<>
			<div>This is contact page</div>
			<div className={styles.container}>
				<h1>Contact Us</h1>
				<form onSubmit={handleSubmit}>
					<div className={styles.mb3}>
						<label htmlFor="exampleInputName" className="form-label">
							Name
						</label>
						<input
							type="text"
							className={styles.formlabel}
							value={name}
							onChange={handleOnChange}
							id="name"
							name="name"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className={styles.mb3}>
						<label htmlFor="exampleInputEmail1" className="form-label">
							Email address
						</label>
						<input
							type="email"
							className={styles.formlabel}
							value={email}
							onChange={handleOnChange}
							id="email"
							name="email"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className={styles.mb3}>
						<label htmlFor="exampleInputPhone" className="form-label">
							Phone
						</label>
						<input
							type="text"
							className={styles.formlabel}
							value={phone}
							onChange={handleOnChange}
							id="phone"
							name="phone"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className={styles.mb3}>
						<label htmlFor="exampleFormControlTextarea1" className="form-label">
							Elaborate your concern
						</label>
						<textarea
							className={styles.formlabel}
							value={desc}
							onChange={handleOnChange}
							id="desc"
							name="desc"
							rows="3"
							placeholder="Write your concern here"
						>
						</textarea>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
