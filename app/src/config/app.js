const configApp = {
  base: process.env.NODE_ENV === "production" ? "/kontato" : "/",
  endpoint: {
    contacts: "http://localhost:8000/api"
  },
  name: "PDV2"
};

export default configApp;
