<template>
  <div>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- <a class="navbar-brand" href="#">Project Axios</a> -->
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
             <router-link to="/basice" tag="li" active-class="active" exact>
              <a>Basics</a>
            </router-link>
            <router-link to="/Directives" tag="li" active-class="active" >
              <a>Directives</a>
            </router-link>
             <router-link to="/instance" tag="li" active-class="active" >
              <a>Instance concept</a>
            </router-link>
             <router-link to="/filter" tag="li" active-class="active" >
              <a>Filter</a>
            </router-link>
            <router-link to="/vuex" tag="li" active-class="active" >
              <a>Vuex concept</a>
            </router-link>
            <router-link to="/singup" tag="li" active-class="active">
              <a>Signup</a>
            </router-link>
            <router-link to="/signin" tag="li" active-class="active">
              <a>Forms</a>
            </router-link>
            <router-link to="/dashboard" tag="li" active-class="active">
              <a>Created(Get)</a>
            </router-link>
            <router-link to="/Welcome" tag="li" active-class="active">
              <a>Add-inputs</a>
            </router-link>
            <router-link to="/User" tag="li" active-class="active">
              <a>User (Child Routing )</a>
            </router-link>
             <router-link to="/Advanced" tag="li" active-class="active">
              <a>Advanced</a>
            </router-link>
             <router-link to="/advanceDirectives" tag="li" active-class="active">
              <a>A-Directives</a>
            </router-link>
             <router-link to="/Wonder" tag="li" active-class="active">
              <a>Wonder fulQuotes</a>
            </router-link>
          </ul>
          
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
  </div>
</template>