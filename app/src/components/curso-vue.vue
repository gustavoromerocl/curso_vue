<template>
  <div>
      <template v-if="error">
        <p>Error Form</p>
      </template>

      <form @submit.prevent="sentForm">
        <input v-model="$v.name.$model" type="text">
        <button>Enviar</button>
        <p v-if="!$v.name.minLength"> Nombre debe ser mayor a {{$v.name.$params.minLength.min}}</p>
      </form>
  </div>
</template>
 
<script>
import { required, minLength} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: "",
      error: false
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(5)
    }
  },

  watch: {
    name: function(old_value, new_value) {
      console.log("old " + old_value)
      console.log("new " + new_value)
    }
  },

  methods: {
    sentForm: function() {
      this.$v.$touch();

      if(this.$v.$invalid) {
        this.error = true;
      }
      else {
        alert("Formulario valido")
      }
    }
  } 

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
