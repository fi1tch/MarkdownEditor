<template>
  <div>
    <h1>Create An Item</h1>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Item Price:</label>
              <input type="text" class="form-control col-md-6" v-model="item.price">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add Item</button>
        </div>
    </form>
  </div>
</template>

<script>
    const marked = require("marked");
    const config = require('../../config/DB');
    export default {
        data(){
            return{
                item:{text: '# Good morning dear user!'}
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.item.text, { sanitize: true })
            }
        },
        methods: {
            addItem(){
                let uri = 'http://localhost:' + config.port + '/items/add';
                this.axios.post(uri, this.item).then((response) => {
                    this.$router.push({name: 'DisplayItem'})
                })
            }
        }
}
</script>

