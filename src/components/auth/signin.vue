<template>
  <div class="container" style="margin-top:120px">
    <form class="col-sm-6 col-sm-offset-3">
      <div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" placeholder="Email" v-model="userData.email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="userData.password"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Age</label>
          <input type="number" class="form-control" placeholder="Mobile" v-model="userData.age" />
        </div>
        <div class="row">
          <div class="form-group">
            <label for="message">Message</label>
            <br />
            <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
            <textarea id="message" rows="5" class="form-control" v-model="userData.Message"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" v-model="sendEmail" /> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendEmail" />Send Infomail
            </label>
            <!-- Also show for single checkbox with true/ false -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <label for="male">
            <input type="radio" id="male" value="Male" v-model="gender" /> Male
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" v-model="gender" /> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="from-group">
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="userData.selectedPriority">
            <option
              v-for="Priority in Prioritys"
              v-bind:value="Priority"
              v-bind:key="Priority"
              :selected="Priority=='Low'"
            >{{Priority}}</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-default" @click.prevent="submitted">Submit</button>
    </form>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 style">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail:{{userData.email}}</p>
            <p>Password:{{userData.password}}</p>
            <p>Age:{{userData.age}}</p>
            <p style="white-space: pre">Message:{{userData.Message}}</p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li v-for="item in sendEmail" v-bind:value="item" v-bind:key="item">{{item }}</li>
            </ul>
            <p>Gender:{{gender}}</p>
            <p>Priority:{{userData.selectedPriority}}</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./switch";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: "",
        Message: "",
        selectedPriority: ""
      },
      sendEmail: [],
      gender: "Male",
      Prioritys: ["High", "Medium", "Low"],
      dataSwitch: true,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
      this.$http.post("url", this.userData).then(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  components: {
    "app-switch": Switch,
    // "app-filter": filter
  }
};
</script>

<style>
.style {
  margin-top: 52px !important;
}
</style>
