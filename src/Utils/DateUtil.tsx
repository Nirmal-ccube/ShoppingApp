import { format } from 'date-fns';

export default class DateUtil {

    static getFormattedDate(timestamp: number): string {
        const formattedDate = format(new Date(timestamp), 'yyyy-MMM-dd');
        return formattedDate
    }   

}

