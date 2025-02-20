// Improved Firebase Authentication with comprehensive error handling

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('Successfully signed in:', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Firebase Authentication Error:', errorCode, errorMessage);
    // Handle specific errors
    switch (errorCode) {
      case 'auth/invalid-email':
        // Handle invalid email error
        break;
      case 'auth/user-disabled':
        // Handle user disabled error
        break;
      case 'auth/user-not-found':
        // Handle user not found error
        break;
      case 'auth/wrong-password':
        // Handle wrong password error
        break;
      case 'auth/network-request-failed':
        // Handle network error
        break;
      default:
        // Handle other errors
        break;
    }
  });