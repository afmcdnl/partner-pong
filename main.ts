/**
 * Basically, I decided to make a version of Pong where 2 players interact to try and defeat each other.
 */
/**
 * In this version, I used a combination of radio and game functions to make a way for a player to control the other player's ball.
 */
/**
 * Whenever you move your paddle here, the ball on the other person's screen will move in accordance with your paddle.
 */
/**
 * If you want to test this out, you should probably not play by yourself (Trust me, it's hard.). I have given each player 3 lives. Good luck!
 */
/**
 * When the program starts:
 * 
 * -Set radio Group to 1
 * 
 * - Show the words "This is Pong, but when you move, the other person's ball moves too!"
 * 
 * -Show the words "Press A to move left, B to move right"
 * 
 * -Show the words "Ready?"
 * 
 * -Show the words "Go!"
 * 
 * -Set Variable "Sprite 1" to create a sprite at (2,4)
 * 
 * -Set Variable "Sprite 2" to create a sprite at (2,0)
 */
/**
 * Forever while the program is running:
 * 
 * -Change the y value of Sprite 2 by 1
 * 
 * -Wait for 500 milliseconds
 * 
 * If Sprite 2 is touching Sprite 1:
 * 
 *    -Set the y value of Sprite 2 to 0
 * 
 *    Else If Sprite 2 is touching an edge:
 * 
 *       -Change the variable "lives" by -1
 * 
 * If the variable "lives" is equal to 0,
 * 
 * -Show the words "Game Over"
 */
/**
 * When button A is pressed:
 * 
 * -Change the x value of Sprite 1 by -1
 * 
 * -Send number 1 via radio
 */
/**
 * When button B is pressed:
 * 
 * -Change the x value of Sprite 1 by 1
 * 
 * -Send the word "hi" via radio
 */
/**
 * When the radio receives a number:
 * 
 * -Change the x value of Sprite 2 by -1
 */
/**
 * When the radio receives a string:
 * 
 * -Change the x value of Sprite 2 by 1
 */
radio.onReceivedNumber(function (receivedNumber) {
    Sprite_2.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.A, function () {
    Sprite_1.change(LedSpriteProperty.X, -1)
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    Sprite_2.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    Sprite_1.change(LedSpriteProperty.X, 1)
    radio.sendString("Hi")
})
let Sprite_2: game.LedSprite = null
let Sprite_1: game.LedSprite = null
basic.clearScreen()
radio.setGroup(1)
Sprite_1 = game.createSprite(2, 4)
Sprite_2 = game.createSprite(2, 0)
let lives = 3
basic.forever(function () {
    Sprite_2.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    if (Sprite_2.isTouching(Sprite_1)) {
        Sprite_2.set(LedSpriteProperty.Y, 0)
    } else if (Sprite_2.isTouchingEdge()) {
        lives += -1
        Sprite_2.set(LedSpriteProperty.Y, 0)
    }
    if (lives == 0) {
        basic.showString("Game Over")
    }
})
