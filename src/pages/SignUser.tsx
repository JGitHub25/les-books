import { useState, ChangeEvent, FormEvent } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

export function SignUser() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      console.log("Form was submitted!", userCredentials);
      const authData = getAuth();
      console.log({ authData });
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        console.log(user);
        const { displayName, email, photoURL, emailVerified } = user;
        console.log({ displayName, email, photoURL, emailVerified });

        try {
          await updateProfile(user, {
            displayName: inputs.displayName,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          });
          const updatedUser = auth.currentUser;
          console.log({ updatedUser });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="displayName">Name</label> <br />
          <input
            value={inputs.displayName}
            onChange={handleInputChange}
            name="displayName"
            type="displayName"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            value={inputs.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            value={inputs.password}
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
