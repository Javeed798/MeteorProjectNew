Router.configure({
	layoutTemplate: 'main'
});

Router.map(function(){
	// Posts Route
	this.route('posts',{
		path: '/',
		template: 'posts'
	});

	// About Route
	this.route('about');

	// profile Route
	this.route('profile');

});