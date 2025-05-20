import { Group, Mesh, SphereGeometry } from "three";
import { skyMat } from "./sky_material";

export const sky = new Group();

const skyGeo = new SphereGeometry(50);
const mesh = new Mesh(skyGeo, skyMat);

sky.add(mesh);
