import { TScheduleOption } from "./context"
import ScheduleDaily from "./ScheduleDaily"
import ScheduleDate from "./ScheduleDate"
import ScheduleWeekly from "./ScheduleWeekly"

export const getScheduleComponent = (schedule: TScheduleOption) => {
  switch (schedule) {
    case "date": {
      return <ScheduleDate />
    }
    case "daily": {
      return <ScheduleDaily />
    }
    case "weekly": {
      return <ScheduleWeekly />
    }
    default:
      return
  }
}
