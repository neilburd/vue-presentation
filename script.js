var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Wolrd!'
  }
})



var reverseInput = new Vue({
  el: '#reverseInput',
  data: {
    message: 'Reverse Message on Click'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})
