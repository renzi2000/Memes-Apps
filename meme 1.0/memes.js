//Dark Mode
//By using .setattribute on the body and adding darker background color
function dark(){
	document.body.setAttribute('style', 'background-color: #121212')
};

document.querySelector("#dark").addEventListener('click' ,dark)
document.querySelector("#darkSide").addEventListener('click' ,dark)


//When the button(btn-danger) is click it runs the function memeIt
document.querySelector("#clickMe").addEventListener('click' ,memeIt)


//Spacebar is also assign to press the button
document.addEventListener('keypress' ,function(e){
		if(e.key == " "){
			e.preventDefault();
			document.querySelector(".btn-danger").click();
		}
	}
);

//Initial image
let img = document.createElement('img');
img.setAttribute('class', 'img-fluid');
img.setAttribute('style', 'max-height: 50%; max-width: 50%');
img.setAttribute('src', 'images/tesda.png');
document.getElementById("memesGoesHere").appendChild(img);

//This Function fetch random images(memes) using the API
//This is a function declaration
function memeIt(memes) {
	$.getJSON('https://meme-api.herokuapp.com/gimme/PampamilyangPaoLUL')
	//The code above uses jQuery to fetch the JSON data from the API
	
	.then(randMeme => {
	//Then we will assign the response from the api to randMeme.
		
		console.log(randMeme)
		memeTitle = randMeme.title
		randomMeme = randMeme.url
		return randMeme;
		//From the data from the API, we will assign memeTitle and randomMeme respectively
	})
	.then(randMeme => {
		
		console.log(memeTitle)
		console.log(randomMeme)
		
		let img = document.createElement('img');
		//Using .createElement we will create an <img> tag on our html
		
		img.setAttribute('class', 'img-fluid');
		//Using .setAttribute we will set its class to 'img-fluid'
		
		img.setAttribute('style', 'max-height: 50%; max-width: 50%');
		//Using .setAttribute we will set its style to have a max height and 
		//width of only 50% for larger images
		
		img.src = randomMeme;
		//Then we will assign randMeme to the img source
		
		document.getElementById("title").textContent = `${memeTitle}`;
		//Using .getElementById we will replace the text content our element 
		//with the Id 'title' with memeTitle
		
		document.getElementById("memesGoesHere").innerHTML = "";
		//Using .getElementById('').innerHTML we will set the content of the 
		//element with the Id 'memeGoesHere' as blank. 
		
		document.getElementById("memesGoesHere").appendChild(img);
		//Then by using the code above we are appending/adding the img data from 
		//the API with the img element <img> to the id 'memeGoesHere'
	});
};
