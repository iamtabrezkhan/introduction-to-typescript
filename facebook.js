//class for facebook profile
var FacebookProfile = /** @class */ (function () {
    function FacebookProfile(firstName, lastName, username, birthDay, birthMonth, birthYear, phoneNumber, email, numberOfFriends, work, gender, languages, currentCity, hometown) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.numberOfFriends = numberOfFriends;
        this.work = work;
        this.gender = gender;
        this.languages = languages;
        this.currentCity = currentCity;
        this.hometown = hometown;
        //getter for first name
        this.getFirstName = function () {
            return _this.firstName;
        };
        //setter for first name
        this.setFirstName = function (firstName) {
            _this.firstName = firstName;
        };
        //getter for last name
        this.getLastName = function () {
            return _this.lastName;
        };
        //setter for last name
        this.setLastName = function (lastName) {
            _this.lastName = lastName;
        };
        //getter for user name
        this.getUsername = function () {
            return _this.username;
        };
        //setter for user name
        this.setUsername = function (username) {
            _this.username = username;
        };
        //getter for birth day
        this.getBirthDay = function () {
            return _this.birthDay;
        };
        //setter for birth day
        this.setBirthDay = function (birthDay) {
            _this.birthDay = birthDay;
        };
        //getter for birth month
        this.getBirthMonth = function () {
            return _this.birthMonth;
        };
        //setter for birth month
        this.setBirthMonth = function (birthMonth) {
            _this.birthMonth = birthMonth;
        };
        //getter for birth year
        this.getBirthYear = function () {
            return _this.birthYear;
        };
        //setter for birth year
        this.setBirthYear = function (birthYear) {
            _this.birthYear = birthYear;
        };
        //getter for phone number
        this.getPhoneNumber = function () {
            return _this.phoneNumber;
        };
        //setter for phone number
        this.setPhoneNumber = function (phoneNumber) {
            _this.phoneNumber = phoneNumber;
        };
        //getter for email
        this.getEmail = function () {
            return _this.email;
        };
        //setter for email
        this.setEmail = function (email) {
            _this.email = email;
        };
        //getter for number of friends
        this.getNumberOfFriends = function () {
            return _this.numberOfFriends;
        };
        //setter for number of friends
        this.setNumberOfFriends = function (numberOfFriends) {
            _this.numberOfFriends = numberOfFriends;
        };
        //getter for work
        this.getWork = function () {
            return _this.work;
        };
        //setter for work
        this.setWork = function () {
            var work = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                work[_i] = arguments[_i];
            }
            var newArray = _this.work.concat(work);
            _this.work = newArray;
        };
        //getter for gender
        this.getGender = function () {
            return _this.gender;
        };
        //setter for gender
        this.setGender = function (gender) {
            _this.gender = gender;
        };
        //getter for languages
        this.getLanguages = function () {
            return _this.languages;
        };
        //setter for languages
        this.setLanguages = function (language) {
            _this.languages.push(language);
        };
        //getter for current city
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        //setter for current city
        this.setCurrentCity = function (city) {
            _this.currentCity = city;
        };
        //getter for hometown
        this.getHometown = function () {
            return _this.hometown;
        };
        //setter for hometown
        this.setHometown = function (hometown) {
            _this.hometown = hometown;
        };
        //method to get full name
        this.getFullName = function () {
            return _this.firstName + ' ' + _this.lastName;
        };
        //method to get age
        this.getAge = function () {
            var todayDate = new Date();
            var todayYear = todayDate.getFullYear();
            var todayMonth = todayDate.getMonth();
            var todayDay = todayDate.getDate();
            var age = todayYear - _this.birthYear;
            if (todayMonth < (_this.birthMonth - 1)) {
                age--;
            }
            if (((_this.birthMonth - 1) == todayMonth) && (todayDay < _this.birthDay)) {
                age--;
            }
            return age;
        };
    }
    return FacebookProfile;
}());
console.log('----------------------');
console.log('Facebook profile!!!');
console.log('----------------------');
var isaKhan = new FacebookProfile('Isa', 'Khan', 'khan.isa001', 24, 9, 1996, 8077063697, 'khan.t.29@gmail.com', 150, ['The Catalyst- A Commerce Academy', 'Self-Employed', 'Theater actor', 'Indiaproperty', 'Boxbeat Technologies'], 'Male', ['English', 'Hindi', 'Urdu'], 'New Delhi', 'Rampur');
console.log(isaKhan.getFullName());
console.log(isaKhan.getAge());
console.log(isaKhan.getPhoneNumber());
//iterating over work array and logging it
var work = isaKhan.getWork();
for (var _i = 0, work_1 = work; _i < work_1.length; _i++) {
    var w = work_1[_i];
    console.log(w);
}
//inserting some new values into the work
isaKhan.setWork('Key Account Manager', 'Head of sales');
//iterating over work array and logging it
work = isaKhan.getWork();
for (var _a = 0, work_2 = work; _a < work_2.length; _a++) {
    var w = work_2[_a];
    console.log(w);
}
