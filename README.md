# js-img2base64
Converts an image to Base64. You could pass a maximum size of an image in megabytes, and an array of valid extensions. This package has no external dependency packages.
```js
var imageToBase64 = require('js-img2base64');
```

Or

```js
import imageToBase64 from 'js-img2base64';
```

## install
```
npm install js-img2base64 --save
```

## API
### imageToBase64(imageFile, maxSizeInMegabytes, validExtensions)

Convert image file to image base64 data
* {Image} ``imageFile``, required  
* {number} ``maxSizeInMegabytes`` optional, default <= 3 megabytes  
* {array} ``validExtensions`` optional, default ['png', 'jpeg', 'jpg', 'gif']
```js

    imageToBase64(image, 6, ["png", "gif"])
    	.then((base64String) => console.log(base64String))
    	.catch((error) => console.error(error));
```

### Usage example with React

```js
import React from 'react';
import imageToBase64 from 'js-img2base64';


const ImageComponent = () => {

  const handleChange = event => {
    const value = event.target.files[0];
    imageToBase64(value)
    	.then((base64String) => console.log(base64String))
    	.catch((error) => console.error(error));
  }

  	return (
      <input accept="image/*" 
        onChange={handleChange} 
        id="button-file" 
        type="file" />
  	);
};

```

### Github repository

[https://github.com/MurphyAdam/js-img2base64.git](https://github.com/MurphyAdam/js-img2base64.git)
