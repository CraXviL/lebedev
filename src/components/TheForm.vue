<template>

  <form @input="inputForm">

  <div>
    <b-form-group
        id="name"
        label="Your name"
        label-for="name"
        :invalid-feedback="invalidNameFeedback"
        :valid-feedback="validNameFeedback"
        :state="stateName"
    >
      <b-form-input id="name" :state="stateName" v-model.trim="name"></b-form-input>
    </b-form-group>

    <b-form-group
        id="email"
        label="E-mail"
        label-for="email"
        :invalid-feedback="invalidEmailFeedback"
        :valid-feedback="validEmailFeedback"
        :state="stateEmail"
    >
      <b-form-input id="email" :state="stateEmail" v-model.trim="email"></b-form-input>
    </b-form-group>

    <div id="selectCountry">
      <a href="#" class="select">Your country</a>
      <ul class="drop">
        <li value="Russia">Russia</li>
        <li value="Indonesia">Indonesia</li>
        <li value="England">England</li>
        <li value="USA">USA</li>
        <li value="My room">My room</li>
      </ul>
      <input type="hidden" v-model="selectedCountry">
    </div>

    <div id="selectAge">
      <a href="#" class="select">Your age</a>
      <ul class="drop">
        <li value="24">24</li>
        <li value="25">25</li>
        <li value="26">26</li>
        <li value="27">27</li>
        <li value="28">28</li>
      </ul>
      <input type="hidden" v-model="selectedAge">
    </div>

    <div class="label">Gender:</div>
    <div class="radioblock" id="gender" @click="radioClick">
      <div class="radio" id="male">Male</div>
      <div class="radio" id="female">Female</div>
      <input type="hidden" v-model="selectedGender">
    </div>

    <b-form-group
      id="password"
      label="Your password"
      label-for="password"
      :invalid-feedback="invalidPasswordFeedback"
      :valid-feedback="validPasswordFeedback"
      :state="statePassword"
    >
      <b-form-input id="password" type="password" :state="statePassword" v-model.trim="password"></b-form-input>
    </b-form-group>

    <b-form-group
      id="confirmPassword"
      label=" "
      label-for="confirmPassword"
      :invalid-feedback="invalidConfirmPasswordFeedback"
      :valid-feedback="validConfirmPasswordFeedback"
      :state="stateConfirmPassword"
    >
      <b-form-input id="confirmPassword" type="password" :state="stateConfirmPassword" v-model.trim="confirmPassword"></b-form-input>
    </b-form-group>

    <div id="validation" class="gray">
      <img src="../img/main/flag-gray.svg" class="float-left" alt="flag-gray.svg">
      <p>Не менее 6 символов</p>
      <img src="../img/main/flag-gray.svg" class="float-left" alt="flag-gray.svg">
      <p>Заглавные и строчные буквы</p>
      <img src="../img/main/flag-gray.svg" class="float-left" alt="flag-gray.svg">
      <p>Цифры и специальные знаки</p>
    </div>

  </div>

  <button>Sign up</button>

  </form>

</template>

<script>

  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        selectedCountry: '',
        selectedAge: '',
        selectedGender: '',
        inputs: { name: false, email: false, password: false, confirmPassword: false, }
      };
    },
    computed: {
      stateName() {
        if (this.inputs.name === true)
          return /^[a-zA-Z][a-zA-Z0-9-_\.]{0,20}$/.test(this.name);
      },
      invalidNameFeedback() {
        return 'Only letters pliz';
      },
      validNameFeedback() {
        return this.stateName === true ? 'Correct name' : '';
      },
      stateEmail() {
        if (this.inputs.email === true)
          return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.email);
      },
      invalidEmailFeedback() {
        return 'Incorrect address';
      },
      validEmailFeedback() {
        return this.stateEmail === true ? 'Correct address' : '';
      },
      statePassword() {
        if (this.inputs.password === true)
          return /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(this.password);
      },
      invalidPasswordFeedback() {
        return 'Simple pass';
      },
      validPasswordFeedback() {
        return this.statePassword === true ? 'Good pass' : '';
      },
      stateConfirmPassword() {
        if (this.inputs.confirmPassword === true)
          return this.password === this.confirmPassword;
      },
      invalidConfirmPasswordFeedback() {
        return 'Passwords not equal';
      },
      validConfirmPasswordFeedback() {
        return this.stateConfirmPassword === true ? 'OK' : '';
      }
    },
    methods: {
      inputForm(e) {
        this.inputs[e.target.id] = true;
      },
      radioClick(e) {
        let valueRadio = $(e.target).attr('id');
        $(e.target).parent().find('.radio').removeClass('active');
        $(e.target).addClass('active');
        this.selectedGender = valueRadio;
      }
    }
  };

</script>

<style lang="sass">
  
  @import '../style/vars'

  form
    width: 520px
    margin-top: -15px
    &>div
      height: 355px
      columns: 2

    .form-group, .col-form-label
      margin: 0
      padding: 0

    input[type="text"], input[type="password"]
      width: 250px
      height: 25px
      padding: 0
      font-size: 14px
      color: $color-primary-gray-dark
      background: #F8F8F8
      border: 0
      border-radius: 0
      border-bottom: 1px solid #0088FF

    .col-form-label
      font-size: 10px
      color: $color-primary-gray-light

    .form-control
      background-image: none !important

    input.form-control+div
      line-height: 14px
      font-size: 10px
      &.invalid-feedback
        color: $color-primary-red
      &.valid-feedback
        color: $color-primary-green

    .select
      margin-top: 10px

    #selectAge
      margin-top: 25px
    
    a.select
      padding: 0
      background: #F8F8F8 url('../img/main/dropdown.svg') no-repeat right 10px center

    .drop
      li
        width: 250px

    .radioblock
      width: 170px
      display: flex
      justify-content: space-between
    .label
      margin-top: 28px
      font-size: 12px
      opacity: .5

    .radio
      display: flex
      align-items: center
      cursor: pointer
      &:before
        height: 24px
        width: 24px
        margin-right: 8px
        content: ''
        border: 1px solid blue
        border-radius: 50%
      &.active:before
        background: url('../img/main/radio.svg')  no-repeat  center

    #validation
      padding: 0px 0 150px 0
      p
        padding-bottom: 5px
        line-height: 12px
        font-size: 10px

    button
      width: 100%
      height: 48px
      font-size: 20px


</style>