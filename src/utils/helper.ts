export const parseQueryString = (url: string)=> {
    const queryString = url.replace(/.*\?/, '');
  
    if (queryString === url || !queryString) {
      return null;
    }
  
    const urlParams = new URLSearchParams(queryString);
    const result:any = {};
  
    urlParams.forEach((val, key) => {
      if (result.hasOwnProperty(key)) {
        result[key] = [result[key], val];
      } else {
        result[key] = val;
      }
    });
  
    return result;
  }