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

	const handleChange = (e) => {
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
	return <div className={styles.container}>
	<h1>Contact Us</h1>
	<form onSubmit={handleSubmit}>
		<div className={styles.mb3}>
			<label htmlFor="name" className={styles.formlabel}>Enter your name</label>
			<input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name='name' aria-describedby="emailHelp" />
		</div>
		<div className={styles.mb3}>
			<label htmlFor="email" className={styles.formlabel}>Email address</label>
			<input className={styles.input} type="email" value={email} onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" />
			<div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
		</div>
		<div className={styles.mb3}>
			<label htmlFor="phone" className={styles.formlabel}>Password</label>
			<input className={styles.input} type="phone" value={phone} onChange={handleChange} name='phone' id="phone" required />
		</div>
		<div className={styles.mb3}>
			<label className={styles.formlabel} htmlFor="desc">Elaborate your concern</label>
			<textarea className={styles.input} value={desc} onChange={handleChange} name='desc' id="desc" />
		</div>
		<button type="submit" className={styles.btn}>Submit</button>
	</form>
</div>;
};

export default Contact;
