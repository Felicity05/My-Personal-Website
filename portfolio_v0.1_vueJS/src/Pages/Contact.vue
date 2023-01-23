Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Felicity05 
Your GitHub academic discount coupon has expired
If you’re still eligible, you may re-apply.
If you’re no longer eligible, you may either update your payment information, or downgrade your account.
If you have any questions, please contact GitHub Education.

Felicity05
/
My-Personal-Website
1
0
0
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
My-Personal-Website/portfolio/src/components/Contact.vue
@Felicity05
Felicity05 Initial commit
Latest commit 6f6351a on Aug 23, 2020
 History
 1 contributor
85 lines (82 sloc)  1.9 KB
  
<template>
  <div class="contact">
    <h2
      class="diplay-4 touch aos-init aos-animate"
      data-aos="fade"
      data-aos-duration="1000"
    >Let's get in Touch!</h2>
    <p
      class="lead contact-message aos-init aos-animate"
      data-aos="zoom-in-up"
      data-aos-duration="1000">
      I’m very friendly and always open for new oportunities to learn and apply my knowledge.
      Feel free to drop me a message for bussiness inquieries or just to say hi... :)
    </p>
    <div class="row btn-contact aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
      <button type="button" class="btn btn-outline-success">
        <a href="mailto:aalva456@fiu.edu?subject=Hi, how are you?">Contact me!</a>
      </button>
    </div>
    <div class="top aos-init aos-animate" data-aos="fade" data-aos-duration="1000">
      <a @click="scrollTo('home')" class="float">
        <i class="material-icons my-float">home</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    scrollTo(element) {
      const el = document.querySelector("#" + element);
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.touch {
  text-align: left;
  padding-bottom: 5em;
  padding-top: 0.7em;
}
.contact-message {
  margin: 1em 13em auto;
  text-align: center;
  margin-bottom: 5em;
}
.btn-outline-success {
  color: #5cdb95;
  border: 0.1em solid #5cdb95;
  margin: 0 auto;
  margin-bottom: 13em;
}
.btn-outline-success::hover {
  color: grey;
  background-color: transparent;
}
.top {
  cursor: pointer;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 80px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 5px #3c4a59;
}
.my-float {
    margin-top: 12px;
    font-size: 34px;
}
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete