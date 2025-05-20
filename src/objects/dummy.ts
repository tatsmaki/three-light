import { BoxGeometry, Group, Mesh, MeshStandardMaterial } from "three";

export const dummyGroup = new Group();

const createDummy = () => {
  const dummyGeo = new BoxGeometry(1, 1, 1);
  const dummyMat = new MeshStandardMaterial({ color: 0x00ff00 });
  const dummy = new Mesh(dummyGeo, dummyMat);

  dummy.castShadow = true;

  return dummy;
};

for (let i = 0; i < 100; i++) {
  const dummy = createDummy();
  const x = Math.random() * 100 - 50;
  const y = 0.5;
  const z = Math.random() * 100 - 50;

  dummy.position.set(x, y, z);

  dummyGroup.add(dummy);
}
