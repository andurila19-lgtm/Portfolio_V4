import { useEffect, useState } from "react";
import { format, formatDistanceToNow, isToday, isValid } from "date-fns";

interface ChatTimeProps {
  datetime: string;
}

const ChatTime = ({ datetime }: ChatTimeProps) => {
  const parsedDate = datetime ? new Date(datetime) : null;
  const validDate = parsedDate && isValid(parsedDate) ? parsedDate : null;

  const [formattedTime, setFormattedTime] = useState(() =>
    validDate ? formatDistanceToNow(validDate, { addSuffix: true }) : "",
  );

  useEffect(() => {
    if (!validDate) return;

    const interval = setInterval(() => {
      setFormattedTime(
        formatDistanceToNow(validDate, { addSuffix: true }),
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [validDate]);

  if (!validDate) return null;

  return (
    <div className="text-xs font-medium tracking-wide text-neutral-500">
      {isToday(validDate)
        ? formattedTime
        : format(validDate, "dd/MM/yyyy, HH:mm")}
    </div>
  );
};

export default ChatTime;
