In this demo, I will show how to create a rotating globe in live2d.

Image resources we need to prepare
- Static image of a globe
- A world map to be applied on globe

![](/notes/soft/live2d/RotatingGlobe/resource.png)

The above image shows all the image resources I prepared. The guidelines on the globe are very helpful, as in later steps in live2d, we can align the mesh with the guidelines.


Now in live2d, create a mesh on the world map. Subdivide to 16x16 or higher. Then adjust the positions of the vertices to be on the guidelines.

![](/notes/soft/live2d/RotatingGlobe/mesh.png)

In this example, I divide the map to a 16x16 mesh, and at each key frame, only 8x16 of the mesh will be visible on the front side of the globe. For the map that is invisible, we can put the vertices on the edge of the globe.

I created 5 keyframes to produce a rotation of 45 degrees. That is, in each keyframe, the globe will rotate 1/16 on the map. The animation produced is linked in the video below.

<iframe width="720" height="480" src="https://www.youtube.com/embed/-BDKQISi6_s" ></iframe>

Problems
- Distortion is noticeable at north and south poles and at the edge of the globe.
- Speed of rotation is not uniform.