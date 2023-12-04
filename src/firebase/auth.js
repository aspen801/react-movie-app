import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./index";

const signUp = async (displayName, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      await updateProfile(userCredential.user, { displayName });
      console.log("User profile created successfully");
      console.log(userCredential.user);

      return userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(`Registration error (${errorCode}): ${errorMessage}`);
      throw error;
    });
};

const logIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Login successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(`Login error (${errorCode}): ${errorMessage}`);
      throw error;
    });
};

const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(`Login error (${errorCode}): ${errorMessage}`);
      throw error;
    });
};

const getCurrentUser = () => {};

export { signUp, logIn, logOut, getCurrentUser };
