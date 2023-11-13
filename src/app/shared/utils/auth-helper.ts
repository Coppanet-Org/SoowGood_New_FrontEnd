
export const togglePasswordVisibility =(passwordFieldType:string) =>{
  return passwordFieldType === 'password' ? 'text' : 'password';
}