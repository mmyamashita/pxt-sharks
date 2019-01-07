/**
 * Blocks for turning Buggy
 */

 /**
 Options for turning right and left
 */

 enum Right {
   //%block="90"
   //% jres=icons.90R
   Ninety=90,
   //%block="60"
   Sixty=60,
   //%block="45"
   FortyFive=45,
   //%block="30"
   Thirty=30,
   //%block="15"
   Fifeteen=15
 }

 enum Left {
   //%block="90"
   //% jres=icons.90L
   Ninety=90,
   //%block="60"
   Sixty=60,
   //%block="45"
   FortyFive=45,
   //%block="30"
   Thirty=30,
   //% block="15"
   Fifeteen=15
 }

 enum Forward{
   //%block="1"
   Once=1,
   //%block="2"
   Twice=2,
   //%block="3"
   Thrice=3,
   //%block="4"
   Fourth=4
 }

 enum Degrees{
   //%block="mul of 15"
   Little=1,
   //%block="mul of 30"
   Medium=2,
   //%block="mul of 45"
   Half=3,
   //%block="mul of 60"
   More=4,
   //%block="mul of 90"
   All=6
 }

//% weight=100 color=#8042f4 icon="\uf0a9" block="Turning"
namespace turn {
    /*some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */
    const microSecInASecond = 1000000
    let numberOfDegreesPerSec = 320
    let total=0;
    let unit=0;

    //% blockId=kitronik_servolite_servos_stop
    //% block="stop"
    //%deprecated=true
    export function stop(): void {
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
        control.waitMicros(200000);
    }

    /**
     * returns number of degrees to turn (right)
     */
    //%blockId=device_turnRight
    //%block=" %degrees |degrees"
    //%blockHidden=true
     export function rightOptions (degrees?: Right):number {
        if(degrees==null) degrees=Right.Ninety
        switch(degrees){
          case Right.Ninety:return 90;
          case Right.Sixty:return 60;
          case Right.FortyFive:return 45;
          case Right.Thirty:return 30;
          default: return 90
        }
    }
    //%block="Turn right |%deg"
    //%deg.shadow="device_turnRight"
    export function turnRight(deg:number): void {
        let timeToWait = (deg * microSecInASecond) / numberOfDegreesPerSec;// calculation done this way round to avoid zero rounding
        total=total+deg;
        pins.servoWritePin(AnalogPin.P1, 130);
        pins.servoWritePin(AnalogPin.P2, 130);
        control.waitMicros(timeToWait);
        stop()
    }

    /**
     * returns number of degrees to turn (left)
     */
    //%blockId=device_turnLeft
    //%block=" %degrees |degrees"
    //%blockHidden=true
     export function leftOptions (degrees?: Left):number {
        if(degrees==null) degrees=Left.Ninety
        switch(degrees){
          case Left.Ninety:return 90;
          case Left.Sixty:return 60;
          case Left.FortyFive:return 45;
          case Left.Thirty:return 30;
          default: return 90
        }
    }
    /**
    * Turns left through the requested degrees and then stops
    * needs NumberOfDegreesPerSec tuned to make accurate, as it uses
    * a simple turn, wait, stop method.
    * Runs the servos at slower than the right function to reduce wheel slip
    * @param deg how far to turn, eg: 90
    */
    //% block="Turn left |%deg"
    //% deg.shadow="device_turnLeft"
    export function turnLeft(deg:number): void {
        let timeToWait = (deg * microSecInASecond) / numberOfDegreesPerSec;// calculation done this way round to avoid zero rounding
        total=total-deg;
        pins.servoWritePin(AnalogPin.P1, 25);
        pins.servoWritePin(AnalogPin.P2, 25);
        control.waitMicros(timeToWait);
        stop()
    }
    //%blockId=device_unit
    //%block="forward"
    //%blockHidden=false
    //%color=#000000
    export function totalDegrees():number{
      let w=total/15
      if (w%6==0){
        unit=7*25.4;
      }
      else if(w%2==0){
        unit=15.65*25.4;
      }
      else if (w%3==0){
        unit=9.8*25.4;
      }
      else{
        unit=196*25.4;
      }
      return unit;
    }
}

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
    const diam = 2.2*25.4;
    let distancePerSec = diam*3.14;

    //%blockId=device_forwardOptions
    //%block="%distance |lights %unit"
    //%unit.shadow="device_unit"
    //%blockHidden=false
    export function forwardOptions(distance: Forward, unit:number):number{
      if(distance==null) distance=Forward.Once;
      switch(distance){
        case Forward.Once: return 1*unit;
        case Forward.Twice: return 2*unit;
        case Forward.Thrice: return 3*unit;
        case Forward.Fourth:return 4*unit;
        default: return 1*unit
      }
    }
    /**
     * Drives forwards. Call stop to stop
     */
    //% block="drive |%lights"
    //% lights.shadow="device_forwardOptions"
    export function forward(lights:number): void {
        let timeToWait = (lights * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 150);
        pins.servoWritePin(AnalogPin.P2, 10);
        control.waitMicros(timeToWait);
        stop();
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
    //%deprecated=true
    export function neutral(): void {
        pins.servoWritePin(AnalogPin.P1, 90);
        pins.servoWritePin(AnalogPin.P2, 90);
    }

}
