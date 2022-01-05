import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import { DateUtils } from "react-day-picker"
import { useState } from "react"

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const numberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate) // clone
  const end = new Date(endDate) // clone
  let dayCount = 0

  while (end > start) {
    dayCount ++
    start.setDate(start.getDate() + 1)
  }
  return dayCount
}

const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale })
  return DateUtils.isDate(parsed) ? parsed : null
}

const formatDate = (date, format, locale) => dateFnsFormat(date, format, {locale})

const format = 'dd MMM yyyy'

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <div className="date-range-picker-container">
      <div className="mb-2 py-2">
        <label className="block">From:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
          value={startDate}
          parseDate={parseDate}
          placeholder={`${dateFnsFormat(new Date(), format)}`}
          dayPickerProps={{
            modifiers: {
              disabled: {
                before: new Date()
              }
            }
          }}
          onDayChange={(day) => {
            setStartDate(day)
            if (numberOfNightsBetweenDates(day, endDate) < 1) {
              const newEndDate = new Date(day)
              newEndDate.setDate(newEndDate.getDate() + 1)
              setEndDate(newEndDate)
            }
          }}
        />
      </div>
      <div className="mb-2 py-2">
        <label className="block">To:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
          value={endDate}
          parseDate={parseDate}
          placeholder={`${dateFnsFormat(new Date(), format)}`}
          dayPickerProps={{
            modifiers: {
              disabled: [
                startDate,
                {
                  before: startDate
                }
              ]
            }
          }}
          onDayChange={(day) => {
            setEndDate(day)
          }}
        />
      </div>
    </div>
  )
}
