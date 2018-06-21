//class for youtube video
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(title, numberOfViews, numberOfLikes, numberOfDislikes, isWatched, numberOfComments, nameOfTheChannel, publishDate, description, thumbnail) {
        var _this = this;
        this.title = title;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDislikes = numberOfDislikes;
        this.isWatched = isWatched;
        this.numberOfComments = numberOfComments;
        this.nameOfTheChannel = nameOfTheChannel;
        this.publishDate = publishDate;
        this.description = description;
        this.thumbnail = thumbnail;
        //getter for title
        this.getTitle = function () {
            return _this.title;
        };
        //setter for title
        this.setTitle = function (title) {
            _this.title = title;
        };
        //getter for number of views
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        //setter for number of views
        this.setNumberOfViews = function (views) {
            _this.numberOfViews = views;
        };
        //getter for number of likes
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        //setter for number of likes
        this.setNumberOfLikes = function (likes) {
            _this.numberOfLikes = likes;
        };
        //getter for number of dislikes
        this.getNumberOfDislikes = function () {
            return _this.numberOfDislikes;
        };
        //setter for number of dislikes
        this.setNumberOfDislikes = function (dislikes) {
            _this.numberOfDislikes = dislikes;
        };
        //getter for watched
        this.getWatched = function () {
            return _this.isWatched;
        };
        //setter for watched
        this.setWatched = function (watched) {
            _this.isWatched = watched;
        };
        //getter for number of comments
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        //setter for number of comments
        this.setNumberOfComments = function (numberOfComments) {
            _this.numberOfComments = numberOfComments;
        };
        //getter for name of the channel
        this.getNameOfTheChannel = function () {
            return _this.nameOfTheChannel;
        };
        //setter for name of the channel
        this.setNameOfTheChannel = function (channelName) {
            _this.nameOfTheChannel = channelName;
        };
        //getter for publish date
        this.getPublishDate = function () {
            return _this.publishDate;
        };
        //setter for publish date
        this.setPublishDate = function (date) {
            _this.publishDate = date;
        };
        //getter for description
        this.getDescription = function () {
            return _this.description;
        };
        //setter for description
        this.setDescription = function (description) {
            _this.description = description;
        };
        //getter for thumbnail
        this.getThumbnail = function () {
            return _this.thumbnail;
        };
        //setter for thumbnail
        this.setThumbnail = function (thumbnail) {
            _this.thumbnail = thumbnail;
        };
        //method for showing related videos
        this.getRelatedVideos = function () {
            console.log('Showing some related videos!');
        };
        //method to subscribe to the channel
        this.subscribe = function () {
            console.log('Great! You just subscribed to ' + _this.nameOfTheChannel + '.');
        };
        //method to add video to watch later list
        this.addToWatchLater = function () {
            console.log('Added to watch later.');
        };
    }
    return YoutubeVideo;
}());
console.log('----------------------');
console.log('Youtube Video');
console.log('----------------------');
var shapeOfYou = new YoutubeVideo('Shape of you - Ed Sheeran', 259355, 210951, 4000, true, 3000, 'Ed Sheeran', new Date(), 'This is my new video. Hope you like it.', 'some thumbnail url');
console.log(shapeOfYou.getTitle());
console.log(shapeOfYou.getPublishDate());
console.log('Number of view: ' + shapeOfYou.getNumberOfViews());
console.log('Number of likes: ' + shapeOfYou.getNumberOfLikes());
console.log('Channel name: ' + shapeOfYou.getNameOfTheChannel());
//lets try to update the title of the video
shapeOfYou.setTitle('Shape of you by Ed Sheeran - Updated video!');
//logging the updated value of title
console.log(shapeOfYou.getTitle());
shapeOfYou.subscribe();
shapeOfYou.addToWatchLater();
shapeOfYou.getRelatedVideos();
console.log(shapeOfYou.getThumbnail());
