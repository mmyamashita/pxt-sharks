/**
 * Blocks for driving the Kitronik Servo:Lite Board
 */
//% weight=100 color=#000000 icon="\uf1b9" block="Buggy1"
namespace buggy1 {

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
    //% blockId=kitronik_servolite_servos_forward
    //% block="drive forward"
    //%deprecated=true
    export function forward(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 180);
    }

    /**
     * Drives backwards. Call stop to stop
     */
    //% blockId=kitronik_servolite_servos_backward
    //% block="drive backward"
    //% deprecated=true
    export function backward(): void {
        pins.servoWritePin(AnalogPin.P1, 180);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

    /**
	* Turns left. Call stop to stop
	*/
    //% blockId=kitronik_servolite_servos_left
    //% block="turn left"
    //% deprecated=true
    export function left(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

	/**
	 * Turns right. Call ``stop`` to stop
	 */
    //% blockId=kitronik_servolite_servos_right
    //% block="turn right"
    //% deprecated=true 
    export function right(): void {
        pins.servoWritePin(AnalogPin.P1, 180);
        pins.servoWritePin(AnalogPin.P2, 180);
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
    //% blockId=kitronik_servolite_servos_neutral
    //% block="goto neutral position"
    export function neutral(): void {
        pins.servoWritePin(AnalogPin.P1, 90);
        pins.servoWritePin(AnalogPin.P2, 90);
    }

    /**
     * Drives forwards the requested distance and then stops
     * @param howFar distance to move
     */
    //% blockId=kitronik_servolite_drive_forwards
    //% block="drive forwards %howFar|distance" 
    export function driveForwards(howFar: number): void {
        let timeToWait = (howFar * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        forward();
        control.waitMicros(timeToWait);
        stop();
    }

    /**
     * Drives backwards the requested distance and then stops
     * @param howFar distance to move
     */
    //% blockId=kitronik_servolite_drive_backwards
    //% block="drive backwards %howFar|distance" 
    //% deprecated=true
    export function driveBackwards(howFar: number): void {
        let timeToWait = (howFar * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        backward();
        control.waitMicros(timeToWait);
        stop();
    }

    /**
     * Turns right through the requested degrees and then stops
     * needs NumberOfDegreesPerSec tuned to make accurate, as it uses
     * a simple turn, wait, stop method.
     * Runs the servos at slower than the right function to reduce wheel slip
     * @param deg how far to turn, eg: 90
     */
    //% blockId=kitronik_servolite_turn_right
    //% block="turn right %deg|degrees"
    export function turnRight(deg: number): void {
        let timeToWait = (deg * microSecInASecond) / numberOfDegreesPerSec;// calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 130);
        pins.servoWritePin(AnalogPin.P2, 130);
        control.waitMicros(timeToWait);
        stop();
    }

    /**
    * Turns left through the requested degrees and then stops
    * needs NumberOfDegreesPerSec tuned to make accurate, as it uses
    * a simple turn, wait, stop method.
    * Runs the servos at slower than the right function to reduce wheel slip
    * @param deg how far to turn, eg: 90
    */
    //% blockId=kitronik_servolite_turn_left
    //% block="turn left %deg|degrees"
    export function turnLeft(deg: number): void {
        let timeToWait = (deg * microSecInASecond) / numberOfDegreesPerSec;// calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 50);
        pins.servoWritePin(AnalogPin.P2, 50);
        control.waitMicros(timeToWait);
        stop()
    }

	/**
     * Allows the setting of the :MOVE mini turn speed.
     * This allows tuning for the turn x degrees commands
     * @param degPerSec : How many degrees per second the mini does.
     */
    //% blockId=kitronik_servolite_set_turn_speed_param
    //% block="calibrate turn speed to %DegPerSec|degrees per second" 
     function setDegreesPerSecond(degPerSec: number): void {
        numberOfDegreesPerSec = degPerSec
    }

    /**
     * Allows the setting of the :MOVE mini forward / reverse speed.
     * This allows tuning for the move x distance commands
     * @param DegPerSec : How many degrees per second the mini does.
     */
    //% blockId=kitronik_servolite_set_movement_speed_param 
    //% block="calibrate forward speed to %DistPerSec|mm per second"
     function setDistancePerSecond(distPerSec: number): void {
        distancePerSec = distPerSec
    }
}