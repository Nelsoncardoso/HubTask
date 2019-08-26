const session = {
  set: data => {
    if (data['access-token'] !== '') {
      localStorage.setItem('acess-token', data['access-token']);
      localStorage.setItem('uid', data.uid);
      localStorage.setItem('client', data.client);
    }
  },
  get: () => {
    return {
      'access-token': localStorage.getItem('acess-token'),
      uid: localStorage.getItem('uid'),
      client: localStorage.getItem('client'),
    };
  },
};
export default session;
