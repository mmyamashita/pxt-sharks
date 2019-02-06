/**
 * Blocks for turning Buggy
 */

 /**
 Options for turning right and left
 */

 enum Right {
   //% block="180"
   OneEighty=180,
   //%block="90"
   Ninety=90,
   //%block="60"
   Sixty=64,
   //%block="45"
   FortyFive=45,
   //%block="30"
   Thirty=27,
 }

 enum Left {
   //% block="180"
   OneEighty=180,
   //%block="90"
   Ninety=90,
   //%block="60"
   Sixty=64,
   //%block="45"
   FortyFive=45,
   //%block="30"
   Thirty=27,
 }

 enum Forward{
   //%block="1 light"
   Once=1,
   //%block="2 lights"
   Twice=2,
   //%block="3 lights"
   Thrice=3,
   //%block="4 lights"
   Fourth=4
 }

//% weight=100 color=#d32cd3 icon="\uf0a9" block="Turning"
namespace turn {
    /*some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */
    const microSecInASecond = 1000000
    let numberOfDegreesPerSec = 245
    let total=0;
    let unit=0;

    //% blockId=kitronik_servolite_servos_stop
    //% block="stop"
    //%deprecated=true
    export function stop(): void {
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
        control.waitMicros(1000000)
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
          case Right.OneEighty:return 180
          case Right.Ninety:return 90;
          case Right.Sixty:return 63.5;
          case Right.FortyFive:return 45;
          case Right.Thirty:return 26.6;
          default: return 90
        }
    }
    //%block="Turn RIGHT |%deg"
    //%deg.shadow="device_turnRight"
    export function turnRight(deg:number): void {
        let timeToWait = (deg * microSecInASecond) / 150;// calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 160);
        pins.servoWritePin(AnalogPin.P2, 160);
        control.waitMicros(timeToWait);
        if (deg==90||deg==45||deg==180){
          total=total+deg;
        }
        else if (deg==63.5){
          total=total+60;
        }
        else if(deg==26.6){
          total=total+30;
        }
        stop();
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
          case Left.OneEighty:return 180;
          case Left.Ninety:return 90;
          case Left.Sixty:return 63.5;
          case Left.FortyFive:return 45;
          case Left.Thirty:return 26.6;
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
    //% block="Turn LEFT |%deg"
    //% deg.shadow="device_turnLeft"
    export function turnLeft(deg:number): void {
        let timeToWait = (deg * microSecInASecond) / 150;// calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 20);
        pins.servoWritePin(AnalogPin.P2, 20);
        control.waitMicros(timeToWait);
        stop();
        if (deg==90||deg==45||deg==180){
          total=total-deg;
        }
        else if (deg==63.5){
          total=total-60;
        }
        else if(deg==26.6){
          total=total-30;
        }
    }
    //%blockId=device_unit
    //%block="forward"
    //%blockHidden=true
    //%color=#5b5b5b
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
//% weight=100 color=#5b5b5b icon="\uf01b" block="Forward"
namespace forward {

	/************************************************************************************************************************************************
	* micro:bit Servo:Lite / :MOVE mini blocks
	************************************************************************************************************************************************/

    /*some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */
    const microSecInASecond = 1000000
    const diam = 1.25*25.4;
    let distancePerSec = diam*3.14;

    /**
     * Drives forwards. Call stop to stop
     */
    //% block="Drive |%lights 1 light" color=#5b5b5b
    //% lights.shadow="device_unit"
    export function forward1(lights:number): void {
        let timeToWait = (lights * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 115);
        pins.servoWritePin(AnalogPin.P2, 0);
        control.waitMicros(timeToWait);
        stop();
    }

    //% block="Drive |%lights 2 lights" color=#5b5b5b
    //% lights.shadow="device_unit"
    export function forward2(lights:number): void {
        let timeToWait = (lights * 2 * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 150);
        pins.servoWritePin(AnalogPin.P2, 0);
        control.waitMicros(timeToWait);
        stop();
    }

    //% block="Drive |%lights 3 lights" color=#5b5b5b
    //% lights.shadow="device_unit"
    export function forward3(lights:number): void {
        let timeToWait = (lights * 3 * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 150);
        pins.servoWritePin(AnalogPin.P2, 0);
        control.waitMicros(timeToWait);
        stop();
    }

    //% block="Drive |%lights 4 lights" color=#5b5b5b
    //% lights.shadow="device_unit"
    export function forward4(lights:number): void {
        let timeToWait = (lights * 4 * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.P1, 150);
        pins.servoWritePin(AnalogPin.P2, 0);
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
        control.waitMicros(500000)
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
