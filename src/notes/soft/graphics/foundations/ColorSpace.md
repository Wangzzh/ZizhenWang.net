## RGB Colors

The most commonly used color space is RGB space, in which colors are defined in terms of red, green and blue. The colors are considered to be mixed additively and linearly.

## Gamma Correction

To display an image, monitors will take the digital input of a pixel and convert it to intensity level. However, the intensity is usually non-linear with respect to input pixel value, and commonly it is charaxterized by a $\gamma$ value.

$$
\text{display intensity} = (\text{maximum intensity})\cdot\alpha^\gamma
$$
where $\alpha$ is the input pixel value between 0 and 1. We can determine a suitable $\gamma$ by comparing 1) alternating black and white pixels and 2) half grey. We desire the two to produce the same total intensity on screen, so the intensity is overall close to linear.

## Cone Response

There are three types of cones in human eyes, L (Long), M (Medium) and S (Short). The response of a cone to some light stimuli is not evenly distributed across all wavelengths. 

![](/notes/soft/graphics/colorSpace/ConeResponseFunction.png)

The actual response to a stimulus with some input spectral $\Phi(\lambda)$ is calculated by integration. Use L cone as example.

$$
L = \int_\lambda \Phi(\lambda)L(\lambda)d\lambda
$$

## Reference

- Fundamentals of Computer Graphics (3rd Edition). Chapter 3, Chapter 21.