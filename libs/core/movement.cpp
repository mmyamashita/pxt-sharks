#include "pxt.h"


namespace forward {
  /**
   * Get the current compass heading in degrees.
   */
  //% help=input/compass-heading
  //% weight=56
  //% blockId=device_heading block="compass heading (°)" blockGap=8
  //% parts="compass"
  int compassHeading() {
      return uBit.compass.heading();
  }

  /**
 * Gets the number of milliseconds elapsed since power on.
 */
  //% help=input/running-time weight=50 blockGap=8
  //% blockId=device_get_running_time block="running time (ms)"
  int runningTime() {
    return system_timer_current_time();
  }
}
