
/**
 * Prepares the success response.
 */
function success(data) {
    return {
      status: 'Success',
      errorCode: 0,
      data
    };
  }
function error(err){
    console.log(err);
}  
  /**
   * Prepares the failure response.
   */
function failure(error) {
    // bugsnag.notify(new Error(error));
    if (error === 29) {
      return {
        status: 'Failure',
        errorCode: typeof error === 'number' ? error : 1,
        data: 'Email is duplicate'
      };
    } else if (error === 30) {
      return {
        status: 'Failure',
        errorCode: typeof error === 'number' ? error : 1,
        data: 'MobilePhone is duplicate'
      };
    } else if (error === 31) {
      return {
        status: 'Failure',
        errorCode: typeof error === 'number' ? error : 1,
        data: 'Email or MobilePhone is duplicate'
      };
    } else if (error === 32) {
      return {
        status: 'Failure',
        errorCode: typeof error === 'number' ? error : 1,
        data: 'Commercial Register is duplicate'
      };
    } else if (error === 115) {
      return {
        status: 'Failure',
        errorCode: typeof error === 'number' ? error : 1,
        data: 'Sku number already exists.'
      };
    }
  
    return {
      status: 'Failure',
      errorCode: typeof error === 'number' ? error : 1,
      data: error
    };
  }
  
  /**
   * Prepares the failure response for a validation error.
   */
  function validationFailure(error) {
    return {
      status: 'Failure',
      errorCode: -1,
      data: error
    };
  }
  
  export default {
    success,
    failure,
    validationFailure
  };
  