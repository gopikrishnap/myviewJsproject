<template>
  <div class="container header-sigup-cusome">
    <form class="form-horizontal" @submit.prevent="Signup">
      <div class="form-group" :class="{invalid: $v.UserSigup.email.$error}">
        <label for="email" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            id="email"
            @blur="$v.UserSigup.email.$touch()"
            v-model="UserSigup.email"
          />
          <p class="p-tag" v-if="!$v.UserSigup.email.email">Please enter valid email</p>
          <!-- <p class="p-tag" v-if="!$v.UserSigup.email.required">This field must not be empty</p> -->
        </div>
      </div>
      <div class="form-group" :class="{invalid: $v.UserSigup.age.$error}">
        <label for="age" class="col-sm-2 control-label">Your Age</label>
        <div class="col-sm-10">
          <input
            type="number"
            @blur="$v.UserSigup.age.$touch()"
            class="form-control"
            placeholder="Age"
            v-model="UserSigup.age"
          />
          <p
            class="p-tag"
            v-if="!$v.UserSigup.age.minvalu"
          >you have to be at least{{$v.UserSigup.age.$params.minvalu.min}} year old</p>
          <!-- <p v-if="!$v.UserSigup.age.required">This field must not be empty</p> -->
        </div>
      </div>
      <div class="form-group" :class="{invalid: $v.UserSigup.password.$error}">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            @blur="$v.UserSigup.password.$touch()"
            v-model="UserSigup.password"
          />
          <p
            class="p-tag"
            v-if="!$v.UserSigup.password.minLen"
          >password must to be at least{{$v.UserSigup.password.$params.minLen.min}} character</p>
        </div>
      </div>
      <div class="form-group" :class="{invalid: $v.UserSigup.confpassword.$error}">
        <label for="inputPasswo" class="col-sm-2 control-label">Confirm Password</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="confirm Password"
            @blur="$v.UserSigup.confpassword.$touch()"
            v-model="UserSigup.confpassword"
          />
          <p
            class="p-tag"
            v-if="!$v.UserSigup.confpassword.$invalid==false"
          >confirm password must to be same As password</p>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <label for="sel1">Select County (select one):</label>
          <select class="form-control" id="sel1" v-model="UserSigup.county">
            <option>India</option>
            <option>AUS</option>
            <option>NZ</option>
            <option>USA</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="inputhobbyy" class="col-sm-2 control-label">Hobby</label>
        <div class="col-sm-10">
          <textarea type="text" class="form-control" v-model="UserSigup.hobbys" />
        </div>
      </div>
      <div class="form-group" v-for="(input,k) in inputs" :key="k">
        <div class="col-sm-offset-2 col-sm-10">
          <input type="text" class="form-control" v-model="input.name" />
          <span>
            <i
              class="glyphicon glyphicon-remove"
              @click="remove(k)"
              v-show="k || ( !k && inputs.length > 1)"
            ></i>
            <i class="glyphicon glyphicon-plus" @click="add(k)" v-show="k == inputs.length-1"></i>
          </span>
        </div>
      </div>
      <div class="form-group" :class="{invalid: $v.UserSigup.termcondtion.$invalid}">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label for="termcondtion">
              <input
                type="checkbox"
                id="termcondtion"
                @change="$v.UserSigup.termcondtion.$touch()"
                v-model="UserSigup.termcondtion"
              >
              accept terms of {{UserSigup.county}}
            </label>
             <!-- <h1>{{$v.UserSigup.termcondtion}}</h1> -->
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-success">Sign up</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Axios from "axios";
import {
  required,
  email,
  numeric,
  minValue,
  minLength,
  sameAs,
  requiredUnless
} from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      UserSigup: {
        email: '',
        age: '',
        password: '',
        confpassword: '',
        hobbys: '',
        county: '',
        termcondtion: ''
      },
      inputs: [
        {
          name: ''
        }
      ]
    };
  },
  validations: {
    UserSigup: {
      email: {
        required,
        email
      },
      age: {
        required,
        num: numeric,
        minvalu: minValue(18)
      },
      password: {
        required,
        minLen: minLength(8)
      },
      confpassword: {
        sameAs: sameAs(vm => {
          return vm.password;
        })
      },
      termcondtion: {
        required: requiredUnless(vm=>{
          return vm.county==='USA'
        })
      }
    }
  },
  methods: {
    Signup() {
      //   this.$http
      //     .post(
      //       "https://myvueproject-da50e.firebaseio.com/data.json",
      //       this.UserSigup
      //     )
      //     .then(
      //       res => {
      //         console.log("succes resposne singup---->", JSON.stringify(res));
      //         alert("Succesfully updated into firebase DB");
      //       },
      //       err => {
      //         console.log("singuppost eror-----", err);
      //       }
      //     );
      Axios.post("/data.json", this.UserSigup)
        .then(res => {
          console.log("succes resposne singup---->", JSON.stringify(res));
          alert("Succesfully updated into firebase DB");
        })
        .catch(err => {
          console.log("singuppost eror-----", err);
        });
    },
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.header-sigup-cusome {
  margin-top: 79px !important;
}
.invalid label {
  color: red !important ;
}
.p-tag {
  color: red !important;
}
</style>