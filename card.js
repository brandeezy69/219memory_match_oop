


class Card{
	constructor( backImage, frontImage, clickCallback ){
		this.images = {
			front: frontImage,
			back: backImage
		}
		this.callbacks = {
			click: clickCallback
		}
		this.domElements = {
			container: null,
			frontImage: null,
			backImage: null
		}
		this.handleClick = this.handleClick.bind( this );
		this.hide = this.hide.bind(this);
	}
	getValue(){
		return this.images.front;
	}
	handleClick(){
		console.log('card was clicked');
		this.callbacks.click( this );
	}
	reveal(){
		this.domElements.backImage.hide();
	}
	hide(){
		this.domElements.backImage.show();
	}
	hideCardIn3Seconds(){
		setTimeout( this.hide, 3000 )
	}
	render(){
		this.domElements.container = $("<div>",{
			'class': 'cardContainer'
		});
		this.domElements.container.click( this.handleClick );
		this.domElements.backImage = $("<div>",{
			'class': 'back',
			css: {
				'background-image': `url(${this.images.back})`
			}
		});
		this.domElements.frontImage = $("<div>",{
			'class': 'front',
			css: {
				'background-image': `url(${this.images.front})`
			}
		});
		this.domElements.container.append(this.domElements.frontImage, this.domElements.backImage );
		return this.domElements.container;
	}
}





















