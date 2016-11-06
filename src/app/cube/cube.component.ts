import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'geometry-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements AfterViewInit {
  /* HELPER PROPERTIES (PRIVATE PROPERTIES) */
  private camera: THREE.PerspectiveCamera;

  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  
  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private cube: THREE.Mesh;
  private spin: THREE.Mesh;


  private renderer: THREE.WebGLRenderer;

  private scene: THREE.Scene;



  /* CUBE PROPERTIES */
  @Input()
  public rotationSpeedX: number = 0.005;

  @Input()
  public rotationSpeedY: number = 0.01;

  @Input()
  public size: number = 200;

  @Input()
  public texture: string = '/assets/textures/crate.gif';



  /* STAGE PROPERTIES */
  @Input()
  public cameraZ: number = 0;

  @Input()
  public fieldOfView: number = 70;

  @Input('nearClipping')
  public nearClippingPane: number = 1;

  @Input('farClipping')
  public farClippingPane: number = 1000;



  /* DEPENDENCY INJECTION (CONSTRUCTOR) */
  constructor() { }



  /* STAGING, ANIMATION, AND RENDERING */

  /**
   * Animate the cube
   */
  private animateCube() {
    //TODO: MOVE TO CAMERA
    //<<<<<<<<<<<<<<<<
    // this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
    this.spin.rotation.y += (this.rotationSpeedY)/2;
    //>>>>>>>>>>>>>>>>  >>>>>
  }

  private animateCamera() {
    this.camera.rotation.x += this.rotationSpeedX;
    this.camera.rotation.y += this.rotationSpeedY;
  }
  /**
   * Create the cube
   */
  private createSpin() {
    let texture = new THREE.TextureLoader().load('/assets/textures/biblio.png');


    let material = new THREE.MeshBasicMaterial({ map: texture});


    let geometry = new THREE.BoxGeometry(32, 32, 32);

    this.spin = new THREE.Mesh(geometry, material);
    this.spin.applyMatrix( new THREE.Matrix4().makeTranslation(91, -44, 0) );

    this.scene.add(this.spin);

  }


  private createCube() {
    let texture = new THREE.TextureLoader().load(this.texture);


    // let material = new THREE.MeshBasicMaterial({ map: texture});WAS
    let material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });


    
    let geometry = new THREE.SphereGeometry(500, 32, 32);
    // let geometry = new THREE.SphereBufferGeometry(200, 32, 32);
    this.cube = new THREE.Mesh(geometry, material);

    //<<<test stuff
    //TODO: mesh.material.side = THREE.BackSide;


    // this.cube = new THREE.Mesh.BackSide();  //FAILED

    //>>>test stuff


    // Add cube to scene
    this.scene.add(this.cube);
    
  }

  /**
   * Create the scene
   */
  private createScene() {
    /* Scene */
    this.scene = new THREE.Scene();

    /* Camera */
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * Start the rendering loop
   */
  private startRenderingLoop() {
    /* Renderer */
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: CubeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();

      // component.aniamteCamera();FAILED

      component.renderer.render(component.scene, component.camera);
    }());
  }



  /* EVENTS */

  /**
   * Update scene after resizing. 
   */
  public onResize() {
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }



  /* LIFECYCLE */

  /**
   * We need to wait until template is bound to DOM, as we need the view
   * dimensions to create the scene. We could create the cube in a Init hook,
   * but we would be unable to add it to the scene until now.
   */
  public ngAfterViewInit() {
    this.createScene();
    this.createCube();
    this.createSpin();
    this.startRenderingLoop();
  }
}
