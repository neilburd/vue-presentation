var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})
