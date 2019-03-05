

class Game{
	constructor( options ){
		this.displayArea = $( options.displayArea );
		this.backCardImage = options.cardBackImage;
		this.frontCardImages = options.cardFrontImages;
		this.cards = [];
		this.clickedCards = [];

		this.handleChildCardClicked = this.handleChildCardClicked.bind( this );
	}
	createCards(){
		var cardImages = this.frontCardImages.concat(this.frontCardImages);
		for( var imageIndex = 0; imageIndex < cardImages.length; imageIndex++){
			var currentCard = new Card(
				this.backCardImage, 
				cardImages[imageIndex], 
				this.handleChildCardClicked
			);
			this.cards.push( currentCard );
			var currentCardDom = currentCard.render();
			this.displayArea.append( currentCardDom);
		}
	}
	handleChildCardClicked( cardThatWasClicked ){
		if( this.clickedCards.length < 2 ){
			this.clickedCards.push( cardThatWasClicked );
			cardThatWasClicked.reveal();
		}
		if( this.clickedCards.length ===2 ){
			debugger;
			if( this.clickedCards[0].getValue() === this.clickedCards[1].getValue()){
				console.log('they match')
			} else {
				console.log('they do not match');
			}
		}
	}
}



















