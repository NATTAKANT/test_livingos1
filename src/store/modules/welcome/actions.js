export default {
    Login(context, data) {
      const LoginData = {
        id: context.rootGetters.userId,
        email: data.em,
        password: data.pass,
      };
  
      context.commit('Login', LoginData);
    }
  };