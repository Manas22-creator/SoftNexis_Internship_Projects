/* Validate Task Input */

export function validateTaskInput(text){

  const errorMessage =
    document.getElementById('error-message');

  errorMessage.textContent = '';

  if(text.trim() === ''){

    errorMessage.textContent =
      'Task cannot be empty';

    return false;
  }

  if(text.length > 100){

    errorMessage.textContent =
      'Maximum 100 characters allowed';

    return false;
  }

  return true;

}