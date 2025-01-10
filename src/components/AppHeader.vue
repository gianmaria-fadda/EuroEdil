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
        <nav class="navbar navbar-expand-md d-md-none">
          <div class="container-fluid">
            <a class="navbar-brand" href="./AppHeader.vue">
              <img src="/public/EuroEdilLogo.webp" alt="EuroEdilLogo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                </button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Chi Siamo</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Servizi</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contatti</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <nav class="navbar navbar-expand-md d-none d-md-flex">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="/public/EuroEdilLogo.webp" alt="EuroEdilLogo" />
            </a>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <router-link class="nav-link" to="/chi-siamo">Chi Siamo</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/servizi">Servizi</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/team">Team</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contatti">Contatti</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: lightgray;

  img {
    width: 50px;
    margin: 10px 0;
  }

  .navbar {

    &-nav {
      li {
        a {
          text-decoration: none;
          color: black;
          font-weight: 500;
          &:hover {
            opacity: .5;
            transition: ease-in-out .25s;
          }
        }
      }
    }
  }
}
</style>
