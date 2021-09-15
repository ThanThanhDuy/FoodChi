const loginApi = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      let account
      if (
        email === 'duy@duy.com' &&
        password ===
          '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
      ) {
        account = {
          payload: {
            user: {
              _id: '123124654645646546',
              name: 'duy',
              role: 1,
              status: 1
            },
            auth: {
              token: 'klajshdkfljahsdnzmvnajhvpqawnvmnm,nakjhsjahslkadfj',
              tokenExpiresIn: 1800000,
              refresh: 'asjkdhflakjshdflkjahsdfkjahskdfasdkf',
              refreshExpiresIn: 691200000
            }
          }
        }
      }
      resolve(account)
    }, 2000)
  })
}
export default {
  loginApi
}
