//class for facebook profile
class FacebookProfile {
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected username:string,
        protected birthDay:number,
        protected birthMonth:number,
        protected birthYear:number,
        protected phoneNumber:number,
        protected email:string,
        protected numberOfFriends:number,
        protected work:string[],
        protected gender:string,
        protected languages:string[],
        protected currentCity:string,
        protected hometown:string
    ) {

    }

    //getter for first name
    getFirstName = ():string => {
        return this.firstName;
    }
    //setter for first name
    setFirstName = (firstName:string) => {
        this.firstName = firstName;
    }

    //getter for last name
    getLastName = ():string => {
        return this.lastName;
    }
    //setter for last name
    setLastName = (lastName:string) => {
        this.lastName = lastName;
    }

    //getter for user name
    getUsername = ():string => {
        return this.username;
    }
    //setter for user name
    setUsername = (username:string) => {
        this.username = username;
    }

    //getter for birth day
    getBirthDay = ():number => {
        return this.birthDay;
    }
    //setter for birth day
    setBirthDay = (birthDay:number) => {
        this.birthDay = birthDay;
    }

    //getter for birth month
    getBirthMonth = ():number => {
        return this.birthMonth;
    }
    //setter for birth month
    setBirthMonth = (birthMonth:number) => {
        this.birthMonth = birthMonth;
    }

    //getter for birth year
    getBirthYear = ():number => {
        return this.birthYear;
    }
    //setter for birth year
    setBirthYear = (birthYear:number) => {
        this.birthYear = birthYear;
    }

    //getter for phone number
    getPhoneNumber = ():number => {
        return this.phoneNumber;
    }
    //setter for phone number
    setPhoneNumber = (phoneNumber:number) => {
        this.phoneNumber = phoneNumber;
    }

    //getter for email
    getEmail = ():string => {
        return this.email;
    }
    //setter for email
    setEmail = (email:string) => {
        this.email = email;
    }

    //getter for number of friends
    getNumberOfFriends = ():number => {
        return this.numberOfFriends;
    }
    //setter for number of friends
    setNumberOfFriends = (numberOfFriends:number) => {
        this.numberOfFriends = numberOfFriends;
    }

    //getter for work
    getWork = ():string[] => {
        return this.work;
    }
    //setter for work
    setWork = (...work:string[]) => {
        let newArray = this.work.concat(work);
        this.work = newArray;
    }

    //getter for gender
    getGender = ():string => {
        return this.gender;
    }
    //setter for gender
    setGender = (gender:string) => {
        this.gender = gender;
    }

    //getter for languages
    getLanguages = ():string[] => {
        return this.languages;
    }
    //setter for languages
    setLanguages = (language:string) => {
        this.languages.push(language);
    }

    //getter for current city
    getCurrentCity = ():string => {
        return this.currentCity;
    }
    //setter for current city
    setCurrentCity = (city:string) => {
        this.currentCity = city;
    }

    //getter for hometown
    getHometown = ():string => {
        return this.hometown;
    }
    //setter for hometown
    setHometown = (hometown:string) => {
        this.hometown = hometown;
    }

    //method to get full name
    getFullName = ():string => {
        return this.firstName+' '+this.lastName;
    }

    //method to get age
    getAge = () => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        let todayMonth = todayDate.getMonth();
        let todayDay = todayDate.getDate();
        let age = todayYear - this.birthYear;

        if(todayMonth < (this.birthMonth - 1)) {
            age--;
        }
        if(((this.birthMonth - 1) == todayMonth) && (todayDay < this.birthDay)) {
            age--;
        }
        return age;
    }

    //add friend method
    addFriend = (friend:string) => {
        console.log(`Wow!! You just added ${friend} as your friend.`);
    }

    //remove friend method
    removeFriend = (friend:string) => {
        console.log(`Oops!!! You just removed ${friend} from your friend list, hope everthing's okay.`);
    }

}

console.log('----------------------');
console.log('Facebook profile!!!');
console.log('----------------------');

let isaKhan = new FacebookProfile('Isa', 'Khan', 'khan.isa001', 24, 9, 1996, 8077063697, 'khan.t.29@gmail.com', 150, ['The Catalyst- A Commerce Academy', 'Self-Employed', 'Theater actor', 'Indiaproperty', 'Boxbeat Technologies'], 'Male', ['English', 'Hindi', 'Urdu'], 'New Delhi', 'Rampur');
console.log(isaKhan.getFullName());
console.log(isaKhan.getAge());
console.log(isaKhan.getPhoneNumber());
isaKhan.addFriend('Ashwani');
//iterating over work array and logging it
let work = isaKhan.getWork();
for(let w of work) {
    console.log(w);
}
//inserting some new values into the work
isaKhan.setWork('Key Account Manager', 'Head of sales');
//iterating over work array and logging it
work = isaKhan.getWork();
for(let w of work) {
    console.log(w);
}
