'use strict';
pxsim.noRefCounting();
pxsim.setTitle("radio");
pxsim.setConfigData({}, {});


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = (1.25 * 25.4);
    s.tmp_0 = r0;
    r0 = globals.diam___339;
    r0 = s.tmp_0;
    globals.diam___339 = (r0);
    r0 = globals.diam___339;
    s.tmp_0 = r0;
    r0 = (s.tmp_0 * 3.14);
    s.tmp_1 = r0;
    r0 = globals.distancePerSec___340;
    r0 = s.tmp_1;
    globals.distancePerSec___340 = (r0);
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"radio.ts","functionName":"<main>"}
_main___P1.continuations = [  ]


setupDebugger(1)
