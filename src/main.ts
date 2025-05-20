import { ambientLight } from "./global/ambient_light";
import { camera, renderCamera } from "./global/camera";
import { renderer } from "./global/renderer";
import { scene } from "./global/scene";
import { map, gridHelper } from "./objects/map";
import "./style.css";

scene.add(camera, map, gridHelper, ambientLight);

renderer.setAnimationLoop(() => {
  renderCamera();
  renderer.render(scene, camera);
});

const onResize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

onResize();

window.addEventListener("resize", onResize);
