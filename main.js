let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random()*2)
        
    }, 
          
    toString :function() {
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }
        
    },

 
    toHTML: function() {
        let image = document.createElement("img");
        if (this.state === 0) {
            image.src="./images/coin1.jpeg"
        } else {
            image.src="./images/coin2.jpeg"
           }
        return image;; 
    }
    
}    


function display20Flips() {
    let disImage = document.createElement("body")
    for ( i = 0; i < 20; i++) {
        coin.flip()
        
        disImage.append(coin.toString())
      
        document.body.append(disImage)
      
    
    }


    
}
display20Flips();

function display20Images() {
    let disImage = document.createElement("body")
    for (let j = 0; j < 20; j++) {
     coin.flip()
    disImage.append(coin.toHTML())
     document.body.append(disImage)
    }
    
} 
display20Images()
