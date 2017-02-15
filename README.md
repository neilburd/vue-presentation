This is Vue.js!
====
### What can Vue do for you?
A lot, depending on your use case.

---


[Vue](https://vuejs.org/) is a progressive framework for building user interfaces. Think React and Angular had a baby, then Polymer came in to raise it. The core library is focused on the view layer, and is considered a MVVM, [Model View View Model](https://www.codeproject.com/Articles/100175/Model-View-ViewModel-MVVM-Explained), similiar to React, but Vue has two way data-binding like Angular.

___
### Declarative Rendering
>Vue.js uses a system that enables declarative data rendering to the DOM using a template syntax:


```html
<div id="app">
  {{ message }}
</div>
```
```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
Hello Vue!
```
This is only rendering a string of text to the screen. It's reading `"Hello World!"` from the `data:` in the javascript and rendering that in the `{{message}}`.

Vue also uses directives to provide special atrributes. These are like Angular directives example `ng-show`, `ng-hide`, but for Vue they start with `v-`, `v-bind`, `v-if`, `v-for` are some examples.

___
### User Interaction
To let users interact with your app, we can use the `v-on` directive to attach event listeners that invoke methods on our Vue instances.


```html
<div id="reverse">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```
```javascript
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
Hello Vue.js!
Reverse Message
```

Just like th `data:` key in the Vue object, `methods:` is used to store all the methods we may want to call. All DOM manipulations are handled by Vue, and the code you write is focused on the underlying logic.

The `v-model` directive is one way that two way data-binding is possible:


```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```
```javascript
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```
____

### Components
Like in Angular and React we can create custom Components in Vue. In Vue, a component is essentially a Vue instance with pre-defined options.

We use `prop` to pass data from the parent scope into children components, kind of like React.

```javascript
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```
Now we can pass the todo into each repeated component using `v-bind`.
```html
<div id="app-7">
  <ol>
    <!-- Now we provide each todo-item with the todo object    -->
    <!-- it's representing, so that its content can be dynamic -->
    <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
  </ol>
</div>
```
```javascript
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
```
This is just a taste of what Vue can do for you :)
