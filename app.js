const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
    };
  },
  methods: {
    submitForm(){},
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName; 
    },
    add(num){
      this.counter = this.counter + num;
    },
    minus(num){
      this.counter = this.counter - num;
    },
  }
});

app.mount('#events');
