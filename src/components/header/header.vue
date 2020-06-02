<template>
    
      <div>
             <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project Axios</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
        
          <ul class="nav navbar-nav navbar-right">
              <router-link to ="/singup" tag="li" active-class="active" exact ><a>Signup</a></router-link> 
               <router-link to ="/signin" tag="li" active-class="active" ><a>Sigin In</a></router-link>
              <router-link to ="/dashboard" tag="li" active-class="active" ><a>dashboard</a></router-link>
                <router-link to ="/Welcome" tag="li" active-class="active"  ><a>Welcome</a></router-link> 
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      </div>
</template>