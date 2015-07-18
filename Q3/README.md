README
=============
Make sure to have bower and run 'bower install' to install required modules
Open index.html through a server to ensure polymer components load.
	You can 'npm install -g live-server', and run 'live-server' to serve the files on localhost:8080
To add a polymer element:
	Just add this tag to the html with the time you want!
	<websiteinc-friendlytime time="2015-03-9 8:18:00"></websiteinc-friendlytime>
	Time will update as you wait.


<!-- NOTE -->
<!-- Moment Time Output Range -->
<!-- 
0 to 45 seconds             s   seconds ago
45 to 90 seconds            m   a minute ago
90 seconds to 45 minutes    mm  2 minutes ago ... 45 minutes ago
45 to 90 minutes            h   an hour ago
90 minutes to 22 hours      hh  2 hours ago ... 22 hours ago
22 to 36 hours              d   a day ago 
-->