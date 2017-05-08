angular.module('app', ['angularMoment'])
.component('myComponent', {
  templateUrl: '/template.html',
  controller() {
    this.$onInit = () => {
      this.displayed = false;
      this.sortBy = '-upvotes';
      this.commentsDisplayed = false;
      this.posts = [{
        imageUrl: 'https://static.pexels.com/photos/128954/pexels-photo-128954.jpeg',
        title: 'Day 26. I know Adrian drew that owl. I will break him',
        author: 'Zubes',
        body: 'That sonnamah bitch! It was him. I fucking know it!!!',
        timestamp: new Date(),
        upvotes: 0,
        comments: []
        },
        {
          imageUrl: 'https://static.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg',
          title: 'Time to start another break dance battle',
          author: 'Adrian',
          body: "Let's see if I still got that footwork!",
          timestamp: new Date(),
          upvotes: 0,
          comments: []
        },
        {
          imageUrl: 'https://static.pexels.com/photos/305250/pexels-photo-305250.jpeg',
          title: 'Yet another day at the San Marcos Skate Park',
          author: 'Jason',
          body: 'The life of a retired skatboarder.',
          timestamp: new Date(),
          upvotes: 0,
          comments: []
        }];
    };

    this.addComment = (ev, post) => {
      post.comments.push(ev.target.content.value);
      ev.target.content.value = '';
      console.log(post.comments);
    }

    this.toggleComments = (post) => {
      post.commentsDisplayed = !post.commentsDisplayed;
    }

    this.togglePost = () => {
      this.displayed = !this.displayed;
    };

    this.validate = (ev) => {
      if (this.newPostForm[ev.target.name].$invalid) {
        ev.target.classList.add('hayden');
        ev.target.setAttribute('placeholder', 'Required');
      } else {
        ev.target.classList.remove('hayden');
        ev.target.setAttribute('placeholder', '');
      }
    };

    this.createPost = () => {
      if (this.newPostForm.$valid) {
        this.post.upvotes = 0;
        this.post.timestamp = new Date();
        this.post.comments = new Array();
        this.posts.push(this.post);
        delete this.post;
      }
    };

    this.voteUp = (post) => {
      post.upvotes++;
    };

    this.voteDown = (post) => {
      if (post.upvotes > 0) post.upvotes--;
    };
  }
});
