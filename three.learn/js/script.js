		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 455, window.innerWidth/window.innerHeight);
		var renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setSize(window.innerWidth, window.innerHeight);
		$('body').append(renderer.domElement);

		var geometry = new THREE.TorusGeometry( 2, 0.2, 30, 200, 6.3 );
		var material = new THREE.MeshBasicMaterial( { color: 0xFFFF00} );
		var torus = new THREE.Mesh(geometry, material);
		scene.add(torus);
		torus.position.z = -5;
		torus.rotation.x = 2;
		torus.rotation.y = 2;
		//renderer.render(scene,camera);
		$(window).bind('mousewheel DOMMouseScroll', function(event){
        			 if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
					var animate = function(){
            		console.log('scrolling up !');
    				torus.rotation.x += 0.05;
					torus.rotation.y += 0.10;
					torus.position.z += -0.05;
					console.log("X: "+torus.rotation.x,"Y: "+torus.rotation.y ,"Z: "+torus.position.z);
  					}
			
			renderer.render(scene,camera);
			requestAnimationFrame(animate);
			animate();
			}
		else{
            var animate = function(){
            		console.log('scrolling up !');
    				torus.rotation.x -= 0.05;
					torus.rotation.y -= 0.10;
					torus.position.z -= -0.05;
					console.log("X: "+torus.rotation.x,"Y: "+torus.rotation.y ,"Z: "+torus.position.z);
  					}
			
			renderer.render(scene,camera);
			requestAnimationFrame(animate);
			animate();
			}	
			   
			    });