var s=class{static isAtLeast6Characters(e){let r=e.value;return r&&r.length<6?{isAtLeast6Characters:!0}:null}static includesSpecialCharacter(e){let r=e.value;return r&&!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-=/|]/.test(r)?{includesSpecialCharacter:!0}:null}static includesNumber(e){let r=e.value;return r&&!/.*[0-9]/.test(r)?{includesNumber:!0}:null}static matchValidator(e){let r=e.get("password")?.value,t=e.get("confirmPassword")?.value;if(!t?.length)return null;if(t.length<6)e.get("confirmPassword")?.setErrors({minLength:!0});else if(r!==t)e.get("confirmPassword")?.setErrors({mismatch:!0});else return null}static mobileNumberFormat(){return e=>/^[0-9]+$/.test(e.value)?null:{invalidFormat:!0}}static mobileNumberLength(){return e=>e.value&&e.value.length===11?null:{invalidLength:!0}}};export{s as a};