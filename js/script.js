var app = new Vue({
    el: '#app',
    data: {
        users: [],
    },
    methods: {
    
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => this.users=json);
    },
  })