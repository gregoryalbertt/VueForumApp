<template>

<div class="col-full">
        <form @submit.prevent="save">
          <div class="form-group">
            <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"></textarea>
          </div>
          <div class="form-actions">
            <button class="btn-blue">Submit post</button>
          </div>
        </form>
      </div>

</template>

<script>
    export default {
        data(){
            return{
                text: ''
            }
        },
        methods: {
          save() {
            console.log('running');
            const postId = 'ggg' + Math.random()
            const post = {
              id: postId,
              publishedAt: Math.floor(Date.now()/1000),
              text: this.text,
              userId:"ALXhxjwgY9PinwNGHpfai6OWyDu2"
            }
            this.$emit('save', { post })

            this.text = ''
          }
        }
        
    }
</script>

<style scoped>

</style>