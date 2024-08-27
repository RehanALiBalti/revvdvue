const awsmobile = {
  // Your AWS Amplify configuration settings
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: "eu-central-1_CcqX3oNN7",
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: "83qurrrrh1r49cch9hl2hii2e",
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      //  identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      //signUpVerificationMethod: 'link', // 'code' | 'link'
      loginWith: {
        // OPTIONAL - Hosted UI configuration
        authenticationFlowType: "USER_SRP_AUTH",
      },
    },
  },
  // Other configurations for services like API, storage, etc.
};

export default awsmobile;
