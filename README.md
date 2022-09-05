# Server side rendered React app

1. A minimal express server
2. React frontend
3. Webpack bundling and dependency management
4. Support for Sass
5. On initial load the data is fetched on the server and sent to client to render 3 carousels of different movie categories
6. Carousel has 20 movie cards (links), haven't added support for pagination or infinite scrolling
7. When a movie card (link) is clicked, the server is called to fetch the data and send it to client
8. depending on the category you select, the film would be themed through the parent type through sass mixins and variables
9. Sorry the code is a little unorganized, it probably can benefit from a code review and I would appreciate it if I can briefly discuss this with someone to improve it
10. I haven't added tests but it's on my todo list
