import { formatDistance, subDays } from 'date-fns'
import date from "date-fns";
console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));

