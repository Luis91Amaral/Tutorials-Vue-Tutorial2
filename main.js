var shoppingList = new Vue({
  el: '#shopping-list',
  data: {
    header: 'shopping list app',
    newItem: '',
    items: [
      '10 party hats',
      '2 board games',
      '20 cups'
    ]
  },
  methods: {
    saveItem: function() {
      this.items.push(this.newItem)
      this.newItem = ''
    }
  }
})