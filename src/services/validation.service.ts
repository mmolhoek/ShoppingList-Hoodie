/**
 * Created by simon on 16.02.16.
 */
export class ValidationService {

    static getValidatorErrorMessage(code:string) {
        let config = {
            "required": "Required",
            "invalidCreditCard": "Is invalid credit card number",
            "invalidEmailAddress": "Invalid email address",
            "invalidPassword": "Invalid password. Password must be at least 6 characters long, and contain a number."
        };
        return config[code];
    }




    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return {"invalidPassword": true};
        }
    }
}
