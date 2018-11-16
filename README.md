### Dreamshare

To view online:  
http://www.dahea.rocks/atdev/dreamshare

To run on your local machine:  
1) `git clone https://github.com/dahea/dreamshare.git `  
2) `cd dreamshare `  
3) `yarn`  
4) `yarn start`

### Proccess & Improvements
- Stateless/functional components used instead of React class because state and lifecycle functions (componentDidMount, componentDidUpdate) were not needed

- Images in the public folder instead of in src/assets  
	Benefits:  
		- better caching
		- smaller file size for js bundle

- Use of an icons library (https://www.npmjs.com/package/react-feather)  
	I did not use an svg icons library because my preferred icons library does not have the airplane and paintbrush icons needed for this build

- Use of a CSS-in-JS library to couple styles directly with their components  
	A few different libraries include:
	- https://www.styled-components.com/
	- https://glamorous.rocks/
	- https://emotion.sh/

- Image optimization to serve scaled images based on device/display size

- Tests should be written, but this was out of scope for the project

