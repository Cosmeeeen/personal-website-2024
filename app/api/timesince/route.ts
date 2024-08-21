import moment from 'moment';

export async function GET(req: any) {
  const {searchParams} = new URL(req.url);
  const date = searchParams.get("date") ?? '25-09-2001-11:00';
  const formatedDate = moment(date, 'DD-MM-YYYY-hh:mm');
  const difference = moment.duration(moment().diff(formatedDate));
  const formatedDifference = `${difference.years() > 0 ? difference.years() + ' years, ' : ''}${difference.months() > 0 ? difference.months() + ' months, ' : ''}${difference.days() > 0 ? difference.days() + ' days, ' : ''}${difference.hours() > 0 ? difference.hours() + ' hours, ' : ''}${difference.minutes() > 0 ? difference.minutes() + ' minutes, ' : ''}${difference.seconds() + ' seconds.'}`;
  const result = `${Math.floor(difference.asHours())} total hours. ${formatedDifference}`;

  return new Response(
    result
  );
}
