if(document.getElementById('sermonplayer')){
				var audioplayer = document.getElementById('sermonplayer');
				var src = audioplayer.getAttribute('data-source');
				var audio = new Audio(src);
				//Play Button
				var playbtn = document.createElement("BUTTON");
				var playt = document.createTextNode("Play");
				playbtn.appendChild(playt);     
				playbtn.onclick = function() {
					audio.play();
				}
				
				// Pause Button
				var pausebtn = document.createElement("BUTTON");
				var pauset = document.createTextNode("Pause");
				pausebtn.appendChild(pauset);
				pausebtn.onclick = function() {
					audio.pause();
				}
				
				//Stop Button
				var stopbtn = document.createElement("Button");
				var stopt = document.createTextNode("Stop");
				stopbtn.appendChild(stopt);
				stopbtn.onclick = function() {
					audio.currentTime = 0;
					audio.pause();
				}
				
				audioplayer.appendChild(playbtn);
				audioplayer.appendChild(pausebtn);
				audioplayer.appendChild(stopbtn);
			}
