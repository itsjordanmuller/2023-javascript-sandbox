# JavaScript Sandbox

## [12. Web Browser APIs](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis)

<a href="https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis"><img src="https://custom-icon-badges.demolab.com/badge/Web%20Browser%20APIs-b2e8ff.svg?logo=bookmark&logoSource=feather&style=for-the-badge&logoColor=000000" width="100%"></a>

### [A. Geolocation API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/01-geolocation)

![Geolocation API - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/01-geolocation/01-geolocation-site.png)

In this exercise, I explored the capabilities of the Geolocation API in JavaScript, learning how to access and use geolocation data within a web application. The focus was on obtaining the user's current position and monitoring their movement towards a predefined target location.

#### Current Position Retrieval
- **Functionality**: The script includes a function `curSuccess` to handle successful geolocation retrieval. This function extracts the latitude, longitude, and accuracy from the `position` object.
- **Error Handling**: The `curError` function provides error information if geolocation access fails.
- **Options**: The script sets options like `enableHighAccuracy`, `timeout`, and `maximumAge` to control the geolocation retrieval process.

#### Continuous Position Monitoring
- **Target Definition**: A target location is predefined with specific latitude and longitude coordinates.
- **Watching Position**: The `watchSuccess` function compares the user's current coordinates with the target. It logs a message when the target is reached and then stops tracking the position.
- **Error Handling and Options**: Similar to current position retrieval, it handles errors and sets options for tracking.

#### Practical Application
- This exercise demonstrated practical use cases of the Geolocation API, such as real-time location tracking and reaching a destination. The use of options to enhance accuracy and manage data retrieval efficiently was also a key learning point.

The exercise combined HTML for basic structure and JavaScript for implementing the Geolocation API, offering a comprehensive understanding of how to integrate such functionalities in web applications.

### [B. Maps API - Positions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/02-map-position)

![Maps API - Positions - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/02-map-position/02-map-position-site.png)

This exercise focused on integrating the Geolocation API with Leaflet.js, a JavaScript library for interactive maps, to display both a specific landmark and the user's current location on a web map.

#### Leaflet.js Integration
- **Map Initialization**: The script initializes a Leaflet map within a designated `<div>` element and sets its view to a specific location and zoom level.
- **Tile Layer**: It uses OpenStreetMap's tile layer to render the map, providing essential geographical details and contributing to the map's visual appeal.

#### Marking Specific Locations
- **Landmark Marker**: A marker is placed at the Coit Tower in San Francisco, with a popup to identify the landmark.
- **Styling and Layout**: The map is styled with CSS to ensure it fits well within the webpage's layout.

#### Displaying User's Location
- **Current Location Marker**: Another marker is initialized with default coordinates and later updated to represent the user's current location.
- **Dynamic Update**: The script uses `navigator.geolocation.getCurrentPosition` to obtain the user's current latitude and longitude, updating the marker's position accordingly.

#### Practical Application
- This exercise showcased how to use Leaflet.js for map-based visualizations and how to dynamically update map elements based on user location data. It provided a hands-on experience in combining geolocation data with mapping libraries to create interactive and informative web maps.

Overall, the exercise was an excellent demonstration of the synergy between various web technologies, emphasizing the practical utility of combining geolocation data with interactive mapping tools in real-world applications.

### [C. Canvas API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/03-canvas)

![Canvas API - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/03-canvas/03-canvas-site.png)

In this exercise, I explored the fundamental capabilities of the Canvas API in HTML5, learning to draw various shapes, lines, text, and images on a canvas element.

#### Setting Up the Canvas
- **HTML Structure**: The exercise involved using a `<canvas>` element with a specified width and height, bordered for visibility.
- **Context Retrieval**: The JavaScript script retrieves the 2D rendering context of the canvas using `getContext("2d")`, essential for drawing on the canvas.

#### Drawing Shapes and Lines
- **Rectangle**: A green rectangle was drawn using `fillRect`, showcasing how to specify position and size.
- **Circle**: To draw a red circle, `arc` was used along with `fill`, demonstrating the use of path methods and geometric calculations.
- **Lines**: Orange lines were created using `moveTo`, `lineTo`, and `stroke`, illustrating how to create and render paths.

#### Adding Text
- **Text Rendering**: The script includes methods to draw text in two ways: `fillText` for solid text and `strokeText` for outlined text, both in blue. This part of the exercise emphasized font settings and text positioning.

#### Incorporating Images
- **Image Rendering**: The exercise also involved rendering an external image onto the canvas. The image element was first hidden in the HTML using CSS, then drawn onto the canvas using `drawImage` after it had loaded.

#### Practical Application
- This exercise provided a comprehensive introduction to the Canvas API's capabilities. It covered basic drawing techniques, such as shape and text rendering, and more complex tasks like image processing.
- The exercise effectively demonstrated how the Canvas API can be used for dynamic graphic creation in web applications, offering a versatile tool for both simple and complex graphic requirements.

Overall, the exercise served as a practical guide to understanding and applying various aspects of the Canvas API, highlighting its potential in creating interactive and visually appealing web content.

### [D. Window requestAnimationFrame() Method](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/04-requestAnimationFrame)

![Window requestAnimationFrame() Method - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/04-requestAnimationFrame/04-requestAnimationFrame-site-1.png)

![Window requestAnimationFrame() Method - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/04-requestAnimationFrame/04-requestAnimationFrame-site-2.png)

![Window requestAnimationFrame() Method - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/04-requestAnimationFrame/04-requestAnimationFrame-site-3.png)

This exercise provided a practical introduction to the `requestAnimationFrame` method in JavaScript, demonstrating how it can be used to create smooth animations on a web page.

#### Animation Setup
- **HTML Structure**: The exercise includes a simple HTML structure with an `<img>` element for the animation.
- **JavaScript Preparation**: The script selects the image using `document.querySelector` and initializes variables for tracking the animation start time and completion status.

#### Implementing requestAnimationFrame
- **Animation Function**: The `step` function is defined to handle each frame of the animation. It calculates the elapsed time since the animation started.
- **Movement and Rotation**: The script animates the image by translating and rotating it based on the elapsed time. This demonstrates how to manipulate CSS properties dynamically for animation effects.
- **Looping Animation**: `requestAnimationFrame(step)` is called within `step`, creating a loop. This method provides better performance and smoother animations compared to traditional `setInterval` or `setTimeout`.

#### Controlling the Animation Duration
- **Ending the Animation**: The script includes a condition to stop the animation after a specific duration (5000 milliseconds in this case), demonstrating how to control the length of an animation.

#### Practical Application
- This exercise was instrumental in understanding how `requestAnimationFrame` optimizes animations for web browsers, ensuring they run smoothly and efficiently.
- The example provided insights into how JavaScript can interact with CSS to create dynamic visual effects, a fundamental skill in modern web development.

Overall, the exercise served as a valuable learning tool in mastering the basics of creating animations using `requestAnimationFrame`, showcasing its advantages over traditional JavaScript timing functions.

#### [D1. Animated Clock Part 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/05-animated-clock-1/animated-clock)

![Animated Clock Part 1 - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/05-animated-clock-1/05-animated-clock-1-site-1.png)

![Animated Clock Part 1 - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/05-animated-clock-1/05-animated-clock-1-site-2.png)

This project involved creating an animated clock using the Canvas API in HTML5 and JavaScript. The exercise focused on rendering a fully functional clock with dynamically updating hands to display the current time.

#### Canvas Setup and Clock Face
- **Canvas Initialization**: A `<canvas>` element is used with a specified size. The JavaScript script retrieves the 2D rendering context for drawing.
- **Clock Face Design**: The script starts by clearing the canvas and setting up the default styles for drawing. It then draws a circular clock face with hour and minute marks. The hour marks are thicker and longer, while the minute marks are shorter and thinner.

#### Drawing Clock Hands
- **Retrieving Current Time**: The script gets the current time using the `Date` object.
- **Hour Hand**: It draws the hour hand, calculating its rotation based on the current hour, minute, and second. The hand is styled distinctively.
- **Minute Hand**: Similarly, the minute hand is drawn and rotated according to the current time.
- **Second Hand**: The second hand is thinner and a different color, updating every second for a smooth movement.

#### Animation Loop
- **Continuous Update**: The `requestAnimationFrame(clock)` call creates a loop, continuously updating the clock hands every frame to reflect the current time accurately.

#### Practical Application
- This exercise provided a detailed understanding of how to use the Canvas API for creating dynamic, real-time visualizations.
- The project emphasized precision in calculations for rotations and positions, essential for accurate representation of time.
- The animated clock project is a practical example of combining JavaScript's time functions with the Canvas API for creating visually appealing and interactive web applications.

Overall, this exercise served as an excellent demonstration of the potential of the Canvas API in creating complex, dynamic graphics, such as an animated clock, showcasing a blend of creativity and technical skill in web development.

#### [D2. Animated Clock Part 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/06-animated-clock-2/animated-clock)

![Animated Clock Part 2 - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/06-animated-clock-2/06-animated-clock-2-site-1.png)

![Animated Clock Part 2 - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/06-animated-clock-2/06-animated-clock-2-site-2.png)

![Animated Clock Part 2 - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/06-animated-clock-2/06-animated-clock-2-site-3.png)

![Animated Clock Part 2 - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/06-animated-clock-2/06-animated-clock-2-site-4.png)

This version of the animated clock project introduced interactive features, allowing the user to customize various aspects of the clock's appearance. The project combined JavaScript's Canvas API and HTML form elements to create a dynamic and user-configurable clock.

#### Enhanced User Interface
- **HTML Form for Customization**: The project includes a form with several color input fields, enabling users to choose colors for different parts of the clock, such as the face, border, and hands.
- **Save Functionality**: A button is provided to save the current state of the clock as an image, demonstrating the use of `canvas.toDataURL` for image conversion.

#### Dynamic Style Customization
- **Color Control**: The JavaScript script listens for user inputs on the color fields. The clock's colors for the face, border, hour lines, minute lines, and hands are dynamically updated based on these inputs.
- **CSS Styling**: The project incorporates a separate CSS file with styles for the form and button, enhancing the overall aesthetic and user experience.

#### Canvas Drawing with Custom Styles
- **Adaptive Drawing**: The script draws the clock on the canvas using the user-defined colors. It refreshes the clock's appearance in real-time, reflecting any changes made by the user.
- **Continuous Animation**: As with the previous version, `requestAnimationFrame` is used to update the clock hands continuously.

#### Practical Application
- This enhanced version of the clock project demonstrates more advanced aspects of web development, including user interaction, dynamic styling, and creating downloadable content from canvas elements.
- It serves as a practical example of how to build interactive, customizable web applications using HTML, CSS, and JavaScript.

Overall, Animated Clock V2 highlights the integration of user inputs into canvas-based applications, showcasing the flexibility and interactivity that modern web technologies can provide. It's an excellent example of enhancing user engagement and functionality in web-based projects.

### [E. Audio API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/07-audio-api)

![Audio API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-1.png)

![Audio API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-2.png)

![Audio API - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-3.png)

![Audio API - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-4.png)

![Audio API - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-5.png)

This project demonstrates the use of the Web Audio API to create a custom audio player in a web environment. The player includes controls for play, pause, stop, volume adjustment, and a seeker to navigate through the audio track.

#### Custom Audio Player Interface
- **HTML Setup**: The webpage features an `<audio>` element and a styled `div` that acts as the audio player with buttons for play, pause, stop, and sliders for volume and seeking.
- **Styling**: CSS is used to style the player interface, making the controls user-friendly and visually appealing.

#### Play, Pause, and Stop Functionality
- **Control Buttons**: JavaScript event listeners are attached to play, pause, and stop buttons. These control the playback of the audio file, showcasing how to interact with media elements using JavaScript.
- **Stop Functionality**: The stop button not only pauses the audio but also resets its current time to the beginning.

#### Volume Control and Display
- **Volume Slider**: A slider allows the user to adjust the volume. The volume value is dynamically updated and displayed, demonstrating the handling of range inputs and real-time updates to the audio element's properties.

#### Time Seeker and Display
- **Seeker Slider**: The seeker slider reflects the current playback position and allows users to jump to different parts of the audio.
- **Time Update**: JavaScript functions update the seeker's position and the displayed current time as the audio plays. This involves calculations to format and display the current time in a user-friendly manner.

#### Event Handling and Dynamic Updates
- **Metadata Loading**: An event listener is set up to handle the loading of audio metadata, setting the maximum value of the seeker slider based on the audio duration.
- **Time Update Event**: The `timeupdate` event on the audio element triggers updates to the seeker's position and the current time display.

#### Practical Application
- This project exemplifies the practical application of the Audio API for creating custom audio interfaces in web applications.
- It demonstrates the integration of HTML, CSS, and JavaScript to create a fully functional, interactive, and visually appealing audio player.

Overall, the Audio API project serves as an excellent example of how to harness web technologies to build custom multimedia controls, enhancing the user experience in web applications through interactive and tailored interfaces.

#### [E1. Music Player](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/08-music-player-project/music-player)

![Music Player - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-1.png)

![Music Player - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-2.png)

![Music Player - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-3.png)

![Music Player - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-4.png)

![Music Player - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-5.png)

![Music Player - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-6.png)

![Music Player - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-7.png)

This project focuses on creating a feature-rich music player using HTML5, CSS, and JavaScript, incorporating advanced functionalities like song switching, play/pause controls, and a progress bar.

#### User Interface Design
- **HTML Structure**: The interface includes a music container with navigation buttons for play, pause, next, and previous actions, an image container for album art, and a progress bar for tracking song playback.
- **Styling with CSS**: The design uses custom styles and imports from Google Fonts and FontAwesome for icons. The layout is visually appealing with rounded corners, shadows, and a gradient background.

#### Music Player Functionality
- **Dynamic Content Loading**: JavaScript functions load song details dynamically, including the title and cover image. The `loadSong` function updates the source for the audio and image elements based on the current song.
- **Play/Pause Toggle**: The play button toggles between play and pause states, changing the icon accordingly and controlling the playback of the audio element.

#### Song Navigation
- **Next and Previous Buttons**: These buttons allow the user to switch between songs. The song index is updated, and the corresponding song is loaded and played.
- **Song Array**: An array holds the names of the songs, simplifying the management of available tracks.

#### Progress Bar and Interaction
- **Updating Progress**: The progress bar visually indicates the current playback position. It updates in real-time as the song plays.
- **Seeking Functionality**: Users can click on the progress bar to jump to different parts of the song, demonstrating interaction with the audio playback.

#### Animation and Visual Feedback
- **Spinning Album Art**: The album cover rotates when a song is playing, adding a dynamic visual element to the player.
- **CSS Animations**: Keyframe animations and transitions are used for smooth visual effects, like the rotating album cover and the fading music info.

#### Practical Application
- This project exemplifies the integration of various web technologies to create an interactive and functional music player. It highlights skills in DOM manipulation, event handling, and CSS animations.
- The music player is a practical demonstration of creating custom multimedia controls and interfaces, a valuable skill in modern web development.

Overall, the Music Player project showcases how to build an interactive, aesthetically pleasing, and user-friendly web application, combining HTML5's audio capabilities with advanced CSS and JavaScript techniques.

#### [E2. Drum Machine](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/09-drum-machine-project/drum-machine)

![Drum Machine - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/09-drum-machine-project/09-drum-machine-site.png)

This project involves creating a drum machine using HTML, CSS, and JavaScript. It simulates a percussion instrument, allowing users to play different drum sounds by pressing specific keys on their keyboard.

#### Interactive Drum Pads
- **HTML Elements**: The webpage features a series of `div` elements representing drum pads. Each pad is associated with a keyboard key, indicated by the `<kbd>` element, and a corresponding drum sound.
- **Drum Sound Files**: Separate `<audio>` elements are linked to each drum pad, each triggered by a specific keyboard key.

#### JavaScript Event Handling
- **Key Press Detection**: The JavaScript code listens for `keydown` events. When a user presses a key, the script checks if it corresponds to one of the drum pads.
- **Playing Drum Sounds**: If a matching key is pressed, the script plays the associated audio file. The `currentTime` property of the audio is set to 0 to ensure the sound plays from the start each time.

#### Visual Feedback
- **Styling Drum Pads**: The drum pads are styled using CSS for a clean, modern look. They are laid out in a grid-like formation, making it visually intuitive.
- **Dynamic Visual Effects**: When a drum pad is activated, its appearance changes temporarily, giving visual feedback to the user. This is achieved through CSS transformations and transitions.

#### Practical Application
- This project demonstrates the use of event listeners in JavaScript to create an interactive musical interface. 
- It showcases how to manage audio playback and synchronize it with user input, a useful skill for developing interactive web applications.
- The project also illustrates how to combine HTML, CSS, and JavaScript effectively to create an engaging user experience.

Overall, the Drum Machine project is a creative example of using web technologies to build an interactive and entertaining application, highlighting the potential of combining simple elements to create a more complex and interactive experience.

### [F. Video API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/10-video-api)

![Video API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/10-video-api/10-video-api-site-1.png)

![Video API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/10-video-api/10-video-api-site-2.png)

![Video API - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/10-video-api/10-video-api-site-3.png)

This project demonstrates how to create a custom video player using HTML5's Video API, along with JavaScript to control playback and update UI elements in real-time.

#### Custom Video Player Interface
- **HTML Structure**: The page includes a `<video>` element with attributes like `width`, `autoplay`, `loop`, and `muted`. It also has buttons for play, pause, and stop, along with a time display and a range input for seeking.
- **Video Source**: The video player is linked to a `.mov` file as its source, with a poster image displayed before the video plays.

#### JavaScript Playback Controls
- **Control Buttons**: Event listeners are attached to the play, pause, and stop buttons to control the video playback. The play button starts the video, pause stops it temporarily, and stop halts the playback and resets the video to the beginning.
- **Time Display**: The script updates the time display to show the current playback time, formatting it as minutes and seconds.

#### Video Seeker Functionality
- **Seeker Input**: A range input allows users to seek to different parts of the video. As the video plays, the seeker's value updates to reflect the current playback position.
- **Seeking Event Handling**: The seeker's `input` event is used to update the video's `currentTime`, allowing users to jump to different parts of the video.

#### Dynamic UI Updates
- **Interval for Time Update**: A repeating interval updates the time display every 100 milliseconds, ensuring synchronization with the video playback.
- **Metadata Loading**: The script sets the maximum value of the seeker based on the video's duration once the metadata is loaded, ensuring accurate seeking.

#### Practical Application
- This project exemplifies the use of the HTML5 Video API for creating custom video players with enhanced control over playback and user interaction.
- It demonstrates key concepts such as event handling, manipulating media elements, and dynamically updating UI components in response to media state changes.

Overall, the Video API project serves as a practical guide for building interactive and user-friendly media players in web applications, showcasing how HTML5, CSS, and JavaScript can be combined to control and interact with video content effectively.

#### [F1. Video Player](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/11-video-player-project/video-player)

![Video Player - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/11-video-player-project/11-video-player-site-1.png)

![Video Player - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/11-video-player-project/11-video-player-site-2.png)

![Video Player - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/11-video-player-project/11-video-player-site-3.png)

This project entails creating a custom video player interface using HTML, CSS, and JavaScript. The player is equipped with controls for play, pause, stop, and seeking within the video, offering a tailored viewing experience.

#### Enhanced User Interface
- **HTML Structure**: The layout includes a `<video>` element and a control panel with buttons for play, pause, and stop, as well as a progress bar for seeking. 
- **Font Awesome Icons**: The player uses Font Awesome icons for a polished, intuitive control interface.

#### Styling and Layout
- **CSS Design**: The design features a modern, sleek look with a dark theme for the control panel and rounded corners for a smooth appearance.
- **Responsive Design**: The media query in CSS ensures that the player is responsive and adjusts to different screen sizes.

#### Play and Stop Controls
- **Control Functionality**: JavaScript is used to add functionality to the play and stop buttons. The play button toggles between play and pause states, changing the icon accordingly.
- **Stop Button**: The stop button halts the video and resets it to the beginning, enhancing user control over the playback.

#### Progress Bar
- **Seeking Feature**: The progress bar allows viewers to seek to different parts of the video. As the video plays, the bar updates to reflect the current playback position.
- **Custom Slider Design**: The slider is custom-styled using CSS to match the overall aesthetic of the player.

#### Timestamp Display
- **Time Update**: The timestamp displays the current time of the video, which updates dynamically as the video plays or when the viewer seeks a different position.

#### Practical Application
- This project is a practical example of enhancing HTML5's native video capabilities with custom controls and styling, demonstrating advanced front-end development techniques.
- It highlights the integration of HTML, CSS, and JavaScript to create a highly interactive and user-friendly video player.

Overall, the custom Video Player project showcases the potential of combining standard web technologies to build sophisticated and attractive media playback interfaces, enhancing the user experience beyond the default browser capabilities.

### [G. Web Animations API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/12-web-animation-api)

![Web Animations API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-1.png)

![Web Animations API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-2.png)

![Web Animations API - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-3.png)

![Web Animations API - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-4.png)

![Web Animations API - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-5.png)

![Web Animations API - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-6.png)

This exercise demonstrates the use of the Web Animations API in JavaScript to create a dynamic, interactive animation. The example features a spinning ball with control buttons for play, pause, reverse, speed up, and slow down, offering users an engaging way to interact with the animation.

#### Animation Setup
- **HTML Structure**: A `div` element represents the animated object (a ball), and a set of control buttons allows user interaction with the animation.
- **SVG Element**: The ball is represented by an SVG element, providing high-quality graphics that scale well on any screen.

#### JavaScript and Web Animations API
- **Animation Definition**: The exercise uses JavaScript to define keyframes and options for the ball's rolling animation. This includes properties like transform and color changes.
- **Animation Controls**: Event listeners are attached to each control button, triggering actions like playing, pausing, reversing, and adjusting the playback speed of the animation.

#### Customization of Playback
- **Play and Pause**: Users can start and stop the animation at any time.
- **Reverse**: The animation can be played in reverse, showcasing the flexibility of the Web Animations API.
- **Speed Control**: Users can speed up or slow down the animation, demonstrating dynamic control over the animation playback rate.

#### Styling
- **CSS Styling**: The styling is minimalist with a focus on contrast, ensuring that the animated element and controls are clearly visible against the background.
- **Responsive Design**: The CSS ensures that the animation and controls are displayed correctly across different devices.

#### Practical Application
- This exercise is a practical example of using the Web Animations API for creating interactive animations in web applications.
- It highlights the API's power and flexibility in controlling animations programmatically, offering an advanced alternative to traditional CSS animations.

Overall, the Web Animations API exercise showcases how modern web technologies can be used to create highly interactive and visually appealing web animations, enhancing user engagement and the overall user experience on web pages.

### [H. Speech Recognition - Web Speech API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/13-speech-recognition)

![Speech Recognition - Web Speech API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-1.png)

![Speech Recognition - Web Speech API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-2.png)

![Speech Recognition - Web Speech API - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-3.png)

![Speech Recognition - Web Speech API - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-4.png)

![Speech Recognition - Web Speech API - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-5.png)

![Speech Recognition - Web Speech API - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-6.png)

![Speech Recognition - Web Speech API - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-7.png)

This project utilizes the Web Speech API to create an interactive web page that responds to the user's voice commands. Specifically, it changes the background color of the webpage based on the color named by the user.

#### Implementation of Speech Recognition
- **JavaScript Speech API**: The project uses the `SpeechRecognition` interface of the Web Speech API to recognize speech input from the user. This is set to recognize English (`en-US`) language.
- **Continuous Recognition**: The speech recognition is set to continuous mode, allowing it to process speech input continuously without stopping after a single command.

#### Dynamic Response to Voice Commands
- **Color Change Functionality**: As the user speaks, the recognized words are processed to identify color names. When a valid color name is detected, the background color of the webpage is changed accordingly.
- **Event Handling**: The `onresult` event of the speech recognition object captures and processes the speech input, implementing the logic for changing the background color.

#### User Interaction
- **Voice Command Prompt**: Users are prompted to say a color name, guiding them on how to interact with the web page.
- **Real-Time Feedback**: The immediate change in the background color upon recognizing a color name provides real-time feedback to the user.

#### Styling and Design
- **CSS Styling**: The webpage is styled with a modern font from Google Fonts and uses a simple, clean layout. The initial background color is set to blue, and the heading has a distinctive styling to make it stand out.

#### Practical Application
- This project showcases a practical application of the Speech Recognition API in creating voice-interactive web applications.
- It highlights how voice commands can be used to dynamically manipulate the DOM, enhancing user engagement and accessibility.

Overall, the Speech Recognition API project demonstrates the potential of integrating advanced browser APIs to create innovative, interactive web experiences. It illustrates a simple yet effective use of voice recognition technology in web development.

### [I. Speech Synthesis - Web Speech API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/14-speech-synthesis)

![Speech Synthesis - Web Speech API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/14-speech-synthesis/14-speech-synthesis-site-1.png)

![Speech Synthesis - Web Speech API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/14-speech-synthesis/14-speech-synthesis-site-2.png)

This project demonstrates the use of the Web Speech Synthesis API to convert text into speech. It features an interactive webpage where users can type text, select a voice, and have the text read aloud.

#### Interactive Text-to-Speech Interface
- **HTML Setup**: The webpage includes a form with a textarea for text input, a dropdown menu for voice selection, and a button to trigger speech synthesis.
- **Voice Selection**: The dropdown menu dynamically lists available speech synthesis voices, allowing users to choose their preferred voice.

#### Speech Synthesis Implementation
- **JavaScript Speech Synthesis**: The script uses the `SpeechSynthesisUtterance` interface to create an utterance from the user's text input.
- **Voice Selection Processing**: The selected voice from the dropdown menu is applied to the utterance, enabling customized speech output.
- **Form Submission Handling**: The form's submit event is captured to process and speak the entered text using the chosen voice.

#### Styling and Layout
- **CSS Design**: The page is styled with a modern, clean design, using the Poppins font for a friendly user interface. The layout is centered and responsive for easy readability and interaction.
- **Color Scheme**: A soothing salmon background color is used, providing a visually appealing and calming user experience.

#### Practical Application
- This project showcases a practical application of the Speech Synthesis API, illustrating how web applications can be made more interactive and accessible.
- It highlights the capability of modern web browsers to provide advanced features like speech synthesis, enhancing user engagement and accessibility.

Overall, the Speech Synthesis API project is a clear demonstration of integrating advanced browser APIs to create interactive and user-friendly web applications. It exemplifies how web technologies can be leveraged to enhance the user experience through interactive and accessible design.