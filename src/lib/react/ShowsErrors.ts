export interface ErrorsByInputName {
  [inputName: string]: string;
}

export interface ShowsErrors {
  errorMessage?: string;
  errorsByInputName?: ErrorsByInputName;

  // If we can show errors, we can potentially also show a success message.
  successMessage?: string;
}
