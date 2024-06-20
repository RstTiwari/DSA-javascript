  // Theses are the Following Phases of EventLoops in Nodejs

  
/**
   *Timers   => Pending CallBacks  => idle Prepare => poll => check => close Callbacks
*/    

/**
 * Timers =>  this phase executes callbacks scheduled by setTimeout() and setInterval().
 * 
 * A timer specifies the threshold after which a provided callback may be executed rather than the exact time a person wants it to be
 *  executed. Timers callbacks will run as early as they can be scheduled after the specified amount of time has passed; 
 * however, Operating System scheduling or the running of other callbacks may delay them.
 */

