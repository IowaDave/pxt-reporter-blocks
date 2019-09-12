/**
 * Custom blocks
 * Example by David Sparks
 * September 2019
 *
 * Paste this code into the custom.ts file of 
 * a MakeCode project, replacing what is there.
 * 
 */
//% weight=100 color=#0fbc11 icon="\uf0c3"
namespace custom {
    /**
     * return a string containing
     * a randomly-selected answer
     * from the classic Magic 8 Ball
     * game
     */
    //% block="8-Ball"
    export function eightBall(): string {
        // private array of 8-ball answers
        // Source: https://en.wikipedia.org/wiki/Magic_8-Ball
        // Accessed 9/11/2019
        let ballAnswer: string[] = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes - definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful."
        ];
        return ballAnswer[Math.randomRange(0, 19)];
    }

}
