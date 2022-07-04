var scene = new THREE.Scene();
var  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);

var renderer = new THREE.WebGLRenderer( { antialias : true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.querySelector('body').append( renderer.domElement );
