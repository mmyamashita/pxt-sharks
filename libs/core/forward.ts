/**
 * Blocks for driving the Kitronik Servo:Lite Board
 */
//% weight=100 color=#000000 icon="\uf01b" block="Forward"
namespace forward {

	/************************************************************************************************************************************************
	* micro:bit Servo:Lite / :MOVE mini blocks
	************************************************************************************************************************************************/

    /*some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */
    const microSecInASecond = 1000000
    let distancePerSec = 100
    let numberOfDegreesPerSec = 200

    /**
     * Drives forwards. Call stop to stop
     */
    //% block="drive forward"
    export function forward(): void {
        pins.servoWritePin(AnalogPin.P1, 115);
        pins.servoWritePin(AnalogPin.P2, 0);
    }
	/**
	 * Stop for 360 servos.
	 * rather than write 90, which may not stop the servo moving if it is out of trim
	 * this stops sending servo pulses, which has the same effect.
	 * On a normal servo this will stop the servo where it is, rather than return it to neutral position.
	 * It will also not provide any holding force.
     */
    //% blockId=kitronik_servolite_servos_stop
    //% block="stop"
    export function stop(): void {
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
    }

	/**
	 * Sends servos to 'neutral' position.
	 * On a well trimmed 360 this is stationary, on a normal servo this is 90 degrees.
     */
    //% block="goto neutral position"
    export function neutral(): void {
        pins.servoWritePin(AnalogPin.P1, 90);
        pins.servoWritePin(AnalogPin.P2, 90);
    }

    /**
     * Drives forwards the requested distance and then stops
     * @param howFar distance to move
     */
    //% block="drive forwards %howFar|distance"
    export function driveForwards(howFar: number): void {
        let timeToWait = (howFar * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        forward();
        control.waitMicros(timeToWait);
        stop();
    }
    /**
     * Allows the setting of the :MOVE mini forward / reverse speed.
     * This allows tuning for the move x distance commands
     * @param DegPerSec : How many degrees per second the mini does.
     */
    //% block="calibrate forward speed to %DistPerSec|mm per second"
     function setDistancePerSecond(distPerSec: number): void {
        distancePerSec = 100
    }
}
