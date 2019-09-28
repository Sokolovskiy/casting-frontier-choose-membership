Vue.component('v-select', VueSelect.VueSelect);

// Sign Up App
var signUpApp = new Vue({
  el: '#sign-up-app',
  data: {
    membershipPlan: '2',
    status: true,
    showPass: false,
    showConfirmPass: false,
    password: '',
    confirmPassword: '',
    premiumPlusMonthly: '$7.99',
    premiumMonthly: '$6.33',
    regions: [
      'Alaska',
      'Black Sea',
      'Desert'
    ],
    gender: [
      'Male',
      'Female'
    ],
    ageRangeFrom: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
    ageRangeTo: [
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
    ],
    billing: true,
    currentStep: 1,
    membershipNavigation: 1,
    activeColor: 'red',
    fontSize: 30
  },
  methods: {
    goToStep: function(step){
      this.currentStep = step;
    }
  }
});

// // Vue Select Gender
// var selectGender = new Vue({
//   el: '#select-gender',
//   data: {
    
//   }
// });
