
$(document).ready(startApp);

var memoryMatch

function startApp(){
	var optionObject = {
		displayArea: 'body',
		cardBackImage: 'https://media-hearth.cursecdn.com/attachments/39/693/cardback_29.png',
		cardFrontImages: cardImages
	}
	memoryMatch = new Game( optionObject );
	memoryMatch.createCards();
}

var cardImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnikB3tUGxt56rBNktHJgJn3rhzJGeBxJFTzRcRi1bTrraYKYZ',
  'https://vetmed.illinois.edu/wp-content/uploads/2017/12/pc-keller-hedgehog.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMg90fb9uDb4BNlqRpEYvzUC-VLNhJjsqas2IgW4G2ABZAkVtV',
  'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/hamster-facts-about-small-mammals-as-pets-thinkstock-155233157.jpg'
  
];