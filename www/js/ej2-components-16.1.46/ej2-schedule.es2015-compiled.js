'use strict';

System.register(['@syncfusion/ej2-base', '@syncfusion/ej2-navigations', '@syncfusion/ej2-calendars', '@syncfusion/ej2-popups', '@syncfusion/ej2-data', '@syncfusion/ej2-buttons', '@syncfusion/ej2-inputs', '@syncfusion/ej2-dropdowns', '@syncfusion/ej2-lists'], function (_export, _context) {
    "use strict";

    var Animation, Browser, ChildProperty, Complex, Component, Event, EventHandler, Internationalization, KeyboardEvents, L10n, NotifyPropertyChanges, Property, Touch, addClass, append, cldrData, closest, compile, createElement, extend, formatUnit, getDefaultDateObject, getValue, isNullOrUndefined, prepend, remove, removeClass, setStyleAttribute, Toolbar, Calendar, DatePicker, DateTimePicker, Dialog, Popup, Tooltip, DataManager, Predicate, Query, Button, CheckBox, RadioButton, FormValidator, Input, NumericTextBox, DropDownList, ListBase, _get, _typeof, _createClass, _cellClick, cellDoubleClick, actionBegin, actionComplete, actionFailure, navigating, renderCell, _eventClick, eventRendered, dataBinding, dataBound, popupOpen, initialLoad, initialEnd, dataReady, contentReady, scroll, scrollUiUpdate, uiUpdate, documentClick, _cellMouseDown, WEEK_LENGTH, MS_PER_DAY, MS_PER_MINUTE, scrollWidth, ROOT, RTL, DEVICE, ICON, ENABLE_CLASS, DISABLE_CLASS, TABLE_CONTAINER_CLASS, SCHEDULE_TABLE_CLASS, ALLDAY_CELLS_CLASS, HEADER_POPUP_CLASS, HEADER_CALENDAR_CLASS, ALLDAY_ROW_CLASS, CONTENT_TABLE_CLASS, WORK_CELLS_CLASS, WORK_HOURS_CLASS, POPUP_OPEN, DATE_HEADER_WRAP_CLASS, DATE_HEADER_CONTAINER_CLASS, HEADER_CELLS_CLASS, WORKDAY_CLASS, OTHERMONTH_CLASS, CURRENT_DAY_CLASS, CURRENTDATE_CLASS, CURRENT_PANEL_CLASS, PREVIOUS_PANEL_CLASS, NEXT_PANEL_CLASS, TRANSLATE_CLASS, LEFT_INDENT_CLASS, LEFT_INDENT_WRAP_CLASS, TIME_CELLS_WRAP_CLASS, TIME_CELLS_CLASS, ALTERNATE_CELLS_CLASS, CURRENT_TIME_CLASS, CURRENT_TIMELINE_CLASS, PREVIOUS_TIMELINE_CLASS, HIDE_CHILDS_CLASS, SCROLL_CONTAINER_CLASS, WRAPPER_CLASS, TIMELINE_WRAPPER_CLASS, APPOINTMENT_WRAPPER_CLASS, DAY_WRAPPER_CLASS, TOOLBAR_CONTAINER, HEADER_TOOLBAR, SELECTED_CELL_CLASS, APPOINTMENT_WRAP_CLASS, APPOINTMENT_CONTAINER_CLASS, APPOINTMENT_CLASS, APPOINTMENT_BORDER, APPOINTMENT_DETAILS, APPOINTMENT_SUBJECT_WRAP, APPOINTMENT_SUBJECT, APPOINTMENT_TIME, APPOINTMENT_LOCATION, TABLE_WRAP_CLASS, OUTER_TABLE_CLASS, CONTENT_WRAP_CLASS, AGENDA_CELLS_CLASS, AGENDA_CURRENT_DAY_CLASS, AGENDA_HEADER_CLASS, NAVIGATE_CLASS, DATE_HEADER_CLASS, AGENDA_HIDDEN_CLASS, AGENDA_ALIGN_CLASS, AGENDA_DAY_BORDER_CLASS, AGENDA_DATETIME_CLASS, AGENDA_EMPTY_EVENT_CLASS, AGENDA_NO_EVENT_CLASS, APPOINTMENT_INDICATOR_CLASS, EVENT_INDICATOR_CLASS, EVENT_ICON_UP_CLASS, EVENT_ICON_DOWN_CLASS, EVENT_ICON_LEFT_CLASS, EVENT_ICON_RIGHT_CLASS, EVENT_RECURRENCE_ICON_CLASS, EVENT_RECURRENCE_EDIT_ICON_CLASS, HEADER_ROW_CLASS, ALLDAY_APPOINTMENT_WRAPPER_CLASS, ALLDAY_APPOINTMENT_CLASS, ALLDAY_WRAPPER_CLASS, EVENT_COUNT_CLASS, ROW_COUNT_WRAPPER_CLASS, ALLDAY_APPOINTMENT_SECTION_CLASS, APPOINTMENT_ROW_EXPAND_CLASS, APPOINTMENT_ROW_COLLAPSE_CLASS, MORE_INDICATOR_CLASS, QUICK_POPUP_ROOT_CLASS, QUICK_POPUP_CLASS, QUICK_POPUP_SUBJECT_CLASS, QUICK_POPUP_TABLE_CLASS, QUICK_POPUP_ICON_CLASS, QUICK_POPUP_CLOSE_ICON_CLASS, QUICK_POPUP_EDIT_ICON_CLASS, QUICK_POPUP_CONTENT_CLASS, QUICK_POPUP_DATE_TIME_DETAILS_CLASS, DEVICE_DATE_TIME_DETAILS_CLASS, DEVICE_RECURRENCE_SUMMARY_CLASS, QUICK_POPUP_LOCATION_DETAILS_CLASS, QUICK_POPUP_FOOTER_CLASS, QUICK_POPUP_EVENT_DETAILS_CLASS, QUICK_POPUP_EVENT_TITLE_CLASS, QUICK_POPUP_EVENT_CREATE_CLASS, QUICK_POPUP_EDIT_EVENT_CLASS, TOOLTIP_CLOSE_CLASS, QUICK_POPUP_DELETE_EVENT_CLASS, QUICK_POPUP_TEXT_ALIGN_CLASS, MORE_POPUP_WRAPPER_CLASS, SELECT_POPUP_WRAPPER_CLASS, MORE_EVENT_POPUP_CLASS, MORE_EVENT_HEADER_CLASS, MORE_EVENT_DATE_HEADER_CLASS, MORE_EVENT_HEADER_DAY_CLASS, MORE_EVENT_HEADER_DATE_CLASS, MORE_EVENT_CLOSE_CLASS, MORE_EVENT_CONTENT_CLASS, MORE_EVENT_WRAPPER_CLASS, QUICK_DIALOG_CLASS, DIALOG_FOOTER_CONTENT_CLASS, QUICK_DIALOG_EDIT_EVENT_CLASS, QUICK_DIALOG_EDIT_SERIES_CLASS, QUICK_DIALOG_DELETE_CLASS, QUICK_DIALOG_CANCEL_CLASS, QUICK_DIALOG_ALERT_BTN_CLASS, QUICK_DIALOG_HIDE_BTN_CLASS, EVENT_WINDOW_DIALOG_CLASS, EVENT_WINDOW_DEVICE_CLASS, EVENT_WINDOW_FORM_DIV_CLASS, EVENT_WINDOW_FORM_CLASS, EVENT_WINDOW_ALLDAY_TZ_DIV_CLASS, EVENT_WINDOW_ALL_DAY_CLASS, EVENT_WINDOW_TZ_CLASS, EVENT_WINDOW_REPEAT_DIV_CLASS, EVENT_WINDOW_REPEAT_CLASS, EVENT_WINDOW_TITLE_LOCATION_DIV_CLASS, EVENT_WINDOW_TITLE_CLASS, EVENT_WINDOW_LOCATION_CLASS, EVENT_WINDOW_START_END_DIV_CLASS, EVENT_WINDOW_START_CLASS, EVENT_WINDOW_END_CLASS, EVENT_WINDOW_DESCRIPTION_CLASS, EVENT_WINDOW_TIME_ZONE_DIV_CLASS, EVENT_WINDOW_START_TZ_CLASS, EVENT_WINDOW_END_TZ_CLASS, EVENT_WINDOW_BACK_ICON_CLASS, EVENT_WINDOW_SAVE_ICON_CLASS, EVENT_WINDOW_DELETE_BUTTON_CLASS, EVENT_WINDOW_CANCEL_BUTTON_CLASS, EVENT_WINDOW_SAVE_BUTTON_CLASS, EVENT_WINDOW_TITLE_TEXT_CLASS, EVENT_WINDOW_ICON_DISABLE_CLASS, SELECTED_EVENT_EDIT_CLASS, SELECTED_EVENT_DELETE_CLASS, SELECTED_DATE_TIME_CLASS, SELECTED_CALENDER_CLASS, SELECTED_EVENT_TITLE_CLASS, SELECTED_EVENT_CONTAINER_CLASS, SELECTED_EVENT_CLOSE_CLASS, EVENT_TIME_ZONE_CLASS, EVENT_ZONE_DETAILS_CLASS, EVENT_DETAILS_CLASS, EVENT_NOTE_CLASS, EVENT_NOTE_DETAILS_CLASS, EVENT_EDIT_DISABLE_CLASS, ERROR_VALIDATION_CLASS, EVENT_TOOLTIP_ROOT_CLASS, ALLDAY_ROW_ANIMATE_CLASS, HeaderRenderer, Scroll, ScheduleTouch, KeyboardInteraction, Data, Timezone, localTimezoneName, timezoneData, startDateCollection, tempExcludeDate, dayIndex, maxOccurrence, tempViewDate, monthDay, DAYINDEX, MAXOCCURRENCE, LEAPYEAR, NORMALYEAR, WEEKPOS, TIMES, ON, EVERY, UNTIL, DAYS, WEEKS, MONTHS, YEARS, DAYINDEXOBJECT, EventBase, Crud, FieldValidator, QuickPopups, EventTooltip, __decorate$1, HEADER, INPUTWARAPPER, INPUTWARAPPERSIDE, REPEATELEMENT, REPEATINTERVAL, INTERVALCLASS, DAYWRAPPER, WEEKWRAPPER, WEEKPOSITION, YEAREXPANDERWRAPPER, YEAREXPANDERELEMENT, MONETHEXPANDERWRAPPER, MONTHEXPANDERELEMENT, MONTHEXPANDERCHECKBOXWRAPPER, FORMLEFT, FORMRIGHT, MONTHDAYWRAPPER, MONTHEXPANNDERELEM, MONTHPOS, MONTHWEEK, ENDON, MONTHEXPANDERLABEL, WEEKEXPANDERLABEL, ENDONLABEL, ENDONLEFT, MONTHDAYELEMENT, ENDONELEMENT, ENDONDATE, UNTILDATE, ENDONCOUNTWRAPPER, ENDONCOUNT, HIDEWRAPPER, RTLCLASS, PRIMARY, ACTIVE, RECURRENCETABLE, REPEATCONTENT, NONE, DAILY, WEEKLY, MONTHLY, YEARLY, NEVER, UNTIL$1, COUNT, TEXTFIELD, VALUEFIELD, LAST, REPEAT$1, REPEATEVERY, ON$1, END, RADIOLABEL, RULEUNTIL, RULEBYDAY, RULEBYMONTHDAY, RULEBYMONTH, RULEINTERVAL, RULECOUNT, RULESETPOS, RULEFREQ, RULEDAILY, RULEWEEKLY, RULEMONTHLY, RULEYEARLY, RULESUNDAY, RULEMONDAY, RULETUESDAY, RULEWEDNESDAY, RULETHURSDAY, RULEFRIDAY, RULESATURDAY, KEYSUNDAY, KEYMONDAY, KEYTUESDAY, KEYWEDNESDAY, KEYTHURSDAY, KEYFRIDAY, KEYSATURDAY, EQUAL, SEMICOLON, COMMA, FIRST, SECOND, THIRD, FOURTH, contentType, valueData, neverClassList, weekClassList, monthClassList, yearClassList, dailyClassList, noEndClassList, endOnCountClassList, endOnDateClassList, RecurrenceEditor, EVENT_FIELD, REPEAT_CONTAINER_CLASS, REPEAT_BUTTON_ICON_CLASS, REPEAT_BUTTON_CLASS, REPEAT_DIALOG_CLASS, HIDE_STYLE_CLASS, EventWindow, Render, __decorate$2, WorkHours, __decorate$4, Field, __decorate$3, EventSettings, __decorate, Schedule, ViewBase, WorkCellInteraction, AppointmentRendering, DATE_HEADER_TEMPLATE, MAJOR_SLOT_TEMPLATE, MINOR_SLOT_TEMPLATE, VerticalView, Day, Week, WorkWeek, EVENT_GAP, MonthEvent, Month, AgendaBase, Agenda, MonthAgenda;

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function getWeekFirstDate(date1, firstDayOfWeek) {
        var date = new Date(date1.getTime());
        firstDayOfWeek = (firstDayOfWeek - date.getDay() + 7 * -1) % 7;
        return new Date(date.setDate(date.getDate() + firstDayOfWeek));
    }
    function firstDateOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth());
    }
    function lastDateOfMonth(dt) {
        return new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
    }
    function getWeekNumber(dt) {
        var currentDate = new Date('' + dt).valueOf();
        var date = new Date(dt.getFullYear(), 0, 1).valueOf();
        var a = currentDate - date;
        return Math.ceil((a / MS_PER_DAY + new Date(date).getDay() + 1) / 7);
    }
    function setTime(date, time) {
        var tzOffsetBefore = date.getTimezoneOffset();
        var d = new Date(date.getTime() + time);
        var tzOffsetDiff = d.getTimezoneOffset() - tzOffsetBefore;
        date.setTime(d.getTime() + tzOffsetDiff * MS_PER_DAY);
        return date;
    }
    function resetTime(date) {
        date.setHours(0, 0, 0, 0);
        return date;
    }
    function getDateInMs(date) {
        return date.getTime() - new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0).getTime();
    }
    function addDays(date, i) {
        date = new Date('' + date);
        return new Date(date.setDate(date.getDate() + i));
    }
    function addMonths(date, i) {
        date = new Date('' + date);
        var day = date.getDate();
        date.setDate(1);
        date.setMonth(date.getMonth() + i);
        date.setDate(Math.min(day, getMaxDays(date)));
        return date;
    }
    function addYears(date, i) {
        date = new Date('' + date);
        var day = date.getDate();
        date.setDate(1);
        date.setFullYear(date.getFullYear() + i);
        date.setDate(Math.min(day, getMaxDays(date)));
        return date;
    }
    function getStartEndHours(date, startHour, endHour) {
        var date1 = new Date(date.getTime());
        date1.setHours(startHour.getHours());
        date1.setMinutes(startHour.getMinutes());
        date1.setSeconds(startHour.getSeconds());
        var date2 = new Date(date.getTime());
        if (endHour.getHours() === 0) {
            date2 = addDays(date2, 1);
        } else {
            date2.setHours(endHour.getHours());
            date2.setMinutes(endHour.getMinutes());
            date2.setSeconds(endHour.getSeconds());
        }
        return { startHour: date1, endHour: date2 };
    }
    function getMaxDays(d) {
        var date = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        return date.getDate();
    }
    function getDaysCount(startDate, endDate) {
        var strTime = resetTime(new Date(startDate));
        var endTime = resetTime(new Date(endDate));
        return (endTime.getTime() - strTime.getTime()) / MS_PER_DAY;
    }
    /** @hidden */

    /** @hidden */
    function getScrollBarWidth() {
        if (scrollWidth !== null) {
            return scrollWidth;
        }
        var divNode = document.createElement('div');
        var value = 0;
        divNode.style.cssText = 'width:100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;';
        document.body.appendChild(divNode);
        value = divNode.offsetWidth - divNode.clientWidth | 0;
        document.body.removeChild(divNode);
        return scrollWidth = value;
    }

    /**
     * CSS Constants
     */
    /** @hidden */


    /**
     * Date Generator from Recurrence Rule
     */
    function generateSummary(rule, localeObject, locale) {
        var ruleObject = extractObjectFromRule(rule);
        var summary = localeObject.getConstant(EVERY) + ' ';
        var cldrObj = void 0;
        var cldrObj1 = void 0;
        if (locale === 'en' || locale === 'en-US') {
            cldrObj1 = getValue('months.stand-alone.abbreviated', getDefaultDateObject());
            cldrObj = getValue('days.stand-alone.abbreviated', getDefaultDateObject());
        } else {
            cldrObj1 = getValue('main.' + '' + locale + '.dates.calendars.gregorian.months.stand-alone.abbreviated', cldrData);
            cldrObj = getValue('main.' + '' + locale + '.dates.calendars.gregorian.days.stand-alone.abbreviated', cldrData);
        }
        if (ruleObject.interval > 1) {
            summary += ruleObject.interval + ' ';
        }
        switch (ruleObject.freq) {
            case 'DAILY':
                summary += localeObject.getConstant(DAYS);
                break;
            case 'WEEKLY':
                summary += localeObject.getConstant(WEEKS) + ' ' + localeObject.getConstant(ON) + ' ';
                ruleObject.day.forEach(function (day, index) {
                    summary += getValue(DAYINDEXOBJECT[day], cldrObj);
                    summary += ruleObject.day.length - 1 === index ? '' : ', ';
                });
                break;
            case 'MONTHLY':
                summary += localeObject.getConstant(MONTHS) + ' ' + localeObject.getConstant(ON) + ' ';
                summary += getMonthSummary(ruleObject, cldrObj, localeObject);
                break;
            case 'YEARLY':
                summary += localeObject.getConstant(YEARS) + ' ' + localeObject.getConstant(ON) + ' ';
                summary += getValue(ruleObject.month[0].toString(), cldrObj1) + ' ';
                summary += getMonthSummary(ruleObject, cldrObj, localeObject);
                break;
            default:
                return '';
        }
        if (ruleObject.count) {
            summary += ', ' + ruleObject.count + ' ' + localeObject.getConstant(TIMES);
        } else if (ruleObject.until) {
            var tempDate = ruleObject.until;
            summary += ', ' + localeObject.getConstant(UNTIL) + ' ' + tempDate.getDate() + ' ' + getValue((tempDate.getMonth() + 1).toString(), cldrObj1) + ' ' + tempDate.getFullYear();
        }
        return summary;
    }
    function getMonthSummary(ruleObject, cldrObj, localeObj) {
        var summary = '';
        if (ruleObject.monthDay.length) {
            summary += ruleObject.monthDay[0];
        } else if (ruleObject.day) {
            var pos = ruleObject.setPosition - 1;
            summary += localeObj.getConstant(WEEKPOS[pos > -1 ? pos : WEEKPOS.length - 1]) + ' ' + getValue(DAYINDEXOBJECT[ruleObject.day[0]], cldrObj);
        }
        return summary;
    }
    function generate(startDate, rule, excludeDate, startDayOfWeek) {
        var maximumCount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : MAXOCCURRENCE;
        var viewDate = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

        var ruleObject = extractObjectFromRule(rule);
        var cacheDate = void 0;
        var data = [];
        var modifiedDate = new Date(startDate.getTime());
        if (viewDate && viewDate > startDate && !ruleObject.count) {
            tempViewDate = new Date(new Date(viewDate.getTime()).setHours(0, 0, 0));
        } else {
            tempViewDate = null;
        }
        if (!ruleObject.until && tempViewDate) {
            cacheDate = new Date(tempViewDate.getTime());
            cacheDate.setDate(tempViewDate.getDate() + 42 * ruleObject.interval);
            ruleObject.until = cacheDate;
        }
        if (ruleObject.until && startDate > ruleObject.until) {
            return data;
        }
        maxOccurrence = maximumCount;
        setFirstDayOfWeek(DAYINDEX[startDayOfWeek]);
        tempExcludeDate = [];
        var tempDate = isNullOrUndefined(excludeDate) ? [] : excludeDate.split(',');
        tempDate.forEach(function (content) {
            var parsedDate = getDateFromRecurrenceDateString(content);
            tempExcludeDate.push(new Date(parsedDate.getTime()).setHours(0, 0, 0, 0));
        });
        switch (ruleObject.freq) {
            case 'DAILY':
                dailyType(modifiedDate, ruleObject.until, data, ruleObject);
                break;
            case 'WEEKLY':
                weeklyType(modifiedDate, ruleObject.until, data, ruleObject);
                break;
            case 'MONTHLY':
                monthlyType(modifiedDate, ruleObject.until, data, ruleObject);
                break;
            case 'YEARLY':
                yearlyType(modifiedDate, ruleObject.until, data, ruleObject);
        }
        return data;
    }
    function getDateFromRecurrenceDateString(recDateString) {
        return new Date(recDateString.substr(0, 4) + '-' + recDateString.substr(4, 2) + '-' + recDateString.substr(6, 5) + ':' + recDateString.substr(11, 2) + ':' + recDateString.substr(13));
    }
    function excludeDateHandler(data, date) {
        var zeroIndex = new Date(date).setHours(0, 0, 0, 0);
        if (tempExcludeDate.indexOf(zeroIndex) === -1 && (!tempViewDate || zeroIndex >= tempViewDate.getTime())) {
            data.push(date);
        }
    }
    function dailyType(startDate, endDate, data, ruleObject) {
        var tempDate = new Date(startDate.getTime());
        var interval = ruleObject.interval;
        var expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
        var state = void 0;
        while (compareDates(tempDate, endDate)) {
            state = true;
            state = validateRules(tempDate, ruleObject);
            if (state) {
                excludeDateHandler(data, tempDate.getTime());
                if (expectedCount && data.length + tempExcludeDate.length >= expectedCount) {
                    break;
                }
            }
            tempDate.setDate(tempDate.getDate() + interval);
        }
    }
    function weeklyType(startDate, endDate, data, ruleObject) {
        var tempDate = getStartDateForWeek(startDate, ruleObject.day);
        var interval = ruleObject.interval;
        var expectedDays = ruleObject.day;
        var expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
        var state = void 0;
        var dayCycleData = processWeekDays(expectedDays);
        while (compareDates(tempDate, endDate)) {
            state = true;
            state = validateRules(tempDate, ruleObject);
            if (state) {
                excludeDateHandler(data, tempDate.getTime());
                if (expectedCount && data.length + tempExcludeDate.length >= expectedCount) {
                    break;
                }
            }
            if (expectedDays.length > 1) {
                tempDate.setDate(tempDate.getDate() + dayCycleData[DAYINDEX[tempDate.getDay()]] + (expectedDays.indexOf(DAYINDEX[tempDate.getDay()]) === expectedDays.length - 1 ? (interval - 1) * 7 : 0));
            } else {
                tempDate.setDate(tempDate.getDate() + interval * 7);
            }
        }
    }
    function monthlyType(startDate, endDate, data, ruleObject) {
        var ruleType = validateMonthlyRuleType(ruleObject);
        switch (ruleType) {
            case 'day':
                monthlyDayTypeProcess(startDate, endDate, data, ruleObject);
                break;
            case 'both':
            case 'date':
                monthlyDateTypeProcess(startDate, endDate, data, ruleObject);
                break;
        }
    }
    function yearlyType(startDate, endDate, data, ruleObject) {
        var typeValue = checkYearlyType(ruleObject);
        switch (typeValue) {
            case 'MONTH':
                monthlyType(startDate, endDate, data, ruleObject);
                break;
            case 'WEEKNO':
                processWeekNo(startDate, endDate, data, ruleObject);
                break;
            case 'YEARDAY':
                processYearDay(startDate, endDate, data, ruleObject);
                break;
        }
    }
    function processWeekNo(startDate, endDate, data, ruleObject) {
        var stDate = new Date(startDate.getFullYear(), 0, 0);
        var tempDate = void 0;
        var expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
        var state = void 0;
        var startDay = void 0;
        var firstWeekSpan = void 0;
        var weekNos = ruleObject.weekNo;
        var weekNo = void 0;
        var maxDate = void 0;
        var minDate = void 0;
        while (compareDates(stDate, endDate)) {
            startDay = dayIndex.indexOf(DAYINDEX[stDate.getDay()]);
            firstWeekSpan = 6 - startDay + 1;
            for (var index = 0; index < weekNos.length; index++) {
                weekNo = weekNos[index];
                weekNo = weekNo > 0 ? weekNo : 53 + weekNo + 1;
                maxDate = weekNo === 1 ? firstWeekSpan : firstWeekSpan + (weekNo - 1) * 7;
                minDate = weekNo === 1 ? firstWeekSpan - 7 : firstWeekSpan + (weekNo - 2) * 7;
                while (minDate < maxDate) {
                    tempDate = new Date(stDate.getTime() + MS_PER_DAY * minDate);
                    state = validateRules(tempDate, ruleObject);
                    if (tempDate >= startDate && state && compareDates(tempDate, endDate)) {
                        excludeDateHandler(data, tempDate.getTime());
                        if (expectedCount && data.length + tempExcludeDate.length >= expectedCount) {
                            return;
                        }
                    }
                    minDate++;
                }
            }
            stDate = new Date(tempDate.getFullYear() + ruleObject.interval, 0, 0);
        }
    }
    function processYearDay(startDate, endDate, data, ruleObject) {
        var stDate = new Date(startDate.getFullYear(), 0, 0);
        var tempDate = void 0;
        var expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
        var state = void 0;
        var date = void 0;
        while (compareDates(stDate, endDate)) {
            for (var index = 0; index < ruleObject.yearDay.length; index++) {
                date = ruleObject.yearDay[index];
                tempDate = new Date(stDate.getTime());
                if ((date === LEAPYEAR || date === -LEAPYEAR) && (tempDate.getFullYear() + 1) % 4 !== 0) {
                    tempDate.setDate(tempDate.getDate() + 1);
                    continue;
                }
                tempDate.setDate(tempDate.getDate() + (date < 0 ? getMaxYearDay(tempDate.getFullYear() + 1) + 1 + date : date));
                state = validateRules(tempDate, ruleObject);
                if (tempDate >= startDate && state && compareDates(tempDate, endDate)) {
                    excludeDateHandler(data, tempDate.getTime());
                    if (expectedCount && data.length + tempExcludeDate.length >= expectedCount) {
                        return;
                    }
                }
            }
            stDate = new Date(tempDate.getFullYear() + ruleObject.interval, 0, 0);
        }
    }
    function getMaxYearDay(date) {
        return date % 4 === 0 ? LEAPYEAR : NORMALYEAR;
    }
    function checkYearlyType(ruleObject) {
        if (ruleObject.yearDay.length) {
            return 'YEARDAY';
        } else if (ruleObject.weekNo.length) {
            return 'WEEKNO';
        }
        return 'MONTH';
    }
    function monthlyDateTypeProcess(startDate, endDate, data, ruleObject) {
        var tempDate = new Date(startDate.getTime());
        var mainDate = new Date(startDate.getTime());
        var expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
        var interval = ruleObject.interval;
        var monthInit = 0;
        var date = void 0;
        var state = void 0;
        tempDate.setDate(1);
        mainDate.setDate(1);
        if (ruleObject.month.length) {
            tempDate.setMonth(ruleObject.month[0] - 1);
        }
        while (compareDates(tempDate, endDate)) {
            for (var index = 0; index < ruleObject.monthDay.length; index++) {
                date = ruleObject.monthDay[index];
                var maxDate = tempDate.getMonth() === 1 ? tempDate.getFullYear() % 4 === 0 ? 29 : 28 : monthDay[tempDate.getMonth()];
                date = date > 0 ? date : maxDate + date + 1;
                if (date > 0 && validateProperDate(tempDate, date, mainDate)) {
                    tempDate.setDate(date);
                    if (endDate && tempDate > endDate) {
                        return;
                    }
                    state = validateRules(tempDate, ruleObject);
                    if (tempDate >= startDate && state && compareDates(tempDate, endDate)) {
                        excludeDateHandler(data, tempDate.getTime());
                        if (expectedCount && data.length + tempExcludeDate.length >= expectedCount) {
                            return;
                        }
                    }
                }
            }
            monthInit = setNextValidDate(tempDate, ruleObject, monthInit, interval);
        }
    }
    function setNextValidDate(tempDate, ruleObject, monthInit, interval) {
        var beginDate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        var monthData = beginDate ? beginDate.getMonth() : 0;
        tempDate.setDate(1);
        if (ruleObject.month.length) {
            monthInit++;
            monthInit = monthInit % ruleObject.month.length;
            tempDate.setMonth(ruleObject.month[monthInit] - 1);
            if (monthInit === 0) {
                tempDate.setFullYear(tempDate.getFullYear() + interval);
            }
        } else {
            if (beginDate && beginDate.getFullYear() < tempDate.getFullYear()) {
                monthData = tempDate.getMonth() - 1;
            }
            tempDate.setMonth((beginDate ? monthData : tempDate.getMonth()) + interval);
        }
        return monthInit;
    }
    function monthlyDayTypeProcess(startDate, endDate, data, ruleObject) {
        var tempDate = new Date(startDate.getTime());
        var expectedDays = ruleObject.day;
        var expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
        var dayCycleData = processWeekDays(expectedDays);
        var interval = ruleObject.interval;
        var state = void 0;
        var monthCollection = [];
        var weekCollection = [];
        var month = void 0;
        var index = void 0;
        var beginDate = void 0;
        var monthInit = 0;
        tempDate.setDate(1);
        if (ruleObject.month.length) {
            tempDate.setMonth(ruleObject.month[0] - 1);
        }
        tempDate = getStartDateForWeek(tempDate, ruleObject.day);
        while (compareDates(tempDate, endDate)) {
            month = tempDate.getMonth();
            beginDate = new Date(tempDate.getTime());
            if (expectedDays.length > 1) {
                while (tempDate.getMonth() === month) {
                    weekCollection.push(tempDate.getTime());
                    if (DAYINDEX[tempDate.getDay()] === expectedDays[expectedDays.length - 1]) {
                        monthCollection.push(weekCollection);
                        weekCollection = [];
                    }
                    tempDate.setDate(tempDate.getDate() + dayCycleData[DAYINDEX[tempDate.getDay()]]);
                }
            } else {
                while (tempDate.getMonth() === month) {
                    monthCollection.push([tempDate.getTime()]);
                    tempDate.setDate(tempDate.getDate() + 7);
                }
            }
            index = ruleObject.setPosition < 1 ? monthCollection.length + ruleObject.setPosition : ruleObject.setPosition - 1;
            if (ruleObject.setPosition === null) {
                index = 0;
                var datas = [];
                for (var week = 0; week < monthCollection.length; week++) {
                    for (var row = 0; row < monthCollection[week].length; row++) {
                        datas.push(monthCollection[week][row]);
                    }
                }
                monthCollection = [datas];
            }
            for (var _week = 0; _week < monthCollection[index].length; _week++) {
                var dayData = monthCollection[index][_week];
                var chDate = new Date(dayData);
                state = validateRules(chDate, ruleObject);
                if (chDate >= startDate && compareDates(chDate, endDate) && state) {
                    excludeDateHandler(data, dayData);
                    if (expectedCount && data.length + tempExcludeDate.length >= expectedCount) {
                        return;
                    }
                }
            }
            monthInit = setNextValidDate(tempDate, ruleObject, monthInit, interval, beginDate);
            monthCollection = [];
            weekCollection = [];
            tempDate = getStartDateForWeek(tempDate, ruleObject.day);
        }
    }
    function compareDates(startDate, endDate) {
        return endDate ? startDate <= endDate : true;
    }
    function checkDayIndex(day, expectedDays) {
        return expectedDays.indexOf(DAYINDEX[day]) === -1;
    }
    function getStartDateForWeek(startDate, expectedDays) {
        var tempDate = new Date(startDate.getTime());
        if (expectedDays.indexOf(DAYINDEX[tempDate.getDay()]) === -1) {
            do {
                tempDate.setDate(tempDate.getDate() + 1);
            } while (expectedDays.indexOf(DAYINDEX[tempDate.getDay()]) === -1);
        }
        return tempDate;
    }
    function extractObjectFromRule(rules) {
        var ruleObject = {
            freq: null,
            interval: 1,
            count: null,
            until: null,
            day: [],
            month: [],
            weekNo: [],
            monthDay: [],
            yearDay: [],
            setPosition: null,
            validRules: []
        };
        var rulesList = rules.split(';');
        var splitData = [];
        var temp = void 0;
        rulesList.forEach(function (data) {
            splitData = data.split('=');
            switch (splitData[0]) {
                case 'UNTIL':
                    temp = splitData[1];
                    ruleObject.until = getDateFromRecurrenceDateString(temp);
                    break;
                case 'BYDAY':
                    ruleObject.day = splitData[1].split(',');
                    ruleObject.validRules.push(splitData[0]);
                    break;
                case 'BYMONTHDAY':
                    ruleObject.monthDay = splitData[1].split(',').map(Number);
                    ruleObject.validRules.push(splitData[0]);
                    break;
                case 'BYMONTH':
                    ruleObject.month = splitData[1].split(',').map(Number);
                    ruleObject.validRules.push(splitData[0]);
                    break;
                case 'BYYEARDAY':
                    ruleObject.yearDay = splitData[1].split(',').map(Number);
                    ruleObject.validRules.push(splitData[0]);
                    break;
                case 'BYWEEKNO':
                    ruleObject.weekNo = splitData[1].split(',').map(Number);
                    ruleObject.validRules.push(splitData[0]);
                    break;
                case 'INTERVAL':
                    ruleObject.interval = parseInt(splitData[1], 10);
                    break;
                case 'COUNT':
                    ruleObject.count = parseInt(splitData[1], 10);
                    break;
                case 'BYSETPOS':
                    ruleObject.setPosition = parseInt(splitData[1], 10);
                    break;
                case 'FREQ':
                    ruleObject.freq = splitData[1];
                    break;
            }
        });
        if (ruleObject.freq === 'MONTHLY' && ruleObject.monthDay.length === 0) {
            var index = ruleObject.validRules.indexOf('BYDAY');
            ruleObject.validRules.splice(index, 1);
        }
        return ruleObject;
    }
    function validateProperDate(tempDate, data, startDate) {
        var maxDate = tempDate.getMonth() === 1 ? tempDate.getFullYear() % 4 === 0 ? 29 : 28 : monthDay[tempDate.getMonth()];
        return data <= maxDate && tempDate >= startDate;
    }
    function processWeekDays(expectedDays) {
        var dayCycle = {};
        expectedDays.forEach(function (element, index) {
            if (index === expectedDays.length - 1) {
                var startIndex = dayIndex.indexOf(element);
                var temp = startIndex;
                while (temp % 7 !== dayIndex.indexOf(expectedDays[0])) {
                    temp++;
                }
                dayCycle[element] = temp - startIndex;
            } else {
                dayCycle[element] = dayIndex.indexOf(expectedDays[index + 1]) - dayIndex.indexOf(element);
            }
        });
        return dayCycle;
    }
    function checkMonth(tempDate, expectedMonth) {
        return expectedMonth.indexOf(tempDate.getMonth() + 1) === -1;
    }
    function checkDate(tempDate, expectedDate) {
        var temp = expectedDate.slice(0);
        var data = void 0;
        var maxDate = tempDate.getMonth() === 1 ? tempDate.getFullYear() % 4 === 0 ? 29 : 28 : monthDay[tempDate.getMonth()];
        data = temp.shift();
        while (data) {
            if (data < 0) {
                data = data + maxDate + 1;
            }
            if (data === tempDate.getDate()) {
                return false;
            }
            data = temp.shift();
        }
        return true;
    }
    function checkYear(tempDate, expectedyearDay) {
        var temp = expectedyearDay.slice(0);
        var data = void 0;
        var yearDay = getYearDay(tempDate);
        data = temp.shift();
        while (data) {
            if (data < 0) {
                data = data + getMaxYearDay(tempDate.getFullYear()) + 1;
            }
            if (data === yearDay) {
                return false;
            }
            data = temp.shift();
        }
        return true;
    }
    function getYearDay(currentDate) {
        if (!startDateCollection[currentDate.getFullYear()]) {
            startDateCollection[currentDate.getFullYear()] = new Date(currentDate.getFullYear(), 0, 0);
        }
        var tempDate = startDateCollection[currentDate.getFullYear()];
        var diff = currentDate.getTime() - tempDate.getTime();
        return Math.ceil(diff / MS_PER_DAY);
    }
    function validateMonthlyRuleType(ruleObject) {
        if (ruleObject.monthDay.length && !ruleObject.day.length) {
            return 'date';
        } else if (!ruleObject.monthDay.length && ruleObject.day.length) {
            return 'day';
        }
        return 'both';
    }
    function rotate(days) {
        var data = days.shift();
        days.push(data);
    }
    function setFirstDayOfWeek(day) {
        while (dayIndex[0] !== day) {
            rotate(dayIndex);
        }
    }
    function validateRules(tempDate, ruleObject) {
        var state = true;
        var expectedDays = ruleObject.day;
        var expectedMonth = ruleObject.month;
        var expectedDate = ruleObject.monthDay;
        var expectedyearDay = ruleObject.yearDay;
        ruleObject.validRules.forEach(function (rule) {
            switch (rule) {
                case 'BYDAY':
                    if (checkDayIndex(tempDate.getDay(), expectedDays)) {
                        state = false;
                    }
                    break;
                case 'BYMONTH':
                    if (checkMonth(tempDate, expectedMonth)) {
                        state = false;
                    }
                    break;
                case 'BYMONTHDAY':
                    if (checkDate(tempDate, expectedDate)) {
                        state = false;
                    }
                    break;
                case 'BYYEARDAY':
                    if (checkYear(tempDate, expectedyearDay)) {
                        state = false;
                    }
                    break;
            }
        });
        return state;
    }

    function getRecurrenceStringFromDate(date) {
        return [date.getUTCFullYear(), roundDateValues(date.getUTCMonth() + 1), roundDateValues(date.getUTCDate()), 'T', roundDateValues(date.getUTCHours()), roundDateValues(date.getUTCMinutes()), roundDateValues(date.getUTCSeconds()), 'Z'].join('');
    }
    function roundDateValues(date) {
        return ('0' + date).slice(-2);
    }

    /**
     * EventBase for appointment rendering
     */
    return {
        setters: [function (_syncfusionEj2Base) {
            Animation = _syncfusionEj2Base.Animation;
            Browser = _syncfusionEj2Base.Browser;
            ChildProperty = _syncfusionEj2Base.ChildProperty;
            Complex = _syncfusionEj2Base.Complex;
            Component = _syncfusionEj2Base.Component;
            Event = _syncfusionEj2Base.Event;
            EventHandler = _syncfusionEj2Base.EventHandler;
            Internationalization = _syncfusionEj2Base.Internationalization;
            KeyboardEvents = _syncfusionEj2Base.KeyboardEvents;
            L10n = _syncfusionEj2Base.L10n;
            NotifyPropertyChanges = _syncfusionEj2Base.NotifyPropertyChanges;
            Property = _syncfusionEj2Base.Property;
            Touch = _syncfusionEj2Base.Touch;
            addClass = _syncfusionEj2Base.addClass;
            append = _syncfusionEj2Base.append;
            cldrData = _syncfusionEj2Base.cldrData;
            closest = _syncfusionEj2Base.closest;
            compile = _syncfusionEj2Base.compile;
            createElement = _syncfusionEj2Base.createElement;
            extend = _syncfusionEj2Base.extend;
            formatUnit = _syncfusionEj2Base.formatUnit;
            getDefaultDateObject = _syncfusionEj2Base.getDefaultDateObject;
            getValue = _syncfusionEj2Base.getValue;
            isNullOrUndefined = _syncfusionEj2Base.isNullOrUndefined;
            prepend = _syncfusionEj2Base.prepend;
            remove = _syncfusionEj2Base.remove;
            removeClass = _syncfusionEj2Base.removeClass;
            setStyleAttribute = _syncfusionEj2Base.setStyleAttribute;
        }, function (_syncfusionEj2Navigations) {
            Toolbar = _syncfusionEj2Navigations.Toolbar;
        }, function (_syncfusionEj2Calendars) {
            Calendar = _syncfusionEj2Calendars.Calendar;
            DatePicker = _syncfusionEj2Calendars.DatePicker;
            DateTimePicker = _syncfusionEj2Calendars.DateTimePicker;
        }, function (_syncfusionEj2Popups) {
            Dialog = _syncfusionEj2Popups.Dialog;
            Popup = _syncfusionEj2Popups.Popup;
            Tooltip = _syncfusionEj2Popups.Tooltip;
        }, function (_syncfusionEj2Data) {
            DataManager = _syncfusionEj2Data.DataManager;
            Predicate = _syncfusionEj2Data.Predicate;
            Query = _syncfusionEj2Data.Query;
        }, function (_syncfusionEj2Buttons) {
            Button = _syncfusionEj2Buttons.Button;
            CheckBox = _syncfusionEj2Buttons.CheckBox;
            RadioButton = _syncfusionEj2Buttons.RadioButton;
        }, function (_syncfusionEj2Inputs) {
            FormValidator = _syncfusionEj2Inputs.FormValidator;
            Input = _syncfusionEj2Inputs.Input;
            NumericTextBox = _syncfusionEj2Inputs.NumericTextBox;
        }, function (_syncfusionEj2Dropdowns) {
            DropDownList = _syncfusionEj2Dropdowns.DropDownList;
        }, function (_syncfusionEj2Lists) {
            ListBase = _syncfusionEj2Lists.ListBase;
        }],
        execute: function () {
            _get = function get(object, property, receiver) {
                if (object === null) object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);

                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);

                    if (parent === null) {
                        return undefined;
                    } else {
                        return get(parent, property, receiver);
                    }
                } else if ("value" in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;

                    if (getter === undefined) {
                        return undefined;
                    }

                    return getter.call(receiver);
                }
            };

            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('cellClick', _cellClick = 'cellClick');

            _export('cellDoubleClick', cellDoubleClick = 'cellDoubleClick');

            _export('actionBegin', actionBegin = 'actionBegin');

            _export('actionComplete', actionComplete = 'actionComplete');

            _export('actionFailure', actionFailure = 'actionFailure');

            _export('navigating', navigating = 'navigating');

            _export('renderCell', renderCell = 'renderCell');

            _export('eventClick', _eventClick = 'eventClick');

            _export('eventRendered', eventRendered = 'eventRendered');

            _export('dataBinding', dataBinding = 'dataBinding');

            _export('dataBound', dataBound = 'dataBound');

            _export('popupOpen', popupOpen = 'popupOpen');

            _export('initialLoad', initialLoad = 'initial-load');

            _export('initialEnd', initialEnd = 'initial-end');

            _export('dataReady', dataReady = 'data-ready');

            _export('contentReady', contentReady = 'content-ready');

            _export('scroll', scroll = 'scroll');

            _export('scrollUiUpdate', scrollUiUpdate = 'scroll-ui-update');

            _export('uiUpdate', uiUpdate = 'ui-update');

            _export('documentClick', documentClick = 'document-click');

            _export('cellMouseDown', _cellMouseDown = 'cell-mouse-down');

            _export('WEEK_LENGTH', WEEK_LENGTH = 7);

            _export('MS_PER_DAY', MS_PER_DAY = 86400000);

            _export('MS_PER_MINUTE', MS_PER_MINUTE = 60000);

            scrollWidth = null;
            ROOT = 'e-schedule';
            RTL = 'e-rtl';
            DEVICE = 'e-device';
            ICON = 'e-icons';
            ENABLE_CLASS = 'e-enable';
            DISABLE_CLASS = 'e-disable';
            TABLE_CONTAINER_CLASS = 'e-table-container';
            SCHEDULE_TABLE_CLASS = 'e-schedule-table';
            ALLDAY_CELLS_CLASS = 'e-all-day-cells';
            HEADER_POPUP_CLASS = 'e-header-popup';
            HEADER_CALENDAR_CLASS = 'e-header-calendar';
            ALLDAY_ROW_CLASS = 'e-all-day-row';
            CONTENT_TABLE_CLASS = 'e-content-table';
            WORK_CELLS_CLASS = 'e-work-cells';
            WORK_HOURS_CLASS = 'e-work-hours';
            POPUP_OPEN = 'e-popup-open';
            DATE_HEADER_WRAP_CLASS = 'e-date-header-wrap';
            DATE_HEADER_CONTAINER_CLASS = 'e-date-header-container';
            HEADER_CELLS_CLASS = 'e-header-cells';
            WORKDAY_CLASS = 'e-work-days';
            OTHERMONTH_CLASS = 'e-other-month';
            CURRENT_DAY_CLASS = 'e-current-day';
            CURRENTDATE_CLASS = 'e-current-date';
            CURRENT_PANEL_CLASS = 'e-current-panel';
            PREVIOUS_PANEL_CLASS = 'e-previous-panel';
            NEXT_PANEL_CLASS = 'e-next-panel';
            TRANSLATE_CLASS = 'e-translate';
            LEFT_INDENT_CLASS = 'e-left-indent';
            LEFT_INDENT_WRAP_CLASS = 'e-left-indent-wrap';
            TIME_CELLS_WRAP_CLASS = 'e-time-cells-wrap';
            TIME_CELLS_CLASS = 'e-time-cells';
            ALTERNATE_CELLS_CLASS = 'e-alternate-cells';
            CURRENT_TIME_CLASS = 'e-current-time';
            CURRENT_TIMELINE_CLASS = 'e-current-timeline';
            PREVIOUS_TIMELINE_CLASS = 'e-previous-timeline';
            HIDE_CHILDS_CLASS = 'e-hide-childs';
            SCROLL_CONTAINER_CLASS = 'e-scroll-container';
            WRAPPER_CLASS = 'e-wrapper';
            TIMELINE_WRAPPER_CLASS = 'e-timeline-wrapper';
            APPOINTMENT_WRAPPER_CLASS = 'e-appointment-wrapper';
            DAY_WRAPPER_CLASS = 'e-day-wrapper';
            TOOLBAR_CONTAINER = 'e-schedule-toolbar-container';
            HEADER_TOOLBAR = 'e-schedule-toolbar';
            SELECTED_CELL_CLASS = 'e-selected-cell';
            APPOINTMENT_WRAP_CLASS = 'e-appointment-wrap';
            APPOINTMENT_CONTAINER_CLASS = 'e-appointment-container';
            APPOINTMENT_CLASS = 'e-appointment';
            APPOINTMENT_BORDER = 'e-appointment-border';
            APPOINTMENT_DETAILS = 'e-appointment-details';
            APPOINTMENT_SUBJECT_WRAP = 'e-subject-wrap';
            APPOINTMENT_SUBJECT = 'e-subject';
            APPOINTMENT_TIME = 'e-time';
            APPOINTMENT_LOCATION = 'e-location';
            TABLE_WRAP_CLASS = 'e-table-wrap';
            OUTER_TABLE_CLASS = 'e-outer-table';
            CONTENT_WRAP_CLASS = 'e-content-wrap';
            AGENDA_CELLS_CLASS = 'e-agenda-cells';
            AGENDA_CURRENT_DAY_CLASS = 'e-current-day';
            AGENDA_HEADER_CLASS = 'e-day-date-header';
            NAVIGATE_CLASS = 'e-navigate';
            DATE_HEADER_CLASS = 'e-date-header';
            AGENDA_HIDDEN_CLASS = 'e-item-hide';
            AGENDA_ALIGN_CLASS = 'e-item-align';
            AGENDA_DAY_BORDER_CLASS = 'e-day-border';
            AGENDA_DATETIME_CLASS = 'e-date-time';
            AGENDA_EMPTY_EVENT_CLASS = 'e-empty-event';
            AGENDA_NO_EVENT_CLASS = 'e-no-event';
            APPOINTMENT_INDICATOR_CLASS = 'e-appointment-indicator';
            EVENT_INDICATOR_CLASS = 'e-indicator';
            EVENT_ICON_UP_CLASS = 'e-up-icon';
            EVENT_ICON_DOWN_CLASS = 'e-down-icon';
            EVENT_ICON_LEFT_CLASS = 'e-left-icon';
            EVENT_ICON_RIGHT_CLASS = 'e-right-icon';
            EVENT_RECURRENCE_ICON_CLASS = 'e-recurrence-icon';
            EVENT_RECURRENCE_EDIT_ICON_CLASS = 'e-recurrence-edit-icon';
            HEADER_ROW_CLASS = 'e-header-row';
            ALLDAY_APPOINTMENT_WRAPPER_CLASS = 'e-all-day-appointment-wrapper';
            ALLDAY_APPOINTMENT_CLASS = 'e-all-day-appointment';
            ALLDAY_WRAPPER_CLASS = 'e-all-day-wrapper';
            EVENT_COUNT_CLASS = 'e-appointment-hide';
            ROW_COUNT_WRAPPER_CLASS = 'e-row-count-wrapper';
            ALLDAY_APPOINTMENT_SECTION_CLASS = 'e-all-day-appointment-section';
            APPOINTMENT_ROW_EXPAND_CLASS = 'e-appointment-expand';
            APPOINTMENT_ROW_COLLAPSE_CLASS = 'e-appointment-collapse';
            MORE_INDICATOR_CLASS = 'e-more-indicator';
            QUICK_POPUP_ROOT_CLASS = 'e-schedule-quick-popup';
            QUICK_POPUP_CLASS = 'e-quick-popup';
            QUICK_POPUP_SUBJECT_CLASS = 'e-quick-subject';
            QUICK_POPUP_TABLE_CLASS = 'e-quick-popup-table';
            QUICK_POPUP_ICON_CLASS = 'e-quick-popup-icon-container';
            QUICK_POPUP_CLOSE_ICON_CLASS = 'e-close-icon-container';
            QUICK_POPUP_EDIT_ICON_CLASS = 'e-edit-icon-container';
            QUICK_POPUP_CONTENT_CLASS = 'e-quick-content';
            QUICK_POPUP_DATE_TIME_DETAILS_CLASS = 'e-quick-date-time-details';
            DEVICE_DATE_TIME_DETAILS_CLASS = 'e-device-date-time-details';
            DEVICE_RECURRENCE_SUMMARY_CLASS = 'e-device-recurrence-summary';
            QUICK_POPUP_LOCATION_DETAILS_CLASS = 'e-quick-location-details';
            QUICK_POPUP_FOOTER_CLASS = 'e-quick-footer';
            QUICK_POPUP_EVENT_DETAILS_CLASS = 'e-event-details';
            QUICK_POPUP_EVENT_TITLE_CLASS = 'e-event-title';
            QUICK_POPUP_EVENT_CREATE_CLASS = 'e-event-create';
            QUICK_POPUP_EDIT_EVENT_CLASS = 'e-event-edit';
            TOOLTIP_CLOSE_CLASS = 'e-tooltip-close';
            QUICK_POPUP_DELETE_EVENT_CLASS = 'e-event-delete';
            QUICK_POPUP_TEXT_ALIGN_CLASS = 'e-text-ellipsis';
            MORE_POPUP_WRAPPER_CLASS = 'e-more-event-popup-wrapper';
            SELECT_POPUP_WRAPPER_CLASS = 'e-select-event-popup-wrapper';
            MORE_EVENT_POPUP_CLASS = 'e-more-event-popup';
            MORE_EVENT_HEADER_CLASS = 'e-more-event-header';
            MORE_EVENT_DATE_HEADER_CLASS = 'e-more-event-date-header';
            MORE_EVENT_HEADER_DAY_CLASS = 'e-header-day';
            MORE_EVENT_HEADER_DATE_CLASS = 'e-header-date';
            MORE_EVENT_CLOSE_CLASS = 'e-more-event-close';
            MORE_EVENT_CONTENT_CLASS = 'e-more-event-content';
            MORE_EVENT_WRAPPER_CLASS = 'e-more-appointment-wrapper';
            QUICK_DIALOG_CLASS = 'e-quick-dialog';
            DIALOG_FOOTER_CONTENT_CLASS = 'e-footer-content';
            QUICK_DIALOG_EDIT_EVENT_CLASS = 'e-quick-dialog-edit-event';
            QUICK_DIALOG_EDIT_SERIES_CLASS = 'e-quick-dialog-edit-series';
            QUICK_DIALOG_DELETE_CLASS = 'e-quick-dialog-delete';
            QUICK_DIALOG_CANCEL_CLASS = 'e-quick-dialog-cancel';
            QUICK_DIALOG_ALERT_BTN_CLASS = 'e-quick-dialog-alert-btn';
            QUICK_DIALOG_HIDE_BTN_CLASS = 'e-quick-dialog-hide-btn';
            EVENT_WINDOW_DIALOG_CLASS = 'e-schedule-dialog';
            EVENT_WINDOW_DEVICE_CLASS = 'e-device';
            EVENT_WINDOW_FORM_DIV_CLASS = 'e-schedule-form-container';
            EVENT_WINDOW_FORM_CLASS = 'e-schedule-form';
            EVENT_WINDOW_ALLDAY_TZ_DIV_CLASS = 'e-all-day-time-zone-row';
            EVENT_WINDOW_ALL_DAY_CLASS = 'e-all-day';
            EVENT_WINDOW_TZ_CLASS = 'e-time-zone';
            EVENT_WINDOW_REPEAT_DIV_CLASS = 'e-repeat-parent-row';
            EVENT_WINDOW_REPEAT_CLASS = 'e-repeat';
            EVENT_WINDOW_TITLE_LOCATION_DIV_CLASS = 'e-title-location-row';
            EVENT_WINDOW_TITLE_CLASS = 'e-subject';
            EVENT_WINDOW_LOCATION_CLASS = 'e-location';
            EVENT_WINDOW_START_END_DIV_CLASS = 'e-start-end-row';
            EVENT_WINDOW_START_CLASS = 'e-start';
            EVENT_WINDOW_END_CLASS = 'e-end';
            EVENT_WINDOW_DESCRIPTION_CLASS = 'e-description';
            EVENT_WINDOW_TIME_ZONE_DIV_CLASS = 'e-time-zone-row';
            EVENT_WINDOW_START_TZ_CLASS = 'e-start-time-zone';
            EVENT_WINDOW_END_TZ_CLASS = 'e-end-time-zone';
            EVENT_WINDOW_BACK_ICON_CLASS = 'e-back-icon';
            EVENT_WINDOW_SAVE_ICON_CLASS = 'e-save-icon';
            EVENT_WINDOW_DELETE_BUTTON_CLASS = 'e-event-delete';
            EVENT_WINDOW_CANCEL_BUTTON_CLASS = 'e-event-cancel';
            EVENT_WINDOW_SAVE_BUTTON_CLASS = 'e-event-save';
            EVENT_WINDOW_TITLE_TEXT_CLASS = 'e-title-text';
            EVENT_WINDOW_ICON_DISABLE_CLASS = 'e-icon-disable';
            SELECTED_EVENT_EDIT_CLASS = 'e-edit-icon';
            SELECTED_EVENT_DELETE_CLASS = 'e-delete-icon';
            SELECTED_DATE_TIME_CLASS = 'e-date-time-icon';
            SELECTED_CALENDER_CLASS = 'e-calendar-icon';
            SELECTED_EVENT_TITLE_CLASS = 'e-dialog-title';
            SELECTED_EVENT_CONTAINER_CLASS = 'e-event-container';
            SELECTED_EVENT_CLOSE_CLASS = 'e-event-close';
            EVENT_TIME_ZONE_CLASS = 'e-event-zone-icon';
            EVENT_ZONE_DETAILS_CLASS = 'e-event-zone-details';
            EVENT_DETAILS_CLASS = 'e-event-details';
            EVENT_NOTE_CLASS = 'e-event-note-icon';
            EVENT_NOTE_DETAILS_CLASS = 'e-event-note-details';
            EVENT_EDIT_DISABLE_CLASS = 'e-event-edit-disable';
            ERROR_VALIDATION_CLASS = 'e-schedule-error';
            EVENT_TOOLTIP_ROOT_CLASS = 'e-schedule-event-tooltip';
            ALLDAY_ROW_ANIMATE_CLASS = 'e-animate';

            _export('HeaderRenderer', HeaderRenderer = function () {
                /**
                 * Constructor for render module
                 */
                function HeaderRenderer(parent) {
                    _classCallCheck(this, HeaderRenderer);

                    this.parent = parent;
                    this.l10n = this.parent.localeObj;
                    this.renderHeader();
                    this.addEventListener();
                }

                _createClass(HeaderRenderer, [{
                    key: 'addEventListener',
                    value: function addEventListener() {
                        this.parent.on(documentClick, this.closeHeaderPopup, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        this.parent.off(documentClick, this.closeHeaderPopup);
                    }
                }, {
                    key: 'closeHeaderPopup',
                    value: function closeHeaderPopup(e) {
                        var closestEle = closest(e.event.target, '.e-date-range,.e-header-popup,.e-day,.e-selected');
                        if (!isNullOrUndefined(closestEle)) {
                            return;
                        }
                        this.hideHeaderPopup();
                    }
                }, {
                    key: 'hideHeaderPopup',
                    value: function hideHeaderPopup() {
                        if (this.headerPopup) {
                            this.headerPopup.hide();
                        }
                    }
                }, {
                    key: 'renderHeader',
                    value: function renderHeader() {
                        this.element = createElement('div', { className: TOOLBAR_CONTAINER });
                        var toolbarEle = createElement('div', { className: HEADER_TOOLBAR });
                        this.element.appendChild(toolbarEle);
                        this.parent.element.insertBefore(this.element, this.parent.element.firstElementChild);
                        this.renderToolbar();
                    }
                }, {
                    key: 'renderToolbar',
                    value: function renderToolbar() {
                        var items = this.getItems();
                        var args = extend({}, { requestType: 'toolbarItemRendering', items: items });
                        this.parent.trigger(actionBegin, args);
                        this.toolbarObj = new Toolbar({
                            items: items,
                            overflowMode: 'Popup',
                            clicked: this.toolbarClickHandler.bind(this),
                            enableRtl: this.parent.enableRtl,
                            locale: this.parent.locale
                        });
                        this.toolbarObj.appendTo(this.parent.element.querySelector('.' + HEADER_TOOLBAR));
                        this.updateActiveView();
                        this.parent.trigger(actionComplete, { requestType: 'toolBarItemRendered', items: items });
                    }
                }, {
                    key: 'updateItems',
                    value: function updateItems() {
                        if (this.toolbarObj) {
                            var items = this.getItems();
                            this.parent.trigger(actionBegin, { requestType: 'toolbarItemRendering', items: items });
                            this.toolbarObj.items = items;
                            this.toolbarObj.dataBind();
                            this.parent.trigger(actionComplete, { requestType: 'toolBarItemRendered', items: items });
                        }
                    }
                }, {
                    key: 'getPopUpRelativeElement',
                    value: function getPopUpRelativeElement() {
                        if (this.parent.isAdaptive) {
                            return this.toolbarObj.element;
                        }
                        return this.element.querySelector('.e-date-range');
                    }
                }, {
                    key: 'setDayOfWeek',
                    value: function setDayOfWeek(index) {
                        if (this.headerCalendar) {
                            this.headerCalendar.firstDayOfWeek = index;
                            this.headerCalendar.dataBind();
                        }
                    }
                }, {
                    key: 'setCalendarDate',
                    value: function setCalendarDate(date) {
                        if (this.headerCalendar) {
                            this.headerCalendar.value = date;
                            this.headerCalendar.dataBind();
                        }
                    }
                }, {
                    key: 'getCalendarView',
                    value: function getCalendarView() {
                        if (this.parent.currentView === 'Month' || this.parent.currentView === 'MonthAgenda') {
                            return 'Year';
                        }
                        return 'Month';
                    }
                }, {
                    key: 'setCalendarView',
                    value: function setCalendarView() {
                        if (this.headerCalendar) {
                            var calendarView = this.getCalendarView();
                            this.headerCalendar.depth = calendarView;
                            this.headerCalendar.start = calendarView;
                            this.headerCalendar.refresh();
                        }
                    }
                }, {
                    key: 'setRtl',
                    value: function setRtl(isRtl) {
                        if (this.headerPopup) {
                            this.headerPopup.enableRtl = isRtl;
                            this.headerPopup.dataBind();
                        }
                        if (this.headerCalendar) {
                            this.headerCalendar.enableRtl = isRtl;
                            this.headerCalendar.dataBind();
                        }
                        this.toolbarObj.enableRtl = isRtl;
                        this.toolbarObj.dataBind();
                    }
                }, {
                    key: 'updateActiveView',
                    value: function updateActiveView() {
                        var currentViewCls = '.e-' + this.parent.currentView.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                        var selEle = this.toolbarObj.element.querySelectorAll('.e-active-view');
                        removeClass(selEle, ['e-active-view']);
                        addClass(this.toolbarObj.element.querySelectorAll(currentViewCls), ['e-active-view']);
                    }
                }, {
                    key: 'updateDateRange',
                    value: function updateDateRange() {
                        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getDateRangeText();

                        var selEle = this.toolbarObj.element.querySelector('.e-date-range');
                        selEle.setAttribute('aria-label', text);
                        selEle.querySelector('.e-tbar-btn-text').innerHTML = text;
                    }
                }, {
                    key: 'getDateRangeText',
                    value: function getDateRangeText() {
                        return this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
                    }
                }, {
                    key: 'getItems',
                    value: function getItems() {
                        var items = [];
                        var showInPopup = this.parent.isAdaptive;
                        items.push({
                            align: 'Left', prefixIcon: 'e-icon-prev', tooltipText: 'Previous', overflow: 'Show',
                            cssClass: 'e-prev', htmlAttributes: { 'aria-label': 'previous period' }
                        });
                        items.push({
                            align: 'Left', prefixIcon: 'e-icon-next', tooltipText: 'Next', overflow: 'Show',
                            cssClass: 'e-next', htmlAttributes: { 'aria-label': 'next period' }
                        });
                        items.push({
                            align: 'Left', text: this.getDateRangeText(), suffixIcon: 'e-icon-down-arrow', cssClass: 'e-date-range',
                            overflow: 'Show', htmlAttributes: { 'aria-atomic': 'true', 'aria-live': 'assertive', 'aria-label': 'title' }
                        });
                        if (this.parent.isAdaptive) {
                            items.push({
                                align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-add', text: this.l10n.getConstant('newEvent'),
                                cssClass: 'e-add', overflow: 'Show'
                            });
                            items.push({
                                align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-today', text: this.l10n.getConstant('today'),
                                cssClass: 'e-today', overflow: 'Show'
                            });
                        } else {
                            items.push({
                                align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-day', text: this.l10n.getConstant('today'),
                                cssClass: 'e-today', overflow: 'Show'
                            });
                            if (this.parent.views.length > 1) {
                                items.push({
                                    align: 'Right', type: 'Separator', cssClass: 'e-schedule-seperator'
                                });
                            }
                        }
                        if (this.parent.views.length > 1) {
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = this.parent.views[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var item = _step.value;

                                    typeof item === 'string' ? items.push(this.getItemObject(item.toLowerCase())) : items.push(this.getItemObject(item.option.toLowerCase()));
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }
                        return items;
                    }
                }, {
                    key: 'getItemObject',
                    value: function getItemObject(viewName) {
                        var view = void 0;
                        var showInPopup = this.parent.isAdaptive;
                        switch (viewName) {
                            case 'day':
                                view = {
                                    align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-day', text: this.l10n.getConstant('day'),
                                    cssClass: 'e-day'
                                };
                                break;
                            case 'week':
                                view = {
                                    align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-week', text: this.l10n.getConstant('week'),
                                    cssClass: 'e-week'
                                };
                                break;
                            case 'workweek':
                                view = {
                                    align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-workweek', text: this.l10n.getConstant('workWeek'),
                                    cssClass: 'e-work-week'
                                };
                                break;
                            case 'month':
                                view = {
                                    align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-month', text: this.l10n.getConstant('month'),
                                    cssClass: 'e-month'
                                };
                                break;
                            case 'agenda':
                                view = {
                                    align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-agenda', text: this.l10n.getConstant('agenda'),
                                    cssClass: 'e-agenda'
                                };
                                break;
                            // case 'weekagenda':
                            //     view = {
                            //         align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-week', text: this.l10n.getConstant('weekAgenda'),
                            //         cssClass: 'e-week-agenda'
                            //     };
                            //     break;
                            // case 'workweekagenda':
                            //     view = {
                            //         align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-workweek',
                            //         text: this.l10n.getConstant('workWeekAgenda'), cssClass: 'e-work-week-agenda'
                            //     };
                            //     break;
                            case 'monthagenda':
                                view = {
                                    align: 'Right', showAlwaysInPopup: showInPopup, prefixIcon: 'e-icon-month-agenda',
                                    text: this.l10n.getConstant('monthAgenda'), cssClass: 'e-month-agenda'
                                };
                                break;
                        }
                        return view;
                    }
                }, {
                    key: 'renderHeaderPopup',
                    value: function renderHeaderPopup() {
                        var headerPopupEle = createElement('div', { className: HEADER_POPUP_CLASS });
                        var headerCalendarEle = createElement('div', { className: HEADER_CALENDAR_CLASS });
                        headerPopupEle.appendChild(headerCalendarEle);
                        this.element.appendChild(headerPopupEle);
                        this.headerPopup = new Popup(headerPopupEle, {
                            actionOnScroll: 'hide',
                            targetType: 'relative',
                            relateTo: this.getPopUpRelativeElement(),
                            position: { X: 'left', Y: 'bottom' },
                            enableRtl: this.parent.enableRtl
                        });
                        var calendarView = this.getCalendarView();
                        this.headerCalendar = new Calendar({
                            value: this.parent.selectedDate,
                            firstDayOfWeek: this.parent.firstDayOfWeek,
                            enableRtl: this.parent.enableRtl,
                            locale: this.parent.locale,
                            depth: calendarView,
                            start: calendarView,
                            change: this.calendarChange.bind(this)
                        });
                        this.headerCalendar.appendTo(headerCalendarEle);
                        this.headerPopup.hide();
                    }
                }, {
                    key: 'calendarChange',
                    value: function calendarChange(args) {
                        if (args.value.getTime() !== this.parent.selectedDate.getTime()) {
                            this.parent.changeDate(args.value);
                        }
                        this.headerPopup.hide();
                    }
                }, {
                    key: 'toolbarClickHandler',
                    value: function toolbarClickHandler(args) {
                        if (!args.item) {
                            return;
                        }
                        switch (args.item.cssClass) {
                            case 'e-date-range':
                                if (!this.headerPopup) {
                                    this.renderHeaderPopup();
                                }
                                if (this.headerPopup.element.classList.contains(POPUP_OPEN)) {
                                    this.headerPopup.hide();
                                } else {
                                    this.headerPopup.show();
                                }
                                break;
                            case 'e-day':
                                this.parent.changeView('Day', args.originalEvent);
                                break;
                            case 'e-week':
                                this.parent.changeView('Week', args.originalEvent);
                                break;
                            case 'e-work-week':
                                this.parent.changeView('WorkWeek', args.originalEvent);
                                break;
                            case 'e-month':
                                this.parent.changeView('Month', args.originalEvent);
                                break;
                            case 'e-agenda':
                                this.parent.changeView('Agenda', args.originalEvent);
                                break;
                            // case 'e-week-agenda':
                            //     this.parent.changeView('weekAgenda', args.originalEvent);
                            //     break;
                            // case 'e-work-week-agenda':
                            //     this.parent.changeView('workWeekAgenda', args.originalEvent);
                            //     break;
                            case 'e-month-agenda':
                                this.parent.changeView('MonthAgenda', args.originalEvent);
                                break;
                            case 'e-today':
                                if (!this.parent.isSelectedDate(resetTime(new Date()))) {
                                    this.parent.changeDate(resetTime(new Date()), args.originalEvent);
                                }
                                break;
                            case 'e-prev':
                                this.parent.changeDate(this.parent.activeView.getNextPreviousDate('previous'), args.originalEvent);
                                break;
                            case 'e-next':
                                this.parent.changeDate(this.parent.activeView.getNextPreviousDate('next'), args.originalEvent);
                                break;
                            case 'e-add':
                                var data = void 0;
                                if (this.parent.activeCellsData) {
                                    data = this.parent.activeCellsData;
                                } else {
                                    var today = new Date();
                                    var majorSlot = 60;
                                    var minorSlotCount = 2;
                                    var msMajorInterval = majorSlot * MS_PER_MINUTE;
                                    var msInterval = msMajorInterval / minorSlotCount;
                                    var startTime = new Date(this.parent.selectedDate.getTime());
                                    startTime.setHours(today.getHours(), Math.round(startTime.getMinutes() / msInterval) * msInterval, 0);
                                    var endTime = new Date(new Date(startTime.getTime()).setMilliseconds(startTime.getMilliseconds() + msInterval));
                                    data = extend({ startTime: startTime, endTime: endTime, isAllDay: false }, { cancel: false, event: args.originalEvent });
                                }
                                this.parent.eventWindow.openEditor(data, 'Add');
                                break;
                        }
                        var toolbarPopUp = this.toolbarObj.element.querySelector('.e-toolbar-pop');
                        if (toolbarPopUp) {
                            toolbarPopUp.ej2_instances[0].hide({ name: 'SlideUp', duration: 100 });
                        }
                    }
                }, {
                    key: 'getHeaderElement',
                    value: function getHeaderElement() {
                        return this.element;
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'headerbar';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (!this.toolbarObj.isDestroyed) {
                            this.toolbarObj.destroy();
                            this.removeEventListener();
                            remove(this.element);
                        }
                    }
                }]);

                return HeaderRenderer;
            }());

            Scroll = function () {
                /**
                 * Constructor for the scrolling.
                 * @hidden
                 */
                function Scroll(parent) {
                    _classCallCheck(this, Scroll);

                    this.parent = parent;
                    this.addEventListener();
                }
                /**
                 * For internal use only - Get the module name.
                 * @private
                 */


                _createClass(Scroll, [{
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'scroll';
                    }
                }, {
                    key: 'setWidth',
                    value: function setWidth() {
                        this.parent.element.style.width = formatUnit(this.parent.width);
                    }
                }, {
                    key: 'setHeight',
                    value: function setHeight() {
                        this.parent.element.style.height = formatUnit(this.parent.height);
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener() {
                        this.parent.on(contentReady, this.setDimensions, this);
                        this.parent.on(uiUpdate, this.onPropertyChanged, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        this.parent.off(contentReady, this.setDimensions);
                        this.parent.off(uiUpdate, this.onPropertyChanged);
                    }
                }, {
                    key: 'setDimensions',
                    value: function setDimensions() {
                        this.setWidth();
                        this.setHeight();
                        var cssProps = this.getCssProperties(this.parent.enableRtl);
                        var data = { cssProperties: cssProps, module: this.getModuleName() };
                        this.parent.notify(scrollUiUpdate, data);
                    }
                }, {
                    key: 'getCssProperties',
                    value: function getCssProperties(enableRtl) {
                        var css = {};
                        css.border = enableRtl ? 'borderLeftWidth' : 'borderRightWidth';
                        css.padding = enableRtl ? 'paddingLeft' : 'paddingRight';
                        return css;
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(e) {
                        this.setDimensions();
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.removeEventListener();
                    }
                }]);

                return Scroll;
            }();

            ScheduleTouch = function () {
                function ScheduleTouch(parent) {
                    _classCallCheck(this, ScheduleTouch);

                    this.parent = parent;
                    this.element = this.parent.element.querySelector('.' + TABLE_CONTAINER_CLASS);
                    this.touchObj = new Touch(this.element, {
                        scroll: this.scrollHandler.bind(this),
                        swipe: this.swipeHandler.bind(this),
                        tapHold: this.tapHoldHandler.bind(this),
                        swipeSettings: { swipeThresholdDistance: 1 }
                    });
                    EventHandler.add(this.element, 'transitionend', this.onTransitionEnd, this);
                    this.touchLeftDirection = this.parent.enableRtl ? 'Right' : 'Left';
                    this.touchRightDirection = this.parent.enableRtl ? 'Left' : 'Right';
                }

                _createClass(ScheduleTouch, [{
                    key: 'scrollHandler',
                    value: function scrollHandler(e) {
                        if (this.parent.currentView === 'Agenda' || e.originalEvent && !isNullOrUndefined(closest(e.originalEvent.target, '.' + APPOINTMENT_WRAP_CLASS))) {
                            return;
                        }
                        if (!this.timeStampStart) {
                            this.timeStampStart = Date.now();
                        }
                        if (this.element.classList.contains(TRANSLATE_CLASS)) {
                            this.onTransitionEnd();
                        }
                        if (e.scrollDirection === 'Left' || e.scrollDirection === 'Right') {
                            var args = { requestType: 'dateNavigate', cancel: false, event: e.originalEvent };
                            this.parent.trigger(actionBegin, args);
                            if (args.cancel) {
                                return;
                            }
                            var scrollDiv = this.element.querySelector('.' + CONTENT_WRAP_CLASS);
                            if (scrollDiv && scrollDiv.scrollWidth > scrollDiv.clientWidth) {
                                return;
                            } else {
                                this.isScrollTriggered = true;
                                e.originalEvent.preventDefault();
                                e.originalEvent.stopPropagation();
                            }
                        }
                        if (e.scrollDirection === this.touchLeftDirection) {
                            if (!this.nextPanel) {
                                this.renderPanel(NEXT_PANEL_CLASS, 'next');
                                this.nextPanel = {
                                    element: this.parent.activeView.getPanel(),
                                    selectedDate: new Date(this.parent.selectedDate.getTime())
                                };
                                this.setDimensions(this.nextPanel.element);
                            }
                            var x = this.parent.enableRtl ? e.distanceX : -e.distanceX;
                            this.element.style.transform = 'translatex(' + (this.getTranslateX(this.element) + x) + 'px)';
                        } else if (e.scrollDirection === this.touchRightDirection) {
                            var prevWidth = 0;
                            if (!this.previousPanel) {
                                this.renderPanel(PREVIOUS_PANEL_CLASS, 'previous');
                                this.previousPanel = {
                                    element: this.parent.activeView.getPanel(),
                                    selectedDate: new Date(this.parent.selectedDate.getTime())
                                };
                                this.setDimensions(this.previousPanel.element);
                                prevWidth = this.previousPanel.element.offsetWidth;
                            }
                            var _x2 = this.parent.enableRtl ? prevWidth - e.distanceX : -prevWidth + e.distanceX;
                            this.element.style.transform = 'translatex(' + (this.getTranslateX(this.element) + _x2) + 'px)';
                        }
                    }
                }, {
                    key: 'swipeHandler',
                    value: function swipeHandler(e) {
                        if (!this.isScrollTriggered) {
                            return;
                        }
                        this.isScrollTriggered = false;
                        if (e.swipeDirection === 'Left' || e.swipeDirection === 'Right') {
                            var time = Date.now() - this.timeStampStart;
                            var offsetDist = e.distanceX * 1.66;
                            if (offsetDist > time || e.distanceX > this.parent.element.offsetWidth / 2) {
                                this.swapPanels(e.swipeDirection);
                                if (offsetDist > time && e.distanceX > this.parent.element.offsetWidth / 2) {
                                    this.element.style.transitionDuration = offsetDist / time / 10 + 's';
                                }
                                this.confirmSwipe(e.swipeDirection);
                            } else {
                                this.cancelSwipe();
                            }
                            var args = { requestType: 'dateNavigate', cancel: false, event: e.originalEvent };
                            this.parent.trigger(actionComplete, args);
                        } else {
                            this.cancelSwipe();
                        }
                        this.timeStampStart = null;
                    }
                }, {
                    key: 'tapHoldHandler',
                    value: function tapHoldHandler(e) {
                        var target = closest(e.originalEvent.target, '.' + APPOINTMENT_CLASS);
                        if (!isNullOrUndefined(target)) {
                            this.parent.quickPopup.eventHold(e.originalEvent);
                            return;
                        }
                        target = closest(e.originalEvent.target, '.' + WORK_CELLS_CLASS) || closest(e.originalEvent.target, '.' + ALLDAY_CELLS_CLASS) || closest(e.originalEvent.target, '.' + HEADER_CELLS_CLASS);
                        if (!isNullOrUndefined(target)) {
                            this.parent.activeCellsData = this.parent.getCellDetails(target);
                            this.parent.eventWindow.openEditor(this.parent.activeCellsData, 'Add');
                            return;
                        }
                    }
                }, {
                    key: 'renderPanel',
                    value: function renderPanel(clsName, nextPrevType) {
                        if (!this.currentPanel) {
                            this.currentPanel = {
                                element: this.parent.activeView.getPanel(),
                                selectedDate: new Date(this.parent.selectedDate.getTime())
                            };
                            this.setDimensions(this.currentPanel.element);
                        } else {
                            this.parent.setProperties({ selectedDate: this.currentPanel.selectedDate }, true);
                        }
                        this.parent.setProperties({ selectedDate: this.parent.activeView.getNextPreviousDate(nextPrevType) }, true);
                        this.parent.activeView.getRenderDates();
                        this.parent.activeView.renderLayout(clsName);
                    }
                }, {
                    key: 'swapPanels',
                    value: function swapPanels(direction) {
                        if (direction === this.touchLeftDirection) {
                            var temp = this.nextPanel;
                            this.nextPanel = this.currentPanel;
                            this.currentPanel = temp;
                        } else {
                            var _temp = this.previousPanel;
                            this.previousPanel = this.currentPanel;
                            this.currentPanel = _temp;
                        }
                    }
                }, {
                    key: 'confirmSwipe',
                    value: function confirmSwipe(swipeDirection) {
                        var previousDate = swipeDirection === this.touchLeftDirection ? this.nextPanel.selectedDate : this.previousPanel.selectedDate;
                        var navArgs = {
                            action: 'date', cancel: false, previousDate: previousDate, currentDate: this.currentPanel.selectedDate
                        };
                        this.parent.trigger(navigating, navArgs);
                        if (navArgs.cancel) {
                            this.swapPanels(swipeDirection);
                            this.cancelSwipe();
                            return;
                        }
                        this.parent.activeView.setPanel(this.currentPanel.element);
                        this.parent.setProperties({ selectedDate: this.currentPanel.selectedDate }, true);
                        var translateX = void 0;
                        if (this.parent.enableRtl) {
                            translateX = swipeDirection === this.touchLeftDirection ? this.previousPanel ? this.previousPanel.element.offsetLeft : this.currentPanel.element.offsetWidth : 0;
                        } else {
                            translateX = swipeDirection === this.touchLeftDirection ? -this.currentPanel.element.offsetLeft : 0;
                        }
                        addClass([this.element], TRANSLATE_CLASS);
                        this.element.style.transform = 'translatex(' + translateX + 'px)';
                        if (this.parent.headerModule) {
                            this.parent.headerModule.updateDateRange(this.parent.activeView.getDateRangeText());
                        }
                        this.parent.renderModule.refreshDataManager();
                    }
                }, {
                    key: 'cancelSwipe',
                    value: function cancelSwipe() {
                        this.parent.activeView.setPanel(this.currentPanel.element);
                        this.parent.setProperties({ selectedDate: this.currentPanel.selectedDate }, true);
                        this.parent.activeView.getRenderDates();
                        addClass([this.element], TRANSLATE_CLASS);
                        var prevWidth = this.previousPanel ? this.previousPanel.element.offsetWidth : 0;
                        this.element.style.transform = 'translatex(' + (this.parent.enableRtl ? prevWidth : -this.currentPanel.element.offsetLeft) + 'px)';
                    }
                }, {
                    key: 'onTransitionEnd',
                    value: function onTransitionEnd() {
                        removeClass([this.element], TRANSLATE_CLASS);
                        this.element.style.transitionDuration = '';
                        this.element.style.transform = '';
                        if (this.previousPanel) {
                            remove(this.previousPanel.element);
                            this.previousPanel = null;
                            removeClass([this.currentPanel.element], PREVIOUS_PANEL_CLASS);
                            addClass([this.currentPanel.element], CURRENT_PANEL_CLASS);
                        }
                        if (this.nextPanel) {
                            remove(this.nextPanel.element);
                            this.nextPanel = null;
                            removeClass([this.currentPanel.element], NEXT_PANEL_CLASS);
                            addClass([this.currentPanel.element], CURRENT_PANEL_CLASS);
                        }
                        this.currentPanel = null;
                        this.parent.activeView.getPanel().style.width = '';
                    }
                }, {
                    key: 'getTranslateX',
                    value: function getTranslateX(element) {
                        var style = window.getComputedStyle(element);
                        return new WebKitCSSMatrix(style.webkitTransform).m41;
                    }
                }, {
                    key: 'setDimensions',
                    value: function setDimensions(element) {
                        element.style.width = this.parent.element.clientWidth + 'px';
                    }
                }, {
                    key: 'resetValues',
                    value: function resetValues() {
                        this.currentPanel = null;
                        this.previousPanel = null;
                        this.nextPanel = null;
                        this.timeStampStart = null;
                        this.element.style.transform = '';
                        this.element.innerHTML = '';
                        removeClass([this.element], TRANSLATE_CLASS);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.touchObj.destroy();
                        EventHandler.remove(this.element, 'transitionend', this.onTransitionEnd);
                        this.resetValues();
                    }
                }]);

                return ScheduleTouch;
            }();

            KeyboardInteraction = function () {
                function KeyboardInteraction(parent) {
                    _classCallCheck(this, KeyboardInteraction);

                    this.selectedCells = [];
                    this.keyConfigs = {
                        downArrow: 'downarrow',
                        upArrow: 'uparrow',
                        rightArrow: 'rightarrow',
                        leftArrow: 'leftarrow',
                        shiftDownArrow: 'shift+downarrow',
                        shiftUpArrow: 'shift+uparrow',
                        shiftRightArrow: 'shift+rightarrow',
                        shiftLeftArrow: 'shift+leftarrow',
                        ctrlLeftArrow: 'ctrl+leftarrow',
                        ctrlRightArrow: 'ctrl+rightarrow',
                        altOne: 'alt+1',
                        altTwo: 'alt+2',
                        altThree: 'alt+3',
                        altFour: 'alt+4',
                        altFive: 'alt+5',
                        altSix: 'alt+6',
                        enter: 'enter',
                        escape: 'escape',
                        delete: 'delete',
                        home: 'home',
                        pageUp: 'pageup',
                        pageDown: 'pagedown',
                        tab: 'tab',
                        shiftTab: 'shift+tab'
                    };
                    this.parent = parent;
                    this.parent.element.tabIndex = this.parent.element.tabIndex === -1 ? 0 : this.parent.element.tabIndex;
                    this.keyboardModule = new KeyboardEvents(this.parent.element, {
                        keyAction: this.keyActionHandler.bind(this),
                        keyConfigs: this.keyConfigs,
                        eventName: 'keydown'
                    });
                    this.addEventListener();
                }

                _createClass(KeyboardInteraction, [{
                    key: 'keyActionHandler',
                    value: function keyActionHandler(e) {
                        switch (e.action) {
                            case 'downArrow':
                            case 'shiftDownArrow':
                                this.processDown(e, e.shiftKey);
                                break;
                            case 'upArrow':
                            case 'shiftUpArrow':
                                this.processUp(e, e.shiftKey);
                                break;
                            case 'leftArrow':
                            case 'shiftLeftArrow':
                                this.processLeft(e, e.shiftKey);
                                break;
                            case 'rightArrow':
                            case 'shiftRightArrow':
                                this.processRight(e, e.shiftKey);
                                break;
                            case 'ctrlLeftArrow':
                                this.parent.changeDate(this.parent.activeView.getNextPreviousDate('previous'), e);
                                if (this.parent.headerModule) {
                                    this.parent.headerModule.element.querySelector('.e-prev button').focus();
                                }
                                break;
                            case 'ctrlRightArrow':
                                this.parent.changeDate(this.parent.activeView.getNextPreviousDate('next'), e);
                                if (this.parent.headerModule) {
                                    this.parent.headerModule.element.querySelector('.e-next button').focus();
                                }
                                break;
                            case 'altOne':
                            case 'altTwo':
                            case 'altThree':
                            case 'altFour':
                            case 'altFive':
                            case 'altSix':
                                this.processViewNavigation(e);
                                break;
                            case 'enter':
                                this.processEnter(e);
                                break;
                            case 'home':
                                this.focusFirstCell();
                                break;
                            case 'tab':
                            case 'shiftTab':
                                this.processTab(e, e.shiftKey);
                                break;
                            case 'delete':
                                this.processDelete(e);
                                break;
                            case 'escape':
                                this.processEscape();
                        }
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener() {
                        this.parent.on(_cellMouseDown, this.onCellMouseDown, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        this.parent.off(_cellMouseDown, this.onCellMouseDown);
                    }
                }, {
                    key: 'onCellMouseDown',
                    value: function onCellMouseDown(e) {
                        if (e.event.shiftKey) {
                            return;
                        }
                        this.initialTarget = e.event.target;
                        if (this.parent.activeViewOptions.readonly || this.parent.currentView === 'MonthAgenda') {
                            return;
                        }
                        if (e.event.target.classList.contains(WORK_CELLS_CLASS)) {
                            EventHandler.add(this.parent.getContentTable(), 'mousemove', this.onMouseSelection, this);
                            EventHandler.add(this.parent.getContentTable(), 'mouseup', this.onMoveup, this);
                        }
                        if (e.event.target.classList.contains(ALLDAY_CELLS_CLASS)) {
                            var allDayRow = this.parent.getAllDayRow();
                            if (allDayRow) {
                                EventHandler.add(allDayRow, 'mousemove', this.onMouseSelection, this);
                                EventHandler.add(allDayRow, 'mouseup', this.onMoveup, this);
                            }
                        }
                    }
                }, {
                    key: 'onMouseSelection',
                    value: function onMouseSelection(e) {
                        var target = closest(e.target, '.' + WORK_CELLS_CLASS + ',.' + ALLDAY_CELLS_CLASS);
                        if (target) {
                            this.selectCells(true, target);
                        }
                    }
                }, {
                    key: 'onAppointmentSelection',
                    value: function onAppointmentSelection(e) {
                        var target = closest(e.target, '.' + APPOINTMENT_CLASS);
                        var selectedElements = this.parent.eventBase.getSelectedEventElements(target);
                    }
                }, {
                    key: 'onMoveup',
                    value: function onMoveup(e) {
                        if (e.target.classList.contains(WORK_CELLS_CLASS)) {
                            EventHandler.remove(this.parent.getContentTable(), 'mousemove', this.onMouseSelection);
                            EventHandler.remove(this.parent.getContentTable(), 'mouseup', this.onMoveup);
                        }
                        if (e.target.classList.contains(ALLDAY_CELLS_CLASS)) {
                            var allDayRow = this.parent.getAllDayRow();
                            if (allDayRow) {
                                EventHandler.remove(allDayRow, 'mousemove', this.onMouseSelection);
                                EventHandler.remove(allDayRow, 'mouseup', this.onMoveup);
                            }
                        }
                    }
                }, {
                    key: 'processEnter',
                    value: function processEnter(e) {
                        var target = e.target;
                        if (target.classList.contains(WORK_CELLS_CLASS) || target.classList.contains(ALLDAY_CELLS_CLASS)) {
                            if (this.selectedCells.length > 1) {
                                var start = this.parent.getCellDetails(this.selectedCells[0]);
                                var end = this.parent.getCellDetails(this.selectedCells[this.selectedCells.length - 1]);
                                start.endTime = end.endTime;
                                start.element = target;
                                this.parent.activeCellsData = start;
                            } else {
                                this.parent.activeCellsData = this.parent.getCellDetails(target);
                            }
                            var args = extend(this.parent.activeCellsData, { cancel: false, event: e });
                            this.parent.notify(_cellClick, args);
                            return;
                        }
                        if (target.classList.contains(APPOINTMENT_CLASS) || target.classList.contains(MORE_EVENT_CLOSE_CLASS) || target.classList.contains(ALLDAY_APPOINTMENT_SECTION_CLASS) || target.classList.contains(MORE_INDICATOR_CLASS)) {
                            target.click();
                            return;
                        }
                        if (target.classList.contains(MORE_EVENT_HEADER_DATE_CLASS)) {
                            this.parent.setProperties({ selectedDate: new Date(parseInt(target.getAttribute('data-date'), 10)) }, true);
                            this.parent.changeView('Day');
                            this.processEscape();
                            return;
                        }
                    }
                }, {
                    key: 'getCells',
                    value: function getCells(isInverseTable, start, end) {
                        var tableEle = this.parent.getContentTable();
                        var cells = [].slice.call(tableEle.querySelectorAll('td'));
                        var maxRow = tableEle.rows.length;
                        var maxColumn = tableEle.rows[0].cells.length;
                        if (start.classList.contains(ALLDAY_CELLS_CLASS)) {
                            var allDayRow = this.parent.getAllDayRow();
                            cells = [].slice.call(allDayRow.cells);
                            maxRow = 1;
                            maxColumn = allDayRow.cells.length;
                        }
                        var startIndex = cells.indexOf(start);
                        var endIndex = cells.indexOf(end);
                        var inverseCells = [];
                        if (isInverseTable) {
                            for (var i = 0; i < maxColumn; i++) {
                                for (var j = 0; j < maxRow; j++) {
                                    inverseCells.push(cells[maxColumn * j + i]);
                                }
                            }
                            startIndex = inverseCells.indexOf(start);
                            endIndex = inverseCells.indexOf(end);
                        }
                        if (startIndex > endIndex) {
                            var temp = startIndex;
                            startIndex = endIndex;
                            endIndex = temp;
                        }
                        var sCells = isInverseTable ? inverseCells : cells;
                        return sCells.slice(startIndex, endIndex + 1);
                    }
                }, {
                    key: 'focusFirstCell',
                    value: function focusFirstCell() {
                        if (this.parent.currentView === 'Agenda') {
                            var focusCell = this.parent.getContentTable().querySelector('.' + AGENDA_CELLS_CLASS);
                            focusCell.setAttribute('tabindex', '0');
                            focusCell.focus();
                            return;
                        }
                        this.parent.eventBase.removeSelectedAppointmentClass();
                        this.selectCells(false, this.parent.getWorkCellElements()[0]);
                    }
                }, {
                    key: 'isInverseTableSelect',
                    value: function isInverseTableSelect() {
                        return this.parent.activeView.isInverseTableSelect;
                    }
                }, {
                    key: 'selectCells',
                    value: function selectCells(isMultiple, target) {
                        this.parent.removeSelectedClass();
                        if (isMultiple) {
                            var selectedCells = this.getCells(this.isInverseTableSelect(), this.initialTarget, target);
                            this.selectedCells = selectedCells;
                            if (selectedCells.length > 2 && !target.classList.contains(ALLDAY_CELLS_CLASS)) {
                                selectedCells = selectedCells.concat(this.getAllDayCells(selectedCells));
                            }
                            this.parent.addSelectedClass(selectedCells, target);
                        } else {
                            this.initialTarget = target;
                            this.selectedCells = [target];
                            this.parent.addSelectedClass([target], target);
                        }
                    }
                }, {
                    key: 'selectAppointment',
                    value: function selectAppointment(isReverse, target) {
                        var isMoreEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                        var appointments = void 0;
                        if (isMoreEvent) {
                            var moreEventWrapper = this.parent.element.querySelector('.' + MORE_EVENT_WRAPPER_CLASS);
                            appointments = [].slice.call(moreEventWrapper.children);
                        } else {
                            appointments = this.getAppointmentElements();
                        }
                        if (appointments.length < 0) {
                            return;
                        }
                        this.parent.eventBase.removeSelectedAppointmentClass();
                        var nextAppEle = void 0;
                        if (target.classList.contains(APPOINTMENT_CLASS)) {
                            var targetIndex = appointments.indexOf(target);
                            nextAppEle = appointments[isReverse ? targetIndex - 1 : targetIndex + 1];
                        } else {
                            nextAppEle = isReverse ? appointments[appointments.length - 1] : appointments[0];
                        }
                        if (nextAppEle) {
                            this.parent.eventBase.addSelectedAppointments([nextAppEle], nextAppEle);
                            nextAppEle.focus();
                        }
                    }
                }, {
                    key: 'selectAppointmentElementFromWorkCell',
                    value: function selectAppointmentElementFromWorkCell(isReverse, target) {
                        var _this = this;

                        this.parent.eventBase.removeSelectedAppointmentClass();
                        this.parent.removeSelectedClass();
                        if (target.classList.contains(WORK_CELLS_CLASS) || target.classList.contains(ALLDAY_CELLS_CLASS)) {
                            var appointmentElements = this.getUniqueAppointmentElements();
                            var filteredElements = [];
                            var selectedDate = parseInt(target.getAttribute('data-date'), 10);
                            var selectedSeriesEvents = this.parent.eventsProcessed.filter(function (eventObject) {
                                return !isReverse ? eventObject[_this.parent.eventFields.startTime].getTime() >= selectedDate : eventObject[_this.parent.eventFields.startTime].getTime() <= selectedDate;
                            });
                            selectedSeriesEvents.filter(function (event) {
                                appointmentElements.filter(function (element) {
                                    if (JSON.stringify(event.Guid) === JSON.stringify(element.getAttribute('data-guid'))) {
                                        filteredElements.push(element);
                                    }
                                });
                            });
                            if (filteredElements.length > 0) {
                                var selectedElement = isReverse ? filteredElements[filteredElements.length - 1] : filteredElements[0];
                                var focusElements = this.getAppointmentElementsByGuid(selectedElement.getAttribute('data-guid'));
                                this.parent.eventBase.addSelectedAppointments(focusElements, focusElements[focusElements.length - 1]);
                                focusElements[focusElements.length - 1].focus();
                            }
                        }
                    }
                }, {
                    key: 'getAllDayCells',
                    value: function getAllDayCells(cells) {
                        var allDayRow = this.parent.getAllDayRow();
                        if (!allDayRow) {
                            return [];
                        }
                        var startCell = cells[0];
                        var endCell = cells[cells.length - 1];
                        var start = this.parent.getCellDetails(startCell);
                        var end = this.parent.getCellDetails(endCell);
                        if (end.endTime.getTime() - start.startTime.getTime() >= MS_PER_DAY) {
                            var allDayCells = [].slice.call(allDayRow.cells);
                            return allDayCells.slice(startCell.cellIndex, endCell.cellIndex + 1);
                        }
                        return [];
                    }
                }, {
                    key: 'getAppointmentElements',
                    value: function getAppointmentElements() {
                        return [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_CLASS));
                    }
                }, {
                    key: 'getAppointmentElementsByGuid',
                    value: function getAppointmentElementsByGuid(guid) {
                        return [].slice.call(this.parent.element.querySelectorAll('div[data-guid="' + guid + '"]'));
                    }
                }, {
                    key: 'getUniqueAppointmentElements',
                    value: function getUniqueAppointmentElements() {
                        var appointments = this.getAppointmentElements();
                        var appointmentElements = [];
                        appointments.map(function (value) {
                            return value.getAttribute('data-guid');
                        }).filter(function (value, index, self) {
                            if (self.indexOf(value) === index) {
                                appointmentElements.push(appointments[index]);
                            }
                        });
                        return appointmentElements;
                    }
                }, {
                    key: 'getWorkCellFromAppointmentElement',
                    value: function getWorkCellFromAppointmentElement(target) {
                        var selectedObject = this.parent.eventBase.getEventByGuid(target.getAttribute('data-guid'));
                        return this.parent.eventBase.selectWorkCellByTime([selectedObject]);
                    }
                }, {
                    key: 'processViewNavigation',
                    value: function processViewNavigation(e) {
                        var index = parseInt(e.key, 10) - 1;
                        if (index < this.parent.views.length) {
                            var view = this.parent.viewOptions[Object.keys(this.parent.viewOptions)[index]].option;
                            this.parent.changeView(view, e);
                            if (this.parent.headerModule) {
                                this.parent.headerModule.element.querySelector('.e-active-view button').focus();
                            }
                        }
                    }
                }, {
                    key: 'processUp',
                    value: function processUp(e, isMultiple) {
                        if (isMultiple && this.parent.currentView === 'MonthAgenda') {
                            return;
                        }
                        var target = e.target;
                        var selectedElements = this.parent.getSelectedElements();
                        var selectedEventElements = this.parent.eventBase.getSelectedAppointments();
                        var moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
                        if (selectedElements.length > 0 && !e.target.classList.contains(WORK_CELLS_CLASS)) {
                            target = selectedElements[selectedElements.length - 1];
                        }
                        if (selectedEventElements.length > 0 && !moreEventWrapper.classList.contains(POPUP_OPEN) && ['Day', 'Week', 'WorkWeek', 'Month'].indexOf(this.parent.currentView) !== -1) {
                            target = this.getWorkCellFromAppointmentElement(selectedEventElements[selectedEventElements.length - 1]);
                            this.parent.eventBase.removeSelectedAppointmentClass();
                        }
                        if (target.classList.contains(WORK_CELLS_CLASS) && !this.parent.element.querySelector('.' + POPUP_OPEN)) {
                            var tableEle = this.parent.getContentTable();
                            var curRowIndex = target.parentNode.rowIndex;
                            if (curRowIndex > 0 && curRowIndex < tableEle.rows.length) {
                                this.selectCells(isMultiple, tableEle.rows[curRowIndex - 1].cells[target.cellIndex]);
                            }
                        } else if (this.parent.currentView === 'Agenda' || this.parent.currentView === 'MonthAgenda') {
                            this.selectAppointment(true, target);
                        }
                    }
                }, {
                    key: 'processDown',
                    value: function processDown(e, isMultiple) {
                        if (isMultiple && this.parent.currentView === 'MonthAgenda') {
                            return;
                        }
                        var target = e.target;
                        var selectedCells = this.parent.getSelectedElements();
                        var selectedElements = this.parent.eventBase.getSelectedAppointments();
                        var moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
                        if (selectedCells.length > 0 && !e.target.classList.contains(WORK_CELLS_CLASS)) {
                            target = selectedCells[selectedCells.length - 1];
                        }
                        if (selectedElements.length > 0 && !moreEventWrapper.classList.contains(POPUP_OPEN) && ['Day', 'Week', 'WorkWeek', 'Month'].indexOf(this.parent.currentView) !== -1) {
                            target = this.getWorkCellFromAppointmentElement(selectedElements[selectedElements.length - 1]);
                            this.parent.eventBase.removeSelectedAppointmentClass();
                        }
                        var tableEle = this.parent.getContentTable();
                        if (target.classList.contains(WORK_CELLS_CLASS) && !this.parent.element.querySelector('.' + POPUP_OPEN)) {
                            var curRowIndex = target.parentNode.rowIndex;
                            if (curRowIndex >= 0 && curRowIndex < tableEle.rows.length - 1) {
                                this.selectCells(isMultiple, tableEle.rows[curRowIndex + 1].cells[target.cellIndex]);
                            }
                        } else if (this.parent.currentView === 'Agenda' || this.parent.currentView === 'MonthAgenda') {
                            this.selectAppointment(false, target);
                        }
                    }
                }, {
                    key: 'processLeftRight',
                    value: function processLeftRight(target, isMultiple) {
                        var tableEle = this.parent.getContentTable();
                        var curRowIndex = target.parentNode.rowIndex;
                        var key = {
                            element: tableEle,
                            rowIndex: curRowIndex,
                            columnIndex: target.cellIndex,
                            maxIndex: tableEle.rows[curRowIndex].cells.length
                        };
                        return key;
                    }
                }, {
                    key: 'isCancelLeftRightAction',
                    value: function isCancelLeftRightAction(isMultiple) {
                        if (this.parent.currentView === 'Agenda' || isMultiple && this.parent.currentView === 'MonthAgenda') {
                            return true;
                        }
                        var moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
                        if (moreEventWrapper.classList.contains(POPUP_OPEN)) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'processRight',
                    value: function processRight(e, isMultiple) {
                        if (this.isCancelLeftRightAction(isMultiple)) {
                            return;
                        }
                        var selectedCells = this.parent.getSelectedElements();
                        var selectedAppointments = this.parent.eventBase.getSelectedAppointments();
                        var target = e.target;
                        if (selectedCells.length > 0 && !target.classList.contains(WORK_CELLS_CLASS) && !target.classList.contains(ALLDAY_CELLS_CLASS)) {
                            target = selectedCells[selectedCells.length - 1];
                        }
                        if (selectedAppointments.length > 0) {
                            target = this.getWorkCellFromAppointmentElement(selectedAppointments[selectedAppointments.length - 1]);
                            this.parent.eventBase.removeSelectedAppointmentClass();
                        }
                        if (target.classList.contains(WORK_CELLS_CLASS)) {
                            var key = this.processLeftRight(target, isMultiple);
                            if (key.columnIndex >= 0 && key.columnIndex < key.maxIndex - 1) {
                                this.selectCells(isMultiple, key.element.rows[key.rowIndex].cells[target.cellIndex + 1]);
                            } else if (key.columnIndex === key.maxIndex - 1) {
                                if (!this.isInverseTableSelect() && key.rowIndex < key.element.rows.length - 1) {
                                    this.selectCells(isMultiple, key.element.rows[key.rowIndex + 1].cells[0]);
                                } else if (!isMultiple) {
                                    var rowIndex = this.isInverseTableSelect() ? key.rowIndex : 0;
                                    this.parent.changeDate(this.parent.activeView.getNextPreviousDate('next'), e);
                                    var tableEle = this.parent.getContentTable();
                                    this.selectCells(false, tableEle.rows[rowIndex].cells[0]);
                                }
                            }
                        } else if (target.classList.contains(ALLDAY_CELLS_CLASS)) {
                            var curColIndex = target.cellIndex;
                            var allDayRow = this.parent.getAllDayRow();
                            var maxColIndex = allDayRow.cells.length;
                            if (curColIndex >= 0 && curColIndex < maxColIndex - 1) {
                                this.selectCells(isMultiple, allDayRow.cells[curColIndex + 1]);
                            } else if (curColIndex === maxColIndex - 1 && !isMultiple) {
                                this.parent.changeDate(this.parent.activeView.getNextPreviousDate('next'), e);
                                var _allDayRow = this.parent.getAllDayRow();
                                this.selectCells(false, _allDayRow.cells[0]);
                            }
                        }
                    }
                }, {
                    key: 'processLeft',
                    value: function processLeft(e, isMultiple) {
                        if (this.isCancelLeftRightAction(isMultiple)) {
                            return;
                        }
                        var target = e.target;
                        var selectedCells = this.parent.getSelectedElements();
                        if (selectedCells.length > 0 && !target.classList.contains(WORK_CELLS_CLASS) && !target.classList.contains(ALLDAY_CELLS_CLASS)) {
                            target = selectedCells[selectedCells.length - 1];
                        }
                        var selectedElements = this.parent.eventBase.getSelectedAppointments();
                        if (selectedElements.length > 0) {
                            target = this.getWorkCellFromAppointmentElement(selectedElements[selectedElements.length - 1]);
                            this.parent.eventBase.removeSelectedAppointmentClass();
                        }
                        if (target.classList.contains(WORK_CELLS_CLASS)) {
                            var key = this.processLeftRight(target, isMultiple);
                            if (key.columnIndex > 0 && key.columnIndex < key.maxIndex) {
                                this.selectCells(isMultiple, key.element.rows[key.rowIndex].cells[target.cellIndex - 1]);
                            } else if (key.columnIndex === 0) {
                                if (!this.isInverseTableSelect() && key.rowIndex > 0) {
                                    this.selectCells(isMultiple, key.element.rows[key.rowIndex - 1].cells[key.maxIndex - 1]);
                                } else if (!isMultiple) {
                                    this.parent.changeDate(this.parent.activeView.getNextPreviousDate('previous'), e);
                                    var tableEle = this.parent.getContentTable();
                                    var rowIndex = this.isInverseTableSelect() ? key.rowIndex : tableEle.rows.length - 1;
                                    this.selectCells(false, tableEle.rows[rowIndex].cells[key.maxIndex - 1]);
                                }
                            }
                        } else if (target.classList.contains(ALLDAY_CELLS_CLASS)) {
                            var curColIndex = target.cellIndex;
                            var allDayRow = this.parent.getAllDayRow();
                            var maxColIndex = allDayRow.cells.length;
                            if (curColIndex > 0 && curColIndex < maxColIndex) {
                                this.selectCells(isMultiple, allDayRow.cells[curColIndex - 1]);
                            } else if (curColIndex === 0 && !isMultiple) {
                                this.parent.changeDate(this.parent.activeView.getNextPreviousDate('previous'), e);
                                var _allDayRow2 = this.parent.getAllDayRow();
                                this.selectCells(false, _allDayRow2.cells[maxColIndex - 1]);
                            }
                        }
                    }
                }, {
                    key: 'processTab',
                    value: function processTab(e, isReverse) {
                        var target = e.target;
                        var selectedAppointments = this.parent.eventBase.getSelectedAppointments();
                        var moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
                        if (closest(target, '.' + MORE_POPUP_WRAPPER_CLASS)) {
                            if (isNullOrUndefined(moreEventWrapper) || !moreEventWrapper.classList.contains(POPUP_OPEN)) {
                                return;
                            }
                            var moreEventList = [].slice.call(moreEventWrapper.querySelector('.' + MORE_EVENT_WRAPPER_CLASS).children);
                            var focusElement = moreEventList[moreEventList.length - 1];
                            if (selectedAppointments.length > 0) {
                                target = selectedAppointments[selectedAppointments.length - 1];
                            }
                            if (target.classList.contains(MORE_EVENT_CLOSE_CLASS) && !isReverse) {
                                moreEventWrapper.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).focus();
                            } else if (target.classList.contains(MORE_EVENT_HEADER_DATE_CLASS) && !isReverse) {
                                this.selectAppointment(isReverse, target, true);
                            } else if (target.classList.contains(MORE_EVENT_HEADER_DATE_CLASS) && isReverse) {
                                moreEventWrapper.querySelector('.' + MORE_EVENT_CLOSE_CLASS).focus();
                            } else if (target.classList.contains(MORE_EVENT_CLOSE_CLASS) && isReverse) {
                                this.parent.eventBase.removeSelectedAppointmentClass();
                                this.parent.eventBase.addSelectedAppointments([focusElement], focusElement);
                                focusElement.focus();
                            } else if (target.classList.contains(APPOINTMENT_CLASS)) {
                                if (isReverse && target.getAttribute('data-guid') === moreEventList[0].getAttribute('data-guid')) {
                                    this.parent.eventBase.removeSelectedAppointmentClass();
                                    moreEventWrapper.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).focus();
                                } else if (!isReverse && target.getAttribute('data-guid') === focusElement.getAttribute('data-guid')) {
                                    this.parent.eventBase.removeSelectedAppointmentClass();
                                    moreEventWrapper.querySelector('.' + MORE_EVENT_CLOSE_CLASS).focus();
                                } else {
                                    this.selectAppointment(isReverse, target, true);
                                }
                            }
                            e.preventDefault();
                            return;
                        }
                        var appointments = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_CLASS));
                        if (target.classList.contains(ROOT)) {
                            this.parent.eventBase.removeSelectedAppointmentClass();
                            return;
                        }
                        if (target.classList.contains(APPOINTMENT_CLASS)) {
                            if (selectedAppointments.length > 0) {
                                target = selectedAppointments[selectedAppointments.length - 1];
                            }
                            this.parent.eventBase.removeSelectedAppointmentClass();
                            if (!isReverse && target.getAttribute('data-guid') === appointments[appointments.length - 1].getAttribute('data-guid') || isReverse && target.getAttribute('data-guid') === appointments[0].getAttribute('data-guid')) {
                                return;
                            }
                            if (this.parent.currentView === 'Agenda' || this.parent.currentView === 'MonthAgenda') {
                                this.selectAppointment(isReverse, target);
                                e.preventDefault();
                            }
                            return;
                        }
                        var selectedCells = this.parent.getSelectedElements();
                        if (selectedCells.length > 0 && !target.classList.contains(APPOINTMENT_CLASS)) {
                            target = selectedCells[selectedCells.length - 1];
                            this.selectAppointmentElementFromWorkCell(isReverse, target);
                            e.preventDefault();
                            return;
                        }
                    }
                }, {
                    key: 'processDelete',
                    value: function processDelete(e) {
                        if (document.activeElement.classList.contains(APPOINTMENT_CLASS)) {
                            addClass([document.activeElement], APPOINTMENT_BORDER);
                            this.parent.activeEventData = this.parent.eventBase.getSelectedEvents();
                            this.parent.quickPopup.deleteClick();
                        }
                        this.parent.quickPopup.morePopup.hide();
                    }
                }, {
                    key: 'processEscape',
                    value: function processEscape() {
                        this.parent.quickPopup.onClosePopup();
                        this.parent.quickPopup.morePopup.hide();
                        if (this.parent.headerModule) {
                            this.parent.headerModule.hideHeaderPopup();
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'keyboard';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.removeEventListener();
                        this.keyboardModule.destroy();
                    }
                }]);

                return KeyboardInteraction;
            }();

            Data = function () {
                /**
                 * Constructor for data module
                 * @private
                 */
                function Data(dataSource, query) {
                    _classCallCheck(this, Data);

                    this.initDataManager(dataSource, query);
                }
                /**
                 * The function used to initialize dataManager and query
                 * @return {void}
                 * @private
                 */


                _createClass(Data, [{
                    key: 'initDataManager',
                    value: function initDataManager(dataSource, query) {
                        this.dataManager = dataSource instanceof DataManager ? dataSource : new DataManager(dataSource);
                        this.query = query instanceof Query ? query : new Query();
                    }
                }, {
                    key: 'generateQuery',
                    value: function generateQuery(startDate, endDate) {
                        var query = this.query.clone();
                        if (startDate) {
                            query.addParams('StartDate', startDate.toISOString());
                        }
                        if (endDate) {
                            query.addParams('EndDate', endDate.toISOString());
                        }
                        return query;
                    }
                }, {
                    key: 'getData',
                    value: function getData(query) {
                        return this.dataManager.executeQuery(query);
                    }
                }]);

                return Data;
            }();

            _export('Timezone', Timezone = function () {
                function Timezone() {
                    _classCallCheck(this, Timezone);
                }

                _createClass(Timezone, [{
                    key: 'offset',
                    value: function offset(date, timezone) {
                        var localOffset = date.getTimezoneOffset();
                        try {
                            var convertedDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
                            if (!isNaN(convertedDate.getTime())) {
                                return (date.getTime() - convertedDate.getTime()) / 60000 + localOffset;
                            }
                            return 0;
                        } catch (error) {
                            return 0;
                        }
                    }
                }, {
                    key: 'convert',
                    value: function convert(date, fromOffset, toOffset) {
                        if (typeof fromOffset === 'string') {
                            fromOffset = this.offset(date, fromOffset);
                        }
                        if (typeof toOffset === 'string') {
                            toOffset = this.offset(date, toOffset);
                        }
                        var fromLocalOffset = date.getTimezoneOffset();
                        date = new Date(date.getTime() + (fromOffset - toOffset) * 60000);
                        var toLocalOffset = date.getTimezoneOffset();
                        return new Date(date.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
                    }
                }, {
                    key: 'add',
                    value: function add(date, timezone) {
                        return this.convert(date, date.getTimezoneOffset(), timezone);
                    }
                }, {
                    key: 'remove',
                    value: function remove(date, timezone) {
                        return this.convert(date, timezone, date.getTimezoneOffset());
                    }
                }, {
                    key: 'removeLocalOffset',
                    value: function removeLocalOffset(date) {
                        return new Date(+date - date.getTimezoneOffset() * 60000);
                    }
                }]);

                return Timezone;
            }());

            _export('localTimezoneName', localTimezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC');

            _export('timezoneData', timezoneData = [{ Value: 'Pacific/Niue', Text: '(UTC-11:00) Niue' }, { Value: 'Pacific/Pago_Pago', Text: '(UTC-11:00) Pago Pago' }, { Value: 'Pacific/Honolulu', Text: '(UTC-10:00) Hawaii Time' }, { Value: 'Pacific/Rarotonga', Text: '(UTC-10:00) Rarotonga' }, { Value: 'Pacific/Tahiti', Text: '(UTC-10:00) Tahiti' }, { Value: 'Pacific/Marquesas', Text: '(UTC-09:30) Marquesas' }, { Value: 'America/Anchorage', Text: '(UTC-09:00) Alaska Time' }, { Value: 'Pacific/Gambier', Text: '(UTC-09:00) Gambier' }, { Value: 'America/Los_Angeles', Text: '(UTC-08:00) Pacific Time' }, { Value: 'America/Tijuana', Text: '(UTC-08:00) Pacific Time - Tijuana' }, { Value: 'America/Vancouver', Text: '(UTC-08:00) Pacific Time - Vancouver' }, { Value: 'America/Whitehorse', Text: '(UTC-08:00) Pacific Time - Whitehorse' }, { Value: 'Pacific/Pitcairn', Text: '(UTC-08:00) Pitcairn' }, { Value: 'America/Denver', Text: '(UTC-07:00) Mountain Time' }, { Value: 'America/Phoenix', Text: '(UTC-07:00) Mountain Time - Arizona' }, { Value: 'America/Mazatlan', Text: '(UTC-07:00) Mountain Time - Chihuahua, Mazatlan' }, { Value: 'America/Dawson_Creek', Text: '(UTC-07:00) Mountain Time - Dawson Creek' }, { Value: 'America/Edmonton', Text: '(UTC-07:00) Mountain Time - Edmonton' }, { Value: 'America/Hermosillo', Text: '(UTC-07:00) Mountain Time - Hermosillo' }, { Value: 'America/Yellowknife', Text: '(UTC-07:00) Mountain Time - Yellowknife' }, { Value: 'America/Belize', Text: '(UTC-06:00) Belize' }, { Value: 'America/Chicago', Text: '(UTC-06:00) Central Time' }, { Value: 'America/Mexico_City', Text: '(UTC-06:00) Central Time - Mexico City' }, { Value: 'America/Regina', Text: '(UTC-06:00) Central Time - Regina' }, { Value: 'America/Tegucigalpa', Text: '(UTC-06:00) Central Time - Tegucigalpa' }, { Value: 'America/Winnipeg', Text: '(UTC-06:00) Central Time - Winnipeg' }, { Value: 'America/Costa_Rica', Text: '(UTC-06:00) Costa Rica' }, { Value: 'America/El_Salvador', Text: '(UTC-06:00) El Salvador' }, { Value: 'Pacific/Galapagos', Text: '(UTC-06:00) Galapagos' }, { Value: 'America/Guatemala', Text: '(UTC-06:00) Guatemala' }, { Value: 'America/Managua', Text: '(UTC-06:00) Managua' }, { Value: 'America/Cancun', Text: '(UTC-05:00) America Cancun' }, { Value: 'America/Bogota', Text: '(UTC-05:00) Bogota' }, { Value: 'Pacific/Easter', Text: '(UTC-05:00) Easter Island' }, { Value: 'America/New_York', Text: '(UTC-05:00) Eastern Time' }, { Value: 'America/Iqaluit', Text: '(UTC-05:00) Eastern Time - Iqaluit' }, { Value: 'America/Toronto', Text: '(UTC-05:00) Eastern Time - Toronto' }, { Value: 'America/Guayaquil', Text: '(UTC-05:00) Guayaquil' }, { Value: 'America/Havana', Text: '(UTC-05:00) Havana' }, { Value: 'America/Jamaica', Text: '(UTC-05:00) Jamaica' }, { Value: 'America/Lima', Text: '(UTC-05:00) Lima' }, { Value: 'America/Nassau', Text: '(UTC-05:00) Nassau' }, { Value: 'America/Panama', Text: '(UTC-05:00) Panama' }, { Value: 'America/Port-au-Prince', Text: '(UTC-05:00) Port-au-Prince' }, { Value: 'America/Rio_Branco', Text: '(UTC-05:00) Rio Branco' }, { Value: 'America/Halifax', Text: '(UTC-04:00) Atlantic Time - Halifax' }, { Value: 'America/Barbados', Text: '(UTC-04:00) Barbados' }, { Value: 'Atlantic/Bermuda', Text: '(UTC-04:00) Bermuda' }, { Value: 'America/Boa_Vista', Text: '(UTC-04:00) Boa Vista' }, { Value: 'America/Caracas', Text: '(UTC-04:00) Caracas' }, { Value: 'America/Curacao', Text: '(UTC-04:00) Curacao' }, { Value: 'America/Grand_Turk', Text: '(UTC-04:00) Grand Turk' }, { Value: 'America/Guyana', Text: '(UTC-04:00) Guyana' }, { Value: 'America/La_Paz', Text: '(UTC-04:00) La Paz' }, { Value: 'America/Manaus', Text: '(UTC-04:00) Manaus' }, { Value: 'America/Martinique', Text: '(UTC-04:00) Martinique' }, { Value: 'America/Port_of_Spain', Text: '(UTC-04:00) Port of Spain' }, { Value: 'America/Porto_Velho', Text: '(UTC-04:00) Porto Velho' }, { Value: 'America/Puerto_Rico', Text: '(UTC-04:00) Puerto Rico' }, { Value: 'America/Santo_Domingo', Text: '(UTC-04:00) Santo Domingo' }, { Value: 'America/Thule', Text: '(UTC-04:00) Thule' }, { Value: 'America/St_Johns', Text: '(UTC-03:30) Newfoundland Time - St. Johns' }, { Value: 'America/Araguaina', Text: '(UTC-03:00) Araguaina' }, { Value: 'America/Asuncion', Text: '(UTC-03:00) Asuncion' }, { Value: 'America/Belem', Text: '(UTC-03:00) Belem' }, { Value: 'America/Argentina/Buenos_Aires', Text: '(UTC-03:00) Buenos Aires' }, { Value: 'America/Campo_Grande', Text: '(UTC-03:00) Campo Grande' }, { Value: 'America/Cayenne', Text: '(UTC-03:00) Cayenne' }, { Value: 'America/Cuiaba', Text: '(UTC-03:00) Cuiaba' }, { Value: 'America/Fortaleza', Text: '(UTC-03:00) Fortaleza' }, { Value: 'America/Godthab', Text: '(UTC-03:00) Godthab' }, { Value: 'America/Maceio', Text: '(UTC-03:00) Maceio' }, { Value: 'America/Miquelon', Text: '(UTC-03:00) Miquelon' }, { Value: 'America/Montevideo', Text: '(UTC-03:00) Montevideo' }, { Value: 'Antarctica/Palmer', Text: '(UTC-03:00) Palmer' }, { Value: 'America/Paramaribo', Text: '(UTC-03:00) Paramaribo' }, { Value: 'America/Punta_Arenas', Text: '(UTC-03:00) Punta Arenas' }, { Value: 'America/Recife', Text: '(UTC-03:00) Recife' }, { Value: 'Antarctica/Rothera', Text: '(UTC-03:00) Rothera' }, { Value: 'America/Bahia', Text: '(UTC-03:00) Salvador' }, { Value: 'America/Santiago', Text: '(UTC-03:00) Santiago' }, { Value: 'Atlantic/Stanley', Text: '(UTC-03:00) Stanley' }, { Value: 'America/Noronha', Text: '(UTC-02:00) Noronha' }, { Value: 'America/Sao_Paulo', Text: '(UTC-02:00) Sao Paulo' }, { Value: 'Atlantic/South_Georgia', Text: '(UTC-02:00) South Georgia' }, { Value: 'Atlantic/Azores', Text: '(UTC-01:00) Azores' }, { Value: 'Atlantic/Cape_Verde', Text: '(UTC-01:00) Cape Verde' }, { Value: 'America/Scoresbysund', Text: '(UTC-01:00) Scoresbysund' }, { Value: 'Africa/Abidjan', Text: '(UTC+00:00) Abidjan' }, { Value: 'Africa/Accra', Text: '(UTC+00:00) Accra' }, { Value: 'Africa/Bissau', Text: '(UTC+00:00) Bissau' }, { Value: 'Atlantic/Canary', Text: '(UTC+00:00) Canary Islands' }, { Value: 'Africa/Casablanca', Text: '(UTC+00:00) Casablanca' }, { Value: 'America/Danmarkshavn', Text: '(UTC+00:00) Danmarkshavn' }, { Value: 'Europe/Dublin', Text: '(UTC+00:00) Dublin' }, { Value: 'Africa/El_Aaiun', Text: '(UTC+00:00) El Aaiun' }, { Value: 'Atlantic/Faroe', Text: '(UTC+00:00) Faeroe' }, { Value: 'Etc/UTC', Text: '(UTC+00:00) UTC (no daylight saving)' }, { Value: 'Europe/Lisbon', Text: '(UTC+00:00) Lisbon' }, { Value: 'Europe/London', Text: '(UTC+00:00) London' }, { Value: 'Africa/Monrovia', Text: '(UTC+00:00) Monrovia' }, { Value: 'Atlantic/Reykjavik', Text: '(UTC+00:00) Reykjavik' }, { Value: 'UTC', Text: 'UTC' }, { Value: 'Africa/Algiers', Text: '(UTC+01:00) Algiers' }, { Value: 'Europe/Amsterdam', Text: '(UTC+01:00) Amsterdam' }, { Value: 'Europe/Andorra', Text: '(UTC+01:00) Andorra' }, { Value: 'Europe/Berlin', Text: '(UTC+01:00) Berlin' }, { Value: 'Europe/Brussels', Text: '(UTC+01:00) Brussels' }, { Value: 'Europe/Budapest', Text: '(UTC+01:00) Budapest' }, { Value: 'Europe/Belgrade', Text: '(UTC+01:00) Central European Time - Belgrade' }, { Value: 'Europe/Prague', Text: '(UTC+01:00) Central European Time - Prague' }, { Value: 'Africa/Ceuta', Text: '(UTC+01:00) Ceuta' }, { Value: 'Europe/Copenhagen', Text: '(UTC+01:00) Copenhagen' }, { Value: 'Europe/Gibraltar', Text: '(UTC+01:00) Gibraltar' }, { Value: 'Africa/Lagos', Text: '(UTC+01:00) Lagos' }, { Value: 'Europe/Luxembourg', Text: '(UTC+01:00) Luxembourg' }, { Value: 'Europe/Madrid', Text: '(UTC+01:00) Madrid' }, { Value: 'Europe/Malta', Text: '(UTC+01:00) Malta' }, { Value: 'Europe/Monaco', Text: '(UTC+01:00) Monaco' }, { Value: 'Africa/Ndjamena', Text: '(UTC+01:00) Ndjamena' }, { Value: 'Europe/Oslo', Text: '(UTC+01:00) Oslo' }, { Value: 'Europe/Paris', Text: '(UTC+01:00) Paris' }, { Value: 'Europe/Rome', Text: '(UTC+01:00) Rome' }, { Value: 'Europe/Stockholm', Text: '(UTC+01:00) Stockholm' }, { Value: 'Europe/Tirane', Text: '(UTC+01:00) Tirane' }, { Value: 'Africa/Tunis', Text: '(UTC+01:00) Tunis' }, { Value: 'Europe/Vienna', Text: '(UTC+01:00) Vienna' }, { Value: 'Europe/Warsaw', Text: '(UTC+01:00) Warsaw' }, { Value: 'Europe/Zurich', Text: '(UTC+01:00) Zurich' }, { Value: 'Asia/Amman', Text: '(UTC+02:00) Amman' }, { Value: 'Europe/Athens', Text: '(UTC+02:00) Athens' }, { Value: 'Asia/Beirut', Text: '(UTC+02:00) Beirut' }, { Value: 'Europe/Bucharest', Text: '(UTC+02:00) Bucharest' }, { Value: 'Africa/Cairo', Text: '(UTC+02:00) Cairo' }, { Value: 'Europe/Chisinau', Text: '(UTC+02:00) Chisinau' }, { Value: 'Asia/Damascus', Text: '(UTC+02:00) Damascus' }, { Value: 'Asia/Gaza', Text: '(UTC+02:00) Gaza' }, { Value: 'Europe/Helsinki', Text: '(UTC+02:00) Helsinki' }, { Value: 'Asia/Jerusalem', Text: '(UTC+02:00) Jerusalem' }, { Value: 'Africa/Johannesburg', Text: '(UTC+02:00) Johannesburg' }, { Value: 'Africa/Khartoum', Text: '(UTC+02:00) Khartoum' }, { Value: 'Europe/Kiev', Text: '(UTC+02:00) Kiev' }, { Value: 'Africa/Maputo', Text: '(UTC+02:00) Maputo' }, { Value: 'Europe/Kaliningrad', Text: '(UTC+02:00) Moscow-01 - Kaliningrad' }, { Value: 'Asia/Nicosia', Text: '(UTC+02:00) Nicosia' }, { Value: 'Europe/Riga', Text: '(UTC+02:00) Riga' }, { Value: 'Europe/Sofia', Text: '(UTC+02:00) Sofia' }, { Value: 'Europe/Tallinn', Text: '(UTC+02:00) Tallinn' }, { Value: 'Africa/Tripoli', Text: '(UTC+02:00) Tripoli' }, { Value: 'Europe/Vilnius', Text: '(UTC+02:00) Vilnius' }, { Value: 'Africa/Windhoek', Text: '(UTC+02:00) Windhoek' }, { Value: 'Asia/Baghdad', Text: '(UTC+03:00) Baghdad' }, { Value: 'Europe/Istanbul', Text: '(UTC+03:00) Istanbul' }, { Value: 'Europe/Minsk', Text: '(UTC+03:00) Minsk' }, { Value: 'Europe/Moscow', Text: '(UTC+03:00) Moscow+00 - Moscow' }, { Value: 'Africa/Nairobi', Text: '(UTC+03:00) Nairobi' }, { Value: 'Asia/Qatar', Text: '(UTC+03:00) Qatar' }, { Value: 'Asia/Riyadh', Text: '(UTC+03:00) Riyadh' }, { Value: 'Antarctica/Syowa', Text: '(UTC+03:00) Syowa' }, { Value: 'Asia/Tehran', Text: '(UTC+03:30) Tehran' }, { Value: 'Asia/Baku', Text: '(UTC+04:00) Baku' }, { Value: 'Asia/Dubai', Text: '(UTC+04:00) Dubai' }, { Value: 'Indian/Mahe', Text: '(UTC+04:00) Mahe' }, { Value: 'Indian/Mauritius', Text: '(UTC+04:00) Mauritius' }, { Value: 'Europe/Samara', Text: '(UTC+04:00) Moscow+01 - Samara' }, { Value: 'Indian/Reunion', Text: '(UTC+04:00) Reunion' }, { Value: 'Asia/Tbilisi', Text: '(UTC+04:00) Tbilisi' }, { Value: 'Asia/Yerevan', Text: '(UTC+04:00) Yerevan' }, { Value: 'Asia/Kabul', Text: '(UTC+04:30) Kabul' }, { Value: 'Asia/Aqtau', Text: '(UTC+05:00) Aqtau' }, { Value: 'Asia/Aqtobe', Text: '(UTC+05:00) Aqtobe' }, { Value: 'Asia/Ashgabat', Text: '(UTC+05:00) Ashgabat' }, { Value: 'Asia/Dushanbe', Text: '(UTC+05:00) Dushanbe' }, { Value: 'Asia/Karachi', Text: '(UTC+05:00) Karachi' }, { Value: 'Indian/Kerguelen', Text: '(UTC+05:00) Kerguelen' }, { Value: 'Indian/Maldives', Text: '(UTC+05:00) Maldives' }, { Value: 'Antarctica/Mawson', Text: '(UTC+05:00) Mawson' }, { Value: 'Asia/Yekaterinburg', Text: '(UTC+05:00) Moscow+02 - Yekaterinburg' }, { Value: 'Asia/Tashkent', Text: '(UTC+05:00) Tashkent' }, { Value: 'Asia/Colombo', Text: '(UTC+05:30) Colombo' }, { Value: 'Asia/Kolkata', Text: '(UTC+05:30) India Standard Time' }, { Value: 'Asia/Katmandu', Text: '(UTC+05:45) Katmandu' }, { Value: 'Asia/Almaty', Text: '(UTC+06:00) Almaty' }, { Value: 'Asia/Bishkek', Text: '(UTC+06:00) Bishkek' }, { Value: 'Indian/Chagos', Text: '(UTC+06:00) Chagos' }, { Value: 'Asia/Dhaka', Text: '(UTC+06:00) Dhaka' }, { Value: 'Asia/Omsk', Text: '(UTC+06:00) Moscow+03 - Omsk' }, { Value: 'Asia/Thimphu', Text: '(UTC+06:00) Thimphu' }, { Value: 'Antarctica/Vostok', Text: '(UTC+06:00) Vostok' }, { Value: 'Indian/Cocos', Text: '(UTC+06:30) Cocos' }, { Value: 'Asia/Yangon', Text: '(UTC+06:30) Rangoon' }, { Value: 'Asia/Bangkok', Text: '(UTC+07:00) Bangkok' }, { Value: 'Indian/Christmas', Text: '(UTC+07:00) Christmas' }, { Value: 'Antarctica/Davis', Text: '(UTC+07:00) Davis' }, { Value: 'Asia/Saigon', Text: '(UTC+07:00) Hanoi' }, { Value: 'Asia/Hovd', Text: '(UTC+07:00) Hovd' }, { Value: 'Asia/Jakarta', Text: '(UTC+07:00) Jakarta' }, { Value: 'Asia/Krasnoyarsk', Text: '(UTC+07:00) Moscow+04 - Krasnoyarsk' }, { Value: 'Asia/Brunei', Text: '(UTC+08:00) Brunei' }, { Value: 'Asia/Shanghai', Text: '(UTC+08:00) China Time - Beijing' }, { Value: 'Asia/Choibalsan', Text: '(UTC+08:00) Choibalsan' }, { Value: 'Asia/Hong_Kong', Text: '(UTC+08:00) Hong Kong' }, { Value: 'Asia/Kuala_Lumpur', Text: '(UTC+08:00) Kuala Lumpur' }, { Value: 'Asia/Macau', Text: '(UTC+08:00) Macau' }, { Value: 'Asia/Makassar', Text: '(UTC+08:00) Makassar' }, { Value: 'Asia/Manila', Text: '(UTC+08:00) Manila' }, { Value: 'Asia/Irkutsk', Text: '(UTC+08:00) Moscow+05 - Irkutsk' }, { Value: 'Asia/Singapore', Text: '(UTC+08:00) Singapore' }, { Value: 'Asia/Taipei', Text: '(UTC+08:00) Taipei' }, { Value: 'Asia/Ulaanbaatar', Text: '(UTC+08:00) Ulaanbaatar' }, { Value: 'Australia/Perth', Text: '(UTC+08:00) Western Time - Perth' }, { Value: 'Asia/Pyongyang', Text: '(UTC+08:30) Pyongyang' }, { Value: 'Asia/Dili', Text: '(UTC+09:00) Dili' }, { Value: 'Asia/Jayapura', Text: '(UTC+09:00) Jayapura' }, { Value: 'Asia/Yakutsk', Text: '(UTC+09:00) Moscow+06 - Yakutsk' }, { Value: 'Pacific/Palau', Text: '(UTC+09:00) Palau' }, { Value: 'Asia/Seoul', Text: '(UTC+09:00) Seoul' }, { Value: 'Asia/Tokyo', Text: '(UTC+09:00) Tokyo' }, { Value: 'Australia/Darwin', Text: '(UTC+09:30) Central Time - Darwin' }, { Value: 'Antarctica/DumontDUrville', Text: '(UTC+10:00) Dumont D"Urville' }, { Value: 'Australia/Brisbane', Text: '(UTC+10:00) Eastern Time - Brisbane' }, { Value: 'Pacific/Guam', Text: '(UTC+10:00) Guam' }, { Value: 'Asia/Vladivostok', Text: '(UTC+10:00) Moscow+07 - Vladivostok' }, { Value: 'Pacific/Port_Moresby', Text: '(UTC+10:00) Port Moresby' }, { Value: 'Pacific / Chuuk', Text: '(UTC+10:00) Truk' }, { Value: 'Australia/Adelaide', Text: '(UTC+10:30) Central Time - Adelaide' }, { Value: 'Antarctica/Casey', Text: '(UTC+11:00) Casey' }, { Value: 'Australia/Hobart', Text: '(UTC+11:00) Eastern Time - Hobart' }, { Value: 'Australia/Sydney', Text: '(UTC+11:00) Eastern Time - Melbourne, Sydney' }, { Value: 'Pacific/Efate', Text: '(UTC+11:00) Efate' }, { Value: 'Pacific/Guadalcanal', Text: '(UTC+11:00) Guadalcanal' }, { Value: 'Pacific/Kosrae', Text: '(UTC+11:00) Kosrae' }, { Value: 'Asia/Magadan', Text: '(UTC+11:00) Moscow+08 - Magadan' }, { Value: 'Pacific / Norfolk', Text: '(UTC+11:00) Norfolk' }, { Value: 'Pacific/Noumea', Text: '(UTC+11:00) Noumea' }, { Value: 'Pacific/Pohnpei', Text: '(UTC+11:00) Ponape' }, { Value: 'Pacific/Funafuti', Text: '(UTC+12:00) Funafuti' }, { Value: 'Pacific/Kwajalein', Text: '(UTC+12:00) Kwajalein' }, { Value: 'Pacific/Majuro', Text: '(UTC+12:00) Majuro' }, { Value: 'Asia/Kamchatka', Text: '(UTC+12:00) Moscow+09 - Petropavlovsk - Kamchatskiy' }, { Value: 'Pacific / Nauru', Text: '(UTC+12:00) Nauru' }, { Value: 'Pacific/Tarawa', Text: '(UTC+12:00) Tarawa' }, { Value: 'Pacific/Wake', Text: '(UTC+12:00) Wake' }, { Value: 'Pacific/Wallis', Text: '(UTC+12:00) Wallis' }, { Value: 'Pacific/Auckland', Text: '(UTC+13:00) Auckland' }, { Value: 'Pacific/Enderbury', Text: '(UTC+13:00) Enderbury' }, { Value: 'Pacific/Fakaofo', Text: '(UTC+13:00) Fakaofo' }, { Value: 'Pacific/Fiji', Text: '(UTC+13:00) Fiji' }, { Value: 'Pacific/Tongatapu', Text: '(UTC+13:00) Tongatapu' }, { Value: 'Pacific/Apia', Text: '(UTC+14:00) Apia' }, { Value: 'Pacific/Kiritimati', Text: '(UTC+14:00) Kiritimati' }]);

            startDateCollection = {};
            tempExcludeDate = void 0;
            dayIndex = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
            maxOccurrence = void 0;
            tempViewDate = void 0;
            monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            DAYINDEX = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
            MAXOCCURRENCE = 43;
            LEAPYEAR = 366;
            NORMALYEAR = 365;
            WEEKPOS = ['first', 'second', 'third', 'fourth', 'last'];
            TIMES = 'summaryTimes';
            ON = 'summaryOn';
            EVERY = 'every';
            UNTIL = 'summaryUntil';
            DAYS = 'summaryDay';
            WEEKS = 'summaryWeek';
            MONTHS = 'summaryMonth';
            YEARS = 'summaryYear';
            DAYINDEXOBJECT = {
                SU: 'sun',
                MO: 'mon',
                TU: 'tue',
                WE: 'wed',
                TH: 'thu',
                FR: 'fri',
                SA: 'sat'
            };

            EventBase = function () {
                /**
                 * Constructor for EventBase
                 */
                function EventBase(parent) {
                    _classCallCheck(this, EventBase);

                    this.slots = [];
                    this.parent = parent;
                    this.timezone = new Timezone();
                }

                _createClass(EventBase, [{
                    key: 'processData',
                    value: function processData(events, timeZonePropChanged, oldTimezone) {
                        var start = this.parent.activeView.startDate();
                        var end = this.parent.activeView.endDate();
                        var fields = this.parent.eventFields;
                        this.parent.eventsProcessed = [];
                        var processed = [];
                        var temp = 1;
                        var generateID = false;
                        if (events.length > 0 && isNullOrUndefined(events[0][fields.id])) {
                            generateID = true;
                        }
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var event = _step2.value;

                                if (generateID) {
                                    event[fields.id] = temp++;
                                }
                                if (timeZonePropChanged) {
                                    this.processTimezoneChange(event, oldTimezone);
                                } else {
                                    this.processTimezone(event);
                                }
                                if (!isNullOrUndefined(event[fields.recurrenceRule]) && isNullOrUndefined(event[fields.recurrenceID])) {
                                    processed = processed.concat(this.generateOccurrence(event));
                                } else {
                                    event.Guid = this.generateGuid();
                                    processed.push(event);
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        this.parent.eventsProcessed = this.filterEvents(start, end, processed);
                        return processed;
                    }
                }, {
                    key: 'timezonePropertyChange',
                    value: function timezonePropertyChange(oldTimezone) {
                        var processed = this.processData(this.parent.eventsData, true, oldTimezone);
                        this.parent.notify(dataReady, { processedData: processed });
                    }
                }, {
                    key: 'processTimezoneChange',
                    value: function processTimezoneChange(event, oldTimezone) {
                        var fields = this.parent.eventFields;
                        if (oldTimezone && this.parent.timezone) {
                            event[fields.startTime] = this.timezone.convert(event[fields.startTime], oldTimezone, this.parent.timezone);
                            event[fields.endTime] = this.timezone.convert(event[fields.endTime], oldTimezone, this.parent.timezone);
                        } else if (!oldTimezone && this.parent.timezone) {
                            event[fields.startTime] = this.timezone.add(event[fields.startTime], this.parent.timezone);
                            event[fields.endTime] = this.timezone.add(event[fields.endTime], this.parent.timezone);
                        } else if (oldTimezone && !this.parent.timezone) {
                            event[fields.startTime] = this.timezone.remove(event[fields.startTime], oldTimezone);
                            event[fields.endTime] = this.timezone.remove(event[fields.endTime], oldTimezone);
                        }
                    }
                }, {
                    key: 'processTimezone',
                    value: function processTimezone(event) {
                        var fields = this.parent.eventFields;
                        if (event[fields.startTimezone] || event[fields.endTimezone]) {
                            var startTimezone = event[fields.startTimezone] || event[fields.endTimezone];
                            var endTimezone = event[fields.endTimezone] || event[fields.startTimezone];
                            event[fields.startTime] = this.timezone.add(event[fields.startTime], startTimezone);
                            event[fields.endTime] = this.timezone.add(event[fields.endTime], endTimezone);
                            if (this.parent.timezone) {
                                var zone = this.parent.timezone;
                                event[fields.startTime] = this.timezone.convert(event[fields.startTime], startTimezone, zone);
                                event[fields.endTime] = this.timezone.convert(event[fields.endTime], endTimezone, zone);
                            }
                        } else if (this.parent.timezone) {
                            event[fields.startTime] = this.timezone.add(event[fields.startTime], this.parent.timezone);
                            event[fields.endTime] = this.timezone.add(event[fields.endTime], this.parent.timezone);
                        }
                    }
                }, {
                    key: 'filterEvents',
                    value: function filterEvents(startDate, endDate, collection) {
                        var appointments = !isNullOrUndefined(collection) ? collection : this.parent.eventsProcessed;
                        var fieldMapping = this.parent.eventFields;
                        var predicate = new Predicate(fieldMapping.startTime, 'greaterthanorequal', startDate).and(new Predicate(fieldMapping.endTime, 'greaterthanorequal', startDate)).and(new Predicate(fieldMapping.startTime, 'lessthan', endDate)).or(new Predicate(fieldMapping.startTime, 'lessthanorequal', startDate).and(new Predicate(fieldMapping.endTime, 'greaterthan', startDate)));
                        var filter = new DataManager({ json: appointments }).executeLocal(new Query().where(predicate));
                        return this.sortByTime(filter);
                    }
                }, {
                    key: 'sortByTime',
                    value: function sortByTime(appointments) {
                        var fieldMapping = this.parent.eventFields;
                        appointments.sort(function (a, b) {
                            var d1 = a[fieldMapping.startTime];
                            var d2 = b[fieldMapping.startTime];
                            return d1.getTime() - d2.getTime();
                        });
                        return appointments;
                    }
                }, {
                    key: 'sortByDateTime',
                    value: function sortByDateTime(appointments) {
                        var fieldMapping = this.parent.eventFields;
                        appointments.sort(function (object1, object2) {
                            var d3 = object1[fieldMapping.startTime];
                            var d4 = object2[fieldMapping.startTime];
                            var d5 = object1[fieldMapping.endTime];
                            var d6 = object2[fieldMapping.endTime];
                            var d1 = d5.getTime() - d3.getTime();
                            var d2 = d6.getTime() - d4.getTime();
                            return d3.getTime() - d4.getTime() || d2 - d1;
                        });
                        return appointments;
                    }
                }, {
                    key: 'getSmallestMissingNumber',
                    value: function getSmallestMissingNumber(array) {
                        var large = Math.max.apply(Math, array);
                        for (var i = 0; i < large; i++) {
                            if (array.indexOf(i) === -1) {
                                return i;
                            }
                        }
                        return large + 1;
                    }
                }, {
                    key: 'splitEventByDay',
                    value: function splitEventByDay(event) {
                        var eventFields = this.parent.eventFields;
                        var data = [];
                        var eventStartTime = event[eventFields.startTime];
                        var eventEndTime = event[eventFields.endTime];
                        var isDifferentDate = resetTime(new Date(eventStartTime.getTime())) < resetTime(new Date(eventEndTime.getTime()));
                        if (isDifferentDate) {
                            var start = new Date(eventStartTime.getTime());
                            var end = addDays(resetTime(new Date(eventStartTime.getTime())), 1);
                            var endDate = eventEndTime.getHours() === 0 && eventEndTime.getMinutes() === 0 ? eventEndTime : addDays(eventEndTime, 1);
                            var index = 1;
                            var eventLength = getDaysCount(eventStartTime.getTime(), endDate.getTime());
                            while (end <= eventEndTime) {
                                var app = extend({}, event);
                                app[eventFields.startTime] = start;
                                app[eventFields.endTime] = end;
                                app.data = { index: index, count: eventLength };
                                app.Guid = this.generateGuid();
                                app.isSpanned = true;
                                data.push(app);
                                start = end;
                                if (new Date(start.getTime()).setHours(0, 0, 0, 0) === new Date(eventEndTime.getTime()).setHours(0, 0, 0, 0) && !(end.getTime() === eventEndTime.getTime())) {
                                    end = new Date(new Date(start.getTime()).setHours(eventEndTime.getHours(), eventEndTime.getMinutes()));
                                } else {
                                    end = addDays(resetTime(new Date(start.getTime())), 1);
                                }
                                index++;
                            }
                        } else {
                            data.push(event);
                        }
                        return data;
                    }
                }, {
                    key: 'splitEvent',
                    value: function splitEvent(event, dateRender) {
                        var fields = this.parent.eventFields;
                        var start = resetTime(new Date(event[fields.startTime] + '')).getTime();
                        var end = resetTime(new Date(event[fields.endTime] + '')).getTime();
                        if (getDateInMs(event[fields.endTime]) <= 0) {
                            var temp = addDays(resetTime(new Date(event[fields.endTime] + '')), -1).getTime();
                            end = start > temp ? start : temp;
                        }
                        var orgStart = start;
                        var orgEnd = end;
                        var ranges = [];
                        if (start !== end) {
                            if (start < dateRender[0].getTime()) {
                                start = dateRender[0].getTime();
                            }
                            if (end > dateRender[dateRender.length - 1].getTime()) {
                                end = dateRender[dateRender.length - 1].getTime();
                            }
                            var cStart = start;
                            for (var level = 0; level < this.slots.length; level++) {
                                var slot = this.slots[level];
                                var firstSlot = slot[0];
                                cStart = cStart <= firstSlot && end >= firstSlot ? firstSlot : cStart;
                                if (cStart > end || firstSlot > end) {
                                    break;
                                }
                                if (this.parent.activeViewOptions.showWeekend && this.parent.currentView !== 'WorkWeek') {
                                    var startIndex = slot.indexOf(cStart);
                                    if (startIndex !== -1) {
                                        var endIndex = slot.indexOf(end);
                                        var hasBreak = endIndex !== -1;
                                        endIndex = hasBreak ? endIndex : slot.length - 1;
                                        var count = endIndex - startIndex + 1;
                                        var isLeft = slot[startIndex] !== orgStart;
                                        var isRight = slot[endIndex] !== orgEnd;
                                        ranges.push(this.cloneEventObject(event, slot[startIndex], slot[endIndex], count, isLeft, isRight));
                                        if (hasBreak) {
                                            break;
                                        }
                                    }
                                } else {
                                    if (this.dateInRange(cStart, slot[0], slot[slot.length - 1])) {
                                        var availSlot = [];
                                        for (var i = 0; i < slot.length; i++) {
                                            if (this.dateInRange(slot[i], orgStart, orgEnd)) {
                                                availSlot.push(slot[i]);
                                            }
                                        }
                                        if (availSlot.length > 0) {
                                            var cnt = availSlot.length;
                                            var _isLeft = availSlot[0] !== orgStart;
                                            var _isRight = availSlot[availSlot.length - 1] !== orgEnd;
                                            ranges.push(this.cloneEventObject(event, availSlot[0], availSlot[availSlot.length - 1], cnt, _isLeft, _isRight));
                                        }
                                    }
                                }
                            }
                        } else {
                            ranges.push(this.cloneEventObject(event, start, end, 1, false, false));
                        }
                        return ranges;
                    }
                }, {
                    key: 'cloneEventObject',
                    value: function cloneEventObject(event, start, end, count, isLeft, isRight) {
                        var fields = this.parent.eventFields;
                        var e = extend({}, event, null, true);
                        var data = { count: count, isLeft: isLeft, isRight: isRight };
                        data[fields.startTime] = event[fields.startTime];
                        data[fields.endTime] = event[fields.endTime];
                        e.data = data;
                        e[fields.startTime] = new Date(start);
                        e[fields.endTime] = new Date(end);
                        return e;
                    }
                }, {
                    key: 'dateInRange',
                    value: function dateInRange(date, start, end) {
                        return start <= date && date <= end;
                    }
                }, {
                    key: 'getSelectedEventElements',
                    value: function getSelectedEventElements(target) {
                        this.removeSelectedAppointmentClass();
                        if (this.parent.selectedElements.length <= 0) {
                            this.parent.selectedElements.push(target);
                        } else {
                            var isAlreadySelected = this.parent.selectedElements.filter(function (element) {
                                return element.getAttribute('data-guid') === target.getAttribute('data-guid');
                            });
                            if (isAlreadySelected.length <= 0) {
                                var focusElements = [].slice.call(this.parent.element.querySelectorAll('div[data-guid="' + target.getAttribute('data-guid') + '"]'));
                                var _iteratorNormalCompletion3 = true;
                                var _didIteratorError3 = false;
                                var _iteratorError3 = undefined;

                                try {
                                    for (var _iterator3 = focusElements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                        var element = _step3.value;

                                        this.parent.selectedElements.push(element);
                                    }
                                } catch (err) {
                                    _didIteratorError3 = true;
                                    _iteratorError3 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                            _iterator3.return();
                                        }
                                    } finally {
                                        if (_didIteratorError3) {
                                            throw _iteratorError3;
                                        }
                                    }
                                }
                            } else {
                                var selectedElements = this.parent.selectedElements.filter(function (element) {
                                    return element.getAttribute('data-guid') !== target.getAttribute('data-guid');
                                });
                                this.parent.selectedElements = selectedElements;
                            }
                        }
                        if (target && this.parent.selectedElements.length > 0) {
                            this.addSelectedAppointments(this.parent.selectedElements, this.parent.selectedElements[0]);
                        }
                        return this.parent.selectedElements;
                    }
                }, {
                    key: 'getSelectedEvents',
                    value: function getSelectedEvents() {
                        var _this2 = this;

                        var eventSelect = [];
                        var elementSelect = [];
                        var selectAppointments = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_BORDER));
                        selectAppointments.filter(function (element, index, selectAppointments) {
                            eventSelect.push(_this2.getEventByGuid(element.getAttribute('data-guid')));
                            elementSelect.push(element);
                        });
                        return {
                            event: eventSelect.length > 1 ? eventSelect : eventSelect[0],
                            element: elementSelect.length > 1 ? elementSelect : elementSelect[0]
                        };
                    }
                }, {
                    key: 'removeSelectedAppointmentClass',
                    value: function removeSelectedAppointmentClass() {
                        var selectedAppointments = this.getSelectedAppointments();
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = selectedAppointments[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var appointment = _step4.value;

                                appointment.setAttribute('aria-selected', 'false');
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }

                        removeClass(selectedAppointments, APPOINTMENT_BORDER);
                    }
                }, {
                    key: 'addSelectedAppointments',
                    value: function addSelectedAppointments(cells, focusCell) {
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = cells[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var cell = _step5.value;

                                cell.setAttribute('aria-selected', 'true');
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }

                        addClass(cells, APPOINTMENT_BORDER);
                    }
                }, {
                    key: 'getSelectedAppointments',
                    value: function getSelectedAppointments() {
                        return [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_BORDER + ',.' + APPOINTMENT_CLASS + ':focus'));
                    }
                }, {
                    key: 'focusElement',
                    value: function focusElement() {
                        var selectedCell = this.parent.getSelectedElements();
                        if (selectedCell.length > 0) {
                            if (this.parent.keyboardInteractionModule) {
                                var target = this.parent.activeCellsData.element || selectedCell[selectedCell.length - 1];
                                this.parent.keyboardInteractionModule.selectCells(false, target);
                            }
                            return;
                        }
                        var selectedAppointments = this.getSelectedAppointments();
                        if (selectedAppointments.length > 0) {
                            selectedAppointments[selectedAppointments.length - 1].focus();
                            return;
                        }
                    }
                }, {
                    key: 'selectWorkCellByTime',
                    value: function selectWorkCellByTime(eventsData) {
                        var target = void 0;
                        if (this.parent.currentView === 'Agenda' || this.parent.currentView === 'MonthAgenda') {
                            return target;
                        }
                        if (eventsData.length > 0) {
                            var selectedObject = eventsData[eventsData.length - 1];
                            var eventStartTime = selectedObject[this.parent.eventFields.startTime];
                            var nearestTime = new Date(+eventStartTime).setMinutes(0, 0, 0);
                            var isAllDay = this.isAllDayAppointment(selectedObject);
                            if (this.parent.currentView === 'Month' || isAllDay) {
                                nearestTime = new Date(+eventStartTime).setHours(0, 0, 0, 0);
                            }
                            var targetArea = void 0;
                            if (isAllDay && ['Day', 'Week', 'WorkWeek'].indexOf(this.parent.currentView) !== -1) {
                                targetArea = this.parent.getAllDayRow();
                            } else {
                                targetArea = this.parent.getContentTable();
                            }
                            target = targetArea.querySelector('[data-date="' + nearestTime + '"]');
                            if (target) {
                                this.parent.activeCellsData = this.parent.getCellDetails(target);
                                if (this.parent.keyboardInteractionModule) {
                                    this.parent.keyboardInteractionModule.selectCells(false, target);
                                }
                                return target;
                            }
                        }
                        return target;
                    }
                }, {
                    key: 'isAllDayAppointment',
                    value: function isAllDayAppointment(event) {
                        var fieldMapping = this.parent.eventFields;
                        var isAllDay = event[fieldMapping.isAllDay];
                        var isFullDay = (event[fieldMapping.endTime].getTime() - event[fieldMapping.startTime].getTime()) / MS_PER_DAY >= 1;
                        return isAllDay || isFullDay ? true : false;
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener() {
                        this.parent.on(documentClick, this.appointmentBorderRemove, this);
                    }
                }, {
                    key: 'appointmentBorderRemove',
                    value: function appointmentBorderRemove(event) {
                        var target = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_CLASS));
                        var element = event.event.target;
                        if (closest(element, '.' + APPOINTMENT_CLASS)) {
                            this.parent.removeSelectedClass();
                        } else if (!closest(element, '.' + POPUP_OPEN)) {
                            this.removeSelectedAppointmentClass();
                        }
                    }
                }, {
                    key: 'wireAppointmentEvents',
                    value: function wireAppointmentEvents(element) {
                        EventHandler.add(element, 'click', this.eventClick, this);
                        EventHandler.add(element, 'dblclick', this.eventDoubleClick, this);
                    }
                }, {
                    key: 'eventClick',
                    value: function eventClick(eventData) {
                        if (eventData.ctrlKey && eventData.which === 1 && this.parent.keyboardInteractionModule) {
                            this.parent.selectedElements = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_BORDER));
                            this.parent.keyboardInteractionModule.onAppointmentSelection(eventData);
                            return;
                        }
                        this.removeSelectedAppointmentClass();
                        this.activeEventData(eventData);
                        var args = extend(this.parent.activeEventData, { cancel: false });
                        this.parent.trigger(_eventClick, args);
                        if (args.cancel) {
                            this.removeSelectedAppointmentClass();
                            return;
                        }
                        this.parent.notify(_eventClick, this.parent.activeEventData);
                    }
                }, {
                    key: 'eventDoubleClick',
                    value: function eventDoubleClick(e) {
                        this.parent.quickPopup.quickPopup.animation = { close: { effect: 'None' } };
                        this.parent.quickPopup.quickPopup.close();
                        if (e.type === 'touchstart') {
                            this.activeEventData(e);
                        }
                        this.removeSelectedAppointmentClass();
                        var fieldMapping = this.parent.eventFields;
                        if (!isNullOrUndefined(this.parent.activeEventData.event) && isNullOrUndefined(this.parent.activeEventData.event[fieldMapping.recurrenceID])) {
                            this.parent.currentAction = 'Save';
                            this.parent.eventWindow.openEditor(this.parent.activeEventData.event, 'Save');
                        } else {
                            this.parent.currentAction = 'EditOccurrence';
                            this.parent.quickPopup.openRecurrenceAlert();
                        }
                    }
                }, {
                    key: 'getEventByGuid',
                    value: function getEventByGuid(guid) {
                        return new DataManager({ json: this.parent.eventsProcessed }).executeLocal(new Query().where('Guid', 'equal', guid))[0];
                    }
                }, {
                    key: 'generateGuid',
                    value: function generateGuid() {
                        return 'xyxxxxyx-xxxy-yxxx-xyxx-xxyxxxxyyxxx'.replace(/[xy]/g, function (c) {
                            var r = Math.random() * 16 | 0;
                            var v = c === 'x' ? r : r & 0x3 | 0x8;
                            return v.toString(16);
                        });
                    }
                }, {
                    key: 'getEventMaxId',
                    value: function getEventMaxId() {
                        var fields = this.parent.eventFields;
                        if (this.parent.eventsData.length < 1) {
                            return 0;
                        }
                        return Math.max.apply(Math, this.parent.eventsData.map(function (event) {
                            return event[fields.id];
                        }));
                    }
                }, {
                    key: 'activeEventData',
                    value: function activeEventData(eventData) {
                        var target = closest(eventData.target, '.' + APPOINTMENT_CLASS);
                        var guid = target.getAttribute('data-guid');
                        this.addSelectedAppointments([].slice.call(this.parent.element.querySelectorAll('div[data-guid="' + guid + '"]')));
                        var eventObject = this.getEventByGuid(guid);
                        if (eventObject.isSpanned) {
                            var fields = this.parent.eventFields;
                            eventObject = this.parent.eventsData.filter(function (obj) {
                                return obj[fields.id] === eventObject[fields.id];
                            })[0];
                        }
                        this.parent.activeEventData = { event: eventObject, element: target };
                    }
                }, {
                    key: 'generateOccurrence',
                    value: function generateOccurrence(event, viewDate) {
                        var fields = this.parent.eventFields;
                        var startDate = event[fields.startTime];
                        var endDate = event[fields.endTime];
                        var occurrenceCollection = [];
                        var currentViewDate = isNullOrUndefined(viewDate) ? this.parent.activeView.startDate() : viewDate;
                        var dates = generate(startDate, event[fields.recurrenceRule], event[fields.recurrenceException], this.parent.firstDayOfWeek, undefined, currentViewDate);
                        var date = dates.shift();
                        var duration = endDate.getTime() - startDate.getTime();
                        while (date) {
                            var clonedObject = extend({}, event, null, true);
                            clonedObject[fields.startTime] = new Date(date);
                            clonedObject[fields.endTime] = new Date(new Date(date).setMilliseconds(duration));
                            clonedObject[fields.recurrenceID] = clonedObject[fields.id];
                            clonedObject.Guid = this.generateGuid();
                            occurrenceCollection.push(clonedObject);
                            date = dates.shift();
                        }
                        return occurrenceCollection;
                    }
                }, {
                    key: 'getRecurrenceEvent',
                    value: function getRecurrenceEvent(eventData) {
                        var eventFields = this.parent.eventFields;
                        var parentApp = new DataManager(this.parent.eventsData).executeLocal(new Query().where(eventFields.id, 'equal', eventData[eventFields.recurrenceID]));
                        return parentApp[0];
                    }
                }, {
                    key: 'getOccurrencesByID',
                    value: function getOccurrencesByID(id) {
                        var fields = this.parent.eventFields;
                        var occurrenceCollection = [];
                        var parentObject = this.parent.eventsData.filter(function (obj) {
                            return obj[fields.id] === id;
                        });
                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator6 = parentObject[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var event = _step6.value;

                                if (!isNullOrUndefined(event[fields.recurrenceRule])) {
                                    occurrenceCollection = occurrenceCollection.concat(this.generateOccurrence(event));
                                }
                            }
                        } catch (err) {
                            _didIteratorError6 = true;
                            _iteratorError6 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                    _iterator6.return();
                                }
                            } finally {
                                if (_didIteratorError6) {
                                    throw _iteratorError6;
                                }
                            }
                        }

                        return occurrenceCollection;
                    }
                }, {
                    key: 'getOccurrencesByRange',
                    value: function getOccurrencesByRange(startTime, endTime) {
                        var fields = this.parent.eventFields;
                        var occurrenceCollection = [];
                        var _iteratorNormalCompletion7 = true;
                        var _didIteratorError7 = false;
                        var _iteratorError7 = undefined;

                        try {
                            for (var _iterator7 = this.parent.eventsData[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                var event = _step7.value;

                                if (!isNullOrUndefined(event[fields.recurrenceRule])) {
                                    occurrenceCollection = occurrenceCollection.concat(this.generateOccurrence(event));
                                }
                            }
                        } catch (err) {
                            _didIteratorError7 = true;
                            _iteratorError7 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                    _iterator7.return();
                                }
                            } finally {
                                if (_didIteratorError7) {
                                    throw _iteratorError7;
                                }
                            }
                        }

                        var filter = occurrenceCollection.filter(function (obj) {
                            return obj[fields.startTime] >= startTime && obj[fields.endTime] <= endTime && !isNullOrUndefined(obj[fields.recurrenceID]);
                        });
                        return filter;
                    }
                }]);

                return EventBase;
            }();

            Crud = function () {
                function Crud(parent) {
                    _classCallCheck(this, Crud);

                    this.parent = parent;
                    this.timezone = new Timezone();
                }

                _createClass(Crud, [{
                    key: 'getQuery',
                    value: function getQuery() {
                        var start = this.parent.activeView.startDate();
                        var end = this.parent.activeView.endDate();
                        return this.parent.dataModule.generateQuery(start, end);
                    }
                }, {
                    key: 'refreshData',
                    value: function refreshData(args) {
                        var _this3 = this;

                        var actionArgs = { requestType: args.requestType, cancel: false, data: args.data };
                        if (this.parent.dataModule.dataManager.dataSource.offline) {
                            this.parent.trigger(actionComplete, actionArgs);
                            this.parent.renderModule.refreshDataManager();
                            return;
                        } else {
                            args.promise.then(function (e) {
                                if (_this3.parent.isDestroyed) {
                                    return;
                                }
                                _this3.parent.trigger(actionComplete, actionArgs);
                                if (actionArgs.cancel) {
                                    return;
                                }
                                _this3.parent.renderModule.refreshDataManager();
                            }).catch(function (e) {
                                if (_this3.parent.isDestroyed) {
                                    return;
                                }
                                _this3.parent.trigger(actionFailure, { error: e });
                            });
                        }
                    }
                }, {
                    key: 'addEvent',
                    value: function addEvent(eventData) {
                        var fields = this.parent.eventFields;
                        var promise = null;
                        var editParms = { addedRecords: [], changedRecords: [], deletedRecords: [] };
                        var args = { requestType: 'eventCreate', cancel: false, data: eventData };
                        this.parent.trigger(actionBegin, args);
                        if (args.cancel) {
                            return;
                        }
                        if (eventData instanceof Array) {
                            var _iteratorNormalCompletion8 = true;
                            var _didIteratorError8 = false;
                            var _iteratorError8 = undefined;

                            try {
                                for (var _iterator8 = eventData[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                    var event = _step8.value;

                                    this.processCrudTimezone(event);
                                    editParms.addedRecords.push(event);
                                }
                            } catch (err) {
                                _didIteratorError8 = true;
                                _iteratorError8 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                        _iterator8.return();
                                    }
                                } finally {
                                    if (_didIteratorError8) {
                                        throw _iteratorError8;
                                    }
                                }
                            }

                            promise = this.parent.dataModule.dataManager.saveChanges(editParms, fields.id, null, this.getQuery());
                        } else {
                            this.processCrudTimezone(eventData);
                            promise = this.parent.dataModule.dataManager.insert(eventData, null, this.getQuery());
                        }
                        var crudArgs = { requestType: 'eventCreated', cancel: false, data: eventData, promise: promise };
                        this.refreshData(crudArgs);
                    }
                }, {
                    key: 'saveEvent',
                    value: function saveEvent(event, action) {
                        var fields = this.parent.eventFields;
                        var promise = null;
                        var editParms = { addedRecords: [], changedRecords: [], deletedRecords: [] };
                        var args = { requestType: 'eventChange', cancel: false };
                        var dataObj = [];
                        event instanceof Array ? dataObj = event : dataObj.push(event);
                        var data = event;
                        if (isNullOrUndefined(action)) {
                            args.data = data;
                            this.parent.trigger(actionBegin, args);
                            if (args.cancel) {
                                return;
                            }
                            this.processCrudTimezone(data);
                            promise = this.parent.dataModule.dataManager.update(fields.id, event, null, this.getQuery());
                        } else {
                            var parentEvent = this.parent.eventBase.getRecurrenceEvent(data);
                            switch (action) {
                                case 'EditOccurrence':
                                    args.data = { occurrence: event, parent: parentEvent };
                                    this.parent.trigger(actionBegin, args);
                                    if (args.cancel) {
                                        return;
                                    }
                                    var exDate = this.excludeDateCheck(data[fields.startTime], parentEvent[fields.recurrenceException]);
                                    if (exDate !== parentEvent[fields.recurrenceException]) {
                                        parentEvent[fields.recurrenceException] = exDate;
                                        data[fields.recurrenceID] = parentEvent[fields.id];
                                        this.processCrudTimezone(parentEvent);
                                        editParms.changedRecords.push(parentEvent);
                                        this.processCrudTimezone(data);
                                        editParms.addedRecords.push(data);
                                    } else {
                                        this.processCrudTimezone(data);
                                        editParms.changedRecords.push(data);
                                    }
                                    break;
                                case 'EditSeries':
                                    args.data = data;
                                    this.parent.trigger(actionBegin, args);
                                    if (args.cancel) {
                                        return;
                                    }
                                    var delApp = new DataManager(this.parent.eventsData).executeLocal(new Query().where(fields.recurrenceID, 'equal', parentEvent[fields.id]));
                                    data[fields.id] = parentEvent[fields.id];
                                    data[fields.recurrenceException] = null;
                                    data[fields.recurrenceID] = null;
                                    this.processCrudTimezone(data);
                                    editParms.changedRecords.push(data);
                                    var _iteratorNormalCompletion9 = true;
                                    var _didIteratorError9 = false;
                                    var _iteratorError9 = undefined;

                                    try {
                                        for (var _iterator9 = delApp[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                            var _event = _step9.value;

                                            editParms.deletedRecords.push(_event);
                                        }
                                    } catch (err) {
                                        _didIteratorError9 = true;
                                        _iteratorError9 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                                _iterator9.return();
                                            }
                                        } finally {
                                            if (_didIteratorError9) {
                                                throw _iteratorError9;
                                            }
                                        }
                                    }

                                    break;
                            }
                            promise = this.parent.dataModule.dataManager.saveChanges(editParms, fields.id, null, this.getQuery());
                        }
                        this.parent.eventBase.selectWorkCellByTime(dataObj);
                        var crudArgs = { requestType: 'eventChanged', cancel: false, data: args.data, promise: promise };
                        this.refreshData(crudArgs);
                    }
                }, {
                    key: 'deleteEvent',
                    value: function deleteEvent(id, action) {
                        var fields = this.parent.eventFields;
                        var editParms = { addedRecords: [], changedRecords: [], deletedRecords: [] };
                        var dataObj = [];
                        var normalEvent = [];
                        var recEvent = [];
                        switch (typeof id === 'undefined' ? 'undefined' : _typeof(id)) {
                            case 'string':
                            case 'number':
                                dataObj = new DataManager(this.parent.eventsData).executeLocal(new Query().where(fields.id, 'equal', id));
                                break;
                            case 'object':
                                id instanceof Array ? dataObj = id : dataObj.push(id);
                                break;
                        }
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = dataObj[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                var event = _step10.value;

                                !isNullOrUndefined(event[fields.recurrenceRule]) ? recEvent.push(event) : normalEvent.push(event);
                            }
                        } catch (err) {
                            _didIteratorError10 = true;
                            _iteratorError10 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                    _iterator10.return();
                                }
                            } finally {
                                if (_didIteratorError10) {
                                    throw _iteratorError10;
                                }
                            }
                        }

                        var args = { requestType: 'eventRemove', cancel: false };
                        if (action !== 'DeleteOccurrence') {
                            args.data = dataObj;
                            this.parent.trigger(actionBegin, args);
                            if (args.cancel) {
                                return;
                            }
                        }
                        if (isNullOrUndefined(action) || normalEvent.length > 0) {
                            var _iteratorNormalCompletion11 = true;
                            var _didIteratorError11 = false;
                            var _iteratorError11 = undefined;

                            try {
                                for (var _iterator11 = normalEvent[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                    var _event2 = _step11.value;

                                    editParms.deletedRecords.push(_event2);
                                }
                            } catch (err) {
                                _didIteratorError11 = true;
                                _iteratorError11 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                                        _iterator11.return();
                                    }
                                } finally {
                                    if (_didIteratorError11) {
                                        throw _iteratorError11;
                                    }
                                }
                            }
                        }
                        if (recEvent.length > 0) {
                            switch (action) {
                                case 'Delete':
                                case 'DeleteOccurrence':
                                    for (var i = 0; i < recEvent.length; i++) {
                                        var parentEvent = this.parent.eventBase.getRecurrenceEvent(recEvent[i]);
                                        args.data = { occurrence: recEvent[i], parent: parentEvent };
                                        this.parent.trigger(actionBegin, args);
                                        if (args.cancel) {
                                            return;
                                        }
                                        parentEvent[fields.recurrenceException] = this.excludeDateCheck(recEvent[i][fields.startTime], parentEvent[fields.recurrenceException]);
                                        this.processCrudTimezone(parentEvent);
                                        editParms.changedRecords.push(parentEvent);
                                        if (recEvent[i][fields.id] !== parentEvent[fields.id]) {
                                            editParms.deletedRecords.push(recEvent[i]);
                                        }
                                    }
                                    break;
                                case 'DeleteSeries':
                                    var _iteratorNormalCompletion12 = true;
                                    var _didIteratorError12 = false;
                                    var _iteratorError12 = undefined;

                                    try {
                                        for (var _iterator12 = recEvent[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                            var app = _step12.value;

                                            var predicate = new Predicate(fields.id, 'equal', app[fields.recurrenceID]).or(new Predicate(fields.recurrenceID, 'equal', app[fields.recurrenceID]));
                                            var delApp = new DataManager(this.parent.eventsData).executeLocal(new Query().where(predicate));
                                            var _iteratorNormalCompletion13 = true;
                                            var _didIteratorError13 = false;
                                            var _iteratorError13 = undefined;

                                            try {
                                                for (var _iterator13 = delApp[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                                    var _event3 = _step13.value;

                                                    editParms.deletedRecords.push(_event3);
                                                }
                                            } catch (err) {
                                                _didIteratorError13 = true;
                                                _iteratorError13 = err;
                                            } finally {
                                                try {
                                                    if (!_iteratorNormalCompletion13 && _iterator13.return) {
                                                        _iterator13.return();
                                                    }
                                                } finally {
                                                    if (_didIteratorError13) {
                                                        throw _iteratorError13;
                                                    }
                                                }
                                            }

                                            editParms.deletedRecords.push(app);
                                        }
                                    } catch (err) {
                                        _didIteratorError12 = true;
                                        _iteratorError12 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                                _iterator12.return();
                                            }
                                        } finally {
                                            if (_didIteratorError12) {
                                                throw _iteratorError12;
                                            }
                                        }
                                    }

                                    break;
                            }
                        }
                        var promise = void 0;
                        promise = this.parent.dataModule.dataManager.saveChanges(editParms, fields.id, null, this.getQuery());
                        this.parent.eventBase.selectWorkCellByTime(dataObj);
                        var crudArgs = { requestType: 'eventRemoved', cancel: false, data: args.data, promise: promise };
                        this.refreshData(crudArgs);
                    }
                }, {
                    key: 'processCrudTimezone',
                    value: function processCrudTimezone(events) {
                        var fields = this.parent.eventFields;
                        if (events[fields.startTimezone] || events[fields.endTimezone]) {
                            var startTimezone = events[fields.startTimezone] || events[fields.endTimezone];
                            var endTimezone = events[fields.endTimezone] || events[fields.startTimezone];
                            if (this.parent.timezone) {
                                var zone = this.parent.timezone;
                                events[fields.startTime] = this.timezone.convert(events[fields.startTime], startTimezone, zone);
                                events[fields.endTime] = this.timezone.convert(events[fields.endTime], endTimezone, zone);
                                events[fields.startTime] = this.timezone.remove(events[fields.startTime], zone);
                                events[fields.endTime] = this.timezone.remove(events[fields.endTime], zone);
                            } else {
                                events[fields.startTime] = this.timezone.remove(events[fields.startTime], startTimezone);
                                events[fields.endTime] = this.timezone.remove(events[fields.endTime], endTimezone);
                            }
                        } else if (this.parent.timezone) {
                            events[fields.startTime] = this.timezone.remove(events[fields.startTime], this.parent.timezone);
                            events[fields.endTime] = this.timezone.remove(events[fields.endTime], this.parent.timezone);
                        }
                    }
                }, {
                    key: 'excludeDateCheck',
                    value: function excludeDateCheck(eventStartTime, exceptionDateList) {
                        var exDate = getRecurrenceStringFromDate(eventStartTime);
                        if (!isNullOrUndefined(exceptionDateList)) {
                            if (exceptionDateList.indexOf(exDate) === -1) {
                                exceptionDateList = !isNullOrUndefined(exceptionDateList) ? exceptionDateList + ',' + exDate : exDate;
                            }
                        } else {
                            exceptionDateList = exDate;
                        }
                        return exceptionDateList;
                    }
                }]);

                return Crud;
            }();

            FieldValidator = function () {
                function FieldValidator(parent) {
                    _classCallCheck(this, FieldValidator);

                    this.parent = parent;
                }

                _createClass(FieldValidator, [{
                    key: 'renderFormValidator',
                    value: function renderFormValidator(form, rules) {
                        var _this4 = this;

                        this.formObj = new FormValidator(form, {
                            customPlacement: function customPlacement(inputElement, error) {
                                _this4.errorPlacement(inputElement, error);
                            },
                            rules: rules,
                            validationComplete: function validationComplete(args) {
                                _this4.validationComplete(args);
                            }
                        });
                    }
                }, {
                    key: 'validationComplete',
                    value: function validationComplete(args) {
                        var elem = document.querySelector('#' + args.inputName + '_Error');
                        if (elem) {
                            if (args.status === 'failure') {
                                elem.style.display = '';
                            } else {
                                elem.style.display = 'none';
                            }
                        }
                    }
                }, {
                    key: 'errorPlacement',
                    value: function errorPlacement(inputElement, error) {
                        var id = error.getAttribute('for');
                        var elem = document.querySelector('#' + id + '_Error');
                        if (!elem) {
                            this.createTooltip(inputElement, error, id, '');
                        }
                    }
                }, {
                    key: 'createTooltip',
                    value: function createTooltip(element, error, name, display) {
                        var dlgContent = void 0;
                        var client = void 0;
                        var inputClient = element.getBoundingClientRect();
                        var quickPopupElement = document.querySelector('.' + QUICK_POPUP_ROOT_CLASS);
                        if (quickPopupElement) {
                            dlgContent = quickPopupElement.querySelector('.' + QUICK_POPUP_CLASS);
                            client = dlgContent.getBoundingClientRect();
                        } else {
                            dlgContent = document.querySelector('.e-schedule-dialog .e-dlg-content');
                            client = dlgContent.getBoundingClientRect();
                        }
                        var div = createElement('div', {
                            className: 'e-tooltip-wrap e-popup ' + ERROR_VALIDATION_CLASS,
                            id: name + '_Error',
                            styles: 'display:' + display + ';top:' + (inputClient.bottom - client.top + dlgContent.scrollTop + 9) + 'px;left:' + (inputClient.left - client.left + dlgContent.scrollLeft + inputClient.width / 2) + 'px;'
                        });
                        var content = createElement('div', { className: 'e-tip-content' });
                        content.appendChild(error);
                        var arrow = createElement('div', { className: 'e-arrow-tip e-tip-top' });
                        arrow.appendChild(createElement('div', { className: 'e-arrow-tip-outer e-tip-top' }));
                        arrow.appendChild(createElement('div', { className: 'e-arrow-tip-inner e-tip-top' }));
                        div.appendChild(content);
                        div.appendChild(arrow);
                        dlgContent.appendChild(div);
                        div.style.left = parseInt(div.style.left, 10) - div.offsetWidth / 2 + 'px';
                    }
                }, {
                    key: 'destroyToolTip',
                    value: function destroyToolTip() {
                        var elements = [].slice.call(document.querySelectorAll('.' + ERROR_VALIDATION_CLASS));
                        var _iteratorNormalCompletion14 = true;
                        var _didIteratorError14 = false;
                        var _iteratorError14 = undefined;

                        try {
                            for (var _iterator14 = elements[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                var elem = _step14.value;

                                remove(elem);
                            }
                        } catch (err) {
                            _didIteratorError14 = true;
                            _iteratorError14 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion14 && _iterator14.return) {
                                    _iterator14.return();
                                }
                            } finally {
                                if (_didIteratorError14) {
                                    throw _iteratorError14;
                                }
                            }
                        }

                        this.formObj.reset();
                    }
                }, {
                    key: 'destroyForm',
                    value: function destroyForm() {
                        if (this.formObj && !this.formObj.isDestroyed) {
                            this.formObj.destroy();
                        }
                    }
                }]);

                return FieldValidator;
            }();

            QuickPopups = function () {
                /**
                 * Constructor for QuickPopups
                 */
                function QuickPopups(parent) {
                    _classCallCheck(this, QuickPopups);

                    this.isMultipleEventSelect = false;
                    this.parent = parent;
                    this.l10n = this.parent.localeObj;
                    this.crudAction = new Crud(parent);
                    this.fieldValidator = new FieldValidator(this.parent);
                    this.render();
                    this.addEventListener();
                }

                _createClass(QuickPopups, [{
                    key: 'render',
                    value: function render() {
                        this.renderQuickPopup();
                        this.renderQuickDialog();
                        this.renderMoreEventPopup();
                        this.renderEventPopup();
                    }
                }, {
                    key: 'renderQuickPopup',
                    value: function renderQuickPopup() {
                        this.quickPopup = new Tooltip({
                            animation: { open: { effect: 'FadeIn' }, close: { effect: 'FadeOut' } },
                            afterOpen: this.afterQuickPopupOpen.bind(this),
                            beforeOpen: this.beforeQuickPopupOpen.bind(this),
                            beforeClose: this.beforeQuickPopupClose.bind(this),
                            afterClose: this.afterQuickPopupClose.bind(this),
                            cssClass: QUICK_POPUP_ROOT_CLASS,
                            enableRtl: this.parent.enableRtl, isSticky: true,
                            opensOn: 'Custom',
                            showTipPointer: false
                        });
                        this.quickPopup.appendTo(this.parent.element);
                        this.primaryButton = new Button({
                            cssClass: 'e-primary',
                            disabled: this.parent.activeViewOptions.readonly,
                            enableRtl: this.parent.enableRtl
                        });
                        this.flatButton = new Button({
                            cssClass: 'e-flat',
                            disabled: this.parent.activeViewOptions.readonly,
                            enableRtl: this.parent.enableRtl
                        });
                    }
                }, {
                    key: 'renderQuickDialog',
                    value: function renderQuickDialog() {
                        this.quickDialog = new Dialog({
                            animationSettings: { effect: 'Zoom' },
                            buttons: [{ buttonModel: { isPrimary: true }, click: this.dialogButtonClick.bind(this) }, { buttonModel: { isPrimary: false }, click: this.dialogButtonClick.bind(this) }],
                            cssClass: QUICK_DIALOG_CLASS,
                            closeOnEscape: true,
                            enableRtl: this.parent.enableRtl,
                            beforeClose: this.beforeQuickDialogClose.bind(this),
                            isModal: true,
                            position: { X: 'center', Y: 'center' },
                            showCloseIcon: true,
                            target: document.body,
                            visible: false,
                            width: 'auto'
                        });
                        var dialogElement = createElement('div', { id: this.parent.element.id + 'QuickDialog' });
                        this.parent.element.appendChild(dialogElement);
                        this.quickDialog.appendTo(dialogElement);
                    }
                }, {
                    key: 'renderMoreEventPopup',
                    value: function renderMoreEventPopup() {
                        var moreEventWrapper = createElement('div', { className: MORE_POPUP_WRAPPER_CLASS + ' e-popup-close' });
                        this.parent.element.appendChild(moreEventWrapper);
                        var moreEventHeader = '<div class="${classList[0]}"><div class="${classList[1]}">' + '<div class="${classList[2]}" tabindex="0"><div class="${classList[3]}"></div>' + '<div class="${classList[4]}" tabindex="0"></div></div>' + '<div class="${classList[5]}" title="${l10n.close}" tabindex="0"></div></div></div>';
                        var moreEventArgs = {
                            classList: [MORE_EVENT_POPUP_CLASS, MORE_EVENT_HEADER_CLASS, MORE_EVENT_DATE_HEADER_CLASS, MORE_EVENT_HEADER_DAY_CLASS, MORE_EVENT_HEADER_DATE_CLASS + ' ' + NAVIGATE_CLASS, MORE_EVENT_CLOSE_CLASS],
                            l10n: { close: this.l10n.getConstant('close'), noTitle: this.l10n.getConstant('noTitle') }
                        };
                        var moreEventContent = compile(moreEventHeader)(moreEventArgs)[0];
                        this.morePopup = new Popup(moreEventWrapper, {
                            targetType: 'relative',
                            content: moreEventContent,
                            enableRtl: this.parent.enableRtl,
                            hideAnimation: { name: 'ZoomOut', duration: 300 },
                            showAnimation: { name: 'ZoomIn', duration: 300 },
                            open: this.afterMorePopupOpen.bind(this),
                            close: this.afterMorePopupClose.bind(this),
                            collision: { X: 'flip', Y: 'flip' },
                            viewPortElement: this.parent.element.querySelector('.' + TABLE_CONTAINER_CLASS),
                            zIndex: 10
                        });
                        var closeButton = new Button({ iconCss: 'e-icons e-close-icon', cssClass: 'e-round', isPrimary: false });
                        closeButton.appendTo(moreEventContent.querySelector('.' + MORE_EVENT_CLOSE_CLASS));
                        EventHandler.add(moreEventContent.querySelector('.' + MORE_EVENT_CLOSE_CLASS), 'click', this.closeClick, this);
                        EventHandler.add(moreEventContent.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS), 'click', this.dayNavigationClick, this);
                    }
                }, {
                    key: 'dayNavigationClick',
                    value: function dayNavigationClick(e) {
                        var navigateEle = closest(e.target, '.' + NAVIGATE_CLASS);
                        if (!isNullOrUndefined(navigateEle)) {
                            var date = this.parent.getDateFromElement(e.currentTarget);
                            if (!isNullOrUndefined(date) && !this.parent.isAdaptive) {
                                this.closeClick();
                                this.parent.setProperties({ selectedDate: date }, true);
                                this.parent.changeView('Day');
                            }
                        }
                    }
                }, {
                    key: 'renderEventPopup',
                    value: function renderEventPopup() {
                        var viewHeight = document.body.offsetHeight;
                        var toolBarHeight = this.parent.element.querySelector('.' + TOOLBAR_CONTAINER);
                        var eventWrapper = createElement('div', {
                            className: SELECT_POPUP_WRAPPER_CLASS + ' e-popup-close'
                        });
                        this.parent.element.appendChild(eventWrapper);
                        var eventTemplate = '<div id="${id}EventDetailsWindow" class="${classList[0]}">' + '<div class="${classList[1]}">' + '<div class="${classList[23]}"><div class="${classList[24]}">' + '<div class="${classList[2]} ${classList[5]}" title="${l10n.close}" tabindex="0"></div></div>' + '<div class="${classList[25]}"><div class="${classList[3]} ${classList[5]}" title="${l10n.editEvent}" tabindex="0"></div>' + '<div class="${classList[4]} ${classList[5]}" title="${l10n.delete}" tabindex="0"></div></div></div>' + '<div class="${classList[6]} ${classList[7]}"></div></div>' + '<div class="${classList[9]}">' + '<div class="${classList[11]}"><div class="${classList[10]} ${classList[5]}"></div>' + '<div class="${classList[8]} ${classList[7]}">' + '<div class="${classList[26]} ${classList[7]}"></div><div class="${classList[27]} ${classList[7]}"></div></div></div>' + '<div class="${classList[14]}"><div class="${classList[15]} ${classList[5]}"></div>' + '<div class="${classList[16]} ${classList[7]}"></div></div>' + '<div class="${classList[17]}"><div class="${classList[18]} ${classList[5]}"></div>' + '<div class="${classList[19]} ${classList[7]}"></div></div>' + '<div class="${classList[20]}"><div class="${classList[21]} ${classList[5]}"></div>' + '<div class="${classList[22]} ${classList[7]}"></div></div></div>';
                        var eventSelectTemplate = '<div id="${id}EventDetailsWindow" class="${classList[0]} ${classList[13]}">' + '<div class="${classList[1]}"><tbody>' + '<div class="${classList[2]} ${classList[5]}" title="${l10n.close}" tabindex="0"></div>' + '<div class="${classList[12]}"></div>' + '<div class="${classList[3]} ${classList[5]}" title="${l10n.editEvent}" tabindex="0"></div>' + '<div class="${classList[4]} ${classList[5]}" title="${l10n.delete}" tabindex="0"></div></div>';
                        var eventArgs = {
                            classList: [QUICK_POPUP_CLASS, QUICK_POPUP_TABLE_CLASS, SELECTED_EVENT_CLOSE_CLASS, SELECTED_EVENT_EDIT_CLASS, SELECTED_EVENT_DELETE_CLASS, ICON, QUICK_POPUP_EVENT_TITLE_CLASS, QUICK_POPUP_TEXT_ALIGN_CLASS, QUICK_POPUP_DATE_TIME_DETAILS_CLASS, QUICK_POPUP_CONTENT_CLASS, SELECTED_DATE_TIME_CLASS, APPOINTMENT_TIME, SELECTED_EVENT_TITLE_CLASS, SELECTED_EVENT_CONTAINER_CLASS, APPOINTMENT_LOCATION, SELECTED_CALENDER_CLASS, QUICK_POPUP_LOCATION_DETAILS_CLASS, EVENT_WINDOW_TZ_CLASS, EVENT_TIME_ZONE_CLASS, EVENT_ZONE_DETAILS_CLASS, EVENT_DETAILS_CLASS, EVENT_NOTE_CLASS, EVENT_NOTE_DETAILS_CLASS, QUICK_POPUP_ICON_CLASS, QUICK_POPUP_CLOSE_ICON_CLASS, QUICK_POPUP_EDIT_ICON_CLASS, DEVICE_DATE_TIME_DETAILS_CLASS, DEVICE_RECURRENCE_SUMMARY_CLASS],
                            id: this.parent.element.id,
                            l10n: {
                                close: this.l10n.getConstant('closeButton'),
                                delete: this.l10n.getConstant('delete'),
                                editSeries: this.l10n.getConstant('editSeries'),
                                editEvent: this.l10n.getConstant('editEvent')
                            }
                        };
                        this.selectedEventPopup = compile(eventTemplate)(eventArgs)[0];
                        this.multipleEventPopup = compile(eventSelectTemplate)(eventArgs)[0];
                        this.eventPopup = new Popup(eventWrapper, {
                            targetType: 'relative',
                            content: this.selectedEventPopup,
                            collision: { X: 'fit', Y: 'fit' },
                            enableRtl: this.parent.enableRtl,
                            hideAnimation: { name: 'ZoomOut' },
                            showAnimation: { name: 'ZoomIn' },
                            relateTo: document.body
                        });
                        eventWrapper.querySelector('.' + QUICK_POPUP_TABLE_CLASS).style.height = formatUnit(viewHeight * 25 / 100);
                        eventWrapper.querySelector('.' + QUICK_POPUP_CONTENT_CLASS).style.height = formatUnit(viewHeight * 75 / 100);
                        EventHandler.add(this.selectedEventPopup.querySelector('.' + SELECTED_EVENT_CLOSE_CLASS), 'click', this.closeClick, this);
                        EventHandler.add(this.selectedEventPopup.querySelector('.' + SELECTED_EVENT_EDIT_CLASS), 'click', this.editClick, this);
                        EventHandler.add(this.selectedEventPopup.querySelector('.' + SELECTED_EVENT_DELETE_CLASS), 'click', this.deleteClick, this);
                        EventHandler.add(this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_CLOSE_CLASS), 'click', this.closeClick, this);
                        EventHandler.add(this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_EDIT_CLASS), 'click', this.editClick, this);
                        EventHandler.add(this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_DELETE_CLASS), 'click', this.deleteClick, this);
                    }
                }, {
                    key: 'openRecurrenceAlert',
                    value: function openRecurrenceAlert() {
                        var dialogFooter = this.quickDialog.element.querySelector('.' + DIALOG_FOOTER_CONTENT_CLASS).children;
                        dialogFooter[0].innerHTML = this.parent.currentAction === 'Delete' ? this.l10n.getConstant('deleteEvent') : this.l10n.getConstant('editEvent');
                        dialogFooter[1].innerHTML = this.parent.currentAction === 'Delete' ? this.l10n.getConstant('deleteSeries') : this.l10n.getConstant('editSeries');
                        this.quickDialog.content = this.parent.currentAction === 'Delete' ? this.l10n.getConstant('deleteRecurrenceContent') : this.l10n.getConstant('editContent');
                        this.quickDialog.header = this.parent.currentAction === 'Delete' ? this.l10n.getConstant('deleteEvent') : this.l10n.getConstant('editEvent');
                        this.quickDialogClass('Recurrence');
                        this.showQuickDialog('RecurrenceAlert');
                    }
                }, {
                    key: 'openDeleteAlert',
                    value: function openDeleteAlert() {
                        var dialogFooter = this.quickDialog.element.querySelector('.' + DIALOG_FOOTER_CONTENT_CLASS).children;
                        dialogFooter[0].innerHTML = this.l10n.getConstant('delete');
                        dialogFooter[1].innerHTML = this.l10n.getConstant('cancel');
                        this.quickDialog.content = this.l10n.getConstant('deleteContent');
                        this.quickDialog.header = this.l10n.getConstant('deleteEvent');
                        this.quickDialogClass('Delete');
                        this.showQuickDialog('DeleteAlert');
                    }
                }, {
                    key: 'openValidationError',
                    value: function openValidationError(type) {
                        this.quickDialog.header = this.l10n.getConstant('alert');
                        this.quickDialog.content = this.l10n.getConstant(type);
                        var dialogFooter = this.quickDialog.element.querySelector('.' + DIALOG_FOOTER_CONTENT_CLASS).children;
                        dialogFooter[0].innerHTML = this.l10n.getConstant('ok');
                        dialogFooter[1].innerHTML = this.l10n.getConstant('cancel');
                        this.quickDialogClass('Alert');
                        this.showQuickDialog('ValidationAlert');
                    }
                }, {
                    key: 'showQuickDialog',
                    value: function showQuickDialog(popupType) {
                        this.quickDialog.dataBind();
                        var eventProp = {
                            type: popupType, cancel: false, data: this.parent.activeEventData,
                            element: this.quickDialog.element
                        };
                        this.parent.trigger(popupOpen, eventProp);
                        if (eventProp.cancel) {
                            return;
                        }
                        this.quickDialog.show();
                    }
                }, {
                    key: 'createMoreEventList',
                    value: function createMoreEventList(events) {
                        var fields = this.parent.eventFields;
                        var moreEventContentEle = createElement('div', { className: MORE_EVENT_CONTENT_CLASS });
                        var moreEventWrapperEle = createElement('div', { className: MORE_EVENT_WRAPPER_CLASS });
                        var _iteratorNormalCompletion15 = true;
                        var _didIteratorError15 = false;
                        var _iteratorError15 = undefined;

                        try {
                            for (var _iterator15 = events[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                                var event = _step15.value;

                                var appointmentEle = createElement('div', {
                                    id: '' + event[fields.id],
                                    className: APPOINTMENT_CLASS,
                                    attrs: {
                                        'data-guid': event.Guid,
                                        'role': 'button', 'tabindex': '0', 'aria-readonly': 'false', 'aria-selected': 'false', 'aria-grabbed': 'true',
                                        'aria-label': isNullOrUndefined(event[fields.subject]) ? this.parent.eventSettings.fields.subject.default : event[fields.subject]
                                    }
                                });
                                appointmentEle.appendChild(createElement('div', {
                                    className: APPOINTMENT_SUBJECT,
                                    innerHTML: event[fields.subject] || this.parent.eventSettings.fields.subject.default
                                }));
                                if (!isNullOrUndefined(event[fields.recurrenceRule])) {
                                    var iconClass = event[fields.id] === event[fields.recurrenceID] ? EVENT_RECURRENCE_ICON_CLASS : EVENT_RECURRENCE_EDIT_ICON_CLASS;
                                    appointmentEle.appendChild(createElement('div', { className: ICON + ' ' + iconClass }));
                                }
                                this.parent.eventBase.wireAppointmentEvents(appointmentEle);
                                moreEventWrapperEle.appendChild(appointmentEle);
                            }
                        } catch (err) {
                            _didIteratorError15 = true;
                            _iteratorError15 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion15 && _iterator15.return) {
                                    _iterator15.return();
                                }
                            } finally {
                                if (_didIteratorError15) {
                                    throw _iteratorError15;
                                }
                            }
                        }

                        moreEventContentEle.appendChild(moreEventWrapperEle);
                        return moreEventContentEle;
                    }
                }, {
                    key: 'eventHold',
                    value: function eventHold(args) {
                        var target = args.target;
                        this.isMultipleEventSelect = false;
                        if (!isNullOrUndefined(closest(target, '.' + APPOINTMENT_CLASS)) && this.parent.isAdaptive) {
                            target = closest(target, '.' + APPOINTMENT_CLASS);
                            this.parent.selectedElements = [];
                            this.isMultipleEventSelect = true;
                            this.selectedEventDialog(target);
                            return;
                        }
                    }
                }, {
                    key: 'cellClick',
                    value: function cellClick(args) {
                        if (!this.parent.showQuickInfo || this.parent.currentView === 'MonthAgenda') {
                            return;
                        }
                        var target = closest(args.event.target, '.' + WORK_CELLS_CLASS + ',.' + ALLDAY_CELLS_CLASS + ',.' + HEADER_CELLS_CLASS);
                        if (isNullOrUndefined(target) || args.event.target.classList.contains(MORE_INDICATOR_CLASS)) {
                            return;
                        }
                        var timeDetails = this.parent.activeCellsData.isAllDay ? this.l10n.getConstant('allDay') : this.getDateFormat(this.parent.activeCellsData.startTime, 'hm') + ' - ' + this.getDateFormat(this.parent.activeCellsData.endTime, 'hm');
                        var temp = {};
                        temp[this.parent.eventFields.startTime] = this.parent.activeCellsData.startTime;
                        temp[this.parent.eventFields.endTime] = this.parent.activeCellsData.endTime;
                        temp[this.parent.eventFields.isAllDay] = this.parent.activeCellsData.isAllDay;
                        var cellDetails = this.getFormattedString(temp, 'cell');
                        var cellTemplate = '<div id="${id}EventCreateWindow" class="${classList[0]}"><table class="${classList[1]}"><tbody>' + '<tr><td><form class="${classList[2]}" onsubmit="return false;">' + '<input class="${classList[3]}" type="text" name="Subject" /></form></td></tr>' + '<tr><td><div class="${classList[4]} ${classList[8]}">' + cellDetails.details + '</div></td></tr>' + '</tbody></table><div class="${classList[5]}">' + '<div class="${classList[6]} ${classList[8]}" title="${l10n.moreDetails}" tabindex="0">${l10n.moreDetails}</div>' + '<div class="${classList[7]} ${classList[8]}" title="${l10n.save}" tabindex="0">${l10n.save}</div></div></div>';
                        var cellArgs = {
                            classList: [QUICK_POPUP_CLASS, QUICK_POPUP_TABLE_CLASS, EVENT_WINDOW_FORM_CLASS, QUICK_POPUP_SUBJECT_CLASS, QUICK_POPUP_DATE_TIME_DETAILS_CLASS, QUICK_POPUP_FOOTER_CLASS, QUICK_POPUP_EVENT_DETAILS_CLASS, QUICK_POPUP_EVENT_CREATE_CLASS, QUICK_POPUP_TEXT_ALIGN_CLASS],
                            id: this.parent.element.id,
                            l10n: {
                                moreDetails: this.l10n.getConstant('moreDetails'),
                                save: this.l10n.getConstant('save')
                            }
                        };
                        var quickCellPopup = compile(cellTemplate)(cellArgs)[0];
                        Input.createInput({
                            element: quickCellPopup.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS),
                            properties: { placeholder: this.l10n.getConstant('addTitle') }
                        });
                        this.flatButton.appendTo(quickCellPopup.querySelector('.' + QUICK_POPUP_EVENT_DETAILS_CLASS));
                        this.primaryButton.appendTo(quickCellPopup.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS));
                        EventHandler.add(quickCellPopup.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS), 'click', this.saveClick, this);
                        EventHandler.add(quickCellPopup.querySelector('.' + QUICK_POPUP_EVENT_DETAILS_CLASS), 'click', this.detailsClick, this);
                        this.quickPopup.content = quickCellPopup;
                        this.quickPopup.target = '.' + WORK_CELLS_CLASS;
                        this.quickPopup.dataBind();
                        this.applyFormValidation();
                        if (this.morePopup) {
                            this.morePopup.hide();
                        }
                        if (!this.parent.isAdaptive && target.getAttribute('data-tooltip-id') === null) {
                            this.quickPopup.close();
                            this.quickPopup.open(target);
                        } else {
                            quickCellPopup.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).focus();
                        }
                    }
                }, {
                    key: 'applyFormValidation',
                    value: function applyFormValidation() {
                        var form = this.quickPopup.content.querySelector('.' + EVENT_WINDOW_FORM_CLASS);
                        var rules = {};
                        rules[this.parent.eventSettings.fields.subject.name] = this.parent.eventSettings.fields.subject.validation;
                        this.fieldValidator.renderFormValidator(form, rules);
                    }
                }, {
                    key: 'eventClick',
                    value: function eventClick(events) {
                        if (this.parent.eventTooltip) {
                            this.parent.eventTooltip.close();
                        }
                        if (!this.parent.showQuickInfo) {
                            return;
                        }
                        if (this.parent.isAdaptive) {
                            if (this.isMultipleEventSelect) {
                                this.selectedEventDialog(closest(events.element, '.' + APPOINTMENT_CLASS));
                            } else {
                                this.deviceEventClick(events);
                            }
                        } else {
                            var eventData = events.event;
                            var args = this.getFormattedString(eventData, 'event');
                            var eventTemplate = '<div id="${id}EventDetailsWindow" class="${classList[0]}"><table class="${classList[1]}"><tbody>' + '<tr><td><div class="${classList[2]} ${classList[7]}">' + args.eventSubject + '</div></td></tr>' + '<tr><td><div class="${classList[3]} ${classList[7]}">' + args.details + '</div></td></tr>' + '</tbody></table><div class="${classList[4]}">' + '<div class="${classList[5]} ${classList[7]}" title="${l10n.delete}" tabindex="0">${l10n.delete}</div>' + '<div class="${classList[6]} ${classList[7]}" title="${l10n.edit}" tabindex="0">${l10n.edit}</div></div></div>';
                            var eventArgs = {
                                classList: [QUICK_POPUP_CLASS, QUICK_POPUP_TABLE_CLASS, QUICK_POPUP_EVENT_TITLE_CLASS, QUICK_POPUP_DATE_TIME_DETAILS_CLASS, QUICK_POPUP_FOOTER_CLASS, QUICK_POPUP_DELETE_EVENT_CLASS, QUICK_POPUP_EDIT_EVENT_CLASS, QUICK_POPUP_TEXT_ALIGN_CLASS],
                                id: this.parent.element.id,
                                l10n: {
                                    delete: this.l10n.getConstant('delete'),
                                    edit: this.l10n.getConstant('edit')
                                }
                            };
                            var quickEventPopup = compile(eventTemplate)(eventArgs)[0];
                            this.flatButton.appendTo(quickEventPopup.querySelector('.' + QUICK_POPUP_DELETE_EVENT_CLASS));
                            this.primaryButton.appendTo(quickEventPopup.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS));
                            EventHandler.add(quickEventPopup.querySelector('.' + QUICK_POPUP_DELETE_EVENT_CLASS), 'click', this.deleteClick, this);
                            EventHandler.add(quickEventPopup.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS), 'click', this.editClick, this);
                            this.quickPopup.content = quickEventPopup;
                            this.quickPopup.target = '.' + APPOINTMENT_CLASS;
                            this.quickPopup.dataBind();
                            if (this.morePopup && !closest(events.element, '.' + MORE_EVENT_WRAPPER_CLASS)) {
                                this.morePopup.hide();
                            }
                            if (!this.parent.isAdaptive && events.element.getAttribute('data-tooltip-id') === null) {
                                this.quickPopup.close();
                                this.quickPopup.open(events.element);
                            } else {
                                this.quickPopup.content.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS).focus();
                            }
                        }
                    }
                }, {
                    key: 'deviceEventClick',
                    value: function deviceEventClick(events) {
                        var fields = this.parent.eventFields;
                        var eventData = events.event;
                        var eventSelectSubject = isNullOrUndefined(eventData[fields.subject]) ? this.l10n.getConstant('noTitle') : eventData[fields.subject];
                        var eventTimeDetails = eventData[fields.isAllDay] ? this.l10n.getConstant('allDay') : this.getDateFormat(eventData[fields.startTime], 'hm') + ' - ' + this.getDateFormat(eventData[fields.endTime], 'hm');
                        var eventSelectDetails = this.getTimeDetails(eventData) + ' (' + eventTimeDetails + ')';
                        this.selectedEventPopup.querySelector('.' + QUICK_POPUP_EVENT_TITLE_CLASS).innerHTML = eventSelectSubject;
                        this.selectedEventPopup.querySelector('.' + DEVICE_DATE_TIME_DETAILS_CLASS).innerHTML = eventSelectDetails;
                        this.selectedEventPopup.querySelector('.' + QUICK_POPUP_LOCATION_DETAILS_CLASS).innerHTML = !isNullOrUndefined(eventData[fields.location]) ? eventData[fields.location] : '';
                        this.selectedEventPopup.querySelector('.' + EVENT_ZONE_DETAILS_CLASS).innerHTML = this.getTimezone(eventData);
                        this.selectedEventPopup.querySelector('.' + EVENT_NOTE_DETAILS_CLASS).innerHTML = !isNullOrUndefined(eventData[fields.description]) ? eventData[fields.description] : '';
                        if (!isNullOrUndefined(eventData[fields.recurrenceRule])) {
                            var recurrenceEditor = this.parent.eventWindow.getRecurrenceEditorInstance();
                            var ruleSummary = recurrenceEditor.getRuleSummary(eventData[fields.recurrenceRule]);
                            this.selectedEventPopup.querySelector('.' + DEVICE_RECURRENCE_SUMMARY_CLASS).innerHTML = ruleSummary.charAt(0).toUpperCase() + ruleSummary.slice(1);
                        } else {
                            this.selectedEventPopup.querySelector('.' + DEVICE_RECURRENCE_SUMMARY_CLASS).innerHTML = '';
                        }
                        if (isNullOrUndefined(eventData[fields.location]) || eventData[fields.location] === '') {
                            addClass([this.selectedEventPopup.querySelector('.' + APPOINTMENT_LOCATION)], DISABLE_CLASS);
                        } else {
                            removeClass([this.selectedEventPopup.querySelector('.' + APPOINTMENT_LOCATION)], DISABLE_CLASS);
                        }
                        if (isNullOrUndefined(eventData[fields.startTimezone]) && isNullOrUndefined(eventData[fields.endTimezone])) {
                            addClass([this.selectedEventPopup.querySelector('.' + EVENT_WINDOW_TZ_CLASS)], DISABLE_CLASS);
                        } else {
                            removeClass([this.selectedEventPopup.querySelector('.' + EVENT_WINDOW_TZ_CLASS)], DISABLE_CLASS);
                        }
                        if (isNullOrUndefined(eventData[fields.description]) || eventData[fields.description] === '') {
                            addClass([this.selectedEventPopup.querySelector('.' + EVENT_DETAILS_CLASS)], DISABLE_CLASS);
                        } else {
                            removeClass([this.selectedEventPopup.querySelector('.' + EVENT_DETAILS_CLASS)], DISABLE_CLASS);
                        }
                        this.eventPopup.content = this.selectedEventPopup;
                        if (this.eventPopup && !closest(events.element, '.' + MORE_EVENT_WRAPPER_CLASS)) {
                            this.showEventPopup('ViewEventInfo');
                        }
                    }
                }, {
                    key: 'showEventPopup',
                    value: function showEventPopup(popupType) {
                        var eventProp = {
                            type: popupType, cancel: false, data: this.parent.activeEventData.event,
                            target: this.parent.activeEventData.element, element: this.eventPopup.element
                        };
                        this.parent.trigger(popupOpen, eventProp);
                        if (eventProp.cancel) {
                            return;
                        }
                        this.eventPopup.show();
                    }
                }, {
                    key: 'getFormattedString',
                    value: function getFormattedString(eventData, type) {
                        var fields = this.parent.eventFields;
                        var eventSubject = isNullOrUndefined(eventData[fields.subject]) ? this.l10n.getConstant('noTitle') : eventData[fields.subject];
                        var startDate = eventData[fields.startTime];
                        var endDate = eventData[fields.endTime];
                        var startDateDetails = this.getDateFormat(startDate, 'long');
                        var endDateDetails = eventData[fields.isAllDay] && endDate.getHours() === 0 && endDate.getMinutes() === 0 ? this.getDateFormat(addDays(new Date(endDate.getTime()), -1), 'long') : this.getDateFormat(endDate, 'long');
                        var startTimeDetail = this.getDateFormat(startDate, 'hm');
                        var endTimeDetail = this.getDateFormat(endDate, 'hm');
                        var details = void 0;
                        var allDayLength = (endDate.getTime() - startDate.getTime()) / MS_PER_DAY;
                        var spanLength = endDate.getDate() !== startDate.getDate() && (endDate.getTime() - startDate.getTime()) / (60 * 60 * 1000) < 24 ? 1 : 0;
                        if (eventData[fields.isAllDay] || allDayLength >= 1 || spanLength > 0) {
                            details = startDateDetails + ' (' + (eventData[fields.isAllDay] ? this.l10n.getConstant('allDay') : startTimeDetail) + ')';
                            if (allDayLength > 1 || spanLength > 0) {
                                details += '&nbsp;-&nbsp;' + endDateDetails + ' (' + (eventData[fields.isAllDay] ? this.l10n.getConstant('allDay') : endTimeDetail) + ')';
                            }
                        } else {
                            details = startDateDetails + ' (' + (startTimeDetail + '&nbsp;-&nbsp;' + endTimeDetail) + ')';
                        }
                        return { eventSubject: eventSubject, details: details };
                    }
                }, {
                    key: 'moreEventClick',
                    value: function moreEventClick(data) {
                        if (!this.parent.showQuickInfo) {
                            return;
                        }
                        if (this.morePopup.element.querySelector('.' + MORE_EVENT_CONTENT_CLASS)) {
                            this.morePopup.element.querySelector('.' + MORE_EVENT_CONTENT_CLASS).remove();
                        }
                        this.morePopup.element.children[0].appendChild(this.createMoreEventList(data.event));
                        var selectedDate = data.date.getTime().toString();
                        var target = closest(data.element, '.' + MORE_INDICATOR_CLASS);
                        this.morePopup.element.querySelector('.' + MORE_EVENT_HEADER_DAY_CLASS).innerHTML = this.getDateFormat(data.date, 'E');
                        this.morePopup.element.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).innerHTML = this.getDateFormat(data.date, 'd');
                        this.morePopup.element.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).setAttribute('data-date', selectedDate);
                        this.morePopup.relateTo = closest(target, '.' + WORK_CELLS_CLASS);
                        var eventProp = { type: 'EventContainer', data: data, cancel: false, element: this.morePopup.element };
                        this.parent.trigger(popupOpen, eventProp);
                        if (eventProp.cancel) {
                            return;
                        }
                        this.morePopup.show();
                    }
                }, {
                    key: 'saveClick',
                    value: function saveClick() {
                        if (!this.quickPopup.content.querySelector('.' + EVENT_WINDOW_FORM_CLASS).ej2_instances[0].validate()) {
                            return;
                        }
                        this.quickPopup.close();
                        var fields = this.parent.eventFields;
                        var saveObj = {};
                        saveObj[fields.id] = this.parent.eventBase.getEventMaxId() + 1;
                        saveObj[fields.subject] = this.quickPopup.content.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).value || this.parent.eventSettings.fields.subject.default;
                        saveObj[fields.startTime] = this.parent.activeCellsData.startTime;
                        saveObj[fields.endTime] = this.parent.activeCellsData.endTime;
                        saveObj[fields.isAllDay] = this.parent.activeCellsData.isAllDay;
                        this.crudAction.addEvent(saveObj);
                    }
                }, {
                    key: 'detailsClick',
                    value: function detailsClick() {
                        var subject = this.quickPopup.content.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).value;
                        if (subject !== '') {
                            var args = extend(this.parent.activeCellsData, { subject: subject });
                        }
                        this.fieldValidator.destroyToolTip();
                        this.quickPopup.close();
                        this.parent.eventWindow.openEditor(this.parent.activeCellsData, 'Add');
                    }
                }, {
                    key: 'editClick',
                    value: function editClick(event) {
                        this.quickPopup.close({ effect: 'None' });
                        this.morePopup.hide();
                        var data = this.parent.activeEventData.event;
                        this.parent.currentAction = 'EditSeries';
                        if (this.parent.isAdaptive) {
                            this.eventPopup.hide();
                            this.isMultipleEventSelect = false;
                            if (!isNullOrUndefined(data[this.parent.eventFields.recurrenceRule])) {
                                this.parent.currentAction = 'EditOccurrence';
                                this.openRecurrenceAlert();
                                return;
                            }
                        }
                        if (!isNullOrUndefined(data[this.parent.eventFields.recurrenceRule])) {
                            this.parent.currentAction = 'EditOccurrence';
                            this.openRecurrenceAlert();
                        } else {
                            this.parent.eventWindow.openEditor(data, this.parent.currentAction);
                        }
                    }
                }, {
                    key: 'deleteClick',
                    value: function deleteClick() {
                        this.quickPopup.close({ effect: 'None' });
                        this.morePopup.hide();
                        if (this.parent.isAdaptive) {
                            this.eventPopup.hide();
                            this.isMultipleEventSelect = false;
                        }
                        this.parent.currentAction = 'Delete';
                        if (this.parent.activeEventData.event[this.parent.eventFields.recurrenceRule]) {
                            this.openRecurrenceAlert();
                        } else {
                            this.openDeleteAlert();
                        }
                    }
                }, {
                    key: 'closeClick',
                    value: function closeClick() {
                        this.morePopup.hide();
                        this.eventPopup.hide();
                        this.isMultipleEventSelect = false;
                    }
                }, {
                    key: 'dialogButtonClick',
                    value: function dialogButtonClick(event) {
                        this.quickDialog.hide();
                        if (event.target.classList.contains(QUICK_DIALOG_EDIT_EVENT_CLASS)) {
                            this.parent.currentAction = this.parent.currentAction === 'Delete' ? 'DeleteOccurrence' : 'EditOccurrence';
                            switch (this.parent.currentAction) {
                                case 'EditOccurrence':
                                    this.parent.eventWindow.openEditor(this.parent.activeEventData.event, this.parent.currentAction);
                                    break;
                                case 'DeleteOccurrence':
                                    this.crudAction.deleteEvent(this.parent.activeEventData.event, this.parent.currentAction);
                                    break;
                            }
                        } else if (event.target.classList.contains(QUICK_DIALOG_EDIT_SERIES_CLASS)) {
                            this.parent.currentAction = this.parent.currentAction === 'Delete' ? 'DeleteSeries' : 'EditSeries';
                            switch (this.parent.currentAction) {
                                case 'EditSeries':
                                    var parentEvent = this.parent.eventBase.getRecurrenceEvent(this.parent.activeEventData.event);
                                    this.parent.eventWindow.openEditor(parentEvent, this.parent.currentAction);
                                    break;
                                case 'DeleteSeries':
                                    this.crudAction.deleteEvent(this.parent.activeEventData.event, this.parent.currentAction);
                                    break;
                            }
                        } else if (event.target.classList.contains(QUICK_DIALOG_DELETE_CLASS)) {
                            this.crudAction.deleteEvent(this.parent.activeEventData.event, this.parent.currentAction);
                        }
                    }
                }, {
                    key: 'selectedEventDialog',
                    value: function selectedEventDialog(target) {
                        var selectedElements = this.parent.eventBase.getSelectedEventElements(target);
                        this.parent.activeEventData = this.parent.eventBase.getSelectedEvents();
                        if (selectedElements.length === 1) {
                            this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_TITLE_CLASS).innerHTML = selectedElements[0].querySelector('.' + APPOINTMENT_SUBJECT).textContent;
                            removeClass([this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_EDIT_CLASS)], EVENT_EDIT_DISABLE_CLASS);
                            this.eventPopup.content = this.multipleEventPopup;
                            if (this.eventPopup && !closest(target, '.' + MORE_EVENT_WRAPPER_CLASS)) {
                                this.showEventPopup('EditEventInfo');
                            }
                        } else if (selectedElements.length <= 0) {
                            this.parent.selectedElements = [];
                            this.isMultipleEventSelect = false;
                            this.eventPopup.hide();
                        } else if (selectedElements.length > 1) {
                            this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_TITLE_CLASS).innerHTML = '(' + selectedElements.length.toString() + ')' + '&nbsp;' + this.l10n.getConstant('selectedItems');
                            addClass([this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_EDIT_CLASS)], EVENT_EDIT_DISABLE_CLASS);
                        }
                    }
                }, {
                    key: 'getTimezone',
                    value: function getTimezone(event) {
                        var fields = this.parent.eventFields;
                        var zoneDetails = '';
                        timezoneData.filter(function (zoneData) {
                            if (!isNullOrUndefined(event[fields.startTimezone]) && zoneData.Value === event[fields.startTimezone]) {
                                zoneDetails = zoneData.Text.split(') ')[0] + ')' + zoneDetails;
                            }
                            if (!isNullOrUndefined(event[fields.endTimezone]) && zoneData.Value === event[fields.endTimezone]) {
                                zoneDetails = zoneDetails + '&nbsp;' + zoneData.Text.split(') ')[0] + ')';
                            }
                        });
                        return zoneDetails;
                    }
                }, {
                    key: 'getTimeDetails',
                    value: function getTimeDetails(event) {
                        var fields = this.parent.eventFields;
                        var startDate = event[fields.startTime];
                        var endDate = event[fields.endTime];
                        var allDayLength = (endDate.getTime() - startDate.getTime()) / MS_PER_DAY;
                        var timeDetails = '';
                        if (this.getDateFormat(startDate, 'yMd') === this.getDateFormat(endDate, 'yMd') || event[fields.isAllDay] && allDayLength === 1) {
                            timeDetails = this.parent.globalize.formatDate(startDate, { format: 'MMMM d, yyyy' });
                        } else {
                            timeDetails = this.parent.globalize.formatDate(startDate, { format: 'MMM dd' }) + ' - ' + this.parent.globalize.formatDate(endDate, { format: 'MMM dd, yyyy' });
                        }
                        return timeDetails;
                    }
                }, {
                    key: 'getDateFormat',
                    value: function getDateFormat(date, formatString) {
                        return this.parent.globalize.formatDate(date, { skeleton: formatString });
                    }
                }, {
                    key: 'afterQuickPopupOpen',
                    value: function afterQuickPopupOpen(args) {
                        if (this.quickPopup.content.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS)) {
                            this.quickPopup.content.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).focus();
                        }
                        if (this.quickPopup.content.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS)) {
                            this.quickPopup.content.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS).focus();
                        }
                    }
                }, {
                    key: 'beforeQuickPopupOpen',
                    value: function beforeQuickPopupOpen(args) {
                        args.element.querySelector('.' + TOOLTIP_CLOSE_CLASS).setAttribute('title', this.l10n.getConstant('close'));
                        EventHandler.add(args.element, 'keydown', this.keyPress, this);
                        var eventProp = {
                            type: 'QuickInfo', cancel: false, data: this.getDataFromTarget(args.target),
                            target: args.target, element: args.element
                        };
                        this.parent.trigger(popupOpen, eventProp);
                        if (eventProp.cancel) {
                            args.cancel = true;
                        }
                    }
                }, {
                    key: 'getDataFromTarget',
                    value: function getDataFromTarget(target) {
                        if (target.classList.contains(APPOINTMENT_CLASS)) {
                            return this.parent.activeEventData.event;
                        }
                        return this.parent.activeCellsData;
                    }
                }, {
                    key: 'beforeQuickPopupClose',
                    value: function beforeQuickPopupClose(args) {
                        EventHandler.remove(args.element, 'keydown', this.keyPress);
                    }
                }, {
                    key: 'beforeQuickDialogClose',
                    value: function beforeQuickDialogClose(args) {
                        this.parent.eventBase.focusElement();
                    }
                }, {
                    key: 'keyPress',
                    value: function keyPress(event) {
                        var popupElement = this.quickPopup.content;
                        if (event.keyCode === 9) {
                            if (event.target === popupElement.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS) && !event.shiftKey) {
                                event.preventDefault();
                                popupElement.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).focus();
                            }
                            if (event.target === popupElement.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS) && !event.shiftKey) {
                                event.preventDefault();
                                popupElement.querySelector('.' + QUICK_POPUP_DELETE_EVENT_CLASS).focus();
                            }
                            if (event.target === popupElement.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS) && event.shiftKey) {
                                event.preventDefault();
                                popupElement.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS).focus();
                            }
                            if (event.target === popupElement.querySelector('.' + QUICK_POPUP_DELETE_EVENT_CLASS) && event.shiftKey) {
                                event.preventDefault();
                                popupElement.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS).focus();
                            }
                        }
                        if (event.keyCode === 13) {
                            if (event.target === popupElement.querySelector('.' + QUICK_POPUP_EVENT_DETAILS_CLASS)) {
                                event.target.click();
                            } else if (event.target === popupElement.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS) || event.target === popupElement.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS) || event.target === popupElement.querySelector('.' + QUICK_POPUP_DELETE_EVENT_CLASS)) {
                                event.target.click();
                            } else if (event.target === popupElement.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS)) {
                                popupElement.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS).click();
                                event.preventDefault();
                            }
                        }
                        if (event.keyCode === 27) {
                            this.parent.quickPopup.onClosePopup();
                        }
                    }
                }, {
                    key: 'afterMorePopupOpen',
                    value: function afterMorePopupOpen(event) {
                        var moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
                        moreEventWrapper.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).focus();
                        this.morePopup.refreshPosition();
                    }
                }, {
                    key: 'afterMorePopupClose',
                    value: function afterMorePopupClose(event) {
                        //this.parent.eventBase.focusElement();
                        if (!isNullOrUndefined(this.parent.element.querySelector('.' + MORE_EVENT_WRAPPER_CLASS))) {
                            this.parent.element.querySelector('.' + MORE_EVENT_WRAPPER_CLASS).remove();
                        }
                    }
                }, {
                    key: 'afterQuickPopupClose',
                    value: function afterQuickPopupClose(args) {
                        this.parent.eventBase.focusElement();
                    }
                }, {
                    key: 'quickDialogClass',
                    value: function quickDialogClass(action) {
                        var buttonElement = this.quickDialog.element.querySelector('.' + DIALOG_FOOTER_CONTENT_CLASS).children;
                        var classList = [QUICK_DIALOG_EDIT_EVENT_CLASS, QUICK_DIALOG_EDIT_SERIES_CLASS, QUICK_DIALOG_DELETE_CLASS, QUICK_DIALOG_CANCEL_CLASS, QUICK_DIALOG_ALERT_BTN_CLASS, QUICK_DIALOG_HIDE_BTN_CLASS];
                        removeClass(buttonElement, classList);
                        switch (action) {
                            case 'Recurrence':
                                addClass([buttonElement[0]], QUICK_DIALOG_EDIT_EVENT_CLASS);
                                addClass([buttonElement[1]], QUICK_DIALOG_EDIT_SERIES_CLASS);
                                addClass([buttonElement[1]], 'e-flat');
                                break;
                            case 'Delete':
                                addClass([buttonElement[0]], QUICK_DIALOG_DELETE_CLASS);
                                addClass([buttonElement[1]], QUICK_DIALOG_CANCEL_CLASS);
                                removeClass([buttonElement[1]], 'e-flat');
                                break;
                            case 'Alert':
                                addClass([buttonElement[0]], QUICK_DIALOG_ALERT_BTN_CLASS);
                                addClass([buttonElement[1]], QUICK_DIALOG_HIDE_BTN_CLASS);
                                break;
                        }
                    }
                }, {
                    key: 'documentClick',
                    value: function documentClick(e) {
                        var target = e.event.target;
                        if (!closest(target, '.' + QUICK_POPUP_ROOT_CLASS) && target.getAttribute('data-tooltip-id') === null) {
                            this.quickPopup.close();
                        }
                        if (!closest(target, '.' + MORE_POPUP_WRAPPER_CLASS) && !target.classList.contains(MORE_INDICATOR_CLASS)) {
                            this.morePopup.hide();
                        }
                    }
                }, {
                    key: 'onClosePopup',
                    value: function onClosePopup() {
                        this.quickPopup.close();
                        this.eventPopup.hide();
                        this.isMultipleEventSelect = false;
                        this.parent.eventBase.focusElement();
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener() {
                        this.parent.on(_cellClick, this.cellClick, this);
                        this.parent.on(_eventClick, this.eventClick, this);
                        this.parent.on(documentClick, this.documentClick, this);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.quickPopup.destroy();
                        this.morePopup.destroy();
                        this.eventPopup.destroy();
                        this.quickDialog.destroy();
                        remove(this.quickDialog.element);
                        this.quickDialog.element = null;
                        this.fieldValidator.destroyForm();
                    }
                }]);

                return QuickPopups;
            }();

            EventTooltip = function () {
                function EventTooltip(parent) {
                    _classCallCheck(this, EventTooltip);

                    this.parent = parent;
                    this.l10n = this.parent.localeObj;
                    this.tooltipObj = new Tooltip({
                        content: 'No title',
                        position: 'BottomRight',
                        offsetY: 10,
                        mouseTrail: this.parent.isAdaptive ? false : true,
                        showTipPointer: false,
                        cssClass: EVENT_TOOLTIP_ROOT_CLASS,
                        target: '.' + APPOINTMENT_CLASS,
                        beforeRender: this.onBeforeRender.bind(this),
                        enableRtl: this.parent.enableRtl
                    });
                    this.tooltipObj.appendTo(this.parent.element);
                }

                _createClass(EventTooltip, [{
                    key: 'onBeforeRender',
                    value: function onBeforeRender(args) {
                        if (!isNullOrUndefined(args.target.getAttribute('data-tooltip-id'))) {
                            return;
                        }
                        var record = this.parent.eventBase.getEventByGuid(args.target.getAttribute('data-guid'));
                        var content = '';
                        if (!isNullOrUndefined(this.parent.eventSettings.tooltipTemplate)) {
                            content = this.parent.getEventTooltipTemplate()(record)[0];
                        } else {
                            var globalize = this.parent.globalize;
                            var fields = this.parent.eventFields;
                            var eventStart = new Date('' + record[fields.startTime]);
                            var eventEnd = new Date('' + record[fields.endTime]);
                            eventEnd = eventEnd.getHours() === 0 && eventEnd.getMinutes() === 0 ? new Date(eventEnd.setMilliseconds(-1000)) : eventEnd;
                            var startDate = resetTime(new Date('' + eventStart));
                            var endDate = resetTime(new Date('' + eventEnd));
                            var tooltipSubject = isNullOrUndefined(record[fields.subject]) ? this.parent.eventSettings.fields.subject.default : record[fields.subject];
                            var tooltipLocation = !isNullOrUndefined(record[fields.location]) ? record[fields.location] : '';
                            var startMonthDate = globalize.formatDate(eventStart, { type: 'date', skeleton: 'MMMd' });
                            var endMonthDate = globalize.formatDate(eventEnd, { type: 'date', skeleton: 'MMMd' });
                            var startMonthYearDate = globalize.formatDate(eventStart, { type: 'date', skeleton: 'yMMMd' });
                            var endMonthYearDate = globalize.formatDate(eventEnd, { type: 'date', skeleton: 'yMMMd' });
                            var startTime = globalize.formatDate(eventStart, { type: 'time', skeleton: 'short' });
                            var endTime = globalize.formatDate(eventEnd, { type: 'time', skeleton: 'short' });
                            var tooltipDetails = void 0;
                            if (startDate.getTime() === endDate.getTime()) {
                                tooltipDetails = globalize.formatDate(eventStart, { type: 'date', skeleton: 'long' });
                            } else {
                                tooltipDetails = startDate.getFullYear() === endDate.getFullYear() ? startMonthDate + ' - ' + endMonthYearDate : startMonthYearDate + ' - ' + endMonthYearDate;
                            }
                            var tooltipTime = record[fields.isAllDay] ? this.l10n.getConstant('allDay') : startTime + ' - ' + endTime;
                            content = '<div class="e-subject">' + tooltipSubject + '</div>' + '<div class="e-location">' + tooltipLocation + '</div>' + '<div class="e-details">' + tooltipDetails + '</div>' + '<div class="e-all-day">' + tooltipTime + '</div>';
                        }
                        this.tooltipObj.content = content;
                    }
                }, {
                    key: 'close',
                    value: function close() {
                        this.tooltipObj.close();
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.tooltipObj.destroy();
                        this.tooltipObj = null;
                    }
                }]);

                return EventTooltip;
            }();

            __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            HEADER = 'e-editor';
            INPUTWARAPPER = 'e-input-wrapper';
            INPUTWARAPPERSIDE = 'e-input-wrapper-side';
            REPEATELEMENT = 'e-repeat-element';
            REPEATINTERVAL = 'e-repeat-interval';
            INTERVALCLASS = 'e-interval';
            DAYWRAPPER = 'e-days';
            WEEKWRAPPER = 'e-non-week';
            WEEKPOSITION = 'e-week-position';
            YEAREXPANDERWRAPPER = 'e-year-expander';
            YEAREXPANDERELEMENT = 'e-year-expander-element';
            MONETHEXPANDERWRAPPER = 'e-month-expander';
            MONTHEXPANDERELEMENT = 'e-month-expander-element';
            MONTHEXPANDERCHECKBOXWRAPPER = 'e-month-expander-checkbox-wrapper';
            FORMLEFT = 'e-form-left';
            FORMRIGHT = 'e-form-right';
            MONTHDAYWRAPPER = 'e-month-day';
            MONTHEXPANNDERELEM = 'e-month-expander-wrapper';
            MONTHPOS = 'e-month-pos';
            MONTHWEEK = 'e-month-week';
            ENDON = 'e-end-on';
            MONTHEXPANDERLABEL = 'e-month-expander-label';
            WEEKEXPANDERLABEL = 'e-week-expander-label';
            ENDONLABEL = 'e-end-on-label';
            ENDONLEFT = 'e-end-on-left';
            MONTHDAYELEMENT = 'e-monthday-element';
            ENDONELEMENT = 'e-end-on-element';
            ENDONDATE = 'e-end-on-date';
            UNTILDATE = 'e-until-date';
            ENDONCOUNTWRAPPER = 'e-end-on-count';
            ENDONCOUNT = 'e-recurrence-count';
            HIDEWRAPPER = 'e-hide-recurrence-element';
            RTLCLASS = 'e-rtl';
            PRIMARY = 'e-primary';
            ACTIVE = 'e-active';
            RECURRENCETABLE = 'e-recurrence-table';
            REPEATCONTENT = 'e-repeat-content';
            NONE = 'none';
            DAILY = 'daily';
            WEEKLY = 'weekly';
            MONTHLY = 'monthly';
            YEARLY = 'yearly';
            NEVER = 'never';
            UNTIL$1 = 'until';
            COUNT = 'count';
            TEXTFIELD = 'text';
            VALUEFIELD = 'value';
            LAST = 'last';
            REPEAT$1 = 'repeat';
            REPEATEVERY = 'repeatEvery';
            ON$1 = 'on';
            END = 'end';
            RADIOLABEL = 'onDay';
            RULEUNTIL = 'UNTIL';
            RULEBYDAY = 'BYDAY';
            RULEBYMONTHDAY = 'BYMONTHDAY';
            RULEBYMONTH = 'BYMONTH';
            RULEINTERVAL = 'INTERVAL';
            RULECOUNT = 'COUNT';
            RULESETPOS = 'BYSETPOS';
            RULEFREQ = 'FREQ';
            RULEDAILY = 'DAILY';
            RULEWEEKLY = 'WEEKLY';
            RULEMONTHLY = 'MONTHLY';
            RULEYEARLY = 'YEARLY';
            RULESUNDAY = 'SU';
            RULEMONDAY = 'MO';
            RULETUESDAY = 'TU';
            RULEWEDNESDAY = 'WE';
            RULETHURSDAY = 'TH';
            RULEFRIDAY = 'FR';
            RULESATURDAY = 'SA';
            KEYSUNDAY = 'sun';
            KEYMONDAY = 'mon';
            KEYTUESDAY = 'tue';
            KEYWEDNESDAY = 'wed';
            KEYTHURSDAY = 'thu';
            KEYFRIDAY = 'fri';
            KEYSATURDAY = 'sat';
            EQUAL = '=';
            SEMICOLON = ';';
            COMMA = ',';
            FIRST = 'first';
            SECOND = 'second';
            THIRD = 'third';
            FOURTH = 'fourth';
            contentType = {
                none: '',
                daily: 'days',
                weekly: 'weeks',
                monthly: 'months',
                yearly: 'years'
            };
            valueData = {
                'sun': RULESUNDAY,
                'mon': RULEMONDAY,
                'tue': RULETUESDAY,
                'wed': RULEWEDNESDAY,
                'thu': RULETHURSDAY,
                'fri': RULEFRIDAY,
                'sat': RULESATURDAY
            };
            neverClassList = [DAYWRAPPER, WEEKWRAPPER, ENDON, INTERVALCLASS, YEAREXPANDERWRAPPER, MONETHEXPANDERWRAPPER];
            weekClassList = [WEEKWRAPPER];
            monthClassList = [DAYWRAPPER, YEAREXPANDERWRAPPER];
            yearClassList = [DAYWRAPPER];
            dailyClassList = [DAYWRAPPER, WEEKWRAPPER, YEAREXPANDERWRAPPER, MONETHEXPANDERWRAPPER];
            noEndClassList = [ENDONDATE, ENDONCOUNTWRAPPER];
            endOnCountClassList = [ENDONDATE];
            endOnDateClassList = [ENDONCOUNTWRAPPER];

            _export('RecurrenceEditor', RecurrenceEditor = function (_Component) {
                _inherits(RecurrenceEditor, _Component);

                /**
                 * Constructor for creating the widget
                 * @param  {object} options?
                 */
                function RecurrenceEditor(options, element) {
                    _classCallCheck(this, RecurrenceEditor);

                    var _this5 = _possibleConstructorReturn(this, (RecurrenceEditor.__proto__ || Object.getPrototypeOf(RecurrenceEditor)).call(this, options, element));

                    _this5.defaultLocale = {
                        none: 'None',
                        daily: 'Daily',
                        weekly: 'Weekly',
                        monthly: 'Monthly',
                        month: 'Month',
                        yearly: 'Yearly',
                        never: 'Never',
                        until: 'Until',
                        count: 'Count',
                        first: 'First',
                        second: 'Second',
                        third: 'Third',
                        fourth: 'Fourth',
                        last: 'Last',
                        repeat: 'Repeat',
                        repeatEvery: 'Repeat every',
                        on: 'Repeat On',
                        end: 'End',
                        onDay: 'Day',
                        days: 'Day(s)',
                        weeks: 'Week(s)',
                        months: 'Month(s)',
                        years: 'Year(s)',
                        every: 'every',
                        summaryTimes: 'time(s)',
                        summaryOn: 'on',
                        summaryUntil: 'until',
                        summaryRepeat: 'Repeats',
                        summaryDay: 'day(s)',
                        summaryWeek: 'week(s)',
                        summaryMonth: 'month(s)',
                        summaryYear: 'year(s)'
                    };
                    _this5.renderStatus = false;
                    _this5.destroyStatus = false;
                    _this5.dayButtons = [];
                    _this5.monthButtons = [];
                    return _this5;
                }

                _createClass(RecurrenceEditor, [{
                    key: 'startState',
                    value: function startState(freq, endOn, startDate) {
                        this.showFormElement();
                        this.updateForm(freq);
                        this.freshOnEndForm();
                        this.updateEndOnForm(endOn);
                        this.selectMonthDay(startDate);
                        this.updateUntilDate(startDate);
                        this.onMonthDay.setProperties({ checked: true });
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.localeObj = new L10n(this.getModuleName(), this.defaultLocale, this.locale);
                        // pre render code snippets
                    }
                }, {
                    key: 'applyCustomClass',
                    value: function applyCustomClass(cssClass) {
                        if (cssClass) {
                            this.element.classList.add(cssClass);
                        }
                    }
                }, {
                    key: 'initialize',
                    value: function initialize() {
                        this.destroyStatus = false;
                        this.renderComponent();
                        this.startState(this.repeatType.value.toString().toUpperCase(), NEVER, this.startDate);
                        this.updateForm(this.repeatType.value.toString());
                        this.applyCustomClass(this.cssClass);
                    }
                }, {
                    key: 'triggerChangeEvent',
                    value: function triggerChangeEvent() {
                        if (this.renderStatus) {
                            var value = this.getRecurrenceRule();
                            this.trigger('change', { value: value });
                            this.setProperties({ value: value }, false);
                        }
                    }
                }, {
                    key: 'resetDayButton',
                    value: function resetDayButton() {
                        var elements = this.element.querySelectorAll('.' + DAYWRAPPER + ' button');
                        for (var index = 0; index < elements.length; index++) {
                            elements[index].classList.remove(ACTIVE);
                            elements[index].classList.remove(PRIMARY);
                        }
                    }
                }, {
                    key: 'daySelection',
                    value: function daySelection(dayIndex) {
                        this.resetDayButton();
                        var days = [0, 1, 2, 3, 4, 5, 6];
                        this.rotateArray(days, this.firstDayOfWeek);
                        var element = this.element.querySelector('.' + DAYWRAPPER + ' button[data-index="' + days.indexOf(dayIndex) + '"]');
                        if (element) {
                            element.classList.add(ACTIVE);
                            element.classList.add(PRIMARY);
                        }
                    }
                }, {
                    key: 'rtlClass',
                    value: function rtlClass(status) {
                        if (status) {
                            this.element.classList.add(RTLCLASS);
                        } else {
                            this.element.classList.remove(RTLCLASS);
                        }
                    }
                }, {
                    key: 'updateUntilDate',
                    value: function updateUntilDate(date) {
                        var tempDate = new Date(date.getTime());
                        tempDate.setDate(tempDate.getDate() + 60);
                        this.untilDateObj.setProperties({ value: tempDate });
                    }
                }, {
                    key: 'selectMonthDay',
                    value: function selectMonthDay(date) {
                        var weekday = [KEYSUNDAY, KEYMONDAY, KEYTUESDAY, KEYWEDNESDAY, KEYTHURSDAY, KEYFRIDAY, KEYSATURDAY];
                        this.monthDate.setProperties({ value: date.getDate() });
                        this.monthWeekDays.setProperties({ value: valueData[weekday[date.getDay()]] });
                        this.monthValue.setProperties({ value: '' + (date.getMonth() + 1) });
                        this.monthWeekPos.setProperties({ value: this.getDayPosition(date) });
                        this.daySelection(date.getDay());
                    }
                }, {
                    key: 'updateForm',
                    value: function updateForm(state) {
                        var btn = void 0;
                        this.repeatType.setProperties({ value: state });
                        switch (state) {
                            case NONE:
                                for (var index = 0; index < neverClassList.length; index++) {
                                    btn = this.element.querySelector('.' + neverClassList[index]);
                                    btn.classList.add(HIDEWRAPPER);
                                }
                                break;
                            case WEEKLY:
                                for (var _index = 0; _index < weekClassList.length; _index++) {
                                    btn = this.element.querySelector('.' + weekClassList[_index]);
                                    btn.classList.add(HIDEWRAPPER);
                                }
                                break;
                            case MONTHLY:
                                for (var _index2 = 0; _index2 < monthClassList.length; _index2++) {
                                    btn = this.element.querySelector('.' + monthClassList[_index2]);
                                    btn.classList.add(HIDEWRAPPER);
                                }
                                break;
                            case YEARLY:
                                for (var _index3 = 0; _index3 < yearClassList.length; _index3++) {
                                    btn = this.element.querySelector('.' + yearClassList[_index3]);
                                    btn.classList.add(HIDEWRAPPER);
                                }
                                break;
                            case DAILY:
                                for (var _index4 = 0; _index4 < dailyClassList.length; _index4++) {
                                    btn = this.element.querySelector('.' + dailyClassList[_index4]);
                                    btn.classList.add(HIDEWRAPPER);
                                }
                                break;
                        }
                    }
                }, {
                    key: 'updateEndOnForm',
                    value: function updateEndOnForm(state) {
                        var element = void 0;
                        this.endType.setProperties({ value: state });
                        switch (state) {
                            case NEVER:
                                for (var index = 0; index < noEndClassList.length; index++) {
                                    element = this.element.querySelector('.' + noEndClassList[index]);
                                    element.classList.add(HIDEWRAPPER);
                                }
                                break;
                            case UNTIL$1:
                                for (var _index5 = 0; _index5 < endOnDateClassList.length; _index5++) {
                                    element = this.element.querySelector('.' + endOnDateClassList[_index5]);
                                    element.classList.add(HIDEWRAPPER);
                                }
                                break;
                            case COUNT:
                                for (var _index6 = 0; _index6 < endOnCountClassList.length; _index6++) {
                                    element = this.element.querySelector('.' + endOnCountClassList[_index6]);
                                    element.classList.add(HIDEWRAPPER);
                                }
                                break;
                        }
                    }
                }, {
                    key: 'freshOnEndForm',
                    value: function freshOnEndForm() {
                        var btn = void 0;
                        for (var index = 0; index < noEndClassList.length; index++) {
                            btn = this.element.querySelector('.' + noEndClassList[index]);
                            if (btn) {
                                btn.classList.remove(HIDEWRAPPER);
                            }
                        }
                    }
                }, {
                    key: 'showFormElement',
                    value: function showFormElement() {
                        var btn = void 0;
                        var elements = this.element.querySelectorAll('.' + HIDEWRAPPER);
                        for (var index = 0; index < neverClassList.length; index++) {
                            btn = this.element.querySelector('.' + neverClassList[index]);
                            btn.classList.remove(HIDEWRAPPER);
                        }
                    }
                }, {
                    key: 'renderDropdowns',
                    value: function renderDropdowns() {
                        var self = this;
                        this.repeatType = new DropDownList({
                            //set the data to dataSource property
                            dataSource: this.getRepeatData(),
                            floatLabelType: 'Always',
                            enableRtl: this.enableRtl,
                            index: this.selectedType,
                            fields: {
                                text: TEXTFIELD,
                                value: VALUEFIELD
                            },
                            placeholder: this.localeObj.getConstant(REPEAT$1),
                            change: function change(args) {
                                if (self.destroyStatus) {
                                    return;
                                }
                                self.setProperties({ selectedType: args.value }, false);
                                self.element.querySelector('.' + REPEATCONTENT).innerHTML = self.localeObj.getConstant(contentType[args.value]);
                                self.showFormElement();
                                self.updateForm(args.value);
                                self.resetFormValues();
                                self.triggerChangeEvent();
                            }
                        });
                        // set placeholder to DropDownList input element
                        this.repeatType.appendTo(this.element.querySelector('.' + REPEATELEMENT));
                        this.endType = new DropDownList({
                            dataSource: this.getEndData(),
                            popupWidth: this.getPopupWidth(),
                            enableRtl: this.enableRtl,
                            index: 1,
                            fields: {
                                text: TEXTFIELD,
                                value: VALUEFIELD
                            },
                            change: function change(args) {
                                if (self.destroyStatus) {
                                    return;
                                }
                                self.freshOnEndForm();
                                self.updateEndOnForm(args.value);
                                self.resetFormValues();
                                self.triggerChangeEvent();
                            }
                        });
                        this.endType.appendTo(this.element.querySelector('.' + ENDONELEMENT));
                        this.monthWeekPos = new DropDownList({
                            dataSource: this.getMonthPosData(),
                            popupWidth: this.getPopupWidth(),
                            enableRtl: this.enableRtl,
                            fields: {
                                text: TEXTFIELD,
                                value: VALUEFIELD
                            },
                            index: 1,
                            change: function change(args) {
                                if (self.destroyStatus) {
                                    return;
                                }
                                self.onWeekDay.setProperties({ checked: true });
                                self.resetFormValues();
                                self.triggerChangeEvent();
                            }
                        });
                        this.monthDayRendering();
                        // render initialized DropDownList
                    }
                }, {
                    key: 'setDefaultValue',
                    value: function setDefaultValue() {
                        var formelement = [].slice.call(this.element.querySelectorAll('.e-control .e-numerictextbox'));
                        for (var index = 0, len = formelement.length; index < len; index++) {
                            var element = formelement[index];
                            var instance = element.ej2_instances[0];
                            if (instance.element.classList.contains(REPEATINTERVAL)) {
                                instance.value = 1;
                                instance.dataBind();
                            } else if (instance.element.classList.contains(ENDONCOUNT)) {
                                instance.value = 10;
                                instance.dataBind();
                            }
                        }
                    }
                }, {
                    key: 'resetFormValues',
                    value: function resetFormValues() {
                        var recurreneElement = [].slice.call(this.element.querySelectorAll('.e-control [type="text"]'));
                        for (var index = 0, len = recurreneElement.length; index < len; index++) {
                            var element = recurreneElement[index];
                            if (element.classList.contains('e-datepicker')) {
                                var instance = element.ej2_instances[0];
                                if (instance.value) {
                                    instance.value = instance.value;
                                    instance.dataBind();
                                } else {
                                    this.updateUntilDate(this.startDate);
                                }
                            } else if (element.classList.contains('e-dropdownlist')) {
                                var _instance = element.ej2_instances[0];
                                _instance.index = _instance.index || 0;
                                _instance.dataBind();
                            } else if (element.classList.contains('e-numerictextbox')) {
                                var _instance2 = element.ej2_instances[0];
                                var value = void 0;
                                if (_instance2.element.classList.contains(REPEATINTERVAL)) {
                                    value = 1;
                                } else if (_instance2.element.classList.contains(ENDONCOUNT)) {
                                    value = 10;
                                } else {
                                    value = this.startDate.getDate();
                                }
                                _instance2.value = _instance2.value || value;
                                _instance2.dataBind();
                            }
                        }
                    }
                }, {
                    key: 'getPopupWidth',
                    value: function getPopupWidth() {
                        return Browser.isDevice ? '100%' : 'auto';
                    }
                }, {
                    key: 'monthDayRendering',
                    value: function monthDayRendering() {
                        var self = this;
                        this.monthWeekPos.appendTo(this.element.querySelector('.' + MONTHPOS));
                        //dayData
                        this.monthWeekDays = new DropDownList({
                            //set the data to dataSource property
                            dataSource: this.getDayData('wide'),
                            popupWidth: this.getPopupWidth(),
                            enableRtl: this.enableRtl,
                            fields: {
                                text: TEXTFIELD,
                                value: VALUEFIELD
                            },
                            index: 1,
                            change: function change(args) {
                                if (self.destroyStatus) {
                                    return;
                                }
                                self.onWeekDay.setProperties({ checked: true });
                                self.resetFormValues();
                                self.triggerChangeEvent();
                            }
                        });
                        // render initialized DropDownList
                        this.monthWeekDays.appendTo(this.element.querySelector('.' + MONTHWEEK));
                        //dayData
                        this.monthValue = new DropDownList({
                            //set the data to dataSource property
                            dataSource: this.getMonthData(),
                            fields: {
                                text: TEXTFIELD,
                                value: VALUEFIELD
                            },
                            floatLabelType: 'Always',
                            enableRtl: this.enableRtl,
                            index: 7,
                            change: function change(args) {
                                if (self.destroyStatus) {
                                    return;
                                }
                                self.resetFormValues();
                                self.triggerChangeEvent();
                            }
                        });
                        // render initialized DropDownList
                        this.monthValue.appendTo(this.element.querySelector('.' + YEAREXPANDERELEMENT));
                    }
                }, {
                    key: 'renderDatePickers',
                    value: function renderDatePickers() {
                        var self = this;
                        this.untilDateObj = new DatePicker({
                            enableRtl: this.enableRtl,
                            min: this.minDate,
                            max: this.maxDate,
                            change: function change(args) {
                                if (args.value) {
                                    self.triggerChangeEvent();
                                }
                            }
                        });
                        this.untilDateObj.appendTo(this.element.querySelector('.' + UNTILDATE));
                    }
                }, {
                    key: 'dayButtonRender',
                    value: function dayButtonRender() {
                        var _this6 = this;

                        var btns = this.element.querySelectorAll('.' + DAYWRAPPER + ' button');
                        var btn = void 0;
                        var self = this;
                        for (var index = 0; index < btns.length; index++) {
                            btn = btns[index];
                            var button = new Button({
                                isToggle: true,
                                enableRtl: this.enableRtl
                            });
                            button.appendTo(btn);
                            this.dayButtons.push(button);
                            EventHandler.add(btn, 'click', function (args) {
                                var btns = _this6.element.querySelectorAll('.' + DAYWRAPPER + ' button.' + PRIMARY);
                                var element = args.target;
                                if (!element.classList.contains(PRIMARY)) {
                                    element.classList.add(PRIMARY);
                                    self.triggerChangeEvent();
                                } else if (btns.length > 1) {
                                    element.classList.remove(PRIMARY);
                                    self.triggerChangeEvent();
                                }
                            });
                        }
                    }
                }, {
                    key: 'radioButtonRender',
                    value: function radioButtonRender() {
                        var self = this;
                        this.onMonthDay = new RadioButton({
                            label: this.localeObj.getConstant(RADIOLABEL),
                            enableRtl: this.enableRtl,
                            name: 'monthType',
                            value: 'day',
                            change: function change(args) {
                                self.resetFormValues();
                                self.triggerChangeEvent();
                            }
                        });
                        this.onMonthDay.appendTo(this.element.querySelector('.' + MONTHEXPANDERELEMENT));
                        this.monthButtons.push(this.onMonthDay);
                        this.onWeekDay = new RadioButton({
                            label: '',
                            name: 'monthType',
                            enableRtl: this.enableRtl,
                            value: 'daypos',
                            change: function change(args) {
                                self.resetFormValues();
                                self.triggerChangeEvent();
                            }
                        });
                        this.onWeekDay.appendTo(this.element.querySelector('.' + MONTHEXPANNDERELEM));
                        this.monthButtons.push(this.onWeekDay);
                    }
                }, {
                    key: 'numericTextboxRender',
                    value: function numericTextboxRender() {
                        var self = this;
                        this.recurrenceCount = new NumericTextBox({
                            value: 10,
                            format: '#',
                            enableRtl: this.enableRtl,
                            floatLabelType: 'Always',
                            min: 1,
                            change: function change(args) {
                                self.triggerChangeEvent();
                            }
                        });
                        this.recurrenceCount.appendTo(this.element.querySelector('.' + ENDONCOUNT));
                        this.monthDate = new NumericTextBox({
                            value: 1,
                            format: '#',
                            enableRtl: this.enableRtl,
                            min: 1,
                            max: 31,
                            change: function change(args) {
                                self.onMonthDay.setProperties({ checked: true });
                                self.triggerChangeEvent();
                            }
                        });
                        this.monthDate.appendTo(this.element.querySelector('.' + MONTHDAYWRAPPER));
                        this.repeatInterval = new NumericTextBox({
                            value: 1,
                            format: '#',
                            min: 1,
                            enableRtl: this.enableRtl,
                            floatLabelType: 'Always',
                            placeholder: this.localeObj.getConstant(REPEATEVERY),
                            change: function change(args) {
                                self.triggerChangeEvent();
                            }
                        });
                        this.repeatInterval.appendTo(this.element.querySelector('.' + REPEATINTERVAL));
                    }
                }, {
                    key: 'renderComponent',
                    value: function renderComponent() {
                        this.setTemplate();
                        this.renderDropdowns();
                        this.renderDatePickers();
                        this.dayButtonRender();
                        this.radioButtonRender();
                        this.numericTextboxRender();
                    }
                }, {
                    key: 'rotateArray',
                    value: function rotateArray(data, count) {
                        var temp = void 0;
                        for (var index = 0; index < count; index++) {
                            temp = data.shift();
                            data.push(temp);
                        }
                    }
                }, {
                    key: 'getEndData',
                    value: function getEndData() {
                        var endData = [NEVER, UNTIL$1, COUNT];
                        var self = this;
                        var dataSource = [];
                        endData.forEach(function (data) {
                            dataSource.push({ text: self.localeObj.getConstant(data), value: data });
                        });
                        return dataSource;
                    }
                }, {
                    key: 'getDayPosition',
                    value: function getDayPosition(date) {
                        var temp = new Date(date.getTime());
                        var endDate = new Date(date.getTime());
                        var day = date.getDay();
                        var positionCollection = [];
                        temp.setDate(1);
                        endDate.setDate(1);
                        endDate.setMonth(endDate.getMonth() + 1);
                        while (temp < endDate) {
                            if (temp.getDay() === day) {
                                positionCollection.push(temp.getTime());
                            }
                            temp.setDate(temp.getDate() + 1);
                        }
                        if (positionCollection.indexOf(date.getTime()) === positionCollection.length - 1) {
                            return -1;
                        }
                        return positionCollection.indexOf(date.getTime()) + 1;
                    }
                }, {
                    key: 'getRepeatData',
                    value: function getRepeatData() {
                        var data = [];
                        var self = this;
                        this.frequencies.forEach(function (element) {
                            var textValue = element === NONE ? NEVER : element;
                            data.push({ text: self.localeObj.getConstant(textValue), value: element });
                        });
                        return data;
                    }
                }, {
                    key: 'getMonthPosData',
                    value: function getMonthPosData() {
                        var monthpos = [FIRST, SECOND, THIRD, FOURTH, LAST];
                        var monthposValue = {
                            first: 1,
                            second: 2,
                            third: 3,
                            fourth: 4,
                            last: -1
                        };
                        var self = this;
                        var dataSource = [];
                        monthpos.forEach(function (data) {
                            dataSource.push({ text: self.localeObj.getConstant(data), value: monthposValue[data] });
                        });
                        return dataSource;
                    }
                }, {
                    key: 'getDayData',
                    value: function getDayData(format) {
                        var weekday = [KEYSUNDAY, KEYMONDAY, KEYTUESDAY, KEYWEDNESDAY, KEYTHURSDAY, KEYFRIDAY, KEYSATURDAY];
                        var dayData = [];
                        var cldrObj = void 0;
                        var temp = format === 'narrow' ? 'narrow' : 'wide';
                        this.rotateArray(weekday, this.firstDayOfWeek);
                        if (this.locale === 'en' || this.locale === 'en-US') {
                            cldrObj = getValue('days.stand-alone.' + temp, getDefaultDateObject());
                        } else {
                            cldrObj = getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.days.stand-alone.' + temp, cldrData);
                        }
                        var _iteratorNormalCompletion16 = true;
                        var _didIteratorError16 = false;
                        var _iteratorError16 = undefined;

                        try {
                            for (var _iterator16 = weekday[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                var obj = _step16.value;

                                dayData.push({ text: getValue(obj, cldrObj), value: valueData[obj] });
                            }
                        } catch (err) {
                            _didIteratorError16 = true;
                            _iteratorError16 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion16 && _iterator16.return) {
                                    _iterator16.return();
                                }
                            } finally {
                                if (_didIteratorError16) {
                                    throw _iteratorError16;
                                }
                            }
                        }

                        return dayData;
                    }
                }, {
                    key: 'getMonthData',
                    value: function getMonthData() {
                        var monthData = [];
                        var cldrObj = void 0;
                        if (this.locale === 'en' || this.locale === 'en-US') {
                            cldrObj = getValue('months.stand-alone.wide', getDefaultDateObject());
                        } else {
                            cldrObj = getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.months.stand-alone.wide', cldrData);
                        }
                        var _iteratorNormalCompletion17 = true;
                        var _didIteratorError17 = false;
                        var _iteratorError17 = undefined;

                        try {
                            for (var _iterator17 = Object.keys(cldrObj)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                var obj = _step17.value;

                                monthData.push({
                                    text: getValue(obj, cldrObj),
                                    value: obj
                                });
                            }
                        } catch (err) {
                            _didIteratorError17 = true;
                            _iteratorError17 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion17 && _iterator17.return) {
                                    _iterator17.return();
                                }
                            } finally {
                                if (_didIteratorError17) {
                                    throw _iteratorError17;
                                }
                            }
                        }

                        return monthData;
                    }
                }, {
                    key: 'setTemplate',
                    value: function setTemplate() {
                        var dayData = this.getDayData('narrow');
                        this.element.innerHTML = '<div class="' + HEADER + '">' + '<div class="' + INPUTWARAPPER + ' ' + FORMLEFT + '">' + '<input type="text" tabindex="0" class="' + REPEATELEMENT + '" />' + '</div><div class="' + INPUTWARAPPER + ' ' + INTERVALCLASS + ' ' + FORMRIGHT + '"><table  class="' + RECURRENCETABLE + '"><tr>' + '<td><input type="text" tabindex="0" class="' + REPEATINTERVAL + '" /></td>' + '<td><span class="' + REPEATCONTENT + '"></span></td>' + '</tr></table></div><div class="' + INPUTWARAPPERSIDE + ' ' + DAYWRAPPER + ' ' + FORMLEFT + '">' + '<div class=' + WEEKEXPANDERLABEL + '>' + this.localeObj.getConstant(ON$1) + '</div>' + '<button type="button" data-index="0">' + dayData[0].text + '</button>' + '<button type="button" data-index="1">' + dayData[1].text + '</button>' + '<button type="button" data-index="2">' + dayData[2].text + '</button>' + '<button type="button" data-index="3">' + dayData[3].text + '</button>' + '<button type="button" data-index="4">' + dayData[4].text + '</button>' + '<button type="button" data-index="5">' + dayData[5].text + '</button>' + '<button type="button" data-index="6">' + dayData[6].text + '</button></div>' + '<div class="' + INPUTWARAPPERSIDE + ' ' + WEEKWRAPPER + ' ' + FORMLEFT + '">' + '<div class=' + MONTHEXPANDERLABEL + '>' + this.localeObj.getConstant(ON$1) + '</div>' + '<div class="' + YEAREXPANDERWRAPPER + '">' + '<input class="' + YEAREXPANDERELEMENT + '" type="text" tabindex="0" />' + '</div>' + '<div class="' + MONETHEXPANDERWRAPPER + '">' + '<table class="' + RECURRENCETABLE + '"><tr><td>' + '<div class="' + INPUTWARAPPER + ' ' + MONTHEXPANDERCHECKBOXWRAPPER + '">' + '<input class="' + MONTHEXPANDERELEMENT + '" type="radio">' + '</div></td>' + '<td colspan="2"><div class="' + INPUTWARAPPER + ' ' + MONTHDAYELEMENT + '">' + '<input type="text" tabindex="0" class="' + MONTHDAYWRAPPER + '" />' + '</div></td></tr>' + '<tr><td>' + '<div class="' + INPUTWARAPPER + '" style="min-width: 30px;">' + '<input class="' + MONTHEXPANNDERELEM + '" type="radio">' + '</div></td>' + '<td><div class="' + INPUTWARAPPER + ' ' + WEEKPOSITION + '" >' + '<input type="text" tabindex="0" class="' + MONTHPOS + '" />' + '</div></td>' + '<td><div class="' + INPUTWARAPPER + '" >' + '<input type="text" tabindex="0" class="' + MONTHWEEK + '" />' + '</div></td></tr></table>' + '</div></div>' + '<div class="' + INPUTWARAPPERSIDE + ' ' + ENDON + ' ' + FORMRIGHT + '">' + '<div class=' + ENDONLABEL + '>' + this.localeObj.getConstant(END) + '</div>' + '<div class="' + INPUTWARAPPER + ' ' + ENDONLEFT + '">' + '<input type="text" tabindex="0" class="' + ENDONELEMENT + '" />' + '</div>' + '<div class="' + INPUTWARAPPER + ' ' + ENDONDATE + '" >' + '<input type="text" tabindex="0" class="' + UNTILDATE + '" />' + '</div>' + '<div class="' + INPUTWARAPPER + ' ' + ENDONCOUNTWRAPPER + '">' + '<input type="text" tabindex="0" class="' + ENDONCOUNT + '" />' + '</div></div>' + '</div></div>';
                    }
                }, {
                    key: 'getSelectedDaysData',
                    value: function getSelectedDaysData() {
                        var ruleData = RULEBYDAY + EQUAL;
                        var elements = this.element.querySelectorAll('.' + DAYWRAPPER + ' button.' + PRIMARY);
                        var weekday = [RULESUNDAY, RULEMONDAY, RULETUESDAY, RULEWEDNESDAY, RULETHURSDAY, RULEFRIDAY, RULESATURDAY];
                        this.rotateArray(weekday, this.firstDayOfWeek);
                        for (var index = 0; index < elements.length; index++) {
                            ruleData += weekday[parseInt(elements[index].getAttribute('data-index'), 10)] + (index === elements.length - 1 ? '' : COMMA);
                        }
                        return ruleData + SEMICOLON;
                    }
                }, {
                    key: 'getSelectedMonthData',
                    value: function getSelectedMonthData() {
                        var ruleData = void 0;
                        if (this.onWeekDay.checked) {
                            ruleData = RULEBYDAY + EQUAL + this.monthWeekDays.value + SEMICOLON + RULESETPOS + EQUAL + this.monthWeekPos.value + SEMICOLON;
                        } else {
                            ruleData = RULEBYMONTHDAY + EQUAL + this.monthDate.value + SEMICOLON;
                        }
                        return ruleData;
                    }
                }, {
                    key: 'getIntervalData',
                    value: function getIntervalData() {
                        return RULEINTERVAL + EQUAL + this.repeatInterval.value + SEMICOLON;
                    }
                }, {
                    key: 'getEndOnCount',
                    value: function getEndOnCount() {
                        return RULECOUNT + EQUAL + this.recurrenceCount.value + SEMICOLON;
                    }
                }, {
                    key: 'getYearMonthRuleData',
                    value: function getYearMonthRuleData() {
                        return RULEBYMONTH + EQUAL + this.monthValue.value + SEMICOLON;
                    }
                }, {
                    key: 'updateWeekButton',
                    value: function updateWeekButton(keys) {
                        var weekday = [RULESUNDAY, RULEMONDAY, RULETUESDAY, RULEWEDNESDAY, RULETHURSDAY, RULEFRIDAY, RULESATURDAY];
                        this.rotateArray(weekday, this.firstDayOfWeek);
                        var index = void 0;
                        var _iteratorNormalCompletion18 = true;
                        var _didIteratorError18 = false;
                        var _iteratorError18 = undefined;

                        try {
                            for (var _iterator18 = this.dayButtons[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                var obj = _step18.value;

                                index = parseInt(obj.element.getAttribute('data-index'), 10);
                                if (keys.indexOf(weekday[index]) !== -1) {
                                    obj.setProperties({ isPrimary: true });
                                } else {
                                    obj.setProperties({ isPrimary: false });
                                }
                            }
                        } catch (err) {
                            _didIteratorError18 = true;
                            _iteratorError18 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion18 && _iterator18.return) {
                                    _iterator18.return();
                                }
                            } finally {
                                if (_didIteratorError18) {
                                    throw _iteratorError18;
                                }
                            }
                        }
                    }
                }, {
                    key: 'updateMonthUI',
                    value: function updateMonthUI() {
                        if (this.ruleObject.monthDay.length) {
                            this.monthDate.setProperties({ value: this.ruleObject.monthDay[0] });
                            this.onMonthDay.setProperties({ checked: true });
                        } else {
                            this.onWeekDay.setProperties({ checked: true });
                            this.monthWeekPos.setProperties({ value: this.ruleObject.setPosition });
                            var _iteratorNormalCompletion19 = true;
                            var _didIteratorError19 = false;
                            var _iteratorError19 = undefined;

                            try {
                                for (var _iterator19 = Object.keys(valueData)[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                    var key = _step19.value;

                                    if (valueData[key] === this.ruleObject.day[0]) {
                                        this.monthWeekDays.setProperties({ value: this.ruleObject.day[0] });
                                        break;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError19 = true;
                                _iteratorError19 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion19 && _iterator19.return) {
                                        _iterator19.return();
                                    }
                                } finally {
                                    if (_didIteratorError19) {
                                        throw _iteratorError19;
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'updateUI',
                    value: function updateUI(repeat, state) {
                        this.repeatInterval.setProperties({ value: this.ruleObject.interval });
                        switch (state) {
                            case UNTIL$1:
                                this.untilDateObj.setProperties({ value: this.ruleObject.until });
                                break;
                            case COUNT:
                                this.recurrenceCount.setProperties({ value: this.ruleObject.count });
                                break;
                        }
                        switch (repeat) {
                            case WEEKLY:
                                this.updateWeekButton(this.ruleObject.day);
                                break;
                            case YEARLY:
                                this.monthValue.setProperties({ index: this.ruleObject.month[0] - 1 });
                                this.updateMonthUI();
                                break;
                            case MONTHLY:
                                this.updateMonthUI();
                                break;
                        }
                    }
                }, {
                    key: 'getUntilData',
                    value: function getUntilData() {
                        var tempStr = getRecurrenceStringFromDate(this.untilDateObj.value);
                        return RULEUNTIL + EQUAL + tempStr + SEMICOLON;
                    }
                }, {
                    key: 'destroyComponents',
                    value: function destroyComponents() {
                        this.recurrenceCount.destroy();
                        this.monthDate.destroy();
                        this.repeatInterval.destroy();
                        this.untilDateObj.destroy();
                        this.repeatType.destroy();
                        this.endType.destroy();
                        this.monthWeekPos.destroy();
                        this.monthWeekDays.destroy();
                        this.monthValue.destroy();
                        this.dayButtons.forEach(function (element) {
                            element.destroy();
                        });
                        this.monthButtons.forEach(function (element) {
                            element.destroy();
                        });
                    }
                }, {
                    key: 'resetFields',
                    value: function resetFields() {
                        this.startState(NONE, NEVER, this.startDate);
                        this.setDefaultValue();
                    }
                }, {
                    key: 'getRuleSummary',
                    value: function getRuleSummary() {
                        var rule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getRecurrenceRule();

                        return generateSummary(rule, this.localeObj, this.locale);
                    }
                }, {
                    key: 'getRecurrenceDates',
                    value: function getRecurrenceDates(startDate, rule, excludeDate, maximumCount) {
                        var viewDate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.startDate;

                        return generate(startDate, rule, excludeDate, this.firstDayOfWeek, maximumCount, viewDate);
                    }
                }, {
                    key: 'getRecurrenceRule',
                    value: function getRecurrenceRule() {
                        var ruleData = RULEFREQ + EQUAL;
                        switch (this.repeatType.value) {
                            case DAILY:
                                ruleData += RULEDAILY + SEMICOLON;
                                break;
                            case WEEKLY:
                                ruleData += RULEWEEKLY + SEMICOLON + this.getSelectedDaysData();
                                break;
                            case MONTHLY:
                                ruleData += RULEMONTHLY + SEMICOLON + this.getSelectedMonthData();
                                break;
                            case YEARLY:
                                ruleData += RULEYEARLY + SEMICOLON + this.getSelectedMonthData() + this.getYearMonthRuleData();
                                break;
                            case NONE:
                                return '';
                        }
                        ruleData += this.getIntervalData();
                        switch (this.endType.value) {
                            case UNTIL$1:
                                ruleData += this.getUntilData();
                                break;
                            case COUNT:
                                ruleData += this.getEndOnCount();
                                break;
                        }
                        return ruleData;
                    }
                }, {
                    key: 'setRecurrenceRule',
                    value: function setRecurrenceRule(rule) {
                        var startDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.startDate;

                        if (!rule) {
                            this.repeatType.setProperties({ value: NONE });
                        }
                        this.ruleObject = extractObjectFromRule(rule);
                        var endon = this.ruleObject.count ? COUNT : this.ruleObject.until ? UNTIL$1 : NEVER;
                        switch (this.ruleObject.freq) {
                            case RULEDAILY:
                                this.startState(DAILY, endon, startDate);
                                this.updateUI(DAILY, endon);
                                break;
                            case RULEWEEKLY:
                                this.startState(WEEKLY, endon, startDate);
                                this.updateUI(WEEKLY, endon);
                                break;
                            case RULEMONTHLY:
                                this.startState(MONTHLY, endon, startDate);
                                this.updateUI(MONTHLY, endon);
                                break;
                            case RULEYEARLY:
                                this.startState(YEARLY, endon, startDate);
                                this.updateUI(YEARLY, endon);
                                break;
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.destroyStatus = true;
                        this.destroyComponents();
                        this.element.innerHTML = '';
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'recurrenceeditor';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist([]);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        this.initialize();
                        this.rtlClass(this.enableRtl);
                        this.renderStatus = true;
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var _iteratorNormalCompletion20 = true;
                        var _didIteratorError20 = false;
                        var _iteratorError20 = undefined;

                        try {
                            for (var _iterator20 = Object.keys(newProp)[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                var prop = _step20.value;

                                switch (prop) {
                                    case 'startDate':
                                        this.selectMonthDay(newProp.startDate);
                                        this.updateUntilDate(newProp.startDate);
                                        this.endType.setProperties({ index: 0 });
                                        break;
                                    case 'enableRtl':
                                        this.rtlClass(newProp.enableRtl);
                                        break;
                                    case 'cssClass':
                                        this.applyCustomClass(newProp.cssClass);
                                        break;
                                    case 'selectedType':
                                        this.repeatType.setProperties({ index: this.selectedType });
                                        break;
                                    case 'minDate':
                                        this.untilDateObj.setProperties({ minDate: this.minDate });
                                        break;
                                    case 'maxDate':
                                        this.untilDateObj.setProperties({ maxDate: this.maxDate });
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError20 = true;
                            _iteratorError20 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion20 && _iterator20.return) {
                                    _iterator20.return();
                                }
                            } finally {
                                if (_didIteratorError20) {
                                    throw _iteratorError20;
                                }
                            }
                        }
                    }
                }]);

                return RecurrenceEditor;
            }(Component));

            __decorate$1([Property(['none', 'daily', 'weekly', 'monthly', 'yearly'])], RecurrenceEditor.prototype, "frequencies", void 0);
            __decorate$1([Property(0)], RecurrenceEditor.prototype, "firstDayOfWeek", void 0);
            __decorate$1([Property(new Date())], RecurrenceEditor.prototype, "startDate", void 0);
            __decorate$1([Property('null')], RecurrenceEditor.prototype, "dateFormat", void 0);
            __decorate$1([Property('en-US')], RecurrenceEditor.prototype, "locale", void 0);
            __decorate$1([Property('')], RecurrenceEditor.prototype, "cssClass", void 0);
            __decorate$1([Property(false)], RecurrenceEditor.prototype, "enableRtl", void 0);
            __decorate$1([Property('')], RecurrenceEditor.prototype, "value", void 0);
            __decorate$1([Property(new Date(1900, 1, 1))], RecurrenceEditor.prototype, "minDate", void 0);
            __decorate$1([Property(new Date(2099, 12, 31))], RecurrenceEditor.prototype, "maxDate", void 0);
            __decorate$1([Property(0)], RecurrenceEditor.prototype, "selectedType", void 0);
            __decorate$1([Event()], RecurrenceEditor.prototype, "change", void 0);
            _export('RecurrenceEditor', RecurrenceEditor = __decorate$1([NotifyPropertyChanges], RecurrenceEditor));

            EVENT_FIELD = 'e-field';
            REPEAT_CONTAINER_CLASS = 'e-recurrence-container';
            REPEAT_BUTTON_ICON_CLASS = 'e-recurrence-edit';
            REPEAT_BUTTON_CLASS = 'e-recurrence-edit-button';
            REPEAT_DIALOG_CLASS = 'e-recurrence-dialog';
            HIDE_STYLE_CLASS = 'e-hide';

            EventWindow = function () {
                /**
                 * Constructor for event window
                 */
                function EventWindow(parent) {
                    _classCallCheck(this, EventWindow);

                    this.parent = parent;
                    this.l10n = this.parent.localeObj;
                    this.fields = this.parent.eventFields;
                    this.fieldValidator = new FieldValidator(this.parent);
                    this.timezone = new Timezone();
                    this.renderEventWindow();
                }

                _createClass(EventWindow, [{
                    key: 'renderEventWindow',
                    value: function renderEventWindow() {
                        var dialogContent = this.getEventWindowContent();
                        this.element = createElement('div', { id: this.parent.element.id + '_dialog_wrapper' });
                        this.parent.element.appendChild(this.element);
                        if (this.parent.isAdaptive) {
                            this.dialogObject = new Dialog({
                                animationSettings: { effect: 'Zoom' },
                                content: dialogContent,
                                cssClass: EVENT_WINDOW_DIALOG_CLASS + ' ' + EVENT_WINDOW_DEVICE_CLASS,
                                enableRtl: this.parent.enableRtl,
                                header: '<div class="e-title-header"><div class="e-back-icon e-icons"></div><div class="e-title-text">' + this.l10n.getConstant('newEvent') + '</div><div class="e-save-icon e-icons"></div></div>',
                                height: '100%',
                                isModal: true,
                                showCloseIcon: false,
                                target: document.body,
                                visible: false,
                                beforeOpen: this.onBeforeOpen.bind(this),
                                beforeClose: this.onBeforeClose.bind(this)
                            });
                        } else {
                            this.dialogObject = new Dialog({
                                animationSettings: { effect: 'Zoom' },
                                buttons: [{
                                    buttonModel: { content: this.l10n.getConstant('deleteButton'), cssClass: EVENT_WINDOW_DELETE_BUTTON_CLASS },
                                    click: this.eventDelete.bind(this)
                                }, {
                                    buttonModel: {
                                        content: this.l10n.getConstant('saveButton'), cssClass: 'e-primary ' + EVENT_WINDOW_SAVE_BUTTON_CLASS,
                                        isPrimary: true
                                    },
                                    click: this.eventSave.bind(this)
                                }, {
                                    buttonModel: { cssClass: EVENT_WINDOW_CANCEL_BUTTON_CLASS, content: this.l10n.getConstant('cancelButton') },
                                    click: this.dialogClose.bind(this)
                                }],
                                content: dialogContent,
                                cssClass: EVENT_WINDOW_DIALOG_CLASS,
                                enableRtl: this.parent.enableRtl,
                                header: '<div class="e-title-text">' + this.l10n.getConstant('newEvent') + '</div>',
                                isModal: true,
                                showCloseIcon: true,
                                target: document.body,
                                visible: false,
                                width: '500px',
                                beforeOpen: this.onBeforeOpen.bind(this),
                                beforeClose: this.onBeforeClose.bind(this)
                            });
                        }
                        this.dialogObject.appendTo(this.element);
                        addClass([this.element.parentElement], EVENT_WINDOW_DIALOG_CLASS + '-container');
                        if (this.parent.isAdaptive) {
                            EventHandler.add(this.element.querySelector('.' + EVENT_WINDOW_BACK_ICON_CLASS), 'click', this.dialogClose, this);
                            EventHandler.add(this.element.querySelector('.' + EVENT_WINDOW_SAVE_ICON_CLASS), 'click', this.eventSave, this);
                        }
                        this.applyFormValidation();
                    }
                }, {
                    key: 'openEditor',
                    value: function openEditor(data, type) {
                        this.parent.quickPopup.quickPopup.close({ effect: 'None' });
                        if (!this.parent.isAdaptive && isNullOrUndefined(this.parent.editorTemplate)) {
                            removeClass([this.dialogObject.element.querySelector('.e-recurrenceeditor')], DISABLE_CLASS);
                        }
                        switch (type) {
                            case 'Add':
                                this.cellClickAction = true;
                                this.onCellDetailsUpdate(data);
                                break;
                            case 'Save':
                            case 'EditOccurrence':
                            case 'EditSeries':
                                if (type === 'EditOccurrence' && !this.parent.isAdaptive && isNullOrUndefined(this.parent.editorTemplate)) {
                                    addClass([this.dialogObject.element.querySelector('.e-recurrenceeditor')], DISABLE_CLASS);
                                }
                                this.cellClickAction = false;
                                this.onEventDetailsUpdate(data);
                                break;
                        }
                    }
                }, {
                    key: 'setDialogContent',
                    value: function setDialogContent() {
                        this.dialogObject.content = this.getEventWindowContent();
                        this.dialogObject.dataBind();
                    }
                }, {
                    key: 'onBeforeOpen',
                    value: function onBeforeOpen(args) {
                        var eventProp = { type: 'Editor', data: this.eventData, cancel: false, element: this.element };
                        this.parent.trigger(popupOpen, eventProp);
                        args.cancel = eventProp.cancel;
                    }
                }, {
                    key: 'onBeforeClose',
                    value: function onBeforeClose(args) {
                        this.parent.eventBase.focusElement();
                    }
                }, {
                    key: 'getEventWindowContent',
                    value: function getEventWindowContent() {
                        var container = createElement('div', { className: EVENT_WINDOW_FORM_DIV_CLASS });
                        var form = createElement('form', {
                            id: this.parent.element.id + 'EditForm',
                            className: EVENT_WINDOW_FORM_CLASS
                        });
                        if (!isNullOrUndefined(this.parent.editorTemplate)) {
                            var templeteEle = this.parent.getEditorTemplate()();
                            append([].slice.call(templeteEle), form);
                        } else {
                            var content = this.getDefaultEventWindowContent();
                            form.appendChild(content);
                        }
                        container.appendChild(form);
                        return container;
                    }
                }, {
                    key: 'getDefaultEventWindowContent',
                    value: function getDefaultEventWindowContent() {
                        var parentDiv = this.createDivElement('e-dialog-parent');
                        var titleLocationDiv = this.createDivElement(EVENT_WINDOW_TITLE_LOCATION_DIV_CLASS);
                        var titleDiv = this.renderTextBox(EVENT_WINDOW_TITLE_CLASS);
                        var locationDiv = this.renderTextBox(EVENT_WINDOW_LOCATION_CLASS);
                        titleLocationDiv.appendChild(titleDiv);
                        titleLocationDiv.appendChild(locationDiv);
                        var startEndDateTimeDiv = this.createDivElement(EVENT_WINDOW_START_END_DIV_CLASS);
                        var startDateTimeDiv = this.renderDateTimePicker(EVENT_WINDOW_START_CLASS, this.onTimeChange.bind(this));
                        var endDateTimeDiv = this.renderDateTimePicker(EVENT_WINDOW_END_CLASS);
                        startEndDateTimeDiv.appendChild(startDateTimeDiv);
                        startEndDateTimeDiv.appendChild(endDateTimeDiv);
                        var timezoneParentDiv = this.createDivElement(EVENT_WINDOW_TIME_ZONE_DIV_CLASS);
                        var startTimezoneDiv = this.renderDropDown(EVENT_WINDOW_START_TZ_CLASS);
                        var endTimezoneDiv = this.renderDropDown(EVENT_WINDOW_END_TZ_CLASS);
                        timezoneParentDiv.appendChild(startTimezoneDiv);
                        timezoneParentDiv.appendChild(endTimezoneDiv);
                        var allDayTimezoneDiv = this.createDivElement(EVENT_WINDOW_ALLDAY_TZ_DIV_CLASS);
                        var allDayDiv = this.renderCheckBox(EVENT_WINDOW_ALL_DAY_CLASS);
                        var timezoneDiv = this.renderCheckBox(EVENT_WINDOW_TZ_CLASS);
                        allDayTimezoneDiv.appendChild(allDayDiv);
                        allDayTimezoneDiv.appendChild(timezoneDiv);
                        var repeatParentDiv = this.createDivElement(EVENT_WINDOW_REPEAT_DIV_CLASS);
                        var repeatDiv = this.renderCheckBox(EVENT_WINDOW_REPEAT_CLASS);
                        var repeatEditConainer = createElement('span', {
                            className: REPEAT_CONTAINER_CLASS
                        });
                        var button = createElement('button', {
                            className: REPEAT_BUTTON_CLASS,
                            attrs: { type: 'button', 'title': this.l10n.getConstant('editRecurrence') }
                        });
                        var buttonObj = new Button({ iconCss: REPEAT_BUTTON_ICON_CLASS + ' e-icons', cssClass: 'e-medium' });
                        repeatEditConainer.appendChild(button);
                        buttonObj.appendTo(button);
                        repeatDiv.appendChild(repeatEditConainer);
                        repeatParentDiv.appendChild(repeatDiv);
                        var description = this.createDivElement(EVENT_WINDOW_DESCRIPTION_CLASS + '-row');
                        var descriptionDiv = this.renderTextBox(EVENT_WINDOW_DESCRIPTION_CLASS);
                        description.appendChild(descriptionDiv);
                        parentDiv.appendChild(titleLocationDiv);
                        parentDiv.appendChild(startEndDateTimeDiv);
                        parentDiv.appendChild(allDayTimezoneDiv);
                        parentDiv.appendChild(timezoneParentDiv);
                        parentDiv.appendChild(repeatParentDiv);
                        if (!this.parent.isAdaptive) {
                            this.createRecurrenceEditor(parentDiv);
                        } else {
                            EventHandler.add(button, 'click', this.loadRecurrenceEditor, this);
                        }
                        parentDiv.appendChild(description);
                        return parentDiv;
                    }
                }, {
                    key: 'createRecurrenceEditor',
                    value: function createRecurrenceEditor(parentDiv) {
                        var rec = createElement('div');
                        parentDiv.appendChild(rec);
                        this.recurrenceEditor = this.renderRecurrenceEditor();
                        this.recurrenceEditor.appendTo(rec);
                    }
                }, {
                    key: 'createDivElement',
                    value: function createDivElement(className) {
                        return createElement('div', { className: className });
                    }
                }, {
                    key: 'createInputElement',
                    value: function createInputElement(className, fieldName, type) {
                        return createElement(type || 'input', {
                            className: className, attrs: {
                                type: 'text', name: fieldName, value: ''
                            }
                        });
                    }
                }, {
                    key: 'renderDateTimePicker',
                    value: function renderDateTimePicker(value, changeEvent) {
                        var dateTimeDiv = this.createDivElement(value + '-container');
                        var fieldName = this.getFieldName(value);
                        var dateTimeInput = this.createInputElement(value + ' ' + EVENT_FIELD, fieldName);
                        dateTimeDiv.appendChild(dateTimeInput);
                        var dateTimePicker = new DateTimePicker({
                            change: changeEvent, enableRtl: this.parent.enableRtl, floatLabelType: 'Always',
                            format: (isNullOrUndefined(this.parent.dateFormat) ? this.getFormat('dateFormats') : this.parent.dateFormat) + ' ' + this.getFormat('timeFormats'),
                            placeholder: this.l10n.getConstant(value.substr(2)), value: new Date(), width: '100%'
                        });
                        dateTimePicker.appendTo(dateTimeInput);
                        return dateTimeDiv;
                    }
                }, {
                    key: 'onTimeChange',
                    value: function onTimeChange(args) {
                        var startObj = this.getInstance(EVENT_WINDOW_START_CLASS);
                        if (startObj.element.parentElement.classList.contains('e-input-focus')) {
                            var endObj = this.getInstance(EVENT_WINDOW_END_CLASS);
                            var duration = 0;
                            if (this.cellClickAction) {
                                duration = MS_PER_MINUTE * 30;
                            } else {
                                var eventData = this.parent.activeEventData.event;
                                duration = eventData[this.fields.endTime].getTime() - eventData[this.fields.startTime].getTime();
                            }
                            endObj.value = new Date(startObj.value.getTime() + duration);
                            endObj.dataBind();
                        }
                    }
                }, {
                    key: 'renderDropDown',
                    value: function renderDropDown(value) {
                        var labelValue = void 0;
                        var fieldName = this.getFieldName(value);
                        labelValue = value === EVENT_WINDOW_START_TZ_CLASS ? 'startTimezone' : 'endTimezone';
                        var timezoneDiv = this.createDivElement(value + '-container');
                        var timezoneInput = this.createInputElement(value + ' ' + EVENT_FIELD, fieldName);
                        timezoneDiv.appendChild(timezoneInput);
                        var drowDownList = new DropDownList({
                            allowFiltering: true, change: this.onTimezoneChange, dataSource: timezoneData,
                            enableRtl: this.parent.enableRtl, fields: { text: 'Text', value: 'Value' },
                            filterBarPlaceholder: 'Search Timezone', filtering: function filtering(e) {
                                var query = new Query();
                                query = e.text !== '' ? query.where('Text', 'contains', e.text, true) : query;
                                e.updateData(timezoneData, query);
                            },
                            floatLabelType: 'Always', placeholder: this.l10n.getConstant(labelValue), popupHeight: '230px'
                        });
                        drowDownList.appendTo(timezoneInput);
                        timezoneInput.setAttribute('name', fieldName);
                        return timezoneDiv;
                    }
                }, {
                    key: 'onTimezoneChange',
                    value: function onTimezoneChange() {
                        if (this.element.getAttribute('name') === 'StartTimezone') {
                            var startTimezoneObj = document.querySelector('.' + EVENT_WINDOW_START_TZ_CLASS).ej2_instances[0];
                            var endTimezoneObj = document.querySelector('.' + EVENT_WINDOW_END_TZ_CLASS).ej2_instances[0];
                            endTimezoneObj.value = startTimezoneObj.value;
                            endTimezoneObj.dataBind();
                        }
                    }
                }, {
                    key: 'renderCheckBox',
                    value: function renderCheckBox(value) {
                        var checkBoxDiv = this.createDivElement(value + '-container');
                        var fieldName = this.getFieldName(value);
                        var checkBoxInput = this.createInputElement(value + ' ' + EVENT_FIELD, fieldName);
                        checkBoxDiv.appendChild(checkBoxInput);
                        var labelText = void 0;
                        if (value === EVENT_WINDOW_ALL_DAY_CLASS) {
                            labelText = 'e-allDay';
                        } else if (value === EVENT_WINDOW_TZ_CLASS) {
                            labelText = 'e-timezone';
                        } else {
                            labelText = value;
                        }
                        var checkBox = new CheckBox({
                            change: this.onChange.bind(this),
                            cssClass: value,
                            enableRtl: this.parent.enableRtl,
                            label: this.l10n.getConstant(labelText.substr(2))
                        });
                        checkBox.appendTo(checkBoxInput);
                        checkBoxInput.setAttribute('name', fieldName);
                        if (fieldName === 'Repeat') {
                            this.repeatStatus = checkBox;
                        }
                        return checkBoxDiv;
                    }
                }, {
                    key: 'renderTextBox',
                    value: function renderTextBox(value) {
                        var textBoxDiv = this.createDivElement(value + '-container');
                        var fieldName = this.getFieldName(value);
                        var labelText = value === EVENT_WINDOW_TITLE_CLASS ? 'e-title' : value;
                        var textBoxInput = this.createInputElement(value + ' ' + EVENT_FIELD, fieldName, value === EVENT_WINDOW_DESCRIPTION_CLASS ? 'textarea' : 'input');
                        textBoxDiv.appendChild(textBoxInput);
                        Input.createInput({
                            element: textBoxInput, floatLabelType: 'Always',
                            properties: {
                                enableRtl: this.parent.enableRtl,
                                placeholder: this.l10n.getConstant(labelText.substr(2))
                            }
                        });
                        return textBoxDiv;
                    }
                }, {
                    key: 'getFieldName',
                    value: function getFieldName(name) {
                        var fieldName = void 0;
                        if (name === 'e-subject') {
                            fieldName = this.fields.subject;
                        } else if (name === 'e-location') {
                            fieldName = this.fields.location;
                        } else if (name === 'e-start') {
                            fieldName = this.fields.startTime;
                        } else if (name === 'e-end') {
                            fieldName = this.fields.endTime;
                        } else if (name === 'e-description') {
                            fieldName = this.fields.description;
                        } else if (name === 'e-all-day') {
                            fieldName = this.fields.isAllDay;
                        } else if (name === 'e-start-time-zone') {
                            fieldName = this.fields.startTimezone;
                        } else if (name === 'e-end-time-zone') {
                            fieldName = this.fields.endTimezone;
                        } else if (name === 'e-time-zone') {
                            fieldName = 'Timezone';
                        } else if (name === 'e-repeat') {
                            fieldName = 'Repeat';
                        }
                        return fieldName;
                    }
                }, {
                    key: 'onChange',
                    value: function onChange(args) {
                        var target = args.event.target;
                        if (target.classList.contains(EVENT_WINDOW_ALL_DAY_CLASS)) {
                            this.onAllDayChange(args.checked);
                        } else if (target.classList.contains(EVENT_WINDOW_TZ_CLASS)) {
                            this.timezoneChangeStyle(args.checked);
                        } else if (target.classList.contains(EVENT_WINDOW_REPEAT_CLASS)) {
                            this.onRepeatChange(args.checked);
                        }
                    }
                }, {
                    key: 'renderRepeatDialog',
                    value: function renderRepeatDialog() {
                        var element = createElement('div');
                        this.repeatDialogObject = new Dialog({
                            header: this.l10n.getConstant('recurrence'),
                            visible: false,
                            content: '<div class="e-rec-editor"></div>',
                            closeOnEscape: true,
                            width: '90%',
                            buttons: [{
                                click: this.repeatSaveDialog.bind(this),
                                buttonModel: { content: this.l10n.getConstant('save'), cssClass: 'e-save', isPrimary: true }
                            }, { click: this.repeatCancelDialog.bind(this), buttonModel: { cssClass: 'e-cancel', content: this.l10n.getConstant('cancel') } }],
                            target: this.element,
                            animationSettings: { effect: 'Zoom' },
                            enableRtl: this.parent.enableRtl,
                            isModal: true,
                            cssClass: REPEAT_DIALOG_CLASS,
                            open: this.repeatOpenDialog.bind(this)
                        });
                        this.element.appendChild(element);
                        this.repeatDialogObject.appendTo(element);
                        this.createRecurrenceEditor(this.repeatDialogObject.element.querySelector('.e-dlg-content'));
                    }
                }, {
                    key: 'loadRecurrenceEditor',
                    value: function loadRecurrenceEditor() {
                        this.repeatDialogObject.setProperties({ visible: true });
                        if (this.recurrenceEditor && this.repeatRule) {
                            this.recurrenceEditor.setRecurrenceRule(this.repeatRule);
                        }
                    }
                }, {
                    key: 'onRepeatChange',
                    value: function onRepeatChange(state) {
                        if (state) {
                            if (!this.repeatDialogObject) {
                                this.renderRepeatDialog();
                            }
                            this.recurrenceEditor.setProperties({ startDate: this.repeatStartDate, selectedType: 0 });
                            this.loadRecurrenceEditor();
                        } else {
                            if (this.repeatDialogObject) {
                                this.repeatDialogObject.setProperties({ visible: false });
                            }
                            this.repeatRule = '';
                            if (this.recurrenceEditor) {
                                this.recurrenceEditor.setRecurrenceRule(this.repeatRule);
                                this.updateRepeatLabel(this.repeatRule);
                            }
                            var element = this.element.querySelector('.' + REPEAT_CONTAINER_CLASS);
                            element.classList.add(HIDE_STYLE_CLASS);
                        }
                    }
                }, {
                    key: 'repeatSaveDialog',
                    value: function repeatSaveDialog() {
                        this.repeatRule = this.recurrenceEditor.getRecurrenceRule();
                        var element = this.element.querySelector('.' + REPEAT_CONTAINER_CLASS);
                        if (this.recurrenceEditor.getRecurrenceRule()) {
                            element.classList.remove(HIDE_STYLE_CLASS);
                        } else {
                            element.classList.add(HIDE_STYLE_CLASS);
                            this.repeatStatus.setProperties({ checked: false });
                        }
                        this.updateRepeatLabel(this.repeatRule);
                        this.closeRepeatDialog();
                    }
                }, {
                    key: 'closeRepeatDialog',
                    value: function closeRepeatDialog() {
                        this.repeatDialogObject.setProperties({ visible: false });
                    }
                }, {
                    key: 'repeatCancelDialog',
                    value: function repeatCancelDialog() {
                        this.closeRepeatDialog();
                        if (this.recurrenceEditor) {
                            this.recurrenceEditor.setRecurrenceRule(this.repeatTempRule);
                        }
                        if (!this.repeatTempRule) {
                            this.repeatStatus.setProperties({ checked: false });
                        }
                    }
                }, {
                    key: 'repeatOpenDialog',
                    value: function repeatOpenDialog() {
                        this.repeatTempRule = this.recurrenceEditor.getRecurrenceRule();
                    }
                }, {
                    key: 'onCellDetailsUpdate',
                    value: function onCellDetailsUpdate(args) {
                        this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS).removeAttribute('data-id');
                        var event = args;
                        this.element.querySelector('.' + EVENT_WINDOW_TITLE_TEXT_CLASS).innerHTML = this.l10n.getConstant('newEvent');
                        var eventObj = {};
                        if (event.subject) {
                            eventObj[this.fields.subject] = event.subject;
                        }
                        eventObj[this.fields.startTime] = event.startTime;
                        eventObj[this.fields.endTime] = event.endTime;
                        eventObj[this.fields.isAllDay] = event.isAllDay;
                        eventObj.Timezone = false;
                        this.repeatStartDate = eventObj[this.fields.startTime];
                        this.repeatRule = '';
                        this.showDetails(eventObj);
                        if (this.element.querySelector('.' + EVENT_WINDOW_DELETE_BUTTON_CLASS)) {
                            this.element.querySelector('.' + EVENT_WINDOW_DELETE_BUTTON_CLASS).setAttribute('style', 'display:none');
                        }
                        if (this.recurrenceEditor) {
                            this.recurrenceEditor.setProperties({ startDate: event.startTime, selectedType: 0 });
                        }
                        if (this.parent.isAdaptive && isNullOrUndefined(this.parent.editorTemplate)) {
                            var element = this.element.querySelector('.' + REPEAT_CONTAINER_CLASS);
                            element.classList.add(HIDE_STYLE_CLASS);
                            this.updateRepeatLabel(this.repeatRule);
                        }
                        this.dialogObject.show();
                    }
                }, {
                    key: 'applyFormValidation',
                    value: function applyFormValidation() {
                        var form = this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS);
                        var rules = {};
                        rules[this.parent.eventSettings.fields.subject.name] = this.parent.eventSettings.fields.subject.validation;
                        rules[this.parent.eventSettings.fields.location.name] = this.parent.eventSettings.fields.location.validation;
                        rules[this.parent.eventSettings.fields.startTime.name] = this.parent.eventSettings.fields.startTime.validation;
                        rules[this.parent.eventSettings.fields.endTime.name] = this.parent.eventSettings.fields.endTime.validation;
                        rules[this.parent.eventSettings.fields.description.name] = this.parent.eventSettings.fields.description.validation;
                        this.fieldValidator.renderFormValidator(form, rules);
                    }
                }, {
                    key: 'showDetails',
                    value: function showDetails(eventData) {
                        var eventObj = extend({}, eventData, null, true);
                        if (eventObj[this.fields.isAllDay]) {
                            var temp = addDays(new Date(+eventObj[this.fields.endTime]), -1).getTime();
                            eventObj[this.fields.endTime] = +eventObj[this.fields.startTime] > temp ? eventObj[this.fields.endTime] : new Date(temp);
                        }
                        this.eventData = eventObj;
                        var formelement = this.getFormElements();
                        var keyNames = Object.keys(eventObj);
                        for (var index = 0, len = formelement.length; index < len; index++) {
                            var columnName = formelement[index].name;
                            if (!isNullOrUndefined(columnName)) {
                                if (keyNames.indexOf(columnName) !== -1) {
                                    this.setValueToElement(formelement[index], eventObj[columnName]);
                                } else {
                                    this.setDefaultValueToElement(formelement[index]);
                                }
                            }
                        }
                        if (isNullOrUndefined(this.parent.editorTemplate)) {
                            this.onAllDayChange(eventObj[this.fields.isAllDay]);
                            var timezoneObj = this.getInstance(EVENT_WINDOW_TZ_CLASS + '.' + EVENT_FIELD);
                            if (!(isNullOrUndefined(eventObj[this.fields.startTimezone]) && isNullOrUndefined(eventObj[this.fields.endTimezone]))) {
                                timezoneObj.checked = true;
                                timezoneObj.dataBind();
                            }
                            this.timezoneChangeStyle(timezoneObj.checked);
                            delete eventObj.Timezone;
                        }
                    }
                }, {
                    key: 'onAllDayChange',
                    value: function onAllDayChange(allDayStatus) {
                        var startObj = this.getInstance(EVENT_WINDOW_START_CLASS);
                        var endObj = this.getInstance(EVENT_WINDOW_END_CLASS);
                        var format = void 0;
                        if (allDayStatus) {
                            format = isNullOrUndefined(this.parent.dateFormat) ? this.getFormat('dateFormats') : this.parent.dateFormat;
                            addClass(this.element.querySelectorAll('.e-time-icon'), EVENT_WINDOW_ICON_DISABLE_CLASS);
                            startObj.format = endObj.format = format;
                        } else {
                            format = isNullOrUndefined(this.parent.dateFormat) ? this.getFormat('dateFormats') + ' ' + this.getFormat('timeFormats') : this.parent.dateFormat + ' ' + this.getFormat('timeFormats');
                            removeClass(this.element.querySelectorAll('.e-time-icon'), EVENT_WINDOW_ICON_DISABLE_CLASS);
                            startObj.format = endObj.format = format;
                        }
                        if (this.cellClickAction) {
                            this.updateDateTime(allDayStatus, startObj, endObj);
                        }
                        startObj.dataBind();
                        endObj.dataBind();
                    }
                }, {
                    key: 'updateDateTime',
                    value: function updateDateTime(allDayStatus, startObj, endObj) {
                        var startDate = void 0;
                        var endDate = void 0;
                        if (allDayStatus) {
                            startDate = resetTime(new Date(this.parent.activeCellsData.startTime.getTime()));
                            endDate = this.parent.activeCellsData.isAllDay ? addDays(new Date(this.parent.activeCellsData.endTime.getTime()), -1) : resetTime(new Date(this.parent.activeCellsData.startTime.getTime()));
                        } else {
                            startDate = new Date(this.parent.activeCellsData.startTime.getTime());
                            if (this.parent.currentView === 'Month' || this.parent.currentView === 'MonthAgenda' || this.parent.activeCellsData.isAllDay) {
                                var startHour = this.parent.globalize.parseDate(this.parent.workHours.start, { skeleton: 'Hm' });
                                startDate.setHours(startHour.getHours(), startHour.getMinutes(), startHour.getSeconds());
                                endDate = new Date(startDate.getTime());
                                endDate.setMilliseconds(MS_PER_MINUTE * 30);
                            } else {
                                endDate = new Date(this.parent.activeCellsData.endTime.getTime());
                            }
                        }
                        startObj.value = startDate;
                        endObj.value = endDate;
                        startObj.dataBind();
                        endObj.dataBind();
                    }
                }, {
                    key: 'getFormat',
                    value: function getFormat(formatType) {
                        var format = void 0;
                        if (this.parent.locale === 'en' || this.parent.locale === 'en-US') {
                            format = getValue(formatType + '.short', getDefaultDateObject());
                        } else {
                            format = getValue('main.' + '' + this.parent.locale + '.dates.calendars.gregorian.' + formatType + '.short', cldrData);
                        }
                        return format;
                    }
                }, {
                    key: 'onEventDetailsUpdate',
                    value: function onEventDetailsUpdate(eventObj) {
                        if (!this.parent.isAdaptive) {
                            this.element.querySelector('.' + EVENT_WINDOW_DELETE_BUTTON_CLASS).setAttribute('style', 'display:inline');
                        }
                        this.element.querySelector('.' + EVENT_WINDOW_TITLE_TEXT_CLASS).innerHTML = this.l10n.getConstant('editEvent');
                        this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS).setAttribute('data-id', eventObj[this.fields.id].toString());
                        if (isNullOrUndefined(this.parent.editorTemplate)) {
                            eventObj = extend({}, eventObj, null, true);
                            var timezoneObj = this.getInstance(EVENT_WINDOW_TZ_CLASS + '.' + EVENT_FIELD);
                            var timezoneValue = void 0;
                            if (eventObj[this.fields.startTimezone] || eventObj[this.fields.endTimezone]) {
                                timezoneValue = true;
                                eventObj[this.fields.startTimezone] = eventObj[this.fields.startTimezone] || eventObj[this.fields.endTimezone];
                                eventObj[this.fields.endTimezone] = eventObj[this.fields.endTimezone] || eventObj[this.fields.startTimezone];
                                if (this.parent.timezone) {
                                    var startTz = eventObj[this.fields.startTimezone];
                                    var endTz = eventObj[this.fields.endTimezone];
                                    eventObj[this.fields.startTime] = this.timezone.convert(eventObj[this.fields.startTime], this.parent.timezone, startTz);
                                    eventObj[this.fields.endTime] = this.timezone.convert(eventObj[this.fields.endTime], this.parent.timezone, endTz);
                                }
                            } else {
                                timezoneValue = false;
                            }
                            eventObj.Timezone = timezoneValue;
                            timezoneObj.checked = timezoneValue;
                            timezoneObj.dataBind();
                        }
                        this.showDetails(eventObj);
                        if (eventObj[this.fields.recurrenceRule] && this.recurrenceEditor) {
                            this.recurrenceEditor.setRecurrenceRule(eventObj[this.fields.recurrenceRule], eventObj[this.fields.startTime]);
                        } else if (!this.parent.isAdaptive && this.recurrenceEditor) {
                            this.recurrenceEditor.setRecurrenceRule('');
                        }
                        this.repeatStartDate = eventObj[this.fields.startTime];
                        this.repeatRule = '';
                        if (eventObj[this.fields.recurrenceRule]) {
                            if (this.recurrenceEditor) {
                                this.recurrenceEditor.setRecurrenceRule(eventObj[this.fields.recurrenceRule], eventObj[this.fields.startTime]);
                            }
                            this.repeatRule = eventObj[this.fields.recurrenceRule];
                        }
                        if (this.parent.isAdaptive && isNullOrUndefined(this.parent.editorTemplate)) {
                            var element = this.element.querySelector('.' + REPEAT_CONTAINER_CLASS);
                            if (eventObj[this.fields.recurrenceRule]) {
                                element.classList.remove(HIDE_STYLE_CLASS);
                                this.repeatStatus.setProperties({ checked: true });
                            } else {
                                element.classList.add(HIDE_STYLE_CLASS);
                                this.repeatStatus.setProperties({ checked: false });
                            }
                            this.updateRepeatLabel(this.repeatRule);
                        }
                        if (this.parent.readonly) {
                            var saveButton = this.element.querySelector('.' + EVENT_WINDOW_SAVE_BUTTON_CLASS);
                            saveButton.ej2_instances[0].disabled = true;
                            var deleteButton = this.element.querySelector('.' + EVENT_WINDOW_DELETE_BUTTON_CLASS);
                            deleteButton.ej2_instances[0].disabled = true;
                        }
                        this.dialogObject.show();
                    }
                }, {
                    key: 'renderRecurrenceEditor',
                    value: function renderRecurrenceEditor() {
                        return new RecurrenceEditor({
                            cssClass: this.parent.cssClass,
                            dateFormat: this.parent.dateFormat,
                            enableRtl: this.parent.enableRtl,
                            firstDayOfWeek: this.parent.firstDayOfWeek,
                            locale: this.parent.locale
                        });
                    }
                }, {
                    key: 'updateRepeatLabel',
                    value: function updateRepeatLabel(repeatRule) {
                        if (this.parent.isAdaptive && !this.repeatDialogObject) {
                            this.renderRepeatDialog();
                        }
                        var data = repeatRule ? this.l10n.getConstant('repeats') + ' ' + this.recurrenceEditor.getRuleSummary(repeatRule) : this.l10n.getConstant('repeat');
                        this.repeatStatus.setProperties({ label: data });
                    }
                }, {
                    key: 'dialogClose',
                    value: function dialogClose(args) {
                        this.dialogObject.hide();
                        this.fieldValidator.destroyToolTip();
                        this.resetFormFields();
                        if (!this.parent.isAdaptive && this.recurrenceEditor) {
                            this.recurrenceEditor.resetFields();
                        }
                    }
                }, {
                    key: 'timezoneChangeStyle',
                    value: function timezoneChangeStyle(value) {
                        var timezoneDiv = this.element.querySelector('.' + EVENT_WINDOW_TIME_ZONE_DIV_CLASS);
                        if (value) {
                            addClass([timezoneDiv], ENABLE_CLASS);
                            var startTimezoneObj = this.getInstance(EVENT_WINDOW_START_TZ_CLASS);
                            var endTimezoneObj = this.getInstance(EVENT_WINDOW_END_TZ_CLASS);
                            var timezone = startTimezoneObj.dataSource;
                            if (!startTimezoneObj.value || !this.parent.timezone) {
                                var found = timezone.some(function (tz) {
                                    return tz.Value === localTimezoneName;
                                });
                                if (!found) {
                                    var obj = {};
                                    obj = { Value: localTimezoneName, Text: localTimezoneName };
                                    timezone.push(obj);
                                    startTimezoneObj.dataSource = timezone;
                                    endTimezoneObj.dataSource = timezone;
                                    startTimezoneObj.dataBind();
                                    endTimezoneObj.dataBind();
                                }
                            }
                            startTimezoneObj.value = startTimezoneObj.value || this.parent.timezone || localTimezoneName;
                            endTimezoneObj.value = endTimezoneObj.value || this.parent.timezone || localTimezoneName;
                            startTimezoneObj.dataBind();
                            endTimezoneObj.dataBind();
                        } else {
                            removeClass([timezoneDiv], ENABLE_CLASS);
                        }
                    }
                }, {
                    key: 'resetFormFields',
                    value: function resetFormFields() {
                        var formelement = this.getFormElements();
                        for (var index = 0, len = formelement.length; index < len; index++) {
                            var columnName = formelement[index].name;
                            if (!isNullOrUndefined(columnName) && columnName !== '') {
                                this.setDefaultValueToElement(formelement[index]);
                            }
                        }
                    }
                }, {
                    key: 'eventSave',
                    value: function eventSave() {
                        if (!this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS).ej2_instances[0].validate()) {
                            return;
                        }
                        var eventObj = {};
                        var formelement = this.getFormElements();
                        for (var index = 0, len = formelement.length; index < len; index++) {
                            var columnName = formelement[index].name;
                            if (!isNullOrUndefined(columnName) && columnName !== '' && isNullOrUndefined(eventObj[columnName])) {
                                eventObj[columnName] = this.getValueFromElement(formelement[index]);
                            }
                        }
                        if (!eventObj.Timezone) {
                            eventObj[this.fields.startTimezone] = null;
                            eventObj[this.fields.endTimezone] = null;
                        }
                        if (isNullOrUndefined(this.parent.editorTemplate)) {
                            delete eventObj.Timezone;
                            delete eventObj.Repeat;
                            if (!eventObj[this.fields.startTime] || !eventObj[this.fields.endTime]) {
                                this.parent.quickPopup.openValidationError('invalidDateError');
                                return;
                            }
                            if (eventObj[this.fields.startTime] > eventObj[this.fields.endTime]) {
                                this.parent.quickPopup.openValidationError('startEndError');
                                return;
                            }
                        }
                        var eventId = this.getEventIdFromForm();
                        if (!isNullOrUndefined(eventObj[this.fields.subject])) {
                            eventObj[this.fields.subject] = eventObj[this.fields.subject] !== '' ? eventObj[this.fields.subject] : this.parent.eventSettings.fields.subject.default;
                        }
                        if (eventObj[this.fields.isAllDay]) {
                            eventObj[this.fields.startTime] = resetTime(eventObj[this.fields.startTime]);
                            eventObj[this.fields.endTime] = addDays(resetTime(eventObj[this.fields.endTime]), 1);
                        }
                        var ruleData = this.recurrenceEditor ? this.recurrenceEditor.getRecurrenceRule() : null;
                        eventObj[this.fields.recurrenceRule] = ruleData ? ruleData : undefined;
                        if (!isNullOrUndefined(eventId)) {
                            var editedData = new DataManager({ json: this.parent.eventsData }).executeLocal(new Query().where(this.fields.id, 'equal', parseInt(eventId, 10)))[0];
                            eventObj = extend({}, editedData, eventObj);
                            if (!isNullOrUndefined(editedData[this.fields.recurrenceRule])) {
                                if (this.parent.currentAction === 'EditOccurrence' && !eventObj[this.fields.recurrenceID]) {
                                    eventObj[this.fields.id] = this.parent.eventBase.getEventMaxId() + 1;
                                }
                                if (this.parent.currentAction === 'EditSeries' || eventObj[this.fields.id] !== editedData[this.fields.id]) {
                                    eventObj[this.fields.recurrenceID] = editedData[this.fields.id];
                                }
                                this.parent.saveEvent(eventObj, this.parent.currentAction);
                            } else {
                                this.parent.saveEvent(eventObj);
                            }
                        } else {
                            eventObj[this.fields.id] = this.parent.eventBase.getEventMaxId() + 1;
                            this.parent.addEvent(eventObj);
                        }
                        this.dialogObject.hide();
                    }
                }, {
                    key: 'getEventIdFromForm',
                    value: function getEventIdFromForm() {
                        return this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS).getAttribute('data-id');
                    }
                }, {
                    key: 'getFormElements',
                    value: function getFormElements() {
                        return [].slice.call(this.element.querySelectorAll('.' + EVENT_FIELD));
                    }
                }, {
                    key: 'getValueFromElement',
                    value: function getValueFromElement(element) {
                        var value = void 0;
                        if (element.classList.contains('e-datepicker')) {
                            value = element.ej2_instances[0].value;
                        } else if (element.classList.contains('e-datetimepicker')) {
                            value = element.ej2_instances[0].value;
                        } else if (element.classList.contains('e-dropdownlist')) {
                            value = element.ej2_instances[0].value;
                        } else if (element.classList.contains('e-checkbox')) {
                            value = element.ej2_instances[0].checked;
                        } else {
                            if (element.type === 'checkbox') {
                                value = element.checked;
                            } else {
                                value = element.value;
                            }
                        }
                        return value;
                    }
                }, {
                    key: 'setValueToElement',
                    value: function setValueToElement(element, value) {
                        if (element.classList.contains('e-datepicker')) {
                            var instance = element.ej2_instances[0];
                            instance.value = value;
                            instance.dataBind();
                        } else if (element.classList.contains('e-datetimepicker')) {
                            var _instance3 = element.ej2_instances[0];
                            _instance3.value = value;
                            _instance3.dataBind();
                        } else if (element.classList.contains('e-dropdownlist')) {
                            var _instance4 = element.ej2_instances[0];
                            _instance4.value = value;
                            _instance4.dataBind();
                        } else if (element.classList.contains('e-checkbox')) {
                            var _instance5 = element.ej2_instances[0];
                            _instance5.checked = value;
                            _instance5.dataBind();
                        } else {
                            if (element.type !== 'checkbox') {
                                element.value = value;
                            } else {
                                element.checked = value;
                            }
                        }
                    }
                }, {
                    key: 'setDefaultValueToElement',
                    value: function setDefaultValueToElement(element) {
                        if (element.classList.contains('e-datepicker')) {
                            var instance = element.ej2_instances[0];
                            instance.value = new Date();
                            instance.dataBind();
                        } else if (element.classList.contains('e-datetimepicker')) {
                            var _instance6 = element.ej2_instances[0];
                            _instance6.value = new Date();
                            _instance6.dataBind();
                        } else if (element.classList.contains('e-dropdownlist')) {
                            var _instance7 = element.ej2_instances[0];
                            _instance7.value = null;
                            _instance7.dataBind();
                        } else if (element.classList.contains('e-checkbox')) {
                            var _instance8 = element.ej2_instances[0];
                            _instance8.checked = false;
                            _instance8.dataBind();
                        } else {
                            if (element.type === 'checkbox') {
                                element.checked = false;
                            } else {
                                element.value = '';
                            }
                        }
                    }
                }, {
                    key: 'getInstance',
                    value: function getInstance(className) {
                        return this.element.querySelector('.' + className).ej2_instances[0];
                    }
                }, {
                    key: 'eventDelete',
                    value: function eventDelete(args) {
                        switch (this.parent.currentAction) {
                            case 'EditOccurrence':
                                var fields = this.parent.eventFields;
                                if (!isNullOrUndefined(this.parent.activeEventData.event[fields.recurrenceRule])) {
                                    this.parent.currentAction = 'DeleteOccurrence';
                                } else {
                                    this.parent.currentAction = 'Delete';
                                }
                                break;
                            case 'EditSeries':
                                this.parent.currentAction = 'DeleteSeries';
                                break;
                        }
                        this.dialogObject.hide();
                        this.parent.quickPopup.openDeleteAlert();
                    }
                }, {
                    key: 'getRecurrenceEditorInstance',
                    value: function getRecurrenceEditorInstance() {
                        if (this.parent.isAdaptive && !this.repeatDialogObject) {
                            this.renderRepeatDialog();
                        }
                        return this.recurrenceEditor;
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.recurrenceEditor) {
                            this.recurrenceEditor.destroy();
                        }
                        if (this.repeatDialogObject) {
                            this.repeatDialogObject.destroy();
                            remove(this.repeatDialogObject.element);
                        }
                        if (this.dialogObject) {
                            this.dialogObject.destroy();
                            this.dialogObject = null;
                        }
                        if (this.element) {
                            remove(this.element);
                            this.element = null;
                        }
                        this.fieldValidator.destroyForm();
                    }
                }]);

                return EventWindow;
            }();

            Render = function () {
                /**
                 * Constructor for render
                 */
                function Render(parent) {
                    _classCallCheck(this, Render);

                    this.parent = parent;
                }

                _createClass(Render, [{
                    key: 'render',
                    value: function render(viewName) {
                        this.initializeLayout(viewName);
                        this.refreshDataManager();
                    }
                }, {
                    key: 'initializeLayout',
                    value: function initializeLayout(viewName) {
                        if (this.parent.activeView) {
                            this.parent.activeView.removeEventListener();
                            this.parent.activeView.destroy();
                        }
                        switch (viewName) {
                            case 'Day':
                                this.parent.activeView = this.parent.dayModule;
                                break;
                            case 'Week':
                                this.parent.activeView = this.parent.weekModule;
                                break;
                            case 'WorkWeek':
                                this.parent.activeView = this.parent.workWeekModule;
                                break;
                            case 'Month':
                                this.parent.activeView = this.parent.monthModule;
                                break;
                            case 'Agenda':
                                this.parent.activeView = this.parent.agendaModule;
                                break;
                            // case 'weekAgenda':
                            //     this.parent.activeView = this.parent.weekAgendaModule;
                            //     break;
                            // case 'workWeekAgenda':
                            //     this.parent.activeView = this.parent.workWeekAgendaModule;
                            //     break;
                            case 'MonthAgenda':
                                this.parent.activeView = this.parent.monthAgendaModule;
                                break;
                        }
                        if (isNullOrUndefined(this.parent.activeView)) {
                            var firstView = this.parent.viewOptions[Object.keys(this.parent.viewOptions)[0]].option;
                            if (firstView) {
                                this.parent.setProperties({ currentView: firstView }, true);
                                if (this.parent.headerModule) {
                                    this.parent.headerModule.updateActiveView();
                                    this.parent.headerModule.setCalendarView();
                                }
                                return this.initializeLayout(firstView);
                            }
                            throw Error('Inject required modules');
                        }
                        this.updateLabelText(viewName);
                        this.parent.activeView.addEventListener();
                        this.parent.activeView.getRenderDates();
                        this.parent.activeView.renderLayout(CURRENT_PANEL_CLASS);
                        if (this.parent.headerModule) {
                            this.parent.headerModule.updateDateRange(this.parent.activeView.getDateRangeText());
                        }
                    }
                }, {
                    key: 'updateLabelText',
                    value: function updateLabelText(view) {
                        var content = this.parent.activeView.getLabelText(view);
                        this.parent.element.setAttribute('role', 'presentation');
                        this.parent.element.setAttribute('aria-label', content);
                    }
                }, {
                    key: 'refreshDataManager',
                    value: function refreshDataManager() {
                        var _this7 = this;

                        var start = this.parent.activeView.startDate();
                        var end = this.parent.activeView.endDate();
                        var dataManager = this.parent.dataModule.getData(this.parent.dataModule.generateQuery(start, end));
                        dataManager.then(function (e) {
                            return _this7.dataManagerSuccess(e);
                        }).catch(function (e) {
                            return _this7.dataManagerFailure(e);
                        });
                    }
                }, {
                    key: 'dataManagerSuccess',
                    value: function dataManagerSuccess(e) {
                        if (this.parent.isDestroyed) {
                            return;
                        }
                        this.parent.trigger(dataBinding, e);
                        this.parent.eventsData = extend([], e.result, null, true);
                        var processed = this.parent.eventBase.processData(this.parent.eventsData);
                        this.parent.notify(dataReady, { processedData: processed });
                        this.parent.trigger(dataBound);
                    }
                }, {
                    key: 'dataManagerFailure',
                    value: function dataManagerFailure(e) {
                        if (this.parent.isDestroyed) {
                            return;
                        }
                        this.parent.trigger(actionFailure, { error: e });
                    }
                }]);

                return Render;
            }();

            __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            WorkHours = function (_ChildProperty) {
                _inherits(WorkHours, _ChildProperty);

                function WorkHours() {
                    _classCallCheck(this, WorkHours);

                    return _possibleConstructorReturn(this, (WorkHours.__proto__ || Object.getPrototypeOf(WorkHours)).apply(this, arguments));
                }

                return WorkHours;
            }(ChildProperty);

            __decorate$2([Property(true)], WorkHours.prototype, "highlight", void 0);
            __decorate$2([Property('09:00')], WorkHours.prototype, "start", void 0);
            __decorate$2([Property('18:00')], WorkHours.prototype, "end", void 0);

            __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            Field = function (_ChildProperty2) {
                _inherits(Field, _ChildProperty2);

                function Field() {
                    _classCallCheck(this, Field);

                    return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
                }

                return Field;
            }(ChildProperty);

            __decorate$4([Property({ name: 'Id' })], Field.prototype, "id", void 0);
            __decorate$4([Property({ name: 'Subject', default: 'Add title' })], Field.prototype, "subject", void 0);
            __decorate$4([Property({ name: 'StartTime' })], Field.prototype, "startTime", void 0);
            __decorate$4([Property({ name: 'EndTime' })], Field.prototype, "endTime", void 0);
            __decorate$4([Property({ name: 'StartTimezone' })], Field.prototype, "startTimezone", void 0);
            __decorate$4([Property({ name: 'EndTimezone' })], Field.prototype, "endTimezone", void 0);
            __decorate$4([Property({ name: 'Location' })], Field.prototype, "location", void 0);
            __decorate$4([Property({ name: 'Description' })], Field.prototype, "description", void 0);
            __decorate$4([Property({ name: 'IsAllDay' })], Field.prototype, "isAllDay", void 0);
            __decorate$4([Property({ name: 'RecurrenceID' })], Field.prototype, "recurrenceID", void 0);
            __decorate$4([Property({ name: 'RecurrenceRule' })], Field.prototype, "recurrenceRule", void 0);
            __decorate$4([Property({ name: 'RecurrenceException' })], Field.prototype, "recurrenceException", void 0);

            __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            EventSettings = function (_ChildProperty3) {
                _inherits(EventSettings, _ChildProperty3);

                function EventSettings() {
                    _classCallCheck(this, EventSettings);

                    return _possibleConstructorReturn(this, (EventSettings.__proto__ || Object.getPrototypeOf(EventSettings)).apply(this, arguments));
                }

                return EventSettings;
            }(ChildProperty);

            __decorate$3([Property()], EventSettings.prototype, "template", void 0);
            __decorate$3([Property([])], EventSettings.prototype, "dataSource", void 0);
            __decorate$3([Property()], EventSettings.prototype, "query", void 0);
            __decorate$3([Complex({}, Field)], EventSettings.prototype, "fields", void 0);
            __decorate$3([Property(false)], EventSettings.prototype, "enableTooltip", void 0);
            __decorate$3([Property()], EventSettings.prototype, "tooltipTemplate", void 0);

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export('Schedule', Schedule = function (_Component2) {
                _inherits(Schedule, _Component2);

                /**
                 * Constructor for creating the Schedule widget
                 * @hidden
                 */
                function Schedule(options, element) {
                    _classCallCheck(this, Schedule);

                    return _possibleConstructorReturn(this, (Schedule.__proto__ || Object.getPrototypeOf(Schedule)).call(this, options, element));
                }
                /**
                 * Core method that initializes the control rendering.
                 * @private
                 */


                _createClass(Schedule, [{
                    key: 'render',
                    value: function render() {
                        addClass([this.element], ROOT);
                        if (this.enableRtl) {
                            addClass([this.element], RTL);
                        } else {
                            removeClass([this.element], RTL);
                        }
                        if (this.isAdaptive) {
                            addClass([this.element], DEVICE);
                        } else {
                            removeClass([this.element], DEVICE);
                        }
                        if (this.cssClass) {
                            addClass([this.element], this.cssClass);
                        }
                        this.validateDate();
                        this.eventTooltipTemplateFn = this.templateParser(this.eventSettings.tooltipTemplate);
                        this.editorTemplateFn = this.templateParser(this.editorTemplate);
                        this.scrollModule = new Scroll(this);
                        this.scrollModule.setWidth();
                        this.scrollModule.setHeight();
                        if (this.showHeaderBar) {
                            this.headerModule = new HeaderRenderer(this);
                        }
                        this.element.appendChild(createElement('div', { className: TABLE_CONTAINER_CLASS }));
                        if (Browser.isDevice || Browser.isTouch) {
                            this.scheduleTouchModule = new ScheduleTouch(this);
                        }
                        this.renderModule = new Render(this);
                        this.eventBase = new EventBase(this);
                        this.initializeDataModule();
                        this.initializeView(this.currentView);
                        this.initializePopups();
                        this.wireEvents();
                    }
                }, {
                    key: 'validateDate',
                    value: function validateDate() {
                        // persist the selected date value
                        this.setProperties({ selectedDate: new Date('' + this.selectedDate) }, true);
                    }
                }, {
                    key: 'setViewOptions',
                    value: function setViewOptions() {
                        var isModuleLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                        this.viewOptions = {};
                        var viewName = void 0;
                        var selectedView = void 0;
                        var _iteratorNormalCompletion21 = true;
                        var _didIteratorError21 = false;
                        var _iteratorError21 = undefined;

                        try {
                            for (var _iterator21 = this.views[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                                var view = _step21.value;

                                var isOptions = typeof view === 'string' ? false : true;
                                if (typeof view === 'string') {
                                    viewName = view;
                                } else {
                                    viewName = view.option;
                                    if (view.isSelected) {
                                        selectedView = viewName;
                                    }
                                }
                                var obj = extend({ option: viewName }, isOptions ? view : {});
                                var fieldViewName = viewName.charAt(0).toLowerCase() + viewName.slice(1);
                                this.viewOptions[fieldViewName] = obj;
                            }
                        } catch (err) {
                            _didIteratorError21 = true;
                            _iteratorError21 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion21 && _iterator21.return) {
                                    _iterator21.return();
                                }
                            } finally {
                                if (_didIteratorError21) {
                                    throw _iteratorError21;
                                }
                            }
                        }

                        if (!isModuleLoad && selectedView) {
                            this.setProperties({ currentView: selectedView }, true);
                        }
                    }
                }, {
                    key: 'getActiveViewOptions',
                    value: function getActiveViewOptions(viewName) {
                        var scheduleOptions = {
                            dateFormat: this.dateFormat,
                            endHour: this.endHour,
                            isSelected: false,
                            option: null,
                            readonly: this.readonly,
                            startHour: this.startHour,
                            allowVirtualScrolling: true,
                            cellTemplate: this.cellTemplate,
                            eventTemplate: this.eventSettings.template,
                            dateHeaderTemplate: this.dateHeaderTemplate,
                            workDays: this.workDays,
                            showWeekend: this.showWeekend
                        };
                        return extend(scheduleOptions, this.viewOptions[viewName.charAt(0).toLowerCase() + viewName.slice(1)]);
                    }
                }, {
                    key: 'initializeDataModule',
                    value: function initializeDataModule() {
                        this.eventFields = {
                            id: this.eventSettings.fields.id.name,
                            subject: this.eventSettings.fields.subject.name,
                            startTime: this.eventSettings.fields.startTime.name,
                            endTime: this.eventSettings.fields.endTime.name,
                            startTimezone: this.eventSettings.fields.startTimezone.name,
                            endTimezone: this.eventSettings.fields.endTimezone.name,
                            location: this.eventSettings.fields.location.name,
                            description: this.eventSettings.fields.description.name,
                            isAllDay: this.eventSettings.fields.isAllDay.name,
                            recurrenceID: this.eventSettings.fields.recurrenceID.name,
                            recurrenceRule: this.eventSettings.fields.recurrenceRule.name,
                            recurrenceException: this.eventSettings.fields.recurrenceException.name
                        };
                        this.dataModule = new Data(this.eventSettings.dataSource, this.eventSettings.query);
                        this.crudModule = new Crud(this);
                    }
                }, {
                    key: 'initializeView',
                    value: function initializeView(viewName) {
                        this.activeViewOptions = this.getActiveViewOptions(viewName);
                        this.initializeTemplates();
                        this.renderModule.render(viewName);
                    }
                }, {
                    key: 'initializeTemplates',
                    value: function initializeTemplates() {
                        this.cellTemplateFn = this.templateParser(this.activeViewOptions.cellTemplate);
                        this.dateHeaderTemplateFn = this.templateParser(this.activeViewOptions.dateHeaderTemplate);
                        this.appointmentTemplateFn = this.templateParser(this.activeViewOptions.eventTemplate);
                    }
                }, {
                    key: 'initializePopups',
                    value: function initializePopups() {
                        if (this.eventSettings.enableTooltip) {
                            this.eventTooltip = new EventTooltip(this);
                        }
                        this.eventWindow = new EventWindow(this);
                        this.quickPopup = new QuickPopups(this);
                    }
                }, {
                    key: 'getDayNames',
                    value: function getDayNames(type) {
                        var culShortNames = [];
                        var cldrObj = void 0;
                        if (this.locale === 'en' || this.locale === 'en-US') {
                            cldrObj = getValue('days.stand-alone.' + type, getDefaultDateObject());
                        } else {
                            cldrObj = getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.days.format.' + type, cldrData);
                        }
                        var _iteratorNormalCompletion22 = true;
                        var _didIteratorError22 = false;
                        var _iteratorError22 = undefined;

                        try {
                            for (var _iterator22 = Object.keys(cldrObj)[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                                var obj = _step22.value;

                                culShortNames.push(getValue(obj, cldrObj));
                            }
                        } catch (err) {
                            _didIteratorError22 = true;
                            _iteratorError22 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion22 && _iterator22.return) {
                                    _iterator22.return();
                                }
                            } finally {
                                if (_didIteratorError22) {
                                    throw _iteratorError22;
                                }
                            }
                        }

                        return culShortNames;
                    }
                }, {
                    key: 'changeView',
                    value: function changeView(view, event, muteOnChange) {
                        if (!muteOnChange && view === this.currentView) {
                            return;
                        }
                        var args = { requestType: 'viewNavigate', cancel: false, event: event };
                        this.trigger(actionBegin, args);
                        if (args.cancel) {
                            return;
                        }
                        var navArgs = { action: 'view', cancel: false, previousView: this.currentView, currentView: view };
                        this.trigger(navigating, navArgs);
                        if (navArgs.cancel) {
                            return;
                        }
                        this.setProperties({ currentView: view }, true);
                        if (this.headerModule) {
                            this.headerModule.updateActiveView();
                            this.headerModule.setCalendarView();
                        }
                        this.initializeView(this.currentView);
                        this.animateLayout();
                        args = { requestType: 'viewNavigate', cancel: false, event: event };
                        this.trigger(actionComplete, args);
                    }
                }, {
                    key: 'changeDate',
                    value: function changeDate(selectedDate, event) {
                        var args = { requestType: 'dateNavigate', cancel: false, event: event };
                        this.trigger(actionBegin, args);
                        if (args.cancel) {
                            return;
                        }
                        var navArgs = {
                            action: 'date', cancel: false, previousDate: this.selectedDate, currentDate: selectedDate
                        };
                        this.trigger(navigating, navArgs);
                        if (navArgs.cancel) {
                            return;
                        }
                        this.setProperties({ selectedDate: selectedDate }, true);
                        if (this.headerModule) {
                            this.headerModule.setCalendarDate(selectedDate);
                        }
                        this.initializeView(this.currentView);
                        this.animateLayout();
                        args = { requestType: 'dateNavigate', cancel: false, event: event };
                        this.trigger(actionComplete, args);
                    }
                }, {
                    key: 'isSelectedDate',
                    value: function isSelectedDate(date) {
                        return date.setHours(0, 0, 0, 0) === new Date('' + this.selectedDate).setHours(0, 0, 0, 0);
                    }
                }, {
                    key: 'animateLayout',
                    value: function animateLayout() {
                        new Animation({ duration: 600, name: 'FadeIn', timingFunction: 'easeIn' }).animate(this.activeView.element);
                    }
                }, {
                    key: 'requiredModules',
                    value: function requiredModules() {
                        var modules = [];
                        this.setViewOptions(true);
                        var _iteratorNormalCompletion23 = true;
                        var _didIteratorError23 = false;
                        var _iteratorError23 = undefined;

                        try {
                            for (var _iterator23 = Object.keys(this.viewOptions)[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                                var view = _step23.value;

                                modules.push({
                                    member: view,
                                    args: [this]
                                });
                            }
                        } catch (err) {
                            _didIteratorError23 = true;
                            _iteratorError23 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion23 && _iterator23.return) {
                                    _iterator23.return();
                                }
                            } finally {
                                if (_didIteratorError23) {
                                    throw _iteratorError23;
                                }
                            }
                        }

                        return modules;
                    }
                }, {
                    key: 'preRender',
                    value: function preRender() {
                        this.isAdaptive = Browser.isDevice;
                        this.globalize = new Internationalization(this.locale);
                        this.uiStateValues = { expand: false, isInitial: true, left: 0, top: 0 };
                        this.activeCellsData = { startTime: new Date(), endTime: new Date(), isAllDay: false };
                        this.defaultLocale = {
                            day: 'Day',
                            week: 'Week',
                            workWeek: 'Work Week',
                            month: 'Month',
                            agenda: 'Agenda',
                            weekAgenda: 'Week Agenda',
                            workWeekAgenda: 'Work Week Agenda',
                            monthAgenda: 'Month Agenda',
                            today: 'Today',
                            noEvents: 'No events',
                            allDay: 'All day',
                            start: 'Start',
                            end: 'End',
                            more: 'more',
                            close: 'Close',
                            cancel: 'Cancel',
                            noTitle: '(No Title)',
                            delete: 'Delete',
                            deleteEvent: 'Delete Event',
                            selectedItems: 'Items selected',
                            deleteSeries: 'Delete Series',
                            edit: 'Edit',
                            editSeries: 'Edit Series',
                            editEvent: 'Edit Event',
                            createEvent: 'Create',
                            subject: 'Subject',
                            addTitle: 'Add title',
                            moreDetails: 'More Details',
                            save: 'Save',
                            editContent: 'Do you want to edit only this event or entire series?',
                            deleteRecurrenceContent: 'Do you want to delete only this event or entire series?',
                            deleteContent: 'Are you sure you want to delete this event?',
                            newEvent: 'New Event',
                            title: 'Title',
                            location: 'Location',
                            description: 'Description',
                            timezone: 'Timezone',
                            startTimezone: 'Start Timezone',
                            endTimezone: 'End Timezone',
                            repeat: 'Repeat',
                            saveButton: 'Save',
                            cancelButton: 'Cancel',
                            deleteButton: 'Delete',
                            recurrence: 'Recurrence',
                            editRecurrence: 'Edit Recurrence',
                            repeats: 'Repeats',
                            alert: 'Alert',
                            startEndError: 'The selected end date occurs before the start date.',
                            invalidDateError: 'The entered date value is invalid.',
                            ok: 'Ok'
                        };
                        this.localeObj = new L10n(this.getModuleName(), this.defaultLocale, this.locale);
                        this.eventsData = [];
                        this.eventsProcessed = [];
                        this.currentAction = null;
                        this.selectedElements = [];
                        this.setViewOptions();
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        var resize = 'onorientationchange' in window ? 'orientationchange' : 'resize';
                        EventHandler.add(window, resize, this.onScheduleResize, this);
                        EventHandler.add(document, Browser.touchStartEvent, this.onDocumentClick, this);
                        if (this.allowKeyboardInteraction) {
                            this.keyboardInteractionModule = new KeyboardInteraction(this);
                        }
                    }
                }, {
                    key: 'removeSelectedClass',
                    value: function removeSelectedClass() {
                        var selectedCells = this.getSelectedElements();
                        var _iteratorNormalCompletion24 = true;
                        var _didIteratorError24 = false;
                        var _iteratorError24 = undefined;

                        try {
                            for (var _iterator24 = selectedCells[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                                var cell = _step24.value;

                                cell.setAttribute('aria-selected', 'false');
                                cell.removeAttribute('tabindex');
                            }
                        } catch (err) {
                            _didIteratorError24 = true;
                            _iteratorError24 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion24 && _iterator24.return) {
                                    _iterator24.return();
                                }
                            } finally {
                                if (_didIteratorError24) {
                                    throw _iteratorError24;
                                }
                            }
                        }

                        removeClass(selectedCells, SELECTED_CELL_CLASS);
                    }
                }, {
                    key: 'addSelectedClass',
                    value: function addSelectedClass(cells, focusCell) {
                        var _iteratorNormalCompletion25 = true;
                        var _didIteratorError25 = false;
                        var _iteratorError25 = undefined;

                        try {
                            for (var _iterator25 = cells[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                                var cell = _step25.value;

                                cell.setAttribute('aria-selected', 'true');
                            }
                        } catch (err) {
                            _didIteratorError25 = true;
                            _iteratorError25 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion25 && _iterator25.return) {
                                    _iterator25.return();
                                }
                            } finally {
                                if (_didIteratorError25) {
                                    throw _iteratorError25;
                                }
                            }
                        }

                        addClass(cells, SELECTED_CELL_CLASS);
                        focusCell.setAttribute('tabindex', '0');
                        focusCell.focus();
                    }
                }, {
                    key: 'selectCell',
                    value: function selectCell(element) {
                        this.removeSelectedClass();
                        this.addSelectedClass([element], element);
                    }
                }, {
                    key: 'getSelectedElements',
                    value: function getSelectedElements() {
                        return [].slice.call(this.element.querySelectorAll('.' + SELECTED_CELL_CLASS));
                    }
                }, {
                    key: 'getAllDayRow',
                    value: function getAllDayRow() {
                        return this.element.querySelector('.' + ALLDAY_ROW_CLASS);
                    }
                }, {
                    key: 'getContentTable',
                    value: function getContentTable() {
                        return this.element.querySelector('.' + CONTENT_TABLE_CLASS);
                    }
                }, {
                    key: 'getWorkCellElements',
                    value: function getWorkCellElements() {
                        return [].slice.call(this.element.querySelectorAll('.' + WORK_CELLS_CLASS));
                    }
                }, {
                    key: 'getIndexOfDate',
                    value: function getIndexOfDate(collection, date) {
                        return collection.map(Number).indexOf(+date);
                    }
                }, {
                    key: 'isAllDayCell',
                    value: function isAllDayCell(td) {
                        if (this.currentView === 'Month' || td.classList.contains(ALLDAY_CELLS_CLASS) || td.classList.contains(HEADER_CELLS_CLASS)) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'getDateFromElement',
                    value: function getDateFromElement(td) {
                        if (!isNullOrUndefined(td.getAttribute('data-date'))) {
                            var dateInMS = parseInt(td.getAttribute('data-date'), 10);
                            return new Date(dateInMS);
                        }
                        return undefined;
                    }
                }, {
                    key: 'getCellTemplate',
                    value: function getCellTemplate() {
                        return this.cellTemplateFn;
                    }
                }, {
                    key: 'getDateHeaderTemplate',
                    value: function getDateHeaderTemplate() {
                        return this.dateHeaderTemplateFn;
                    }
                }, {
                    key: 'getAppointmentTemplate',
                    value: function getAppointmentTemplate() {
                        return this.appointmentTemplateFn;
                    }
                }, {
                    key: 'getEventTooltipTemplate',
                    value: function getEventTooltipTemplate() {
                        return this.eventTooltipTemplateFn;
                    }
                }, {
                    key: 'getEditorTemplate',
                    value: function getEditorTemplate() {
                        return this.editorTemplateFn;
                    }
                }, {
                    key: 'onDocumentClick',
                    value: function onDocumentClick(args) {
                        this.notify(documentClick, { event: args });
                    }
                }, {
                    key: 'onScheduleResize',
                    value: function onScheduleResize(args) {
                        if (this.currentView === 'Month') {
                            this.notify(dataReady, {});
                        }
                    }
                }, {
                    key: 'templateParser',
                    value: function templateParser(template) {
                        if (template) {
                            try {
                                if (document.querySelectorAll(template).length) {
                                    return compile(document.querySelector(template).innerHTML.trim());
                                }
                            } catch (error) {
                                return compile(template);
                            }
                        }
                        return undefined;
                    }
                }, {
                    key: 'unwireEvents',
                    value: function unwireEvents() {
                        var resize = 'onorientationchange' in window ? 'orientationchange' : 'resize';
                        EventHandler.remove(window, resize, this.onScheduleResize);
                        EventHandler.remove(document, 'click', this.onDocumentClick);
                        if (this.keyboardInteractionModule) {
                            this.keyboardInteractionModule.destroy();
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'schedule';
                    }
                }, {
                    key: 'getPersistData',
                    value: function getPersistData() {
                        return this.addOnPersist(['currentView', 'selectedDate']);
                    }
                }, {
                    key: 'onPropertyChanged',
                    value: function onPropertyChanged(newProp, oldProp) {
                        var requireRefresh = false;
                        var _iteratorNormalCompletion26 = true;
                        var _didIteratorError26 = false;
                        var _iteratorError26 = undefined;

                        try {
                            for (var _iterator26 = Object.keys(newProp)[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                                var prop = _step26.value;

                                switch (prop) {
                                    case 'width':
                                    case 'height':
                                        this.notify(uiUpdate, {
                                            module: 'scroll',
                                            properties: { width: newProp.width, height: newProp.height }
                                        });
                                        break;
                                    case 'views':
                                        this.setViewOptions();
                                        if (this.headerModule) {
                                            this.headerModule.updateItems();
                                        }
                                        this.changeView(this.currentView, null, true);
                                        break;
                                    case 'currentView':
                                        this.changeView(newProp.currentView, null, true);
                                        break;
                                    case 'selectedDate':
                                        this.changeDate(newProp.selectedDate);
                                        break;
                                    case 'dateFormat':
                                        this.activeViewOptions = this.getActiveViewOptions(this.currentView);
                                        if (this.headerModule) {
                                            this.headerModule.updateDateRange(this.activeView.getDateRangeText());
                                        }
                                        break;
                                    case 'showHeaderBar':
                                        if (this.headerModule) {
                                            this.headerModule.destroy();
                                            this.headerModule = null;
                                        }
                                        if (newProp.showHeaderBar) {
                                            this.headerModule = new HeaderRenderer(this);
                                        }
                                        var cssProps = this.enableRtl ? { border: 'borderLeftWidth', padding: 'paddingLeft' } : { border: 'borderRightWidth', padding: 'paddingRight' };
                                        var uiArgs = { cssProperties: cssProps };
                                        this.notify(scrollUiUpdate, uiArgs);
                                        break;
                                    case 'showWeekend':
                                    case 'workDays':
                                    case 'startHour':
                                    case 'endHour':
                                    case 'workHours':
                                    case 'readonly':
                                        requireRefresh = true;
                                        break;
                                    case 'locale':
                                        this.refresh();
                                        break;
                                    case 'firstDayOfWeek':
                                        if (this.headerModule) {
                                            this.headerModule.setDayOfWeek(newProp.firstDayOfWeek);
                                        }
                                        requireRefresh = true;
                                        break;
                                    case 'showTimeIndicator':
                                        this.activeView.highlightCurrentTime();
                                        break;
                                    case 'cellTemplate':
                                        this.activeViewOptions.cellTemplate = newProp.cellTemplate;
                                        this.cellTemplateFn = this.templateParser(this.activeViewOptions.cellTemplate);
                                        requireRefresh = true;
                                        break;
                                    case 'dateHeaderTemplate':
                                        this.activeViewOptions.dateHeaderTemplate = newProp.dateHeaderTemplate;
                                        this.dateHeaderTemplateFn = this.templateParser(this.activeViewOptions.dateHeaderTemplate);
                                        requireRefresh = true;
                                        break;
                                    case 'eventSettings':
                                        this.onEventSettingsPropertyChanged(newProp.eventSettings, oldProp.eventSettings);
                                        break;
                                    case 'timezone':
                                        this.eventBase.timezonePropertyChange(oldProp.timezone);
                                        break;
                                    case 'enableRtl':
                                        if (this.headerModule) {
                                            this.headerModule.setRtl(this.enableRtl);
                                        }
                                        if (this.enableRtl) {
                                            addClass([this.element], RTL);
                                        } else {
                                            removeClass([this.element], RTL);
                                        }
                                        requireRefresh = true;
                                        break;
                                    default:
                                        this.extendedPropertyChange(prop, newProp, oldProp);
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError26 = true;
                            _iteratorError26 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion26 && _iterator26.return) {
                                    _iterator26.return();
                                }
                            } finally {
                                if (_didIteratorError26) {
                                    throw _iteratorError26;
                                }
                            }
                        }

                        if (requireRefresh) {
                            this.initializeView(this.currentView);
                        }
                    }
                }, {
                    key: 'extendedPropertyChange',
                    value: function extendedPropertyChange(prop, newProp, oldProp) {
                        switch (prop) {
                            case 'cssClass':
                                if (oldProp.cssClass) {
                                    removeClass([this.element], oldProp.cssClass);
                                }
                                if (newProp.cssClass) {
                                    addClass([this.element], newProp.cssClass);
                                }
                                break;
                            case 'hideEmptyAgendaDays':
                            case 'agendaDaysCount':
                                this.activeViewOptions = this.getActiveViewOptions(this.currentView);
                                this.changeView(this.currentView, null, true);
                                break;
                            case 'allowKeyboardInteraction':
                                if (this.keyboardInteractionModule) {
                                    this.keyboardInteractionModule.destroy();
                                    this.keyboardInteractionModule = null;
                                }
                                if (newProp.allowKeyboardInteraction) {
                                    this.keyboardInteractionModule = new KeyboardInteraction(this);
                                }
                                break;
                            case 'editorTemplate':
                                if (!isNullOrUndefined(this.editorTemplate)) {
                                    this.editorTemplateFn = this.templateParser(this.editorTemplate);
                                }
                                this.eventWindow.setDialogContent();
                                break;
                        }
                    }
                }, {
                    key: 'onEventSettingsPropertyChanged',
                    value: function onEventSettingsPropertyChanged(newProp, oldProp) {
                        var requireRefresh = false;
                        var _iteratorNormalCompletion27 = true;
                        var _didIteratorError27 = false;
                        var _iteratorError27 = undefined;

                        try {
                            for (var _iterator27 = Object.keys(newProp)[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                                var prop = _step27.value;

                                switch (prop) {
                                    case 'dataSource':
                                    case 'query':
                                    case 'fields':
                                        this.initializeDataModule();
                                        requireRefresh = true;
                                        break;
                                    case 'template':
                                        this.activeViewOptions.eventTemplate = newProp.template;
                                        this.appointmentTemplateFn = this.templateParser(this.activeViewOptions.eventTemplate);
                                        requireRefresh = true;
                                        break;
                                    case 'enableTooltip':
                                        if (this.eventTooltip) {
                                            this.eventTooltip.destroy();
                                            this.eventTooltip = null;
                                        }
                                        if (newProp.enableTooltip) {
                                            this.eventTooltip = new EventTooltip(this);
                                        }
                                        break;
                                    case 'tooltipTemplate':
                                        this.eventTooltipTemplateFn = this.templateParser(this.eventSettings.tooltipTemplate);
                                        break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError27 = true;
                            _iteratorError27 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion27 && _iterator27.return) {
                                    _iterator27.return();
                                }
                            } finally {
                                if (_didIteratorError27) {
                                    throw _iteratorError27;
                                }
                            }
                        }

                        if (requireRefresh) {
                            this.renderModule.refreshDataManager();
                        }
                    }
                }, {
                    key: 'setWorkHours',
                    value: function setWorkHours(dates, start, end) {
                        var startHour = this.globalize.parseDate(start, { skeleton: 'Hm' });
                        var endHour = this.globalize.parseDate(end, { skeleton: 'Hm' });
                        var tableEle = this.getContentTable();
                        if (isNullOrUndefined(startHour) || isNullOrUndefined(endHour) || !tableEle) {
                            return;
                        }
                        startHour.setMilliseconds(0);
                        endHour.setMilliseconds(0);
                        var viewStartHour = this.activeView.getStartHour();
                        if (startHour < viewStartHour) {
                            startHour = viewStartHour;
                        }
                        if (endHour > this.activeView.getEndHour()) {
                            endHour = this.activeView.getEndHour();
                        }
                        var msMajorInterval = 60 * MS_PER_MINUTE;
                        var msInterval = msMajorInterval / 2;
                        var startIndex = Math.round((getDateInMs(startHour) - getDateInMs(viewStartHour)) / msInterval);
                        var endIndex = Math.ceil((getDateInMs(endHour) - getDateInMs(viewStartHour)) / msInterval);
                        var cells = [];
                        var _iteratorNormalCompletion28 = true;
                        var _didIteratorError28 = false;
                        var _iteratorError28 = undefined;

                        try {
                            for (var _iterator28 = dates[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                                var date = _step28.value;

                                resetTime(date);
                                var colIndex = this.getIndexOfDate(this.activeView.renderDates, date);
                                if (colIndex >= 0) {
                                    for (var i = startIndex; i < endIndex; i++) {
                                        cells.push(tableEle.rows[i].cells[colIndex]);
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError28 = true;
                            _iteratorError28 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion28 && _iterator28.return) {
                                    _iterator28.return();
                                }
                            } finally {
                                if (_didIteratorError28) {
                                    throw _iteratorError28;
                                }
                            }
                        }

                        addClass(cells, WORK_HOURS_CLASS);
                    }
                }, {
                    key: 'getCellDetails',
                    value: function getCellDetails(td) {
                        var startTime = this.getDateFromElement(td);
                        var endTime = void 0;
                        if (td.classList.contains(ALLDAY_CELLS_CLASS) || td.classList.contains(HEADER_CELLS_CLASS)) {
                            endTime = addDays(new Date(startTime.getTime()), 1);
                        } else {
                            endTime = this.activeView.getEndDateFromStartDate(startTime);
                        }
                        var data = {
                            startTime: startTime,
                            endTime: endTime,
                            isAllDay: this.isAllDayCell(td),
                            element: td
                        };
                        return data;
                    }
                }, {
                    key: 'scrollTo',
                    value: function scrollTo(hour) {
                        if (this.activeView.scrollToHour) {
                            this.activeView.scrollToHour(hour);
                        }
                    }
                }, {
                    key: 'addEvent',
                    value: function addEvent(data) {
                        this.crudModule.addEvent(data);
                    }
                }, {
                    key: 'saveEvent',
                    value: function saveEvent(data, currentAction) {
                        this.crudModule.saveEvent(data, currentAction);
                    }
                }, {
                    key: 'deleteEvent',
                    value: function deleteEvent(id, currentAction) {
                        this.crudModule.deleteEvent(id, currentAction);
                    }
                }, {
                    key: 'getEvents',
                    value: function getEvents() {
                        return this.eventsData;
                    }
                }, {
                    key: 'getOccurrencesByID',
                    value: function getOccurrencesByID(eventID) {
                        var occurrenceObj = this.eventBase.getOccurrencesByID(eventID);
                        return occurrenceObj;
                    }
                }, {
                    key: 'getOccurrencesByRange',
                    value: function getOccurrencesByRange(startTime, endTime) {
                        var occurrenceObj = this.eventBase.getOccurrencesByRange(startTime, endTime);
                        return occurrenceObj;
                    }
                }, {
                    key: 'getCurrentViewEvents',
                    value: function getCurrentViewEvents() {
                        return this.eventsProcessed;
                    }
                }, {
                    key: 'refreshEvents',
                    value: function refreshEvents() {
                        this.renderModule.refreshDataManager();
                    }
                }, {
                    key: 'getEventDetails',
                    value: function getEventDetails(element) {
                        var guid = element.getAttribute('data-guid');
                        if (guid) {
                            return this.eventBase.getEventByGuid(guid);
                        }
                        return {};
                    }
                }, {
                    key: 'isSlotAvailable',
                    value: function isSlotAvailable(startTime, endTime) {
                        var getAvailableObject = this.eventBase.filterEvents(startTime, endTime);
                        return getAvailableObject.length ? false : true;
                    }
                }, {
                    key: 'openEditor',
                    value: function openEditor(data, action) {
                        this.eventWindow.openEditor(data, action);
                    }
                }, {
                    key: 'adjustEventWrapper',
                    value: function adjustEventWrapper() {
                        this.activeView.adjustEventWrapper();
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.quickPopup) {
                            this.quickPopup.destroy();
                        }
                        if (this.eventWindow) {
                            this.eventWindow.destroy();
                        }
                        this.unwireEvents();
                        if (this.headerModule) {
                            this.headerModule.destroy();
                            this.headerModule = null;
                        }
                        if (this.scrollModule) {
                            this.scrollModule.destroy();
                        }
                        if (this.activeView) {
                            this.activeView.removeEventListener();
                            this.activeView.destroy();
                            this.activeView = null;
                        }
                        if (this.scheduleTouchModule) {
                            this.scheduleTouchModule.destroy();
                        }
                        _get(Schedule.prototype.__proto__ || Object.getPrototypeOf(Schedule.prototype), 'destroy', this).call(this);
                        this.element.innerHTML = '';
                        removeClass([this.element], ROOT);
                    }
                }]);

                return Schedule;
            }(Component));

            __decorate([Property('auto')], Schedule.prototype, "width", void 0);
            __decorate([Property('auto')], Schedule.prototype, "height", void 0);
            __decorate([Property(true)], Schedule.prototype, "showHeaderBar", void 0);
            __decorate([Property(true)], Schedule.prototype, "showTimeIndicator", void 0);
            __decorate([Property('Week')], Schedule.prototype, "currentView", void 0);
            __decorate([Property(['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'])], Schedule.prototype, "views", void 0);
            __decorate([Property(new Date())], Schedule.prototype, "selectedDate", void 0);
            __decorate([Property()], Schedule.prototype, "dateFormat", void 0);
            __decorate([Property(true)], Schedule.prototype, "showWeekend", void 0);
            __decorate([Property(0)], Schedule.prototype, "firstDayOfWeek", void 0);
            __decorate([Property([1, 2, 3, 4, 5])], Schedule.prototype, "workDays", void 0);
            __decorate([Property('00:00')], Schedule.prototype, "startHour", void 0);
            __decorate([Property('24:00')], Schedule.prototype, "endHour", void 0);
            __decorate([Complex({}, WorkHours)], Schedule.prototype, "workHours", void 0);
            __decorate([Property(true)], Schedule.prototype, "allowKeyboardInteraction", void 0);
            __decorate([Property()], Schedule.prototype, "dateHeaderTemplate", void 0);
            __decorate([Property()], Schedule.prototype, "cellTemplate", void 0);
            __decorate([Property(false)], Schedule.prototype, "readonly", void 0);
            __decorate([Property(true)], Schedule.prototype, "showQuickInfo", void 0);
            __decorate([Property()], Schedule.prototype, "editorTemplate", void 0);
            __decorate([Property(7)], Schedule.prototype, "agendaDaysCount", void 0);
            __decorate([Property(true)], Schedule.prototype, "hideEmptyAgendaDays", void 0);
            __decorate([Property()], Schedule.prototype, "timezone", void 0);
            __decorate([Complex({}, EventSettings)], Schedule.prototype, "eventSettings", void 0);
            __decorate([Property()], Schedule.prototype, "cssClass", void 0);
            __decorate([Property(false)], Schedule.prototype, "enableRtl", void 0);
            __decorate([Event()], Schedule.prototype, "created", void 0);
            __decorate([Event()], Schedule.prototype, "destroyed", void 0);
            __decorate([Event()], Schedule.prototype, "cellClick", void 0);
            __decorate([Event()], Schedule.prototype, "cellDoubleClick", void 0);
            __decorate([Event()], Schedule.prototype, "actionBegin", void 0);
            __decorate([Event()], Schedule.prototype, "actionComplete", void 0);
            __decorate([Event()], Schedule.prototype, "actionFailure", void 0);
            __decorate([Event()], Schedule.prototype, "navigating", void 0);
            __decorate([Event()], Schedule.prototype, "renderCell", void 0);
            __decorate([Event()], Schedule.prototype, "eventClick", void 0);
            __decorate([Event()], Schedule.prototype, "eventRendered", void 0);
            __decorate([Event()], Schedule.prototype, "dataBinding", void 0);
            __decorate([Event()], Schedule.prototype, "popupOpen", void 0);
            __decorate([Event()], Schedule.prototype, "dataBound", void 0);
            _export('Schedule', Schedule = __decorate([NotifyPropertyChanges], Schedule));

            /**
             * view base
             */

            _export('ViewBase', ViewBase = function () {
                /**
                 * Constructor
                 */
                function ViewBase(parent) {
                    var _this12 = this;

                    _classCallCheck(this, ViewBase);

                    this.customHelper = {
                        getDayName: function getDayName(dt) {
                            return _this12.parent.getDayNames('abbreviated')[dt.getDay()];
                        },
                        getDate: function getDate(dt) {
                            return _this12.parent.globalize.formatDate(dt, { format: 'd' });
                        },
                        getTime: function getTime(dt) {
                            if (_this12.parent.isAdaptive) {
                                return _this12.parent.globalize.formatDate(dt, { skeleton: 'h' });
                            }
                            return _this12.parent.globalize.formatDate(dt, { skeleton: 'hm' });
                        }
                    };
                    this.parent = parent;
                    this.l10n = this.parent.localeObj;
                }

                _createClass(ViewBase, [{
                    key: 'createTableLayout',
                    value: function createTableLayout(className) {
                        var clsName = className || '';
                        var table = createElement('table', { className: SCHEDULE_TABLE_CLASS + ' ' + clsName });
                        var tbody = createElement('tbody');
                        table.appendChild(tbody);
                        return table;
                    }
                }, {
                    key: 'renderPanel',
                    value: function renderPanel(type) {
                        if (type === PREVIOUS_PANEL_CLASS) {
                            prepend([this.element], this.parent.element.querySelector('.' + TABLE_CONTAINER_CLASS));
                        } else {
                            this.parent.element.querySelector('.' + TABLE_CONTAINER_CLASS).appendChild(this.element);
                        }
                    }
                }, {
                    key: 'setPanel',
                    value: function setPanel(panel) {
                        this.element = panel;
                    }
                }, {
                    key: 'getPanel',
                    value: function getPanel() {
                        return this.element;
                    }
                }, {
                    key: 'adjustEventWrapper',
                    value: function adjustEventWrapper() {
                        // Here adjust the events wrapper width based in work cells
                    }
                }, {
                    key: 'startDate',
                    value: function startDate() {
                        return this.renderDates[0];
                    }
                }, {
                    key: 'endDate',
                    value: function endDate() {
                        return addDays(this.renderDates[this.renderDates.length - 1], 1);
                    }
                }, {
                    key: 'getStartHour',
                    value: function getStartHour() {
                        var startHour = this.parent.globalize.parseDate(this.parent.activeViewOptions.startHour, { skeleton: 'Hm' });
                        if (isNullOrUndefined(startHour)) {
                            startHour = new Date(2000, 0, 0, 0);
                        }
                        return startHour;
                    }
                }, {
                    key: 'getEndHour',
                    value: function getEndHour() {
                        var endHour = this.parent.globalize.parseDate(this.parent.activeViewOptions.endHour, { skeleton: 'Hm' });
                        if (isNullOrUndefined(endHour)) {
                            endHour = new Date(2000, 0, 0, 0);
                        }
                        return endHour;
                    }
                }, {
                    key: 'isCurrentDate',
                    value: function isCurrentDate(date) {
                        return date.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
                    }
                }, {
                    key: 'isCurrentMonth',
                    value: function isCurrentMonth(date) {
                        return date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth();
                    }
                }, {
                    key: 'isWorkDay',
                    value: function isWorkDay(date) {
                        if (this.parent.activeViewOptions.workDays.indexOf(date.getDay()) >= 0) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'isWorkHour',
                    value: function isWorkHour(date) {
                        var startHour = this.parent.globalize.parseDate(this.parent.workHours.start, { skeleton: 'Hm' });
                        var endHour = this.parent.globalize.parseDate(this.parent.workHours.end, { skeleton: 'Hm' });
                        if (isNullOrUndefined(startHour) || isNullOrUndefined(endHour)) {
                            return false;
                        }
                        startHour.setMilliseconds(0);
                        endHour.setMilliseconds(0);
                        if (getDateInMs(date) < getDateInMs(startHour) || getDateInMs(date) >= getDateInMs(endHour) || !this.isWorkDay(date)) {
                            return false;
                        }
                        return true;
                    }
                }, {
                    key: 'getRenderDates',
                    value: function getRenderDates() {
                        this.renderDates = [];
                        this.renderDates.push(resetTime(this.parent.selectedDate));
                    }
                }, {
                    key: 'getNextPreviousDate',
                    value: function getNextPreviousDate(type) {
                        if (type === 'next') {
                            return addDays(this.parent.selectedDate, WEEK_LENGTH);
                        } else {
                            return addDays(this.parent.selectedDate, -WEEK_LENGTH);
                        }
                    }
                }, {
                    key: 'getLabelText',
                    value: function getLabelText(view) {
                        return this.parent.localeObj.getConstant(view) + ' of ' + this.parent.globalize.formatDate(this.parent.selectedDate, { skeleton: 'long' });
                    }
                }, {
                    key: 'getDateRangeText',
                    value: function getDateRangeText() {
                        if (this.parent.isAdaptive) {
                            return this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
                        }
                        return this.formatDateRange(this.renderDates[0], this.renderDates[this.renderDates.length - 1]);
                    }
                }, {
                    key: 'formatDateRange',
                    value: function formatDateRange(startDate, endDate) {
                        var globalize = this.parent.globalize;
                        if (!isNullOrUndefined(this.parent.activeViewOptions.dateFormat)) {
                            if (!endDate) {
                                return globalize.formatDate(startDate, { format: this.parent.activeViewOptions.dateFormat });
                            }
                            return globalize.formatDate(startDate, { format: this.parent.activeViewOptions.dateFormat }) + ' - ' + globalize.formatDate(endDate, { format: this.parent.activeViewOptions.dateFormat });
                        }
                        var formattedStr = void 0;
                        var longDateFormat = void 0;
                        if (this.parent.locale === 'en' || this.parent.locale === 'en-US') {
                            longDateFormat = getValue('dateFormats.long', getDefaultDateObject());
                        } else {
                            longDateFormat = getValue('main.' + '' + this.parent.locale + '.dates.calendars.gregorian.dateFormats.long', cldrData);
                        }
                        if (!endDate) {
                            return globalize.formatDate(startDate, { format: longDateFormat });
                        }
                        var dateFormat = longDateFormat.trim().toLocaleLowerCase();
                        if (dateFormat.substr(0, 1) === 'd') {
                            if (startDate.getFullYear() === endDate.getFullYear()) {
                                if (startDate.getMonth() === endDate.getMonth()) {
                                    formattedStr = globalize.formatDate(startDate, { format: 'dd' }) + ' - ' + globalize.formatDate(endDate, { format: 'dd MMMM yyyy' });
                                } else {
                                    formattedStr = globalize.formatDate(startDate, { format: 'dd MMM' }) + ' - ' + globalize.formatDate(endDate, { format: 'dd MMM yyyy' });
                                }
                            } else {
                                formattedStr = globalize.formatDate(startDate, { format: 'dd MMM yyyy' }) + ' - ' + globalize.formatDate(endDate, { format: 'dd MMM yyyy' });
                            }
                        } else if (dateFormat.substr(0, 1) === 'm') {
                            if (startDate.getFullYear() === endDate.getFullYear()) {
                                if (startDate.getMonth() === endDate.getMonth()) {
                                    formattedStr = globalize.formatDate(startDate, { format: 'MMMM dd' }) + ' - ' + globalize.formatDate(endDate, { format: 'dd, yyyy' });
                                } else {
                                    formattedStr = globalize.formatDate(startDate, { format: 'MMM dd' }) + ' - ' + globalize.formatDate(endDate, { format: 'MMM dd, yyyy' });
                                }
                            } else {
                                formattedStr = globalize.formatDate(startDate, { format: 'MMM dd, yyyy' }) + ' - ' + globalize.formatDate(endDate, { format: 'MMM dd, yyyy' });
                            }
                        } else {
                            formattedStr = globalize.formatDate(startDate, { format: longDateFormat }) + ' - ' + globalize.formatDate(endDate, { format: longDateFormat });
                        }
                        return formattedStr;
                    }
                }, {
                    key: 'getMobileDateElement',
                    value: function getMobileDateElement(date, className) {
                        var wrap = createElement('div', { className: className });
                        var dateEle = createElement('div', { className: 'e-m-date' });
                        dateEle.innerHTML = this.parent.globalize.formatDate(date, { format: 'd' });
                        var dayEle = createElement('div', { className: 'e-m-day' });
                        dayEle.innerHTML = this.parent.globalize.formatDate(date, { format: 'E' });
                        wrap.appendChild(dateEle);
                        wrap.appendChild(dayEle);
                        return wrap;
                    }
                }]);

                return ViewBase;
            }());

            WorkCellInteraction = function () {
                function WorkCellInteraction(parent) {
                    _classCallCheck(this, WorkCellInteraction);

                    this.parent = parent;
                }

                _createClass(WorkCellInteraction, [{
                    key: 'cellMouseDown',
                    value: function cellMouseDown(e) {
                        this.parent.notify(_cellMouseDown, { event: e });
                    }
                }, {
                    key: 'cellClick',
                    value: function cellClick(e) {
                        if (closest(e.target, '.' + APPOINTMENT_CLASS)) {
                            return;
                        }
                        var navigateEle = closest(e.target, '.' + NAVIGATE_CLASS);
                        if (isNullOrUndefined(navigateEle) || isNullOrUndefined(this.parent.viewOptions.day) || this.parent.currentView === 'Day') {
                            if (this.parent.activeViewOptions.readonly) {
                                return;
                            }
                            var target = e.currentTarget;
                            var isWorkCell = target.classList.contains(WORK_CELLS_CLASS) || target.classList.contains(ALLDAY_CELLS_CLASS);
                            if (isWorkCell && e.shiftKey && e.which === 1 && this.parent.keyboardInteractionModule) {
                                this.parent.keyboardInteractionModule.onMouseSelection(e);
                                return;
                            }
                            this.parent.activeCellsData = this.parent.getCellDetails(target);
                            var args = extend(this.parent.activeCellsData, { cancel: false, event: e, name: 'cellClick' });
                            this.parent.trigger(_cellClick, args);
                            if (args.cancel) {
                                return;
                            }
                            if (isWorkCell) {
                                this.parent.selectCell(target);
                            }
                            this.parent.notify(_cellClick, args);
                        } else {
                            var date = this.parent.getDateFromElement(e.currentTarget);
                            if (!isNullOrUndefined(date) && !this.parent.isAdaptive) {
                                this.parent.setProperties({ selectedDate: date }, true);
                                this.parent.changeView('Day');
                            }
                        }
                    }
                }, {
                    key: 'cellDblClick',
                    value: function cellDblClick(e) {
                        var target = closest(e.target, '.' + APPOINTMENT_CLASS);
                        if (!isNullOrUndefined(target) || this.parent.activeViewOptions.readonly) {
                            return;
                        }
                        var args = extend(this.parent.activeCellsData, { cancel: false, event: e, name: 'cellDoubleClick' });
                        this.parent.trigger(cellDoubleClick, args);
                        if (args.cancel) {
                            return;
                        }
                        this.parent.eventWindow.openEditor(this.parent.activeCellsData, 'Add');
                    }
                }]);

                return WorkCellInteraction;
            }();

            AppointmentRendering = function (_EventBase) {
                _inherits(AppointmentRendering, _EventBase);

                /**
                 * Constructor for vertical view
                 */
                function AppointmentRendering(parent) {
                    _classCallCheck(this, AppointmentRendering);

                    var _this13 = _possibleConstructorReturn(this, (AppointmentRendering.__proto__ || Object.getPrototypeOf(AppointmentRendering)).call(this, parent));

                    _this13.renderedEvents = [];
                    _this13.renderedAllDayEvents = [];
                    _this13.overlapEvents = [];
                    _this13.moreEvents = [];
                    _this13.minorSlotCount = 2;
                    _this13.majorSlot = 60;
                    _this13.allDayLevel = 0;
                    _this13.startHour = _this13.parent.activeView.getStartHour();
                    _this13.endHour = _this13.parent.activeView.getEndHour();
                    _this13.element = _this13.parent.activeView.getPanel();
                    _this13.fields = _this13.parent.eventFields;
                    _this13.animation = new Animation({ progress: _this13.animationUiUpdate.bind(_this13) });
                    _this13.addEventListener();
                    return _this13;
                }

                _createClass(AppointmentRendering, [{
                    key: 'renderAppointments',
                    value: function renderAppointments() {
                        var expandCollapse = this.element.querySelector('.' + ALLDAY_APPOINTMENT_SECTION_CLASS);
                        EventHandler.remove(expandCollapse, 'click', this.rowExpandCollapse);
                        EventHandler.add(expandCollapse, 'click', this.rowExpandCollapse, this);
                        var appointmentWrapper = [].slice.call(this.element.querySelectorAll('.' + APPOINTMENT_CLASS));
                        var _iteratorNormalCompletion29 = true;
                        var _didIteratorError29 = false;
                        var _iteratorError29 = undefined;

                        try {
                            for (var _iterator29 = appointmentWrapper[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                                var wrap = _step29.value;

                                remove(wrap);
                            }
                        } catch (err) {
                            _didIteratorError29 = true;
                            _iteratorError29 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion29 && _iterator29.return) {
                                    _iterator29.return();
                                }
                            } finally {
                                if (_didIteratorError29) {
                                    throw _iteratorError29;
                                }
                            }
                        }

                        var alldayCountWrapper = [].slice.call(this.element.querySelectorAll('.' + ROW_COUNT_WRAPPER_CLASS));
                        var _iteratorNormalCompletion30 = true;
                        var _didIteratorError30 = false;
                        var _iteratorError30 = undefined;

                        try {
                            for (var _iterator30 = alldayCountWrapper[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                                var _wrap = _step30.value;

                                remove(_wrap);
                            }
                        } catch (err) {
                            _didIteratorError30 = true;
                            _iteratorError30 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion30 && _iterator30.return) {
                                    _iterator30.return();
                                }
                            } finally {
                                if (_didIteratorError30) {
                                    throw _iteratorError30;
                                }
                            }
                        }

                        this.allDayElement = [].slice.call(this.element.querySelectorAll('.' + ALLDAY_CELLS_CLASS + ':first-child'));
                        this.setAllDayRowHeight(0);
                        this.renderedEvents = [];
                        this.renderedAllDayEvents = [];
                        var allDayEvents = [];
                        this.dateRender = this.parent.activeView.renderDates;
                        this.cellHeight = this.element.querySelector('.' + WORK_CELLS_CLASS).offsetHeight;
                        var eventsList = this.parent.eventsProcessed;
                        if (eventsList.length > 0) {
                            for (var day = 0, length = this.dateRender.length; day < length; day++) {
                                this.renderedEvents = [];
                                var startDateTime = new Date(this.dateRender[day].getTime());
                                var endDateTime = addDays(this.dateRender[day], 1);
                                var filterEvents = this.filterEvents(startDateTime, endDateTime);
                                for (var count = 0, length1 = filterEvents.length; count < length1; count++) {
                                    var event = filterEvents[count];
                                    if (this.isAllDayAppointment(event)) {
                                        allDayEvents.push(extend({}, event, null, true));
                                    } else {
                                        this.renderVerticalEvents(event, day);
                                    }
                                }
                            }
                            if (allDayEvents.length > 0) {
                                allDayEvents = allDayEvents.filter(function (item, index, arr) {
                                    return index === arr.map(function (item) {
                                        return item.Guid;
                                    }).indexOf(item.Guid);
                                });
                                removeClass(this.allDayElement, ALLDAY_ROW_ANIMATE_CLASS);
                                this.renderAllDayEvents(this.sortByDateTime(allDayEvents));
                            }
                            this.parent.notify(contentReady, {});
                            addClass(this.allDayElement, ALLDAY_ROW_ANIMATE_CLASS);
                        }
                    }
                }, {
                    key: 'createAppointmentElement',
                    value: function createAppointmentElement(record, isAllDay, data) {
                        var fieldMapping = this.parent.eventFields;
                        var appointmentWrapper = createElement('div', {
                            id: 'Appointment_' + record[fieldMapping.id],
                            className: APPOINTMENT_CLASS,
                            attrs: {
                                'data-guid': record.Guid,
                                'role': 'button',
                                'tabindex': '0',
                                'aria-readonly': 'false',
                                'aria-selected': 'false',
                                'aria-grabbed': 'true',
                                'aria-label': isNullOrUndefined(record[fieldMapping.subject]) ? this.parent.eventSettings.fields.subject.default : record[fieldMapping.subject]
                            }
                        });
                        var appointmentDetails = createElement('div', { className: APPOINTMENT_DETAILS });
                        appointmentWrapper.appendChild(appointmentDetails);
                        var templateElement = void 0;
                        var eventData = data;
                        if (!isNullOrUndefined(this.parent.activeViewOptions.eventTemplate)) {
                            templateElement = this.parent.getAppointmentTemplate()(record);
                        } else {
                            var recordSubject = isNullOrUndefined(record[fieldMapping.subject]) ? this.parent.eventSettings.fields.subject.default : record[fieldMapping.subject];
                            var appointmentSubject = createElement('div', {
                                className: APPOINTMENT_SUBJECT,
                                innerHTML: recordSubject
                            });
                            if (isAllDay) {
                                if (record[fieldMapping.isAllDay]) {
                                    templateElement = [appointmentSubject];
                                } else {
                                    templateElement = [];
                                    var appointmentStartTime = createElement('div', {
                                        className: APPOINTMENT_TIME + (this.parent.isAdaptive ? ' ' + DISABLE_CLASS : ''),
                                        innerHTML: this.parent.globalize.formatDate(record[fieldMapping.startTime], { skeleton: 'hm' })
                                    });
                                    var appointmentEndTime = createElement('div', {
                                        className: APPOINTMENT_TIME + (this.parent.isAdaptive ? ' ' + DISABLE_CLASS : ''),
                                        innerHTML: this.parent.globalize.formatDate(record[fieldMapping.endTime], { skeleton: 'hm' })
                                    });
                                    addClass([appointmentSubject], 'e-text-center');
                                    if (!eventData.isLeft) {
                                        templateElement.push(appointmentStartTime);
                                    }
                                    templateElement.push(appointmentSubject);
                                    if (!eventData.isRight) {
                                        templateElement.push(appointmentEndTime);
                                    }
                                }
                            } else {
                                var timeStr = this.parent.globalize.formatDate(record[fieldMapping.startTime], { skeleton: 'hm' }) + ' - ' + this.parent.globalize.formatDate(record[fieldMapping.endTime], { skeleton: 'hm' });
                                var appointmentTime = createElement('div', {
                                    className: APPOINTMENT_TIME + (this.parent.isAdaptive ? ' ' + DISABLE_CLASS : ''),
                                    innerHTML: timeStr
                                });
                                var appointmentLocation = createElement('div', {
                                    className: APPOINTMENT_LOCATION, innerHTML: record[fieldMapping.location]
                                });
                                templateElement = [appointmentSubject, appointmentTime, appointmentLocation];
                            }
                        }
                        append([].slice.call(templateElement), appointmentDetails);
                        if (!isNullOrUndefined(record[fieldMapping.recurrenceRule])) {
                            var iconClass = record[fieldMapping.id] === record[fieldMapping.recurrenceID] ? EVENT_RECURRENCE_ICON_CLASS : EVENT_RECURRENCE_EDIT_ICON_CLASS;
                            var recurrenceIcon = createElement('div', {
                                className: ICON + ' ' + iconClass + (this.parent.isAdaptive ? ' ' + DISABLE_CLASS : '')
                            });
                            isAllDay ? appointmentDetails.appendChild(recurrenceIcon) : appointmentWrapper.appendChild(recurrenceIcon);
                        }
                        if (isAllDay) {
                            this.renderSpannedIcon(appointmentDetails, eventData, isAllDay);
                        } else {
                            this.renderSpannedIcon(appointmentWrapper, eventData, isAllDay);
                        }
                        return appointmentWrapper;
                    }
                }, {
                    key: 'createMoreIndicator',
                    value: function createMoreIndicator(allDayRow, count, currentDay) {
                        var countWrapper = allDayRow[currentDay + count];
                        if (countWrapper.childElementCount <= 0) {
                            var innerCountWrap = createElement('div', {
                                className: ROW_COUNT_WRAPPER_CLASS,
                                id: ROW_COUNT_WRAPPER_CLASS + '-' + (currentDay + count).toString()
                            });
                            var moreIndicatorElement = createElement('div', {
                                className: MORE_INDICATOR_CLASS,
                                attrs: { 'tabindex': '0', 'data-index': (currentDay + count).toString(), 'data-count': '1' },
                                innerHTML: '+1&nbsp;' + (this.parent.isAdaptive ? '' : this.parent.localeObj.getConstant('more'))
                            });
                            innerCountWrap.appendChild(moreIndicatorElement);
                            countWrapper.appendChild(innerCountWrap);
                            EventHandler.add(moreIndicatorElement, 'click', this.rowExpandCollapse, this);
                        } else {
                            var countCell = countWrapper.firstChild;
                            countCell.firstChild.setAttribute('data-count', (parseInt(countCell.firstChild.getAttribute('data-count'), 10) + 1).toString());
                            countCell.firstChild.innerHTML = '+' + parseInt(countCell.firstChild.getAttribute('data-count'), 10).toString() + '&nbsp;' + (this.parent.isAdaptive ? '' : this.parent.localeObj.getConstant('more'));
                        }
                    }
                }, {
                    key: 'renderSpannedIcon',
                    value: function renderSpannedIcon(element, spanEvent, isAllDay) {
                        if (isAllDay) {
                            if (spanEvent.isLeft) {
                                var iconLeft = createElement('div', {
                                    className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_LEFT_CLASS
                                });
                                prepend([iconLeft], element);
                            }
                            if (spanEvent.isRight) {
                                var iconRight = createElement('div', {
                                    className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_RIGHT_CLASS
                                });
                                append([iconRight], element);
                            }
                        } else {
                            if (spanEvent.isTop) {
                                var iconTop = createElement('div', {
                                    className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_UP_CLASS
                                });
                                prepend([iconTop], element);
                            }
                            if (spanEvent.isBottom) {
                                var iconBottom = createElement('div', {
                                    className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_DOWN_CLASS
                                });
                                append([iconBottom], element);
                            }
                        }
                    }
                }, {
                    key: 'isSpannedEvent',
                    value: function isSpannedEvent(record, day) {
                        var currentDate = resetTime(this.dateRender[day]);
                        var fieldMapping = this.parent.eventFields;
                        var startEndHours = getStartEndHours(currentDate, this.startHour, this.endHour);
                        var event = extend({}, record, null, true);
                        event.isSpanned = { isBottom: false, isTop: false };
                        if (record[fieldMapping.startTime].getTime() < startEndHours.startHour.getTime()) {
                            event[fieldMapping.startTime] = startEndHours.startHour;
                            event.isSpanned.isTop = true;
                        }
                        if (record[fieldMapping.endTime].getTime() > startEndHours.endHour.getTime()) {
                            event[fieldMapping.endTime] = startEndHours.endHour;
                            event.isSpanned.isBottom = true;
                        }
                        return event;
                    }
                }, {
                    key: 'renderAllDayEvents',
                    value: function renderAllDayEvents(event) {
                        var _this14 = this;

                        this.moreEvents = [];
                        this.overlapList = [];
                        this.allDayLevel = 0;
                        this.slots = [];
                        this.slots.push(this.dateRender.map(function (date) {
                            return +date;
                        }));
                        for (var day = 0, length = this.dateRender.length; day < length; day++) {
                            var fieldMapping = this.parent.eventFields;
                            var filterEvents = this.filterEvents(new Date(this.dateRender[day].getTime()), addDays(this.dateRender[day], 1), event);
                            var allDayRowCell = this.element.querySelector('.' + ALLDAY_CELLS_CLASS + ':first-child');
                            var eventWrapper = this.element.querySelector('.' + ALLDAY_WRAPPER_CLASS + ':nth-child(' + (day + 1) + ')');

                            var _loop = function _loop(count, length1) {
                                var eventObj = filterEvents[count];
                                var record = _this14.splitEvent(eventObj, _this14.dateRender)[0];
                                var cellTop = allDayRowCell.offsetTop;
                                var eStart = new Date(record[fieldMapping.startTime].getTime());
                                var eEnd = new Date(record[fieldMapping.endTime].getTime());
                                var dates = _this14.dateRender;
                                var appWidth = 0;
                                var topValue = 1;
                                var isDateRange = dates[0].getTime() <= eStart.getTime() && addDays(dates[dates.length - 1], 1).getTime() >= eStart.getTime();
                                if (eStart <= eEnd && isDateRange) {
                                    var isAlreadyRendered = _this14.renderedAllDayEvents.filter(function (event) {
                                        return event.Guid === eventObj.Guid;
                                    });
                                    if (isAlreadyRendered.length === 0) {
                                        var allDayDifference = record.data.count;
                                        var allDayIndex = _this14.getOverlapIndex(record, day, true);
                                        record.Index = allDayIndex;
                                        _this14.allDayLevel = _this14.allDayLevel < allDayIndex ? allDayIndex : _this14.allDayLevel;
                                        var widthAdjustment = record.data.isRight ? 0 : _this14.parent.currentView === 'Day' ? 4 : 7;
                                        if (allDayDifference >= 0) {
                                            appWidth = allDayDifference * 100 - widthAdjustment;
                                        }
                                        _this14.renderedAllDayEvents.push(extend({}, record, null, true));
                                        var allDayRow = [].slice.call(_this14.element.querySelector('.' + ALLDAY_ROW_CLASS).children);
                                        var appointmentElement = _this14.createAppointmentElement(eventObj, true, record.data);
                                        addClass([appointmentElement], ALLDAY_APPOINTMENT_CLASS);
                                        eventWrapper.appendChild(appointmentElement);
                                        var appHeight = appointmentElement.offsetHeight;
                                        topValue += (allDayIndex === 0 ? cellTop : cellTop + allDayIndex * appHeight) + 1;
                                        setStyleAttribute(appointmentElement, { 'width': appWidth + '%', 'top': topValue + 'px' });
                                        var args = { data: eventObj, element: appointmentElement };
                                        _this14.parent.trigger(eventRendered, args);
                                        if (allDayIndex > 1) {
                                            _this14.moreEvents.push(appointmentElement);
                                            for (var _count = 0, _length = allDayDifference; _count < _length; _count++) {
                                                _this14.createMoreIndicator(allDayRow, _count, day);
                                            }
                                        }
                                        allDayRowCell.setAttribute('data-count', _this14.allDayLevel.toString());
                                        var allDayRowHeight = (!_this14.parent.uiStateValues.expand && _this14.allDayLevel > 2 ? 3 * appHeight : (_this14.allDayLevel + 1) * appHeight) + 4;
                                        _this14.setAllDayRowHeight(allDayRowHeight);
                                        _this14.addOrRemoveClass();
                                        _this14.wireAppointmentEvents(appointmentElement);
                                    }
                                }
                            };

                            for (var count = 0, length1 = filterEvents.length; count < length1; count++) {
                                _loop(count, length1);
                            }
                        }
                    }
                }, {
                    key: 'renderVerticalEvents',
                    value: function renderVerticalEvents(eventObj, day) {
                        var record = this.isSpannedEvent(eventObj, day);
                        var eStart = record[this.fields.startTime];
                        var eEnd = record[this.fields.endTime];
                        var appWidth = '0%';
                        var appLeft = '0%';
                        var topValue = 0;
                        var isDateRange = this.dateRender[0].getTime() <= eStart.getTime() && addDays(this.dateRender[this.dateRender.length - 1], 1).getTime() >= eStart.getTime();
                        if (eStart < eEnd && isDateRange) {
                            var appHeight = 0;
                            var startEndHours = getStartEndHours(resetTime(this.dateRender[day]), this.startHour, this.endHour);
                            if (startEndHours.endHour.getTime() <= eEnd.getTime() && startEndHours.startHour.getTime() >= eStart.getTime()) {
                                appHeight = this.getAppointmentHeight(this.cellHeight, startEndHours.startHour, startEndHours.endHour);
                            } else if (startEndHours.endHour.getTime() <= eEnd.getTime()) {
                                appHeight = this.getAppointmentHeight(this.cellHeight, eStart, startEndHours.endHour);
                            } else if (startEndHours.startHour.getTime() >= eStart.getTime()) {
                                appHeight = this.getAppointmentHeight(this.cellHeight, startEndHours.startHour, eEnd);
                            } else {
                                appHeight = (eEnd.getTime() - eStart.getTime()) / (60 * 1000) * (this.cellHeight * this.minorSlotCount) / this.majorSlot;
                            }
                            appHeight = appHeight < this.cellHeight ? this.cellHeight : appHeight;
                            if (eStart.getTime() > startEndHours.startHour.getTime()) {
                                topValue = this.getTopValue(eStart, day);
                            }
                            var appIndex = this.getOverlapIndex(record, day, false);
                            record.Index = appIndex;
                            this.overlapList.push(record);
                            if (this.overlapList.length > 1) {
                                isNullOrUndefined(this.overlapEvents[appIndex]) ? this.overlapEvents[appIndex] = [record] : this.overlapEvents[appIndex].push(record);
                            } else {
                                this.overlapEvents = [];
                                this.overlapEvents.push([record]);
                            }
                            var width = this.parent.currentView === 'Day' ? 97 : 94;
                            appWidth = (width - this.overlapEvents.length) / this.overlapEvents.length + '%';
                            var argsData = { index: appIndex, left: appLeft, width: appWidth, day: day, record: record };
                            var tempData = this.adjustOverlapElements(argsData);
                            appWidth = tempData.appWidth;
                            this.renderedEvents.push(extend({}, record, null, true));
                            var appointmentWrap = [].slice.call(this.element.querySelector('.' + APPOINTMENT_WRAPPER_CLASS).children);
                            var appointmentElement = this.createAppointmentElement(eventObj, false, record.isSpanned);
                            setStyleAttribute(appointmentElement, { 'width': tempData.appWidth, 'height': appHeight + 'px', 'top': topValue + 'px' });
                            var iconHeight = appointmentElement.querySelectorAll('.' + EVENT_INDICATOR_CLASS).length * 15;
                            var maxHeight = appHeight - 40 - iconHeight;
                            if (!this.parent.isAdaptive && appointmentElement.querySelector('.' + APPOINTMENT_SUBJECT)) {
                                appointmentElement.querySelector('.' + APPOINTMENT_SUBJECT).style.maxHeight = maxHeight + 'px';
                            }
                            if (this.parent.enableRtl) {
                                setStyleAttribute(appointmentElement, { 'right': tempData.appLeft });
                            } else {
                                setStyleAttribute(appointmentElement, { 'left': tempData.appLeft });
                            }
                            appointmentWrap[argsData.day].appendChild(appointmentElement);
                            var args = { data: eventObj, element: appointmentElement };
                            this.parent.trigger(eventRendered, args);
                            this.wireAppointmentEvents(appointmentElement);
                        }
                    }
                }, {
                    key: 'getTopValue',
                    value: function getTopValue(date, day) {
                        var startEndHours = getStartEndHours(resetTime(this.dateRender[day]), this.startHour, this.endHour);
                        var startHour = startEndHours.startHour;
                        var diffInMinutes = (date.getHours() - startHour.getHours()) * 60 + (date.getMinutes() - startHour.getMinutes());
                        return diffInMinutes * this.cellHeight * this.minorSlotCount / this.majorSlot;
                    }
                }, {
                    key: 'getAppointmentHeight',
                    value: function getAppointmentHeight(cellHeight, startDate, endDate) {
                        return (endDate.getTime() - startDate.getTime()) / (1000 * 60) / (this.majorSlot / this.minorSlotCount) * cellHeight;
                    }
                }, {
                    key: 'getOverlapIndex',
                    value: function getOverlapIndex(record, day, isAllDay) {
                        var _this15 = this;

                        var fieldMapping = this.parent.eventFields;
                        var eventsList = void 0;
                        this.overlapEvents = [];
                        if (isAllDay) {
                            var date = new Date(this.dateRender[day].getTime());
                            eventsList = this.renderedAllDayEvents.filter(function (app) {
                                return resetTime(app[fieldMapping.startTime]).getTime() <= resetTime(date).getTime() && resetTime(app[fieldMapping.endTime]).getTime() >= resetTime(date).getTime();
                            });
                        } else {
                            var appointmentList = this.renderedEvents;
                            var appointment = [];
                            this.overlapList = appointmentList.filter(function (obj) {
                                return obj[fieldMapping.endTime] > record[fieldMapping.startTime] && obj[fieldMapping.startTime] < record[fieldMapping.endTime];
                            });
                            this.overlapList.forEach(function (obj) {
                                var filterList = appointmentList.filter(function (list) {
                                    return list[fieldMapping.endTime] >= obj[fieldMapping.startTime] && list[fieldMapping.startTime] <= obj[fieldMapping.endTime];
                                });
                                var collection = _this15.overlapList.filter(function (val) {
                                    return filterList.indexOf(val) === -1;
                                });
                                return appointment.concat(collection);
                            });
                            this.overlapList = this.overlapList.concat(appointment);
                            eventsList = this.overlapList.filter(function (obj) {
                                return obj[fieldMapping.endTime] > record[fieldMapping.startTime] && obj[fieldMapping.startTime] < record[fieldMapping.endTime];
                            });
                            var _iteratorNormalCompletion31 = true;
                            var _didIteratorError31 = false;
                            var _iteratorError31 = undefined;

                            try {
                                for (var _iterator31 = eventsList[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                                    var event = _step31.value;

                                    var _record = event;
                                    var index = _record.Index;
                                    isNullOrUndefined(this.overlapEvents[index]) ? this.overlapEvents[index] = [event] : this.overlapEvents[index].push(event);
                                }
                            } catch (err) {
                                _didIteratorError31 = true;
                                _iteratorError31 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion31 && _iterator31.return) {
                                        _iterator31.return();
                                    }
                                } finally {
                                    if (_didIteratorError31) {
                                        throw _iteratorError31;
                                    }
                                }
                            }
                        }
                        var appIndex = void 0;
                        if (eventsList.length > 0) {
                            var appLevel = eventsList.map(function (obj) {
                                return obj.Index;
                            });
                            appIndex = appLevel.length > 0 ? this.getSmallestMissingNumber(appLevel) : 0;
                        } else {
                            appIndex = -1;
                        }
                        return appIndex === -1 ? 0 : appIndex;
                    }
                }, {
                    key: 'adjustOverlapElements',
                    value: function adjustOverlapElements(args) {
                        var data = { appWidth: args.width, appLeft: args.left };
                        for (var i = 0, length1 = this.overlapEvents.length; i < length1; i++) {
                            if (!isNullOrUndefined(this.overlapEvents[i])) {
                                for (var j = 0, length2 = this.overlapEvents[i].length; j < length2; j++) {
                                    var element = this.element.querySelector('#e-appointment-wrapper-' + args.day);
                                    if (element.childElementCount > 0) {
                                        var eleGuid = this.overlapEvents[i][j].Guid;
                                        if (element.querySelectorAll('div[data-guid="' + eleGuid + '"]').length > 0 && eleGuid !== args.record.Guid) {
                                            var apps = element.querySelector('div[data-guid="' + eleGuid + '"]');
                                            if (parseFloat(args.width) <= parseFloat(apps.style.width)) {
                                                this.parent.enableRtl ? apps.style.right = (parseFloat(args.width) + 1) * i + '%' : apps.style.left = (parseFloat(args.width) + 1) * i + '%';
                                                apps.style.width = parseFloat(args.width) + '%';
                                                data.appWidth = apps.style.width;
                                            }
                                        } else {
                                            var _appWidth = args.width;
                                            if (isNullOrUndefined(this.overlapEvents[i - 1])) {
                                                var width = this.parent.currentView === 'Day' ? 97 : 94;
                                                _appWidth = (width - this.overlapEvents.length) / this.overlapEvents.length + '%';
                                            }
                                            var leftPosition = (parseInt(_appWidth, 0) + 1) * args.index + '%';
                                            data.appWidth = _appWidth;
                                            data.appLeft = leftPosition;
                                        }
                                    }
                                }
                            }
                        }
                        return data;
                    }
                }, {
                    key: 'setAllDayRowHeight',
                    value: function setAllDayRowHeight(height) {
                        var _iteratorNormalCompletion32 = true;
                        var _didIteratorError32 = false;
                        var _iteratorError32 = undefined;

                        try {
                            for (var _iterator32 = this.allDayElement[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
                                var element = _step32.value;

                                element.style.height = height / 12 + 'em';
                            }
                        } catch (err) {
                            _didIteratorError32 = true;
                            _iteratorError32 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion32 && _iterator32.return) {
                                    _iterator32.return();
                                }
                            } finally {
                                if (_didIteratorError32) {
                                    throw _iteratorError32;
                                }
                            }
                        }

                        this.animation.animate(this.allDayElement[0]);
                    }
                }, {
                    key: 'addOrRemoveClass',
                    value: function addOrRemoveClass() {
                        var _this16 = this;

                        this.moreEvents.filter(function (element) {
                            if (!_this16.parent.uiStateValues.expand && _this16.allDayLevel > 2) {
                                addClass([element], EVENT_COUNT_CLASS);
                                element.setAttribute('tabindex', '-1');
                            } else {
                                removeClass([element], EVENT_COUNT_CLASS);
                                element.setAttribute('tabindex', '0');
                            }
                        });
                        var moreEventCount = this.element.querySelector('.' + ALLDAY_APPOINTMENT_SECTION_CLASS);
                        if (this.parent.uiStateValues.expand) {
                            removeClass([moreEventCount], APPOINTMENT_ROW_EXPAND_CLASS);
                            addClass([moreEventCount], APPOINTMENT_ROW_COLLAPSE_CLASS);
                        } else {
                            removeClass([moreEventCount], APPOINTMENT_ROW_COLLAPSE_CLASS);
                            addClass([moreEventCount], APPOINTMENT_ROW_EXPAND_CLASS);
                        }
                        this.allDayLevel > 2 ? removeClass([moreEventCount], DISABLE_CLASS) : addClass([moreEventCount], DISABLE_CLASS);
                        var countCell = [].slice.call(this.element.querySelectorAll('.' + ROW_COUNT_WRAPPER_CLASS));
                        countCell.filter(function (element) {
                            !_this16.parent.uiStateValues.expand && _this16.allDayLevel > 2 ? removeClass([element], DISABLE_CLASS) : addClass([element], DISABLE_CLASS);
                        });
                    }
                }, {
                    key: 'getEventHeight',
                    value: function getEventHeight() {
                        var eventElement = createElement('div', { className: APPOINTMENT_CLASS, styles: 'visibility:hidden' });
                        var eventWrapper = this.element.querySelector('.' + ALLDAY_WRAPPER_CLASS + ':first-child');
                        eventWrapper.appendChild(eventElement);
                        var height = eventElement.offsetHeight;
                        eventElement.remove();
                        return height;
                    }
                }, {
                    key: 'rowExpandCollapse',
                    value: function rowExpandCollapse(event) {
                        var target = this.element.querySelector('.' + ALLDAY_APPOINTMENT_SECTION_CLASS);
                        this.parent.uiStateValues.expand = target.classList.contains(APPOINTMENT_ROW_EXPAND_CLASS);
                        var rowHeight = void 0;
                        if (this.parent.uiStateValues.expand) {
                            target.setAttribute('title', 'Collapse-all-day-section');
                            target.setAttribute('aria-label', 'Collapse section');
                            rowHeight = (this.allDayLevel + 1) * this.getEventHeight() + 4;
                        } else {
                            target.setAttribute('title', 'Expand-all-day-section');
                            target.setAttribute('aria-label', 'Expand section');
                            rowHeight = 3 * this.getEventHeight() + 4;
                        }
                        this.setAllDayRowHeight(rowHeight);
                        this.addOrRemoveClass();
                        this.animation.animate(target);
                    }
                }, {
                    key: 'animationUiUpdate',
                    value: function animationUiUpdate() {
                        this.parent.notify(contentReady, {});
                    }
                }]);

                return AppointmentRendering;
            }(EventBase);

            DATE_HEADER_TEMPLATE = '<div class="e-header-day">${getDayName(date)}</div>' + '<div class="e-header-date e-navigate" role="link">${getDate(date)}</div>';
            MAJOR_SLOT_TEMPLATE = '<span>${getTime(date)}</span>';
            MINOR_SLOT_TEMPLATE = '&nbsp;';

            VerticalView = function (_ViewBase) {
                _inherits(VerticalView, _ViewBase);

                /**
                 * Constructor for vertical view
                 */
                function VerticalView(parent) {
                    _classCallCheck(this, VerticalView);

                    var _this17 = _possibleConstructorReturn(this, (VerticalView.__proto__ || Object.getPrototypeOf(VerticalView)).call(this, parent));

                    _this17.currentDateIndex = 0;
                    _this17.minorSlotCount = 2;
                    _this17.majorSlot = 60;
                    _this17.viewClass = 'e-day-view';
                    _this17.isInverseTableSelect = true;
                    _this17.workCellAction = new WorkCellInteraction(parent);
                    return _this17;
                }

                _createClass(VerticalView, [{
                    key: 'addEventListener',
                    value: function addEventListener() {
                        this.parent.on(scrollUiUpdate, this.scrollUiUpdate, this);
                        this.parent.on(dataReady, this.renderEvents, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        this.parent.off(scrollUiUpdate, this.scrollUiUpdate);
                        this.parent.off(dataReady, this.renderEvents);
                    }
                }, {
                    key: 'renderEvents',
                    value: function renderEvents() {
                        var appointment = new AppointmentRendering(this.parent);
                        appointment.renderAppointments();
                    }
                }, {
                    key: 'onContentScroll',
                    value: function onContentScroll(e) {
                        var target = e.target;
                        this.getTimeCellsElement().scrollTop = target.scrollTop;
                        this.getDatesHeaderElement().firstChild.scrollLeft = target.scrollLeft;
                        this.parent.uiStateValues.top = target.scrollTop;
                        this.parent.uiStateValues.left = target.scrollLeft;
                        this.parent.quickPopup.quickPopup.close();
                    }
                }, {
                    key: 'scrollUiUpdate',
                    value: function scrollUiUpdate(args) {
                        var headerHeight = 0;
                        if (this.parent.headerModule) {
                            headerHeight += this.parent.headerModule.getHeaderElement().offsetHeight;
                        }
                        var timecells = this.getTimeCellsElement();
                        var content = this.getScrollableElement();
                        var header = this.getDatesHeaderElement();
                        // if (this.parent.isAdaptive) {
                        //     content.style.height = 'auto';
                        // } else {
                        //     timecells.style.height = content.style.height = 'auto';
                        // }
                        var scrollerHeight = formatUnit(this.parent.element.offsetHeight - headerHeight - header.offsetHeight - 2);
                        if (this.parent.isAdaptive) {
                            content.style.height = scrollerHeight;
                        } else {
                            timecells.style.height = content.style.height = scrollerHeight;
                        }
                        var scrollBarWidth = getScrollBarWidth();
                        // tslint:disable:no-any
                        if (content.offsetWidth - content.clientWidth > 0) {
                            header.firstChild.style[args.cssProperties.border] = scrollBarWidth > 0 ? '1px' : '0px';
                            header.style[args.cssProperties.padding] = scrollBarWidth > 0 ? scrollBarWidth - 1 + 'px' : '0px';
                        } else {
                            header.firstChild.style[args.cssProperties.border] = '';
                            header.style[args.cssProperties.padding] = '';
                        }
                        // tslint:enable:no-any
                        timecells.style.paddingBottom = content.offsetHeight - content.clientHeight > 0 ? formatUnit(scrollBarWidth) : '';
                        if (this.parent.uiStateValues.isInitial) {
                            this.scrollToWorkHour();
                            this.parent.uiStateValues.isInitial = false;
                        } else {
                            this.getScrollableElement().scrollTop = this.parent.uiStateValues.top;
                        }
                    }
                }, {
                    key: 'scrollToWorkHour',
                    value: function scrollToWorkHour() {
                        if (this.parent.workHours.highlight) {
                            var firstWorkHourCell = this.element.querySelector('.' + WORK_HOURS_CLASS);
                            if (firstWorkHourCell) {
                                this.getScrollableElement().scrollTop = firstWorkHourCell.offsetTop;
                                this.parent.uiStateValues.top = firstWorkHourCell.offsetTop;
                                this.parent.uiStateValues.left = 0;
                            }
                        }
                    }
                }, {
                    key: 'scrollToHour',
                    value: function scrollToHour(hour) {
                        var date = this.parent.globalize.parseDate(hour, { skeleton: 'Hm' });
                        if (isNullOrUndefined(date)) {
                            return;
                        }
                        this.getScrollableElement().scrollTop = this.getTopFromDateTime(date);
                    }
                }, {
                    key: 'generateColLevels',
                    value: function generateColLevels() {
                        var columns = this.renderDates;
                        var colLevels = [];
                        var level = [];
                        var _iteratorNormalCompletion33 = true;
                        var _didIteratorError33 = false;
                        var _iteratorError33 = undefined;

                        try {
                            for (var _iterator33 = columns[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                                var col = _step33.value;

                                var classList = [HEADER_CELLS_CLASS];
                                if (this.isCurrentDate(col)) {
                                    classList.push(CURRENT_DAY_CLASS);
                                }
                                level.push({ date: col, type: 'dateHeader', className: classList });
                            }
                        } catch (err) {
                            _didIteratorError33 = true;
                            _iteratorError33 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion33 && _iterator33.return) {
                                    _iterator33.return();
                                }
                            } finally {
                                if (_didIteratorError33) {
                                    throw _iteratorError33;
                                }
                            }
                        }

                        colLevels.push(level);
                        return colLevels;
                    }
                }, {
                    key: 'isWorkHourRange',
                    value: function isWorkHourRange(date) {
                        return this.getStartHour().getTime() <= date.getTime() && this.getEndHour().getTime() >= date.getTime();
                    }
                }, {
                    key: 'highlightCurrentTime',
                    value: function highlightCurrentTime() {
                        var _this18 = this;

                        if (this.parent.showTimeIndicator && this.isWorkHourRange(new Date())) {
                            var flag = false;
                            for (var i = 0; i < this.renderDates.length; i++) {
                                if (this.isCurrentDate(this.renderDates[i])) {
                                    flag = true;
                                    this.currentDateIndex = i;
                                    break;
                                }
                            }
                            if (flag) {
                                this.changeCurrentTimePosition();
                                if (isNullOrUndefined(this.currentTimeIndicatorTimer)) {
                                    this.currentTimeIndicatorTimer = window.setInterval(function () {
                                        _this18.changeCurrentTimePosition();
                                    }, MS_PER_MINUTE);
                                }
                            } else {
                                this.clearCurrentTimeIndicatorTimer();
                            }
                        } else {
                            this.clearCurrentTimeIndicatorTimer();
                        }
                    }
                }, {
                    key: 'clearCurrentTimeIndicatorTimer',
                    value: function clearCurrentTimeIndicatorTimer() {
                        if (!isNullOrUndefined(this.currentTimeIndicatorTimer)) {
                            window.clearInterval(this.currentTimeIndicatorTimer);
                            this.currentTimeIndicatorTimer = null;
                            this.removeCurrentTimeIndicatorElements();
                        }
                    }
                }, {
                    key: 'removeCurrentTimeIndicatorElements',
                    value: function removeCurrentTimeIndicatorElements() {
                        var currentTimeEle = this.element.querySelector('.' + CURRENT_TIME_CLASS);
                        var timelineEle = this.element.querySelector('.' + TIMELINE_WRAPPER_CLASS);
                        if (currentTimeEle) {
                            remove(currentTimeEle);
                        }
                        if (timelineEle) {
                            remove(timelineEle);
                        }
                    }
                }, {
                    key: 'changeCurrentTimePosition',
                    value: function changeCurrentTimePosition() {
                        if (this.parent.isDestroyed) {
                            return;
                        }
                        this.removeCurrentTimeIndicatorElements();
                        var firstRow = this.parent.getContentTable().rows[0];
                        var firstCell = firstRow.cells[0];
                        var currentCell = firstRow.cells[this.currentDateIndex];
                        var cellWidth = 100 / firstRow.cells.length;
                        var prevLineWidth = cellWidth * (currentCell.cellIndex - firstCell.cellIndex) + '%';
                        var currentLineWidth = cellWidth + '%';
                        var top = this.getTopFromDateTime(new Date());
                        var topInPx = formatUnit(top);
                        var timeCellsWrap = this.getTimeCellsElement();
                        var rowIndex = Math.floor(top / firstCell.offsetHeight);
                        if (isNullOrUndefined(rowIndex)) {
                            return;
                        }
                        removeClass(timeCellsWrap.querySelectorAll('.' + HIDE_CHILDS_CLASS), HIDE_CHILDS_CLASS);
                        addClass([timeCellsWrap.querySelectorAll('tr')[rowIndex].lastChild], HIDE_CHILDS_CLASS);
                        var timelineWrap = createElement('div', { className: TIMELINE_WRAPPER_CLASS });
                        var previousDateTimelineEle = createElement('div', {
                            className: PREVIOUS_TIMELINE_CLASS,
                            styles: 'width:' + formatUnit(prevLineWidth) + '; left: 0; right: 0; top:' + topInPx
                        });
                        var currentDateTimelineEle = createElement('div', {
                            className: CURRENT_TIMELINE_CLASS,
                            styles: 'width:' + currentLineWidth + '; ' + (this.parent.enableRtl ? 'right:' : 'left:') + prevLineWidth + ';top:' + topInPx
                        });
                        var currentTimeEle = createElement('div', {
                            innerHTML: this.parent.globalize.formatDate(new Date(), { skeleton: 'hm' }),
                            className: CURRENT_TIME_CLASS,
                            styles: 'width: 100%; position: absolute; left: 0; right: 0; top:' + topInPx
                        });
                        prepend([currentTimeEle], timeCellsWrap);
                        currentTimeEle.style.top = formatUnit(currentTimeEle.offsetTop - currentTimeEle.offsetHeight / 2);
                        prepend([previousDateTimelineEle, currentDateTimelineEle], timelineWrap);
                        prepend([timelineWrap], this.getContentAreaElement().querySelector('.' + WRAPPER_CLASS));
                    }
                }, {
                    key: 'getTopFromDateTime',
                    value: function getTopFromDateTime(date) {
                        var startHour = this.getStartHour();
                        var diffInMinutes = (date.getHours() - startHour.getHours()) * 60 + (date.getMinutes() - startHour.getMinutes());
                        return diffInMinutes * this.getWorkCellHeight() * this.minorSlotCount / this.majorSlot;
                    }
                }, {
                    key: 'getWorkCellHeight',
                    value: function getWorkCellHeight() {
                        return this.element.querySelector('.e-work-cells').offsetHeight;
                    }
                }, {
                    key: 'getTdContent',
                    value: function getTdContent(date, type) {
                        var cntEle = void 0;
                        switch (type) {
                            case 'dateHeader':
                                if (this.parent.activeViewOptions.dateHeaderTemplate) {
                                    var args = { date: date, type: type };
                                    cntEle = this.parent.getDateHeaderTemplate()(args);
                                } else {
                                    cntEle = compile(DATE_HEADER_TEMPLATE, this.customHelper)({ date: date });
                                }
                                break;
                            case 'majorSlot':
                                cntEle = compile(MAJOR_SLOT_TEMPLATE, this.customHelper)({ date: date });
                                break;
                            case 'minorSlot':
                                cntEle = compile(MINOR_SLOT_TEMPLATE, this.customHelper)({ date: date });
                                break;
                            case 'alldayCells':
                                if (this.parent.cellTemplate) {
                                    var _args = { date: date, type: type };
                                    cntEle = this.parent.getCellTemplate()(_args);
                                }
                                break;
                        }
                        return cntEle;
                    }
                }, {
                    key: 'renderLayout',
                    value: function renderLayout(type) {
                        this.setPanel(createElement('div', { className: TABLE_WRAP_CLASS }));
                        var clsList = ['e-vertical-view', this.viewClass];
                        clsList.push(type);
                        this.renderPanel(type);
                        addClass([this.element], clsList);
                        this.element.appendChild(this.createTableLayout(OUTER_TABLE_CLASS));
                        this.colLevels = this.generateColLevels();
                        this.renderHeader();
                        this.renderContent();
                        this.highlightCurrentTime();
                        this.parent.notify(contentReady, {});
                    }
                }, {
                    key: 'renderHeader',
                    value: function renderHeader() {
                        var tr = createElement('tr');
                        var indentTd = createElement('td', { className: LEFT_INDENT_CLASS });
                        var dateTd = createElement('td');
                        indentTd.appendChild(this.renderLeftIndent());
                        dateTd.appendChild(this.renderDatesHeader());
                        tr.appendChild(indentTd);
                        tr.appendChild(dateTd);
                        prepend([tr], this.element.querySelector('tbody'));
                    }
                }, {
                    key: 'renderContent',
                    value: function renderContent() {
                        var tr = createElement('tr');
                        var workTd = createElement('td');
                        if (this.parent.isAdaptive) {
                            workTd.setAttribute('colspan', '2');
                            var scrollContainer = createElement('div', { className: SCROLL_CONTAINER_CLASS });
                            scrollContainer.appendChild(this.renderTimeCells());
                            scrollContainer.appendChild(this.renderContentArea());
                            workTd.appendChild(scrollContainer);
                            tr.appendChild(workTd);
                        } else {
                            var timesTd = createElement('td');
                            timesTd.appendChild(this.renderTimeCells());
                            workTd.appendChild(this.renderContentArea());
                            tr.appendChild(timesTd);
                            tr.appendChild(workTd);
                        }
                        this.element.querySelector('tbody').appendChild(tr);
                    }
                }, {
                    key: 'renderLeftIndent',
                    value: function renderLeftIndent() {
                        var wrap = createElement('div', { className: LEFT_INDENT_WRAP_CLASS });
                        var tbl = this.createTableLayout();
                        var trEle = createElement('tr');
                        var rowCount = this.colLevels.length;
                        for (var i = 0; i < rowCount; i++) {
                            var _ntr = trEle.cloneNode();
                            var level = this.colLevels[i];
                            var _data = { className: [level[0].className[0]], type: 'emptyCells' };
                            _ntr.appendChild(this.createTd(_data));
                            tbl.querySelector('tbody').appendChild(_ntr);
                        }
                        var ntr = trEle.cloneNode();
                        var appointmentExpandCollapse = createElement('div', {
                            attrs: { 'tabindex': '0', title: 'Expand-all-day-section', 'aria-disabled': 'false', 'aria-label': 'Expand section' },
                            className: ALLDAY_APPOINTMENT_SECTION_CLASS + ' ' + APPOINTMENT_ROW_EXPAND_CLASS + ' ' + ICON + ' ' + DISABLE_CLASS
                        });
                        var data = { className: [ALLDAY_CELLS_CLASS], type: 'emptyCells' };
                        var nth = this.createTd(data);
                        nth.appendChild(appointmentExpandCollapse);
                        ntr.appendChild(nth);
                        tbl.querySelector('tbody').appendChild(ntr);
                        wrap.appendChild(tbl);
                        return wrap;
                    }
                }, {
                    key: 'renderDatesHeader',
                    value: function renderDatesHeader() {
                        var container = createElement('div', { className: DATE_HEADER_CONTAINER_CLASS });
                        var wrap = createElement('div', { className: DATE_HEADER_WRAP_CLASS });
                        var innerWrap = createElement('div', { className: ALLDAY_APPOINTMENT_WRAPPER_CLASS });
                        container.appendChild(wrap);
                        var tbl = this.createTableLayout();
                        var trEle = createElement('tr');
                        var rowCount = this.colLevels.length;
                        var lastLevel = this.colLevels[rowCount - 1];
                        for (var i = 0; i < rowCount; i++) {
                            var _ntr2 = trEle.cloneNode();
                            addClass([_ntr2], HEADER_ROW_CLASS);
                            var level = this.colLevels[i];
                            var colspan = lastLevel.length / level.length;
                            for (var j = 0; j < level.length; j++) {
                                var td = level[j];
                                td.colSpan = colspan;
                                _ntr2.appendChild(this.createTd(td));
                            }
                            tbl.querySelector('tbody').appendChild(_ntr2);
                        }
                        var ntr = trEle.cloneNode();
                        addClass([ntr], ALLDAY_ROW_CLASS);
                        for (var _j = 0; _j < lastLevel.length; _j++) {
                            var _td = extend({}, lastLevel[_j]);
                            _td.className = [ALLDAY_CELLS_CLASS];
                            _td.type = 'alldayCells';
                            var ntd = this.createTd(_td);
                            ntd.setAttribute('data-date', _td.date.getTime().toString());
                            ntd.setAttribute('data-index', _j.toString());
                            var appointmentWrap = createElement('div', {
                                id: ALLDAY_APPOINTMENT_WRAPPER_CLASS + '-' + _j.toString(),
                                className: ALLDAY_WRAPPER_CLASS,
                                attrs: { 'data-index': _j.toString() },
                                styles: 'width:calc(' + 100 / this.renderDates.length + '%)'
                            });
                            innerWrap.appendChild(appointmentWrap);
                            this.wireCellEvents(ntd);
                            ntr.appendChild(ntd);
                        }
                        tbl.querySelector('tbody').appendChild(ntr);
                        wrap.appendChild(innerWrap);
                        wrap.appendChild(tbl);
                        return container;
                    }
                }, {
                    key: 'createTd',
                    value: function createTd(td) {
                        var tdEle = createElement('th');
                        if (td.className) {
                            addClass([tdEle], td.className);
                        }
                        if (td.date && td.type) {
                            var ele = this.getTdContent(td.date, td.type);
                            if (ele && ele.length) {
                                append([].slice.call(ele), tdEle);
                            }
                        }
                        if (td.type === 'dateHeader' && td.className.indexOf(HEADER_CELLS_CLASS) >= 0) {
                            tdEle.setAttribute('data-date', td.date.getTime().toString());
                            EventHandler.add(tdEle, 'click', this.workCellAction.cellClick, this);
                            EventHandler.add(tdEle, 'dblclick', this.workCellAction.cellDblClick, this);
                        }
                        var args = { elementType: td.type, element: tdEle, date: td.date };
                        this.parent.trigger(renderCell, args);
                        return tdEle;
                    }
                }, {
                    key: 'wireCellEvents',
                    value: function wireCellEvents(element) {
                        EventHandler.add(element, 'mousedown', this.workCellAction.cellMouseDown, this);
                        EventHandler.add(element, 'click', this.workCellAction.cellClick, this);
                        EventHandler.add(element, 'dblclick', this.workCellAction.cellDblClick, this);
                    }
                }, {
                    key: 'renderTimeCells',
                    value: function renderTimeCells() {
                        var _this19 = this;

                        var wrap = createElement('div', { className: TIME_CELLS_WRAP_CLASS });
                        var tbl = this.createTableLayout();
                        var trEle = createElement('tr');
                        var handler = function handler(r) {
                            r.type = r.first ? 'majorSlot' : 'minorSlot';
                            r.className = r.last ? [TIME_CELLS_CLASS] : [];
                            var ntr = trEle.cloneNode();
                            var data = { date: r.date, type: r.type, className: r.className };
                            ntr.appendChild(_this19.createTd(data));
                            tbl.querySelector('tbody').appendChild(ntr);
                            return r;
                        };
                        this.getTimeSlotRows(handler);
                        wrap.appendChild(tbl);
                        return wrap;
                    }
                }, {
                    key: 'renderContentArea',
                    value: function renderContentArea() {
                        var _this20 = this;

                        var wrap = createElement('div', { className: CONTENT_WRAP_CLASS });
                        var innerWrap = createElement('div', { className: WRAPPER_CLASS });
                        wrap.appendChild(innerWrap);
                        var tbl = this.createTableLayout(CONTENT_TABLE_CLASS);
                        var tr = createElement('tr', { attrs: { role: 'row' } });
                        var td = createElement('td', { attrs: { role: 'gridcell', 'aria-selected': 'false' } });
                        var tbody = tbl.querySelector('tbody');
                        var columns = this.renderDates;
                        var handler = function handler(r) {
                            var ntr = tr.cloneNode();
                            var _iteratorNormalCompletion34 = true;
                            var _didIteratorError34 = false;
                            var _iteratorError34 = undefined;

                            try {
                                for (var _iterator34 = columns[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
                                    var col = _step34.value;

                                    var ntd = td.cloneNode();
                                    var clsName = r.last ? [WORK_CELLS_CLASS] : [WORK_CELLS_CLASS, ALTERNATE_CELLS_CLASS];
                                    var cellDate = resetTime(new Date('' + col));
                                    setTime(cellDate, getDateInMs(r.date));
                                    if (_this20.parent.workHours.highlight && _this20.isWorkHour(cellDate)) {
                                        clsName.push(WORK_HOURS_CLASS);
                                    }
                                    addClass([ntd], clsName);
                                    if (_this20.parent.cellTemplate) {
                                        var _args2 = { date: cellDate, type: 'workCells' };
                                        append([].slice.call(_this20.parent.getCellTemplate()(_args2)), ntd);
                                    }
                                    ntd.setAttribute('data-date', cellDate.getTime().toString());
                                    _this20.wireCellEvents(ntd);
                                    var args = { elementType: 'workCells', element: ntd, date: cellDate };
                                    _this20.parent.trigger(renderCell, args);
                                    ntr.appendChild(ntd);
                                }
                            } catch (err) {
                                _didIteratorError34 = true;
                                _iteratorError34 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion34 && _iterator34.return) {
                                        _iterator34.return();
                                    }
                                } finally {
                                    if (_didIteratorError34) {
                                        throw _iteratorError34;
                                    }
                                }
                            }

                            tbody.appendChild(ntr);
                            return r;
                        };
                        this.getTimeSlotRows(handler);
                        var innerAppointmentWrap = createElement('div', { className: APPOINTMENT_WRAPPER_CLASS });
                        for (var day = 0, length = this.renderDates.length; day < length; day++) {
                            var appointmentWrap = createElement('div', {
                                id: APPOINTMENT_WRAPPER_CLASS + '-' + day.toString(),
                                className: DAY_WRAPPER_CLASS,
                                attrs: { 'data-dayindex': day.toString() },
                                styles: 'width:calc(' + 100 / this.renderDates.length + '%)'
                            });
                            innerAppointmentWrap.appendChild(appointmentWrap);
                        }
                        innerWrap.appendChild(innerAppointmentWrap);
                        wrap.appendChild(tbl);
                        EventHandler.add(wrap, 'scroll', this.onContentScroll, this);
                        return wrap;
                    }
                }, {
                    key: 'getScrollableElement',
                    value: function getScrollableElement() {
                        if (this.parent.isAdaptive) {
                            return this.element.querySelector('.' + SCROLL_CONTAINER_CLASS);
                        } else {
                            return this.getContentAreaElement();
                        }
                    }
                }, {
                    key: 'getDatesHeaderElement',
                    value: function getDatesHeaderElement() {
                        return this.element.querySelector('.' + DATE_HEADER_CONTAINER_CLASS);
                    }
                }, {
                    key: 'getTimeCellsElement',
                    value: function getTimeCellsElement() {
                        return this.element.querySelector('.' + TIME_CELLS_WRAP_CLASS);
                    }
                }, {
                    key: 'getContentAreaElement',
                    value: function getContentAreaElement() {
                        return this.element.querySelector('.' + CONTENT_WRAP_CLASS);
                    }
                }, {
                    key: 'getEndDateFromStartDate',
                    value: function getEndDateFromStartDate(start) {
                        var msMajorInterval = this.majorSlot * MS_PER_MINUTE;
                        var msInterval = msMajorInterval / this.minorSlotCount;
                        var end = new Date(start.getTime());
                        end.setMilliseconds(end.getMilliseconds() + msInterval);
                        return end;
                    }
                }, {
                    key: 'adjustEventWrapper',
                    value: function adjustEventWrapper() {
                        var tblWidth = this.element.querySelector('.' + CONTENT_TABLE_CLASS).offsetWidth;
                        this.element.querySelector('.' + WRAPPER_CLASS).style.width = tblWidth + 'px';
                        this.element.querySelector('.' + ALLDAY_APPOINTMENT_WRAPPER_CLASS).style.width = tblWidth + 'px';
                    }
                }, {
                    key: 'getTimeSlotRows',
                    value: function getTimeSlotRows(handler) {
                        var rows = [];
                        var startHour = this.getStartHour();
                        var endHour = this.getEndHour();
                        var msMajorInterval = this.majorSlot * MS_PER_MINUTE;
                        var msInterval = msMajorInterval / this.minorSlotCount;
                        var length = Math.round(MS_PER_DAY / msInterval);
                        var msStartHour = startHour.getTime();
                        var msEndHour = endHour.getTime();
                        if (msStartHour !== msEndHour) {
                            length = Math.round((msEndHour - msStartHour) / msInterval);
                        }
                        var dt = new Date(msStartHour);
                        for (var i = 0; i < length; i++) {
                            var majorTickDivider = i % (msMajorInterval / msInterval);
                            var row = {
                                date: new Date('' + dt),
                                first: majorTickDivider === 0,
                                middle: majorTickDivider < this.minorSlotCount - 1,
                                last: majorTickDivider === this.minorSlotCount - 1,
                                type: ''
                            };
                            if (handler) {
                                handler(row);
                            }
                            rows.push(row);
                            dt.setMilliseconds(msInterval);
                        }
                        return rows;
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'verticalView';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.parent.isDestroyed) {
                            return;
                        }
                        this.clearCurrentTimeIndicatorTimer();
                        if (this.element) {
                            EventHandler.remove(this.getContentAreaElement(), 'scroll', this.onContentScroll);
                            remove(this.element);
                            this.element = null;
                            if (this.parent.scheduleTouchModule) {
                                this.parent.scheduleTouchModule.resetValues();
                            }
                        }
                    }
                }]);

                return VerticalView;
            }(ViewBase);

            _export('Day', Day = function (_VerticalView) {
                _inherits(Day, _VerticalView);

                /**
                 * Constructor for day view
                 */
                function Day(parent) {
                    _classCallCheck(this, Day);

                    var _this21 = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this, parent));

                    _this21.viewClass = 'e-day-view';
                    return _this21;
                }

                _createClass(Day, [{
                    key: 'getNextPreviousDate',
                    value: function getNextPreviousDate(type) {
                        var daysCount = type === 'next' ? 1 : -1;
                        if (this.parent.activeViewOptions.showWeekend) {
                            return addDays(this.parent.selectedDate, daysCount);
                        } else {
                            var date = addDays(this.parent.selectedDate, daysCount);
                            while (!this.isWorkDay(date)) {
                                date = addDays(date, daysCount);
                            }
                            return date;
                        }
                    }
                }, {
                    key: 'getDateRangeText',
                    value: function getDateRangeText() {
                        if (this.parent.isAdaptive) {
                            return this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
                        }
                        return this.formatDateRange(this.parent.selectedDate);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'day';
                    }
                }]);

                return Day;
            }(VerticalView));

            _export('Week', Week = function (_VerticalView2) {
                _inherits(Week, _VerticalView2);

                /**
                 * Constructor
                 */
                function Week(parent) {
                    _classCallCheck(this, Week);

                    var _this22 = _possibleConstructorReturn(this, (Week.__proto__ || Object.getPrototypeOf(Week)).call(this, parent));

                    _this22.viewClass = 'e-week-view';
                    return _this22;
                }

                _createClass(Week, [{
                    key: 'getRenderDates',
                    value: function getRenderDates() {
                        this.renderDates = [];
                        var selectedDate = resetTime(this.parent.selectedDate);
                        var start = getWeekFirstDate(selectedDate, this.parent.firstDayOfWeek);
                        for (var i = 0, length = WEEK_LENGTH; i < length; i++) {
                            if (this.parent.activeViewOptions.showWeekend) {
                                this.renderDates.push(start);
                            } else {
                                if (this.isWorkDay(start)) {
                                    this.renderDates.push(start);
                                }
                            }
                            start = addDays(start, 1);
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'week';
                    }
                }]);

                return Week;
            }(VerticalView));

            _export('WorkWeek', WorkWeek = function (_VerticalView3) {
                _inherits(WorkWeek, _VerticalView3);

                /**
                 * Constructor
                 */
                function WorkWeek(par) {
                    _classCallCheck(this, WorkWeek);

                    var _this23 = _possibleConstructorReturn(this, (WorkWeek.__proto__ || Object.getPrototypeOf(WorkWeek)).call(this, par));

                    _this23.viewClass = 'e-work-week-view';
                    return _this23;
                }

                _createClass(WorkWeek, [{
                    key: 'getRenderDates',
                    value: function getRenderDates() {
                        this.renderDates = [];
                        var start = getWeekFirstDate(resetTime(this.parent.selectedDate), this.parent.firstDayOfWeek);
                        for (var i = 0, length = WEEK_LENGTH; i < length; i++) {
                            if (this.isWorkDay(start)) {
                                this.renderDates.push(start);
                            }
                            start = addDays(start, 1);
                        }
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'workWeek';
                    }
                }]);

                return WorkWeek;
            }(VerticalView));

            EVENT_GAP = 0;

            MonthEvent = function (_EventBase2) {
                _inherits(MonthEvent, _EventBase2);

                /**
                 * Constructor for month events
                 */
                function MonthEvent(parent) {
                    _classCallCheck(this, MonthEvent);

                    var _this24 = _possibleConstructorReturn(this, (MonthEvent.__proto__ || Object.getPrototypeOf(MonthEvent)).call(this, parent));

                    _this24.renderedEvents = [];
                    _this24.element = _this24.parent.activeView.getPanel();
                    _this24.fields = _this24.parent.eventFields;
                    _this24.addEventListener();
                    return _this24;
                }

                _createClass(MonthEvent, [{
                    key: 'renderAppointments',
                    value: function renderAppointments() {
                        var appointmentWrapper = [].slice.call(this.element.querySelectorAll('.' + APPOINTMENT_WRAPPER_CLASS));
                        var _iteratorNormalCompletion35 = true;
                        var _didIteratorError35 = false;
                        var _iteratorError35 = undefined;

                        try {
                            for (var _iterator35 = appointmentWrapper[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
                                var wrap = _step35.value;

                                remove(wrap);
                            }
                        } catch (err) {
                            _didIteratorError35 = true;
                            _iteratorError35 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion35 && _iterator35.return) {
                                    _iterator35.return();
                                }
                            } finally {
                                if (_didIteratorError35) {
                                    throw _iteratorError35;
                                }
                            }
                        }

                        this.renderedEvents = [];
                        this.dateRender = this.parent.activeView.renderDates;
                        this.workCells = [].slice.call(this.element.querySelectorAll('.' + WORK_CELLS_CLASS));
                        this.cellWidth = this.workCells[0].offsetWidth;
                        this.cellHeight = this.workCells[0].offsetHeight;
                        this.eventHeight = this.getElementHeightFromClass(this.element, APPOINTMENT_CLASS);
                        this.monthHeaderHeight = this.getOuterHeight(this.workCells[0].querySelector('.' + DATE_HEADER_CLASS));
                        var eventsList = this.parent.eventsProcessed;
                        this.sortByDateTime(eventsList);
                        var dates = this.dateRender.map(function (date) {
                            return +date;
                        });
                        this.slots = [];
                        var noOfDays = this.parent.activeViewOptions.showWeekend ? WEEK_LENGTH : this.parent.activeViewOptions.workDays.length;
                        while (dates.length > 0) {
                            this.slots.push(dates.splice(0, noOfDays));
                        }
                        var _iteratorNormalCompletion36 = true;
                        var _didIteratorError36 = false;
                        var _iteratorError36 = undefined;

                        try {
                            for (var _iterator36 = eventsList[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
                                var event = _step36.value;

                                var splittedEvents = this.splitEvent(event, this.dateRender);
                                var _iteratorNormalCompletion37 = true;
                                var _didIteratorError37 = false;
                                var _iteratorError37 = undefined;

                                try {
                                    for (var _iterator37 = splittedEvents[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
                                        var _event4 = _step37.value;

                                        this.renderAppointmentMonth(_event4);
                                    }
                                } catch (err) {
                                    _didIteratorError37 = true;
                                    _iteratorError37 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion37 && _iterator37.return) {
                                            _iterator37.return();
                                        }
                                    } finally {
                                        if (_didIteratorError37) {
                                            throw _iteratorError37;
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError36 = true;
                            _iteratorError36 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion36 && _iterator36.return) {
                                    _iterator36.return();
                                }
                            } finally {
                                if (_didIteratorError36) {
                                    throw _iteratorError36;
                                }
                            }
                        }
                    }
                }, {
                    key: 'getElementHeightFromClass',
                    value: function getElementHeightFromClass(container, elementClass) {
                        var height = 0;
                        var el = createElement('div', { className: elementClass }).cloneNode();
                        el.style.visibility = 'hidden';
                        el.style.position = 'absolute';
                        container.appendChild(el);
                        height = this.getOuterHeight(el);
                        remove(el);
                        return height;
                    }
                }, {
                    key: 'getOuterHeight',
                    value: function getOuterHeight(element) {
                        var style = getComputedStyle(element);
                        return element.offsetHeight + (parseInt(style.marginTop, 10) || 0) + (parseInt(style.marginBottom, 10) || 0);
                    }
                }, {
                    key: 'createAppointmentElement',
                    value: function createAppointmentElement(record) {
                        var appointmentWrapper = createElement('div', {
                            id: 'Appointment_' + record[this.fields.id],
                            className: APPOINTMENT_CLASS,
                            attrs: {
                                'data-guid': record.Guid,
                                'role': 'button',
                                'tabindex': '0',
                                'aria-readonly': 'false',
                                'aria-selected': 'false',
                                'aria-grabbed': 'true',
                                'aria-label': isNullOrUndefined(record[this.fields.subject]) ? this.parent.eventSettings.fields.subject.default : record[this.fields.subject]
                            }
                        });
                        var appointmentDetails = createElement('div', { className: APPOINTMENT_DETAILS });
                        appointmentWrapper.appendChild(appointmentDetails);
                        var templateElement = void 0;
                        var eventData = record.data;
                        if (!isNullOrUndefined(this.parent.activeViewOptions.eventTemplate)) {
                            templateElement = this.parent.getAppointmentTemplate()(record);
                        } else {
                            var eventSubject = isNullOrUndefined(record[this.fields.subject]) ? this.parent.eventSettings.fields.subject.default : record[this.fields.subject];
                            var eventLocation = isNullOrUndefined(record[this.fields.location]) ? this.parent.eventSettings.fields.location.default : record[this.fields.location];
                            var appointmentSubject = createElement('div', {
                                className: APPOINTMENT_SUBJECT,
                                innerHTML: eventSubject + (eventLocation ? ';&nbsp' + eventLocation : '')
                            });
                            var appointmentStartTime = createElement('div', {
                                className: APPOINTMENT_TIME,
                                innerHTML: this.parent.globalize.formatDate(eventData[this.fields.startTime], { skeleton: 'hm' }),
                                styles: 'display:' + (this.parent.isAdaptive ? 'none' : 'block')
                            });
                            var appointmentEndTime = createElement('div', {
                                className: APPOINTMENT_TIME,
                                innerHTML: this.parent.globalize.formatDate(eventData[this.fields.endTime], { skeleton: 'hm' }),
                                styles: 'display:' + (this.parent.isAdaptive ? 'none' : 'block')
                            });
                            if (record[this.fields.isAllDay]) {
                                templateElement = [appointmentSubject];
                                addClass([appointmentSubject], 'e-text-center');
                            } else if (eventData.count <= 1 && !eventData.isLeft && !eventData.isRight) {
                                templateElement = [appointmentStartTime, appointmentSubject];
                            } else {
                                templateElement = [];
                                addClass([appointmentSubject], 'e-text-center');
                                if (!eventData.isLeft) {
                                    templateElement.push(appointmentStartTime);
                                }
                                templateElement.push(appointmentSubject);
                                if (!eventData.isRight) {
                                    templateElement.push(appointmentEndTime);
                                }
                            }
                        }
                        append([].slice.call(templateElement), appointmentDetails);
                        if (!isNullOrUndefined(record[this.fields.recurrenceRule])) {
                            var iconClass = record[this.fields.id] === record[this.fields.recurrenceID] ? EVENT_RECURRENCE_ICON_CLASS : EVENT_RECURRENCE_EDIT_ICON_CLASS;
                            appointmentDetails.appendChild(createElement('div', {
                                className: ICON + ' ' + iconClass,
                                styles: 'display:' + (this.parent.isAdaptive ? 'none' : 'block')
                            }));
                        }
                        if (eventData.isLeft) {
                            var iconLeft = createElement('div', {
                                className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_LEFT_CLASS
                            });
                            prepend([iconLeft], appointmentDetails);
                        }
                        if (eventData.isRight) {
                            var iconRight = createElement('div', {
                                className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_RIGHT_CLASS
                            });
                            append([iconRight], appointmentDetails);
                        }
                        return appointmentWrapper;
                    }
                }, {
                    key: 'renderAppointmentMonth',
                    value: function renderAppointmentMonth(event) {
                        var startTime = event[this.fields.startTime];
                        var endTime = event[this.fields.endTime];
                        var day = this.parent.getIndexOfDate(this.dateRender, resetTime(startTime));
                        if (day < 0) {
                            return;
                        }
                        var overlapCount = this.getIndex(event, startTime);
                        event.Index = overlapCount;
                        var appTop = 0;
                        var moreIndicatorHeight = 19;
                        var appHeight = this.eventHeight;
                        this.renderedEvents.push(extend({}, event, null, true));
                        var diffInDays = event.data.count;
                        if (startTime.getTime() <= endTime.getTime()) {
                            var _appWidth2 = diffInDays * this.cellWidth - 1;
                            var cellTd = this.workCells[day];
                            appTop = overlapCount * (appHeight + EVENT_GAP);
                            if (this.cellHeight > this.monthHeaderHeight + (overlapCount + 1) * (appHeight + EVENT_GAP) + moreIndicatorHeight) {
                                var appointmentElement = this.createAppointmentElement(event);
                                this.wireAppointmentEvents(appointmentElement);
                                setStyleAttribute(appointmentElement, { 'width': _appWidth2 + 'px', 'height': appHeight + 'px', 'top': appTop + 'px' });
                                if (cellTd.querySelector('.' + APPOINTMENT_WRAPPER_CLASS)) {
                                    cellTd.querySelector('.' + APPOINTMENT_WRAPPER_CLASS).appendChild(appointmentElement);
                                } else {
                                    var wrapper = createElement('div', { className: APPOINTMENT_WRAPPER_CLASS });
                                    wrapper.appendChild(appointmentElement);
                                    cellTd.appendChild(wrapper);
                                }
                                var args = { data: event, element: appointmentElement };
                                this.parent.trigger(eventRendered, args);
                            } else {
                                for (var i = 0; i < diffInDays; i++) {
                                    var _cellTd = this.workCells[day + i];
                                    if (_cellTd && isNullOrUndefined(_cellTd.querySelector('.' + MORE_INDICATOR_CLASS))) {
                                        var startDateTime = new Date(this.dateRender[day + i].getTime());
                                        var endDateTime = addDays(this.dateRender[day + i], 1);
                                        var filterEvents = this.filterEvents(startDateTime, endDateTime, this.parent.eventsProcessed);
                                        var appArea = this.cellHeight - this.monthHeaderHeight - moreIndicatorHeight;
                                        var renderedAppCount = Math.floor(appArea / (appHeight + EVENT_GAP));
                                        var count = filterEvents.length - renderedAppCount <= 0 ? 1 : filterEvents.length - renderedAppCount;
                                        var moreIndicatorElement = createElement('div', {
                                            className: MORE_INDICATOR_CLASS,
                                            innerHTML: '+' + count + '&nbsp;' + (this.parent.isAdaptive ? '' : this.parent.localeObj.getConstant('more')),
                                            attrs: {
                                                'tabindex': '0',
                                                'data-start-date': startDateTime.getTime().toString(),
                                                'data-end-date': endDateTime.getTime().toString()
                                            }
                                        });
                                        moreIndicatorElement.style.top = appArea + 'px';
                                        if (_cellTd.querySelector('.' + APPOINTMENT_WRAPPER_CLASS)) {
                                            _cellTd.querySelector('.' + APPOINTMENT_WRAPPER_CLASS).appendChild(moreIndicatorElement);
                                        } else {
                                            var _wrapper = createElement('div', { className: APPOINTMENT_WRAPPER_CLASS });
                                            _wrapper.appendChild(moreIndicatorElement);
                                            _cellTd.appendChild(_wrapper);
                                        }
                                        EventHandler.add(moreIndicatorElement, 'click', this.moreIndicatorClick, this);
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: 'getIndex',
                    value: function getIndex(record, date) {
                        var appIndex = -1;
                        var appointments = this.renderedEvents;
                        if (appointments.length > 0) {
                            var appointmentsList = [];
                            var _iteratorNormalCompletion38 = true;
                            var _didIteratorError38 = false;
                            var _iteratorError38 = undefined;

                            try {
                                for (var _iterator38 = appointments[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
                                    var app = _step38.value;

                                    if (resetTime(app[this.fields.startTime]).getTime() <= resetTime(date).getTime() && resetTime(app[this.fields.endTime]).getTime() >= resetTime(date).getTime()) {
                                        appointmentsList.push(app);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError38 = true;
                                _iteratorError38 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion38 && _iterator38.return) {
                                        _iterator38.return();
                                    }
                                } finally {
                                    if (_didIteratorError38) {
                                        throw _iteratorError38;
                                    }
                                }
                            }

                            var appLevel = appointmentsList.map(function (obj) {
                                return obj.Index;
                            });
                            appIndex = appLevel.length > 0 ? this.getSmallestMissingNumber(appLevel) : 0;
                        }
                        return appIndex === -1 ? 0 : appIndex;
                    }
                }, {
                    key: 'moreIndicatorClick',
                    value: function moreIndicatorClick(event) {
                        var target = closest(event.target, '.' + MORE_INDICATOR_CLASS);
                        var startDate = new Date(parseInt(target.getAttribute('data-start-date'), 10));
                        var endDate = new Date(parseInt(target.getAttribute('data-end-date'), 10));
                        var filteredEvents = this.filterEvents(startDate, endDate, this.parent.eventsProcessed);
                        var moreEventArgs = { date: startDate, event: filteredEvents, element: event.target };
                        if (!isNullOrUndefined(startDate) && this.parent.isAdaptive) {
                            this.parent.setProperties({ selectedDate: startDate }, true);
                            this.parent.changeView('Day');
                        } else {
                            this.parent.quickPopup.moreEventClick(moreEventArgs);
                        }
                    }
                }]);

                return MonthEvent;
            }(EventBase);

            _export('Month', Month = function (_ViewBase2) {
                _inherits(Month, _ViewBase2);

                /**
                 * Constructor for month view
                 */
                function Month(parent) {
                    _classCallCheck(this, Month);

                    var _this25 = _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).call(this, parent));

                    _this25.dayNameFormat = 'wide';
                    _this25.viewClass = 'e-month-view';
                    _this25.isInverseTableSelect = false;
                    _this25.workCellAction = new WorkCellInteraction(parent);
                    return _this25;
                }

                _createClass(Month, [{
                    key: 'addEventListener',
                    value: function addEventListener() {
                        this.parent.on(scrollUiUpdate, this.onScrollUiUpdate, this);
                        this.parent.on(dataReady, this.onDataReady, this);
                        this.parent.on(_cellClick, this.onCellClick, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        this.parent.off(scrollUiUpdate, this.onScrollUiUpdate);
                        this.parent.off(dataReady, this.onDataReady);
                        this.parent.off(_cellClick, this.onCellClick);
                    }
                }, {
                    key: 'onDataReady',
                    value: function onDataReady(args) {
                        var monthEvent = new MonthEvent(this.parent);
                        monthEvent.renderAppointments();
                    }
                }, {
                    key: 'onCellClick',
                    value: function onCellClick(event) {
                        // Here cell click
                    }
                }, {
                    key: 'onContentScroll',
                    value: function onContentScroll(e) {
                        this.getDatesHeaderElement().firstChild.scrollLeft = e.target.scrollLeft;
                    }
                }, {
                    key: 'onScrollUiUpdate',
                    value: function onScrollUiUpdate(args) {
                        var headerHeight = 0;
                        if (this.parent.headerModule) {
                            headerHeight += this.parent.headerModule.getHeaderElement().offsetHeight;
                        }
                        var header = this.getDatesHeaderElement();
                        var content = this.getContentAreaElement();
                        content.style.height = 'auto';
                        content.style.height = formatUnit(this.parent.element.offsetHeight - headerHeight - header.offsetHeight - 2);
                        // tslint:disable:no-any
                        if (content.offsetWidth - content.clientWidth > 0) {
                            var scrollBarWidth = getScrollBarWidth();
                            header.firstChild.style[args.cssProperties.border] = scrollBarWidth > 0 ? '1px' : '0px';
                            header.style[args.cssProperties.padding] = scrollBarWidth > 0 ? scrollBarWidth - 1 + 'px' : '0px';
                        } else {
                            header.firstChild.style[args.cssProperties.border] = '';
                            header.style[args.cssProperties.padding] = '';
                        }
                        // tslint:enable:no-any
                    }
                }, {
                    key: 'generateColLevels',
                    value: function generateColLevels() {
                        var count = this.parent.activeViewOptions.showWeekend ? WEEK_LENGTH : this.parent.activeViewOptions.workDays.length;
                        var colLevels = [];
                        var level = [];
                        for (var col = 0; col < count; col++) {
                            var classList = [HEADER_CELLS_CLASS];
                            if (this.isCurrentMonth(this.parent.selectedDate) && new Date().getDay() === col) {
                                classList.push(CURRENT_DAY_CLASS);
                            }
                            level.push({ date: this.renderDates[col], type: 'monthHeader', className: classList });
                        }
                        colLevels.push(level);
                        return colLevels;
                    }
                }, {
                    key: 'getDayNameFormat',
                    value: function getDayNameFormat() {
                        if (this.parent.isAdaptive) {
                            return 'abbreviated';
                        }
                        return 'wide';
                    }
                }, {
                    key: 'renderLayout',
                    value: function renderLayout(type) {
                        this.dayNameFormat = this.getDayNameFormat();
                        this.setPanel(createElement('div', { className: TABLE_WRAP_CLASS }));
                        var clsList = [this.viewClass];
                        clsList.push(type);
                        addClass([this.element], clsList);
                        this.renderPanel(type);
                        this.element.appendChild(this.createTableLayout(OUTER_TABLE_CLASS));
                        this.colLevels = this.generateColLevels();
                        this.renderHeader();
                        this.renderContent();
                        this.parent.notify(contentReady, {});
                    }
                }, {
                    key: 'wireCellEvents',
                    value: function wireCellEvents(element) {
                        EventHandler.add(element, 'mousedown', this.workCellAction.cellMouseDown, this);
                        EventHandler.add(element, 'click', this.workCellAction.cellClick, this);
                        EventHandler.add(element, 'dblclick', this.workCellAction.cellDblClick, this);
                    }
                }, {
                    key: 'renderHeader',
                    value: function renderHeader() {
                        var tr = createElement('tr');
                        var dateTd = createElement('td');
                        dateTd.appendChild(this.renderDatesHeader());
                        tr.appendChild(dateTd);
                        prepend([tr], this.element.querySelector('tbody'));
                    }
                }, {
                    key: 'renderContent',
                    value: function renderContent() {
                        var tr = createElement('tr');
                        var workTd = createElement('td');
                        workTd.appendChild(this.renderContentArea());
                        tr.appendChild(workTd);
                        this.element.querySelector('tbody').appendChild(tr);
                        this.renderAppointmentContainer();
                    }
                }, {
                    key: 'renderAppointmentContainer',
                    value: function renderAppointmentContainer() {
                        //Here needs to render mobile view appointment details on selected date
                    }
                }, {
                    key: 'renderDatesHeader',
                    value: function renderDatesHeader() {
                        var container = createElement('div', { className: DATE_HEADER_CONTAINER_CLASS });
                        var wrap = createElement('div', { className: DATE_HEADER_WRAP_CLASS });
                        container.appendChild(wrap);
                        var table = this.createTableLayout();
                        var trEle = createElement('tr');
                        var rowsCount = this.colLevels.length;
                        var lastLevel = this.colLevels[rowsCount - 1];
                        for (var i = 0; i < rowsCount; i++) {
                            var level = this.colLevels[i];
                            var ntr = trEle.cloneNode();
                            var colspan = lastLevel.length / level.length;
                            for (var j = 0; j < level.length; j++) {
                                var td = level[j];
                                td.colSpan = colspan;
                                ntr.appendChild(this.createHeaderCell(td));
                            }
                            table.querySelector('tbody').appendChild(ntr);
                        }
                        wrap.appendChild(table);
                        return container;
                    }
                }, {
                    key: 'createHeaderCell',
                    value: function createHeaderCell(td) {
                        var tdEle = createElement('th');
                        if (td.className) {
                            addClass([tdEle], td.className);
                        }
                        if (td.type === 'monthHeader') {
                            var ele = createElement('span', { innerHTML: this.parent.getDayNames(this.dayNameFormat)[td.date.getDay()] });
                            tdEle.appendChild(ele);
                        }
                        var args = { elementType: td.type, element: tdEle, date: td.date };
                        this.parent.trigger(renderCell, args);
                        return tdEle;
                    }
                }, {
                    key: 'isOtherMonth',
                    value: function isOtherMonth(date) {
                        return this.parent.selectedDate.getMonth() !== date.getMonth();
                    }
                }, {
                    key: 'renderContentArea',
                    value: function renderContentArea() {
                        var wrap = createElement('div', { className: CONTENT_WRAP_CLASS });
                        var tbl = this.createTableLayout(CONTENT_TABLE_CLASS);
                        var tbody = tbl.querySelector('tbody');
                        var tr = createElement('tr', { attrs: { role: 'row' } });
                        var td = createElement('td', { attrs: { role: 'gridcell', 'aria-selected': 'false' } });
                        var count = this.parent.activeViewOptions.showWeekend ? WEEK_LENGTH : this.parent.activeViewOptions.workDays.length;
                        var noOfRows = this.renderDates.length / count;
                        var startCol = 0;
                        var endCol = count;
                        for (var row = 0; row < noOfRows; row++) {
                            var ntr = tr.cloneNode();
                            for (startCol = 0 + startCol; startCol < endCol; startCol++) {
                                var data = { date: this.renderDates[startCol], type: 'monthCells', className: [WORK_CELLS_CLASS] };
                                var ntd = td.cloneNode();
                                if (this.isOtherMonth(data.date)) {
                                    data.className.push(OTHERMONTH_CLASS);
                                }
                                if (this.parent.workHours.highlight && this.isWorkDay(data.date)) {
                                    data.className.push(WORKDAY_CLASS);
                                }
                                if (this.isCurrentDate(data.date)) {
                                    data.className.push(CURRENTDATE_CLASS);
                                }
                                if (this.parent.currentView === 'MonthAgenda' && this.parent.isSelectedDate(data.date)) {
                                    data.className.push(SELECTED_CELL_CLASS);
                                }
                                addClass([ntd], data.className);
                                ntd.setAttribute('data-date', data.date.getTime().toString());
                                this.renderDateHeaderElement(data, ntd);
                                if (this.parent.cellTemplate) {
                                    var _args3 = { date: data.date, type: data.type };
                                    append([].slice.call(this.parent.getCellTemplate()(_args3)), ntd);
                                }
                                this.wireCellEvents(ntd);
                                var args = { elementType: data.type, element: ntd, date: data.date };
                                this.parent.trigger(renderCell, args);
                                ntr.appendChild(ntd);
                            }
                            endCol = endCol + count;
                            startCol = startCol + 0;
                            tbody.appendChild(ntr);
                        }
                        wrap.appendChild(tbl);
                        EventHandler.add(wrap, 'scroll', this.onContentScroll, this);
                        return wrap;
                    }
                }, {
                    key: 'getDatesHeaderElement',
                    value: function getDatesHeaderElement() {
                        return this.element.querySelector('.' + DATE_HEADER_CONTAINER_CLASS);
                    }
                }, {
                    key: 'getContentAreaElement',
                    value: function getContentAreaElement() {
                        return this.element.querySelector('.' + CONTENT_WRAP_CLASS);
                    }
                }, {
                    key: 'renderDateHeaderElement',
                    value: function renderDateHeaderElement(data, ntd) {
                        var dateHeader = createElement('div', { className: DATE_HEADER_CLASS });
                        dateHeader.innerHTML = data.date.getDate() === 1 && !this.isCurrentDate(data.date) && !this.parent.isAdaptive ? this.parent.globalize.formatDate(data.date, { format: 'MMM d' }) : this.parent.globalize.formatDate(data.date, { skeleton: 'd' });
                        ntd.appendChild(dateHeader);
                        if (this.getModuleName() === 'month') {
                            addClass([dateHeader], NAVIGATE_CLASS);
                        }
                    }
                }, {
                    key: 'getRenderDates',
                    value: function getRenderDates() {
                        this.renderDates = [];
                        var currentDate = resetTime(this.parent.selectedDate);
                        var monthStart = getWeekFirstDate(firstDateOfMonth(currentDate), this.parent.firstDayOfWeek);
                        var lastWeekOfMonth = getWeekFirstDate(lastDateOfMonth(currentDate), this.parent.firstDayOfWeek);
                        var monthEnd = addDays(lastWeekOfMonth, WEEK_LENGTH - 1);
                        var start = new Date(monthStart.getFullYear(), monthStart.getMonth(), monthStart.getDate());
                        do {
                            if (this.parent.activeViewOptions.showWeekend) {
                                this.renderDates.push(start);
                            } else {
                                if (this.isWorkDay(start)) {
                                    this.renderDates.push(start);
                                }
                            }
                            start = addDays(start, 1);
                        } while (start.getTime() <= monthEnd.getTime());
                    }
                }, {
                    key: 'getNextPreviousDate',
                    value: function getNextPreviousDate(type) {
                        if (type === 'next') {
                            return addMonths(this.parent.selectedDate, 1);
                        } else {
                            return addMonths(this.parent.selectedDate, -1);
                        }
                    }
                }, {
                    key: 'getEndDateFromStartDate',
                    value: function getEndDateFromStartDate(start) {
                        return addDays(new Date(start.getTime()), 1);
                    }
                }, {
                    key: 'getDateRangeText',
                    value: function getDateRangeText() {
                        if (this.parent.isAdaptive || isNullOrUndefined(this.parent.activeViewOptions.dateFormat)) {
                            return this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
                        }
                        return this.formatDateRange(this.parent.selectedDate);
                    }
                }, {
                    key: 'getLabelText',
                    value: function getLabelText(view) {
                        return this.parent.localeObj.getConstant(view) + ' of ' + this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'month';
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.parent.isDestroyed) {
                            return;
                        }
                        if (this.element) {
                            remove(this.element);
                            this.element = null;
                            if (this.parent.scheduleTouchModule) {
                                this.parent.scheduleTouchModule.resetValues();
                            }
                        }
                    }
                }]);

                return Month;
            }(ViewBase));

            AgendaBase = function () {
                /**
                 * Constructor for AgendaBase
                 */
                function AgendaBase(parent) {
                    _classCallCheck(this, AgendaBase);

                    this.parent = parent;
                    this.l10n = this.parent.localeObj;
                }

                _createClass(AgendaBase, [{
                    key: 'createAgendaContentElement',
                    value: function createAgendaContentElement(type, listData, aTd) {
                        var listElement = void 0;
                        if (type === 'noEvents') {
                            var noEvents = [{ 'subject': this.l10n.getConstant('noEvents') }];
                            listElement = ListBase.createList(noEvents, {
                                moduleName: 'agenda',
                                listClass: this.parent.activeView.viewClass,
                                itemClass: this.parent.activeView.viewClass,
                                template: '<div class=' + AGENDA_NO_EVENT_CLASS + '>${subject}</div>'
                            });
                        } else {
                            listElement = ListBase.createList(listData, {
                                moduleName: 'agenda',
                                listClass: this.parent.activeView.viewClass,
                                itemClass: this.parent.activeView.viewClass
                            });
                            for (var li = 0, length = listData.length; li < length; li++) {
                                var appWrapper = createElement('div', {
                                    id: 'Appointment_' + listData[li][this.parent.eventFields.id],
                                    className: APPOINTMENT_CLASS, attrs: {
                                        'data-guid': listData[li].Guid,
                                        'role': 'button',
                                        'tabindex': '0',
                                        'aria-readonly': 'false',
                                        'aria-selected': 'false',
                                        'aria-grabbed': 'true',
                                        'aria-label': isNullOrUndefined(listData[li][this.parent.eventFields.subject]) ? this.parent.eventSettings.fields.subject.default : listData[li][this.parent.eventFields.subject]
                                    }
                                });
                                var templateEle = void 0;
                                if (!isNullOrUndefined(this.parent.activeViewOptions.eventTemplate)) {
                                    templateEle = this.parent.getAppointmentTemplate()(listData[li]);
                                } else {
                                    templateEle = this.createAppointment(listData[li]);
                                }
                                append([].slice.call(templateEle), appWrapper);
                                listElement.children[li].innerHTML = appWrapper.outerHTML;
                                var args = { data: listData[li], element: listElement.children[li] };
                                this.parent.trigger(eventRendered, args);
                            }
                        }
                        aTd.appendChild(listElement);
                        addClass([aTd], AGENDA_DAY_BORDER_CLASS);
                        return aTd;
                    }
                }, {
                    key: 'createAppointment',
                    value: function createAppointment(event) {
                        var fieldMapping = this.parent.eventFields;
                        var recordSubject = isNullOrUndefined(event[fieldMapping.subject]) ? this.parent.eventSettings.fields.subject.default : event[fieldMapping.subject];
                        var appSubjectWrap = createElement('div', { className: APPOINTMENT_SUBJECT_WRAP });
                        if (!isNullOrUndefined(event[fieldMapping.location]) && event[fieldMapping.location] !== '') {
                            recordSubject += ',';
                        }
                        appSubjectWrap.appendChild(createElement('div', {
                            className: APPOINTMENT_SUBJECT,
                            innerHTML: recordSubject
                        }));
                        if (!isNullOrUndefined(event[fieldMapping.location])) {
                            appSubjectWrap.appendChild(createElement('div', {
                                className: APPOINTMENT_LOCATION,
                                innerHTML: event[fieldMapping.location]
                            }));
                        }
                        if (!isNullOrUndefined(event[fieldMapping.recurrenceRule])) {
                            var iconClass = event[fieldMapping.id] === event[fieldMapping.recurrenceID] ? EVENT_RECURRENCE_ICON_CLASS : EVENT_RECURRENCE_EDIT_ICON_CLASS;
                            appSubjectWrap.appendChild(createElement('div', { className: ICON + ' ' + iconClass }));
                        }
                        var strDate = event[fieldMapping.startTime];
                        var endDate = event[fieldMapping.endTime];
                        var isAllDay = event[fieldMapping.isAllDay];
                        var allDayStr = this.l10n.getConstant('allDay');
                        var timeStr = this.parent.globalize.formatDate(strDate, { skeleton: 'hm' }) + ' - ' + this.parent.globalize.formatDate(endDate, { skeleton: 'hm' });
                        if (!isNullOrUndefined(event.data)) {
                            var eventString = (endDate.getTime() - strDate.getTime()) / MS_PER_DAY >= 1 ? allDayStr : timeStr;
                            allDayStr = eventString + ' (' + this.l10n.getConstant('day') + ' ' + event.data.index + '/' + event.data.count + ')';
                        }
                        var appDateTime = createElement('div', {
                            className: AGENDA_DATETIME_CLASS,
                            innerHTML: !isNullOrUndefined(event.data) || isAllDay ? allDayStr : timeStr
                        });
                        return [appSubjectWrap, appDateTime];
                    }
                }, {
                    key: 'processAgendaEvents',
                    value: function processAgendaEvents(events) {
                        var eventsProcessed = [];
                        var _iteratorNormalCompletion39 = true;
                        var _didIteratorError39 = false;
                        var _iteratorError39 = undefined;

                        try {
                            for (var _iterator39 = events[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
                                var event = _step39.value;

                                var splited = this.parent.eventBase.splitEventByDay(event);
                                eventsProcessed = eventsProcessed.concat(splited.length > 1 ? splited : event);
                            }
                        } catch (err) {
                            _didIteratorError39 = true;
                            _iteratorError39 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion39 && _iterator39.return) {
                                    _iterator39.return();
                                }
                            } finally {
                                if (_didIteratorError39) {
                                    throw _iteratorError39;
                                }
                            }
                        }

                        return eventsProcessed;
                    }
                }, {
                    key: 'wireEventActions',
                    value: function wireEventActions() {
                        var eventElement = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_CLASS));
                        var _iteratorNormalCompletion40 = true;
                        var _didIteratorError40 = false;
                        var _iteratorError40 = undefined;

                        try {
                            for (var _iterator40 = eventElement[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
                                var element = _step40.value;

                                this.parent.eventBase.wireAppointmentEvents(element);
                            }
                        } catch (err) {
                            _didIteratorError40 = true;
                            _iteratorError40 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion40 && _iterator40.return) {
                                    _iterator40.return();
                                }
                            } finally {
                                if (_didIteratorError40) {
                                    throw _iteratorError40;
                                }
                            }
                        }

                        var dateHeaderElement = [].slice.call(this.parent.element.querySelectorAll('.e-m-date'));
                        var _iteratorNormalCompletion41 = true;
                        var _didIteratorError41 = false;
                        var _iteratorError41 = undefined;

                        try {
                            for (var _iterator41 = dateHeaderElement[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
                                var _element = _step41.value;

                                EventHandler.add(_element, 'click', this.parent.agendaModule.dayNavigationClick, this);
                            }
                        } catch (err) {
                            _didIteratorError41 = true;
                            _iteratorError41 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion41 && _iterator41.return) {
                                    _iterator41.return();
                                }
                            } finally {
                                if (_didIteratorError41) {
                                    throw _iteratorError41;
                                }
                            }
                        }
                    }
                }]);

                return AgendaBase;
            }();

            _export('Agenda', Agenda = function (_ViewBase3) {
                _inherits(Agenda, _ViewBase3);

                /**
                 * Constructor for agenda view
                 */
                function Agenda(parent) {
                    _classCallCheck(this, Agenda);

                    var _this26 = _possibleConstructorReturn(this, (Agenda.__proto__ || Object.getPrototypeOf(Agenda)).call(this, parent));

                    _this26.viewClass = 'e-agenda-view';
                    _this26.isInverseTableSelect = false;
                    _this26.agendaDates = {};
                    _this26.virtualScrollTop = 1;
                    _this26.minDate = new Date(1900, 0, 1);
                    _this26.maxDate = new Date(2099, 11, 31);
                    _this26.agendaBase = new AgendaBase(parent);
                    return _this26;
                }
                /**
                 * Get module name.
                 */


                _createClass(Agenda, [{
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'agenda';
                    }
                }, {
                    key: 'renderLayout',
                    value: function renderLayout() {
                        this.agendaDates = {};
                        this.element = createElement('div', { className: TABLE_WRAP_CLASS });
                        addClass([this.element], this.viewClass);
                        this.element.appendChild(this.createTableLayout(OUTER_TABLE_CLASS));
                        this.parent.element.querySelector('.' + TABLE_CONTAINER_CLASS).appendChild(this.element);
                        var eTr = createElement('tr');
                        this.element.querySelector('tbody').appendChild(eTr);
                        var workTd = createElement('td');
                        eTr.appendChild(workTd);
                        var wrap = createElement('div', { className: CONTENT_WRAP_CLASS });
                        workTd.appendChild(wrap);
                        var tbl = this.createTableLayout(CONTENT_TABLE_CLASS);
                        wrap.appendChild(tbl);
                        var tBody = tbl.querySelector('tbody');
                        var agendaDate = resetTime(this.parent.selectedDate);
                        this.renderEmptyContent(tBody, agendaDate);
                        this.wireEvents();
                        this.parent.notify(contentReady, {});
                    }
                }, {
                    key: 'eventLoad',
                    value: function eventLoad(args) {
                        this.parent.eventsProcessed = this.agendaBase.processAgendaEvents(args.processedData);
                        var agendaDate = resetTime(this.parent.selectedDate);
                        var tBody = this.element.querySelector('.' + CONTENT_WRAP_CLASS + ' tbody');
                        tBody.innerHTML = '';
                        this.renderContent(tBody, agendaDate);
                        this.agendaBase.wireEventActions();
                        var contentArea = closest(tBody, '.' + CONTENT_WRAP_CLASS);
                        contentArea.scrollTop = 1;
                    }
                }, {
                    key: 'renderContent',
                    value: function renderContent(tBody, agendaDate) {
                        var fieldMapping = this.parent.eventFields;
                        var firstDate = new Date(agendaDate.getTime());
                        var lastDate = this.getEndDateFromStartDate(firstDate);
                        var isObject = this.appointmentFiltering(firstDate, lastDate);
                        if (isObject.length === 0) {
                            lastDate = firstDate;
                            firstDate = new Date(this.minDate.getTime());
                            isObject = this.appointmentFiltering(firstDate, lastDate);
                            if (isObject.length === 0) {
                                firstDate = lastDate;
                                lastDate = new Date(this.maxDate.getTime());
                                isObject = this.appointmentFiltering(firstDate, lastDate);
                            }
                        }
                        if (isObject.length > 0) {
                            var appoint = isObject;
                            agendaDate = appoint[0][fieldMapping.startTime];
                            this.updateHeaderText(appoint[0][fieldMapping.startTime]);
                        }
                        var endDate = void 0;
                        if (!this.parent.hideEmptyAgendaDays || this.parent.agendaDaysCount > 0 && isObject.length > 0) {
                            var noOfDays = !this.parent.hideEmptyAgendaDays || !this.parent.activeViewOptions.allowVirtualScrolling || this.parent.agendaDaysCount < isObject.length ? this.parent.agendaDaysCount : isObject.length;
                            for (var day = 0; day < noOfDays; day++) {
                                var filterData = [];
                                filterData = this.appointmentFiltering(agendaDate);
                                var nTr = this.createTableRowElement(agendaDate, 'data');
                                if (this.element.querySelector('tr[aria-rowindex="' + parseInt(nTr.getAttribute('aria-rowindex'), 10) + '"]')) {
                                    continue;
                                }
                                var dTd = nTr.children[0];
                                var aTd = nTr.children[1];
                                if (filterData.length > 0 || !this.parent.hideEmptyAgendaDays && filterData.length === 0) {
                                    var elementType = !this.parent.hideEmptyAgendaDays && filterData.length === 0 ? 'noEvents' : 'data';
                                    dTd.appendChild(this.createDateHeaderElement(agendaDate));
                                    nTr.appendChild(dTd);
                                    nTr.appendChild(this.agendaBase.createAgendaContentElement(elementType, filterData, aTd));
                                    tBody.appendChild(nTr);
                                } else if (this.parent.activeViewOptions.allowVirtualScrolling) {
                                    day--;
                                }
                                if (this.isCurrentDate(new Date(agendaDate.getTime()))) {
                                    addClass(dTd.children, AGENDA_CURRENT_DAY_CLASS);
                                }
                                agendaDate = addDays(agendaDate, 1);
                                if (agendaDate.getTime() > lastDate.getTime()) {
                                    break;
                                }
                            }
                            endDate = new Date(agendaDate.getTime() - MS_PER_DAY);
                        } else {
                            this.renderEmptyContent(tBody, agendaDate);
                            endDate = addDays(agendaDate, this.parent.agendaDaysCount - 1);
                        }
                        this.agendaDates = { start: firstDate, end: endDate };
                    }
                }, {
                    key: 'renderEmptyContent',
                    value: function renderEmptyContent(tBody, agendaDate) {
                        var eTr = this.createTableRowElement(agendaDate, 'noEvents');
                        var eTd = eTr.children[0];
                        var noEvents = createElement('div', {
                            className: AGENDA_EMPTY_EVENT_CLASS,
                            innerHTML: this.l10n.getConstant('noEvents')
                        });
                        eTd.appendChild(noEvents);
                        tBody.appendChild(eTr);
                    }
                }, {
                    key: 'createTableRowElement',
                    value: function createTableRowElement(date, type) {
                        var daysCount = getDaysCount(this.parent.selectedDate.getTime(), date.getTime());
                        var tr = createElement('tr', { attrs: { 'role': 'row', 'aria-rowindex': daysCount.toString() } });
                        var td = createElement('td', {
                            attrs: {
                                'class': AGENDA_CELLS_CLASS,
                                'role': 'gridcell',
                                'aria-selected': 'false',
                                'aria-colindex': daysCount.toString(),
                                'data-date': date.getTime().toString()
                            }
                        });
                        var dTd = td.cloneNode();
                        var aTd = td.cloneNode();
                        tr.appendChild(dTd);
                        if (type !== 'noEvents') {
                            tr.appendChild(aTd);
                        }
                        return tr;
                    }
                }, {
                    key: 'createDateHeaderElement',
                    value: function createDateHeaderElement(date) {
                        var dateHeader = void 0;
                        if (this.parent.activeViewOptions.dateHeaderTemplate) {
                            dateHeader = createElement('div', { className: AGENDA_HEADER_CLASS });
                            var templateArgs = { date: date, type: 'dateHeader' };
                            var template = this.parent.getDateHeaderTemplate()(templateArgs);
                            append([].slice.call(template), dateHeader);
                        } else {
                            dateHeader = this.getMobileDateElement(date, AGENDA_HEADER_CLASS);
                        }
                        return dateHeader;
                    }
                }, {
                    key: 'agendaScrolling',
                    value: function agendaScrolling(event) {
                        this.parent.quickPopup.quickPopup.close();
                        if (this.parent.activeViewOptions.allowVirtualScrolling) {
                            this.virtualScrolling(event);
                        }
                    }
                }, {
                    key: 'virtualScrolling',
                    value: function virtualScrolling(event) {
                        var target = event.target;
                        var scrollTop = target.scrollTop;
                        var scrollHeight = target.scrollHeight;
                        var offsetHeight = target.clientHeight;
                        var totalHeight = scrollTop + offsetHeight;
                        var direction = this.virtualScrollTop < scrollTop ? 'next' : 'previous';
                        var tBody = target.querySelector('tbody');
                        var emptyTBody = createElement('tbody');
                        var topElement = this.getElementFromScrollerPosition(event, direction);
                        var scrollDate = new Date(parseInt(topElement.getAttribute('data-date'), 0));
                        var filterDate = void 0;
                        var filterData = void 0;
                        if (scrollTop === 0) {
                            filterDate = this.getPreviousNextDate(addDays(scrollDate, -1), direction);
                            filterData = this.appointmentFiltering(filterDate.start, filterDate.end);
                            if (filterData.length > 0 || !this.parent.hideEmptyAgendaDays) {
                                this.renderContent(emptyTBody, filterDate.start);
                                tBody.innerHTML = emptyTBody.innerHTML + tBody.innerHTML;
                                this.agendaBase.wireEventActions();
                                for (var s = 0, element = tBody.children; s < element.length; s++) {
                                    if (element[s].getAttribute('aria-rowindex') === topElement.getAttribute('aria-colindex')) {
                                        var scrollToValue = element[s].offsetTop - this.element.querySelector('.e-agenda-item').offsetHeight;
                                        target.scrollTop = scrollToValue;
                                        break;
                                    }
                                }
                                this.updateHeaderText(scrollDate);
                            }
                        } else if (totalHeight === scrollHeight) {
                            filterDate = this.getPreviousNextDate(addDays(scrollDate, 1), direction);
                            filterData = this.appointmentFiltering(filterDate.start, filterDate.end);
                            if (filterData.length > 0 || !this.parent.hideEmptyAgendaDays) {
                                this.renderContent(emptyTBody, filterDate.start);
                                tBody.innerHTML += emptyTBody.innerHTML;
                                this.agendaBase.wireEventActions();
                                this.updateHeaderText(scrollDate);
                            }
                        } else {
                            this.updateHeaderText(scrollDate);
                        }
                        this.virtualScrollTop = scrollTop;
                        var selectedElements = this.parent.eventBase.getSelectedAppointments();
                        if (selectedElements.length > 0) {
                            selectedElements[selectedElements.length - 1].focus();
                        }
                    }
                }, {
                    key: 'getElementFromScrollerPosition',
                    value: function getElementFromScrollerPosition(event, direction) {
                        var filterElement = void 0;
                        var target = event.target;
                        var scrollTop = target.scrollTop;
                        var scrollHeight = target.scrollHeight;
                        var offsetHeight = target.clientHeight;
                        var totalHeight = scrollTop + offsetHeight;
                        var liCollection = [].slice.call(target.querySelectorAll('.e-agenda-item'));
                        var li = void 0;
                        var liDetails = void 0;
                        if (liCollection.length > 0) {
                            if (scrollTop === 0) {
                                li = liCollection[0];
                                filterElement = closest(li, '.' + AGENDA_CELLS_CLASS);
                            } else if (totalHeight === scrollHeight) {
                                li = liCollection[liCollection.length - 1];
                                filterElement = closest(li, '.' + AGENDA_CELLS_CLASS);
                            } else {
                                for (var a = 0, length = liCollection.length; a < length; a++) {
                                    li = liCollection[a];
                                    liDetails = li.getBoundingClientRect();
                                    if (liDetails.top >= 0) {
                                        filterElement = closest(li, '.' + AGENDA_CELLS_CLASS);
                                        break;
                                    }
                                }
                            }
                        }
                        return filterElement;
                    }
                }, {
                    key: 'updateHeaderText',
                    value: function updateHeaderText(date) {
                        if (this.parent.showHeaderBar) {
                            var dateRangeText = this.getDateRangeText(date);
                            var headerElement = this.parent.headerModule.element.querySelector('.e-date-range');
                            headerElement.setAttribute('aria-label', dateRangeText);
                            headerElement.querySelector('.e-tbar-btn-text').innerHTML = dateRangeText;
                        }
                    }
                }, {
                    key: 'getPreviousNextDate',
                    value: function getPreviousNextDate(date, type) {
                        var currentDate = new Date(date.getTime());
                        var firstDate = this.getStartDateFromEndDate(date);
                        var lastDate = this.getEndDateFromStartDate(date);
                        var daysCount = 0;
                        do {
                            var filterData = this.appointmentFiltering(currentDate);
                            if (filterData.length > 0 || !this.parent.hideEmptyAgendaDays) {
                                daysCount++;
                            }
                            currentDate = addDays(currentDate, type === 'next' ? 1 : -1);
                            if (currentDate < firstDate || currentDate > lastDate) {
                                break;
                            }
                        } while (daysCount !== this.parent.agendaDaysCount);
                        var endDate = addDays(currentDate, type === 'next' ? -1 : 1);
                        return type === 'next' ? { start: date, end: addDays(endDate, 1) } : { start: endDate, end: addDays(date, 1) };
                    }
                }, {
                    key: 'appointmentFiltering',
                    value: function appointmentFiltering(startDate, endDate) {
                        var dateStart = void 0;
                        var dateEnd = void 0;
                        if (!isNullOrUndefined(startDate) && isNullOrUndefined(endDate)) {
                            dateStart = resetTime(new Date(startDate.getTime()));
                            dateEnd = setTime(new Date(dateStart.getTime()), MS_PER_DAY);
                        } else {
                            dateStart = new Date(startDate.getTime());
                            dateEnd = new Date(endDate.getTime());
                        }
                        var filterData = this.parent.eventBase.filterEvents(dateStart, dateEnd);
                        return filterData;
                    }
                }, {
                    key: 'getStartDateFromEndDate',
                    value: function getStartDateFromEndDate(endDate) {
                        var filterDate = void 0;
                        var fieldMapping = this.parent.eventFields;
                        if (this.parent.eventsProcessed.length > 0) {
                            var firstDate = Math.min.apply(Math, this.parent.eventsProcessed.map(function (a) {
                                var date = a[fieldMapping.startTime];
                                return date.getTime();
                            }));
                            filterDate = this.parent.hideEmptyAgendaDays ? new Date(firstDate) : this.minDate;
                        } else {
                            filterDate = this.parent.hideEmptyAgendaDays ? addMonths(endDate, -1) : this.minDate;
                        }
                        return resetTime(filterDate);
                    }
                }, {
                    key: 'getEndDateFromStartDate',
                    value: function getEndDateFromStartDate(startDate) {
                        var filterDate = void 0;
                        var fieldMapping = this.parent.eventFields;
                        if (this.parent.eventsProcessed.length > 0) {
                            var lastDate = Math.max.apply(Math, this.parent.eventsProcessed.map(function (a) {
                                var date = a[fieldMapping.endTime];
                                return date.getTime();
                            }));
                            filterDate = this.parent.hideEmptyAgendaDays ? new Date(lastDate) : this.maxDate;
                        } else {
                            filterDate = this.parent.hideEmptyAgendaDays ? addMonths(startDate, 1) : this.maxDate;
                        }
                        return resetTime(addDays(filterDate, 1));
                    }
                }, {
                    key: 'getNextPreviousDate',
                    value: function getNextPreviousDate(type) {
                        var noOfDays = type === 'next' ? 1 : -1;
                        return addDays(this.parent.selectedDate, noOfDays);
                    }
                }, {
                    key: 'startDate',
                    value: function startDate() {
                        return resetTime(this.parent.selectedDate);
                    }
                }, {
                    key: 'endDate',
                    value: function endDate() {
                        if (this.parent.activeViewOptions.allowVirtualScrolling) {
                            return this.getEndDateFromStartDate(this.startDate());
                        } else {
                            return addDays(this.startDate(), this.parent.agendaDaysCount);
                        }
                    }
                }, {
                    key: 'getDateRangeText',
                    value: function getDateRangeText(date) {
                        var formatDate = this.parent.activeViewOptions.dateFormat ? this.parent.activeViewOptions.dateFormat : 'MMMM y';
                        if (this.parent.activeViewOptions.allowVirtualScrolling || this.parent.isAdaptive) {
                            var currentDate = isNullOrUndefined(date) ? this.parent.selectedDate : date;
                            return this.parent.globalize.formatDate(currentDate, { format: formatDate });
                        } else {
                            var startDate = this.parent.selectedDate;
                            var endDate = addDays(startDate, this.parent.agendaDaysCount - 1);
                            return this.formatDateRange(startDate, endDate);
                        }
                    }
                }, {
                    key: 'dayNavigationClick',
                    value: function dayNavigationClick(e) {
                        var date = this.parent.getDateFromElement(closest(e.currentTarget, '.' + AGENDA_CELLS_CLASS));
                        if (!isNullOrUndefined(date) && !this.parent.isAdaptive) {
                            this.parent.setProperties({ selectedDate: date }, true);
                            this.parent.changeView('Day');
                        }
                    }
                }, {
                    key: 'wireEvents',
                    value: function wireEvents() {
                        EventHandler.add(this.element.querySelector('.' + CONTENT_WRAP_CLASS), scroll, this.agendaScrolling, this);
                    }
                }, {
                    key: 'unWireEvents',
                    value: function unWireEvents() {
                        EventHandler.remove(this.element.querySelector('.' + CONTENT_WRAP_CLASS), scroll, this.agendaScrolling);
                        var dateHeaderElement = [].slice.call(this.element.querySelectorAll('.e-m-date'));
                        var _iteratorNormalCompletion42 = true;
                        var _didIteratorError42 = false;
                        var _iteratorError42 = undefined;

                        try {
                            for (var _iterator42 = dateHeaderElement[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
                                var element = _step42.value;

                                EventHandler.remove(element, 'click', this.dayNavigationClick);
                            }
                        } catch (err) {
                            _didIteratorError42 = true;
                            _iteratorError42 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion42 && _iterator42.return) {
                                    _iterator42.return();
                                }
                            } finally {
                                if (_didIteratorError42) {
                                    throw _iteratorError42;
                                }
                            }
                        }
                    }
                }, {
                    key: 'addEventListener',
                    value: function addEventListener() {
                        this.parent.on(scrollUiUpdate, this.onAgendaScrollUiUpdate, this);
                        this.parent.on(dataReady, this.eventLoad, this);
                    }
                }, {
                    key: 'removeEventListener',
                    value: function removeEventListener() {
                        this.parent.off(scrollUiUpdate, this.onAgendaScrollUiUpdate);
                        this.parent.off(dataReady, this.eventLoad);
                    }
                }, {
                    key: 'onAgendaScrollUiUpdate',
                    value: function onAgendaScrollUiUpdate(args) {
                        var headerHeight = 2;
                        if (this.parent.headerModule) {
                            headerHeight += this.parent.headerModule.getHeaderElement().offsetHeight;
                            if (this.parent.activeViewOptions.allowVirtualScrolling) {
                                addClass(this.parent.headerModule.element.querySelectorAll('.e-prev,.e-next'), AGENDA_HIDDEN_CLASS);
                                addClass([this.parent.headerModule.element.querySelector('.e-date-range')], AGENDA_ALIGN_CLASS);
                            } else {
                                removeClass(this.parent.headerModule.element.querySelectorAll('.e-prev,.e-next'), AGENDA_HIDDEN_CLASS);
                                removeClass([this.parent.headerModule.element.querySelector('.e-date-range')], AGENDA_ALIGN_CLASS);
                            }
                        }
                        var contentArea = this.element.querySelector('.' + CONTENT_WRAP_CLASS);
                        contentArea.style.height = formatUnit(this.parent.element.offsetHeight - headerHeight);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this.parent.isDestroyed) {
                            return;
                        }
                        if (this.element) {
                            this.unWireEvents();
                            remove(this.element);
                            this.element = null;
                            if (this.parent.headerModule && this.parent.activeViewOptions.allowVirtualScrolling) {
                                removeClass(this.parent.headerModule.element.querySelectorAll('.e-prev,.e-next'), AGENDA_HIDDEN_CLASS);
                                removeClass([this.parent.headerModule.element.querySelector('.e-date-range')], AGENDA_ALIGN_CLASS);
                            }
                        }
                    }
                }]);

                return Agenda;
            }(ViewBase));

            _export('MonthAgenda', MonthAgenda = function (_Month) {
                _inherits(MonthAgenda, _Month);

                /**
                 * Constructor
                 */
                function MonthAgenda(parent) {
                    _classCallCheck(this, MonthAgenda);

                    var _this27 = _possibleConstructorReturn(this, (MonthAgenda.__proto__ || Object.getPrototypeOf(MonthAgenda)).call(this, parent));

                    _this27.dayNameFormat = 'narrow';
                    _this27.viewClass = 'e-month-agenda-view';
                    _this27.agendaDates = {};
                    _this27.agendaBase = new AgendaBase(parent);
                    return _this27;
                }

                _createClass(MonthAgenda, [{
                    key: 'renderAppointmentContainer',
                    value: function renderAppointmentContainer() {
                        var contentArea = this.getContentAreaElement();
                        var appWrap = createElement('div', { className: APPOINTMENT_WRAP_CLASS });
                        contentArea.appendChild(appWrap);
                        this.appendAppContainer(appWrap);
                        this.setEventWrapperHeight();
                    }
                }, {
                    key: 'getDayNameFormat',
                    value: function getDayNameFormat() {
                        if (this.parent.isAdaptive) {
                            return 'narrow';
                        }
                        return 'abbreviated';
                    }
                }, {
                    key: 'setEventWrapperHeight',
                    value: function setEventWrapperHeight() {
                        var headerHeight = (this.parent.headerModule ? this.parent.headerModule.getHeaderElement().offsetHeight : 0) + 2;
                        var contentArea = this.getContentAreaElement().firstChild;
                        var dateHeader = this.element.querySelector('.' + DATE_HEADER_WRAP_CLASS);
                        var availableHeight = this.parent.element.offsetHeight - headerHeight - dateHeader.offsetHeight - contentArea.offsetHeight;
                        var eventWrapper = this.element.querySelector('.' + APPOINTMENT_WRAP_CLASS);
                        eventWrapper.style.height = formatUnit(availableHeight);
                    }
                }, {
                    key: 'onDataReady',
                    value: function onDataReady(args) {
                        this.setEventWrapperHeight();
                        this.clearElements();
                        this.parent.eventsProcessed = this.agendaBase.processAgendaEvents(args.processedData);
                        var count = 0;
                        var _iteratorNormalCompletion43 = true;
                        var _didIteratorError43 = false;
                        var _iteratorError43 = undefined;

                        try {
                            for (var _iterator43 = this.renderDates[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
                                var date = _step43.value;

                                var filterData = this.appointmentFiltering(date);
                                var workCell = this.element.querySelectorAll('.' + WORK_CELLS_CLASS)[count];
                                if (filterData.length > 0) {
                                    if (!workCell.querySelector('.' + APPOINTMENT_INDICATOR_CLASS)) {
                                        workCell.appendChild(createElement('div', { className: APPOINTMENT_INDICATOR_CLASS }));
                                    }
                                    if (date.getTime() === resetTime(new Date(this.parent.selectedDate.getTime())).getTime()) {
                                        this.onEventRender(filterData);
                                    }
                                }
                                count++;
                            }
                        } catch (err) {
                            _didIteratorError43 = true;
                            _iteratorError43 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion43 && _iterator43.return) {
                                    _iterator43.return();
                                }
                            } finally {
                                if (_didIteratorError43) {
                                    throw _iteratorError43;
                                }
                            }
                        }
                    }
                }, {
                    key: 'onCellClick',
                    value: function onCellClick(event) {
                        var filterData = this.appointmentFiltering(event.startTime);
                        this.onEventRender(filterData);
                        this.parent.setProperties({ selectedDate: new Date('' + event.startTime) }, true);
                    }
                }, {
                    key: 'onEventRender',
                    value: function onEventRender(events) {
                        var appWrap = this.element.querySelector('.' + APPOINTMENT_WRAP_CLASS);
                        appWrap.innerHTML = '';
                        if (events.length > 0) {
                            var appContainer = createElement('div', { className: APPOINTMENT_CONTAINER_CLASS });
                            appWrap.appendChild(this.agendaBase.createAgendaContentElement('data', events, appContainer));
                        } else {
                            this.appendAppContainer(appWrap);
                        }
                        this.agendaBase.wireEventActions();
                    }
                }, {
                    key: 'appointmentFiltering',
                    value: function appointmentFiltering(date) {
                        var dateStart = resetTime(new Date(date.getTime()));
                        var dateEnd = setTime(new Date(dateStart.getTime()), MS_PER_DAY);
                        return this.parent.eventBase.filterEvents(dateStart, dateEnd);
                    }
                }, {
                    key: 'clearElements',
                    value: function clearElements() {
                        var appointmentIndicators = [].slice.call(this.element.querySelectorAll('.' + APPOINTMENT_INDICATOR_CLASS));
                        var _iteratorNormalCompletion44 = true;
                        var _didIteratorError44 = false;
                        var _iteratorError44 = undefined;

                        try {
                            for (var _iterator44 = appointmentIndicators[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
                                var appointmentIndicator = _step44.value;

                                remove(appointmentIndicator);
                            }
                        } catch (err) {
                            _didIteratorError44 = true;
                            _iteratorError44 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion44 && _iterator44.return) {
                                    _iterator44.return();
                                }
                            } finally {
                                if (_didIteratorError44) {
                                    throw _iteratorError44;
                                }
                            }
                        }

                        this.appendAppContainer(this.element.querySelector('.' + APPOINTMENT_WRAP_CLASS));
                    }
                }, {
                    key: 'appendAppContainer',
                    value: function appendAppContainer(appWrap) {
                        var app = createElement('div', { className: APPOINTMENT_CONTAINER_CLASS });
                        addClass([app], AGENDA_NO_EVENT_CLASS);
                        app.innerHTML = this.l10n.getConstant('noEvents');
                        appWrap.innerHTML = '';
                        appWrap.appendChild(app);
                    }
                }, {
                    key: 'getModuleName',
                    value: function getModuleName() {
                        return 'monthAgenda';
                    }
                }]);

                return MonthAgenda;
            }(Month));

            _export('Schedule', Schedule);

            _export('cellClick', _cellClick);

            _export('cellDoubleClick', cellDoubleClick);

            _export('actionBegin', actionBegin);

            _export('actionComplete', actionComplete);

            _export('actionFailure', actionFailure);

            _export('navigating', navigating);

            _export('renderCell', renderCell);

            _export('eventClick', _eventClick);

            _export('eventRendered', eventRendered);

            _export('dataBinding', dataBinding);

            _export('dataBound', dataBound);

            _export('popupOpen', popupOpen);

            _export('initialLoad', initialLoad);

            _export('initialEnd', initialEnd);

            _export('dataReady', dataReady);

            _export('contentReady', contentReady);

            _export('scroll', scroll);

            _export('scrollUiUpdate', scrollUiUpdate);

            _export('uiUpdate', uiUpdate);

            _export('documentClick', documentClick);

            _export('cellMouseDown', _cellMouseDown);

            _export('WEEK_LENGTH', WEEK_LENGTH);

            _export('MS_PER_DAY', MS_PER_DAY);

            _export('MS_PER_MINUTE', MS_PER_MINUTE);

            _export('getWeekFirstDate', getWeekFirstDate);

            _export('firstDateOfMonth', firstDateOfMonth);

            _export('lastDateOfMonth', lastDateOfMonth);

            _export('getWeekNumber', getWeekNumber);

            _export('setTime', setTime);

            _export('resetTime', resetTime);

            _export('getDateInMs', getDateInMs);

            _export('addDays', addDays);

            _export('addMonths', addMonths);

            _export('addYears', addYears);

            _export('getStartEndHours', getStartEndHours);

            _export('getMaxDays', getMaxDays);

            _export('getDaysCount', getDaysCount);

            _export('getScrollBarWidth', getScrollBarWidth);

            _export('HeaderRenderer', HeaderRenderer);

            _export('ViewBase', ViewBase);

            _export('Day', Day);

            _export('Week', Week);

            _export('WorkWeek', WorkWeek);

            _export('Month', Month);

            _export('Agenda', Agenda);

            _export('MonthAgenda', MonthAgenda);

            _export('Timezone', Timezone);

            _export('localTimezoneName', localTimezoneName);

            _export('timezoneData', timezoneData);

            _export('RecurrenceEditor', RecurrenceEditor);
        }
    };
});

//# sourceMappingURL=ej2-schedule.es2015-compiled.js.map