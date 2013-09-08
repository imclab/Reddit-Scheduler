/***

  Reddit Scheduler Chrome Extension UI

  Schedules your posts on Reddit. 

  Requires Gnarwhal.js, a simple Javascript Reddit API wrapper.

  by Tyler Freeman
  http://odbol.com
***/


var notificationIcon = 'data:image/png;base64,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',

  notificationTemplate = {
    type: "basic",
    title: "Posted to Reddit!",
    message: "Derp",
    iconUrl: notificationIcon
  },

  notificationIdx = 0,

  creationCallback = function (notificationId) {
    console.log('Created notification ' + notificationId);
  },


  showMessage = function (msg, url) {
      $('#messages').append('<li>' + msg + '<a href="' + url + '">' + url + '</a></li>');

      if (chrome && chrome.notifications) {
        notificationTemplate.message = msg + url;

        chrome.notifications.create("RSnotification" + notificationIdx++, notificationTemplate, creationCallback);
      }
  },

  scheduler = new RedditScheduler(),

  onSubmitFinish = function (post) {
    var url = '', 
        msg;  

    if (post.get) { // it is the post model object! success!
      url = post.get('redditUrl') || '';
      msg = 'Successfully posted to ';
    }
    else {
      msg = 'Failed to post.';
    }

    showMessage(msg, url);
  },

  onSubmit = function () {
    scheduler.checkUserName();

    var postOpts = {
          subreddit : $('input[name=subreddit]').val(),
          title : $('input[name=title]').val(),
          url : $('input[name=url]').val(),
          text : $('textarea[name=text]').val()
        },
        postTime = $('#postTime option:selected').val();

    scheduler.postDelayed(postTime, new RedditPost(postOpts))
      .always(onSubmitFinish); 

    // clear all fields
    $('input, textarea').val('');

    return false;
  },


  /*** VIEWS ***/
  SubmittedPosts = Backbone.View.extend({
          getPosts : function () {
            return this.collection.submitted();
          },

          //model: App,

          events: {
            'click .delete': 'onClickDelete'
          },

          initialize : function () {
            _.bindAll(this, 'render', 'getPosts'); // fixes loss of context for 'this' within methods

            this.collection.on('add', this.render, this);
            this.collection.on('remove', this.render, this);
            this.collection.on('reset', this.render, this);
            this.collection.on('change:isPosted', this.render);
          },

          // this would be nice, but chrome doesn't allow eval() so underscore's templating is worthless
          //template: _.template('<li><%= postDate %>: <a href="<%- redditUrl %>"><%- title %></a></li>'),
          template: function () {
            if (!this._template) {
              this._template = Mustache.compile($('#templatePost').text());
            }

            return this._template.apply(this, arguments); 
          },

          render: function() {
            var self = this,
                html = '';

            this.$el.empty();

            this.getPosts().forEach(function (post, idx, arr) {
              var postDate = post.attributes.postDate,
                  html = self.template(_.extend({
                      prettyDate : postDate && postDate.calendar() || ''
                    }, 
                    post.attributes));

                $(html).appendTo(self.$el)
                  .data('post', post);
            });
            
            return this;
          },

          onClickDelete : function (ev) {
            var post = $(ev.target).parents('.post').data('post');

            if (post) {
              if (confirm('Really delete ' + post.get('title') + "?")) {
                post.destroy();
              }
            }
          }
  }),

  PendingPosts = SubmittedPosts.extend({
        getPosts : function () {
          return this.collection.pending();
        }
  });


document.addEventListener('DOMContentLoaded', function () {
  var postTimes = scheduler.getPostTimes(),
      allPosts = scheduler.getAllPosts(),

      submittedView = new SubmittedPosts({
        collection : allPosts,
        el : $('#submitted')
      }),

      pendingView = new PendingPosts({
        collection : allPosts,
        el : $('#pending')
      });

  $('#postTime').empty();
  postTimes.forEach(function (el, index, array) {
    $('#postTime').append('<option value="' + el + '">' + el + '</option>');
  });



  $('.submit').click(onSubmit);

  $('.logout').click(function () {
    scheduler.logOut();

    return false;
  });


  // load everything from local storage!
  allPosts.fetch();
});
