//class for youtube video
class YoutubeVideo {

    constructor(
        protected title:string,
        protected numberOfViews:number,
        protected numberOfLikes:number,
        protected numberOfDislikes:number,
        protected isWatched:boolean,
        protected numberOfComments:number,
        protected nameOfTheChannel:string,
        protected publishDate:Date,
        protected description:string,
        protected thumbnail:string
    ) {
    }

    //getter for title
    getTitle = ():string => {
        return this.title;
    }
    //setter for title
    setTitle = (title:string) => {
        this.title = title;
    }

    //getter for number of views
    getNumberOfViews = ():number => {
        return this.numberOfViews;
    }
    //setter for number of views
    setNumberOfViews = (views:number) => {
        this.numberOfViews = views;
    }

    //getter for number of likes
    getNumberOfLikes = ():number => {
        return this.numberOfLikes;
    }
    //setter for number of likes
    setNumberOfLikes = (likes:number) => {
        this.numberOfLikes = likes;
    }

    //getter for number of dislikes
    getNumberOfDislikes = ():number => {
        return this.numberOfDislikes;
    }
    //setter for number of dislikes
    setNumberOfDislikes = (dislikes:number) => {
        this.numberOfDislikes = dislikes;
    }

    //getter for watched
    getWatched = ():boolean => {
        return this.isWatched;
    }
    //setter for watched
    setWatched = (watched:boolean) => {
        this.isWatched = watched;
    }

    //getter for number of comments
    getNumberOfComments = ():number => {
        return this.numberOfComments;
    }
    //setter for number of comments
    setNumberOfComments = (numberOfComments:number) => {
        this.numberOfComments = numberOfComments;
    }

    //getter for name of the channel
    getNameOfTheChannel = ():string => {
        return this.nameOfTheChannel;
    }
    //setter for name of the channel
    setNameOfTheChannel = (channelName:string) => {
        this.nameOfTheChannel = channelName;
    }

    //getter for publish date
    getPublishDate = ():Date => {
        return this.publishDate;
    }
    //setter for publish date
    setPublishDate = (date:Date) => {
        this.publishDate = date;
    }

    //getter for description
    getDescription = ():string => {
        return this.description;
    }
    //setter for description
    setDescription = (description:string) => {
        this.description = description;
    }

    //getter for thumbnail
    getThumbnail = ():string => {
        return this.thumbnail;
    }
    //setter for thumbnail
    setThumbnail = (thumbnail:string) => {
        this.thumbnail = thumbnail;
    }

    //method for showing related videos
    getRelatedVideos = () => {
        console.log('Showing some related videos!');
    }

    //method to subscribe to the channel
    subscribe = () => {
        console.log('Great! You just subscribed to '+this.nameOfTheChannel+'.');
    }

    //method to add video to watch later list
    addToWatchLater = () => {
        console.log('Added to watch later.');
    }

}

console.log('----------------------');
console.log('Youtube Video');
console.log('----------------------');

let shapeOfYou = new YoutubeVideo('Shape of you - Ed Sheeran', 259355, 210951, 4000, true, 3000, 'Ed Sheeran', new Date(), 'This is my new video. Hope you like it.', 'some thumbnail url');

console.log(shapeOfYou.getTitle());
console.log(shapeOfYou.getPublishDate());
console.log('Number of view: '+shapeOfYou.getNumberOfViews());
console.log('Number of likes: '+shapeOfYou.getNumberOfLikes());
console.log('Channel name: '+shapeOfYou.getNameOfTheChannel());

//lets try to update the title of the video
shapeOfYou.setTitle('Shape of you by Ed Sheeran - Updated video!');
//logging the updated value of title
console.log(shapeOfYou.getTitle());

shapeOfYou.subscribe();
shapeOfYou.addToWatchLater();
shapeOfYou.getRelatedVideos();

console.log(shapeOfYou.getThumbnail());