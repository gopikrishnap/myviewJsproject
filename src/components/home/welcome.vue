<template>
  <div>
    <form>
      <div class="form-group col-sm-offset-2 col-sm-6" :class="{invalid:$v.email.$error}">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" @blur="$v.email.$touch()" v-model="email" />
      </div>
      <div class="form-group col-sm-offset-2 col-sm-6">
        <button type="button" class="btn btn-primary" @click="OnHobbys">Add Hobbs</button>
      </div>
      <div
        class="form-group col-sm-offset-2 col-sm-6"
        v-for="(hobbyInput,index) in hobbyInputs"
        :key="hobbyInput.id"
      >
        <label :for="hobbyInput.id">Hobby #{{index}}</label>
        <input type="text" class="form-control" :id="hobbyInput.id" v-model="hobbyInput.value" />
        <button @click="OnDeleteHobby(hobbyInput.id)" type="button">X</button>
      </div>
    </form>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      Hobby: "",
      hobbyInputs: []
    };
  },

  methods: {
    OnHobbys() {
      const newHobby = {
        id: Math.random() * Math.random() * 1000,
        value: ""
      };
      this.hobbyInputs.push(newHobby);
    },
    OnDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id);
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
};
</script>
<style  scoped>
.invalid label {
  color: red !important ;
}
</style>>

</style>