<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <a class="navbar-brand" href="#"><img src="/public/EuroEdilLogo.webp" alt="EuroEdilLogo"></a>
        </div>
        <div class="col-lg-3 col-md-6">
          <ul>
            <li>
              <a href="#">Chi Siamo</a>
            </li>
            <li>
              <a href="#">Servizi</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contatti</a>
            </li>
          </ul>
        </div>
        <nav class="navbar d-md-none">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/public/EuroEdilLogo.webp" alt="EuroEdilLogo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav">
                  <li class="nav-item"><a class="nav-link" href="#">Chi Siamo</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Servizi</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Team</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Contatti</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

img {

  width: 50px;
  margin: 10px 0;
}

header {
  
  background-color: red;
  .container-fluid {


    .row {

      display: flex;
      justify-content: space-around;
      align-items: center;
      .col-lg-3 {


        ul {

          list-style: none;
          display: flex;
          justify-content: space-around;

          li {

            
            a {

              text-decoration: none;
              color: black;
              font-weight: 500;
            }
          }
        }
      }

      .col-md {

        
      }

      .col-sm {

        
      }
    }
  }
}
</style>