const fragmentShader = /* glsl */`
void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
`

export { fragmentShader };
// uniform vec3 iResolution;
// uniform int SEGMENTCOUNT;
// // Max 8 Colours defined, could work with more just need to define more than 8 colours!
// #define PI 3.14159265359

// // http://stackoverflow.com/questions/15095909/from-rgb-to-hsv-in-opengl-glsl
// vec3 hsv2rgb(vec3 c)
// {
//     vec4 K=vec4(1.,2./3.,1./3.,3.);
//     vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www);
//     return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y);
// }

// vec4 colors[8]=vec4[](
//     vec4(1.,0.,0.,1.),
//     vec4(0.,1.,0.,1.),
//     vec4(0.,0.,1.,1.),
//     vec4(1.,1.,0.,1.),
//     vec4(0.,1.,1.,1.),
//     vec4(1.,0.,1.,1.),
//     vec4(1.,1.,1.,1.),
//     vec4(1.,.5,.5,1.)
// );

// void mainImage(out vec4 fragColor,in vec2 fragCoord)
// {
//     vec2 nodePosition=iResolution.xy/2.;
    
//     vec2 fragPos=fragCoord.xy-nodePosition;
//     vec2 normalFragPos=normalize(fragCoord.xy-nodePosition);
    
//     float angleSegment=2.*PI;
//     angleSegment/=float(SEGMENTCOUNT);
    
//     float angle=atan(normalFragPos.y,normalFragPos.x)+PI;
    
//     int segmentId=int(angle/angleSegment);
    
//     float hueShift=(float(segmentId)+(mod(float(segmentId),2.)*.5*float(segmentId)))/float(SEGMENTCOUNT);
    
//     //vec4 segmentColor = colors[segmentId];
//     vec4 segmentColor=vec4(hsv2rgb(vec3(hueShift,1.,1.)),1.);
    
//     float circle=step(length(fragPos),100.);
//     fragColor=circle*segmentColor;
// }