export const getApiUrl = () => {
  if(!window) return;
  
  let apiUrl = window.apiUrl;

  if(!apiUrl) return;

  apiUrl = apiUrl + '/api'

  return apiUrl;
}

export const apiUrlList = {
  video: `${getApiUrl()}/video`
}