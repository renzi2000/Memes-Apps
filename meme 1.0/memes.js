let memes;
let memetitle;

//Mouse Onclick Event
//When the button(btn-danger) is click it runs the function memeIt
document.querySelector(".btn-danger").addEventListener('click' ,memeIt)

//This Function fetch random images(memes) using the API
//This is a function declaration
function memeIt(memes) {
	$.getJSON('https://meme-api.herokuapp.com/gimme/PampamilyangPaoLUL')
	//The code above uses jQuery to fetch the JSON data from the API
	.then(randMeme => {
	//Then we will assign randMeme the data from the API
		console.log(randMeme)
		memeTitle = randMeme.title
		return randMeme.url;
		//From the data from the API, we will get title and image
	})
	.then(randMeme => {
		console.log(memeTitle)
		console.log(randMeme)
		let img = document.createElement('img');
		//Using .createElement we will create an <img> tag on our html
		img.setAttribute('class', 'img-fluid');
		//Using .setAttribute we will set its class to 'img-fluid'
		img.src = randMeme;
		//Then we will assign randMeme to the img source
		document.getElementById("title").textContent = `${memeTitle}`;
		//Using .getElementById we will replace the text content our element 
		//with the Id 'title' with memeTitle
		document.getElementById("memesGoesHere").innerHTML = "";
		//Using .getElementById('').innerHTML we will set the content of the 
		//element with the Id 'memeGoesHere' as black. 
		document.getElementById("memesGoesHere").appendChild(img);
		//Then by using the code above we are appending/adding the img data from 
		//the API with the img element <img> to the id 'memeGoesHere'
	});
};