// Enums for authentication errors
export enum AuthErrorCode {
  InvalidEmail = "auth/invalid-email",
  EmailAlreadyInUse = "auth/email-already-in-use",
  MissingPassword = "auth/missing-password",
  PasswordDoesNotMeetRequirements = "auth/password-does-not-meet-requirements",
  PasswordMismatch = "password-mismatch",
}

// Error messages corresponding to the authentication errors
export const errorMessages = {
  [AuthErrorCode.InvalidEmail]: "Email is invalid.",
  [AuthErrorCode.EmailAlreadyInUse]:
    "There already exists an account with this email.",
  [AuthErrorCode.MissingPassword]: "Password is missing.",
  [AuthErrorCode.PasswordDoesNotMeetRequirements]:
    "Password requirements not met.",
  [AuthErrorCode.PasswordMismatch]: (errorMessage: string) => errorMessage,
  default: "An error occurred while signing up. Please try again later.",
};
