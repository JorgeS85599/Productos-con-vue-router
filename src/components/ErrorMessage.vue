<!-- Comment 
<template>
  <div
    class="col-sm-12 alert alert-danger alert-dismissible fade show"
    v-for="(message, key) in messages"
    :key="key"
    :message="message"
  >
    <span><strong>ATENCIÓN: </strong>{{ message }}</span>
    <button type="button" class="btn-close" @click="delMessage(index)"></button>
  </div>
</template>

<script>
import store from '../service/store.js'

export default {
    name: 'error-message',
    data() {
        return {
            messages=[]
        }
    },
    methods: {
        delMessage(index) {
            this.messages.splice(index,1)
        }
    }
}
</script>
-->
