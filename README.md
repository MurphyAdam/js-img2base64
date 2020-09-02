[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=MurphyAdam&count_private=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)

# js-img2base64
Converts an image to Base64. You could pass a maximum size of an image in megabytes, and an array of valid extensions. This package has no external dependency packages.

## Install
```
npm install js-img2base64 --save
```
## Usage

```js
var imageToBase64 = require('js-img2base64');
```

Or

```js
import imageToBase64 from 'js-img2base64';
```

## API
### imageToBase64(imageFile, maxSizeInMegabytes, validExtensions)

Convert image file to image base64 data

#### Arguments
* {Image} ``imageFile``, required  
* {number} ``maxSizeInMegabytes`` optional, default <= 3 megabytes  
* {array} ``validExtensions`` optional, default ['png', 'jpeg', 'jpg', 'gif']

#### Return type 
* return type: Promise. Resolved if everything is okay, returns the Base64 string of the file. Rejected if any validation fails (maxSizeInMegabytes, validExtensions or a FileReader error), returns the rejection reason (error).

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
