import { events } from './events';

export function DiscordEvent(name: events) {
  return function (constructFN: Function) {
    constructFN.prototype.eventType = name;
  };
}

/* 
usage

@DiscordEvent('event-type')
class (classname) extends EventHandler {
  execute(e) {

  }
}

module.exports = {
  class: new (classname)();
}
*/
