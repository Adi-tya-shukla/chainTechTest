# chainTechTest


# Firebase Authentication & Firestore Integration in React

This project integrates Firebase Authentication and Firestore into a React application using modular service files for better maintainability.

## Features
- **Email/Password Authentication** (Login & Registration)
- **Google Authentication** (OAuth)
- **Firestore Integration** (Save & Retrieve User Data)
- **Environment Variables** for Firebase Configuration (Security Best Practices)

## Project Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo.git
cd your-project
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project and enable **Authentication** (Email/Password & Google Sign-In).
3. Enable **Firestore Database** and set up rules.
4. Copy Firebase config keys.

### 4. Start the Project
```sh
npm run dev
```

## Authentication Methods

### Sign In with Email & Password
```js
import { login } from "../authService";

const handleLogin = async () => {
  try {
    await login(email, password);
  } catch (error) {
    console.error(error);
  }
};
```

### Register New User
```js
import { register } from "../authService";

const handleRegister = async () => {
  try {
    await register(email, password);
  } catch (error) {
    console.error(error);
  }
};
```

### Google Sign-In
```js
import { loginWithGoogle } from "../authService";

const handleGoogleLogin = async () => {
  try {
    await loginWithGoogle();
  } catch (error) {
    console.error(error);
  }
};
```

### Logout
```js
import { logout } from "../authService";

const handleLogout = async () => {
  await logout();
};
```

## Firestore Methods

### Save User Data
```js
import { saveUserData } from "../firestoreService";

await saveUserData(user.uid, { name: "John Doe", email: user.email });
```

### Get User Data
```js
import { getUserData } from "../firestoreService";

const data = await getUserData(user.uid);
console.log(data);
```

## Deployment
To deploy the project, build it and use Firebase Hosting or Vercel:
```sh
npm run build
```

## License
This project is open-source under the [MIT License](LICENSE).

