ReactiveMusic = function()
{
	this.eContainer = $('#container');
	this.oRenderer = new THREE.WebGLRenderer();
	this.oCamera = new THREE.PerspectiveCamera(
					ReactiveMusic.VIEW_ANGLE,
					ReactiveMusic.ASPECT,
					ReactiveMusic.NEAR,
					ReactiveMusic.FAR);

	this.oScene = new THREE.Scene();

	this.initialiseScene();
	this.drawCube();
	this.addLights();
	this.renderScene();
	this.addKeyboardControls();
};

ReactiveMusic.WIDTH = 800;
ReactiveMusic.HEIGHT = 600;
ReactiveMusic.VIEW_ANGLE = 45;
ReactiveMusic.ASPECT = ReactiveMusic.WIDTH / ReactiveMusic.HEIGHT;
ReactiveMusic.NEAR = 0.1;
ReactiveMusic.FAR = 10000;

ReactiveMusic.prototype.initialiseScene = function()
{
	this.oScene.add(this.oCamera);

	this.oCamera.position.z = 300;
	this.oRenderer.setSize(ReactiveMusic.WIDTH, ReactiveMusic.HEIGHT);
	this.eContainer.append(this.oRenderer.domElement);
};

ReactiveMusic.prototype.drawCube = function()
{
	var radius = 50;
	var segments = 16;
	var rings = 16;

	var sphereGeometry = new THREE.SphereGeometry(radius, segments, rings);
	var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xCC0000});

	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

	this.oScene.add(sphere);
};

ReactiveMusic.prototype.addLights = function()
{
	var pointLight = new THREE.PointLight(0xFFFFFF);

	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	this.oScene.add(pointLight);
};

ReactiveMusic.prototype.renderScene = function()
{
	this.oRenderer.render(this.oScene, this.oCamera);
};

ReactiveMusic.prototype.addKeyboardControls = function()
{
	self = this;
	$(document).bind("keydown", function(e)
		{
	    if (e.keyCode == 37) { 
	    	//left
	    	self.oCamera.position.x -= 2;
	    }
	    if (e.keyCode == 38) {
	    	//up
	    	self.oCamera.position.y += 2;
	    }
	    if (e.keyCode == 39) { 
	    	//right
	    	self.oCamera.position.x += 2;
	    }
	    if (e.keyCode == 40) { 
	    	//down
	    	self.oCamera.position.y -= 2;
	    }
	    self.renderScene();
	});
};