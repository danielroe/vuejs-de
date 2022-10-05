<template>
  <Renderer
    height="800"
    :orbit-ctrl="{ autoRotate: true, enableDamping: true }"
    alpha
    antialias
  >
    <PerspectiveCamera :position="{ x: 1, y: 3, z: 8 }" />
    <Scene>
      <AmbientLight />
      <GltfModel src="/hipster-clay-cat.gltf" />
    </Scene>
  </Renderer>
</template>
