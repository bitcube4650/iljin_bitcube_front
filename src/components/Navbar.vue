<template>
  <div class="header">
      <div class="logo">
          <a href="/"></a>
          <button class="btn-lnb">메뉴</button>
      </div>
      <div class="user-info">
          <span class="user-msg">[{{ this.$store.state.loginInfo.loginDeptNm }}] <span class="point-blue">{{ this.$store.state.loginInfo.userName }}</span> <span>({{ this.$store.state.loginInfo.loginId }})</span></span>
          <a href="/" class="ico ico-home" title=""></a>
          <a href="/quickSetting" class="ico ico-top02" title=""></a>
          <a href="#" class="ico ico-top03" title="메뉴얼" @click="menual()"></a>
          <a href="#" class="ico ico-logout" title="" @click="logout"></a>
      </div>

  </div>
  
</template>

<script>
import menual from '@/components/Menual.vue';
export default {
  name: 'Navbar',
  components: {
    menual
  },
  props: {
    msg: String,
  },
  computed:{
    classObj() {
      return {
        'navbar-item': true,
        'is-hoverable': true,
      }
    },
  },

  data() {
    return {
        authority:""
    };
  },

  mounted() {
    //resizeMenu();
    this.authority = this.$store.state.loginInfo.authorities[0].roleCd;

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const { target } = el.dataset;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  },

  methods: {
    //21.03.25 메뉴얼 다운로드
    menual(){
      this.$modal.open({
        component: menual,
      });
    },
    logout() {
      this.$swal({
        type: 'info',
        html: `그룹웨어 로그아웃이 선행되야 로그아웃이 됩니다.<br>아닌경우 다시 자동 로그인 처리됩니다.<br>로그아웃을 진행하시겠습니까?`,
        showCancelButton: true,
        confirmButtonText: '예',
        cancelButtonText: '아니오',
      }).then((result) => {
        if (result.value) {
          this.$http
              .get('/logout')
              .then(() => {
                this.$store.commit('logout');
                this.$cookie.delete('loginInfo');
                this.$router.push({path: `/`});
              })
              .catch((e) => {
                console.error(e);
              })
        }
      })
    },
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/common";

.spacer {
  width: 80px;
}

.navbar {
  background-color: $green;
  font-weight: bold;
}
</style>
