canvas.addEventListener('click', (e) => {
    collisionBlocks.filter(block => block.nature === 'aiguillage').forEach(aiguillage => {
        if (
            e.offsetX >= aiguillage.position.x + aiguillage.imageOffsetLeft &&
            e.offsetX <= aiguillage.position.x + aiguillage.width + aiguillage.imageOffsetLeft &&
            e.offsetY >= aiguillage.position.y + aiguillage.imageOffsetTop &&
            e.offsetY <= aiguillage.position.y + aiguillage.height + aiguillage.imageOffsetTop
        ) {
            aiguillage.state = aiguillage.state === 1
                ? 2
                : 1;
            
            aiguillage.switchSprite(aiguillage.state);
        }
    });
})