export interface ErrorsByInputName {
    [inputName: string]: string;
}
export interface ShowsErrors {
    errorMessage?: string;
    errorsByInputName?: ErrorsByInputName;
    successMessage?: string;
}
