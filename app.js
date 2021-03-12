const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      emailId: "john@gmail.com",
      gender: "male",
      picture: "http://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async randomUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.emailId = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
