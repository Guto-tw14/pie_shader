const vertexShader = /* glsl */`
void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
// uniform vec3 iResolution;
// uniform int SEGMENTCOUNT;
export { vertexShader };