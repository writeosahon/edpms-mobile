import { Animation, Browser, ChildProperty, Complex, Component, Event, EventHandler, Internationalization, KeyboardEvents, L10n, NotifyPropertyChanges, Property, Touch, addClass, append, cldrData, closest, compile, createElement, extend, formatUnit, getDefaultDateObject, getValue, isNullOrUndefined, prepend, remove, removeClass, setStyleAttribute } from '@syncfusion/ej2-base';
import { Toolbar } from '@syncfusion/ej2-navigations';
import { Calendar, DatePicker, DateTimePicker } from '@syncfusion/ej2-calendars';
import { Dialog, Popup, Tooltip } from '@syncfusion/ej2-popups';
import { DataManager, Predicate, Query } from '@syncfusion/ej2-data';
import { Button, CheckBox, RadioButton } from '@syncfusion/ej2-buttons';
import { FormValidator, Input, NumericTextBox } from '@syncfusion/ej2-inputs';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ListBase } from '@syncfusion/ej2-lists';

/**
 * Constants
 */
/** @hidden */
const cellClick = 'cellClick';
/** @hidden */
const cellDoubleClick = 'cellDoubleClick';
/** @hidden */
const actionBegin = 'actionBegin';
/** @hidden */
const actionComplete = 'actionComplete';
/** @hidden */
const actionFailure = 'actionFailure';
/** @hidden */
const navigating = 'navigating';
/** @hidden */
const renderCell = 'renderCell';
/** @hidden */
const eventClick = 'eventClick';
/** @hidden */
const eventRendered = 'eventRendered';
/** @hidden */
const dataBinding = 'dataBinding';
/** @hidden */
const dataBound = 'dataBound';
/** @hidden */
const popupOpen = 'popupOpen';
/**
 * Specifies schedule internal events
 */
/** @hidden */
const initialLoad = 'initial-load';
/** @hidden */
const initialEnd = 'initial-end';
/** @hidden */
const dataReady = 'data-ready';
/** @hidden */
const contentReady = 'content-ready';
/** @hidden */
const scroll = 'scroll';
/** @hidden */
const scrollUiUpdate = 'scroll-ui-update';
/** @hidden */
const uiUpdate = 'ui-update';
/** @hidden */
const documentClick = 'document-click';
/** @hidden */
const cellMouseDown = 'cell-mouse-down';

/**
 * Schedule common utilities
 */
const WEEK_LENGTH = 7;
const MS_PER_DAY = 86400000;
const MS_PER_MINUTE = 60000;
function getWeekFirstDate(date1, firstDayOfWeek) {
    let date = new Date(date1.getTime());
    firstDayOfWeek = (firstDayOfWeek - date.getDay() + 7 * (-1)) % 7;
    return new Date(date.setDate(date.getDate() + firstDayOfWeek));
}
function firstDateOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth());
}
function lastDateOfMonth(dt) {
    return new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
}
function getWeekNumber(dt) {
    let currentDate = new Date('' + dt).valueOf();
    let date = new Date(dt.getFullYear(), 0, 1).valueOf();
    let a = (currentDate - date);
    return Math.ceil((((a) / MS_PER_DAY) + new Date(date).getDay() + 1) / 7);
}
function setTime(date, time) {
    let tzOffsetBefore = date.getTimezoneOffset();
    let d = new Date(date.getTime() + time);
    let tzOffsetDiff = d.getTimezoneOffset() - tzOffsetBefore;
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
    let day = date.getDate();
    date.setDate(1);
    date.setMonth(date.getMonth() + i);
    date.setDate(Math.min(day, getMaxDays(date)));
    return date;
}
function addYears(date, i) {
    date = new Date('' + date);
    let day = date.getDate();
    date.setDate(1);
    date.setFullYear(date.getFullYear() + i);
    date.setDate(Math.min(day, getMaxDays(date)));
    return date;
}
function getStartEndHours(date, startHour, endHour) {
    let date1 = new Date(date.getTime());
    date1.setHours(startHour.getHours());
    date1.setMinutes(startHour.getMinutes());
    date1.setSeconds(startHour.getSeconds());
    let date2 = new Date(date.getTime());
    if (endHour.getHours() === 0) {
        date2 = addDays(date2, 1);
    }
    else {
        date2.setHours(endHour.getHours());
        date2.setMinutes(endHour.getMinutes());
        date2.setSeconds(endHour.getSeconds());
    }
    return { startHour: date1, endHour: date2 };
}
function getMaxDays(d) {
    let date = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    return date.getDate();
}
function getDaysCount(startDate, endDate) {
    let strTime = resetTime(new Date(startDate));
    let endTime = resetTime(new Date(endDate));
    return (endTime.getTime() - strTime.getTime()) / MS_PER_DAY;
}
/** @hidden */
let scrollWidth = null;
/** @hidden */
function getScrollBarWidth() {
    if (scrollWidth !== null) {
        return scrollWidth;
    }
    let divNode = document.createElement('div');
    let value = 0;
    divNode.style.cssText = 'width:100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;';
    document.body.appendChild(divNode);
    value = (divNode.offsetWidth - divNode.clientWidth) | 0;
    document.body.removeChild(divNode);
    return scrollWidth = value;
}

/**
 * CSS Constants
 */
/** @hidden */
const ROOT = 'e-schedule';
/** @hidden */
const RTL = 'e-rtl';
/** @hidden */
const DEVICE = 'e-device';
/** @hidden */
const ICON = 'e-icons';
/** @hidden */
const ENABLE_CLASS = 'e-enable';
/** @hidden */
const DISABLE_CLASS = 'e-disable';
/** @hidden */
const TABLE_CONTAINER_CLASS = 'e-table-container';
/** @hidden */
const SCHEDULE_TABLE_CLASS = 'e-schedule-table';
/** @hidden */
const ALLDAY_CELLS_CLASS = 'e-all-day-cells';
/** @hidden */
const HEADER_POPUP_CLASS = 'e-header-popup';
/** @hidden */
const HEADER_CALENDAR_CLASS = 'e-header-calendar';
/** @hidden */
const ALLDAY_ROW_CLASS = 'e-all-day-row';
/** @hidden */
const CONTENT_TABLE_CLASS = 'e-content-table';
/** @hidden */
const WORK_CELLS_CLASS = 'e-work-cells';
/** @hidden */
const WORK_HOURS_CLASS = 'e-work-hours';
/** @hidden */
const POPUP_OPEN = 'e-popup-open';
/** @hidden */
const DATE_HEADER_WRAP_CLASS = 'e-date-header-wrap';
/** @hidden */
const DATE_HEADER_CONTAINER_CLASS = 'e-date-header-container';
/** @hidden */
const HEADER_CELLS_CLASS = 'e-header-cells';
/** @hidden */
const WORKDAY_CLASS = 'e-work-days';
/** @hidden */
const OTHERMONTH_CLASS = 'e-other-month';
/** @hidden */
const CURRENT_DAY_CLASS = 'e-current-day';
/** @hidden */
const CURRENTDATE_CLASS = 'e-current-date';
/** @hidden */

/** @hidden */

/** @hidden */

/** @hidden */
const CURRENT_PANEL_CLASS = 'e-current-panel';
/** @hidden */
const PREVIOUS_PANEL_CLASS = 'e-previous-panel';
/** @hidden */
const NEXT_PANEL_CLASS = 'e-next-panel';
/** @hidden */
const TRANSLATE_CLASS = 'e-translate';
/** @hidden */
const LEFT_INDENT_CLASS = 'e-left-indent';
/** @hidden */
const LEFT_INDENT_WRAP_CLASS = 'e-left-indent-wrap';
/** @hidden */
const TIME_CELLS_WRAP_CLASS = 'e-time-cells-wrap';
/** @hidden */
const TIME_CELLS_CLASS = 'e-time-cells';
/** @hidden */
const ALTERNATE_CELLS_CLASS = 'e-alternate-cells';
/** @hidden */
const CURRENT_TIME_CLASS = 'e-current-time';
/** @hidden */
const CURRENT_TIMELINE_CLASS = 'e-current-timeline';
/** @hidden */
const PREVIOUS_TIMELINE_CLASS = 'e-previous-timeline';
/** @hidden */
const HIDE_CHILDS_CLASS = 'e-hide-childs';
/** @hidden */
const SCROLL_CONTAINER_CLASS = 'e-scroll-container';
/** @hidden */
const WRAPPER_CLASS = 'e-wrapper';
/** @hidden */
const TIMELINE_WRAPPER_CLASS = 'e-timeline-wrapper';
/** @hidden */
const APPOINTMENT_WRAPPER_CLASS = 'e-appointment-wrapper';
/** @hidden */
const DAY_WRAPPER_CLASS = 'e-day-wrapper';
/** @hidden */
const TOOLBAR_CONTAINER = 'e-schedule-toolbar-container';
/** @hidden */
const HEADER_TOOLBAR = 'e-schedule-toolbar';
/** @hidden */
const SELECTED_CELL_CLASS = 'e-selected-cell';
/** @hidden */
const APPOINTMENT_WRAP_CLASS = 'e-appointment-wrap';
/** @hidden */
const APPOINTMENT_CONTAINER_CLASS = 'e-appointment-container';
/** @hidden */
const APPOINTMENT_CLASS = 'e-appointment';
/** @hidden */
const APPOINTMENT_BORDER = 'e-appointment-border';
/** @hidden */
const APPOINTMENT_DETAILS = 'e-appointment-details';
/** @hidden */
const APPOINTMENT_SUBJECT_WRAP = 'e-subject-wrap';
/** @hidden */
const APPOINTMENT_SUBJECT = 'e-subject';
/** @hidden */
const APPOINTMENT_TIME = 'e-time';
/** @hidden */
const APPOINTMENT_LOCATION = 'e-location';
/** @hidden */
const TABLE_WRAP_CLASS = 'e-table-wrap';
/** @hidden */
const OUTER_TABLE_CLASS = 'e-outer-table';
/** @hidden */
const CONTENT_WRAP_CLASS = 'e-content-wrap';
/** @hidden */
const AGENDA_CELLS_CLASS = 'e-agenda-cells';
/** @hidden */
const AGENDA_CURRENT_DAY_CLASS = 'e-current-day';
/** @hidden */
const AGENDA_HEADER_CLASS = 'e-day-date-header';
/** @hidden */
const NAVIGATE_CLASS = 'e-navigate';
/** @hidden */
const DATE_HEADER_CLASS = 'e-date-header';
/** @hidden */

/** @hidden */
const AGENDA_HIDDEN_CLASS = 'e-item-hide';
/** @hidden */
const AGENDA_ALIGN_CLASS = 'e-item-align';
/** @hidden */
const AGENDA_DAY_BORDER_CLASS = 'e-day-border';
/** @hidden */
const AGENDA_DATETIME_CLASS = 'e-date-time';
/** @hidden */
const AGENDA_EMPTY_EVENT_CLASS = 'e-empty-event';
/** @hidden */
const AGENDA_NO_EVENT_CLASS = 'e-no-event';
/** @hidden */
const APPOINTMENT_INDICATOR_CLASS = 'e-appointment-indicator';
/** @hidden */
const EVENT_INDICATOR_CLASS = 'e-indicator';
/** @hidden */
const EVENT_ICON_UP_CLASS = 'e-up-icon';
/** @hidden */
const EVENT_ICON_DOWN_CLASS = 'e-down-icon';
/** @hidden */
const EVENT_ICON_LEFT_CLASS = 'e-left-icon';
/** @hidden */
const EVENT_ICON_RIGHT_CLASS = 'e-right-icon';
/** @hidden */
const EVENT_RECURRENCE_ICON_CLASS = 'e-recurrence-icon';
/** @hidden */
const EVENT_RECURRENCE_EDIT_ICON_CLASS = 'e-recurrence-edit-icon';
/** @hidden */
const HEADER_ROW_CLASS = 'e-header-row';
/** @hidden */
const ALLDAY_APPOINTMENT_WRAPPER_CLASS = 'e-all-day-appointment-wrapper';
/** @hidden */
const ALLDAY_APPOINTMENT_CLASS = 'e-all-day-appointment';
/** @hidden */
const ALLDAY_WRAPPER_CLASS = 'e-all-day-wrapper';
/** @hidden */
const EVENT_COUNT_CLASS = 'e-appointment-hide';
/** @hidden */
const ROW_COUNT_WRAPPER_CLASS = 'e-row-count-wrapper';
/** @hidden */
const ALLDAY_APPOINTMENT_SECTION_CLASS = 'e-all-day-appointment-section';
/** @hidden */
const APPOINTMENT_ROW_EXPAND_CLASS = 'e-appointment-expand';
/** @hidden */
const APPOINTMENT_ROW_COLLAPSE_CLASS = 'e-appointment-collapse';
/** @hidden */
const MORE_INDICATOR_CLASS = 'e-more-indicator';
/** @hidden */

/** @hidden */

/** @hidden */

/** @hidden */
const QUICK_POPUP_ROOT_CLASS = 'e-schedule-quick-popup';
/** @hidden */
const QUICK_POPUP_CLASS = 'e-quick-popup';
/** @hidden */
const QUICK_POPUP_SUBJECT_CLASS = 'e-quick-subject';
/** @hidden */
const QUICK_POPUP_TABLE_CLASS = 'e-quick-popup-table';
/** @hidden */
const QUICK_POPUP_ICON_CLASS = 'e-quick-popup-icon-container';
/** @hidden */
const QUICK_POPUP_CLOSE_ICON_CLASS = 'e-close-icon-container';
/** @hidden */
const QUICK_POPUP_EDIT_ICON_CLASS = 'e-edit-icon-container';
/** @hidden */
const QUICK_POPUP_CONTENT_CLASS = 'e-quick-content';
/** @hidden */

/** @hidden */
const QUICK_POPUP_DATE_TIME_DETAILS_CLASS = 'e-quick-date-time-details';
/** @hidden */
const DEVICE_DATE_TIME_DETAILS_CLASS = 'e-device-date-time-details';
/** @hidden */
const DEVICE_RECURRENCE_SUMMARY_CLASS = 'e-device-recurrence-summary';
/** @hidden */
const QUICK_POPUP_LOCATION_DETAILS_CLASS = 'e-quick-location-details';
/** @hidden */
const QUICK_POPUP_FOOTER_CLASS = 'e-quick-footer';
/** @hidden */
const QUICK_POPUP_EVENT_DETAILS_CLASS = 'e-event-details';
/** @hidden */
const QUICK_POPUP_EVENT_TITLE_CLASS = 'e-event-title';
/** @hidden */
const QUICK_POPUP_EVENT_CREATE_CLASS = 'e-event-create';
/** @hidden */
const QUICK_POPUP_EDIT_EVENT_CLASS = 'e-event-edit';
/** @hidden */
const TOOLTIP_CLOSE_CLASS = 'e-tooltip-close';
/** @hidden */
const QUICK_POPUP_DELETE_EVENT_CLASS = 'e-event-delete';
/** @hidden */
const QUICK_POPUP_TEXT_ALIGN_CLASS = 'e-text-ellipsis';
/** @hidden */
const MORE_POPUP_WRAPPER_CLASS = 'e-more-event-popup-wrapper';
/** @hidden */
const SELECT_POPUP_WRAPPER_CLASS = 'e-select-event-popup-wrapper';
/** @hidden */
const MORE_EVENT_POPUP_CLASS = 'e-more-event-popup';
/** @hidden */
const MORE_EVENT_HEADER_CLASS = 'e-more-event-header';
/** @hidden */
const MORE_EVENT_DATE_HEADER_CLASS = 'e-more-event-date-header';
/** @hidden */
const MORE_EVENT_HEADER_DAY_CLASS = 'e-header-day';
/** @hidden */
const MORE_EVENT_HEADER_DATE_CLASS = 'e-header-date';
/** @hidden */
const MORE_EVENT_CLOSE_CLASS = 'e-more-event-close';
/** @hidden */

/** @hidden */
const MORE_EVENT_CONTENT_CLASS = 'e-more-event-content';
/** @hidden */
const MORE_EVENT_WRAPPER_CLASS = 'e-more-appointment-wrapper';
/** @hidden */
const QUICK_DIALOG_CLASS = 'e-quick-dialog';
/** @hidden */
const DIALOG_FOOTER_CONTENT_CLASS = 'e-footer-content';
/** @hidden */
const QUICK_DIALOG_EDIT_EVENT_CLASS = 'e-quick-dialog-edit-event';
/** @hidden */
const QUICK_DIALOG_EDIT_SERIES_CLASS = 'e-quick-dialog-edit-series';
/** @hidden */
const QUICK_DIALOG_DELETE_CLASS = 'e-quick-dialog-delete';
/** @hidden */
const QUICK_DIALOG_CANCEL_CLASS = 'e-quick-dialog-cancel';
/** @hidden */
const QUICK_DIALOG_ALERT_BTN_CLASS = 'e-quick-dialog-alert-btn';
/** @hidden */
const QUICK_DIALOG_HIDE_BTN_CLASS = 'e-quick-dialog-hide-btn';
/** @hidden */
const EVENT_WINDOW_DIALOG_CLASS = 'e-schedule-dialog';
/** @hidden */
const EVENT_WINDOW_DEVICE_CLASS = 'e-device';
/** @hidden */
const EVENT_WINDOW_FORM_DIV_CLASS = 'e-schedule-form-container';
/** @hidden */
const EVENT_WINDOW_FORM_CLASS = 'e-schedule-form';
/** @hidden */
const EVENT_WINDOW_ALLDAY_TZ_DIV_CLASS = 'e-all-day-time-zone-row';
/** @hidden */
const EVENT_WINDOW_ALL_DAY_CLASS = 'e-all-day';
/** @hidden */
const EVENT_WINDOW_TZ_CLASS = 'e-time-zone';
/** @hidden */
const EVENT_WINDOW_REPEAT_DIV_CLASS = 'e-repeat-parent-row';
/** @hidden */
const EVENT_WINDOW_REPEAT_CLASS = 'e-repeat';
/** @hidden */
const EVENT_WINDOW_TITLE_LOCATION_DIV_CLASS = 'e-title-location-row';
/** @hidden */
const EVENT_WINDOW_TITLE_CLASS = 'e-subject';
/** @hidden */
const EVENT_WINDOW_LOCATION_CLASS = 'e-location';
/** @hidden */
const EVENT_WINDOW_START_END_DIV_CLASS = 'e-start-end-row';
/** @hidden */
const EVENT_WINDOW_START_CLASS = 'e-start';
/** @hidden */
const EVENT_WINDOW_END_CLASS = 'e-end';
/** @hidden */
const EVENT_WINDOW_DESCRIPTION_CLASS = 'e-description';
/** @hidden */
const EVENT_WINDOW_TIME_ZONE_DIV_CLASS = 'e-time-zone-row';
/** @hidden */
const EVENT_WINDOW_START_TZ_CLASS = 'e-start-time-zone';
/** @hidden */
const EVENT_WINDOW_END_TZ_CLASS = 'e-end-time-zone';
/** @hidden */
const EVENT_WINDOW_BACK_ICON_CLASS = 'e-back-icon';
/** @hidden */
const EVENT_WINDOW_SAVE_ICON_CLASS = 'e-save-icon';
/** @hidden */
const EVENT_WINDOW_DELETE_BUTTON_CLASS = 'e-event-delete';
/** @hidden */
const EVENT_WINDOW_CANCEL_BUTTON_CLASS = 'e-event-cancel';
/** @hidden */
const EVENT_WINDOW_SAVE_BUTTON_CLASS = 'e-event-save';
/** @hidden */

/** @hidden */
const EVENT_WINDOW_TITLE_TEXT_CLASS = 'e-title-text';
/** @hidden */
const EVENT_WINDOW_ICON_DISABLE_CLASS = 'e-icon-disable';
/** @hidden */
const SELECTED_EVENT_EDIT_CLASS = 'e-edit-icon';
/** @hidden */
const SELECTED_EVENT_DELETE_CLASS = 'e-delete-icon';
/** @hidden */
const SELECTED_DATE_TIME_CLASS = 'e-date-time-icon';
/** @hidden */
const SELECTED_CALENDER_CLASS = 'e-calendar-icon';
/** @hidden */
const SELECTED_EVENT_TITLE_CLASS = 'e-dialog-title';
/** @hidden */
const SELECTED_EVENT_CONTAINER_CLASS = 'e-event-container';
/** @hidden */
const SELECTED_EVENT_CLOSE_CLASS = 'e-event-close';
/** @hidden */
const EVENT_TIME_ZONE_CLASS = 'e-event-zone-icon';
/** @hidden */
const EVENT_ZONE_DETAILS_CLASS = 'e-event-zone-details';
/** @hidden */
const EVENT_DETAILS_CLASS = 'e-event-details';
/** @hidden */
const EVENT_NOTE_CLASS = 'e-event-note-icon';
/** @hidden */
const EVENT_NOTE_DETAILS_CLASS = 'e-event-note-details';
/** @hidden */

/** @hidden */
const EVENT_EDIT_DISABLE_CLASS = 'e-event-edit-disable';
/** @hidden */
const ERROR_VALIDATION_CLASS = 'e-schedule-error';
/** @hidden */
const EVENT_TOOLTIP_ROOT_CLASS = 'e-schedule-event-tooltip';
/** @hidden */
const ALLDAY_ROW_ANIMATE_CLASS = 'e-animate';

/**
 * Header module
 */
class HeaderRenderer {
    /**
     * Constructor for render module
     */
    constructor(parent) {
        this.parent = parent;
        this.l10n = this.parent.localeObj;
        this.renderHeader();
        this.addEventListener();
    }
    addEventListener() {
        this.parent.on(documentClick, this.closeHeaderPopup, this);
    }
    removeEventListener() {
        this.parent.off(documentClick, this.closeHeaderPopup);
    }
    closeHeaderPopup(e) {
        let closestEle = closest(e.event.target, '.e-date-range,.e-header-popup,.e-day,.e-selected');
        if (!isNullOrUndefined(closestEle)) {
            return;
        }
        this.hideHeaderPopup();
    }
    /** @hidden */
    hideHeaderPopup() {
        if (this.headerPopup) {
            this.headerPopup.hide();
        }
    }
    renderHeader() {
        this.element = createElement('div', { className: TOOLBAR_CONTAINER });
        let toolbarEle = createElement('div', { className: HEADER_TOOLBAR });
        this.element.appendChild(toolbarEle);
        this.parent.element.insertBefore(this.element, this.parent.element.firstElementChild);
        this.renderToolbar();
    }
    renderToolbar() {
        let items = this.getItems();
        let args = extend({}, { requestType: 'toolbarItemRendering', items: items });
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
    updateItems() {
        if (this.toolbarObj) {
            let items = this.getItems();
            this.parent.trigger(actionBegin, { requestType: 'toolbarItemRendering', items: items });
            this.toolbarObj.items = items;
            this.toolbarObj.dataBind();
            this.parent.trigger(actionComplete, { requestType: 'toolBarItemRendered', items: items });
        }
    }
    getPopUpRelativeElement() {
        if (this.parent.isAdaptive) {
            return this.toolbarObj.element;
        }
        return this.element.querySelector('.e-date-range');
    }
    setDayOfWeek(index) {
        if (this.headerCalendar) {
            this.headerCalendar.firstDayOfWeek = index;
            this.headerCalendar.dataBind();
        }
    }
    setCalendarDate(date) {
        if (this.headerCalendar) {
            this.headerCalendar.value = date;
            this.headerCalendar.dataBind();
        }
    }
    getCalendarView() {
        if (this.parent.currentView === 'Month' || this.parent.currentView === 'MonthAgenda') {
            return 'Year';
        }
        return 'Month';
    }
    setCalendarView() {
        if (this.headerCalendar) {
            let calendarView = this.getCalendarView();
            this.headerCalendar.depth = calendarView;
            this.headerCalendar.start = calendarView;
            this.headerCalendar.refresh();
        }
    }
    setRtl(isRtl) {
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
    updateActiveView() {
        let currentViewCls = '.e-' + this.parent.currentView.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        let selEle = this.toolbarObj.element.querySelectorAll('.e-active-view');
        removeClass(selEle, ['e-active-view']);
        addClass(this.toolbarObj.element.querySelectorAll(currentViewCls), ['e-active-view']);
    }
    updateDateRange(text = this.getDateRangeText()) {
        let selEle = this.toolbarObj.element.querySelector('.e-date-range');
        selEle.setAttribute('aria-label', text);
        selEle.querySelector('.e-tbar-btn-text').innerHTML = text;
    }
    getDateRangeText() {
        return this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
    }
    getItems() {
        let items = [];
        let showInPopup = this.parent.isAdaptive;
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
        }
        else {
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
            for (let item of this.parent.views) {
                typeof (item) === 'string' ? items.push(this.getItemObject(item.toLowerCase())) :
                    items.push(this.getItemObject(item.option.toLowerCase()));
            }
        }
        return items;
    }
    getItemObject(viewName) {
        let view;
        let showInPopup = this.parent.isAdaptive;
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
    renderHeaderPopup() {
        let headerPopupEle = createElement('div', { className: HEADER_POPUP_CLASS });
        let headerCalendarEle = createElement('div', { className: HEADER_CALENDAR_CLASS });
        headerPopupEle.appendChild(headerCalendarEle);
        this.element.appendChild(headerPopupEle);
        this.headerPopup = new Popup(headerPopupEle, {
            actionOnScroll: 'hide',
            targetType: 'relative',
            relateTo: this.getPopUpRelativeElement(),
            position: { X: 'left', Y: 'bottom' },
            enableRtl: this.parent.enableRtl
        });
        let calendarView = this.getCalendarView();
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
    calendarChange(args) {
        if (args.value.getTime() !== this.parent.selectedDate.getTime()) {
            this.parent.changeDate(args.value);
        }
        this.headerPopup.hide();
    }
    toolbarClickHandler(args) {
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
                }
                else {
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
                let data;
                if (this.parent.activeCellsData) {
                    data = this.parent.activeCellsData;
                }
                else {
                    let today = new Date();
                    let majorSlot = 60;
                    let minorSlotCount = 2;
                    let msMajorInterval = majorSlot * MS_PER_MINUTE;
                    let msInterval = msMajorInterval / minorSlotCount;
                    let startTime = new Date(this.parent.selectedDate.getTime());
                    startTime.setHours(today.getHours(), (Math.round(startTime.getMinutes() / msInterval) * msInterval), 0);
                    let endTime = new Date(new Date(startTime.getTime()).setMilliseconds(startTime.getMilliseconds() + msInterval));
                    data = extend({ startTime: startTime, endTime: endTime, isAllDay: false }, { cancel: false, event: args.originalEvent });
                }
                this.parent.eventWindow.openEditor(data, 'Add');
                break;
        }
        let toolbarPopUp = this.toolbarObj.element.querySelector('.e-toolbar-pop');
        if (toolbarPopUp) {
            toolbarPopUp.ej2_instances[0].hide({ name: 'SlideUp', duration: 100 });
        }
    }
    getHeaderElement() {
        return this.element;
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'headerbar';
    }
    /**
     * To destroy the headerbar.
     * @return {void}
     * @private
     */
    destroy() {
        if (!this.toolbarObj.isDestroyed) {
            this.toolbarObj.destroy();
            this.removeEventListener();
            remove(this.element);
        }
    }
}

/**
 * `Scroll` module
 */
class Scroll {
    /**
     * Constructor for the scrolling.
     * @hidden
     */
    constructor(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     * @private
     */
    getModuleName() {
        return 'scroll';
    }
    /**
     * @hidden
     */
    setWidth() {
        this.parent.element.style.width = formatUnit(this.parent.width);
    }
    /**
     * @hidden
     */
    setHeight() {
        this.parent.element.style.height = formatUnit(this.parent.height);
    }
    /**
     * @hidden
     */
    addEventListener() {
        this.parent.on(contentReady, this.setDimensions, this);
        this.parent.on(uiUpdate, this.onPropertyChanged, this);
    }
    /**
     * @hidden
     */
    removeEventListener() {
        this.parent.off(contentReady, this.setDimensions);
        this.parent.off(uiUpdate, this.onPropertyChanged);
    }
    setDimensions() {
        this.setWidth();
        this.setHeight();
        let cssProps = this.getCssProperties(this.parent.enableRtl);
        let data = { cssProperties: cssProps, module: this.getModuleName() };
        this.parent.notify(scrollUiUpdate, data);
    }
    /**
     * @hidden
     */
    getCssProperties(enableRtl) {
        let css = {};
        css.border = enableRtl ? 'borderLeftWidth' : 'borderRightWidth';
        css.padding = enableRtl ? 'paddingLeft' : 'paddingRight';
        return css;
    }
    onPropertyChanged(e) {
        this.setDimensions();
    }
    /**
     * @hidden
     */
    destroy() {
        this.removeEventListener();
    }
}

/**
 * `touch` module is used to handle touch interactions.
 */
class ScheduleTouch {
    constructor(parent) {
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
    scrollHandler(e) {
        if (this.parent.currentView === 'Agenda' ||
            (e.originalEvent && !isNullOrUndefined(closest(e.originalEvent.target, '.' + APPOINTMENT_WRAP_CLASS)))) {
            return;
        }
        if (!this.timeStampStart) {
            this.timeStampStart = Date.now();
        }
        if (this.element.classList.contains(TRANSLATE_CLASS)) {
            this.onTransitionEnd();
        }
        if (e.scrollDirection === 'Left' || e.scrollDirection === 'Right') {
            let args = { requestType: 'dateNavigate', cancel: false, event: e.originalEvent };
            this.parent.trigger(actionBegin, args);
            if (args.cancel) {
                return;
            }
            let scrollDiv = this.element.querySelector('.' + CONTENT_WRAP_CLASS);
            if (scrollDiv && scrollDiv.scrollWidth > scrollDiv.clientWidth) {
                return;
            }
            else {
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
            let x = this.parent.enableRtl ? e.distanceX : -e.distanceX;
            this.element.style.transform = 'translatex(' + (this.getTranslateX(this.element) + x) + 'px)';
        }
        else if (e.scrollDirection === this.touchRightDirection) {
            let prevWidth = 0;
            if (!this.previousPanel) {
                this.renderPanel(PREVIOUS_PANEL_CLASS, 'previous');
                this.previousPanel = {
                    element: this.parent.activeView.getPanel(),
                    selectedDate: new Date(this.parent.selectedDate.getTime())
                };
                this.setDimensions(this.previousPanel.element);
                prevWidth = this.previousPanel.element.offsetWidth;
            }
            let x = this.parent.enableRtl ? prevWidth - e.distanceX : -prevWidth + e.distanceX;
            this.element.style.transform = 'translatex(' + (this.getTranslateX(this.element) + x) + 'px)';
        }
    }
    swipeHandler(e) {
        if (!this.isScrollTriggered) {
            return;
        }
        this.isScrollTriggered = false;
        if (e.swipeDirection === 'Left' || e.swipeDirection === 'Right') {
            let time = Date.now() - this.timeStampStart;
            let offsetDist = (e.distanceX * 1.66);
            if (offsetDist > time || (e.distanceX > (this.parent.element.offsetWidth / 2))) {
                this.swapPanels(e.swipeDirection);
                if (offsetDist > time && (e.distanceX > (this.parent.element.offsetWidth / 2))) {
                    this.element.style.transitionDuration = ((offsetDist / time) / 10) + 's';
                }
                this.confirmSwipe(e.swipeDirection);
            }
            else {
                this.cancelSwipe();
            }
            let args = { requestType: 'dateNavigate', cancel: false, event: e.originalEvent };
            this.parent.trigger(actionComplete, args);
        }
        else {
            this.cancelSwipe();
        }
        this.timeStampStart = null;
    }
    tapHoldHandler(e) {
        let target = closest(e.originalEvent.target, '.' + APPOINTMENT_CLASS);
        if (!isNullOrUndefined(target)) {
            this.parent.quickPopup.eventHold(e.originalEvent);
            return;
        }
        target = closest(e.originalEvent.target, '.' + WORK_CELLS_CLASS) ||
            closest(e.originalEvent.target, '.' + ALLDAY_CELLS_CLASS) ||
            closest(e.originalEvent.target, '.' + HEADER_CELLS_CLASS);
        if (!isNullOrUndefined(target)) {
            this.parent.activeCellsData = this.parent.getCellDetails(target);
            this.parent.eventWindow.openEditor(this.parent.activeCellsData, 'Add');
            return;
        }
    }
    renderPanel(clsName, nextPrevType) {
        if (!this.currentPanel) {
            this.currentPanel = {
                element: this.parent.activeView.getPanel(),
                selectedDate: new Date(this.parent.selectedDate.getTime())
            };
            this.setDimensions(this.currentPanel.element);
        }
        else {
            this.parent.setProperties({ selectedDate: this.currentPanel.selectedDate }, true);
        }
        this.parent.setProperties({ selectedDate: this.parent.activeView.getNextPreviousDate(nextPrevType) }, true);
        this.parent.activeView.getRenderDates();
        this.parent.activeView.renderLayout(clsName);
    }
    swapPanels(direction) {
        if (direction === this.touchLeftDirection) {
            let temp = this.nextPanel;
            this.nextPanel = this.currentPanel;
            this.currentPanel = temp;
        }
        else {
            let temp = this.previousPanel;
            this.previousPanel = this.currentPanel;
            this.currentPanel = temp;
        }
    }
    confirmSwipe(swipeDirection) {
        let previousDate = swipeDirection === this.touchLeftDirection ? this.nextPanel.selectedDate : this.previousPanel.selectedDate;
        let navArgs = {
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
        let translateX;
        if (this.parent.enableRtl) {
            translateX = swipeDirection === this.touchLeftDirection ?
                (this.previousPanel ? this.previousPanel.element.offsetLeft : this.currentPanel.element.offsetWidth) : 0;
        }
        else {
            translateX = swipeDirection === this.touchLeftDirection ? -this.currentPanel.element.offsetLeft : 0;
        }
        addClass([this.element], TRANSLATE_CLASS);
        this.element.style.transform = 'translatex(' + (translateX) + 'px)';
        if (this.parent.headerModule) {
            this.parent.headerModule.updateDateRange(this.parent.activeView.getDateRangeText());
        }
        this.parent.renderModule.refreshDataManager();
    }
    cancelSwipe() {
        this.parent.activeView.setPanel(this.currentPanel.element);
        this.parent.setProperties({ selectedDate: this.currentPanel.selectedDate }, true);
        this.parent.activeView.getRenderDates();
        addClass([this.element], TRANSLATE_CLASS);
        let prevWidth = this.previousPanel ? this.previousPanel.element.offsetWidth : 0;
        this.element.style.transform = 'translatex(' + (this.parent.enableRtl ? prevWidth : -this.currentPanel.element.offsetLeft) + 'px)';
    }
    onTransitionEnd() {
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
    getTranslateX(element) {
        let style = window.getComputedStyle(element);
        return new WebKitCSSMatrix(style.webkitTransform).m41;
    }
    setDimensions(element) {
        element.style.width = (this.parent.element.clientWidth) + 'px';
    }
    resetValues() {
        this.currentPanel = null;
        this.previousPanel = null;
        this.nextPanel = null;
        this.timeStampStart = null;
        this.element.style.transform = '';
        this.element.innerHTML = '';
        removeClass([this.element], TRANSLATE_CLASS);
    }
    /**
     * @hidden
     */
    destroy() {
        this.touchObj.destroy();
        EventHandler.remove(this.element, 'transitionend', this.onTransitionEnd);
        this.resetValues();
    }
}

/**
 * Keyboard interaction
 */
class KeyboardInteraction {
    constructor(parent) {
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
    keyActionHandler(e) {
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
    addEventListener() {
        this.parent.on(cellMouseDown, this.onCellMouseDown, this);
    }
    removeEventListener() {
        this.parent.off(cellMouseDown, this.onCellMouseDown);
    }
    onCellMouseDown(e) {
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
            let allDayRow = this.parent.getAllDayRow();
            if (allDayRow) {
                EventHandler.add(allDayRow, 'mousemove', this.onMouseSelection, this);
                EventHandler.add(allDayRow, 'mouseup', this.onMoveup, this);
            }
        }
    }
    onMouseSelection(e) {
        let target = closest(e.target, '.' + WORK_CELLS_CLASS + ',.' + ALLDAY_CELLS_CLASS);
        if (target) {
            this.selectCells(true, target);
        }
    }
    onAppointmentSelection(e) {
        let target = closest(e.target, '.' + APPOINTMENT_CLASS);
        let selectedElements = this.parent.eventBase.getSelectedEventElements(target);
    }
    onMoveup(e) {
        if (e.target.classList.contains(WORK_CELLS_CLASS)) {
            EventHandler.remove(this.parent.getContentTable(), 'mousemove', this.onMouseSelection);
            EventHandler.remove(this.parent.getContentTable(), 'mouseup', this.onMoveup);
        }
        if (e.target.classList.contains(ALLDAY_CELLS_CLASS)) {
            let allDayRow = this.parent.getAllDayRow();
            if (allDayRow) {
                EventHandler.remove(allDayRow, 'mousemove', this.onMouseSelection);
                EventHandler.remove(allDayRow, 'mouseup', this.onMoveup);
            }
        }
    }
    processEnter(e) {
        let target = (e.target);
        if (target.classList.contains(WORK_CELLS_CLASS) || target.classList.contains(ALLDAY_CELLS_CLASS)) {
            if (this.selectedCells.length > 1) {
                let start = this.parent.getCellDetails(this.selectedCells[0]);
                let end = this.parent.getCellDetails(this.selectedCells[this.selectedCells.length - 1]);
                start.endTime = end.endTime;
                start.element = target;
                this.parent.activeCellsData = start;
            }
            else {
                this.parent.activeCellsData = this.parent.getCellDetails(target);
            }
            let args = extend(this.parent.activeCellsData, { cancel: false, event: e });
            this.parent.notify(cellClick, args);
            return;
        }
        if (target.classList.contains(APPOINTMENT_CLASS) || target.classList.contains(MORE_EVENT_CLOSE_CLASS) ||
            target.classList.contains(ALLDAY_APPOINTMENT_SECTION_CLASS) || target.classList.contains(MORE_INDICATOR_CLASS)) {
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
    getCells(isInverseTable, start, end) {
        let tableEle = this.parent.getContentTable();
        let cells = [].slice.call(tableEle.querySelectorAll('td'));
        let maxRow = tableEle.rows.length;
        let maxColumn = tableEle.rows[0].cells.length;
        if (start.classList.contains(ALLDAY_CELLS_CLASS)) {
            let allDayRow = this.parent.getAllDayRow();
            cells = [].slice.call(allDayRow.cells);
            maxRow = 1;
            maxColumn = allDayRow.cells.length;
        }
        let startIndex = cells.indexOf(start);
        let endIndex = cells.indexOf(end);
        let inverseCells = [];
        if (isInverseTable) {
            for (let i = 0; i < maxColumn; i++) {
                for (let j = 0; j < maxRow; j++) {
                    inverseCells.push(cells[maxColumn * j + i]);
                }
            }
            startIndex = inverseCells.indexOf(start);
            endIndex = inverseCells.indexOf(end);
        }
        if (startIndex > endIndex) {
            let temp = startIndex;
            startIndex = endIndex;
            endIndex = temp;
        }
        let sCells = isInverseTable ? inverseCells : cells;
        return sCells.slice(startIndex, endIndex + 1);
    }
    focusFirstCell() {
        if (this.parent.currentView === 'Agenda') {
            let focusCell = this.parent.getContentTable().querySelector('.' + AGENDA_CELLS_CLASS);
            focusCell.setAttribute('tabindex', '0');
            focusCell.focus();
            return;
        }
        this.parent.eventBase.removeSelectedAppointmentClass();
        this.selectCells(false, this.parent.getWorkCellElements()[0]);
    }
    isInverseTableSelect() {
        return this.parent.activeView.isInverseTableSelect;
    }
    /** @hidden */
    selectCells(isMultiple, target) {
        this.parent.removeSelectedClass();
        if (isMultiple) {
            let selectedCells = this.getCells(this.isInverseTableSelect(), this.initialTarget, target);
            this.selectedCells = selectedCells;
            if (selectedCells.length > 2 && !target.classList.contains(ALLDAY_CELLS_CLASS)) {
                selectedCells = selectedCells.concat(this.getAllDayCells(selectedCells));
            }
            this.parent.addSelectedClass(selectedCells, target);
        }
        else {
            this.initialTarget = target;
            this.selectedCells = [target];
            this.parent.addSelectedClass([target], target);
        }
    }
    selectAppointment(isReverse, target, isMoreEvent = false) {
        let appointments;
        if (isMoreEvent) {
            let moreEventWrapper = this.parent.element.querySelector('.' + MORE_EVENT_WRAPPER_CLASS);
            appointments = [].slice.call(moreEventWrapper.children);
        }
        else {
            appointments = this.getAppointmentElements();
        }
        if (appointments.length < 0) {
            return;
        }
        this.parent.eventBase.removeSelectedAppointmentClass();
        let nextAppEle;
        if (target.classList.contains(APPOINTMENT_CLASS)) {
            let targetIndex = appointments.indexOf(target);
            nextAppEle = appointments[(isReverse ? targetIndex - 1 : targetIndex + 1)];
        }
        else {
            nextAppEle = isReverse ? appointments[appointments.length - 1] : appointments[0];
        }
        if (nextAppEle) {
            this.parent.eventBase.addSelectedAppointments([nextAppEle], nextAppEle);
            nextAppEle.focus();
        }
    }
    selectAppointmentElementFromWorkCell(isReverse, target) {
        this.parent.eventBase.removeSelectedAppointmentClass();
        this.parent.removeSelectedClass();
        if (target.classList.contains(WORK_CELLS_CLASS) || target.classList.contains(ALLDAY_CELLS_CLASS)) {
            let appointmentElements = this.getUniqueAppointmentElements();
            let filteredElements = [];
            let selectedDate = parseInt(target.getAttribute('data-date'), 10);
            let selectedSeriesEvents = this.parent.eventsProcessed.filter((eventObject) => {
                return (!isReverse ? (eventObject[this.parent.eventFields.startTime].getTime() >= selectedDate) :
                    (eventObject[this.parent.eventFields.startTime].getTime() <= selectedDate));
            });
            selectedSeriesEvents.filter((event) => {
                appointmentElements.filter((element) => {
                    if (JSON.stringify(event.Guid) === JSON.stringify(element.getAttribute('data-guid'))) {
                        filteredElements.push(element);
                    }
                });
            });
            if (filteredElements.length > 0) {
                let selectedElement = isReverse ? filteredElements[filteredElements.length - 1] : filteredElements[0];
                let focusElements = this.getAppointmentElementsByGuid(selectedElement.getAttribute('data-guid'));
                this.parent.eventBase.addSelectedAppointments(focusElements, focusElements[focusElements.length - 1]);
                (focusElements[focusElements.length - 1]).focus();
            }
        }
    }
    getAllDayCells(cells) {
        let allDayRow = this.parent.getAllDayRow();
        if (!allDayRow) {
            return [];
        }
        let startCell = cells[0];
        let endCell = cells[cells.length - 1];
        let start = this.parent.getCellDetails(startCell);
        let end = this.parent.getCellDetails(endCell);
        if (end.endTime.getTime() - start.startTime.getTime() >= MS_PER_DAY) {
            let allDayCells = [].slice.call(allDayRow.cells);
            return allDayCells.slice(startCell.cellIndex, endCell.cellIndex + 1);
        }
        return [];
    }
    getAppointmentElements() {
        return [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_CLASS));
    }
    getAppointmentElementsByGuid(guid) {
        return [].slice.call(this.parent.element.querySelectorAll('div[data-guid="' + guid + '"]'));
    }
    getUniqueAppointmentElements() {
        let appointments = this.getAppointmentElements();
        let appointmentElements = [];
        appointments.map((value) => {
            return value.getAttribute('data-guid');
        }).filter((value, index, self) => {
            if (self.indexOf(value) === index) {
                appointmentElements.push(appointments[index]);
            }
        });
        return appointmentElements;
    }
    getWorkCellFromAppointmentElement(target) {
        let selectedObject = this.parent.eventBase.getEventByGuid(target.getAttribute('data-guid'));
        return this.parent.eventBase.selectWorkCellByTime([selectedObject]);
    }
    processViewNavigation(e) {
        let index = parseInt(e.key, 10) - 1;
        if (index < this.parent.views.length) {
            let view = this.parent.viewOptions[Object.keys(this.parent.viewOptions)[index]].option;
            this.parent.changeView(view, e);
            if (this.parent.headerModule) {
                this.parent.headerModule.element.querySelector('.e-active-view button').focus();
            }
        }
    }
    processUp(e, isMultiple) {
        if ((isMultiple && this.parent.currentView === 'MonthAgenda')) {
            return;
        }
        let target = (e.target);
        let selectedElements = this.parent.getSelectedElements();
        let selectedEventElements = this.parent.eventBase.getSelectedAppointments();
        let moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
        if (selectedElements.length > 0 && !e.target.classList.contains(WORK_CELLS_CLASS)) {
            target = selectedElements[selectedElements.length - 1];
        }
        if (selectedEventElements.length > 0 && !moreEventWrapper.classList.contains(POPUP_OPEN) &&
            ['Day', 'Week', 'WorkWeek', 'Month'].indexOf(this.parent.currentView) !== -1) {
            target = this.getWorkCellFromAppointmentElement(selectedEventElements[selectedEventElements.length - 1]);
            this.parent.eventBase.removeSelectedAppointmentClass();
        }
        if (target.classList.contains(WORK_CELLS_CLASS) && !this.parent.element.querySelector('.' + POPUP_OPEN)) {
            let tableEle = this.parent.getContentTable();
            let curRowIndex = target.parentNode.rowIndex;
            if (curRowIndex > 0 && curRowIndex < tableEle.rows.length) {
                this.selectCells(isMultiple, tableEle.rows[curRowIndex - 1].cells[target.cellIndex]);
            }
        }
        else if (this.parent.currentView === 'Agenda' || this.parent.currentView === 'MonthAgenda') {
            this.selectAppointment(true, target);
        }
    }
    processDown(e, isMultiple) {
        if ((isMultiple && this.parent.currentView === 'MonthAgenda')) {
            return;
        }
        let target = (e.target);
        let selectedCells = this.parent.getSelectedElements();
        let selectedElements = this.parent.eventBase.getSelectedAppointments();
        let moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
        if (selectedCells.length > 0 && !e.target.classList.contains(WORK_CELLS_CLASS)) {
            target = selectedCells[selectedCells.length - 1];
        }
        if (selectedElements.length > 0 && !moreEventWrapper.classList.contains(POPUP_OPEN) &&
            ['Day', 'Week', 'WorkWeek', 'Month'].indexOf(this.parent.currentView) !== -1) {
            target = this.getWorkCellFromAppointmentElement(selectedElements[selectedElements.length - 1]);
            this.parent.eventBase.removeSelectedAppointmentClass();
        }
        let tableEle = this.parent.getContentTable();
        if (target.classList.contains(WORK_CELLS_CLASS) && !this.parent.element.querySelector('.' + POPUP_OPEN)) {
            let curRowIndex = target.parentNode.rowIndex;
            if (curRowIndex >= 0 && curRowIndex < tableEle.rows.length - 1) {
                this.selectCells(isMultiple, tableEle.rows[curRowIndex + 1].cells[target.cellIndex]);
            }
        }
        else if (this.parent.currentView === 'Agenda' || this.parent.currentView === 'MonthAgenda') {
            this.selectAppointment(false, target);
        }
    }
    processLeftRight(target, isMultiple) {
        let tableEle = this.parent.getContentTable();
        let curRowIndex = target.parentNode.rowIndex;
        let key = {
            element: tableEle,
            rowIndex: curRowIndex,
            columnIndex: target.cellIndex,
            maxIndex: tableEle.rows[curRowIndex].cells.length
        };
        return key;
    }
    isCancelLeftRightAction(isMultiple) {
        if (this.parent.currentView === 'Agenda' || (isMultiple && this.parent.currentView === 'MonthAgenda')) {
            return true;
        }
        let moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
        if (moreEventWrapper.classList.contains(POPUP_OPEN)) {
            return true;
        }
        return false;
    }
    processRight(e, isMultiple) {
        if (this.isCancelLeftRightAction(isMultiple)) {
            return;
        }
        let selectedCells = this.parent.getSelectedElements();
        let selectedAppointments = this.parent.eventBase.getSelectedAppointments();
        let target = (e.target);
        if (selectedCells.length > 0 && !target.classList.contains(WORK_CELLS_CLASS) &&
            !target.classList.contains(ALLDAY_CELLS_CLASS)) {
            target = selectedCells[selectedCells.length - 1];
        }
        if (selectedAppointments.length > 0) {
            target = this.getWorkCellFromAppointmentElement(selectedAppointments[selectedAppointments.length - 1]);
            this.parent.eventBase.removeSelectedAppointmentClass();
        }
        if (target.classList.contains(WORK_CELLS_CLASS)) {
            let key = this.processLeftRight(target, isMultiple);
            if (key.columnIndex >= 0 && key.columnIndex < key.maxIndex - 1) {
                this.selectCells(isMultiple, key.element.rows[key.rowIndex].cells[target.cellIndex + 1]);
            }
            else if (key.columnIndex === key.maxIndex - 1) {
                if (!this.isInverseTableSelect() && key.rowIndex < key.element.rows.length - 1) {
                    this.selectCells(isMultiple, key.element.rows[key.rowIndex + 1].cells[0]);
                }
                else if (!isMultiple) {
                    let rowIndex = this.isInverseTableSelect() ? key.rowIndex : 0;
                    this.parent.changeDate(this.parent.activeView.getNextPreviousDate('next'), e);
                    let tableEle = this.parent.getContentTable();
                    this.selectCells(false, tableEle.rows[rowIndex].cells[0]);
                }
            }
        }
        else if (target.classList.contains(ALLDAY_CELLS_CLASS)) {
            let curColIndex = target.cellIndex;
            let allDayRow = this.parent.getAllDayRow();
            let maxColIndex = allDayRow.cells.length;
            if (curColIndex >= 0 && curColIndex < maxColIndex - 1) {
                this.selectCells(isMultiple, allDayRow.cells[curColIndex + 1]);
            }
            else if (curColIndex === maxColIndex - 1 && !isMultiple) {
                this.parent.changeDate(this.parent.activeView.getNextPreviousDate('next'), e);
                let allDayRow = this.parent.getAllDayRow();
                this.selectCells(false, allDayRow.cells[0]);
            }
        }
    }
    processLeft(e, isMultiple) {
        if (this.isCancelLeftRightAction(isMultiple)) {
            return;
        }
        let target = (e.target);
        let selectedCells = this.parent.getSelectedElements();
        if (selectedCells.length > 0 && !target.classList.contains(WORK_CELLS_CLASS) &&
            !target.classList.contains(ALLDAY_CELLS_CLASS)) {
            target = selectedCells[selectedCells.length - 1];
        }
        let selectedElements = this.parent.eventBase.getSelectedAppointments();
        if (selectedElements.length > 0) {
            target = this.getWorkCellFromAppointmentElement(selectedElements[selectedElements.length - 1]);
            this.parent.eventBase.removeSelectedAppointmentClass();
        }
        if (target.classList.contains(WORK_CELLS_CLASS)) {
            let key = this.processLeftRight(target, isMultiple);
            if (key.columnIndex > 0 && key.columnIndex < key.maxIndex) {
                this.selectCells(isMultiple, key.element.rows[key.rowIndex].cells[target.cellIndex - 1]);
            }
            else if (key.columnIndex === 0) {
                if (!this.isInverseTableSelect() && key.rowIndex > 0) {
                    this.selectCells(isMultiple, key.element.rows[key.rowIndex - 1].cells[key.maxIndex - 1]);
                }
                else if (!isMultiple) {
                    this.parent.changeDate(this.parent.activeView.getNextPreviousDate('previous'), e);
                    let tableEle = this.parent.getContentTable();
                    let rowIndex = this.isInverseTableSelect() ? key.rowIndex : tableEle.rows.length - 1;
                    this.selectCells(false, tableEle.rows[rowIndex].cells[key.maxIndex - 1]);
                }
            }
        }
        else if (target.classList.contains(ALLDAY_CELLS_CLASS)) {
            let curColIndex = target.cellIndex;
            let allDayRow = this.parent.getAllDayRow();
            let maxColIndex = allDayRow.cells.length;
            if (curColIndex > 0 && curColIndex < maxColIndex) {
                this.selectCells(isMultiple, allDayRow.cells[curColIndex - 1]);
            }
            else if (curColIndex === 0 && !isMultiple) {
                this.parent.changeDate(this.parent.activeView.getNextPreviousDate('previous'), e);
                let allDayRow = this.parent.getAllDayRow();
                this.selectCells(false, allDayRow.cells[maxColIndex - 1]);
            }
        }
    }
    processTab(e, isReverse) {
        let target = e.target;
        let selectedAppointments = this.parent.eventBase.getSelectedAppointments();
        let moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
        if (closest(target, '.' + MORE_POPUP_WRAPPER_CLASS)) {
            if (isNullOrUndefined(moreEventWrapper) || !moreEventWrapper.classList.contains(POPUP_OPEN)) {
                return;
            }
            let moreEventList = [].slice.call(moreEventWrapper.querySelector('.' + MORE_EVENT_WRAPPER_CLASS).children);
            let focusElement = moreEventList[moreEventList.length - 1];
            if (selectedAppointments.length > 0) {
                target = selectedAppointments[selectedAppointments.length - 1];
            }
            if (target.classList.contains(MORE_EVENT_CLOSE_CLASS) && !isReverse) {
                moreEventWrapper.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).focus();
            }
            else if (target.classList.contains(MORE_EVENT_HEADER_DATE_CLASS) && !isReverse) {
                this.selectAppointment(isReverse, target, true);
            }
            else if (target.classList.contains(MORE_EVENT_HEADER_DATE_CLASS) && isReverse) {
                moreEventWrapper.querySelector('.' + MORE_EVENT_CLOSE_CLASS).focus();
            }
            else if (target.classList.contains(MORE_EVENT_CLOSE_CLASS) && isReverse) {
                this.parent.eventBase.removeSelectedAppointmentClass();
                this.parent.eventBase.addSelectedAppointments([focusElement], focusElement);
                focusElement.focus();
            }
            else if (target.classList.contains(APPOINTMENT_CLASS)) {
                if (isReverse && (target.getAttribute('data-guid') === (moreEventList[0]).getAttribute('data-guid'))) {
                    this.parent.eventBase.removeSelectedAppointmentClass();
                    moreEventWrapper.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).focus();
                }
                else if (!isReverse && (target.getAttribute('data-guid') === (focusElement).getAttribute('data-guid'))) {
                    this.parent.eventBase.removeSelectedAppointmentClass();
                    moreEventWrapper.querySelector('.' + MORE_EVENT_CLOSE_CLASS).focus();
                }
                else {
                    this.selectAppointment(isReverse, target, true);
                }
            }
            e.preventDefault();
            return;
        }
        let appointments = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_CLASS));
        if (target.classList.contains(ROOT)) {
            this.parent.eventBase.removeSelectedAppointmentClass();
            return;
        }
        if (target.classList.contains(APPOINTMENT_CLASS)) {
            if (selectedAppointments.length > 0) {
                target = selectedAppointments[selectedAppointments.length - 1];
            }
            this.parent.eventBase.removeSelectedAppointmentClass();
            if (!isReverse && target.getAttribute('data-guid') === appointments[appointments.length - 1].getAttribute('data-guid') ||
                isReverse && target.getAttribute('data-guid') === appointments[0].getAttribute('data-guid')) {
                return;
            }
            if (this.parent.currentView === 'Agenda' || this.parent.currentView === 'MonthAgenda') {
                this.selectAppointment(isReverse, target);
                e.preventDefault();
            }
            return;
        }
        let selectedCells = this.parent.getSelectedElements();
        if (selectedCells.length > 0 && !target.classList.contains(APPOINTMENT_CLASS)) {
            target = selectedCells[selectedCells.length - 1];
            this.selectAppointmentElementFromWorkCell(isReverse, target);
            e.preventDefault();
            return;
        }
    }
    processDelete(e) {
        if (document.activeElement.classList.contains(APPOINTMENT_CLASS)) {
            addClass([document.activeElement], APPOINTMENT_BORDER);
            this.parent.activeEventData = this.parent.eventBase.getSelectedEvents();
            this.parent.quickPopup.deleteClick();
        }
        this.parent.quickPopup.morePopup.hide();
    }
    processEscape() {
        this.parent.quickPopup.onClosePopup();
        this.parent.quickPopup.morePopup.hide();
        if (this.parent.headerModule) {
            this.parent.headerModule.hideHeaderPopup();
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'keyboard';
    }
    /**
     * To destroy the keyboard module.
     * @return {void}
     * @private
     */
    destroy() {
        this.removeEventListener();
        this.keyboardModule.destroy();
    }
}

/**
 * data module is used to generate query and data source.
 * @hidden
 */
class Data {
    /**
     * Constructor for data module
     * @private
     */
    constructor(dataSource, query) {
        this.initDataManager(dataSource, query);
    }
    /**
     * The function used to initialize dataManager and query
     * @return {void}
     * @private
     */
    initDataManager(dataSource, query) {
        this.dataManager = dataSource instanceof DataManager ? dataSource : new DataManager(dataSource);
        this.query = query instanceof Query ? query : new Query();
    }
    /**
     * The function used to generate updated Query from schedule model
     * @return {void}
     * @private
     */
    generateQuery(startDate, endDate) {
        let query = this.query.clone();
        if (startDate) {
            query.addParams('StartDate', startDate.toISOString());
        }
        if (endDate) {
            query.addParams('EndDate', endDate.toISOString());
        }
        return query;
    }
    /**
     * The function used to get dataSource by executing given Query
     * @param  {Query} query - A Query that specifies to generate dataSource
     * @return {void}
     * @private
     */
    getData(query) {
        return this.dataManager.executeQuery(query);
    }
}

/**
 * Time zone
 */
class Timezone {
    offset(date, timezone) {
        let localOffset = date.getTimezoneOffset();
        try {
            let convertedDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
            if (!isNaN(convertedDate.getTime())) {
                return ((date.getTime() - convertedDate.getTime()) / 60000) + localOffset;
            }
            return 0;
        }
        catch (error) {
            return 0;
        }
    }
    convert(date, fromOffset, toOffset) {
        if (typeof fromOffset === 'string') {
            fromOffset = this.offset(date, fromOffset);
        }
        if (typeof toOffset === 'string') {
            toOffset = this.offset(date, toOffset);
        }
        let fromLocalOffset = date.getTimezoneOffset();
        date = new Date(date.getTime() + (fromOffset - toOffset) * 60000);
        let toLocalOffset = date.getTimezoneOffset();
        return new Date(date.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
    }
    add(date, timezone) {
        return this.convert(date, date.getTimezoneOffset(), timezone);
    }
    remove(date, timezone) {
        return this.convert(date, timezone, date.getTimezoneOffset());
    }
    removeLocalOffset(date) {
        return new Date(+date - (date.getTimezoneOffset() * 60000));
    }
}
let localTimezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
let timezoneData = [
    { Value: 'Pacific/Niue', Text: '(UTC-11:00) Niue' },
    { Value: 'Pacific/Pago_Pago', Text: '(UTC-11:00) Pago Pago' },
    { Value: 'Pacific/Honolulu', Text: '(UTC-10:00) Hawaii Time' },
    { Value: 'Pacific/Rarotonga', Text: '(UTC-10:00) Rarotonga' },
    { Value: 'Pacific/Tahiti', Text: '(UTC-10:00) Tahiti' },
    { Value: 'Pacific/Marquesas', Text: '(UTC-09:30) Marquesas' },
    { Value: 'America/Anchorage', Text: '(UTC-09:00) Alaska Time' },
    { Value: 'Pacific/Gambier', Text: '(UTC-09:00) Gambier' },
    { Value: 'America/Los_Angeles', Text: '(UTC-08:00) Pacific Time' },
    { Value: 'America/Tijuana', Text: '(UTC-08:00) Pacific Time - Tijuana' },
    { Value: 'America/Vancouver', Text: '(UTC-08:00) Pacific Time - Vancouver' },
    { Value: 'America/Whitehorse', Text: '(UTC-08:00) Pacific Time - Whitehorse' },
    { Value: 'Pacific/Pitcairn', Text: '(UTC-08:00) Pitcairn' },
    { Value: 'America/Denver', Text: '(UTC-07:00) Mountain Time' },
    { Value: 'America/Phoenix', Text: '(UTC-07:00) Mountain Time - Arizona' },
    { Value: 'America/Mazatlan', Text: '(UTC-07:00) Mountain Time - Chihuahua, Mazatlan' },
    { Value: 'America/Dawson_Creek', Text: '(UTC-07:00) Mountain Time - Dawson Creek' },
    { Value: 'America/Edmonton', Text: '(UTC-07:00) Mountain Time - Edmonton' },
    { Value: 'America/Hermosillo', Text: '(UTC-07:00) Mountain Time - Hermosillo' },
    { Value: 'America/Yellowknife', Text: '(UTC-07:00) Mountain Time - Yellowknife' },
    { Value: 'America/Belize', Text: '(UTC-06:00) Belize' },
    { Value: 'America/Chicago', Text: '(UTC-06:00) Central Time' },
    { Value: 'America/Mexico_City', Text: '(UTC-06:00) Central Time - Mexico City' },
    { Value: 'America/Regina', Text: '(UTC-06:00) Central Time - Regina' },
    { Value: 'America/Tegucigalpa', Text: '(UTC-06:00) Central Time - Tegucigalpa' },
    { Value: 'America/Winnipeg', Text: '(UTC-06:00) Central Time - Winnipeg' },
    { Value: 'America/Costa_Rica', Text: '(UTC-06:00) Costa Rica' },
    { Value: 'America/El_Salvador', Text: '(UTC-06:00) El Salvador' },
    { Value: 'Pacific/Galapagos', Text: '(UTC-06:00) Galapagos' },
    { Value: 'America/Guatemala', Text: '(UTC-06:00) Guatemala' },
    { Value: 'America/Managua', Text: '(UTC-06:00) Managua' },
    { Value: 'America/Cancun', Text: '(UTC-05:00) America Cancun' },
    { Value: 'America/Bogota', Text: '(UTC-05:00) Bogota' },
    { Value: 'Pacific/Easter', Text: '(UTC-05:00) Easter Island' },
    { Value: 'America/New_York', Text: '(UTC-05:00) Eastern Time' },
    { Value: 'America/Iqaluit', Text: '(UTC-05:00) Eastern Time - Iqaluit' },
    { Value: 'America/Toronto', Text: '(UTC-05:00) Eastern Time - Toronto' },
    { Value: 'America/Guayaquil', Text: '(UTC-05:00) Guayaquil' },
    { Value: 'America/Havana', Text: '(UTC-05:00) Havana' },
    { Value: 'America/Jamaica', Text: '(UTC-05:00) Jamaica' },
    { Value: 'America/Lima', Text: '(UTC-05:00) Lima' },
    { Value: 'America/Nassau', Text: '(UTC-05:00) Nassau' },
    { Value: 'America/Panama', Text: '(UTC-05:00) Panama' },
    { Value: 'America/Port-au-Prince', Text: '(UTC-05:00) Port-au-Prince' },
    { Value: 'America/Rio_Branco', Text: '(UTC-05:00) Rio Branco' },
    { Value: 'America/Halifax', Text: '(UTC-04:00) Atlantic Time - Halifax' },
    { Value: 'America/Barbados', Text: '(UTC-04:00) Barbados' },
    { Value: 'Atlantic/Bermuda', Text: '(UTC-04:00) Bermuda' },
    { Value: 'America/Boa_Vista', Text: '(UTC-04:00) Boa Vista' },
    { Value: 'America/Caracas', Text: '(UTC-04:00) Caracas' },
    { Value: 'America/Curacao', Text: '(UTC-04:00) Curacao' },
    { Value: 'America/Grand_Turk', Text: '(UTC-04:00) Grand Turk' },
    { Value: 'America/Guyana', Text: '(UTC-04:00) Guyana' },
    { Value: 'America/La_Paz', Text: '(UTC-04:00) La Paz' },
    { Value: 'America/Manaus', Text: '(UTC-04:00) Manaus' },
    { Value: 'America/Martinique', Text: '(UTC-04:00) Martinique' },
    { Value: 'America/Port_of_Spain', Text: '(UTC-04:00) Port of Spain' },
    { Value: 'America/Porto_Velho', Text: '(UTC-04:00) Porto Velho' },
    { Value: 'America/Puerto_Rico', Text: '(UTC-04:00) Puerto Rico' },
    { Value: 'America/Santo_Domingo', Text: '(UTC-04:00) Santo Domingo' },
    { Value: 'America/Thule', Text: '(UTC-04:00) Thule' },
    { Value: 'America/St_Johns', Text: '(UTC-03:30) Newfoundland Time - St. Johns' },
    { Value: 'America/Araguaina', Text: '(UTC-03:00) Araguaina' },
    { Value: 'America/Asuncion', Text: '(UTC-03:00) Asuncion' },
    { Value: 'America/Belem', Text: '(UTC-03:00) Belem' },
    { Value: 'America/Argentina/Buenos_Aires', Text: '(UTC-03:00) Buenos Aires' },
    { Value: 'America/Campo_Grande', Text: '(UTC-03:00) Campo Grande' },
    { Value: 'America/Cayenne', Text: '(UTC-03:00) Cayenne' },
    { Value: 'America/Cuiaba', Text: '(UTC-03:00) Cuiaba' },
    { Value: 'America/Fortaleza', Text: '(UTC-03:00) Fortaleza' },
    { Value: 'America/Godthab', Text: '(UTC-03:00) Godthab' },
    { Value: 'America/Maceio', Text: '(UTC-03:00) Maceio' },
    { Value: 'America/Miquelon', Text: '(UTC-03:00) Miquelon' },
    { Value: 'America/Montevideo', Text: '(UTC-03:00) Montevideo' },
    { Value: 'Antarctica/Palmer', Text: '(UTC-03:00) Palmer' },
    { Value: 'America/Paramaribo', Text: '(UTC-03:00) Paramaribo' },
    { Value: 'America/Punta_Arenas', Text: '(UTC-03:00) Punta Arenas' },
    { Value: 'America/Recife', Text: '(UTC-03:00) Recife' },
    { Value: 'Antarctica/Rothera', Text: '(UTC-03:00) Rothera' },
    { Value: 'America/Bahia', Text: '(UTC-03:00) Salvador' },
    { Value: 'America/Santiago', Text: '(UTC-03:00) Santiago' },
    { Value: 'Atlantic/Stanley', Text: '(UTC-03:00) Stanley' },
    { Value: 'America/Noronha', Text: '(UTC-02:00) Noronha' },
    { Value: 'America/Sao_Paulo', Text: '(UTC-02:00) Sao Paulo' },
    { Value: 'Atlantic/South_Georgia', Text: '(UTC-02:00) South Georgia' },
    { Value: 'Atlantic/Azores', Text: '(UTC-01:00) Azores' },
    { Value: 'Atlantic/Cape_Verde', Text: '(UTC-01:00) Cape Verde' },
    { Value: 'America/Scoresbysund', Text: '(UTC-01:00) Scoresbysund' },
    { Value: 'Africa/Abidjan', Text: '(UTC+00:00) Abidjan' },
    { Value: 'Africa/Accra', Text: '(UTC+00:00) Accra' },
    { Value: 'Africa/Bissau', Text: '(UTC+00:00) Bissau' },
    { Value: 'Atlantic/Canary', Text: '(UTC+00:00) Canary Islands' },
    { Value: 'Africa/Casablanca', Text: '(UTC+00:00) Casablanca' },
    { Value: 'America/Danmarkshavn', Text: '(UTC+00:00) Danmarkshavn' },
    { Value: 'Europe/Dublin', Text: '(UTC+00:00) Dublin' },
    { Value: 'Africa/El_Aaiun', Text: '(UTC+00:00) El Aaiun' },
    { Value: 'Atlantic/Faroe', Text: '(UTC+00:00) Faeroe' },
    { Value: 'Etc/UTC', Text: '(UTC+00:00) UTC (no daylight saving)' },
    { Value: 'Europe/Lisbon', Text: '(UTC+00:00) Lisbon' },
    { Value: 'Europe/London', Text: '(UTC+00:00) London' },
    { Value: 'Africa/Monrovia', Text: '(UTC+00:00) Monrovia' },
    { Value: 'Atlantic/Reykjavik', Text: '(UTC+00:00) Reykjavik' },
    { Value: 'UTC', Text: 'UTC' },
    { Value: 'Africa/Algiers', Text: '(UTC+01:00) Algiers' },
    { Value: 'Europe/Amsterdam', Text: '(UTC+01:00) Amsterdam' },
    { Value: 'Europe/Andorra', Text: '(UTC+01:00) Andorra' },
    { Value: 'Europe/Berlin', Text: '(UTC+01:00) Berlin' },
    { Value: 'Europe/Brussels', Text: '(UTC+01:00) Brussels' },
    { Value: 'Europe/Budapest', Text: '(UTC+01:00) Budapest' },
    { Value: 'Europe/Belgrade', Text: '(UTC+01:00) Central European Time - Belgrade' },
    { Value: 'Europe/Prague', Text: '(UTC+01:00) Central European Time - Prague' },
    { Value: 'Africa/Ceuta', Text: '(UTC+01:00) Ceuta' },
    { Value: 'Europe/Copenhagen', Text: '(UTC+01:00) Copenhagen' },
    { Value: 'Europe/Gibraltar', Text: '(UTC+01:00) Gibraltar' },
    { Value: 'Africa/Lagos', Text: '(UTC+01:00) Lagos' },
    { Value: 'Europe/Luxembourg', Text: '(UTC+01:00) Luxembourg' },
    { Value: 'Europe/Madrid', Text: '(UTC+01:00) Madrid' },
    { Value: 'Europe/Malta', Text: '(UTC+01:00) Malta' },
    { Value: 'Europe/Monaco', Text: '(UTC+01:00) Monaco' },
    { Value: 'Africa/Ndjamena', Text: '(UTC+01:00) Ndjamena' },
    { Value: 'Europe/Oslo', Text: '(UTC+01:00) Oslo' },
    { Value: 'Europe/Paris', Text: '(UTC+01:00) Paris' },
    { Value: 'Europe/Rome', Text: '(UTC+01:00) Rome' },
    { Value: 'Europe/Stockholm', Text: '(UTC+01:00) Stockholm' },
    { Value: 'Europe/Tirane', Text: '(UTC+01:00) Tirane' },
    { Value: 'Africa/Tunis', Text: '(UTC+01:00) Tunis' },
    { Value: 'Europe/Vienna', Text: '(UTC+01:00) Vienna' },
    { Value: 'Europe/Warsaw', Text: '(UTC+01:00) Warsaw' },
    { Value: 'Europe/Zurich', Text: '(UTC+01:00) Zurich' },
    { Value: 'Asia/Amman', Text: '(UTC+02:00) Amman' },
    { Value: 'Europe/Athens', Text: '(UTC+02:00) Athens' },
    { Value: 'Asia/Beirut', Text: '(UTC+02:00) Beirut' },
    { Value: 'Europe/Bucharest', Text: '(UTC+02:00) Bucharest' },
    { Value: 'Africa/Cairo', Text: '(UTC+02:00) Cairo' },
    { Value: 'Europe/Chisinau', Text: '(UTC+02:00) Chisinau' },
    { Value: 'Asia/Damascus', Text: '(UTC+02:00) Damascus' },
    { Value: 'Asia/Gaza', Text: '(UTC+02:00) Gaza' },
    { Value: 'Europe/Helsinki', Text: '(UTC+02:00) Helsinki' },
    { Value: 'Asia/Jerusalem', Text: '(UTC+02:00) Jerusalem' },
    { Value: 'Africa/Johannesburg', Text: '(UTC+02:00) Johannesburg' },
    { Value: 'Africa/Khartoum', Text: '(UTC+02:00) Khartoum' },
    { Value: 'Europe/Kiev', Text: '(UTC+02:00) Kiev' },
    { Value: 'Africa/Maputo', Text: '(UTC+02:00) Maputo' },
    { Value: 'Europe/Kaliningrad', Text: '(UTC+02:00) Moscow-01 - Kaliningrad' },
    { Value: 'Asia/Nicosia', Text: '(UTC+02:00) Nicosia' },
    { Value: 'Europe/Riga', Text: '(UTC+02:00) Riga' },
    { Value: 'Europe/Sofia', Text: '(UTC+02:00) Sofia' },
    { Value: 'Europe/Tallinn', Text: '(UTC+02:00) Tallinn' },
    { Value: 'Africa/Tripoli', Text: '(UTC+02:00) Tripoli' },
    { Value: 'Europe/Vilnius', Text: '(UTC+02:00) Vilnius' },
    { Value: 'Africa/Windhoek', Text: '(UTC+02:00) Windhoek' },
    { Value: 'Asia/Baghdad', Text: '(UTC+03:00) Baghdad' },
    { Value: 'Europe/Istanbul', Text: '(UTC+03:00) Istanbul' },
    { Value: 'Europe/Minsk', Text: '(UTC+03:00) Minsk' },
    { Value: 'Europe/Moscow', Text: '(UTC+03:00) Moscow+00 - Moscow' },
    { Value: 'Africa/Nairobi', Text: '(UTC+03:00) Nairobi' },
    { Value: 'Asia/Qatar', Text: '(UTC+03:00) Qatar' },
    { Value: 'Asia/Riyadh', Text: '(UTC+03:00) Riyadh' },
    { Value: 'Antarctica/Syowa', Text: '(UTC+03:00) Syowa' },
    { Value: 'Asia/Tehran', Text: '(UTC+03:30) Tehran' },
    { Value: 'Asia/Baku', Text: '(UTC+04:00) Baku' },
    { Value: 'Asia/Dubai', Text: '(UTC+04:00) Dubai' },
    { Value: 'Indian/Mahe', Text: '(UTC+04:00) Mahe' },
    { Value: 'Indian/Mauritius', Text: '(UTC+04:00) Mauritius' },
    { Value: 'Europe/Samara', Text: '(UTC+04:00) Moscow+01 - Samara' },
    { Value: 'Indian/Reunion', Text: '(UTC+04:00) Reunion' },
    { Value: 'Asia/Tbilisi', Text: '(UTC+04:00) Tbilisi' },
    { Value: 'Asia/Yerevan', Text: '(UTC+04:00) Yerevan' },
    { Value: 'Asia/Kabul', Text: '(UTC+04:30) Kabul' },
    { Value: 'Asia/Aqtau', Text: '(UTC+05:00) Aqtau' },
    { Value: 'Asia/Aqtobe', Text: '(UTC+05:00) Aqtobe' },
    { Value: 'Asia/Ashgabat', Text: '(UTC+05:00) Ashgabat' },
    { Value: 'Asia/Dushanbe', Text: '(UTC+05:00) Dushanbe' },
    { Value: 'Asia/Karachi', Text: '(UTC+05:00) Karachi' },
    { Value: 'Indian/Kerguelen', Text: '(UTC+05:00) Kerguelen' },
    { Value: 'Indian/Maldives', Text: '(UTC+05:00) Maldives' },
    { Value: 'Antarctica/Mawson', Text: '(UTC+05:00) Mawson' },
    { Value: 'Asia/Yekaterinburg', Text: '(UTC+05:00) Moscow+02 - Yekaterinburg' },
    { Value: 'Asia/Tashkent', Text: '(UTC+05:00) Tashkent' },
    { Value: 'Asia/Colombo', Text: '(UTC+05:30) Colombo' },
    { Value: 'Asia/Kolkata', Text: '(UTC+05:30) India Standard Time' },
    { Value: 'Asia/Katmandu', Text: '(UTC+05:45) Katmandu' },
    { Value: 'Asia/Almaty', Text: '(UTC+06:00) Almaty' },
    { Value: 'Asia/Bishkek', Text: '(UTC+06:00) Bishkek' },
    { Value: 'Indian/Chagos', Text: '(UTC+06:00) Chagos' },
    { Value: 'Asia/Dhaka', Text: '(UTC+06:00) Dhaka' },
    { Value: 'Asia/Omsk', Text: '(UTC+06:00) Moscow+03 - Omsk' },
    { Value: 'Asia/Thimphu', Text: '(UTC+06:00) Thimphu' },
    { Value: 'Antarctica/Vostok', Text: '(UTC+06:00) Vostok' },
    { Value: 'Indian/Cocos', Text: '(UTC+06:30) Cocos' },
    { Value: 'Asia/Yangon', Text: '(UTC+06:30) Rangoon' },
    { Value: 'Asia/Bangkok', Text: '(UTC+07:00) Bangkok' },
    { Value: 'Indian/Christmas', Text: '(UTC+07:00) Christmas' },
    { Value: 'Antarctica/Davis', Text: '(UTC+07:00) Davis' },
    { Value: 'Asia/Saigon', Text: '(UTC+07:00) Hanoi' },
    { Value: 'Asia/Hovd', Text: '(UTC+07:00) Hovd' },
    { Value: 'Asia/Jakarta', Text: '(UTC+07:00) Jakarta' },
    { Value: 'Asia/Krasnoyarsk', Text: '(UTC+07:00) Moscow+04 - Krasnoyarsk' },
    { Value: 'Asia/Brunei', Text: '(UTC+08:00) Brunei' },
    { Value: 'Asia/Shanghai', Text: '(UTC+08:00) China Time - Beijing' },
    { Value: 'Asia/Choibalsan', Text: '(UTC+08:00) Choibalsan' },
    { Value: 'Asia/Hong_Kong', Text: '(UTC+08:00) Hong Kong' },
    { Value: 'Asia/Kuala_Lumpur', Text: '(UTC+08:00) Kuala Lumpur' },
    { Value: 'Asia/Macau', Text: '(UTC+08:00) Macau' },
    { Value: 'Asia/Makassar', Text: '(UTC+08:00) Makassar' },
    { Value: 'Asia/Manila', Text: '(UTC+08:00) Manila' },
    { Value: 'Asia/Irkutsk', Text: '(UTC+08:00) Moscow+05 - Irkutsk' },
    { Value: 'Asia/Singapore', Text: '(UTC+08:00) Singapore' },
    { Value: 'Asia/Taipei', Text: '(UTC+08:00) Taipei' },
    { Value: 'Asia/Ulaanbaatar', Text: '(UTC+08:00) Ulaanbaatar' },
    { Value: 'Australia/Perth', Text: '(UTC+08:00) Western Time - Perth' },
    { Value: 'Asia/Pyongyang', Text: '(UTC+08:30) Pyongyang' },
    { Value: 'Asia/Dili', Text: '(UTC+09:00) Dili' },
    { Value: 'Asia/Jayapura', Text: '(UTC+09:00) Jayapura' },
    { Value: 'Asia/Yakutsk', Text: '(UTC+09:00) Moscow+06 - Yakutsk' },
    { Value: 'Pacific/Palau', Text: '(UTC+09:00) Palau' },
    { Value: 'Asia/Seoul', Text: '(UTC+09:00) Seoul' },
    { Value: 'Asia/Tokyo', Text: '(UTC+09:00) Tokyo' },
    { Value: 'Australia/Darwin', Text: '(UTC+09:30) Central Time - Darwin' },
    { Value: 'Antarctica/DumontDUrville', Text: '(UTC+10:00) Dumont D"Urville' },
    { Value: 'Australia/Brisbane', Text: '(UTC+10:00) Eastern Time - Brisbane' },
    { Value: 'Pacific/Guam', Text: '(UTC+10:00) Guam' },
    { Value: 'Asia/Vladivostok', Text: '(UTC+10:00) Moscow+07 - Vladivostok' },
    { Value: 'Pacific/Port_Moresby', Text: '(UTC+10:00) Port Moresby' },
    { Value: 'Pacific / Chuuk', Text: '(UTC+10:00) Truk' },
    { Value: 'Australia/Adelaide', Text: '(UTC+10:30) Central Time - Adelaide' },
    { Value: 'Antarctica/Casey', Text: '(UTC+11:00) Casey' },
    { Value: 'Australia/Hobart', Text: '(UTC+11:00) Eastern Time - Hobart' },
    { Value: 'Australia/Sydney', Text: '(UTC+11:00) Eastern Time - Melbourne, Sydney' },
    { Value: 'Pacific/Efate', Text: '(UTC+11:00) Efate' },
    { Value: 'Pacific/Guadalcanal', Text: '(UTC+11:00) Guadalcanal' },
    { Value: 'Pacific/Kosrae', Text: '(UTC+11:00) Kosrae' },
    { Value: 'Asia/Magadan', Text: '(UTC+11:00) Moscow+08 - Magadan' },
    { Value: 'Pacific / Norfolk', Text: '(UTC+11:00) Norfolk' },
    { Value: 'Pacific/Noumea', Text: '(UTC+11:00) Noumea' },
    { Value: 'Pacific/Pohnpei', Text: '(UTC+11:00) Ponape' },
    { Value: 'Pacific/Funafuti', Text: '(UTC+12:00) Funafuti' },
    { Value: 'Pacific/Kwajalein', Text: '(UTC+12:00) Kwajalein' },
    { Value: 'Pacific/Majuro', Text: '(UTC+12:00) Majuro' },
    { Value: 'Asia/Kamchatka', Text: '(UTC+12:00) Moscow+09 - Petropavlovsk - Kamchatskiy' },
    { Value: 'Pacific / Nauru', Text: '(UTC+12:00) Nauru' },
    { Value: 'Pacific/Tarawa', Text: '(UTC+12:00) Tarawa' },
    { Value: 'Pacific/Wake', Text: '(UTC+12:00) Wake' },
    { Value: 'Pacific/Wallis', Text: '(UTC+12:00) Wallis' },
    { Value: 'Pacific/Auckland', Text: '(UTC+13:00) Auckland' },
    { Value: 'Pacific/Enderbury', Text: '(UTC+13:00) Enderbury' },
    { Value: 'Pacific/Fakaofo', Text: '(UTC+13:00) Fakaofo' },
    { Value: 'Pacific/Fiji', Text: '(UTC+13:00) Fiji' },
    { Value: 'Pacific/Tongatapu', Text: '(UTC+13:00) Tongatapu' },
    { Value: 'Pacific/Apia', Text: '(UTC+14:00) Apia' },
    { Value: 'Pacific/Kiritimati', Text: '(UTC+14:00) Kiritimati' }
];

/**
 * Date Generator from Recurrence Rule
 */
function generateSummary(rule, localeObject, locale) {
    let ruleObject = extractObjectFromRule(rule);
    let summary = localeObject.getConstant(EVERY) + ' ';
    let cldrObj;
    let cldrObj1;
    if (locale === 'en' || locale === 'en-US') {
        cldrObj1 = (getValue('months.stand-alone.abbreviated', getDefaultDateObject()));
        cldrObj = (getValue('days.stand-alone.abbreviated', getDefaultDateObject()));
    }
    else {
        cldrObj1 = (getValue('main.' + '' + locale + '.dates.calendars.gregorian.months.stand-alone.abbreviated', cldrData));
        cldrObj = (getValue('main.' + '' + locale + '.dates.calendars.gregorian.days.stand-alone.abbreviated', cldrData));
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
            ruleObject.day.forEach((day, index) => {
                summary += getValue(DAYINDEXOBJECT[day], cldrObj);
                summary += (((ruleObject.day.length - 1) === index) ? '' : ', ');
            });
            break;
        case 'MONTHLY':
            summary += localeObject.getConstant(MONTHS) + ' ' + localeObject.getConstant(ON) + ' ';
            summary += getMonthSummary(ruleObject, cldrObj, localeObject);
            break;
        case 'YEARLY':
            summary += localeObject.getConstant(YEARS) + ' ' + localeObject.getConstant(ON) + ' ';
            summary += getValue((ruleObject.month[0]).toString(), cldrObj1) + ' ';
            summary += getMonthSummary(ruleObject, cldrObj, localeObject);
            break;
        default:
            return '';
    }
    if (ruleObject.count) {
        summary += ', ' + (ruleObject.count) + ' ' + localeObject.getConstant(TIMES);
    }
    else if (ruleObject.until) {
        let tempDate = ruleObject.until;
        summary += ', ' + localeObject.getConstant(UNTIL)
            + ' ' + tempDate.getDate()
            + ' ' + getValue((tempDate.getMonth() + 1).toString(), cldrObj1)
            + ' ' + tempDate.getFullYear();
    }
    return summary;
}
function getMonthSummary(ruleObject, cldrObj, localeObj) {
    let summary = '';
    if (ruleObject.monthDay.length) {
        summary += ruleObject.monthDay[0];
    }
    else if (ruleObject.day) {
        let pos = ruleObject.setPosition - 1;
        summary += localeObj.getConstant(WEEKPOS[pos > -1 ? pos : (WEEKPOS.length - 1)])
            + ' ' + getValue(DAYINDEXOBJECT[ruleObject.day[0]], cldrObj);
    }
    return summary;
}
function generate(startDate, rule, excludeDate, startDayOfWeek, maximumCount = MAXOCCURRENCE, viewDate = null) {
    let ruleObject = extractObjectFromRule(rule);
    let cacheDate;
    let data = [];
    let modifiedDate = new Date(startDate.getTime());
    if (viewDate && viewDate > startDate && !ruleObject.count) {
        tempViewDate = new Date(new Date(viewDate.getTime()).setHours(0, 0, 0));
    }
    else {
        tempViewDate = null;
    }
    if (!ruleObject.until && tempViewDate) {
        cacheDate = new Date(tempViewDate.getTime());
        cacheDate.setDate(tempViewDate.getDate() + 42 * (ruleObject.interval));
        ruleObject.until = cacheDate;
    }
    if (ruleObject.until && startDate > ruleObject.until) {
        return data;
    }
    maxOccurrence = maximumCount;
    setFirstDayOfWeek(DAYINDEX[startDayOfWeek]);
    tempExcludeDate = [];
    let tempDate = isNullOrUndefined(excludeDate) ? [] : excludeDate.split(',');
    tempDate.forEach((content) => {
        let parsedDate = getDateFromRecurrenceDateString(content);
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
    return new Date(recDateString.substr(0, 4) +
        '-' + recDateString.substr(4, 2) +
        '-' + recDateString.substr(6, 5) +
        ':' + recDateString.substr(11, 2) +
        ':' + recDateString.substr(13));
}
function excludeDateHandler(data, date) {
    let zeroIndex = new Date(date).setHours(0, 0, 0, 0);
    if (tempExcludeDate.indexOf(zeroIndex) === -1 && (!tempViewDate || zeroIndex >= tempViewDate.getTime())) {
        data.push(date);
    }
}
function dailyType(startDate, endDate, data, ruleObject) {
    let tempDate = new Date(startDate.getTime());
    let interval = ruleObject.interval;
    let expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
    let state;
    while (compareDates(tempDate, endDate)) {
        state = true;
        state = validateRules(tempDate, ruleObject);
        if (state) {
            excludeDateHandler(data, tempDate.getTime());
            if (expectedCount && (data.length + tempExcludeDate.length) >= expectedCount) {
                break;
            }
        }
        tempDate.setDate(tempDate.getDate() + interval);
    }
}
function weeklyType(startDate, endDate, data, ruleObject) {
    let tempDate = getStartDateForWeek(startDate, ruleObject.day);
    let interval = ruleObject.interval;
    let expectedDays = ruleObject.day;
    let expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
    let state;
    let dayCycleData = processWeekDays(expectedDays);
    while (compareDates(tempDate, endDate)) {
        state = true;
        state = validateRules(tempDate, ruleObject);
        if (state) {
            excludeDateHandler(data, tempDate.getTime());
            if (expectedCount && (data.length + tempExcludeDate.length) >= expectedCount) {
                break;
            }
        }
        if (expectedDays.length > 1) {
            tempDate.setDate(tempDate.getDate()
                + dayCycleData[DAYINDEX[tempDate.getDay()]]
                + ((expectedDays.indexOf(DAYINDEX[tempDate.getDay()]) === expectedDays.length - 1) ?
                    ((interval - 1) * 7) : 0));
        }
        else {
            tempDate.setDate(tempDate.getDate()
                + (interval * 7));
        }
    }
}
function monthlyType(startDate, endDate, data, ruleObject) {
    let ruleType = validateMonthlyRuleType(ruleObject);
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
    let typeValue = checkYearlyType(ruleObject);
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
    let stDate = new Date(startDate.getFullYear(), 0, 0);
    let tempDate;
    let expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
    let state;
    let startDay;
    let firstWeekSpan;
    let weekNos = ruleObject.weekNo;
    let weekNo;
    let maxDate;
    let minDate;
    while (compareDates(stDate, endDate)) {
        startDay = dayIndex.indexOf(DAYINDEX[stDate.getDay()]);
        firstWeekSpan = (6 - startDay) + 1;
        for (let index = 0; index < weekNos.length; index++) {
            weekNo = weekNos[index];
            weekNo = (weekNo > 0) ? weekNo : 53 + weekNo + 1;
            maxDate = (weekNo === 1) ? firstWeekSpan : firstWeekSpan + ((weekNo - 1) * 7);
            minDate = (weekNo === 1) ? firstWeekSpan - 7 : firstWeekSpan + ((weekNo - 2) * 7);
            while (minDate < maxDate) {
                tempDate = new Date(stDate.getTime() + (MS_PER_DAY * minDate));
                state = validateRules(tempDate, ruleObject);
                if ((tempDate >= startDate) && state && compareDates(tempDate, endDate)) {
                    excludeDateHandler(data, tempDate.getTime());
                    if (expectedCount && (data.length + tempExcludeDate.length) >= expectedCount) {
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
    let stDate = new Date(startDate.getFullYear(), 0, 0);
    let tempDate;
    let expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
    let state;
    let date;
    while (compareDates(stDate, endDate)) {
        for (let index = 0; index < ruleObject.yearDay.length; index++) {
            date = ruleObject.yearDay[index];
            tempDate = new Date(stDate.getTime());
            if ((date === LEAPYEAR || date === -LEAPYEAR) && ((tempDate.getFullYear() + 1) % 4 !== 0)) {
                tempDate.setDate(tempDate.getDate() + 1);
                continue;
            }
            tempDate.setDate(tempDate.getDate() + ((date < 0) ? getMaxYearDay(tempDate.getFullYear() + 1) + 1 + date : date));
            state = validateRules(tempDate, ruleObject);
            if ((tempDate >= startDate) && state && compareDates(tempDate, endDate)) {
                excludeDateHandler(data, tempDate.getTime());
                if (expectedCount && (data.length + tempExcludeDate.length) >= expectedCount) {
                    return;
                }
            }
        }
        stDate = new Date(tempDate.getFullYear() + ruleObject.interval, 0, 0);
    }
}
function getMaxYearDay(date) {
    return (date % 4 === 0) ? LEAPYEAR : NORMALYEAR;
}
function checkYearlyType(ruleObject) {
    if (ruleObject.yearDay.length) {
        return 'YEARDAY';
    }
    else if (ruleObject.weekNo.length) {
        return 'WEEKNO';
    }
    return 'MONTH';
}
function monthlyDateTypeProcess(startDate, endDate, data, ruleObject) {
    let tempDate = new Date(startDate.getTime());
    let mainDate = new Date(startDate.getTime());
    let expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
    let interval = ruleObject.interval;
    let monthInit = 0;
    let date;
    let state;
    tempDate.setDate(1);
    mainDate.setDate(1);
    if (ruleObject.month.length) {
        tempDate.setMonth(ruleObject.month[0] - 1);
    }
    while (compareDates(tempDate, endDate)) {
        for (let index = 0; index < ruleObject.monthDay.length; index++) {
            date = ruleObject.monthDay[index];
            let maxDate = (tempDate.getMonth() === 1) ?
                (tempDate.getFullYear() % 4 === 0 ? 29 : 28) : monthDay[tempDate.getMonth()];
            date = date > 0 ? date : (maxDate + date + 1);
            if ((date > 0) && validateProperDate(tempDate, date, mainDate)) {
                tempDate.setDate(date);
                if (endDate && tempDate > endDate) {
                    return;
                }
                state = validateRules(tempDate, ruleObject);
                if ((tempDate >= startDate) && state && compareDates(tempDate, endDate)) {
                    excludeDateHandler(data, tempDate.getTime());
                    if (expectedCount && (data.length + tempExcludeDate.length) >= expectedCount) {
                        return;
                    }
                }
            }
        }
        monthInit = setNextValidDate(tempDate, ruleObject, monthInit, interval);
    }
}
function setNextValidDate(tempDate, ruleObject, monthInit, interval, beginDate = null) {
    let monthData = beginDate ? beginDate.getMonth() : 0;
    tempDate.setDate(1);
    if (ruleObject.month.length) {
        monthInit++;
        monthInit = monthInit % ruleObject.month.length;
        tempDate.setMonth(ruleObject.month[monthInit] - 1);
        if (monthInit === 0) {
            tempDate.setFullYear(tempDate.getFullYear() + interval);
        }
    }
    else {
        if (beginDate && (beginDate.getFullYear() < tempDate.getFullYear())) {
            monthData = tempDate.getMonth() - 1;
        }
        tempDate.setMonth((beginDate ?
            monthData :
            tempDate.getMonth()) + interval);
    }
    return monthInit;
}
function monthlyDayTypeProcess(startDate, endDate, data, ruleObject) {
    let tempDate = new Date(startDate.getTime());
    let expectedDays = ruleObject.day;
    let expectedCount = ruleObject.count ? ruleObject.count : maxOccurrence;
    let dayCycleData = processWeekDays(expectedDays);
    let interval = ruleObject.interval;
    let state;
    let monthCollection = [];
    let weekCollection = [];
    let month;
    let index;
    let beginDate;
    let monthInit = 0;
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
                tempDate.setDate(tempDate.getDate()
                    + dayCycleData[DAYINDEX[tempDate.getDay()]]);
            }
        }
        else {
            while (tempDate.getMonth() === month) {
                monthCollection.push([tempDate.getTime()]);
                tempDate.setDate(tempDate.getDate()
                    + (7));
            }
        }
        index = ((ruleObject.setPosition < 1) ? (monthCollection.length + ruleObject.setPosition) : ruleObject.setPosition - 1);
        if (ruleObject.setPosition === null) {
            index = 0;
            let datas = [];
            for (let week = 0; week < monthCollection.length; week++) {
                for (let row = 0; row < monthCollection[week].length; row++) {
                    datas.push(monthCollection[week][row]);
                }
            }
            monthCollection = [datas];
        }
        for (let week = 0; week < monthCollection[index].length; week++) {
            let dayData = monthCollection[index][week];
            let chDate = new Date(dayData);
            state = validateRules(chDate, ruleObject);
            if ((chDate >= startDate) && compareDates(chDate, endDate) && state) {
                excludeDateHandler(data, dayData);
                if (expectedCount && (data.length + tempExcludeDate.length) >= expectedCount) {
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
    return endDate ? (startDate <= endDate) : true;
}
function checkDayIndex(day, expectedDays) {
    return (expectedDays.indexOf(DAYINDEX[day]) === -1);
}
function getStartDateForWeek(startDate, expectedDays) {
    let tempDate = new Date(startDate.getTime());
    if (expectedDays.indexOf(DAYINDEX[tempDate.getDay()]) === -1) {
        do {
            tempDate.setDate(tempDate.getDate() + 1);
        } while (expectedDays.indexOf(DAYINDEX[tempDate.getDay()]) === -1);
    }
    return tempDate;
}
function extractObjectFromRule(rules) {
    let ruleObject = {
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
    let rulesList = rules.split(';');
    let splitData = [];
    let temp;
    rulesList.forEach((data) => {
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
    if ((ruleObject.freq === 'MONTHLY') && (ruleObject.monthDay.length === 0)) {
        let index = ruleObject.validRules.indexOf('BYDAY');
        ruleObject.validRules.splice(index, 1);
    }
    return ruleObject;
}
function validateProperDate(tempDate, data, startDate) {
    let maxDate = (tempDate.getMonth() === 1) ? (tempDate.getFullYear() % 4 === 0 ? 29 : 28) : monthDay[tempDate.getMonth()];
    return (data <= maxDate) && (tempDate >= startDate);
}
function processWeekDays(expectedDays) {
    let dayCycle = {};
    expectedDays.forEach((element, index) => {
        if (index === expectedDays.length - 1) {
            let startIndex = dayIndex.indexOf(element);
            let temp = startIndex;
            while (temp % 7 !== dayIndex.indexOf(expectedDays[0])) {
                temp++;
            }
            dayCycle[element] = temp - startIndex;
        }
        else {
            dayCycle[element] = dayIndex.indexOf(expectedDays[(index + 1)]) - dayIndex.indexOf(element);
        }
    });
    return dayCycle;
}
function checkMonth(tempDate, expectedMonth) {
    return (expectedMonth.indexOf(tempDate.getMonth() + 1) === -1);
}
function checkDate(tempDate, expectedDate) {
    let temp = expectedDate.slice(0);
    let data;
    let maxDate = (tempDate.getMonth() === 1) ?
        (tempDate.getFullYear() % 4 === 0 ? 29 : 28) : monthDay[tempDate.getMonth()];
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
    let temp = expectedyearDay.slice(0);
    let data;
    let yearDay = getYearDay(tempDate);
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
    let tempDate = startDateCollection[currentDate.getFullYear()];
    let diff = currentDate.getTime() - tempDate.getTime();
    return Math.ceil(diff / MS_PER_DAY);
}
function validateMonthlyRuleType(ruleObject) {
    if (ruleObject.monthDay.length && !ruleObject.day.length) {
        return 'date';
    }
    else if (!ruleObject.monthDay.length && ruleObject.day.length) {
        return 'day';
    }
    return 'both';
}
function rotate(days) {
    let data = days.shift();
    days.push(data);
}
function setFirstDayOfWeek(day) {
    while (dayIndex[0] !== day) {
        rotate(dayIndex);
    }
}
function validateRules(tempDate, ruleObject) {
    let state = true;
    let expectedDays = ruleObject.day;
    let expectedMonth = ruleObject.month;
    let expectedDate = ruleObject.monthDay;
    let expectedyearDay = ruleObject.yearDay;
    ruleObject.validRules.forEach((rule) => {
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
let startDateCollection = {};
let tempExcludeDate;
let dayIndex = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
let maxOccurrence;
let tempViewDate;
const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYINDEX = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
const MAXOCCURRENCE = 43;
const LEAPYEAR = 366;
const NORMALYEAR = 365;
const WEEKPOS = ['first', 'second', 'third', 'fourth', 'last'];
const TIMES = 'summaryTimes';
const ON = 'summaryOn';
const EVERY = 'every';
const UNTIL = 'summaryUntil';
const DAYS = 'summaryDay';
const WEEKS = 'summaryWeek';
const MONTHS = 'summaryMonth';
const YEARS = 'summaryYear';
const DAYINDEXOBJECT = {
    SU: 'sun',
    MO: 'mon',
    TU: 'tue',
    WE: 'wed',
    TH: 'thu',
    FR: 'fri',
    SA: 'sat'
};
function getRecurrenceStringFromDate(date) {
    return [date.getUTCFullYear(),
        roundDateValues(date.getUTCMonth() + 1),
        roundDateValues(date.getUTCDate()),
        'T',
        roundDateValues(date.getUTCHours()),
        roundDateValues(date.getUTCMinutes()),
        roundDateValues(date.getUTCSeconds()),
        'Z'].join('');
}
function roundDateValues(date) {
    return ('0' + date).slice(-2);
}

/**
 * EventBase for appointment rendering
 */
class EventBase {
    /**
     * Constructor for EventBase
     */
    constructor(parent) {
        this.slots = [];
        this.parent = parent;
        this.timezone = new Timezone();
    }
    processData(events, timeZonePropChanged, oldTimezone) {
        let start = this.parent.activeView.startDate();
        let end = this.parent.activeView.endDate();
        let fields = this.parent.eventFields;
        this.parent.eventsProcessed = [];
        let processed = [];
        let temp = 1;
        let generateID = false;
        if (events.length > 0 && isNullOrUndefined(events[0][fields.id])) {
            generateID = true;
        }
        for (let event of events) {
            if (generateID) {
                event[fields.id] = temp++;
            }
            if (timeZonePropChanged) {
                this.processTimezoneChange(event, oldTimezone);
            }
            else {
                this.processTimezone(event);
            }
            if (!isNullOrUndefined(event[fields.recurrenceRule]) && isNullOrUndefined(event[fields.recurrenceID])) {
                processed = processed.concat(this.generateOccurrence(event));
            }
            else {
                event.Guid = this.generateGuid();
                processed.push(event);
            }
        }
        this.parent.eventsProcessed = this.filterEvents(start, end, processed);
        return processed;
    }
    timezonePropertyChange(oldTimezone) {
        let processed = this.processData(this.parent.eventsData, true, oldTimezone);
        this.parent.notify(dataReady, { processedData: processed });
    }
    processTimezoneChange(event, oldTimezone) {
        let fields = this.parent.eventFields;
        if (oldTimezone && this.parent.timezone) {
            event[fields.startTime] = this.timezone.convert(event[fields.startTime], oldTimezone, this.parent.timezone);
            event[fields.endTime] = this.timezone.convert(event[fields.endTime], oldTimezone, this.parent.timezone);
        }
        else if (!oldTimezone && this.parent.timezone) {
            event[fields.startTime] = this.timezone.add(event[fields.startTime], this.parent.timezone);
            event[fields.endTime] = this.timezone.add(event[fields.endTime], this.parent.timezone);
        }
        else if (oldTimezone && !this.parent.timezone) {
            event[fields.startTime] = this.timezone.remove(event[fields.startTime], oldTimezone);
            event[fields.endTime] = this.timezone.remove(event[fields.endTime], oldTimezone);
        }
    }
    processTimezone(event) {
        let fields = this.parent.eventFields;
        if (event[fields.startTimezone] || event[fields.endTimezone]) {
            let startTimezone = event[fields.startTimezone] || event[fields.endTimezone];
            let endTimezone = event[fields.endTimezone] || event[fields.startTimezone];
            event[fields.startTime] = this.timezone.add(event[fields.startTime], startTimezone);
            event[fields.endTime] = this.timezone.add(event[fields.endTime], endTimezone);
            if (this.parent.timezone) {
                let zone = this.parent.timezone;
                event[fields.startTime] = this.timezone.convert(event[fields.startTime], startTimezone, zone);
                event[fields.endTime] = this.timezone.convert(event[fields.endTime], endTimezone, zone);
            }
        }
        else if (this.parent.timezone) {
            event[fields.startTime] = this.timezone.add(event[fields.startTime], this.parent.timezone);
            event[fields.endTime] = this.timezone.add(event[fields.endTime], this.parent.timezone);
        }
    }
    filterEvents(startDate, endDate, collection) {
        let appointments = !isNullOrUndefined(collection) ? collection : this.parent.eventsProcessed;
        let fieldMapping = this.parent.eventFields;
        let predicate = new Predicate(fieldMapping.startTime, 'greaterthanorequal', startDate).
            and(new Predicate(fieldMapping.endTime, 'greaterthanorequal', startDate)).
            and(new Predicate(fieldMapping.startTime, 'lessthan', endDate)).
            or(new Predicate(fieldMapping.startTime, 'lessthanorequal', startDate).
            and(new Predicate(fieldMapping.endTime, 'greaterthan', startDate)));
        let filter = new DataManager({ json: appointments }).executeLocal(new Query().where(predicate));
        return this.sortByTime(filter);
    }
    sortByTime(appointments) {
        let fieldMapping = this.parent.eventFields;
        appointments.sort((a, b) => {
            let d1 = a[fieldMapping.startTime];
            let d2 = b[fieldMapping.startTime];
            return d1.getTime() - d2.getTime();
        });
        return appointments;
    }
    sortByDateTime(appointments) {
        let fieldMapping = this.parent.eventFields;
        appointments.sort((object1, object2) => {
            let d3 = object1[fieldMapping.startTime];
            let d4 = object2[fieldMapping.startTime];
            let d5 = object1[fieldMapping.endTime];
            let d6 = object2[fieldMapping.endTime];
            let d1 = d5.getTime() - d3.getTime();
            let d2 = d6.getTime() - d4.getTime();
            return (d3.getTime() - d4.getTime() || d2 - d1);
        });
        return appointments;
    }
    getSmallestMissingNumber(array) {
        let large = Math.max.apply(Math, array);
        for (let i = 0; i < large; i++) {
            if (array.indexOf(i) === -1) {
                return i;
            }
        }
        return large + 1;
    }
    splitEventByDay(event) {
        let eventFields = this.parent.eventFields;
        let data = [];
        let eventStartTime = event[eventFields.startTime];
        let eventEndTime = event[eventFields.endTime];
        let isDifferentDate = resetTime(new Date(eventStartTime.getTime())) <
            resetTime(new Date(eventEndTime.getTime()));
        if (isDifferentDate) {
            let start = new Date(eventStartTime.getTime());
            let end = addDays(resetTime(new Date(eventStartTime.getTime())), 1);
            let endDate = (eventEndTime.getHours() === 0 && eventEndTime.getMinutes() === 0) ?
                eventEndTime : addDays(eventEndTime, 1);
            let index = 1;
            let eventLength = getDaysCount(eventStartTime.getTime(), endDate.getTime());
            while (end <= eventEndTime) {
                let app = extend({}, event);
                app[eventFields.startTime] = start;
                app[eventFields.endTime] = end;
                app.data = { index: index, count: eventLength };
                app.Guid = this.generateGuid();
                app.isSpanned = true;
                data.push(app);
                start = end;
                if ((new Date(start.getTime()).setHours(0, 0, 0, 0) === new Date(eventEndTime.getTime()).setHours(0, 0, 0, 0))
                    && !(end.getTime() === eventEndTime.getTime())) {
                    end = new Date(new Date(start.getTime()).setHours(eventEndTime.getHours(), eventEndTime.getMinutes()));
                }
                else {
                    end = addDays(resetTime(new Date(start.getTime())), 1);
                }
                index++;
            }
        }
        else {
            data.push(event);
        }
        return data;
    }
    splitEvent(event, dateRender) {
        let fields = this.parent.eventFields;
        let start = resetTime(new Date(event[fields.startTime] + '')).getTime();
        let end = resetTime(new Date(event[fields.endTime] + '')).getTime();
        if (getDateInMs(event[fields.endTime]) <= 0) {
            let temp = addDays(resetTime(new Date(event[fields.endTime] + '')), -1).getTime();
            end = start > temp ? start : temp;
        }
        let orgStart = start;
        let orgEnd = end;
        let ranges = [];
        if (start !== end) {
            if (start < dateRender[0].getTime()) {
                start = dateRender[0].getTime();
            }
            if (end > dateRender[dateRender.length - 1].getTime()) {
                end = dateRender[dateRender.length - 1].getTime();
            }
            let cStart = start;
            for (let level = 0; level < this.slots.length; level++) {
                let slot = this.slots[level];
                let firstSlot = slot[0];
                cStart = (cStart <= firstSlot && end >= firstSlot) ? firstSlot : cStart;
                if (cStart > end || firstSlot > end) {
                    break;
                }
                if (this.parent.activeViewOptions.showWeekend && this.parent.currentView !== 'WorkWeek') {
                    let startIndex = slot.indexOf(cStart);
                    if (startIndex !== -1) {
                        let endIndex = slot.indexOf(end);
                        let hasBreak = endIndex !== -1;
                        endIndex = hasBreak ? endIndex : slot.length - 1;
                        let count = ((endIndex - startIndex) + 1);
                        let isLeft = (slot[startIndex] !== orgStart);
                        let isRight = (slot[endIndex] !== orgEnd);
                        ranges.push(this.cloneEventObject(event, slot[startIndex], slot[endIndex], count, isLeft, isRight));
                        if (hasBreak) {
                            break;
                        }
                    }
                }
                else {
                    if (this.dateInRange(cStart, slot[0], slot[slot.length - 1])) {
                        let availSlot = [];
                        for (let i = 0; i < slot.length; i++) {
                            if (this.dateInRange(slot[i], orgStart, orgEnd)) {
                                availSlot.push(slot[i]);
                            }
                        }
                        if (availSlot.length > 0) {
                            let cnt = availSlot.length;
                            let isLeft = (availSlot[0] !== orgStart);
                            let isRight = (availSlot[availSlot.length - 1] !== orgEnd);
                            ranges.push(this.cloneEventObject(event, availSlot[0], availSlot[availSlot.length - 1], cnt, isLeft, isRight));
                        }
                    }
                }
            }
        }
        else {
            ranges.push(this.cloneEventObject(event, start, end, 1, false, false));
        }
        return ranges;
    }
    cloneEventObject(event, start, end, count, isLeft, isRight) {
        let fields = this.parent.eventFields;
        let e = extend({}, event, null, true);
        let data = { count: count, isLeft: isLeft, isRight: isRight };
        data[fields.startTime] = event[fields.startTime];
        data[fields.endTime] = event[fields.endTime];
        e.data = data;
        e[fields.startTime] = new Date(start);
        e[fields.endTime] = new Date(end);
        return e;
    }
    dateInRange(date, start, end) {
        return start <= date && date <= end;
    }
    getSelectedEventElements(target) {
        this.removeSelectedAppointmentClass();
        if (this.parent.selectedElements.length <= 0) {
            this.parent.selectedElements.push(target);
        }
        else {
            let isAlreadySelected = this.parent.selectedElements.filter((element) => {
                return element.getAttribute('data-guid') === target.getAttribute('data-guid');
            });
            if (isAlreadySelected.length <= 0) {
                let focusElements = [].slice.call(this.parent.element.
                    querySelectorAll('div[data-guid="' + target.getAttribute('data-guid') + '"]'));
                for (let element of focusElements) {
                    this.parent.selectedElements.push(element);
                }
            }
            else {
                let selectedElements = this.parent.selectedElements.filter((element) => {
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
    getSelectedEvents() {
        let eventSelect = [];
        let elementSelect = [];
        let selectAppointments = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_BORDER));
        selectAppointments.filter((element, index, selectAppointments) => {
            eventSelect.push(this.getEventByGuid(element.getAttribute('data-guid')));
            elementSelect.push(element);
        });
        return {
            event: eventSelect.length > 1 ? eventSelect : eventSelect[0],
            element: elementSelect.length > 1 ? elementSelect : elementSelect[0]
        };
    }
    removeSelectedAppointmentClass() {
        let selectedAppointments = this.getSelectedAppointments();
        for (let appointment of selectedAppointments) {
            appointment.setAttribute('aria-selected', 'false');
        }
        removeClass(selectedAppointments, APPOINTMENT_BORDER);
    }
    addSelectedAppointments(cells, focusCell) {
        for (let cell of cells) {
            cell.setAttribute('aria-selected', 'true');
        }
        addClass(cells, APPOINTMENT_BORDER);
    }
    getSelectedAppointments() {
        return [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_BORDER + ',.' + APPOINTMENT_CLASS + ':focus'));
    }
    focusElement() {
        let selectedCell = this.parent.getSelectedElements();
        if (selectedCell.length > 0) {
            if (this.parent.keyboardInteractionModule) {
                let target = (this.parent.activeCellsData.element ||
                    selectedCell[selectedCell.length - 1]);
                this.parent.keyboardInteractionModule.selectCells(false, target);
            }
            return;
        }
        let selectedAppointments = this.getSelectedAppointments();
        if (selectedAppointments.length > 0) {
            selectedAppointments[selectedAppointments.length - 1].focus();
            return;
        }
    }
    selectWorkCellByTime(eventsData) {
        let target;
        if (this.parent.currentView === 'Agenda' || this.parent.currentView === 'MonthAgenda') {
            return target;
        }
        if (eventsData.length > 0) {
            let selectedObject = eventsData[eventsData.length - 1];
            let eventStartTime = selectedObject[this.parent.eventFields.startTime];
            let nearestTime = new Date(+eventStartTime).setMinutes(0, 0, 0);
            let isAllDay = this.isAllDayAppointment(selectedObject);
            if (this.parent.currentView === 'Month' || isAllDay) {
                nearestTime = new Date(+eventStartTime).setHours(0, 0, 0, 0);
            }
            let targetArea;
            if (isAllDay && ['Day', 'Week', 'WorkWeek'].indexOf(this.parent.currentView) !== -1) {
                targetArea = this.parent.getAllDayRow();
            }
            else {
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
    isAllDayAppointment(event) {
        let fieldMapping = this.parent.eventFields;
        let isAllDay = event[fieldMapping.isAllDay];
        let isFullDay = ((event[fieldMapping.endTime].getTime() - event[fieldMapping.startTime].getTime())
            / MS_PER_DAY) >= 1;
        return (isAllDay || isFullDay) ? true : false;
    }
    addEventListener() {
        this.parent.on(documentClick, this.appointmentBorderRemove, this);
    }
    appointmentBorderRemove(event) {
        let target = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_CLASS));
        let element = event.event.target;
        if (closest(element, '.' + APPOINTMENT_CLASS)) {
            this.parent.removeSelectedClass();
        }
        else if (!closest(element, '.' + POPUP_OPEN)) {
            this.removeSelectedAppointmentClass();
        }
    }
    wireAppointmentEvents(element) {
        EventHandler.add(element, 'click', this.eventClick, this);
        EventHandler.add(element, 'dblclick', this.eventDoubleClick, this);
    }
    eventClick(eventData) {
        if (eventData.ctrlKey && eventData.which === 1 && this.parent.keyboardInteractionModule) {
            this.parent.selectedElements = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_BORDER));
            this.parent.keyboardInteractionModule.onAppointmentSelection(eventData);
            return;
        }
        this.removeSelectedAppointmentClass();
        this.activeEventData(eventData);
        let args = extend(this.parent.activeEventData, { cancel: false });
        this.parent.trigger(eventClick, args);
        if (args.cancel) {
            this.removeSelectedAppointmentClass();
            return;
        }
        this.parent.notify(eventClick, this.parent.activeEventData);
    }
    eventDoubleClick(e) {
        this.parent.quickPopup.quickPopup.animation = { close: { effect: 'None' } };
        this.parent.quickPopup.quickPopup.close();
        if (e.type === 'touchstart') {
            this.activeEventData(e);
        }
        this.removeSelectedAppointmentClass();
        let fieldMapping = this.parent.eventFields;
        if (!isNullOrUndefined(this.parent.activeEventData.event) &&
            isNullOrUndefined(this.parent.activeEventData.event[fieldMapping.recurrenceID])) {
            this.parent.currentAction = 'Save';
            this.parent.eventWindow.openEditor(this.parent.activeEventData.event, 'Save');
        }
        else {
            this.parent.currentAction = 'EditOccurrence';
            this.parent.quickPopup.openRecurrenceAlert();
        }
    }
    getEventByGuid(guid) {
        return new DataManager({ json: this.parent.eventsProcessed }).executeLocal(new Query().where('Guid', 'equal', guid))[0];
    }
    generateGuid() {
        return 'xyxxxxyx-xxxy-yxxx-xyxx-xxyxxxxyyxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = (c === 'x') ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    getEventMaxId() {
        let fields = this.parent.eventFields;
        if (this.parent.eventsData.length < 1) {
            return 0;
        }
        return Math.max.apply(Math, this.parent.eventsData.map((event) => { return event[fields.id]; }));
    }
    activeEventData(eventData) {
        let target = closest(eventData.target, '.' + APPOINTMENT_CLASS);
        let guid = target.getAttribute('data-guid');
        this.addSelectedAppointments([].slice.call(this.parent.element.querySelectorAll('div[data-guid="' + guid + '"]')));
        let eventObject = this.getEventByGuid(guid);
        if (eventObject.isSpanned) {
            let fields = this.parent.eventFields;
            eventObject = this.parent.eventsData.filter((obj) => {
                return obj[fields.id] === eventObject[fields.id];
            })[0];
        }
        this.parent.activeEventData = { event: eventObject, element: target };
    }
    generateOccurrence(event, viewDate) {
        let fields = this.parent.eventFields;
        let startDate = event[fields.startTime];
        let endDate = event[fields.endTime];
        let occurrenceCollection = [];
        let currentViewDate = isNullOrUndefined(viewDate) ? this.parent.activeView.startDate() : viewDate;
        let dates = generate(startDate, event[fields.recurrenceRule], event[fields.recurrenceException], this.parent.firstDayOfWeek, undefined, currentViewDate);
        let date = dates.shift();
        let duration = endDate.getTime() - startDate.getTime();
        while (date) {
            let clonedObject = extend({}, event, null, true);
            clonedObject[fields.startTime] = new Date(date);
            clonedObject[fields.endTime] = new Date(new Date(date).setMilliseconds(duration));
            clonedObject[fields.recurrenceID] = clonedObject[fields.id];
            clonedObject.Guid = this.generateGuid();
            occurrenceCollection.push(clonedObject);
            date = dates.shift();
        }
        return occurrenceCollection;
    }
    getRecurrenceEvent(eventData) {
        let eventFields = this.parent.eventFields;
        let parentApp = new DataManager(this.parent.eventsData).
            executeLocal(new Query().where(eventFields.id, 'equal', eventData[eventFields.recurrenceID]));
        return parentApp[0];
    }
    getOccurrencesByID(id) {
        let fields = this.parent.eventFields;
        let occurrenceCollection = [];
        let parentObject = this.parent.eventsData.filter((obj) => { return obj[fields.id] === id; });
        for (let event of parentObject) {
            if (!isNullOrUndefined(event[fields.recurrenceRule])) {
                occurrenceCollection = occurrenceCollection.concat(this.generateOccurrence(event));
            }
        }
        return occurrenceCollection;
    }
    getOccurrencesByRange(startTime, endTime) {
        let fields = this.parent.eventFields;
        let occurrenceCollection = [];
        for (let event of this.parent.eventsData) {
            if (!isNullOrUndefined(event[fields.recurrenceRule])) {
                occurrenceCollection = occurrenceCollection.concat(this.generateOccurrence(event));
            }
        }
        let filter = occurrenceCollection.filter((obj) => {
            return obj[fields.startTime] >= startTime && obj[fields.endTime] <= endTime && !isNullOrUndefined(obj[fields.recurrenceID]);
        });
        return filter;
    }
}

/**
 * Schedule CRUD operations
 */
class Crud {
    constructor(parent) {
        this.parent = parent;
        this.timezone = new Timezone();
    }
    getQuery() {
        let start = this.parent.activeView.startDate();
        let end = this.parent.activeView.endDate();
        return this.parent.dataModule.generateQuery(start, end);
    }
    refreshData(args) {
        let actionArgs = { requestType: args.requestType, cancel: false, data: args.data };
        if (this.parent.dataModule.dataManager.dataSource.offline) {
            this.parent.trigger(actionComplete, actionArgs);
            this.parent.renderModule.refreshDataManager();
            return;
        }
        else {
            args.promise.then((e) => {
                if (this.parent.isDestroyed) {
                    return;
                }
                this.parent.trigger(actionComplete, actionArgs);
                if (actionArgs.cancel) {
                    return;
                }
                this.parent.renderModule.refreshDataManager();
            }).catch((e) => {
                if (this.parent.isDestroyed) {
                    return;
                }
                this.parent.trigger(actionFailure, { error: e });
            });
        }
    }
    addEvent(eventData) {
        let fields = this.parent.eventFields;
        let promise = null;
        let editParms = { addedRecords: [], changedRecords: [], deletedRecords: [] };
        let args = { requestType: 'eventCreate', cancel: false, data: eventData };
        this.parent.trigger(actionBegin, args);
        if (args.cancel) {
            return;
        }
        if (eventData instanceof Array) {
            for (let event of eventData) {
                this.processCrudTimezone(event);
                editParms.addedRecords.push(event);
            }
            promise = this.parent.dataModule.dataManager.saveChanges(editParms, fields.id, null, this.getQuery());
        }
        else {
            this.processCrudTimezone(eventData);
            promise = this.parent.dataModule.dataManager.insert(eventData, null, this.getQuery());
        }
        let crudArgs = { requestType: 'eventCreated', cancel: false, data: eventData, promise: promise };
        this.refreshData(crudArgs);
    }
    saveEvent(event, action) {
        let fields = this.parent.eventFields;
        let promise = null;
        let editParms = { addedRecords: [], changedRecords: [], deletedRecords: [] };
        let args = { requestType: 'eventChange', cancel: false };
        let dataObj = [];
        (event instanceof Array) ? dataObj = event : dataObj.push(event);
        let data = event;
        if (isNullOrUndefined(action)) {
            args.data = data;
            this.parent.trigger(actionBegin, args);
            if (args.cancel) {
                return;
            }
            this.processCrudTimezone(data);
            promise = this.parent.dataModule.dataManager.update(fields.id, event, null, this.getQuery());
        }
        else {
            let parentEvent = this.parent.eventBase.getRecurrenceEvent(data);
            switch (action) {
                case 'EditOccurrence':
                    args.data = { occurrence: event, parent: parentEvent };
                    this.parent.trigger(actionBegin, args);
                    if (args.cancel) {
                        return;
                    }
                    let exDate = this.excludeDateCheck(data[fields.startTime], parentEvent[fields.recurrenceException]);
                    if (exDate !== parentEvent[fields.recurrenceException]) {
                        parentEvent[fields.recurrenceException] = exDate;
                        data[fields.recurrenceID] = parentEvent[fields.id];
                        this.processCrudTimezone(parentEvent);
                        editParms.changedRecords.push(parentEvent);
                        this.processCrudTimezone(data);
                        editParms.addedRecords.push(data);
                    }
                    else {
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
                    let delApp = new DataManager(this.parent.eventsData).
                        executeLocal(new Query().where(fields.recurrenceID, 'equal', parentEvent[fields.id]));
                    data[fields.id] = parentEvent[fields.id];
                    data[fields.recurrenceException] = null;
                    data[fields.recurrenceID] = null;
                    this.processCrudTimezone(data);
                    editParms.changedRecords.push(data);
                    for (let event of delApp) {
                        editParms.deletedRecords.push(event);
                    }
                    break;
            }
            promise = this.parent.dataModule.dataManager.saveChanges(editParms, fields.id, null, this.getQuery());
        }
        this.parent.eventBase.selectWorkCellByTime(dataObj);
        let crudArgs = { requestType: 'eventChanged', cancel: false, data: args.data, promise: promise };
        this.refreshData(crudArgs);
    }
    deleteEvent(id, action) {
        let fields = this.parent.eventFields;
        let editParms = { addedRecords: [], changedRecords: [], deletedRecords: [] };
        let dataObj = [];
        let normalEvent = [];
        let recEvent = [];
        switch (typeof id) {
            case 'string':
            case 'number':
                dataObj = new DataManager(this.parent.eventsData).
                    executeLocal(new Query().where(fields.id, 'equal', id));
                break;
            case 'object':
                (id instanceof Array) ? dataObj = id : dataObj.push(id);
                break;
        }
        for (let event of dataObj) {
            (!isNullOrUndefined(event[fields.recurrenceRule])) ? recEvent.push(event) : normalEvent.push(event);
        }
        let args = { requestType: 'eventRemove', cancel: false };
        if (action !== 'DeleteOccurrence') {
            args.data = dataObj;
            this.parent.trigger(actionBegin, args);
            if (args.cancel) {
                return;
            }
        }
        if (isNullOrUndefined(action) || normalEvent.length > 0) {
            for (let event of normalEvent) {
                editParms.deletedRecords.push(event);
            }
        }
        if (recEvent.length > 0) {
            switch (action) {
                case 'Delete':
                case 'DeleteOccurrence':
                    for (let i = 0; i < recEvent.length; i++) {
                        let parentEvent = this.parent.eventBase.getRecurrenceEvent(recEvent[i]);
                        args.data = { occurrence: recEvent[i], parent: parentEvent };
                        this.parent.trigger(actionBegin, args);
                        if (args.cancel) {
                            return;
                        }
                        parentEvent[fields.recurrenceException] =
                            this.excludeDateCheck(recEvent[i][fields.startTime], parentEvent[fields.recurrenceException]);
                        this.processCrudTimezone(parentEvent);
                        editParms.changedRecords.push(parentEvent);
                        if (recEvent[i][fields.id] !== parentEvent[fields.id]) {
                            editParms.deletedRecords.push(recEvent[i]);
                        }
                    }
                    break;
                case 'DeleteSeries':
                    for (let app of recEvent) {
                        let predicate = new Predicate(fields.id, 'equal', app[fields.recurrenceID]).
                            or(new Predicate(fields.recurrenceID, 'equal', app[fields.recurrenceID]));
                        let delApp = new DataManager(this.parent.eventsData).executeLocal(new Query().where(predicate));
                        for (let event of delApp) {
                            editParms.deletedRecords.push(event);
                        }
                        editParms.deletedRecords.push(app);
                    }
                    break;
            }
        }
        let promise;
        promise = this.parent.dataModule.dataManager.saveChanges(editParms, fields.id, null, this.getQuery());
        this.parent.eventBase.selectWorkCellByTime(dataObj);
        let crudArgs = { requestType: 'eventRemoved', cancel: false, data: args.data, promise: promise };
        this.refreshData(crudArgs);
    }
    processCrudTimezone(events) {
        let fields = this.parent.eventFields;
        if (events[fields.startTimezone] || events[fields.endTimezone]) {
            let startTimezone = events[fields.startTimezone] || events[fields.endTimezone];
            let endTimezone = events[fields.endTimezone] || events[fields.startTimezone];
            if (this.parent.timezone) {
                let zone = this.parent.timezone;
                events[fields.startTime] = this.timezone.convert(events[fields.startTime], startTimezone, zone);
                events[fields.endTime] = this.timezone.convert(events[fields.endTime], endTimezone, zone);
                events[fields.startTime] = this.timezone.remove(events[fields.startTime], zone);
                events[fields.endTime] = this.timezone.remove(events[fields.endTime], zone);
            }
            else {
                events[fields.startTime] = this.timezone.remove(events[fields.startTime], startTimezone);
                events[fields.endTime] = this.timezone.remove(events[fields.endTime], endTimezone);
            }
        }
        else if (this.parent.timezone) {
            events[fields.startTime] = this.timezone.remove(events[fields.startTime], this.parent.timezone);
            events[fields.endTime] = this.timezone.remove(events[fields.endTime], this.parent.timezone);
        }
    }
    excludeDateCheck(eventStartTime, exceptionDateList) {
        let exDate = getRecurrenceStringFromDate(eventStartTime);
        if (!isNullOrUndefined(exceptionDateList)) {
            if (exceptionDateList.indexOf(exDate) === -1) {
                exceptionDateList = !(isNullOrUndefined(exceptionDateList)) ? exceptionDateList + ',' + exDate : exDate;
            }
        }
        else {
            exceptionDateList = exDate;
        }
        return exceptionDateList;
    }
}

/**
 * Appointment window field validation
 */
class FieldValidator {
    constructor(parent) {
        this.parent = parent;
    }
    renderFormValidator(form, rules) {
        this.formObj = new FormValidator(form, {
            customPlacement: (inputElement, error) => {
                this.errorPlacement(inputElement, error);
            },
            rules: rules,
            validationComplete: (args) => {
                this.validationComplete(args);
            }
        });
    }
    validationComplete(args) {
        let elem = document.querySelector('#' + args.inputName + '_Error');
        if (elem) {
            if (args.status === 'failure') {
                elem.style.display = '';
            }
            else {
                elem.style.display = 'none';
            }
        }
    }
    errorPlacement(inputElement, error) {
        let id = error.getAttribute('for');
        let elem = document.querySelector('#' + id + '_Error');
        if (!elem) {
            this.createTooltip(inputElement, error, id, '');
        }
    }
    createTooltip(element, error, name, display) {
        let dlgContent;
        let client;
        let inputClient = element.getBoundingClientRect();
        let quickPopupElement = document.querySelector('.' + QUICK_POPUP_ROOT_CLASS);
        if (quickPopupElement) {
            dlgContent = quickPopupElement.querySelector('.' + QUICK_POPUP_CLASS);
            client = dlgContent.getBoundingClientRect();
        }
        else {
            dlgContent = document.querySelector('.e-schedule-dialog .e-dlg-content');
            client = dlgContent.getBoundingClientRect();
        }
        let div = createElement('div', {
            className: 'e-tooltip-wrap e-popup ' + ERROR_VALIDATION_CLASS,
            id: name + '_Error',
            styles: 'display:' + display + ';top:' +
                (inputClient.bottom - client.top + dlgContent.scrollTop + 9) + 'px;left:' +
                (inputClient.left - client.left + dlgContent.scrollLeft + inputClient.width / 2) + 'px;'
        });
        let content = createElement('div', { className: 'e-tip-content' });
        content.appendChild(error);
        let arrow = createElement('div', { className: 'e-arrow-tip e-tip-top' });
        arrow.appendChild(createElement('div', { className: 'e-arrow-tip-outer e-tip-top' }));
        arrow.appendChild(createElement('div', { className: 'e-arrow-tip-inner e-tip-top' }));
        div.appendChild(content);
        div.appendChild(arrow);
        dlgContent.appendChild(div);
        div.style.left = (parseInt(div.style.left, 10) - div.offsetWidth / 2) + 'px';
    }
    destroyToolTip() {
        let elements = [].slice.call(document.querySelectorAll('.' + ERROR_VALIDATION_CLASS));
        for (let elem of elements) {
            remove(elem);
        }
        this.formObj.reset();
    }
    /**
     * @hidden
     */
    destroyForm() {
        if (this.formObj && !this.formObj.isDestroyed) {
            this.formObj.destroy();
        }
    }
}

/**
 * Quick Popups interactions
 */
class QuickPopups {
    /**
     * Constructor for QuickPopups
     */
    constructor(parent) {
        this.isMultipleEventSelect = false;
        this.parent = parent;
        this.l10n = this.parent.localeObj;
        this.crudAction = new Crud(parent);
        this.fieldValidator = new FieldValidator(this.parent);
        this.render();
        this.addEventListener();
    }
    render() {
        this.renderQuickPopup();
        this.renderQuickDialog();
        this.renderMoreEventPopup();
        this.renderEventPopup();
    }
    renderQuickPopup() {
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
    renderQuickDialog() {
        this.quickDialog = new Dialog({
            animationSettings: { effect: 'Zoom' },
            buttons: [
                { buttonModel: { isPrimary: true }, click: this.dialogButtonClick.bind(this) },
                { buttonModel: { isPrimary: false }, click: this.dialogButtonClick.bind(this) }
            ],
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
        let dialogElement = createElement('div', { id: this.parent.element.id + 'QuickDialog' });
        this.parent.element.appendChild(dialogElement);
        this.quickDialog.appendTo(dialogElement);
    }
    renderMoreEventPopup() {
        let moreEventWrapper = createElement('div', { className: MORE_POPUP_WRAPPER_CLASS + ' e-popup-close' });
        this.parent.element.appendChild(moreEventWrapper);
        let moreEventHeader = '<div class="${classList[0]}"><div class="${classList[1]}">' +
            '<div class="${classList[2]}" tabindex="0"><div class="${classList[3]}"></div>' +
            '<div class="${classList[4]}" tabindex="0"></div></div>' +
            '<div class="${classList[5]}" title="${l10n.close}" tabindex="0"></div></div></div>';
        let moreEventArgs = {
            classList: [
                MORE_EVENT_POPUP_CLASS, MORE_EVENT_HEADER_CLASS, MORE_EVENT_DATE_HEADER_CLASS,
                MORE_EVENT_HEADER_DAY_CLASS, MORE_EVENT_HEADER_DATE_CLASS + ' ' + NAVIGATE_CLASS, MORE_EVENT_CLOSE_CLASS
            ],
            l10n: { close: this.l10n.getConstant('close'), noTitle: this.l10n.getConstant('noTitle') }
        };
        let moreEventContent = compile(moreEventHeader)(moreEventArgs)[0];
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
        let closeButton = new Button({ iconCss: 'e-icons e-close-icon', cssClass: 'e-round', isPrimary: false });
        closeButton.appendTo(moreEventContent.querySelector('.' + MORE_EVENT_CLOSE_CLASS));
        EventHandler.add(moreEventContent.querySelector('.' + MORE_EVENT_CLOSE_CLASS), 'click', this.closeClick, this);
        EventHandler.add(moreEventContent.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS), 'click', this.dayNavigationClick, this);
    }
    dayNavigationClick(e) {
        let navigateEle = closest(e.target, '.' + NAVIGATE_CLASS);
        if (!isNullOrUndefined(navigateEle)) {
            let date = this.parent.getDateFromElement(e.currentTarget);
            if (!isNullOrUndefined(date) && !this.parent.isAdaptive) {
                this.closeClick();
                this.parent.setProperties({ selectedDate: date }, true);
                this.parent.changeView('Day');
            }
        }
    }
    renderEventPopup() {
        const viewHeight = document.body.offsetHeight;
        let toolBarHeight = this.parent.element.querySelector('.' + TOOLBAR_CONTAINER);
        let eventWrapper = createElement('div', {
            className: SELECT_POPUP_WRAPPER_CLASS + ' e-popup-close'
        });
        this.parent.element.appendChild(eventWrapper);
        let eventTemplate = '<div id="${id}EventDetailsWindow" class="${classList[0]}">' +
            '<div class="${classList[1]}">' +
            '<div class="${classList[23]}"><div class="${classList[24]}">' +
            '<div class="${classList[2]} ${classList[5]}" title="${l10n.close}" tabindex="0"></div></div>' +
            '<div class="${classList[25]}"><div class="${classList[3]} ${classList[5]}" title="${l10n.editEvent}" tabindex="0"></div>' +
            '<div class="${classList[4]} ${classList[5]}" title="${l10n.delete}" tabindex="0"></div></div></div>' +
            '<div class="${classList[6]} ${classList[7]}"></div></div>' +
            '<div class="${classList[9]}">' +
            '<div class="${classList[11]}"><div class="${classList[10]} ${classList[5]}"></div>' +
            '<div class="${classList[8]} ${classList[7]}">' +
            '<div class="${classList[26]} ${classList[7]}"></div><div class="${classList[27]} ${classList[7]}"></div></div></div>' +
            '<div class="${classList[14]}"><div class="${classList[15]} ${classList[5]}"></div>' +
            '<div class="${classList[16]} ${classList[7]}"></div></div>' +
            '<div class="${classList[17]}"><div class="${classList[18]} ${classList[5]}"></div>' +
            '<div class="${classList[19]} ${classList[7]}"></div></div>' +
            '<div class="${classList[20]}"><div class="${classList[21]} ${classList[5]}"></div>' +
            '<div class="${classList[22]} ${classList[7]}"></div></div></div>';
        let eventSelectTemplate = '<div id="${id}EventDetailsWindow" class="${classList[0]} ${classList[13]}">' +
            '<div class="${classList[1]}"><tbody>' +
            '<div class="${classList[2]} ${classList[5]}" title="${l10n.close}" tabindex="0"></div>' +
            '<div class="${classList[12]}"></div>' +
            '<div class="${classList[3]} ${classList[5]}" title="${l10n.editEvent}" tabindex="0"></div>' +
            '<div class="${classList[4]} ${classList[5]}" title="${l10n.delete}" tabindex="0"></div></div>';
        let eventArgs = {
            classList: [
                QUICK_POPUP_CLASS, QUICK_POPUP_TABLE_CLASS, SELECTED_EVENT_CLOSE_CLASS,
                SELECTED_EVENT_EDIT_CLASS, SELECTED_EVENT_DELETE_CLASS, ICON,
                QUICK_POPUP_EVENT_TITLE_CLASS, QUICK_POPUP_TEXT_ALIGN_CLASS, QUICK_POPUP_DATE_TIME_DETAILS_CLASS,
                QUICK_POPUP_CONTENT_CLASS, SELECTED_DATE_TIME_CLASS, APPOINTMENT_TIME, SELECTED_EVENT_TITLE_CLASS,
                SELECTED_EVENT_CONTAINER_CLASS, APPOINTMENT_LOCATION, SELECTED_CALENDER_CLASS,
                QUICK_POPUP_LOCATION_DETAILS_CLASS, EVENT_WINDOW_TZ_CLASS, EVENT_TIME_ZONE_CLASS,
                EVENT_ZONE_DETAILS_CLASS, EVENT_DETAILS_CLASS, EVENT_NOTE_CLASS, EVENT_NOTE_DETAILS_CLASS,
                QUICK_POPUP_ICON_CLASS, QUICK_POPUP_CLOSE_ICON_CLASS, QUICK_POPUP_EDIT_ICON_CLASS,
                DEVICE_DATE_TIME_DETAILS_CLASS, DEVICE_RECURRENCE_SUMMARY_CLASS
            ],
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
        eventWrapper.querySelector('.' + QUICK_POPUP_TABLE_CLASS).style.height = formatUnit((viewHeight * 25) / 100);
        eventWrapper.querySelector('.' + QUICK_POPUP_CONTENT_CLASS).style.height = formatUnit((viewHeight * 75) / 100);
        EventHandler.add(this.selectedEventPopup.querySelector('.' + SELECTED_EVENT_CLOSE_CLASS), 'click', this.closeClick, this);
        EventHandler.add(this.selectedEventPopup.querySelector('.' + SELECTED_EVENT_EDIT_CLASS), 'click', this.editClick, this);
        EventHandler.add(this.selectedEventPopup.querySelector('.' + SELECTED_EVENT_DELETE_CLASS), 'click', this.deleteClick, this);
        EventHandler.add(this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_CLOSE_CLASS), 'click', this.closeClick, this);
        EventHandler.add(this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_EDIT_CLASS), 'click', this.editClick, this);
        EventHandler.add(this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_DELETE_CLASS), 'click', this.deleteClick, this);
    }
    openRecurrenceAlert() {
        let dialogFooter = this.quickDialog.element.querySelector('.' + DIALOG_FOOTER_CONTENT_CLASS).children;
        dialogFooter[0].innerHTML = (this.parent.currentAction === 'Delete') ? this.l10n.getConstant('deleteEvent') :
            this.l10n.getConstant('editEvent');
        dialogFooter[1].innerHTML = (this.parent.currentAction === 'Delete') ? this.l10n.getConstant('deleteSeries') :
            this.l10n.getConstant('editSeries');
        this.quickDialog.content = (this.parent.currentAction === 'Delete') ? this.l10n.getConstant('deleteRecurrenceContent') :
            this.l10n.getConstant('editContent');
        this.quickDialog.header = (this.parent.currentAction === 'Delete') ? this.l10n.getConstant('deleteEvent') :
            this.l10n.getConstant('editEvent');
        this.quickDialogClass('Recurrence');
        this.showQuickDialog('RecurrenceAlert');
    }
    openDeleteAlert() {
        let dialogFooter = this.quickDialog.element.querySelector('.' + DIALOG_FOOTER_CONTENT_CLASS).children;
        dialogFooter[0].innerHTML = this.l10n.getConstant('delete');
        dialogFooter[1].innerHTML = this.l10n.getConstant('cancel');
        this.quickDialog.content = this.l10n.getConstant('deleteContent');
        this.quickDialog.header = this.l10n.getConstant('deleteEvent');
        this.quickDialogClass('Delete');
        this.showQuickDialog('DeleteAlert');
    }
    openValidationError(type) {
        this.quickDialog.header = this.l10n.getConstant('alert');
        this.quickDialog.content = this.l10n.getConstant(type);
        let dialogFooter = this.quickDialog.element.querySelector('.' + DIALOG_FOOTER_CONTENT_CLASS).children;
        dialogFooter[0].innerHTML = this.l10n.getConstant('ok');
        dialogFooter[1].innerHTML = this.l10n.getConstant('cancel');
        this.quickDialogClass('Alert');
        this.showQuickDialog('ValidationAlert');
    }
    showQuickDialog(popupType) {
        this.quickDialog.dataBind();
        let eventProp = {
            type: popupType, cancel: false, data: this.parent.activeEventData,
            element: this.quickDialog.element
        };
        this.parent.trigger(popupOpen, eventProp);
        if (eventProp.cancel) {
            return;
        }
        this.quickDialog.show();
    }
    createMoreEventList(events) {
        let fields = this.parent.eventFields;
        let moreEventContentEle = createElement('div', { className: MORE_EVENT_CONTENT_CLASS });
        let moreEventWrapperEle = createElement('div', { className: MORE_EVENT_WRAPPER_CLASS });
        for (let event of events) {
            let appointmentEle = createElement('div', {
                id: '' + event[fields.id],
                className: APPOINTMENT_CLASS,
                attrs: {
                    'data-guid': event.Guid,
                    'role': 'button', 'tabindex': '0', 'aria-readonly': 'false', 'aria-selected': 'false', 'aria-grabbed': 'true',
                    'aria-label': isNullOrUndefined(event[fields.subject]) ?
                        this.parent.eventSettings.fields.subject.default : event[fields.subject]
                }
            });
            appointmentEle.appendChild(createElement('div', {
                className: APPOINTMENT_SUBJECT,
                innerHTML: event[fields.subject] || this.parent.eventSettings.fields.subject.default
            }));
            if (!isNullOrUndefined(event[fields.recurrenceRule])) {
                let iconClass = (event[fields.id] === event[fields.recurrenceID]) ?
                    EVENT_RECURRENCE_ICON_CLASS : EVENT_RECURRENCE_EDIT_ICON_CLASS;
                appointmentEle.appendChild(createElement('div', { className: ICON + ' ' + iconClass }));
            }
            this.parent.eventBase.wireAppointmentEvents(appointmentEle);
            moreEventWrapperEle.appendChild(appointmentEle);
        }
        moreEventContentEle.appendChild(moreEventWrapperEle);
        return moreEventContentEle;
    }
    eventHold(args) {
        let target = args.target;
        this.isMultipleEventSelect = false;
        if (!isNullOrUndefined(closest(target, '.' + APPOINTMENT_CLASS)) && this.parent.isAdaptive) {
            target = closest(target, '.' + APPOINTMENT_CLASS);
            this.parent.selectedElements = [];
            this.isMultipleEventSelect = true;
            this.selectedEventDialog(target);
            return;
        }
    }
    cellClick(args) {
        if (!this.parent.showQuickInfo || this.parent.currentView === 'MonthAgenda') {
            return;
        }
        let target = closest(args.event.target, '.' + WORK_CELLS_CLASS + ',.' +
            ALLDAY_CELLS_CLASS + ',.' + HEADER_CELLS_CLASS);
        if (isNullOrUndefined(target) || args.event.target.classList.contains(MORE_INDICATOR_CLASS)) {
            return;
        }
        let timeDetails = this.parent.activeCellsData.isAllDay ? this.l10n.getConstant('allDay') :
            this.getDateFormat(this.parent.activeCellsData.startTime, 'hm') + ' - ' +
                this.getDateFormat(this.parent.activeCellsData.endTime, 'hm');
        let temp = {};
        temp[this.parent.eventFields.startTime] = this.parent.activeCellsData.startTime;
        temp[this.parent.eventFields.endTime] = this.parent.activeCellsData.endTime;
        temp[this.parent.eventFields.isAllDay] = this.parent.activeCellsData.isAllDay;
        let cellDetails = this.getFormattedString(temp, 'cell');
        let cellTemplate = '<div id="${id}EventCreateWindow" class="${classList[0]}"><table class="${classList[1]}"><tbody>' +
            '<tr><td><form class="${classList[2]}" onsubmit="return false;">' +
            '<input class="${classList[3]}" type="text" name="Subject" /></form></td></tr>' +
            '<tr><td><div class="${classList[4]} ${classList[8]}">' + cellDetails.details + '</div></td></tr>' +
            '</tbody></table><div class="${classList[5]}">' +
            '<div class="${classList[6]} ${classList[8]}" title="${l10n.moreDetails}" tabindex="0">${l10n.moreDetails}</div>' +
            '<div class="${classList[7]} ${classList[8]}" title="${l10n.save}" tabindex="0">${l10n.save}</div></div></div>';
        let cellArgs = {
            classList: [
                QUICK_POPUP_CLASS, QUICK_POPUP_TABLE_CLASS, EVENT_WINDOW_FORM_CLASS, QUICK_POPUP_SUBJECT_CLASS,
                QUICK_POPUP_DATE_TIME_DETAILS_CLASS, QUICK_POPUP_FOOTER_CLASS, QUICK_POPUP_EVENT_DETAILS_CLASS,
                QUICK_POPUP_EVENT_CREATE_CLASS, QUICK_POPUP_TEXT_ALIGN_CLASS
            ],
            id: this.parent.element.id,
            l10n: {
                moreDetails: this.l10n.getConstant('moreDetails'),
                save: this.l10n.getConstant('save')
            }
        };
        let quickCellPopup = compile(cellTemplate)(cellArgs)[0];
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
        }
        else {
            quickCellPopup.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).focus();
        }
    }
    applyFormValidation() {
        let form = this.quickPopup.content
            .querySelector('.' + EVENT_WINDOW_FORM_CLASS);
        let rules = {};
        rules[this.parent.eventSettings.fields.subject.name] = this.parent.eventSettings.fields.subject.validation;
        this.fieldValidator.renderFormValidator(form, rules);
    }
    eventClick(events) {
        if (this.parent.eventTooltip) {
            this.parent.eventTooltip.close();
        }
        if (!this.parent.showQuickInfo) {
            return;
        }
        if (this.parent.isAdaptive) {
            if (this.isMultipleEventSelect) {
                this.selectedEventDialog(closest(events.element, '.' + APPOINTMENT_CLASS));
            }
            else {
                this.deviceEventClick(events);
            }
        }
        else {
            let eventData = events.event;
            let args = this.getFormattedString(eventData, 'event');
            let eventTemplate = '<div id="${id}EventDetailsWindow" class="${classList[0]}"><table class="${classList[1]}"><tbody>' +
                '<tr><td><div class="${classList[2]} ${classList[7]}">' + args.eventSubject + '</div></td></tr>' +
                '<tr><td><div class="${classList[3]} ${classList[7]}">' + args.details + '</div></td></tr>' +
                '</tbody></table><div class="${classList[4]}">' +
                '<div class="${classList[5]} ${classList[7]}" title="${l10n.delete}" tabindex="0">${l10n.delete}</div>' +
                '<div class="${classList[6]} ${classList[7]}" title="${l10n.edit}" tabindex="0">${l10n.edit}</div></div></div>';
            let eventArgs = {
                classList: [
                    QUICK_POPUP_CLASS, QUICK_POPUP_TABLE_CLASS, QUICK_POPUP_EVENT_TITLE_CLASS,
                    QUICK_POPUP_DATE_TIME_DETAILS_CLASS, QUICK_POPUP_FOOTER_CLASS, QUICK_POPUP_DELETE_EVENT_CLASS,
                    QUICK_POPUP_EDIT_EVENT_CLASS, QUICK_POPUP_TEXT_ALIGN_CLASS
                ],
                id: this.parent.element.id,
                l10n: {
                    delete: this.l10n.getConstant('delete'),
                    edit: this.l10n.getConstant('edit')
                }
            };
            let quickEventPopup = compile(eventTemplate)(eventArgs)[0];
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
            }
            else {
                this.quickPopup.content.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS).focus();
            }
        }
    }
    deviceEventClick(events) {
        let fields = this.parent.eventFields;
        let eventData = events.event;
        let eventSelectSubject = (isNullOrUndefined(eventData[fields.subject])) ?
            this.l10n.getConstant('noTitle') : eventData[fields.subject];
        let eventTimeDetails = (eventData[fields.isAllDay]) ? this.l10n.getConstant('allDay') :
            this.getDateFormat(eventData[fields.startTime], 'hm') + ' - ' +
                this.getDateFormat(eventData[fields.endTime], 'hm');
        let eventSelectDetails = this.getTimeDetails(eventData) + ' (' + eventTimeDetails + ')';
        this.selectedEventPopup.querySelector('.' + QUICK_POPUP_EVENT_TITLE_CLASS).innerHTML = eventSelectSubject;
        this.selectedEventPopup.querySelector('.' + DEVICE_DATE_TIME_DETAILS_CLASS).innerHTML = eventSelectDetails;
        this.selectedEventPopup.querySelector('.' + QUICK_POPUP_LOCATION_DETAILS_CLASS).innerHTML =
            (!isNullOrUndefined(eventData[fields.location])) ? eventData[fields.location] : '';
        this.selectedEventPopup.querySelector('.' + EVENT_ZONE_DETAILS_CLASS).innerHTML = this.getTimezone(eventData);
        this.selectedEventPopup.querySelector('.' + EVENT_NOTE_DETAILS_CLASS).innerHTML =
            (!isNullOrUndefined(eventData[fields.description])) ? eventData[fields.description] : '';
        if (!isNullOrUndefined(eventData[fields.recurrenceRule])) {
            let recurrenceEditor = this.parent.eventWindow.getRecurrenceEditorInstance();
            let ruleSummary = recurrenceEditor.getRuleSummary(eventData[fields.recurrenceRule]);
            this.selectedEventPopup.querySelector('.' + DEVICE_RECURRENCE_SUMMARY_CLASS).innerHTML =
                ruleSummary.charAt(0).toUpperCase() + ruleSummary.slice(1);
        }
        else {
            this.selectedEventPopup.querySelector('.' + DEVICE_RECURRENCE_SUMMARY_CLASS).innerHTML = '';
        }
        if (isNullOrUndefined(eventData[fields.location]) || eventData[fields.location] === '') {
            addClass([this.selectedEventPopup.querySelector('.' + APPOINTMENT_LOCATION)], DISABLE_CLASS);
        }
        else {
            removeClass([this.selectedEventPopup.querySelector('.' + APPOINTMENT_LOCATION)], DISABLE_CLASS);
        }
        if (isNullOrUndefined(eventData[fields.startTimezone]) && isNullOrUndefined(eventData[fields.endTimezone])) {
            addClass([this.selectedEventPopup.querySelector('.' + EVENT_WINDOW_TZ_CLASS)], DISABLE_CLASS);
        }
        else {
            removeClass([this.selectedEventPopup.querySelector('.' + EVENT_WINDOW_TZ_CLASS)], DISABLE_CLASS);
        }
        if (isNullOrUndefined(eventData[fields.description]) || eventData[fields.description] === '') {
            addClass([this.selectedEventPopup.querySelector('.' + EVENT_DETAILS_CLASS)], DISABLE_CLASS);
        }
        else {
            removeClass([this.selectedEventPopup.querySelector('.' + EVENT_DETAILS_CLASS)], DISABLE_CLASS);
        }
        this.eventPopup.content = this.selectedEventPopup;
        if (this.eventPopup && !closest(events.element, '.' + MORE_EVENT_WRAPPER_CLASS)) {
            this.showEventPopup('ViewEventInfo');
        }
    }
    showEventPopup(popupType) {
        let eventProp = {
            type: popupType, cancel: false, data: this.parent.activeEventData.event,
            target: this.parent.activeEventData.element, element: this.eventPopup.element
        };
        this.parent.trigger(popupOpen, eventProp);
        if (eventProp.cancel) {
            return;
        }
        this.eventPopup.show();
    }
    getFormattedString(eventData, type) {
        let fields = this.parent.eventFields;
        let eventSubject = isNullOrUndefined(eventData[fields.subject]) ? this.l10n.getConstant('noTitle') :
            eventData[fields.subject];
        let startDate = eventData[fields.startTime];
        let endDate = eventData[fields.endTime];
        let startDateDetails = this.getDateFormat(startDate, 'long');
        let endDateDetails = (eventData[fields.isAllDay] && endDate.getHours() === 0 && endDate.getMinutes() === 0) ?
            this.getDateFormat(addDays(new Date(endDate.getTime()), -1), 'long') : this.getDateFormat(endDate, 'long');
        let startTimeDetail = this.getDateFormat(startDate, 'hm');
        let endTimeDetail = this.getDateFormat(endDate, 'hm');
        let details;
        let allDayLength = (endDate.getTime() - startDate.getTime()) / MS_PER_DAY;
        let spanLength = endDate.getDate() !== startDate.getDate() &&
            (endDate.getTime() - startDate.getTime()) / (60 * 60 * 1000) < 24 ? 1 : 0;
        if (eventData[fields.isAllDay] || allDayLength >= 1 || spanLength > 0) {
            details = startDateDetails + ' (' +
                (eventData[fields.isAllDay] ? this.l10n.getConstant('allDay') : startTimeDetail) + ')';
            if (allDayLength > 1 || spanLength > 0) {
                details += '&nbsp;-&nbsp;' + endDateDetails + ' (' +
                    (eventData[fields.isAllDay] ? this.l10n.getConstant('allDay') : endTimeDetail) + ')';
            }
        }
        else {
            details = startDateDetails + ' (' + (startTimeDetail + '&nbsp;-&nbsp;' + endTimeDetail) + ')';
        }
        return { eventSubject: eventSubject, details: details };
    }
    moreEventClick(data) {
        if (!this.parent.showQuickInfo) {
            return;
        }
        if (this.morePopup.element.querySelector('.' + MORE_EVENT_CONTENT_CLASS)) {
            this.morePopup.element.querySelector('.' + MORE_EVENT_CONTENT_CLASS).remove();
        }
        this.morePopup.element.children[0].appendChild(this.createMoreEventList(data.event));
        let selectedDate = ((data.date).getTime()).toString();
        let target = closest(data.element, '.' + MORE_INDICATOR_CLASS);
        this.morePopup.element.querySelector('.' + MORE_EVENT_HEADER_DAY_CLASS).innerHTML = this.getDateFormat(data.date, 'E');
        this.morePopup.element.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).innerHTML = this.getDateFormat(data.date, 'd');
        this.morePopup.element.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).setAttribute('data-date', selectedDate);
        this.morePopup.relateTo = closest(target, '.' + WORK_CELLS_CLASS);
        let eventProp = { type: 'EventContainer', data: data, cancel: false, element: this.morePopup.element };
        this.parent.trigger(popupOpen, eventProp);
        if (eventProp.cancel) {
            return;
        }
        this.morePopup.show();
    }
    saveClick() {
        if (!this.quickPopup.content.querySelector('.' + EVENT_WINDOW_FORM_CLASS)
            .ej2_instances[0].validate()) {
            return;
        }
        this.quickPopup.close();
        let fields = this.parent.eventFields;
        let saveObj = {};
        saveObj[fields.id] = this.parent.eventBase.getEventMaxId() + 1;
        saveObj[fields.subject] =
            this.quickPopup.content.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).value ||
                this.parent.eventSettings.fields.subject.default;
        saveObj[fields.startTime] = this.parent.activeCellsData.startTime;
        saveObj[fields.endTime] = this.parent.activeCellsData.endTime;
        saveObj[fields.isAllDay] = this.parent.activeCellsData.isAllDay;
        this.crudAction.addEvent(saveObj);
    }
    detailsClick() {
        let subject = this.quickPopup.content.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).value;
        if (subject !== '') {
            let args = extend(this.parent.activeCellsData, { subject: subject });
        }
        this.fieldValidator.destroyToolTip();
        this.quickPopup.close();
        this.parent.eventWindow.openEditor(this.parent.activeCellsData, 'Add');
    }
    editClick(event) {
        this.quickPopup.close({ effect: 'None' });
        this.morePopup.hide();
        let data = this.parent.activeEventData.event;
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
        }
        else {
            this.parent.eventWindow.openEditor(data, this.parent.currentAction);
        }
    }
    deleteClick() {
        this.quickPopup.close({ effect: 'None' });
        this.morePopup.hide();
        if (this.parent.isAdaptive) {
            this.eventPopup.hide();
            this.isMultipleEventSelect = false;
        }
        this.parent.currentAction = 'Delete';
        if (this.parent.activeEventData.event[this.parent.eventFields.recurrenceRule]) {
            this.openRecurrenceAlert();
        }
        else {
            this.openDeleteAlert();
        }
    }
    closeClick() {
        this.morePopup.hide();
        this.eventPopup.hide();
        this.isMultipleEventSelect = false;
    }
    dialogButtonClick(event) {
        this.quickDialog.hide();
        if (event.target.classList.contains(QUICK_DIALOG_EDIT_EVENT_CLASS)) {
            this.parent.currentAction = (this.parent.currentAction === 'Delete') ? 'DeleteOccurrence' : 'EditOccurrence';
            switch (this.parent.currentAction) {
                case 'EditOccurrence':
                    this.parent.eventWindow.openEditor(this.parent.activeEventData.event, this.parent.currentAction);
                    break;
                case 'DeleteOccurrence':
                    this.crudAction.deleteEvent(this.parent.activeEventData.event, this.parent.currentAction);
                    break;
            }
        }
        else if (event.target.classList.contains(QUICK_DIALOG_EDIT_SERIES_CLASS)) {
            this.parent.currentAction = (this.parent.currentAction === 'Delete') ? 'DeleteSeries' : 'EditSeries';
            switch (this.parent.currentAction) {
                case 'EditSeries':
                    let parentEvent = this.parent.eventBase.getRecurrenceEvent(this.parent.activeEventData.event);
                    this.parent.eventWindow.openEditor(parentEvent, this.parent.currentAction);
                    break;
                case 'DeleteSeries':
                    this.crudAction.deleteEvent(this.parent.activeEventData.event, this.parent.currentAction);
                    break;
            }
        }
        else if (event.target.classList.contains(QUICK_DIALOG_DELETE_CLASS)) {
            this.crudAction.deleteEvent(this.parent.activeEventData.event, this.parent.currentAction);
        }
    }
    selectedEventDialog(target) {
        let selectedElements = this.parent.eventBase.getSelectedEventElements(target);
        this.parent.activeEventData = this.parent.eventBase.getSelectedEvents();
        if (selectedElements.length === 1) {
            this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_TITLE_CLASS).innerHTML =
                selectedElements[0].querySelector('.' + APPOINTMENT_SUBJECT).textContent;
            removeClass([this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_EDIT_CLASS)], EVENT_EDIT_DISABLE_CLASS);
            this.eventPopup.content = this.multipleEventPopup;
            if (this.eventPopup && !closest(target, '.' + MORE_EVENT_WRAPPER_CLASS)) {
                this.showEventPopup('EditEventInfo');
            }
        }
        else if (selectedElements.length <= 0) {
            this.parent.selectedElements = [];
            this.isMultipleEventSelect = false;
            this.eventPopup.hide();
        }
        else if (selectedElements.length > 1) {
            this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_TITLE_CLASS).innerHTML =
                '(' + selectedElements.length.toString() + ')' + '&nbsp;' + this.l10n.getConstant('selectedItems');
            addClass([this.multipleEventPopup.querySelector('.' + SELECTED_EVENT_EDIT_CLASS)], EVENT_EDIT_DISABLE_CLASS);
        }
    }
    getTimezone(event) {
        let fields = this.parent.eventFields;
        let zoneDetails = '';
        timezoneData.filter((zoneData) => {
            if (!isNullOrUndefined(event[fields.startTimezone]) && zoneData.Value === event[fields.startTimezone]) {
                zoneDetails = zoneData.Text.split(') ')[0] + ')' + zoneDetails;
            }
            if (!isNullOrUndefined(event[fields.endTimezone]) && zoneData.Value === event[fields.endTimezone]) {
                zoneDetails = zoneDetails + '&nbsp;' + zoneData.Text.split(') ')[0] + ')';
            }
        });
        return zoneDetails;
    }
    getTimeDetails(event) {
        let fields = this.parent.eventFields;
        let startDate = event[fields.startTime];
        let endDate = event[fields.endTime];
        let allDayLength = (endDate.getTime() - startDate.getTime()) / MS_PER_DAY;
        let timeDetails = '';
        if (this.getDateFormat(startDate, 'yMd') === this.getDateFormat(endDate, 'yMd') || (event[fields.isAllDay] && allDayLength === 1)) {
            timeDetails = this.parent.globalize.formatDate(startDate, { format: 'MMMM d, yyyy' });
        }
        else {
            timeDetails = this.parent.globalize.formatDate(startDate, { format: 'MMM dd' }) + ' - ' +
                this.parent.globalize.formatDate(endDate, { format: 'MMM dd, yyyy' });
        }
        return timeDetails;
    }
    getDateFormat(date, formatString) {
        return this.parent.globalize.formatDate(date, { skeleton: formatString });
    }
    afterQuickPopupOpen(args) {
        if (this.quickPopup.content.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS)) {
            this.quickPopup.content.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS).focus();
        }
        if (this.quickPopup.content.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS)) {
            this.quickPopup.content.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS).focus();
        }
    }
    beforeQuickPopupOpen(args) {
        args.element.querySelector('.' + TOOLTIP_CLOSE_CLASS).setAttribute('title', this.l10n.getConstant('close'));
        EventHandler.add(args.element, 'keydown', this.keyPress, this);
        let eventProp = {
            type: 'QuickInfo', cancel: false, data: this.getDataFromTarget(args.target),
            target: args.target, element: args.element
        };
        this.parent.trigger(popupOpen, eventProp);
        if (eventProp.cancel) {
            args.cancel = true;
        }
    }
    getDataFromTarget(target) {
        if (target.classList.contains(APPOINTMENT_CLASS)) {
            return this.parent.activeEventData.event;
        }
        return this.parent.activeCellsData;
    }
    beforeQuickPopupClose(args) {
        EventHandler.remove(args.element, 'keydown', this.keyPress);
    }
    beforeQuickDialogClose(args) {
        this.parent.eventBase.focusElement();
    }
    keyPress(event) {
        let popupElement = this.quickPopup.content;
        if (event.keyCode === 9) {
            if (event.target === popupElement.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS) && !event.shiftKey) {
                event.preventDefault();
                (popupElement.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS)).focus();
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
            }
            else if (event.target === popupElement.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS) ||
                event.target === popupElement.querySelector('.' + QUICK_POPUP_EDIT_EVENT_CLASS) ||
                event.target === popupElement.querySelector('.' + QUICK_POPUP_DELETE_EVENT_CLASS)) {
                event.target.click();
            }
            else if (event.target === popupElement.querySelector('.' + QUICK_POPUP_SUBJECT_CLASS)) {
                popupElement.querySelector('.' + QUICK_POPUP_EVENT_CREATE_CLASS).click();
                event.preventDefault();
            }
        }
        if (event.keyCode === 27) {
            this.parent.quickPopup.onClosePopup();
        }
    }
    afterMorePopupOpen(event) {
        let moreEventWrapper = this.parent.element.querySelector('.' + MORE_POPUP_WRAPPER_CLASS);
        moreEventWrapper.querySelector('.' + MORE_EVENT_HEADER_DATE_CLASS).focus();
        this.morePopup.refreshPosition();
    }
    afterMorePopupClose(event) {
        //this.parent.eventBase.focusElement();
        if (!isNullOrUndefined(this.parent.element.querySelector('.' + MORE_EVENT_WRAPPER_CLASS))) {
            (this.parent.element.querySelector('.' + MORE_EVENT_WRAPPER_CLASS)).remove();
        }
    }
    afterQuickPopupClose(args) {
        this.parent.eventBase.focusElement();
    }
    quickDialogClass(action) {
        let buttonElement = this.quickDialog.element.querySelector('.' + DIALOG_FOOTER_CONTENT_CLASS).children;
        let classList = [
            QUICK_DIALOG_EDIT_EVENT_CLASS, QUICK_DIALOG_EDIT_SERIES_CLASS,
            QUICK_DIALOG_DELETE_CLASS, QUICK_DIALOG_CANCEL_CLASS, QUICK_DIALOG_ALERT_BTN_CLASS, QUICK_DIALOG_HIDE_BTN_CLASS
        ];
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
    documentClick(e) {
        let target = e.event.target;
        if (!closest(target, '.' + QUICK_POPUP_ROOT_CLASS) && target.getAttribute('data-tooltip-id') === null) {
            this.quickPopup.close();
        }
        if (!closest(target, '.' + MORE_POPUP_WRAPPER_CLASS) && !target.classList.contains(MORE_INDICATOR_CLASS)) {
            this.morePopup.hide();
        }
    }
    onClosePopup() {
        this.quickPopup.close();
        this.eventPopup.hide();
        this.isMultipleEventSelect = false;
        this.parent.eventBase.focusElement();
    }
    addEventListener() {
        this.parent.on(cellClick, this.cellClick, this);
        this.parent.on(eventClick, this.eventClick, this);
        this.parent.on(documentClick, this.documentClick, this);
    }
    destroy() {
        this.quickPopup.destroy();
        this.morePopup.destroy();
        this.eventPopup.destroy();
        this.quickDialog.destroy();
        remove(this.quickDialog.element);
        this.quickDialog.element = null;
        this.fieldValidator.destroyForm();
    }
}

/**
 * Tooltip on appointments in Schedule
 */
class EventTooltip {
    constructor(parent) {
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
    onBeforeRender(args) {
        if (!isNullOrUndefined(args.target.getAttribute('data-tooltip-id'))) {
            return;
        }
        let record = this.parent.eventBase.getEventByGuid(args.target.getAttribute('data-guid'));
        let content = '';
        if (!isNullOrUndefined(this.parent.eventSettings.tooltipTemplate)) {
            content = this.parent.getEventTooltipTemplate()(record)[0];
        }
        else {
            let globalize = this.parent.globalize;
            let fields = this.parent.eventFields;
            let eventStart = new Date('' + record[fields.startTime]);
            let eventEnd = new Date('' + record[fields.endTime]);
            eventEnd = (eventEnd.getHours() === 0 && eventEnd.getMinutes() === 0) ? new Date(eventEnd.setMilliseconds(-1000)) : eventEnd;
            let startDate = resetTime(new Date('' + eventStart));
            let endDate = resetTime(new Date('' + eventEnd));
            let tooltipSubject = isNullOrUndefined(record[fields.subject]) ? this.parent.eventSettings.fields.subject.default :
                record[fields.subject];
            let tooltipLocation = !isNullOrUndefined(record[fields.location]) ? record[fields.location] : '';
            let startMonthDate = globalize.formatDate(eventStart, { type: 'date', skeleton: 'MMMd' });
            let endMonthDate = globalize.formatDate(eventEnd, { type: 'date', skeleton: 'MMMd' });
            let startMonthYearDate = globalize.formatDate(eventStart, { type: 'date', skeleton: 'yMMMd' });
            let endMonthYearDate = globalize.formatDate(eventEnd, { type: 'date', skeleton: 'yMMMd' });
            let startTime = globalize.formatDate(eventStart, { type: 'time', skeleton: 'short' });
            let endTime = globalize.formatDate(eventEnd, { type: 'time', skeleton: 'short' });
            let tooltipDetails;
            if (startDate.getTime() === endDate.getTime()) {
                tooltipDetails = globalize.formatDate(eventStart, { type: 'date', skeleton: 'long' });
            }
            else {
                tooltipDetails = (startDate.getFullYear() === endDate.getFullYear()) ? (startMonthDate + ' - ' + endMonthYearDate) :
                    (startMonthYearDate + ' - ' + endMonthYearDate);
            }
            let tooltipTime = (record[fields.isAllDay]) ? this.l10n.getConstant('allDay') : (startTime + ' - ' + endTime);
            content = '<div class="e-subject">' + tooltipSubject + '</div>' +
                '<div class="e-location">' + tooltipLocation + '</div>' +
                '<div class="e-details">' + tooltipDetails + '</div>' +
                '<div class="e-all-day">' + tooltipTime + '</div>';
        }
        this.tooltipObj.content = content;
    }
    close() {
        this.tooltipObj.close();
    }
    /**
     * To destroy the event tooltip.
     * @return {void}
     * @private
     */
    destroy() {
        this.tooltipObj.destroy();
        this.tooltipObj = null;
    }
}

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const HEADER = 'e-editor';
const INPUTWARAPPER = 'e-input-wrapper';
const INPUTWARAPPERSIDE = 'e-input-wrapper-side';
const REPEATELEMENT = 'e-repeat-element';
const REPEATINTERVAL = 'e-repeat-interval';
const INTERVALCLASS = 'e-interval';
const DAYWRAPPER = 'e-days';
const WEEKWRAPPER = 'e-non-week';
const WEEKPOSITION = 'e-week-position';
const YEAREXPANDERWRAPPER = 'e-year-expander';
const YEAREXPANDERELEMENT = 'e-year-expander-element';
const MONETHEXPANDERWRAPPER = 'e-month-expander';
const MONTHEXPANDERELEMENT = 'e-month-expander-element';
const MONTHEXPANDERCHECKBOXWRAPPER = 'e-month-expander-checkbox-wrapper';
const FORMLEFT = 'e-form-left';
const FORMRIGHT = 'e-form-right';
const MONTHDAYWRAPPER = 'e-month-day';
const MONTHEXPANNDERELEM = 'e-month-expander-wrapper';
const MONTHPOS = 'e-month-pos';
const MONTHWEEK = 'e-month-week';
const ENDON = 'e-end-on';
const MONTHEXPANDERLABEL = 'e-month-expander-label';
const WEEKEXPANDERLABEL = 'e-week-expander-label';
const ENDONLABEL = 'e-end-on-label';
const ENDONLEFT = 'e-end-on-left';
const MONTHDAYELEMENT = 'e-monthday-element';
const ENDONELEMENT = 'e-end-on-element';
const ENDONDATE = 'e-end-on-date';
const UNTILDATE = 'e-until-date';
const ENDONCOUNTWRAPPER = 'e-end-on-count';
const ENDONCOUNT = 'e-recurrence-count';
const HIDEWRAPPER = 'e-hide-recurrence-element';
const RTLCLASS = 'e-rtl';
const PRIMARY = 'e-primary';
const ACTIVE = 'e-active';
const RECURRENCETABLE = 'e-recurrence-table';
const REPEATCONTENT = 'e-repeat-content';
const NONE = 'none';
const DAILY = 'daily';
const WEEKLY = 'weekly';
const MONTHLY = 'monthly';
const YEARLY = 'yearly';
const NEVER = 'never';
const UNTIL$1 = 'until';
const COUNT = 'count';
const TEXTFIELD = 'text';
const VALUEFIELD = 'value';
const LAST = 'last';
const REPEAT$1 = 'repeat';
const REPEATEVERY = 'repeatEvery';
const ON$1 = 'on';
const END = 'end';
const RADIOLABEL = 'onDay';
const RULEUNTIL = 'UNTIL';
const RULEBYDAY = 'BYDAY';
const RULEBYMONTHDAY = 'BYMONTHDAY';
const RULEBYMONTH = 'BYMONTH';
const RULEINTERVAL = 'INTERVAL';
const RULECOUNT = 'COUNT';
const RULESETPOS = 'BYSETPOS';
const RULEFREQ = 'FREQ';
const RULEDAILY = 'DAILY';
const RULEWEEKLY = 'WEEKLY';
const RULEMONTHLY = 'MONTHLY';
const RULEYEARLY = 'YEARLY';
const RULESUNDAY = 'SU';
const RULEMONDAY = 'MO';
const RULETUESDAY = 'TU';
const RULEWEDNESDAY = 'WE';
const RULETHURSDAY = 'TH';
const RULEFRIDAY = 'FR';
const RULESATURDAY = 'SA';
const KEYSUNDAY = 'sun';
const KEYMONDAY = 'mon';
const KEYTUESDAY = 'tue';
const KEYWEDNESDAY = 'wed';
const KEYTHURSDAY = 'thu';
const KEYFRIDAY = 'fri';
const KEYSATURDAY = 'sat';
const EQUAL = '=';
const SEMICOLON = ';';
const COMMA = ',';
const FIRST = 'first';
const SECOND = 'second';
const THIRD = 'third';
const FOURTH = 'fourth';
let contentType = {
    none: '',
    daily: 'days',
    weekly: 'weeks',
    monthly: 'months',
    yearly: 'years'
};
let valueData = {
    'sun': RULESUNDAY,
    'mon': RULEMONDAY,
    'tue': RULETUESDAY,
    'wed': RULEWEDNESDAY,
    'thu': RULETHURSDAY,
    'fri': RULEFRIDAY,
    'sat': RULESATURDAY
};
let neverClassList = [DAYWRAPPER, WEEKWRAPPER, ENDON, INTERVALCLASS, YEAREXPANDERWRAPPER, MONETHEXPANDERWRAPPER];
let weekClassList = [WEEKWRAPPER];
let monthClassList = [DAYWRAPPER, YEAREXPANDERWRAPPER];
let yearClassList = [DAYWRAPPER];
let dailyClassList = [DAYWRAPPER, WEEKWRAPPER, YEAREXPANDERWRAPPER, MONETHEXPANDERWRAPPER];
let noEndClassList = [ENDONDATE, ENDONCOUNTWRAPPER];
let endOnCountClassList = [ENDONDATE];
let endOnDateClassList = [ENDONCOUNTWRAPPER];
/**
 * Represents the RecurrenceEditor component.
 * ```html
 * <div id="recurrence"></div>
 * ```
 * ```typescript
 * <script>
 *   var recObj = new RecurrenceEditor();
 *   recObj.appendTo("#recurrence");
 * </script>
 * ```
 */
let RecurrenceEditor = class RecurrenceEditor extends Component {
    /**
     * Constructor for creating the widget
     * @param  {object} options?
     */
    constructor(options, element) {
        super(options, element);
        this.defaultLocale = {
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
            summaryYear: 'year(s)',
        };
        this.renderStatus = false;
        this.destroyStatus = false;
        this.dayButtons = [];
        this.monthButtons = [];
    }
    startState(freq, endOn, startDate) {
        this.showFormElement();
        this.updateForm(freq);
        this.freshOnEndForm();
        this.updateEndOnForm(endOn);
        this.selectMonthDay(startDate);
        this.updateUntilDate(startDate);
        this.onMonthDay.setProperties({ checked: true });
    }
    preRender() {
        this.localeObj = new L10n(this.getModuleName(), this.defaultLocale, this.locale);
        // pre render code snippets
    }
    applyCustomClass(cssClass) {
        if (cssClass) {
            this.element.classList.add(cssClass);
        }
    }
    initialize() {
        this.destroyStatus = false;
        this.renderComponent();
        this.startState(this.repeatType.value.toString().toUpperCase(), NEVER, this.startDate);
        this.updateForm(this.repeatType.value.toString());
        this.applyCustomClass(this.cssClass);
    }
    triggerChangeEvent() {
        if (this.renderStatus) {
            let value = this.getRecurrenceRule();
            this.trigger('change', { value: value });
            this.setProperties({ value: value }, false);
        }
    }
    resetDayButton() {
        let elements = this.element.querySelectorAll('.' +
            DAYWRAPPER + ' button');
        for (let index = 0; index < elements.length; index++) {
            elements[index].classList.remove(ACTIVE);
            elements[index].classList.remove(PRIMARY);
        }
    }
    daySelection(dayIndex) {
        this.resetDayButton();
        let days = [0, 1, 2, 3, 4, 5, 6];
        this.rotateArray(days, this.firstDayOfWeek);
        let element = this.element.querySelector('.' +
            DAYWRAPPER + ' button[data-index="' + days.indexOf(dayIndex) + '"]');
        if (element) {
            element.classList.add(ACTIVE);
            element.classList.add(PRIMARY);
        }
    }
    rtlClass(status) {
        if (status) {
            this.element.classList.add(RTLCLASS);
        }
        else {
            this.element.classList.remove(RTLCLASS);
        }
    }
    updateUntilDate(date) {
        let tempDate = new Date(date.getTime());
        tempDate.setDate(tempDate.getDate() + 60);
        this.untilDateObj.setProperties({ value: tempDate });
    }
    selectMonthDay(date) {
        let weekday = [KEYSUNDAY, KEYMONDAY, KEYTUESDAY, KEYWEDNESDAY, KEYTHURSDAY, KEYFRIDAY, KEYSATURDAY];
        this.monthDate.setProperties({ value: date.getDate() });
        this.monthWeekDays.setProperties({ value: valueData[weekday[date.getDay()]] });
        this.monthValue.setProperties({ value: '' + (date.getMonth() + 1) });
        this.monthWeekPos.setProperties({ value: this.getDayPosition(date) });
        this.daySelection(date.getDay());
    }
    updateForm(state) {
        let btn;
        this.repeatType.setProperties({ value: state });
        switch (state) {
            case NONE:
                for (let index = 0; index < neverClassList.length; index++) {
                    btn = this.element.querySelector('.' + neverClassList[index]);
                    btn.classList.add(HIDEWRAPPER);
                }
                break;
            case WEEKLY:
                for (let index = 0; index < weekClassList.length; index++) {
                    btn = this.element.querySelector('.' + weekClassList[index]);
                    btn.classList.add(HIDEWRAPPER);
                }
                break;
            case MONTHLY:
                for (let index = 0; index < monthClassList.length; index++) {
                    btn = this.element.querySelector('.' + monthClassList[index]);
                    btn.classList.add(HIDEWRAPPER);
                }
                break;
            case YEARLY:
                for (let index = 0; index < yearClassList.length; index++) {
                    btn = this.element.querySelector('.' + yearClassList[index]);
                    btn.classList.add(HIDEWRAPPER);
                }
                break;
            case DAILY:
                for (let index = 0; index < dailyClassList.length; index++) {
                    btn = this.element.querySelector('.' + dailyClassList[index]);
                    btn.classList.add(HIDEWRAPPER);
                }
                break;
        }
    }
    updateEndOnForm(state) {
        let element;
        this.endType.setProperties({ value: state });
        switch (state) {
            case NEVER:
                for (let index = 0; index < noEndClassList.length; index++) {
                    element = this.element.querySelector('.' + noEndClassList[index]);
                    element.classList.add(HIDEWRAPPER);
                }
                break;
            case UNTIL$1:
                for (let index = 0; index < endOnDateClassList.length; index++) {
                    element = this.element.querySelector('.' + endOnDateClassList[index]);
                    element.classList.add(HIDEWRAPPER);
                }
                break;
            case COUNT:
                for (let index = 0; index < endOnCountClassList.length; index++) {
                    element = this.element.querySelector('.' + endOnCountClassList[index]);
                    element.classList.add(HIDEWRAPPER);
                }
                break;
        }
    }
    freshOnEndForm() {
        let btn;
        for (let index = 0; index < noEndClassList.length; index++) {
            btn = this.element.querySelector('.' + noEndClassList[index]);
            if (btn) {
                btn.classList.remove(HIDEWRAPPER);
            }
        }
    }
    showFormElement() {
        let btn;
        let elements = this.element.querySelectorAll('.' + HIDEWRAPPER);
        for (let index = 0; index < neverClassList.length; index++) {
            btn = this.element.querySelector('.' + neverClassList[index]);
            btn.classList.remove(HIDEWRAPPER);
        }
    }
    renderDropdowns() {
        let self = this;
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
            change: (args) => {
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
            change: (args) => {
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
            change: (args) => {
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
    setDefaultValue() {
        let formelement = [].slice.call(this.element.querySelectorAll('.e-control .e-numerictextbox'));
        for (let index = 0, len = formelement.length; index < len; index++) {
            let element = formelement[index];
            let instance = element.ej2_instances[0];
            if (instance.element.classList.contains(REPEATINTERVAL)) {
                instance.value = 1;
                instance.dataBind();
            }
            else if (instance.element.classList.contains(ENDONCOUNT)) {
                instance.value = 10;
                instance.dataBind();
            }
        }
    }
    resetFormValues() {
        let recurreneElement = [].slice.call(this.element.querySelectorAll('.e-control [type="text"]'));
        for (let index = 0, len = recurreneElement.length; index < len; index++) {
            let element = recurreneElement[index];
            if (element.classList.contains('e-datepicker')) {
                let instance = element.ej2_instances[0];
                if (instance.value) {
                    instance.value = instance.value;
                    instance.dataBind();
                }
                else {
                    this.updateUntilDate(this.startDate);
                }
            }
            else if (element.classList.contains('e-dropdownlist')) {
                let instance = element.ej2_instances[0];
                instance.index = instance.index || 0;
                instance.dataBind();
            }
            else if (element.classList.contains('e-numerictextbox')) {
                let instance = element.ej2_instances[0];
                let value;
                if (instance.element.classList.contains(REPEATINTERVAL)) {
                    value = 1;
                }
                else if (instance.element.classList.contains(ENDONCOUNT)) {
                    value = 10;
                }
                else {
                    value = this.startDate.getDate();
                }
                instance.value = instance.value || value;
                instance.dataBind();
            }
        }
    }
    getPopupWidth() {
        return Browser.isDevice ? '100%' : 'auto';
    }
    monthDayRendering() {
        let self = this;
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
            change: (args) => {
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
            change: (args) => {
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
    renderDatePickers() {
        let self = this;
        this.untilDateObj = new DatePicker({
            enableRtl: this.enableRtl,
            min: this.minDate,
            max: this.maxDate,
            change: (args) => {
                if (args.value) {
                    self.triggerChangeEvent();
                }
            }
        });
        this.untilDateObj.appendTo(this.element.querySelector('.' + UNTILDATE));
    }
    dayButtonRender() {
        let btns = this.element.querySelectorAll('.' +
            DAYWRAPPER + ' button');
        let btn;
        let self = this;
        for (let index = 0; index < btns.length; index++) {
            btn = btns[index];
            let button = new Button({
                isToggle: true,
                enableRtl: this.enableRtl
            });
            button.appendTo(btn);
            this.dayButtons.push(button);
            EventHandler.add(btn, 'click', (args) => {
                let btns = this.element.querySelectorAll('.' +
                    DAYWRAPPER + ' button.' + PRIMARY);
                let element = args.target;
                if (!element.classList.contains(PRIMARY)) {
                    element.classList.add(PRIMARY);
                    self.triggerChangeEvent();
                }
                else if (btns.length > 1) {
                    element.classList.remove(PRIMARY);
                    self.triggerChangeEvent();
                }
            });
        }
    }
    radioButtonRender() {
        let self = this;
        this.onMonthDay = new RadioButton({
            label: this.localeObj.getConstant(RADIOLABEL),
            enableRtl: this.enableRtl,
            name: 'monthType',
            value: 'day',
            change: (args) => {
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
            change: (args) => {
                self.resetFormValues();
                self.triggerChangeEvent();
            }
        });
        this.onWeekDay.appendTo(this.element.querySelector('.' + MONTHEXPANNDERELEM));
        this.monthButtons.push(this.onWeekDay);
    }
    numericTextboxRender() {
        let self = this;
        this.recurrenceCount = new NumericTextBox({
            value: 10,
            format: '#',
            enableRtl: this.enableRtl,
            floatLabelType: 'Always',
            min: 1,
            change: (args) => {
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
            change: (args) => {
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
            change: (args) => {
                self.triggerChangeEvent();
            }
        });
        this.repeatInterval.appendTo(this.element.querySelector('.' + REPEATINTERVAL));
    }
    renderComponent() {
        this.setTemplate();
        this.renderDropdowns();
        this.renderDatePickers();
        this.dayButtonRender();
        this.radioButtonRender();
        this.numericTextboxRender();
    }
    rotateArray(data, count) {
        let temp;
        for (let index = 0; index < count; index++) {
            temp = data.shift();
            data.push(temp);
        }
    }
    getEndData() {
        let endData = [NEVER, UNTIL$1, COUNT];
        let self = this;
        let dataSource = [];
        endData.forEach((data) => {
            dataSource.push({ text: self.localeObj.getConstant(data), value: data });
        });
        return dataSource;
    }
    getDayPosition(date) {
        let temp = new Date(date.getTime());
        let endDate = new Date(date.getTime());
        let day = date.getDay();
        let positionCollection = [];
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
        return (positionCollection.indexOf(date.getTime()) + 1);
    }
    getRepeatData() {
        let data = [];
        let self = this;
        this.frequencies.forEach((element) => {
            let textValue = (element === NONE) ? NEVER : element;
            data.push({ text: self.localeObj.getConstant(textValue), value: element });
        });
        return data;
    }
    getMonthPosData() {
        let monthpos = [FIRST, SECOND, THIRD, FOURTH, LAST];
        let monthposValue = {
            first: 1,
            second: 2,
            third: 3,
            fourth: 4,
            last: -1
        };
        let self = this;
        let dataSource = [];
        monthpos.forEach((data) => {
            dataSource.push({ text: self.localeObj.getConstant(data), value: monthposValue[data] });
        });
        return dataSource;
    }
    getDayData(format) {
        let weekday = [KEYSUNDAY, KEYMONDAY, KEYTUESDAY, KEYWEDNESDAY, KEYTHURSDAY, KEYFRIDAY, KEYSATURDAY];
        let dayData = [];
        let cldrObj;
        let temp = ((format === 'narrow') ? 'narrow' : 'wide');
        this.rotateArray(weekday, this.firstDayOfWeek);
        if (this.locale === 'en' || this.locale === 'en-US') {
            cldrObj = (getValue('days.stand-alone.' + temp, getDefaultDateObject()));
        }
        else {
            cldrObj = (getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.days.stand-alone.' + temp, cldrData));
        }
        for (let obj of weekday) {
            dayData.push({ text: getValue(obj, cldrObj), value: valueData[obj] });
        }
        return dayData;
    }
    getMonthData() {
        let monthData = [];
        let cldrObj;
        if (this.locale === 'en' || this.locale === 'en-US') {
            cldrObj = (getValue('months.stand-alone.wide', getDefaultDateObject()));
        }
        else {
            cldrObj = (getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.months.stand-alone.wide', cldrData));
        }
        for (let obj of Object.keys(cldrObj)) {
            monthData.push({
                text: getValue(obj, cldrObj),
                value: obj
            });
        }
        return monthData;
    }
    setTemplate() {
        let dayData = this.getDayData('narrow');
        this.element.innerHTML = '<div class="' + HEADER + '">' +
            '<div class="' + INPUTWARAPPER + ' ' + FORMLEFT + '">' +
            '<input type="text" tabindex="0" class="' + REPEATELEMENT + '" />' +
            '</div><div class="' + INPUTWARAPPER + ' ' +
            INTERVALCLASS + ' ' + FORMRIGHT + '"><table  class="' + RECURRENCETABLE + '"><tr>' +
            '<td><input type="text" tabindex="0" class="' + REPEATINTERVAL + '" /></td>' +
            '<td><span class="' + REPEATCONTENT + '"></span></td>' +
            '</tr></table></div><div class="' + INPUTWARAPPERSIDE + ' ' + DAYWRAPPER + ' ' + FORMLEFT + '">' +
            '<div class=' + WEEKEXPANDERLABEL + '>' + this.localeObj.getConstant(ON$1) + '</div>' +
            '<button type="button" data-index="0">' + dayData[0].text + '</button>' +
            '<button type="button" data-index="1">' + dayData[1].text + '</button>' +
            '<button type="button" data-index="2">' + dayData[2].text + '</button>' +
            '<button type="button" data-index="3">' + dayData[3].text + '</button>' +
            '<button type="button" data-index="4">' + dayData[4].text + '</button>' +
            '<button type="button" data-index="5">' + dayData[5].text + '</button>' +
            '<button type="button" data-index="6">' + dayData[6].text + '</button></div>' +
            '<div class="' + INPUTWARAPPERSIDE + ' ' + WEEKWRAPPER + ' ' + FORMLEFT + '">' +
            '<div class=' + MONTHEXPANDERLABEL + '>' + this.localeObj.getConstant(ON$1) + '</div>' +
            '<div class="' + YEAREXPANDERWRAPPER + '">' +
            '<input class="' + YEAREXPANDERELEMENT + '" type="text" tabindex="0" />' +
            '</div>' +
            '<div class="' + MONETHEXPANDERWRAPPER + '">' +
            '<table class="' + RECURRENCETABLE + '"><tr><td>' +
            '<div class="' + INPUTWARAPPER + ' ' + MONTHEXPANDERCHECKBOXWRAPPER + '">' +
            '<input class="' + MONTHEXPANDERELEMENT + '" type="radio">' +
            '</div></td>' +
            '<td colspan="2"><div class="' + INPUTWARAPPER + ' ' + MONTHDAYELEMENT + '">' +
            '<input type="text" tabindex="0" class="' + MONTHDAYWRAPPER + '" />' +
            '</div></td></tr>' +
            '<tr><td>' +
            '<div class="' + INPUTWARAPPER + '" style="min-width: 30px;">' +
            '<input class="' + MONTHEXPANNDERELEM + '" type="radio">' +
            '</div></td>' +
            '<td><div class="' + INPUTWARAPPER + ' ' + WEEKPOSITION + '" >' +
            '<input type="text" tabindex="0" class="' + MONTHPOS + '" />' +
            '</div></td>' +
            '<td><div class="' + INPUTWARAPPER + '" >' +
            '<input type="text" tabindex="0" class="' + MONTHWEEK + '" />' +
            '</div></td></tr></table>' +
            '</div></div>' +
            '<div class="' + INPUTWARAPPERSIDE + ' ' + ENDON + ' ' + FORMRIGHT + '">' +
            '<div class=' + ENDONLABEL + '>' + this.localeObj.getConstant(END) + '</div>' +
            '<div class="' + INPUTWARAPPER + ' ' + ENDONLEFT + '">' +
            '<input type="text" tabindex="0" class="' + ENDONELEMENT + '" />' +
            '</div>' +
            '<div class="' + INPUTWARAPPER + ' ' + ENDONDATE + '" >' +
            '<input type="text" tabindex="0" class="' + UNTILDATE + '" />' +
            '</div>' +
            '<div class="' + INPUTWARAPPER + ' ' + ENDONCOUNTWRAPPER + '">' +
            '<input type="text" tabindex="0" class="' + ENDONCOUNT + '" />' +
            '</div></div>' +
            '</div></div>';
    }
    getSelectedDaysData() {
        let ruleData = RULEBYDAY + EQUAL;
        let elements = this.element.querySelectorAll('.' + DAYWRAPPER + ' button.' + PRIMARY);
        let weekday = [RULESUNDAY, RULEMONDAY, RULETUESDAY, RULEWEDNESDAY, RULETHURSDAY, RULEFRIDAY, RULESATURDAY];
        this.rotateArray(weekday, this.firstDayOfWeek);
        for (let index = 0; index < elements.length; index++) {
            ruleData += weekday[parseInt(elements[index].getAttribute('data-index'), 10)] + (index === (elements.length - 1) ? '' : COMMA);
        }
        return ruleData + SEMICOLON;
    }
    getSelectedMonthData() {
        let ruleData;
        if (this.onWeekDay.checked) {
            ruleData = RULEBYDAY + EQUAL + this.monthWeekDays.value + SEMICOLON
                + RULESETPOS + EQUAL + this.monthWeekPos.value + SEMICOLON;
        }
        else {
            ruleData = RULEBYMONTHDAY + EQUAL + this.monthDate.value + SEMICOLON;
        }
        return ruleData;
    }
    getIntervalData() {
        return RULEINTERVAL + EQUAL + this.repeatInterval.value + SEMICOLON;
    }
    getEndOnCount() {
        return RULECOUNT + EQUAL + this.recurrenceCount.value + SEMICOLON;
    }
    getYearMonthRuleData() {
        return RULEBYMONTH + EQUAL + this.monthValue.value + SEMICOLON;
    }
    updateWeekButton(keys) {
        let weekday = [RULESUNDAY, RULEMONDAY, RULETUESDAY, RULEWEDNESDAY, RULETHURSDAY, RULEFRIDAY, RULESATURDAY];
        this.rotateArray(weekday, this.firstDayOfWeek);
        let index;
        for (let obj of this.dayButtons) {
            index = parseInt(obj.element.getAttribute('data-index'), 10);
            if (keys.indexOf(weekday[index]) !== -1) {
                obj.setProperties({ isPrimary: true });
            }
            else {
                obj.setProperties({ isPrimary: false });
            }
        }
    }
    updateMonthUI() {
        if (this.ruleObject.monthDay.length) {
            this.monthDate.setProperties({ value: this.ruleObject.monthDay[0] });
            this.onMonthDay.setProperties({ checked: true });
        }
        else {
            this.onWeekDay.setProperties({ checked: true });
            this.monthWeekPos.setProperties({ value: this.ruleObject.setPosition });
            for (let key of Object.keys(valueData)) {
                if (valueData[key] === this.ruleObject.day[0]) {
                    this.monthWeekDays.setProperties({ value: this.ruleObject.day[0] });
                    break;
                }
            }
        }
    }
    updateUI(repeat, state) {
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
                this.monthValue.setProperties({ index: (this.ruleObject.month[0] - 1) });
                this.updateMonthUI();
                break;
            case MONTHLY:
                this.updateMonthUI();
                break;
        }
    }
    getUntilData() {
        let tempStr = getRecurrenceStringFromDate(this.untilDateObj.value);
        return RULEUNTIL + EQUAL + tempStr + SEMICOLON;
    }
    destroyComponents() {
        this.recurrenceCount.destroy();
        this.monthDate.destroy();
        this.repeatInterval.destroy();
        this.untilDateObj.destroy();
        this.repeatType.destroy();
        this.endType.destroy();
        this.monthWeekPos.destroy();
        this.monthWeekDays.destroy();
        this.monthValue.destroy();
        this.dayButtons.forEach((element) => {
            element.destroy();
        });
        this.monthButtons.forEach((element) => {
            element.destroy();
        });
    }
    resetFields() {
        this.startState(NONE, NEVER, this.startDate);
        this.setDefaultValue();
    }
    getRuleSummary(rule = this.getRecurrenceRule()) {
        return generateSummary(rule, this.localeObj, this.locale);
    }
    getRecurrenceDates(startDate, rule, excludeDate, maximumCount, viewDate = this.startDate) {
        return generate(startDate, rule, excludeDate, this.firstDayOfWeek, maximumCount, viewDate);
    }
    getRecurrenceRule() {
        let ruleData = RULEFREQ + EQUAL;
        switch (this.repeatType.value) {
            case DAILY:
                ruleData += RULEDAILY + SEMICOLON;
                break;
            case WEEKLY:
                ruleData += RULEWEEKLY + SEMICOLON + this.getSelectedDaysData();
                break;
            case MONTHLY:
                ruleData += RULEMONTHLY +
                    SEMICOLON +
                    this.getSelectedMonthData();
                break;
            case YEARLY:
                ruleData += RULEYEARLY +
                    SEMICOLON +
                    this.getSelectedMonthData() +
                    this.getYearMonthRuleData();
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
    setRecurrenceRule(rule, startDate = this.startDate) {
        if (!rule) {
            this.repeatType.setProperties({ value: NONE });
        }
        this.ruleObject = extractObjectFromRule(rule);
        let endon = this.ruleObject.count ? COUNT : (this.ruleObject.until ? UNTIL$1 : NEVER);
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
    /**
     * Destroys the widget.
     * @returns void
     */
    destroy() {
        this.destroyStatus = true;
        this.destroyComponents();
        this.element.innerHTML = '';
    }
    /**
     * Get component name.
     * @returns string
     * @private
     */
    getModuleName() {
        return 'recurrenceeditor';
    }
    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     */
    getPersistData() {
        return this.addOnPersist([]);
    }
    /**
     * Initialize the control rendering
     * @returns void
     * @private
     */
    render() {
        this.initialize();
        this.rtlClass(this.enableRtl);
        this.renderStatus = true;
    }
    /**
     * Called internally, if any of the property value changed.
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        for (let prop of Object.keys(newProp)) {
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
    }
};
__decorate$1([
    Property(['none', 'daily', 'weekly', 'monthly', 'yearly'])
], RecurrenceEditor.prototype, "frequencies", void 0);
__decorate$1([
    Property(0)
], RecurrenceEditor.prototype, "firstDayOfWeek", void 0);
__decorate$1([
    Property(new Date())
], RecurrenceEditor.prototype, "startDate", void 0);
__decorate$1([
    Property('null')
], RecurrenceEditor.prototype, "dateFormat", void 0);
__decorate$1([
    Property('en-US')
], RecurrenceEditor.prototype, "locale", void 0);
__decorate$1([
    Property('')
], RecurrenceEditor.prototype, "cssClass", void 0);
__decorate$1([
    Property(false)
], RecurrenceEditor.prototype, "enableRtl", void 0);
__decorate$1([
    Property('')
], RecurrenceEditor.prototype, "value", void 0);
__decorate$1([
    Property(new Date(1900, 1, 1))
], RecurrenceEditor.prototype, "minDate", void 0);
__decorate$1([
    Property(new Date(2099, 12, 31))
], RecurrenceEditor.prototype, "maxDate", void 0);
__decorate$1([
    Property(0)
], RecurrenceEditor.prototype, "selectedType", void 0);
__decorate$1([
    Event()
], RecurrenceEditor.prototype, "change", void 0);
RecurrenceEditor = __decorate$1([
    NotifyPropertyChanges
], RecurrenceEditor);

const EVENT_FIELD = 'e-field';
const REPEAT_CONTAINER_CLASS = 'e-recurrence-container';
const REPEAT_BUTTON_ICON_CLASS = 'e-recurrence-edit';
const REPEAT_BUTTON_CLASS = 'e-recurrence-edit-button';
const REPEAT_DIALOG_CLASS = 'e-recurrence-dialog';
const HIDE_STYLE_CLASS = 'e-hide';
/**
 * Event editor window
 */
class EventWindow {
    /**
     * Constructor for event window
     */
    constructor(parent) {
        this.parent = parent;
        this.l10n = this.parent.localeObj;
        this.fields = this.parent.eventFields;
        this.fieldValidator = new FieldValidator(this.parent);
        this.timezone = new Timezone();
        this.renderEventWindow();
    }
    renderEventWindow() {
        let dialogContent = this.getEventWindowContent();
        this.element = createElement('div', { id: this.parent.element.id + '_dialog_wrapper' });
        this.parent.element.appendChild(this.element);
        if (this.parent.isAdaptive) {
            this.dialogObject = new Dialog({
                animationSettings: { effect: 'Zoom' },
                content: dialogContent,
                cssClass: EVENT_WINDOW_DIALOG_CLASS + ' ' + EVENT_WINDOW_DEVICE_CLASS,
                enableRtl: this.parent.enableRtl,
                header: '<div class="e-title-header"><div class="e-back-icon e-icons"></div><div class="e-title-text">' +
                    this.l10n.getConstant('newEvent') + '</div><div class="e-save-icon e-icons"></div></div>',
                height: '100%',
                isModal: true,
                showCloseIcon: false,
                target: document.body,
                visible: false,
                beforeOpen: this.onBeforeOpen.bind(this),
                beforeClose: this.onBeforeClose.bind(this)
            });
        }
        else {
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
    openEditor(data, type) {
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
    setDialogContent() {
        this.dialogObject.content = this.getEventWindowContent();
        this.dialogObject.dataBind();
    }
    onBeforeOpen(args) {
        let eventProp = { type: 'Editor', data: this.eventData, cancel: false, element: this.element };
        this.parent.trigger(popupOpen, eventProp);
        args.cancel = eventProp.cancel;
    }
    onBeforeClose(args) {
        this.parent.eventBase.focusElement();
    }
    getEventWindowContent() {
        let container = createElement('div', { className: EVENT_WINDOW_FORM_DIV_CLASS });
        let form = createElement('form', {
            id: this.parent.element.id + 'EditForm',
            className: EVENT_WINDOW_FORM_CLASS
        });
        if (!isNullOrUndefined(this.parent.editorTemplate)) {
            let templeteEle = this.parent.getEditorTemplate()();
            append([].slice.call(templeteEle), form);
        }
        else {
            let content = this.getDefaultEventWindowContent();
            form.appendChild(content);
        }
        container.appendChild(form);
        return container;
    }
    getDefaultEventWindowContent() {
        let parentDiv = this.createDivElement('e-dialog-parent');
        let titleLocationDiv = this.createDivElement(EVENT_WINDOW_TITLE_LOCATION_DIV_CLASS);
        let titleDiv = this.renderTextBox(EVENT_WINDOW_TITLE_CLASS);
        let locationDiv = this.renderTextBox(EVENT_WINDOW_LOCATION_CLASS);
        titleLocationDiv.appendChild(titleDiv);
        titleLocationDiv.appendChild(locationDiv);
        let startEndDateTimeDiv = this.createDivElement(EVENT_WINDOW_START_END_DIV_CLASS);
        let startDateTimeDiv = this.renderDateTimePicker(EVENT_WINDOW_START_CLASS, this.onTimeChange.bind(this));
        let endDateTimeDiv = this.renderDateTimePicker(EVENT_WINDOW_END_CLASS);
        startEndDateTimeDiv.appendChild(startDateTimeDiv);
        startEndDateTimeDiv.appendChild(endDateTimeDiv);
        let timezoneParentDiv = this.createDivElement(EVENT_WINDOW_TIME_ZONE_DIV_CLASS);
        let startTimezoneDiv = this.renderDropDown(EVENT_WINDOW_START_TZ_CLASS);
        let endTimezoneDiv = this.renderDropDown(EVENT_WINDOW_END_TZ_CLASS);
        timezoneParentDiv.appendChild(startTimezoneDiv);
        timezoneParentDiv.appendChild(endTimezoneDiv);
        let allDayTimezoneDiv = this.createDivElement(EVENT_WINDOW_ALLDAY_TZ_DIV_CLASS);
        let allDayDiv = this.renderCheckBox(EVENT_WINDOW_ALL_DAY_CLASS);
        let timezoneDiv = this.renderCheckBox(EVENT_WINDOW_TZ_CLASS);
        allDayTimezoneDiv.appendChild(allDayDiv);
        allDayTimezoneDiv.appendChild(timezoneDiv);
        let repeatParentDiv = this.createDivElement(EVENT_WINDOW_REPEAT_DIV_CLASS);
        let repeatDiv = this.renderCheckBox(EVENT_WINDOW_REPEAT_CLASS);
        let repeatEditConainer = createElement('span', {
            className: REPEAT_CONTAINER_CLASS
        });
        let button = createElement('button', {
            className: REPEAT_BUTTON_CLASS,
            attrs: { type: 'button', 'title': this.l10n.getConstant('editRecurrence') }
        });
        let buttonObj = new Button({ iconCss: REPEAT_BUTTON_ICON_CLASS + ' e-icons', cssClass: 'e-medium' });
        repeatEditConainer.appendChild(button);
        buttonObj.appendTo(button);
        repeatDiv.appendChild(repeatEditConainer);
        repeatParentDiv.appendChild(repeatDiv);
        let description = this.createDivElement(EVENT_WINDOW_DESCRIPTION_CLASS + '-row');
        let descriptionDiv = this.renderTextBox(EVENT_WINDOW_DESCRIPTION_CLASS);
        description.appendChild(descriptionDiv);
        parentDiv.appendChild(titleLocationDiv);
        parentDiv.appendChild(startEndDateTimeDiv);
        parentDiv.appendChild(allDayTimezoneDiv);
        parentDiv.appendChild(timezoneParentDiv);
        parentDiv.appendChild(repeatParentDiv);
        if (!this.parent.isAdaptive) {
            this.createRecurrenceEditor(parentDiv);
        }
        else {
            EventHandler.add(button, 'click', this.loadRecurrenceEditor, this);
        }
        parentDiv.appendChild(description);
        return parentDiv;
    }
    createRecurrenceEditor(parentDiv) {
        let rec = createElement('div');
        parentDiv.appendChild(rec);
        this.recurrenceEditor = this.renderRecurrenceEditor();
        this.recurrenceEditor.appendTo(rec);
    }
    createDivElement(className) {
        return createElement('div', { className: className });
    }
    createInputElement(className, fieldName, type) {
        return createElement(type || 'input', {
            className: className, attrs: {
                type: 'text', name: fieldName, value: ''
            }
        });
    }
    renderDateTimePicker(value, changeEvent) {
        let dateTimeDiv = this.createDivElement(value + '-container');
        let fieldName = this.getFieldName(value);
        let dateTimeInput = this.createInputElement(value + ' ' + EVENT_FIELD, fieldName);
        dateTimeDiv.appendChild(dateTimeInput);
        let dateTimePicker = new DateTimePicker({
            change: changeEvent, enableRtl: this.parent.enableRtl, floatLabelType: 'Always',
            format: (isNullOrUndefined(this.parent.dateFormat) ?
                this.getFormat('dateFormats') : this.parent.dateFormat) + ' ' + this.getFormat('timeFormats'),
            placeholder: this.l10n.getConstant(value.substr(2)), value: new Date(), width: '100%'
        });
        dateTimePicker.appendTo(dateTimeInput);
        return dateTimeDiv;
    }
    onTimeChange(args) {
        let startObj = this.getInstance(EVENT_WINDOW_START_CLASS);
        if (startObj.element.parentElement.classList.contains('e-input-focus')) {
            let endObj = this.getInstance(EVENT_WINDOW_END_CLASS);
            let duration = 0;
            if (this.cellClickAction) {
                duration = MS_PER_MINUTE * 30;
            }
            else {
                let eventData = this.parent.activeEventData.event;
                duration = eventData[this.fields.endTime].getTime() - eventData[this.fields.startTime].getTime();
            }
            endObj.value = new Date(startObj.value.getTime() + duration);
            endObj.dataBind();
        }
    }
    renderDropDown(value) {
        let labelValue;
        let fieldName = this.getFieldName(value);
        labelValue = value === EVENT_WINDOW_START_TZ_CLASS ? 'startTimezone' : 'endTimezone';
        let timezoneDiv = this.createDivElement(value + '-container');
        let timezoneInput = this.createInputElement(value + ' ' + EVENT_FIELD, fieldName);
        timezoneDiv.appendChild(timezoneInput);
        let drowDownList = new DropDownList({
            allowFiltering: true, change: this.onTimezoneChange, dataSource: timezoneData,
            enableRtl: this.parent.enableRtl, fields: { text: 'Text', value: 'Value' },
            filterBarPlaceholder: 'Search Timezone', filtering: (e) => {
                let query = new Query();
                query = (e.text !== '') ? query.where('Text', 'contains', e.text, true) : query;
                e.updateData(timezoneData, query);
            },
            floatLabelType: 'Always', placeholder: this.l10n.getConstant(labelValue), popupHeight: '230px'
        });
        drowDownList.appendTo(timezoneInput);
        timezoneInput.setAttribute('name', fieldName);
        return timezoneDiv;
    }
    onTimezoneChange() {
        if (this.element.getAttribute('name') === 'StartTimezone') {
            let startTimezoneObj = document.querySelector('.' + EVENT_WINDOW_START_TZ_CLASS).ej2_instances[0];
            let endTimezoneObj = document.querySelector('.' + EVENT_WINDOW_END_TZ_CLASS).ej2_instances[0];
            endTimezoneObj.value = startTimezoneObj.value;
            endTimezoneObj.dataBind();
        }
    }
    renderCheckBox(value) {
        let checkBoxDiv = this.createDivElement(value + '-container');
        let fieldName = this.getFieldName(value);
        let checkBoxInput = this.createInputElement(value + ' ' + EVENT_FIELD, fieldName);
        checkBoxDiv.appendChild(checkBoxInput);
        let labelText;
        if (value === EVENT_WINDOW_ALL_DAY_CLASS) {
            labelText = 'e-allDay';
        }
        else if (value === EVENT_WINDOW_TZ_CLASS) {
            labelText = 'e-timezone';
        }
        else {
            labelText = value;
        }
        let checkBox = new CheckBox({
            change: this.onChange.bind(this),
            cssClass: value,
            enableRtl: this.parent.enableRtl,
            label: this.l10n.getConstant(labelText.substr(2)),
        });
        checkBox.appendTo(checkBoxInput);
        checkBoxInput.setAttribute('name', fieldName);
        if (fieldName === 'Repeat') {
            this.repeatStatus = checkBox;
        }
        return checkBoxDiv;
    }
    renderTextBox(value) {
        let textBoxDiv = this.createDivElement(value + '-container');
        let fieldName = this.getFieldName(value);
        let labelText = value === EVENT_WINDOW_TITLE_CLASS ? 'e-title' : value;
        let textBoxInput = this.createInputElement(value + ' ' + EVENT_FIELD, fieldName, (value === EVENT_WINDOW_DESCRIPTION_CLASS) ? 'textarea' : 'input');
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
    getFieldName(name) {
        let fieldName;
        if (name === 'e-subject') {
            fieldName = this.fields.subject;
        }
        else if (name === 'e-location') {
            fieldName = this.fields.location;
        }
        else if (name === 'e-start') {
            fieldName = this.fields.startTime;
        }
        else if (name === 'e-end') {
            fieldName = this.fields.endTime;
        }
        else if (name === 'e-description') {
            fieldName = this.fields.description;
        }
        else if (name === 'e-all-day') {
            fieldName = this.fields.isAllDay;
        }
        else if (name === 'e-start-time-zone') {
            fieldName = this.fields.startTimezone;
        }
        else if (name === 'e-end-time-zone') {
            fieldName = this.fields.endTimezone;
        }
        else if (name === 'e-time-zone') {
            fieldName = 'Timezone';
        }
        else if (name === 'e-repeat') {
            fieldName = 'Repeat';
        }
        return fieldName;
    }
    onChange(args) {
        let target = (args.event.target);
        if (target.classList.contains(EVENT_WINDOW_ALL_DAY_CLASS)) {
            this.onAllDayChange(args.checked);
        }
        else if (target.classList.contains(EVENT_WINDOW_TZ_CLASS)) {
            this.timezoneChangeStyle(args.checked);
        }
        else if (target.classList.contains(EVENT_WINDOW_REPEAT_CLASS)) {
            this.onRepeatChange(args.checked);
        }
    }
    renderRepeatDialog() {
        let element = createElement('div');
        this.repeatDialogObject = new Dialog({
            header: this.l10n.getConstant('recurrence'),
            visible: false,
            content: '<div class="e-rec-editor"></div>',
            closeOnEscape: true,
            width: '90%',
            buttons: [{
                    click: this.repeatSaveDialog.bind(this),
                    buttonModel: { content: this.l10n.getConstant('save'), cssClass: 'e-save', isPrimary: true }
                },
                { click: this.repeatCancelDialog.bind(this), buttonModel: { cssClass: 'e-cancel', content: this.l10n.getConstant('cancel') } }],
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
    loadRecurrenceEditor() {
        this.repeatDialogObject.setProperties({ visible: true });
        if (this.recurrenceEditor && this.repeatRule) {
            this.recurrenceEditor.setRecurrenceRule(this.repeatRule);
        }
    }
    onRepeatChange(state) {
        if (state) {
            if (!this.repeatDialogObject) {
                this.renderRepeatDialog();
            }
            this.recurrenceEditor.setProperties({ startDate: this.repeatStartDate, selectedType: 0 });
            this.loadRecurrenceEditor();
        }
        else {
            if (this.repeatDialogObject) {
                this.repeatDialogObject.setProperties({ visible: false });
            }
            this.repeatRule = '';
            if (this.recurrenceEditor) {
                this.recurrenceEditor.setRecurrenceRule(this.repeatRule);
                this.updateRepeatLabel(this.repeatRule);
            }
            let element = this.element.querySelector('.' + REPEAT_CONTAINER_CLASS);
            element.classList.add(HIDE_STYLE_CLASS);
        }
    }
    repeatSaveDialog() {
        this.repeatRule = this.recurrenceEditor.getRecurrenceRule();
        let element = this.element.querySelector('.' + REPEAT_CONTAINER_CLASS);
        if (this.recurrenceEditor.getRecurrenceRule()) {
            element.classList.remove(HIDE_STYLE_CLASS);
        }
        else {
            element.classList.add(HIDE_STYLE_CLASS);
            this.repeatStatus.setProperties({ checked: false });
        }
        this.updateRepeatLabel(this.repeatRule);
        this.closeRepeatDialog();
    }
    closeRepeatDialog() {
        this.repeatDialogObject.setProperties({ visible: false });
    }
    repeatCancelDialog() {
        this.closeRepeatDialog();
        if (this.recurrenceEditor) {
            this.recurrenceEditor.setRecurrenceRule(this.repeatTempRule);
        }
        if (!this.repeatTempRule) {
            this.repeatStatus.setProperties({ checked: false });
        }
    }
    repeatOpenDialog() {
        this.repeatTempRule = this.recurrenceEditor.getRecurrenceRule();
    }
    onCellDetailsUpdate(args) {
        this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS).removeAttribute('data-id');
        let event = args;
        this.element.querySelector('.' + EVENT_WINDOW_TITLE_TEXT_CLASS).innerHTML = this.l10n.getConstant('newEvent');
        let eventObj = {};
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
            let element = this.element.querySelector('.' + REPEAT_CONTAINER_CLASS);
            element.classList.add(HIDE_STYLE_CLASS);
            this.updateRepeatLabel(this.repeatRule);
        }
        this.dialogObject.show();
    }
    applyFormValidation() {
        let form = this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS);
        let rules = {};
        rules[this.parent.eventSettings.fields.subject.name] = this.parent.eventSettings.fields.subject.validation;
        rules[this.parent.eventSettings.fields.location.name] = this.parent.eventSettings.fields.location.validation;
        rules[this.parent.eventSettings.fields.startTime.name] = this.parent.eventSettings.fields.startTime.validation;
        rules[this.parent.eventSettings.fields.endTime.name] = this.parent.eventSettings.fields.endTime.validation;
        rules[this.parent.eventSettings.fields.description.name] = this.parent.eventSettings.fields.description.validation;
        this.fieldValidator.renderFormValidator(form, rules);
    }
    showDetails(eventData) {
        let eventObj = extend({}, eventData, null, true);
        if (eventObj[this.fields.isAllDay]) {
            let temp = addDays(new Date(+eventObj[this.fields.endTime]), -1).getTime();
            eventObj[this.fields.endTime] = (+eventObj[this.fields.startTime] > temp) ? eventObj[this.fields.endTime] : new Date(temp);
        }
        this.eventData = eventObj;
        let formelement = this.getFormElements();
        let keyNames = Object.keys(eventObj);
        for (let index = 0, len = formelement.length; index < len; index++) {
            let columnName = formelement[index].name;
            if (!isNullOrUndefined(columnName)) {
                if (keyNames.indexOf(columnName) !== -1) {
                    this.setValueToElement(formelement[index], eventObj[columnName]);
                }
                else {
                    this.setDefaultValueToElement(formelement[index]);
                }
            }
        }
        if (isNullOrUndefined(this.parent.editorTemplate)) {
            this.onAllDayChange(eventObj[this.fields.isAllDay]);
            let timezoneObj = this.getInstance(EVENT_WINDOW_TZ_CLASS + '.' + EVENT_FIELD);
            if (!(isNullOrUndefined(eventObj[this.fields.startTimezone]) && isNullOrUndefined(eventObj[this.fields.endTimezone]))) {
                timezoneObj.checked = true;
                timezoneObj.dataBind();
            }
            this.timezoneChangeStyle(timezoneObj.checked);
            delete eventObj.Timezone;
        }
    }
    onAllDayChange(allDayStatus) {
        let startObj = this.getInstance(EVENT_WINDOW_START_CLASS);
        let endObj = this.getInstance(EVENT_WINDOW_END_CLASS);
        let format;
        if (allDayStatus) {
            format = (isNullOrUndefined(this.parent.dateFormat)) ? this.getFormat('dateFormats') : this.parent.dateFormat;
            addClass(this.element.querySelectorAll('.e-time-icon'), EVENT_WINDOW_ICON_DISABLE_CLASS);
            startObj.format = endObj.format = format;
        }
        else {
            format = (isNullOrUndefined(this.parent.dateFormat)) ? this.getFormat('dateFormats') + ' ' + this.getFormat('timeFormats') :
                this.parent.dateFormat + ' ' + this.getFormat('timeFormats');
            removeClass(this.element.querySelectorAll('.e-time-icon'), EVENT_WINDOW_ICON_DISABLE_CLASS);
            startObj.format = endObj.format = format;
        }
        if (this.cellClickAction) {
            this.updateDateTime(allDayStatus, startObj, endObj);
        }
        startObj.dataBind();
        endObj.dataBind();
    }
    updateDateTime(allDayStatus, startObj, endObj) {
        let startDate;
        let endDate;
        if (allDayStatus) {
            startDate = resetTime(new Date(this.parent.activeCellsData.startTime.getTime()));
            endDate = this.parent.activeCellsData.isAllDay ?
                addDays(new Date(this.parent.activeCellsData.endTime.getTime()), -1) :
                resetTime(new Date(this.parent.activeCellsData.startTime.getTime()));
        }
        else {
            startDate = new Date(this.parent.activeCellsData.startTime.getTime());
            if (this.parent.currentView === 'Month' || this.parent.currentView === 'MonthAgenda' || this.parent.activeCellsData.isAllDay) {
                let startHour = this.parent.globalize.parseDate(this.parent.workHours.start, { skeleton: 'Hm' });
                startDate.setHours(startHour.getHours(), startHour.getMinutes(), startHour.getSeconds());
                endDate = new Date(startDate.getTime());
                endDate.setMilliseconds(MS_PER_MINUTE * 30);
            }
            else {
                endDate = new Date(this.parent.activeCellsData.endTime.getTime());
            }
        }
        startObj.value = startDate;
        endObj.value = endDate;
        startObj.dataBind();
        endObj.dataBind();
    }
    getFormat(formatType) {
        let format;
        if (this.parent.locale === 'en' || this.parent.locale === 'en-US') {
            format = getValue(formatType + '.short', getDefaultDateObject());
        }
        else {
            format = getValue('main.' + '' + this.parent.locale + '.dates.calendars.gregorian.' + formatType + '.short', cldrData);
        }
        return format;
    }
    onEventDetailsUpdate(eventObj) {
        if (!this.parent.isAdaptive) {
            this.element.querySelector('.' + EVENT_WINDOW_DELETE_BUTTON_CLASS).setAttribute('style', 'display:inline');
        }
        this.element.querySelector('.' + EVENT_WINDOW_TITLE_TEXT_CLASS).innerHTML = this.l10n.getConstant('editEvent');
        this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS).setAttribute('data-id', eventObj[this.fields.id].toString());
        if (isNullOrUndefined(this.parent.editorTemplate)) {
            eventObj = extend({}, eventObj, null, true);
            let timezoneObj = this.getInstance(EVENT_WINDOW_TZ_CLASS + '.' + EVENT_FIELD);
            let timezoneValue;
            if (eventObj[this.fields.startTimezone] || eventObj[this.fields.endTimezone]) {
                timezoneValue = true;
                eventObj[this.fields.startTimezone] = eventObj[this.fields.startTimezone] || eventObj[this.fields.endTimezone];
                eventObj[this.fields.endTimezone] = eventObj[this.fields.endTimezone] || eventObj[this.fields.startTimezone];
                if (this.parent.timezone) {
                    let startTz = eventObj[this.fields.startTimezone];
                    let endTz = eventObj[this.fields.endTimezone];
                    eventObj[this.fields.startTime] =
                        this.timezone.convert(eventObj[this.fields.startTime], this.parent.timezone, startTz);
                    eventObj[this.fields.endTime] =
                        this.timezone.convert(eventObj[this.fields.endTime], this.parent.timezone, endTz);
                }
            }
            else {
                timezoneValue = false;
            }
            eventObj.Timezone = timezoneValue;
            timezoneObj.checked = timezoneValue;
            timezoneObj.dataBind();
        }
        this.showDetails(eventObj);
        if (eventObj[this.fields.recurrenceRule] && this.recurrenceEditor) {
            this.recurrenceEditor.setRecurrenceRule(eventObj[this.fields.recurrenceRule], eventObj[this.fields.startTime]);
        }
        else if (!this.parent.isAdaptive && this.recurrenceEditor) {
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
            let element = this.element.querySelector('.' + REPEAT_CONTAINER_CLASS);
            if (eventObj[this.fields.recurrenceRule]) {
                element.classList.remove(HIDE_STYLE_CLASS);
                this.repeatStatus.setProperties({ checked: true });
            }
            else {
                element.classList.add(HIDE_STYLE_CLASS);
                this.repeatStatus.setProperties({ checked: false });
            }
            this.updateRepeatLabel(this.repeatRule);
        }
        if (this.parent.readonly) {
            let saveButton = this.element.querySelector('.' + EVENT_WINDOW_SAVE_BUTTON_CLASS);
            saveButton.ej2_instances[0].disabled = true;
            let deleteButton = this.element.querySelector('.' + EVENT_WINDOW_DELETE_BUTTON_CLASS);
            deleteButton.ej2_instances[0].disabled = true;
        }
        this.dialogObject.show();
    }
    renderRecurrenceEditor() {
        return new RecurrenceEditor({
            cssClass: this.parent.cssClass,
            dateFormat: this.parent.dateFormat,
            enableRtl: this.parent.enableRtl,
            firstDayOfWeek: this.parent.firstDayOfWeek,
            locale: this.parent.locale
        });
    }
    updateRepeatLabel(repeatRule) {
        if (this.parent.isAdaptive && !this.repeatDialogObject) {
            this.renderRepeatDialog();
        }
        let data = repeatRule ?
            (this.l10n.getConstant('repeats') + ' ' + this.recurrenceEditor.getRuleSummary(repeatRule)) : this.l10n.getConstant('repeat');
        this.repeatStatus.setProperties({ label: data });
    }
    dialogClose(args) {
        this.dialogObject.hide();
        this.fieldValidator.destroyToolTip();
        this.resetFormFields();
        if (!this.parent.isAdaptive && this.recurrenceEditor) {
            this.recurrenceEditor.resetFields();
        }
    }
    timezoneChangeStyle(value) {
        let timezoneDiv = this.element.querySelector('.' + EVENT_WINDOW_TIME_ZONE_DIV_CLASS);
        if (value) {
            addClass([timezoneDiv], ENABLE_CLASS);
            let startTimezoneObj = this.getInstance(EVENT_WINDOW_START_TZ_CLASS);
            let endTimezoneObj = this.getInstance(EVENT_WINDOW_END_TZ_CLASS);
            let timezone = startTimezoneObj.dataSource;
            if (!startTimezoneObj.value || !this.parent.timezone) {
                let found = timezone.some((tz) => { return tz.Value === localTimezoneName; });
                if (!found) {
                    let obj = {};
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
        }
        else {
            removeClass([timezoneDiv], ENABLE_CLASS);
        }
    }
    resetFormFields() {
        let formelement = this.getFormElements();
        for (let index = 0, len = formelement.length; index < len; index++) {
            let columnName = formelement[index].name;
            if (!isNullOrUndefined(columnName) && columnName !== '') {
                this.setDefaultValueToElement(formelement[index]);
            }
        }
    }
    eventSave() {
        if (!this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS)
            .ej2_instances[0].validate()) {
            return;
        }
        let eventObj = {};
        let formelement = this.getFormElements();
        for (let index = 0, len = formelement.length; index < len; index++) {
            let columnName = formelement[index].name;
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
        let eventId = this.getEventIdFromForm();
        if (!isNullOrUndefined(eventObj[this.fields.subject])) {
            eventObj[this.fields.subject] = eventObj[this.fields.subject] !== '' ?
                eventObj[this.fields.subject] : this.parent.eventSettings.fields.subject.default;
        }
        if (eventObj[this.fields.isAllDay]) {
            eventObj[this.fields.startTime] = resetTime(eventObj[this.fields.startTime]);
            eventObj[this.fields.endTime] = addDays(resetTime(eventObj[this.fields.endTime]), 1);
        }
        let ruleData = this.recurrenceEditor ? this.recurrenceEditor.getRecurrenceRule() : null;
        eventObj[this.fields.recurrenceRule] = ruleData ? ruleData : undefined;
        if (!isNullOrUndefined(eventId)) {
            let editedData = new DataManager({ json: this.parent.eventsData }).
                executeLocal(new Query().where(this.fields.id, 'equal', parseInt(eventId, 10)))[0];
            eventObj = extend({}, editedData, eventObj);
            if (!isNullOrUndefined(editedData[this.fields.recurrenceRule])) {
                if (this.parent.currentAction === 'EditOccurrence' && !eventObj[this.fields.recurrenceID]) {
                    eventObj[this.fields.id] = this.parent.eventBase.getEventMaxId() + 1;
                }
                if (this.parent.currentAction === 'EditSeries' || eventObj[this.fields.id] !==
                    editedData[this.fields.id]) {
                    eventObj[this.fields.recurrenceID] = editedData[this.fields.id];
                }
                this.parent.saveEvent(eventObj, this.parent.currentAction);
            }
            else {
                this.parent.saveEvent(eventObj);
            }
        }
        else {
            eventObj[this.fields.id] = this.parent.eventBase.getEventMaxId() + 1;
            this.parent.addEvent(eventObj);
        }
        this.dialogObject.hide();
    }
    getEventIdFromForm() {
        return this.element.querySelector('.' + EVENT_WINDOW_FORM_CLASS).getAttribute('data-id');
    }
    getFormElements() {
        return [].slice.call(this.element.querySelectorAll('.' + EVENT_FIELD));
    }
    getValueFromElement(element) {
        let value;
        if (element.classList.contains('e-datepicker')) {
            value = element.ej2_instances[0].value;
        }
        else if (element.classList.contains('e-datetimepicker')) {
            value = element.ej2_instances[0].value;
        }
        else if (element.classList.contains('e-dropdownlist')) {
            value = element.ej2_instances[0].value;
        }
        else if (element.classList.contains('e-checkbox')) {
            value = element.ej2_instances[0].checked;
        }
        else {
            if (element.type === 'checkbox') {
                value = element.checked;
            }
            else {
                value = element.value;
            }
        }
        return value;
    }
    setValueToElement(element, value) {
        if (element.classList.contains('e-datepicker')) {
            let instance = element.ej2_instances[0];
            instance.value = value;
            instance.dataBind();
        }
        else if (element.classList.contains('e-datetimepicker')) {
            let instance = element.ej2_instances[0];
            instance.value = value;
            instance.dataBind();
        }
        else if (element.classList.contains('e-dropdownlist')) {
            let instance = element.ej2_instances[0];
            instance.value = value;
            instance.dataBind();
        }
        else if (element.classList.contains('e-checkbox')) {
            let instance = element.ej2_instances[0];
            instance.checked = value;
            instance.dataBind();
        }
        else {
            if (element.type !== 'checkbox') {
                element.value = value;
            }
            else {
                element.checked = value;
            }
        }
    }
    setDefaultValueToElement(element) {
        if (element.classList.contains('e-datepicker')) {
            let instance = element.ej2_instances[0];
            instance.value = new Date();
            instance.dataBind();
        }
        else if (element.classList.contains('e-datetimepicker')) {
            let instance = element.ej2_instances[0];
            instance.value = new Date();
            instance.dataBind();
        }
        else if (element.classList.contains('e-dropdownlist')) {
            let instance = element.ej2_instances[0];
            instance.value = null;
            instance.dataBind();
        }
        else if (element.classList.contains('e-checkbox')) {
            let instance = element.ej2_instances[0];
            instance.checked = false;
            instance.dataBind();
        }
        else {
            if (element.type === 'checkbox') {
                element.checked = false;
            }
            else {
                element.value = '';
            }
        }
    }
    getInstance(className) {
        return this.element.querySelector('.' + className).ej2_instances[0];
    }
    eventDelete(args) {
        switch (this.parent.currentAction) {
            case 'EditOccurrence':
                let fields = this.parent.eventFields;
                if (!isNullOrUndefined(this.parent.activeEventData.event[fields.recurrenceRule])) {
                    this.parent.currentAction = 'DeleteOccurrence';
                }
                else {
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
    getRecurrenceEditorInstance() {
        if (this.parent.isAdaptive && !this.repeatDialogObject) {
            this.renderRepeatDialog();
        }
        return this.recurrenceEditor;
    }
    /**
     * To destroy the event window.
     * @return {void}
     * @private
     */
    destroy() {
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
}

/**
 * Schedule DOM rendering
 */
class Render {
    /**
     * Constructor for render
     */
    constructor(parent) {
        this.parent = parent;
    }
    render(viewName) {
        this.initializeLayout(viewName);
        this.refreshDataManager();
    }
    initializeLayout(viewName) {
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
            let firstView = this.parent.viewOptions[Object.keys(this.parent.viewOptions)[0]].option;
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
    updateLabelText(view) {
        let content = this.parent.activeView.getLabelText(view);
        this.parent.element.setAttribute('role', 'presentation');
        this.parent.element.setAttribute('aria-label', content);
    }
    refreshDataManager() {
        let start = this.parent.activeView.startDate();
        let end = this.parent.activeView.endDate();
        let dataManager = this.parent.dataModule.getData(this.parent.dataModule.generateQuery(start, end));
        dataManager.then((e) => this.dataManagerSuccess(e))
            .catch((e) => this.dataManagerFailure(e));
    }
    dataManagerSuccess(e) {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.trigger(dataBinding, e);
        this.parent.eventsData = extend([], e.result, null, true);
        let processed = this.parent.eventBase.processData(this.parent.eventsData);
        this.parent.notify(dataReady, { processedData: processed });
        this.parent.trigger(dataBound);
    }
    dataManagerFailure(e) {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.trigger(actionFailure, { error: e });
    }
}

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Configuration of options related to working hours on Schedule.
 */
class WorkHours extends ChildProperty {
}
__decorate$2([
    Property(true)
], WorkHours.prototype, "highlight", void 0);
__decorate$2([
    Property('09:00')
], WorkHours.prototype, "start", void 0);
__decorate$2([
    Property('18:00')
], WorkHours.prototype, "end", void 0);

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A Class that holds the collection of event fields that requires to be mapped with the dataSource
 * fields along with its available configuration settings. Each field in it accepts both string and Object
 *  data type. When each of the field is assigned with simple `string` value, it is assumed that the dataSource field
 *  name is mapped with it. If the `object` type is defined on each fields, then the validation related settings and mapping of
 *  those fields with dataSource can be given altogether within it.
 */
class Field extends ChildProperty {
}
__decorate$4([
    Property({ name: 'Id' })
], Field.prototype, "id", void 0);
__decorate$4([
    Property({ name: 'Subject', default: 'Add title' })
], Field.prototype, "subject", void 0);
__decorate$4([
    Property({ name: 'StartTime' })
], Field.prototype, "startTime", void 0);
__decorate$4([
    Property({ name: 'EndTime' })
], Field.prototype, "endTime", void 0);
__decorate$4([
    Property({ name: 'StartTimezone' })
], Field.prototype, "startTimezone", void 0);
__decorate$4([
    Property({ name: 'EndTimezone' })
], Field.prototype, "endTimezone", void 0);
__decorate$4([
    Property({ name: 'Location' })
], Field.prototype, "location", void 0);
__decorate$4([
    Property({ name: 'Description' })
], Field.prototype, "description", void 0);
__decorate$4([
    Property({ name: 'IsAllDay' })
], Field.prototype, "isAllDay", void 0);
__decorate$4([
    Property({ name: 'RecurrenceID' })
], Field.prototype, "recurrenceID", void 0);
__decorate$4([
    Property({ name: 'RecurrenceRule' })
], Field.prototype, "recurrenceRule", void 0);
__decorate$4([
    Property({ name: 'RecurrenceException' })
], Field.prototype, "recurrenceException", void 0);

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Holds the configuration of event related options and dataSource binding to Schedule.
 */
class EventSettings extends ChildProperty {
}
__decorate$3([
    Property()
], EventSettings.prototype, "template", void 0);
__decorate$3([
    Property([])
], EventSettings.prototype, "dataSource", void 0);
__decorate$3([
    Property()
], EventSettings.prototype, "query", void 0);
__decorate$3([
    Complex({}, Field)
], EventSettings.prototype, "fields", void 0);
__decorate$3([
    Property(false)
], EventSettings.prototype, "enableTooltip", void 0);
__decorate$3([
    Property()
], EventSettings.prototype, "tooltipTemplate", void 0);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Represents the Schedule component that displays a list of events scheduled against specific date and timings,
 * thus helping us to plan and manage it properly.
 * ```html
 * <div id="schedule"></div>
 * ```
 * ```typescript
 * <script>
 *   var scheduleObj = new Schedule();
 *   scheduleObj.appendTo("#schedule");
 * </script>
 * ```
 */
let Schedule = class Schedule extends Component {
    /**
     * Constructor for creating the Schedule widget
     * @hidden
     */
    constructor(options, element) {
        super(options, element);
    }
    /**
     * Core method that initializes the control rendering.
     * @private
     */
    render() {
        addClass([this.element], ROOT);
        if (this.enableRtl) {
            addClass([this.element], RTL);
        }
        else {
            removeClass([this.element], RTL);
        }
        if (this.isAdaptive) {
            addClass([this.element], DEVICE);
        }
        else {
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
    validateDate() {
        // persist the selected date value
        this.setProperties({ selectedDate: new Date('' + this.selectedDate) }, true);
    }
    setViewOptions(isModuleLoad = false) {
        this.viewOptions = {};
        let viewName;
        let selectedView;
        for (let view of this.views) {
            let isOptions = (typeof view === 'string') ? false : true;
            if (typeof view === 'string') {
                viewName = view;
            }
            else {
                viewName = view.option;
                if (view.isSelected) {
                    selectedView = viewName;
                }
            }
            let obj = extend({ option: viewName }, isOptions ? view : {});
            let fieldViewName = viewName.charAt(0).toLowerCase() + viewName.slice(1);
            this.viewOptions[fieldViewName] = obj;
        }
        if (!isModuleLoad && selectedView) {
            this.setProperties({ currentView: selectedView }, true);
        }
    }
    getActiveViewOptions(viewName) {
        let scheduleOptions = {
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
    initializeDataModule() {
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
            recurrenceException: this.eventSettings.fields.recurrenceException.name,
        };
        this.dataModule = new Data(this.eventSettings.dataSource, this.eventSettings.query);
        this.crudModule = new Crud(this);
    }
    initializeView(viewName) {
        this.activeViewOptions = this.getActiveViewOptions(viewName);
        this.initializeTemplates();
        this.renderModule.render(viewName);
    }
    initializeTemplates() {
        this.cellTemplateFn = this.templateParser(this.activeViewOptions.cellTemplate);
        this.dateHeaderTemplateFn = this.templateParser(this.activeViewOptions.dateHeaderTemplate);
        this.appointmentTemplateFn = this.templateParser(this.activeViewOptions.eventTemplate);
    }
    initializePopups() {
        if (this.eventSettings.enableTooltip) {
            this.eventTooltip = new EventTooltip(this);
        }
        this.eventWindow = new EventWindow(this);
        this.quickPopup = new QuickPopups(this);
    }
    getDayNames(type) {
        let culShortNames = [];
        let cldrObj;
        if (this.locale === 'en' || this.locale === 'en-US') {
            cldrObj = (getValue('days.stand-alone.' + type, getDefaultDateObject()));
        }
        else {
            cldrObj = (getValue('main.' + '' + this.locale + '.dates.calendars.gregorian.days.format.' + type, cldrData));
        }
        for (let obj of Object.keys(cldrObj)) {
            culShortNames.push(getValue(obj, cldrObj));
        }
        return culShortNames;
    }
    changeView(view, event, muteOnChange) {
        if (!muteOnChange && view === this.currentView) {
            return;
        }
        let args = { requestType: 'viewNavigate', cancel: false, event: event };
        this.trigger(actionBegin, args);
        if (args.cancel) {
            return;
        }
        let navArgs = { action: 'view', cancel: false, previousView: this.currentView, currentView: view };
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
    changeDate(selectedDate, event) {
        let args = { requestType: 'dateNavigate', cancel: false, event: event };
        this.trigger(actionBegin, args);
        if (args.cancel) {
            return;
        }
        let navArgs = {
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
    isSelectedDate(date) {
        return date.setHours(0, 0, 0, 0) === new Date('' + this.selectedDate).setHours(0, 0, 0, 0);
    }
    animateLayout() {
        new Animation({ duration: 600, name: 'FadeIn', timingFunction: 'easeIn' }).animate(this.activeView.element);
    }
    /**
     * To provide the array of modules needed for control rendering
     * @return {ModuleDeclaration[]}
     * @hidden
     */
    requiredModules() {
        let modules = [];
        this.setViewOptions(true);
        for (let view of Object.keys(this.viewOptions)) {
            modules.push({
                member: view,
                args: [this]
            });
        }
        return modules;
    }
    /**
     * Initializes the values of private members.
     * @private
     */
    preRender() {
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
    /**
     * Binding events to the Schedule element.
     * @hidden
     */
    wireEvents() {
        let resize = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        EventHandler.add(window, resize, this.onScheduleResize, this);
        EventHandler.add(document, Browser.touchStartEvent, this.onDocumentClick, this);
        if (this.allowKeyboardInteraction) {
            this.keyboardInteractionModule = new KeyboardInteraction(this);
        }
    }
    removeSelectedClass() {
        let selectedCells = this.getSelectedElements();
        for (let cell of selectedCells) {
            cell.setAttribute('aria-selected', 'false');
            cell.removeAttribute('tabindex');
        }
        removeClass(selectedCells, SELECTED_CELL_CLASS);
    }
    addSelectedClass(cells, focusCell) {
        for (let cell of cells) {
            cell.setAttribute('aria-selected', 'true');
        }
        addClass(cells, SELECTED_CELL_CLASS);
        focusCell.setAttribute('tabindex', '0');
        focusCell.focus();
    }
    selectCell(element) {
        this.removeSelectedClass();
        this.addSelectedClass([element], element);
    }
    getSelectedElements() {
        return [].slice.call(this.element.querySelectorAll('.' + SELECTED_CELL_CLASS));
    }
    getAllDayRow() {
        return this.element.querySelector('.' + ALLDAY_ROW_CLASS);
    }
    getContentTable() {
        return this.element.querySelector('.' + CONTENT_TABLE_CLASS);
    }
    getWorkCellElements() {
        return [].slice.call(this.element.querySelectorAll('.' + WORK_CELLS_CLASS));
    }
    getIndexOfDate(collection, date) {
        return collection.map(Number).indexOf(+date);
    }
    isAllDayCell(td) {
        if (this.currentView === 'Month' || td.classList.contains(ALLDAY_CELLS_CLASS) ||
            td.classList.contains(HEADER_CELLS_CLASS)) {
            return true;
        }
        return false;
    }
    getDateFromElement(td) {
        if (!isNullOrUndefined(td.getAttribute('data-date'))) {
            let dateInMS = parseInt(td.getAttribute('data-date'), 10);
            return new Date(dateInMS);
        }
        return undefined;
    }
    getCellTemplate() {
        return this.cellTemplateFn;
    }
    getDateHeaderTemplate() {
        return this.dateHeaderTemplateFn;
    }
    getAppointmentTemplate() {
        return this.appointmentTemplateFn;
    }
    getEventTooltipTemplate() {
        return this.eventTooltipTemplateFn;
    }
    getEditorTemplate() {
        return this.editorTemplateFn;
    }
    onDocumentClick(args) {
        this.notify(documentClick, { event: args });
    }
    onScheduleResize(args) {
        if (this.currentView === 'Month') {
            this.notify(dataReady, {});
        }
    }
    templateParser(template) {
        if (template) {
            try {
                if (document.querySelectorAll(template).length) {
                    return compile(document.querySelector(template).innerHTML.trim());
                }
            }
            catch (error) {
                return compile(template);
            }
        }
        return undefined;
    }
    /**
     * Unbinding events from the element on widget destroy.
     * @hidden
     */
    unwireEvents() {
        let resize = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        EventHandler.remove(window, resize, this.onScheduleResize);
        EventHandler.remove(document, 'click', this.onDocumentClick);
        if (this.keyboardInteractionModule) {
            this.keyboardInteractionModule.destroy();
        }
    }
    /**
     * Core method to return the component name.
     * @private
     */
    getModuleName() {
        return 'schedule';
    }
    /**
     * Returns the properties to be maintained in the persisted state.
     * @private
     */
    getPersistData() {
        return this.addOnPersist(['currentView', 'selectedDate']);
    }
    /**
     * Called internally, if any of the property value changed.
     * @private
     */
    onPropertyChanged(newProp, oldProp) {
        let requireRefresh = false;
        for (let prop of Object.keys(newProp)) {
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
                    let cssProps = this.enableRtl ? { border: 'borderLeftWidth', padding: 'paddingLeft' } :
                        { border: 'borderRightWidth', padding: 'paddingRight' };
                    let uiArgs = { cssProperties: cssProps };
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
                    }
                    else {
                        removeClass([this.element], RTL);
                    }
                    requireRefresh = true;
                    break;
                default:
                    this.extendedPropertyChange(prop, newProp, oldProp);
                    break;
            }
        }
        if (requireRefresh) {
            this.initializeView(this.currentView);
        }
    }
    extendedPropertyChange(prop, newProp, oldProp) {
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
    onEventSettingsPropertyChanged(newProp, oldProp) {
        let requireRefresh = false;
        for (let prop of Object.keys(newProp)) {
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
        if (requireRefresh) {
            this.renderModule.refreshDataManager();
        }
    }
    /**
     * Sets different working hours on the required working days by accepting the required start and end time as well as the date collection
     *  as its parameters.
     * @method setWorkHours
     * @param {date} dates Collection of dates on which the given start and end hour range needs to be applied.
     * @param {string} start Defines the work start hour.
     * @param {string} end Defines the work end hour.
     * @returns {void}
     */
    setWorkHours(dates, start, end) {
        let startHour = this.globalize.parseDate(start, { skeleton: 'Hm' });
        let endHour = this.globalize.parseDate(end, { skeleton: 'Hm' });
        let tableEle = this.getContentTable();
        if (isNullOrUndefined(startHour) || isNullOrUndefined(endHour) || !tableEle) {
            return;
        }
        startHour.setMilliseconds(0);
        endHour.setMilliseconds(0);
        let viewStartHour = this.activeView.getStartHour();
        if (startHour < viewStartHour) {
            startHour = viewStartHour;
        }
        if (endHour > this.activeView.getEndHour()) {
            endHour = this.activeView.getEndHour();
        }
        let msMajorInterval = 60 * MS_PER_MINUTE;
        let msInterval = msMajorInterval / 2;
        let startIndex = Math.round((getDateInMs(startHour) - getDateInMs(viewStartHour)) / msInterval);
        let endIndex = Math.ceil((getDateInMs(endHour) - getDateInMs(viewStartHour)) / msInterval);
        let cells = [];
        for (let date of dates) {
            resetTime(date);
            let colIndex = this.getIndexOfDate(this.activeView.renderDates, date);
            if (colIndex >= 0) {
                for (let i = startIndex; i < endIndex; i++) {
                    cells.push(tableEle.rows[i].cells[colIndex]);
                }
            }
        }
        addClass(cells, WORK_HOURS_CLASS);
    }
    /**
     * Retrieves the start and end time information of the specific cell element.
     * @method getCellDetails
     * @param  {Element} td The cell element whose start and end time details are to be retrieved.
     * @returns {CellClickEventArgs} Object An object holding the startTime, endTime and all-day information along with the target HTML
     *  element will be returned.
     */
    getCellDetails(td) {
        let startTime = this.getDateFromElement(td);
        let endTime;
        if (td.classList.contains(ALLDAY_CELLS_CLASS) || td.classList.contains(HEADER_CELLS_CLASS)) {
            endTime = addDays(new Date(startTime.getTime()), 1);
        }
        else {
            endTime = this.activeView.getEndDateFromStartDate(startTime);
        }
        let data = {
            startTime: startTime,
            endTime: endTime,
            isAllDay: this.isAllDayCell(td),
            element: td
        };
        return data;
    }
    /**
     * Scrolls the Schedule content area to the specified time.
     * @method scrollTo
     * @param {string} hour Accepts the time value in the skeleton format of 'Hm'.
     * @returns {void}
     */
    scrollTo(hour) {
        if (this.activeView.scrollToHour) {
            this.activeView.scrollToHour(hour);
        }
    }
    /**
     * Adds the newly created event into the Schedule dataSource.
     * @method addEvent
     * @param {Object | Object[]} data Single or collection of event objects to be added into Schedule.
     * @returns {void}
     */
    addEvent(data) {
        this.crudModule.addEvent(data);
    }
    /**
     * Updates the changes made in the event object by passing it as an parameter into the dataSource.
     * @method saveEvent
     * @param {[key: string]: Object} data Single or collection of event objects to be saved into Schedule.
     * @param {CurrentAction} currentAction Denotes the action that takes place either for editing occurrence or series.
     *  The valid current action names are `EditOccurrence` or `EditSeries`.
     * @returns {void}
     */
    saveEvent(data, currentAction) {
        this.crudModule.saveEvent(data, currentAction);
    }
    /**
     * Deletes the events based on the provided ID or event collection in the argument list.
     * @method deleteEvent
     * @param {{[key: string]: Object}} id Single event objects to be removed from the Schedule.
     * @param {{[key: string]: Object }[]} id Collection of event objects to be removed from the Schedule.
     * @param {string | number} id Accepts the ID of the event object which needs to be removed from the Schedule.
     * @param {CurrentAction} currentAction Denotes the delete action that takes place either on occurrence or series events.
     *  The valid current action names are `Delete`, `DeleteOccurrence` or `DeleteSeries`.
     * @returns {void}
     */
    deleteEvent(id, currentAction) {
        this.crudModule.deleteEvent(id, currentAction);
    }
    /**
     * Retrieves the entire collection of events bound to the Schedule.
     * @method getEvents
     * @returns {Object[]} Returns the collection of event objects from the Schedule.
     */
    getEvents() {
        return this.eventsData;
    }
    /**
     * Retrieves the occurrences of a single recurrence event based on the provided parent ID.
     * @method getOccurrencesByID
     * @param {number} eventID ID of the parent recurrence data from which the occurrences are fetched.
     * @returns {Object[]} Returns the collection of occurrence event objects.
     */
    getOccurrencesByID(eventID) {
        let occurrenceObj = this.eventBase.getOccurrencesByID(eventID);
        return occurrenceObj;
    }
    /**
     * Retrieves all the occurrences that lies between the specific start and end time range.
     * @method getOccurrencesByRange
     * @param {Date} startTime Denotes the start time range.
     * @param {Date} endTime Denotes the end time range.
     * @returns {Object[]} Returns the collection of occurrence event objects that lies between the provided start and end time.
     */
    getOccurrencesByRange(startTime, endTime) {
        let occurrenceObj = this.eventBase.getOccurrencesByRange(startTime, endTime);
        return occurrenceObj;
    }
    /**
     * Retrieves the events that lies on the current date range of the active view of Schedule.
     * @method getCurrentViewEvents
     * @returns {Object[]} Returns the collection of events.
     */
    getCurrentViewEvents() {
        return this.eventsProcessed;
    }
    /**
     * Refreshes the event dataSource. This method may be useful when the events alone in the Schedule needs to be re-rendered.
     * @method refreshEvents
     * @returns {void}
     */
    refreshEvents() {
        this.renderModule.refreshDataManager();
    }
    /**
     * To get the appointment object from element.
     * @method getEventDetails
     * @param {Element} element Denotes the event UI element on the Schedule.
     * @returns {Object} Returns the event details.
     */
    getEventDetails(element) {
        let guid = element.getAttribute('data-guid');
        if (guid) {
            return this.eventBase.getEventByGuid(guid);
        }
        return {};
    }
    /**
     * To check whether the given time range slots are available for event creation or already occupied by other events.
     * @method isSlotAvailable
     * @param {Date} startTime Denotes the start time of the slot.
     * @param {Date} endTime Denotes the end time of the slot.
     * @returns {boolean} Returns true, if the slot that lies in the provided time range does not contain any other events.
     */
    isSlotAvailable(startTime, endTime) {
        let getAvailableObject = this.eventBase.filterEvents(startTime, endTime);
        return (getAvailableObject.length) ? false : true;
    }
    /**
     * To manually open the event editor on specific time or on certain events.
     * @method openEditor
     * @param {Object} data It can be either cell data or event data.
     * @param {CurrentAction} action Defines the action for which the editor needs to be opened such as either for new event creation or
     *  for editing of existing events. The applicable action names that can be used here are `Add`, `Save`, `EditOccurrence`
     *  and `EditSeries`.
     * @returns {void}
     */
    openEditor(data, action) {
        this.eventWindow.openEditor(data, action);
    }
    /**
     * This method has been added to adjust the size of the outer event wrapper class that holds the collection of events,
     *  while trying to set manual height and width to the Schedule cells.
     * @method adjustEventWrapper
     * @returns {void}
     */
    adjustEventWrapper() {
        this.activeView.adjustEventWrapper();
    }
    /**
     * Destroys the Schedule component.
     * @method destroy
     * @return {void}
     */
    destroy() {
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
        super.destroy();
        this.element.innerHTML = '';
        removeClass([this.element], ROOT);
    }
};
__decorate([
    Property('auto')
], Schedule.prototype, "width", void 0);
__decorate([
    Property('auto')
], Schedule.prototype, "height", void 0);
__decorate([
    Property(true)
], Schedule.prototype, "showHeaderBar", void 0);
__decorate([
    Property(true)
], Schedule.prototype, "showTimeIndicator", void 0);
__decorate([
    Property('Week')
], Schedule.prototype, "currentView", void 0);
__decorate([
    Property(['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'])
], Schedule.prototype, "views", void 0);
__decorate([
    Property(new Date())
], Schedule.prototype, "selectedDate", void 0);
__decorate([
    Property()
], Schedule.prototype, "dateFormat", void 0);
__decorate([
    Property(true)
], Schedule.prototype, "showWeekend", void 0);
__decorate([
    Property(0)
], Schedule.prototype, "firstDayOfWeek", void 0);
__decorate([
    Property([1, 2, 3, 4, 5])
], Schedule.prototype, "workDays", void 0);
__decorate([
    Property('00:00')
], Schedule.prototype, "startHour", void 0);
__decorate([
    Property('24:00')
], Schedule.prototype, "endHour", void 0);
__decorate([
    Complex({}, WorkHours)
], Schedule.prototype, "workHours", void 0);
__decorate([
    Property(true)
], Schedule.prototype, "allowKeyboardInteraction", void 0);
__decorate([
    Property()
], Schedule.prototype, "dateHeaderTemplate", void 0);
__decorate([
    Property()
], Schedule.prototype, "cellTemplate", void 0);
__decorate([
    Property(false)
], Schedule.prototype, "readonly", void 0);
__decorate([
    Property(true)
], Schedule.prototype, "showQuickInfo", void 0);
__decorate([
    Property()
], Schedule.prototype, "editorTemplate", void 0);
__decorate([
    Property(7)
], Schedule.prototype, "agendaDaysCount", void 0);
__decorate([
    Property(true)
], Schedule.prototype, "hideEmptyAgendaDays", void 0);
__decorate([
    Property()
], Schedule.prototype, "timezone", void 0);
__decorate([
    Complex({}, EventSettings)
], Schedule.prototype, "eventSettings", void 0);
__decorate([
    Property()
], Schedule.prototype, "cssClass", void 0);
__decorate([
    Property(false)
], Schedule.prototype, "enableRtl", void 0);
__decorate([
    Event()
], Schedule.prototype, "created", void 0);
__decorate([
    Event()
], Schedule.prototype, "destroyed", void 0);
__decorate([
    Event()
], Schedule.prototype, "cellClick", void 0);
__decorate([
    Event()
], Schedule.prototype, "cellDoubleClick", void 0);
__decorate([
    Event()
], Schedule.prototype, "actionBegin", void 0);
__decorate([
    Event()
], Schedule.prototype, "actionComplete", void 0);
__decorate([
    Event()
], Schedule.prototype, "actionFailure", void 0);
__decorate([
    Event()
], Schedule.prototype, "navigating", void 0);
__decorate([
    Event()
], Schedule.prototype, "renderCell", void 0);
__decorate([
    Event()
], Schedule.prototype, "eventClick", void 0);
__decorate([
    Event()
], Schedule.prototype, "eventRendered", void 0);
__decorate([
    Event()
], Schedule.prototype, "dataBinding", void 0);
__decorate([
    Event()
], Schedule.prototype, "popupOpen", void 0);
__decorate([
    Event()
], Schedule.prototype, "dataBound", void 0);
Schedule = __decorate([
    NotifyPropertyChanges
], Schedule);

/**
 * view base
 */
class ViewBase {
    /**
     * Constructor
     */
    constructor(parent) {
        this.customHelper = {
            getDayName: (dt) => {
                return this.parent.getDayNames('abbreviated')[dt.getDay()];
            },
            getDate: (dt) => {
                return this.parent.globalize.formatDate(dt, { format: 'd' });
            },
            getTime: (dt) => {
                if (this.parent.isAdaptive) {
                    return this.parent.globalize.formatDate(dt, { skeleton: 'h' });
                }
                return this.parent.globalize.formatDate(dt, { skeleton: 'hm' });
            }
        };
        this.parent = parent;
        this.l10n = this.parent.localeObj;
    }
    createTableLayout(className) {
        let clsName = className || '';
        let table = createElement('table', { className: SCHEDULE_TABLE_CLASS + ' ' + clsName });
        let tbody = createElement('tbody');
        table.appendChild(tbody);
        return table;
    }
    renderPanel(type) {
        if (type === PREVIOUS_PANEL_CLASS) {
            prepend([this.element], this.parent.element.querySelector('.' + TABLE_CONTAINER_CLASS));
        }
        else {
            this.parent.element.querySelector('.' + TABLE_CONTAINER_CLASS).appendChild(this.element);
        }
    }
    setPanel(panel) {
        this.element = panel;
    }
    getPanel() {
        return this.element;
    }
    adjustEventWrapper() {
        // Here adjust the events wrapper width based in work cells
    }
    startDate() {
        return this.renderDates[0];
    }
    endDate() {
        return addDays(this.renderDates[this.renderDates.length - 1], 1);
    }
    getStartHour() {
        let startHour = this.parent.globalize.parseDate(this.parent.activeViewOptions.startHour, { skeleton: 'Hm' });
        if (isNullOrUndefined(startHour)) {
            startHour = new Date(2000, 0, 0, 0);
        }
        return startHour;
    }
    getEndHour() {
        let endHour = this.parent.globalize.parseDate(this.parent.activeViewOptions.endHour, { skeleton: 'Hm' });
        if (isNullOrUndefined(endHour)) {
            endHour = new Date(2000, 0, 0, 0);
        }
        return endHour;
    }
    isCurrentDate(date) {
        return date.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
    }
    isCurrentMonth(date) {
        return date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth();
    }
    isWorkDay(date) {
        if (this.parent.activeViewOptions.workDays.indexOf(date.getDay()) >= 0) {
            return true;
        }
        return false;
    }
    isWorkHour(date) {
        let startHour = this.parent.globalize.parseDate(this.parent.workHours.start, { skeleton: 'Hm' });
        let endHour = this.parent.globalize.parseDate(this.parent.workHours.end, { skeleton: 'Hm' });
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
    getRenderDates() {
        this.renderDates = [];
        this.renderDates.push(resetTime(this.parent.selectedDate));
    }
    getNextPreviousDate(type) {
        if (type === 'next') {
            return addDays(this.parent.selectedDate, WEEK_LENGTH);
        }
        else {
            return addDays(this.parent.selectedDate, -WEEK_LENGTH);
        }
    }
    getLabelText(view) {
        return this.parent.localeObj.getConstant(view) + ' of ' +
            this.parent.globalize.formatDate(this.parent.selectedDate, { skeleton: 'long' });
    }
    getDateRangeText() {
        if (this.parent.isAdaptive) {
            return this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
        }
        return this.formatDateRange(this.renderDates[0], this.renderDates[this.renderDates.length - 1]);
    }
    formatDateRange(startDate, endDate) {
        let globalize = this.parent.globalize;
        if (!isNullOrUndefined(this.parent.activeViewOptions.dateFormat)) {
            if (!endDate) {
                return globalize.formatDate(startDate, { format: this.parent.activeViewOptions.dateFormat });
            }
            return globalize.formatDate(startDate, { format: this.parent.activeViewOptions.dateFormat }) + ' - ' +
                globalize.formatDate(endDate, { format: this.parent.activeViewOptions.dateFormat });
        }
        let formattedStr;
        let longDateFormat;
        if (this.parent.locale === 'en' || this.parent.locale === 'en-US') {
            longDateFormat = getValue('dateFormats.long', getDefaultDateObject());
        }
        else {
            longDateFormat = getValue('main.' + '' + this.parent.locale + '.dates.calendars.gregorian.dateFormats.long', cldrData);
        }
        if (!endDate) {
            return globalize.formatDate(startDate, { format: longDateFormat });
        }
        let dateFormat = longDateFormat.trim().toLocaleLowerCase();
        if (dateFormat.substr(0, 1) === 'd') {
            if (startDate.getFullYear() === endDate.getFullYear()) {
                if (startDate.getMonth() === endDate.getMonth()) {
                    formattedStr = globalize.formatDate(startDate, { format: 'dd' }) + ' - ' +
                        globalize.formatDate(endDate, { format: 'dd MMMM yyyy' });
                }
                else {
                    formattedStr = globalize.formatDate(startDate, { format: 'dd MMM' }) + ' - ' +
                        globalize.formatDate(endDate, { format: 'dd MMM yyyy' });
                }
            }
            else {
                formattedStr = globalize.formatDate(startDate, { format: 'dd MMM yyyy' }) + ' - ' +
                    globalize.formatDate(endDate, { format: 'dd MMM yyyy' });
            }
        }
        else if (dateFormat.substr(0, 1) === 'm') {
            if (startDate.getFullYear() === endDate.getFullYear()) {
                if (startDate.getMonth() === endDate.getMonth()) {
                    formattedStr = globalize.formatDate(startDate, { format: 'MMMM dd' }) + ' - ' +
                        globalize.formatDate(endDate, { format: 'dd, yyyy' });
                }
                else {
                    formattedStr = globalize.formatDate(startDate, { format: 'MMM dd' }) + ' - ' +
                        globalize.formatDate(endDate, { format: 'MMM dd, yyyy' });
                }
            }
            else {
                formattedStr = globalize.formatDate(startDate, { format: 'MMM dd, yyyy' }) + ' - ' +
                    globalize.formatDate(endDate, { format: 'MMM dd, yyyy' });
            }
        }
        else {
            formattedStr = globalize.formatDate(startDate, { format: longDateFormat }) + ' - ' +
                globalize.formatDate(endDate, { format: longDateFormat });
        }
        return formattedStr;
    }
    getMobileDateElement(date, className) {
        let wrap = createElement('div', { className: className });
        let dateEle = createElement('div', { className: 'e-m-date' });
        dateEle.innerHTML = this.parent.globalize.formatDate(date, { format: 'd' });
        let dayEle = createElement('div', { className: 'e-m-day' });
        dayEle.innerHTML = this.parent.globalize.formatDate(date, { format: 'E' });
        wrap.appendChild(dateEle);
        wrap.appendChild(dayEle);
        return wrap;
    }
}

/**
 * Work cell interactions
 */
class WorkCellInteraction {
    constructor(parent) {
        this.parent = parent;
    }
    cellMouseDown(e) {
        this.parent.notify(cellMouseDown, { event: e });
    }
    cellClick(e) {
        if (closest(e.target, '.' + APPOINTMENT_CLASS)) {
            return;
        }
        let navigateEle = closest(e.target, '.' + NAVIGATE_CLASS);
        if (isNullOrUndefined(navigateEle) || isNullOrUndefined(this.parent.viewOptions.day) || (this.parent.currentView === 'Day')) {
            if (this.parent.activeViewOptions.readonly) {
                return;
            }
            let target = e.currentTarget;
            let isWorkCell = target.classList.contains(WORK_CELLS_CLASS) || target.classList.contains(ALLDAY_CELLS_CLASS);
            if (isWorkCell && e.shiftKey && e.which === 1 && this.parent.keyboardInteractionModule) {
                this.parent.keyboardInteractionModule.onMouseSelection(e);
                return;
            }
            this.parent.activeCellsData = this.parent.getCellDetails(target);
            let args = extend(this.parent.activeCellsData, { cancel: false, event: e, name: 'cellClick' });
            this.parent.trigger(cellClick, args);
            if (args.cancel) {
                return;
            }
            if (isWorkCell) {
                this.parent.selectCell(target);
            }
            this.parent.notify(cellClick, args);
        }
        else {
            let date = this.parent.getDateFromElement(e.currentTarget);
            if (!isNullOrUndefined(date) && !this.parent.isAdaptive) {
                this.parent.setProperties({ selectedDate: date }, true);
                this.parent.changeView('Day');
            }
        }
    }
    cellDblClick(e) {
        let target = closest(e.target, '.' + APPOINTMENT_CLASS);
        if (!isNullOrUndefined(target) || this.parent.activeViewOptions.readonly) {
            return;
        }
        let args = extend(this.parent.activeCellsData, { cancel: false, event: e, name: 'cellDoubleClick' });
        this.parent.trigger(cellDoubleClick, args);
        if (args.cancel) {
            return;
        }
        this.parent.eventWindow.openEditor(this.parent.activeCellsData, 'Add');
    }
}

/**
 * Vertical view appointment rendering
 */
class AppointmentRendering extends EventBase {
    /**
     * Constructor for vertical view
     */
    constructor(parent) {
        super(parent);
        this.renderedEvents = [];
        this.renderedAllDayEvents = [];
        this.overlapEvents = [];
        this.moreEvents = [];
        this.minorSlotCount = 2;
        this.majorSlot = 60;
        this.allDayLevel = 0;
        this.startHour = this.parent.activeView.getStartHour();
        this.endHour = this.parent.activeView.getEndHour();
        this.element = this.parent.activeView.getPanel();
        this.fields = this.parent.eventFields;
        this.animation = new Animation({ progress: this.animationUiUpdate.bind(this) });
        this.addEventListener();
    }
    renderAppointments() {
        let expandCollapse = this.element.querySelector('.' + ALLDAY_APPOINTMENT_SECTION_CLASS);
        EventHandler.remove(expandCollapse, 'click', this.rowExpandCollapse);
        EventHandler.add(expandCollapse, 'click', this.rowExpandCollapse, this);
        let appointmentWrapper = [].slice.call(this.element.querySelectorAll('.' + APPOINTMENT_CLASS));
        for (let wrap of appointmentWrapper) {
            remove(wrap);
        }
        let alldayCountWrapper = [].slice.call(this.element.querySelectorAll('.' + ROW_COUNT_WRAPPER_CLASS));
        for (let wrap of alldayCountWrapper) {
            remove(wrap);
        }
        this.allDayElement = [].slice.call(this.element.querySelectorAll('.' + ALLDAY_CELLS_CLASS + ':first-child'));
        this.setAllDayRowHeight(0);
        this.renderedEvents = [];
        this.renderedAllDayEvents = [];
        let allDayEvents = [];
        this.dateRender = this.parent.activeView.renderDates;
        this.cellHeight = this.element.querySelector('.' + WORK_CELLS_CLASS).offsetHeight;
        let eventsList = this.parent.eventsProcessed;
        if (eventsList.length > 0) {
            for (let day = 0, length = this.dateRender.length; day < length; day++) {
                this.renderedEvents = [];
                let startDateTime = new Date(this.dateRender[day].getTime());
                let endDateTime = addDays(this.dateRender[day], 1);
                let filterEvents = this.filterEvents(startDateTime, endDateTime);
                for (let count = 0, length1 = filterEvents.length; count < length1; count++) {
                    let event = filterEvents[count];
                    if (this.isAllDayAppointment(event)) {
                        allDayEvents.push(extend({}, event, null, true));
                    }
                    else {
                        this.renderVerticalEvents(event, day);
                    }
                }
            }
            if (allDayEvents.length > 0) {
                allDayEvents = allDayEvents.filter((item, index, arr) => {
                    return index === arr.map((item) => item.Guid).indexOf(item.Guid);
                });
                removeClass(this.allDayElement, ALLDAY_ROW_ANIMATE_CLASS);
                this.renderAllDayEvents(this.sortByDateTime(allDayEvents));
            }
            this.parent.notify(contentReady, {});
            addClass(this.allDayElement, ALLDAY_ROW_ANIMATE_CLASS);
        }
    }
    createAppointmentElement(record, isAllDay, data) {
        let fieldMapping = this.parent.eventFields;
        let appointmentWrapper = createElement('div', {
            id: 'Appointment_' + record[fieldMapping.id],
            className: APPOINTMENT_CLASS,
            attrs: {
                'data-guid': record.Guid,
                'role': 'button',
                'tabindex': '0',
                'aria-readonly': 'false',
                'aria-selected': 'false',
                'aria-grabbed': 'true',
                'aria-label': isNullOrUndefined(record[fieldMapping.subject]) ?
                    this.parent.eventSettings.fields.subject.default : record[fieldMapping.subject]
            }
        });
        let appointmentDetails = createElement('div', { className: APPOINTMENT_DETAILS });
        appointmentWrapper.appendChild(appointmentDetails);
        let templateElement;
        let eventData = data;
        if (!isNullOrUndefined(this.parent.activeViewOptions.eventTemplate)) {
            templateElement = this.parent.getAppointmentTemplate()(record);
        }
        else {
            let recordSubject = isNullOrUndefined(record[fieldMapping.subject]) ?
                this.parent.eventSettings.fields.subject.default : record[fieldMapping.subject];
            let appointmentSubject = createElement('div', {
                className: APPOINTMENT_SUBJECT,
                innerHTML: recordSubject
            });
            if (isAllDay) {
                if (record[fieldMapping.isAllDay]) {
                    templateElement = [appointmentSubject];
                }
                else {
                    templateElement = [];
                    let appointmentStartTime = createElement('div', {
                        className: APPOINTMENT_TIME + (this.parent.isAdaptive ? ' ' + DISABLE_CLASS : ''),
                        innerHTML: this.parent.globalize.formatDate(record[fieldMapping.startTime], { skeleton: 'hm' })
                    });
                    let appointmentEndTime = createElement('div', {
                        className: APPOINTMENT_TIME + (this.parent.isAdaptive ? ' ' + DISABLE_CLASS : ''),
                        innerHTML: this.parent.globalize.formatDate(record[fieldMapping.endTime], { skeleton: 'hm' }),
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
            }
            else {
                let timeStr = this.parent.globalize.formatDate(record[fieldMapping.startTime], { skeleton: 'hm' }) + ' - ' +
                    this.parent.globalize.formatDate(record[fieldMapping.endTime], { skeleton: 'hm' });
                let appointmentTime = createElement('div', {
                    className: APPOINTMENT_TIME + (this.parent.isAdaptive ? ' ' + DISABLE_CLASS : ''),
                    innerHTML: timeStr,
                });
                let appointmentLocation = createElement('div', {
                    className: APPOINTMENT_LOCATION, innerHTML: record[fieldMapping.location]
                });
                templateElement = [appointmentSubject, appointmentTime, appointmentLocation];
            }
        }
        append([].slice.call(templateElement), appointmentDetails);
        if (!isNullOrUndefined(record[fieldMapping.recurrenceRule])) {
            let iconClass = (record[fieldMapping.id] === record[fieldMapping.recurrenceID]) ?
                EVENT_RECURRENCE_ICON_CLASS : EVENT_RECURRENCE_EDIT_ICON_CLASS;
            let recurrenceIcon = createElement('div', {
                className: ICON + ' ' + iconClass + (this.parent.isAdaptive ? ' ' + DISABLE_CLASS : '')
            });
            isAllDay ? appointmentDetails.appendChild(recurrenceIcon) : appointmentWrapper.appendChild(recurrenceIcon);
        }
        if (isAllDay) {
            this.renderSpannedIcon(appointmentDetails, eventData, isAllDay);
        }
        else {
            this.renderSpannedIcon(appointmentWrapper, eventData, isAllDay);
        }
        return appointmentWrapper;
    }
    createMoreIndicator(allDayRow, count, currentDay) {
        let countWrapper = allDayRow[currentDay + count];
        if (countWrapper.childElementCount <= 0) {
            let innerCountWrap = createElement('div', {
                className: ROW_COUNT_WRAPPER_CLASS,
                id: ROW_COUNT_WRAPPER_CLASS + '-' + (currentDay + count).toString()
            });
            let moreIndicatorElement = createElement('div', {
                className: MORE_INDICATOR_CLASS,
                attrs: { 'tabindex': '0', 'data-index': (currentDay + count).toString(), 'data-count': '1' },
                innerHTML: '+1&nbsp;' + (this.parent.isAdaptive ? '' : this.parent.localeObj.getConstant('more'))
            });
            innerCountWrap.appendChild(moreIndicatorElement);
            countWrapper.appendChild(innerCountWrap);
            EventHandler.add(moreIndicatorElement, 'click', this.rowExpandCollapse, this);
        }
        else {
            let countCell = countWrapper.firstChild;
            countCell.firstChild.setAttribute('data-count', (parseInt(countCell.firstChild.getAttribute('data-count'), 10) + 1).toString());
            countCell.firstChild.innerHTML =
                '+' + (parseInt(countCell.firstChild.getAttribute('data-count'), 10)).toString() + '&nbsp;' +
                    (this.parent.isAdaptive ? '' : this.parent.localeObj.getConstant('more'));
        }
    }
    renderSpannedIcon(element, spanEvent, isAllDay) {
        if (isAllDay) {
            if (spanEvent.isLeft) {
                let iconLeft = createElement('div', {
                    className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_LEFT_CLASS
                });
                prepend([iconLeft], element);
            }
            if (spanEvent.isRight) {
                let iconRight = createElement('div', {
                    className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_RIGHT_CLASS
                });
                append([iconRight], element);
            }
        }
        else {
            if (spanEvent.isTop) {
                let iconTop = createElement('div', {
                    className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_UP_CLASS
                });
                prepend([iconTop], element);
            }
            if (spanEvent.isBottom) {
                let iconBottom = createElement('div', {
                    className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_DOWN_CLASS
                });
                append([iconBottom], element);
            }
        }
    }
    isSpannedEvent(record, day) {
        let currentDate = resetTime(this.dateRender[day]);
        let fieldMapping = this.parent.eventFields;
        let startEndHours = getStartEndHours(currentDate, this.startHour, this.endHour);
        let event = extend({}, record, null, true);
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
    renderAllDayEvents(event) {
        this.moreEvents = [];
        this.overlapList = [];
        this.allDayLevel = 0;
        this.slots = [];
        this.slots.push(this.dateRender.map((date) => { return +date; }));
        for (let day = 0, length = this.dateRender.length; day < length; day++) {
            let fieldMapping = this.parent.eventFields;
            let filterEvents = this.filterEvents(new Date(this.dateRender[day].getTime()), addDays(this.dateRender[day], 1), event);
            let allDayRowCell = this.element.querySelector('.' + ALLDAY_CELLS_CLASS + ':first-child');
            let eventWrapper = this.element.querySelector('.' + ALLDAY_WRAPPER_CLASS + ':nth-child(' + (day + 1) + ')');
            for (let count = 0, length1 = filterEvents.length; count < length1; count++) {
                let eventObj = filterEvents[count];
                let record = this.splitEvent(eventObj, this.dateRender)[0];
                let cellTop = allDayRowCell.offsetTop;
                let eStart = new Date(record[fieldMapping.startTime].getTime());
                let eEnd = new Date(record[fieldMapping.endTime].getTime());
                let dates = this.dateRender;
                let appWidth = 0;
                let topValue = 1;
                let isDateRange = dates[0].getTime() <= eStart.getTime() &&
                    addDays(dates[dates.length - 1], 1).getTime() >= eStart.getTime();
                if (eStart <= eEnd && isDateRange) {
                    let isAlreadyRendered = this.renderedAllDayEvents.filter((event) => {
                        return event.Guid === eventObj.Guid;
                    });
                    if (isAlreadyRendered.length === 0) {
                        let allDayDifference = record.data.count;
                        let allDayIndex = this.getOverlapIndex(record, day, true);
                        record.Index = allDayIndex;
                        this.allDayLevel = (this.allDayLevel < allDayIndex) ? allDayIndex : this.allDayLevel;
                        let widthAdjustment = record.data.isRight ? 0 :
                            this.parent.currentView === 'Day' ? 4 : 7;
                        if (allDayDifference >= 0) {
                            appWidth = (allDayDifference * 100) - widthAdjustment;
                        }
                        this.renderedAllDayEvents.push(extend({}, record, null, true));
                        let allDayRow = [].slice.call(this.element.querySelector('.' + ALLDAY_ROW_CLASS).children);
                        let appointmentElement = this.createAppointmentElement(eventObj, true, record.data);
                        addClass([appointmentElement], ALLDAY_APPOINTMENT_CLASS);
                        eventWrapper.appendChild(appointmentElement);
                        let appHeight = appointmentElement.offsetHeight;
                        topValue += (allDayIndex === 0 ? cellTop : (cellTop + (allDayIndex * appHeight))) + 1;
                        setStyleAttribute(appointmentElement, { 'width': appWidth + '%', 'top': topValue + 'px' });
                        let args = { data: eventObj, element: appointmentElement };
                        this.parent.trigger(eventRendered, args);
                        if (allDayIndex > 1) {
                            this.moreEvents.push(appointmentElement);
                            for (let count = 0, length = allDayDifference; count < length; count++) {
                                this.createMoreIndicator(allDayRow, count, day);
                            }
                        }
                        allDayRowCell.setAttribute('data-count', this.allDayLevel.toString());
                        let allDayRowHeight = ((!this.parent.uiStateValues.expand && this.allDayLevel > 2) ?
                            (3 * appHeight) : ((this.allDayLevel + 1) * appHeight)) + 4;
                        this.setAllDayRowHeight(allDayRowHeight);
                        this.addOrRemoveClass();
                        this.wireAppointmentEvents(appointmentElement);
                    }
                }
            }
        }
    }
    renderVerticalEvents(eventObj, day) {
        let record = this.isSpannedEvent(eventObj, day);
        let eStart = record[this.fields.startTime];
        let eEnd = record[this.fields.endTime];
        let appWidth = '0%';
        let appLeft = '0%';
        let topValue = 0;
        let isDateRange = this.dateRender[0].getTime() <= eStart.getTime() &&
            addDays(this.dateRender[this.dateRender.length - 1], 1).getTime() >= eStart.getTime();
        if (eStart < eEnd && isDateRange) {
            let appHeight = 0;
            let startEndHours = getStartEndHours(resetTime(this.dateRender[day]), this.startHour, this.endHour);
            if (startEndHours.endHour.getTime() <= eEnd.getTime() && startEndHours.startHour.getTime() >= eStart.getTime()) {
                appHeight = this.getAppointmentHeight(this.cellHeight, startEndHours.startHour, startEndHours.endHour);
            }
            else if (startEndHours.endHour.getTime() <= eEnd.getTime()) {
                appHeight = this.getAppointmentHeight(this.cellHeight, eStart, startEndHours.endHour);
            }
            else if (startEndHours.startHour.getTime() >= eStart.getTime()) {
                appHeight = this.getAppointmentHeight(this.cellHeight, startEndHours.startHour, eEnd);
            }
            else {
                appHeight = (eEnd.getTime() - eStart.getTime()) / (60 * 1000) * (this.cellHeight * this.minorSlotCount) / this.majorSlot;
            }
            appHeight = (appHeight < this.cellHeight) ? this.cellHeight : appHeight;
            if (eStart.getTime() > startEndHours.startHour.getTime()) {
                topValue = this.getTopValue(eStart, day);
            }
            let appIndex = this.getOverlapIndex(record, day, false);
            record.Index = appIndex;
            this.overlapList.push(record);
            if (this.overlapList.length > 1) {
                (isNullOrUndefined(this.overlapEvents[appIndex])) ? this.overlapEvents[appIndex] = [record] :
                    this.overlapEvents[appIndex].push(record);
            }
            else {
                this.overlapEvents = [];
                this.overlapEvents.push([record]);
            }
            let width = this.parent.currentView === 'Day' ? 97 : 94;
            appWidth = ((width - this.overlapEvents.length) / this.overlapEvents.length) + '%';
            let argsData = { index: appIndex, left: appLeft, width: appWidth, day: day, record: record };
            let tempData = this.adjustOverlapElements(argsData);
            appWidth = (tempData.appWidth);
            this.renderedEvents.push(extend({}, record, null, true));
            let appointmentWrap = [].slice.call(this.element.querySelector('.' + APPOINTMENT_WRAPPER_CLASS).children);
            let appointmentElement = this.createAppointmentElement(eventObj, false, record.isSpanned);
            setStyleAttribute(appointmentElement, { 'width': tempData.appWidth, 'height': appHeight + 'px', 'top': topValue + 'px' });
            let iconHeight = appointmentElement.querySelectorAll('.' + EVENT_INDICATOR_CLASS).length * 15;
            let maxHeight = appHeight - 40 - iconHeight;
            if (!this.parent.isAdaptive && appointmentElement.querySelector('.' + APPOINTMENT_SUBJECT)) {
                appointmentElement.querySelector('.' + APPOINTMENT_SUBJECT).style.maxHeight = maxHeight + 'px';
            }
            if (this.parent.enableRtl) {
                setStyleAttribute(appointmentElement, { 'right': tempData.appLeft });
            }
            else {
                setStyleAttribute(appointmentElement, { 'left': tempData.appLeft });
            }
            appointmentWrap[argsData.day].appendChild(appointmentElement);
            let args = { data: eventObj, element: appointmentElement };
            this.parent.trigger(eventRendered, args);
            this.wireAppointmentEvents(appointmentElement);
        }
    }
    getTopValue(date, day) {
        let startEndHours = getStartEndHours(resetTime(this.dateRender[day]), this.startHour, this.endHour);
        let startHour = startEndHours.startHour;
        let diffInMinutes = ((date.getHours() - startHour.getHours()) * 60) + (date.getMinutes() - startHour.getMinutes());
        return (diffInMinutes * this.cellHeight * this.minorSlotCount) / this.majorSlot;
    }
    getAppointmentHeight(cellHeight, startDate, endDate) {
        return (((endDate.getTime() - startDate.getTime()) / (1000 * 60)) / (this.majorSlot / this.minorSlotCount)) * cellHeight;
    }
    getOverlapIndex(record, day, isAllDay) {
        let fieldMapping = this.parent.eventFields;
        let eventsList;
        this.overlapEvents = [];
        if (isAllDay) {
            let date = new Date(this.dateRender[day].getTime());
            eventsList = this.renderedAllDayEvents.filter((app) => {
                return ((resetTime(app[fieldMapping.startTime]).getTime() <= resetTime(date).getTime()) &&
                    (resetTime(app[fieldMapping.endTime]).getTime() >= resetTime(date).getTime()));
            });
        }
        else {
            let appointmentList = this.renderedEvents;
            let appointment = [];
            this.overlapList = appointmentList.filter((obj) => {
                return obj[fieldMapping.endTime] > record[fieldMapping.startTime] &&
                    obj[fieldMapping.startTime] < record[fieldMapping.endTime];
            });
            this.overlapList.forEach((obj) => {
                let filterList = appointmentList.filter((list) => {
                    return list[fieldMapping.endTime] >= obj[fieldMapping.startTime] &&
                        list[fieldMapping.startTime] <= obj[fieldMapping.endTime];
                });
                let collection = this.overlapList.filter((val) => { return filterList.indexOf(val) === -1; });
                return appointment.concat(collection);
            });
            this.overlapList = this.overlapList.concat(appointment);
            eventsList = this.overlapList.filter((obj) => {
                return obj[fieldMapping.endTime] > record[fieldMapping.startTime] &&
                    obj[fieldMapping.startTime] < record[fieldMapping.endTime];
            });
            for (let event of eventsList) {
                let record = event;
                let index = record.Index;
                (isNullOrUndefined(this.overlapEvents[index])) ? this.overlapEvents[index] = [event] :
                    this.overlapEvents[index].push(event);
            }
        }
        let appIndex;
        if (eventsList.length > 0) {
            let appLevel = eventsList.map((obj) => { return obj.Index; });
            appIndex = (appLevel.length > 0) ? this.getSmallestMissingNumber(appLevel) : 0;
        }
        else {
            appIndex = -1;
        }
        return (appIndex === -1) ? 0 : appIndex;
    }
    adjustOverlapElements(args) {
        let data = { appWidth: args.width, appLeft: args.left };
        for (let i = 0, length1 = this.overlapEvents.length; i < length1; i++) {
            if (!isNullOrUndefined(this.overlapEvents[i])) {
                for (let j = 0, length2 = this.overlapEvents[i].length; j < length2; j++) {
                    let element = this.element.querySelector('#e-appointment-wrapper-' + args.day);
                    if (element.childElementCount > 0) {
                        let eleGuid = this.overlapEvents[i][j].Guid;
                        if (element.querySelectorAll('div[data-guid="' + eleGuid + '"]').length > 0 && eleGuid !== args.record.Guid) {
                            let apps = element.querySelector('div[data-guid="' + eleGuid + '"]');
                            if (parseFloat(args.width) <= parseFloat(apps.style.width)) {
                                (this.parent.enableRtl) ? apps.style.right = ((parseFloat(args.width) + 1) * i) + '%' :
                                    apps.style.left = ((parseFloat(args.width) + 1) * i) + '%';
                                apps.style.width = ((parseFloat(args.width))) + '%';
                                data.appWidth = apps.style.width;
                            }
                        }
                        else {
                            let appWidth = args.width;
                            if (isNullOrUndefined(this.overlapEvents[i - 1])) {
                                let width = this.parent.currentView === 'Day' ? 97 : 94;
                                appWidth = ((width - this.overlapEvents.length) / this.overlapEvents.length) + '%';
                            }
                            let leftPosition = ((parseInt(appWidth, 0) + 1) * args.index) + '%';
                            data.appWidth = appWidth;
                            data.appLeft = leftPosition;
                        }
                    }
                }
            }
        }
        return data;
    }
    setAllDayRowHeight(height) {
        for (let element of this.allDayElement) {
            element.style.height = (height / 12) + 'em';
        }
        this.animation.animate(this.allDayElement[0]);
    }
    addOrRemoveClass() {
        this.moreEvents.filter((element) => {
            if (!this.parent.uiStateValues.expand && this.allDayLevel > 2) {
                addClass([element], EVENT_COUNT_CLASS);
                element.setAttribute('tabindex', '-1');
            }
            else {
                removeClass([element], EVENT_COUNT_CLASS);
                element.setAttribute('tabindex', '0');
            }
        });
        let moreEventCount = this.element.querySelector('.' + ALLDAY_APPOINTMENT_SECTION_CLASS);
        if (this.parent.uiStateValues.expand) {
            removeClass([moreEventCount], APPOINTMENT_ROW_EXPAND_CLASS);
            addClass([moreEventCount], APPOINTMENT_ROW_COLLAPSE_CLASS);
        }
        else {
            removeClass([moreEventCount], APPOINTMENT_ROW_COLLAPSE_CLASS);
            addClass([moreEventCount], APPOINTMENT_ROW_EXPAND_CLASS);
        }
        (this.allDayLevel > 2) ? removeClass([moreEventCount], DISABLE_CLASS) : addClass([moreEventCount], DISABLE_CLASS);
        let countCell = [].slice.call(this.element.querySelectorAll('.' + ROW_COUNT_WRAPPER_CLASS));
        countCell.filter((element) => {
            (!this.parent.uiStateValues.expand && this.allDayLevel > 2) ? removeClass([element], DISABLE_CLASS) :
                addClass([element], DISABLE_CLASS);
        });
    }
    getEventHeight() {
        let eventElement = createElement('div', { className: APPOINTMENT_CLASS, styles: 'visibility:hidden' });
        let eventWrapper = this.element.querySelector('.' + ALLDAY_WRAPPER_CLASS + ':first-child');
        eventWrapper.appendChild(eventElement);
        let height = eventElement.offsetHeight;
        eventElement.remove();
        return height;
    }
    rowExpandCollapse(event) {
        let target = this.element.querySelector('.' + ALLDAY_APPOINTMENT_SECTION_CLASS);
        this.parent.uiStateValues.expand = target.classList.contains(APPOINTMENT_ROW_EXPAND_CLASS);
        let rowHeight;
        if (this.parent.uiStateValues.expand) {
            target.setAttribute('title', 'Collapse-all-day-section');
            target.setAttribute('aria-label', 'Collapse section');
            rowHeight = ((this.allDayLevel + 1) * this.getEventHeight()) + 4;
        }
        else {
            target.setAttribute('title', 'Expand-all-day-section');
            target.setAttribute('aria-label', 'Expand section');
            rowHeight = (3 * this.getEventHeight()) + 4;
        }
        this.setAllDayRowHeight(rowHeight);
        this.addOrRemoveClass();
        this.animation.animate(target);
    }
    animationUiUpdate() {
        this.parent.notify(contentReady, {});
    }
}

const DATE_HEADER_TEMPLATE = '<div class="e-header-day">${getDayName(date)}</div>' +
    '<div class="e-header-date e-navigate" role="link">${getDate(date)}</div>';
const MAJOR_SLOT_TEMPLATE = '<span>${getTime(date)}</span>';
const MINOR_SLOT_TEMPLATE = '&nbsp;';
/**
 * vertical view
 */
class VerticalView extends ViewBase {
    /**
     * Constructor for vertical view
     */
    constructor(parent) {
        super(parent);
        this.currentDateIndex = 0;
        this.minorSlotCount = 2;
        this.majorSlot = 60;
        this.viewClass = 'e-day-view';
        this.isInverseTableSelect = true;
        this.workCellAction = new WorkCellInteraction(parent);
    }
    addEventListener() {
        this.parent.on(scrollUiUpdate, this.scrollUiUpdate, this);
        this.parent.on(dataReady, this.renderEvents, this);
    }
    removeEventListener() {
        this.parent.off(scrollUiUpdate, this.scrollUiUpdate);
        this.parent.off(dataReady, this.renderEvents);
    }
    renderEvents() {
        let appointment = new AppointmentRendering(this.parent);
        appointment.renderAppointments();
    }
    onContentScroll(e) {
        let target = e.target;
        this.getTimeCellsElement().scrollTop = target.scrollTop;
        this.getDatesHeaderElement().firstChild.scrollLeft = target.scrollLeft;
        this.parent.uiStateValues.top = target.scrollTop;
        this.parent.uiStateValues.left = target.scrollLeft;
        this.parent.quickPopup.quickPopup.close();
    }
    scrollUiUpdate(args) {
        let headerHeight = 0;
        if (this.parent.headerModule) {
            headerHeight += this.parent.headerModule.getHeaderElement().offsetHeight;
        }
        let timecells = this.getTimeCellsElement();
        let content = this.getScrollableElement();
        let header = this.getDatesHeaderElement();
        // if (this.parent.isAdaptive) {
        //     content.style.height = 'auto';
        // } else {
        //     timecells.style.height = content.style.height = 'auto';
        // }
        let scrollerHeight = formatUnit(this.parent.element.offsetHeight - headerHeight - header.offsetHeight - 2);
        if (this.parent.isAdaptive) {
            content.style.height = scrollerHeight;
        }
        else {
            timecells.style.height = content.style.height = scrollerHeight;
        }
        let scrollBarWidth = getScrollBarWidth();
        // tslint:disable:no-any
        if (content.offsetWidth - content.clientWidth > 0) {
            header.firstChild.style[args.cssProperties.border] = scrollBarWidth > 0 ? '1px' : '0px';
            header.style[args.cssProperties.padding] = scrollBarWidth > 0 ? scrollBarWidth - 1 + 'px' : '0px';
        }
        else {
            header.firstChild.style[args.cssProperties.border] = '';
            header.style[args.cssProperties.padding] = '';
        }
        // tslint:enable:no-any
        timecells.style.paddingBottom = (content.offsetHeight - content.clientHeight > 0) ? formatUnit(scrollBarWidth) : '';
        if (this.parent.uiStateValues.isInitial) {
            this.scrollToWorkHour();
            this.parent.uiStateValues.isInitial = false;
        }
        else {
            this.getScrollableElement().scrollTop = this.parent.uiStateValues.top;
        }
    }
    scrollToWorkHour() {
        if (this.parent.workHours.highlight) {
            let firstWorkHourCell = this.element.querySelector('.' + WORK_HOURS_CLASS);
            if (firstWorkHourCell) {
                this.getScrollableElement().scrollTop = firstWorkHourCell.offsetTop;
                this.parent.uiStateValues.top = firstWorkHourCell.offsetTop;
                this.parent.uiStateValues.left = 0;
            }
        }
    }
    scrollToHour(hour) {
        let date = this.parent.globalize.parseDate(hour, { skeleton: 'Hm' });
        if (isNullOrUndefined(date)) {
            return;
        }
        this.getScrollableElement().scrollTop = this.getTopFromDateTime(date);
    }
    generateColLevels() {
        let columns = this.renderDates;
        let colLevels = [];
        let level = [];
        for (let col of columns) {
            let classList = [HEADER_CELLS_CLASS];
            if (this.isCurrentDate(col)) {
                classList.push(CURRENT_DAY_CLASS);
            }
            level.push({ date: col, type: 'dateHeader', className: classList });
        }
        colLevels.push(level);
        return colLevels;
    }
    isWorkHourRange(date) {
        return (this.getStartHour().getTime() <= date.getTime()) && (this.getEndHour().getTime() >= date.getTime());
    }
    highlightCurrentTime() {
        if (this.parent.showTimeIndicator && this.isWorkHourRange(new Date())) {
            let flag = false;
            for (let i = 0; i < this.renderDates.length; i++) {
                if (this.isCurrentDate(this.renderDates[i])) {
                    flag = true;
                    this.currentDateIndex = i;
                    break;
                }
            }
            if (flag) {
                this.changeCurrentTimePosition();
                if (isNullOrUndefined(this.currentTimeIndicatorTimer)) {
                    this.currentTimeIndicatorTimer = window.setInterval(() => { this.changeCurrentTimePosition(); }, MS_PER_MINUTE);
                }
            }
            else {
                this.clearCurrentTimeIndicatorTimer();
            }
        }
        else {
            this.clearCurrentTimeIndicatorTimer();
        }
    }
    clearCurrentTimeIndicatorTimer() {
        if (!isNullOrUndefined(this.currentTimeIndicatorTimer)) {
            window.clearInterval(this.currentTimeIndicatorTimer);
            this.currentTimeIndicatorTimer = null;
            this.removeCurrentTimeIndicatorElements();
        }
    }
    removeCurrentTimeIndicatorElements() {
        let currentTimeEle = this.element.querySelector('.' + CURRENT_TIME_CLASS);
        let timelineEle = this.element.querySelector('.' + TIMELINE_WRAPPER_CLASS);
        if (currentTimeEle) {
            remove(currentTimeEle);
        }
        if (timelineEle) {
            remove(timelineEle);
        }
    }
    changeCurrentTimePosition() {
        if (this.parent.isDestroyed) {
            return;
        }
        this.removeCurrentTimeIndicatorElements();
        let firstRow = this.parent.getContentTable().rows[0];
        let firstCell = firstRow.cells[0];
        let currentCell = firstRow.cells[this.currentDateIndex];
        let cellWidth = 100 / firstRow.cells.length;
        let prevLineWidth = (cellWidth * (currentCell.cellIndex - firstCell.cellIndex)) + '%';
        let currentLineWidth = cellWidth + '%';
        let top = this.getTopFromDateTime(new Date());
        let topInPx = formatUnit(top);
        let timeCellsWrap = this.getTimeCellsElement();
        let rowIndex = Math.floor(top / firstCell.offsetHeight);
        if (isNullOrUndefined(rowIndex)) {
            return;
        }
        removeClass(timeCellsWrap.querySelectorAll('.' + HIDE_CHILDS_CLASS), HIDE_CHILDS_CLASS);
        addClass([timeCellsWrap.querySelectorAll('tr')[rowIndex].lastChild], HIDE_CHILDS_CLASS);
        let timelineWrap = createElement('div', { className: TIMELINE_WRAPPER_CLASS });
        let previousDateTimelineEle = createElement('div', {
            className: PREVIOUS_TIMELINE_CLASS,
            styles: 'width:' + formatUnit(prevLineWidth) + '; left: 0; right: 0; top:' + topInPx
        });
        let currentDateTimelineEle = createElement('div', {
            className: CURRENT_TIMELINE_CLASS,
            styles: 'width:' + currentLineWidth + '; ' + (this.parent.enableRtl ? 'right:' : 'left:') + prevLineWidth + ';top:' + topInPx
        });
        let currentTimeEle = createElement('div', {
            innerHTML: this.parent.globalize.formatDate(new Date(), { skeleton: 'hm' }),
            className: CURRENT_TIME_CLASS,
            styles: 'width: 100%; position: absolute; left: 0; right: 0; top:' + topInPx
        });
        prepend([currentTimeEle], timeCellsWrap);
        currentTimeEle.style.top = formatUnit(currentTimeEle.offsetTop - (currentTimeEle.offsetHeight / 2));
        prepend([previousDateTimelineEle, currentDateTimelineEle], timelineWrap);
        prepend([timelineWrap], this.getContentAreaElement().querySelector('.' + WRAPPER_CLASS));
    }
    getTopFromDateTime(date) {
        let startHour = this.getStartHour();
        let diffInMinutes = ((date.getHours() - startHour.getHours()) * 60) + (date.getMinutes() - startHour.getMinutes());
        return (diffInMinutes * this.getWorkCellHeight() * this.minorSlotCount) / this.majorSlot;
    }
    getWorkCellHeight() {
        return this.element.querySelector('.e-work-cells').offsetHeight;
    }
    getTdContent(date, type) {
        let cntEle;
        switch (type) {
            case 'dateHeader':
                if (this.parent.activeViewOptions.dateHeaderTemplate) {
                    let args = { date: date, type: type };
                    cntEle = this.parent.getDateHeaderTemplate()(args);
                }
                else {
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
                    let args = { date: date, type: type };
                    cntEle = this.parent.getCellTemplate()(args);
                }
                break;
        }
        return cntEle;
    }
    renderLayout(type) {
        this.setPanel(createElement('div', { className: TABLE_WRAP_CLASS }));
        let clsList = ['e-vertical-view', this.viewClass];
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
    renderHeader() {
        let tr = createElement('tr');
        let indentTd = createElement('td', { className: LEFT_INDENT_CLASS });
        let dateTd = createElement('td');
        indentTd.appendChild(this.renderLeftIndent());
        dateTd.appendChild(this.renderDatesHeader());
        tr.appendChild(indentTd);
        tr.appendChild(dateTd);
        prepend([tr], this.element.querySelector('tbody'));
    }
    renderContent() {
        let tr = createElement('tr');
        let workTd = createElement('td');
        if (this.parent.isAdaptive) {
            workTd.setAttribute('colspan', '2');
            let scrollContainer = createElement('div', { className: SCROLL_CONTAINER_CLASS });
            scrollContainer.appendChild(this.renderTimeCells());
            scrollContainer.appendChild(this.renderContentArea());
            workTd.appendChild(scrollContainer);
            tr.appendChild(workTd);
        }
        else {
            let timesTd = createElement('td');
            timesTd.appendChild(this.renderTimeCells());
            workTd.appendChild(this.renderContentArea());
            tr.appendChild(timesTd);
            tr.appendChild(workTd);
        }
        this.element.querySelector('tbody').appendChild(tr);
    }
    renderLeftIndent() {
        let wrap = createElement('div', { className: LEFT_INDENT_WRAP_CLASS });
        let tbl = this.createTableLayout();
        let trEle = createElement('tr');
        let rowCount = this.colLevels.length;
        for (let i = 0; i < rowCount; i++) {
            let ntr = trEle.cloneNode();
            let level = this.colLevels[i];
            let data = { className: [level[0].className[0]], type: 'emptyCells' };
            ntr.appendChild(this.createTd(data));
            tbl.querySelector('tbody').appendChild(ntr);
        }
        let ntr = trEle.cloneNode();
        let appointmentExpandCollapse = createElement('div', {
            attrs: { 'tabindex': '0', title: 'Expand-all-day-section', 'aria-disabled': 'false', 'aria-label': 'Expand section' },
            className: ALLDAY_APPOINTMENT_SECTION_CLASS + ' ' + APPOINTMENT_ROW_EXPAND_CLASS + ' ' +
                ICON + ' ' + DISABLE_CLASS,
        });
        let data = { className: [ALLDAY_CELLS_CLASS], type: 'emptyCells' };
        let nth = this.createTd(data);
        nth.appendChild(appointmentExpandCollapse);
        ntr.appendChild(nth);
        tbl.querySelector('tbody').appendChild(ntr);
        wrap.appendChild(tbl);
        return wrap;
    }
    renderDatesHeader() {
        let container = createElement('div', { className: DATE_HEADER_CONTAINER_CLASS });
        let wrap = createElement('div', { className: DATE_HEADER_WRAP_CLASS });
        let innerWrap = createElement('div', { className: ALLDAY_APPOINTMENT_WRAPPER_CLASS });
        container.appendChild(wrap);
        let tbl = this.createTableLayout();
        let trEle = createElement('tr');
        let rowCount = this.colLevels.length;
        let lastLevel = this.colLevels[rowCount - 1];
        for (let i = 0; i < rowCount; i++) {
            let ntr = trEle.cloneNode();
            addClass([ntr], HEADER_ROW_CLASS);
            let level = this.colLevels[i];
            let colspan = lastLevel.length / level.length;
            for (let j = 0; j < level.length; j++) {
                let td = level[j];
                td.colSpan = colspan;
                ntr.appendChild(this.createTd(td));
            }
            tbl.querySelector('tbody').appendChild(ntr);
        }
        let ntr = trEle.cloneNode();
        addClass([ntr], ALLDAY_ROW_CLASS);
        for (let j = 0; j < lastLevel.length; j++) {
            let td = extend({}, lastLevel[j]);
            td.className = [ALLDAY_CELLS_CLASS];
            td.type = 'alldayCells';
            let ntd = this.createTd(td);
            ntd.setAttribute('data-date', td.date.getTime().toString());
            ntd.setAttribute('data-index', j.toString());
            let appointmentWrap = createElement('div', {
                id: ALLDAY_APPOINTMENT_WRAPPER_CLASS + '-' + j.toString(),
                className: ALLDAY_WRAPPER_CLASS,
                attrs: { 'data-index': j.toString() },
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
    createTd(td) {
        let tdEle = createElement('th');
        if (td.className) {
            addClass([tdEle], td.className);
        }
        if (td.date && td.type) {
            let ele = this.getTdContent(td.date, td.type);
            if (ele && ele.length) {
                append([].slice.call(ele), tdEle);
            }
        }
        if (td.type === 'dateHeader' && td.className.indexOf(HEADER_CELLS_CLASS) >= 0) {
            tdEle.setAttribute('data-date', td.date.getTime().toString());
            EventHandler.add(tdEle, 'click', this.workCellAction.cellClick, this);
            EventHandler.add(tdEle, 'dblclick', this.workCellAction.cellDblClick, this);
        }
        let args = { elementType: td.type, element: tdEle, date: td.date };
        this.parent.trigger(renderCell, args);
        return tdEle;
    }
    wireCellEvents(element) {
        EventHandler.add(element, 'mousedown', this.workCellAction.cellMouseDown, this);
        EventHandler.add(element, 'click', this.workCellAction.cellClick, this);
        EventHandler.add(element, 'dblclick', this.workCellAction.cellDblClick, this);
    }
    renderTimeCells() {
        let wrap = createElement('div', { className: TIME_CELLS_WRAP_CLASS });
        let tbl = this.createTableLayout();
        let trEle = createElement('tr');
        let handler = (r) => {
            r.type = r.first ? 'majorSlot' : 'minorSlot';
            r.className = r.last ? [TIME_CELLS_CLASS] : [];
            let ntr = trEle.cloneNode();
            let data = { date: r.date, type: r.type, className: r.className };
            ntr.appendChild(this.createTd(data));
            tbl.querySelector('tbody').appendChild(ntr);
            return r;
        };
        this.getTimeSlotRows(handler);
        wrap.appendChild(tbl);
        return wrap;
    }
    renderContentArea() {
        let wrap = createElement('div', { className: CONTENT_WRAP_CLASS });
        let innerWrap = createElement('div', { className: WRAPPER_CLASS });
        wrap.appendChild(innerWrap);
        let tbl = this.createTableLayout(CONTENT_TABLE_CLASS);
        let tr = createElement('tr', { attrs: { role: 'row' } });
        let td = createElement('td', { attrs: { role: 'gridcell', 'aria-selected': 'false' } });
        let tbody = tbl.querySelector('tbody');
        let columns = this.renderDates;
        let handler = (r) => {
            let ntr = tr.cloneNode();
            for (let col of columns) {
                let ntd = td.cloneNode();
                let clsName = r.last ? [WORK_CELLS_CLASS] : [WORK_CELLS_CLASS, ALTERNATE_CELLS_CLASS];
                let cellDate = resetTime(new Date('' + col));
                setTime(cellDate, getDateInMs(r.date));
                if (this.parent.workHours.highlight && this.isWorkHour(cellDate)) {
                    clsName.push(WORK_HOURS_CLASS);
                }
                addClass([ntd], clsName);
                if (this.parent.cellTemplate) {
                    let args = { date: cellDate, type: 'workCells' };
                    append([].slice.call(this.parent.getCellTemplate()(args)), ntd);
                }
                ntd.setAttribute('data-date', cellDate.getTime().toString());
                this.wireCellEvents(ntd);
                let args = { elementType: 'workCells', element: ntd, date: cellDate };
                this.parent.trigger(renderCell, args);
                ntr.appendChild(ntd);
            }
            tbody.appendChild(ntr);
            return r;
        };
        this.getTimeSlotRows(handler);
        let innerAppointmentWrap = createElement('div', { className: APPOINTMENT_WRAPPER_CLASS });
        for (let day = 0, length = this.renderDates.length; day < length; day++) {
            let appointmentWrap = createElement('div', {
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
    getScrollableElement() {
        if (this.parent.isAdaptive) {
            return this.element.querySelector('.' + SCROLL_CONTAINER_CLASS);
        }
        else {
            return this.getContentAreaElement();
        }
    }
    getDatesHeaderElement() {
        return this.element.querySelector('.' + DATE_HEADER_CONTAINER_CLASS);
    }
    getTimeCellsElement() {
        return this.element.querySelector('.' + TIME_CELLS_WRAP_CLASS);
    }
    getContentAreaElement() {
        return this.element.querySelector('.' + CONTENT_WRAP_CLASS);
    }
    getEndDateFromStartDate(start) {
        let msMajorInterval = this.majorSlot * MS_PER_MINUTE;
        let msInterval = msMajorInterval / this.minorSlotCount;
        let end = new Date(start.getTime());
        end.setMilliseconds(end.getMilliseconds() + msInterval);
        return end;
    }
    adjustEventWrapper() {
        let tblWidth = this.element.querySelector('.' + CONTENT_TABLE_CLASS).offsetWidth;
        this.element.querySelector('.' + WRAPPER_CLASS).style.width = tblWidth + 'px';
        this.element.querySelector('.' + ALLDAY_APPOINTMENT_WRAPPER_CLASS).style.width = tblWidth + 'px';
    }
    getTimeSlotRows(handler) {
        let rows = [];
        let startHour = this.getStartHour();
        let endHour = this.getEndHour();
        let msMajorInterval = this.majorSlot * MS_PER_MINUTE;
        let msInterval = msMajorInterval / this.minorSlotCount;
        let length = Math.round(MS_PER_DAY / msInterval);
        let msStartHour = startHour.getTime();
        let msEndHour = endHour.getTime();
        if (msStartHour !== msEndHour) {
            length = Math.round((msEndHour - msStartHour) / msInterval);
        }
        let dt = new Date(msStartHour);
        for (let i = 0; i < length; i++) {
            let majorTickDivider = i % (msMajorInterval / msInterval);
            let row = {
                date: new Date('' + dt),
                first: (majorTickDivider === 0),
                middle: (majorTickDivider < this.minorSlotCount - 1),
                last: (majorTickDivider === this.minorSlotCount - 1),
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
    /**
     * Get module name.
     */
    getModuleName() {
        return 'verticalView';
    }
    /**
     * To destroy the vertical view.
     * @return {void}
     * @private
     */
    destroy() {
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
}

/**
 * day view
 */
class Day extends VerticalView {
    /**
     * Constructor for day view
     */
    constructor(parent) {
        super(parent);
        this.viewClass = 'e-day-view';
    }
    getNextPreviousDate(type) {
        let daysCount = (type === 'next') ? 1 : -1;
        if (this.parent.activeViewOptions.showWeekend) {
            return addDays(this.parent.selectedDate, daysCount);
        }
        else {
            let date = addDays(this.parent.selectedDate, daysCount);
            while (!this.isWorkDay(date)) {
                date = addDays(date, daysCount);
            }
            return date;
        }
    }
    getDateRangeText() {
        if (this.parent.isAdaptive) {
            return this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
        }
        return this.formatDateRange(this.parent.selectedDate);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'day';
    }
}

/**
 * week view
 */
class Week extends VerticalView {
    /**
     * Constructor
     */
    constructor(parent) {
        super(parent);
        this.viewClass = 'e-week-view';
    }
    getRenderDates() {
        this.renderDates = [];
        let selectedDate = resetTime(this.parent.selectedDate);
        let start = getWeekFirstDate(selectedDate, this.parent.firstDayOfWeek);
        for (let i = 0, length = WEEK_LENGTH; i < length; i++) {
            if (this.parent.activeViewOptions.showWeekend) {
                this.renderDates.push(start);
            }
            else {
                if (this.isWorkDay(start)) {
                    this.renderDates.push(start);
                }
            }
            start = addDays(start, 1);
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'week';
    }
}

/**
 * work week view
 */
class WorkWeek extends VerticalView {
    /**
     * Constructor
     */
    constructor(par) {
        super(par);
        this.viewClass = 'e-work-week-view';
    }
    getRenderDates() {
        this.renderDates = [];
        let start = getWeekFirstDate(resetTime(this.parent.selectedDate), this.parent.firstDayOfWeek);
        for (let i = 0, length = WEEK_LENGTH; i < length; i++) {
            if (this.isWorkDay(start)) {
                this.renderDates.push(start);
            }
            start = addDays(start, 1);
        }
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'workWeek';
    }
}

const EVENT_GAP = 0;
/**
 * Month view events render
 */
class MonthEvent extends EventBase {
    /**
     * Constructor for month events
     */
    constructor(parent) {
        super(parent);
        this.renderedEvents = [];
        this.element = this.parent.activeView.getPanel();
        this.fields = this.parent.eventFields;
        this.addEventListener();
    }
    renderAppointments() {
        let appointmentWrapper = [].slice.call(this.element.querySelectorAll('.' + APPOINTMENT_WRAPPER_CLASS));
        for (let wrap of appointmentWrapper) {
            remove(wrap);
        }
        this.renderedEvents = [];
        this.dateRender = this.parent.activeView.renderDates;
        this.workCells = [].slice.call(this.element.querySelectorAll('.' + WORK_CELLS_CLASS));
        this.cellWidth = this.workCells[0].offsetWidth;
        this.cellHeight = this.workCells[0].offsetHeight;
        this.eventHeight = this.getElementHeightFromClass(this.element, APPOINTMENT_CLASS);
        this.monthHeaderHeight = this.getOuterHeight(this.workCells[0].querySelector('.' + DATE_HEADER_CLASS));
        let eventsList = this.parent.eventsProcessed;
        this.sortByDateTime(eventsList);
        let dates = this.dateRender.map((date) => { return +date; });
        this.slots = [];
        let noOfDays = this.parent.activeViewOptions.showWeekend ? WEEK_LENGTH : this.parent.activeViewOptions.workDays.length;
        while (dates.length > 0) {
            this.slots.push(dates.splice(0, noOfDays));
        }
        for (let event of eventsList) {
            let splittedEvents = this.splitEvent(event, this.dateRender);
            for (let event of splittedEvents) {
                this.renderAppointmentMonth(event);
            }
        }
    }
    getElementHeightFromClass(container, elementClass) {
        let height = 0;
        let el = createElement('div', { className: elementClass }).cloneNode();
        el.style.visibility = 'hidden';
        el.style.position = 'absolute';
        container.appendChild(el);
        height = this.getOuterHeight(el);
        remove(el);
        return height;
    }
    getOuterHeight(element) {
        let style = getComputedStyle(element);
        return element.offsetHeight + (parseInt(style.marginTop, 10) || 0) + (parseInt(style.marginBottom, 10) || 0);
    }
    createAppointmentElement(record) {
        let appointmentWrapper = createElement('div', {
            id: 'Appointment_' + record[this.fields.id],
            className: APPOINTMENT_CLASS,
            attrs: {
                'data-guid': record.Guid,
                'role': 'button',
                'tabindex': '0',
                'aria-readonly': 'false',
                'aria-selected': 'false',
                'aria-grabbed': 'true',
                'aria-label': isNullOrUndefined(record[this.fields.subject]) ?
                    this.parent.eventSettings.fields.subject.default : record[this.fields.subject]
            }
        });
        let appointmentDetails = createElement('div', { className: APPOINTMENT_DETAILS });
        appointmentWrapper.appendChild(appointmentDetails);
        let templateElement;
        let eventData = record.data;
        if (!isNullOrUndefined(this.parent.activeViewOptions.eventTemplate)) {
            templateElement = this.parent.getAppointmentTemplate()(record);
        }
        else {
            let eventSubject = isNullOrUndefined(record[this.fields.subject]) ?
                this.parent.eventSettings.fields.subject.default : record[this.fields.subject];
            let eventLocation = isNullOrUndefined(record[this.fields.location]) ?
                this.parent.eventSettings.fields.location.default : record[this.fields.location];
            let appointmentSubject = createElement('div', {
                className: APPOINTMENT_SUBJECT,
                innerHTML: eventSubject + (eventLocation ? (';&nbsp' + eventLocation) : '')
            });
            let appointmentStartTime = createElement('div', {
                className: APPOINTMENT_TIME,
                innerHTML: this.parent.globalize.formatDate(eventData[this.fields.startTime], { skeleton: 'hm' }),
                styles: 'display:' + (this.parent.isAdaptive ? 'none' : 'block')
            });
            let appointmentEndTime = createElement('div', {
                className: APPOINTMENT_TIME,
                innerHTML: this.parent.globalize.formatDate(eventData[this.fields.endTime], { skeleton: 'hm' }),
                styles: 'display:' + (this.parent.isAdaptive ? 'none' : 'block')
            });
            if (record[this.fields.isAllDay]) {
                templateElement = [appointmentSubject];
                addClass([appointmentSubject], 'e-text-center');
            }
            else if (eventData.count <= 1 && !eventData.isLeft && !eventData.isRight) {
                templateElement = [appointmentStartTime, appointmentSubject];
            }
            else {
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
            let iconClass = (record[this.fields.id] === record[this.fields.recurrenceID]) ?
                EVENT_RECURRENCE_ICON_CLASS : EVENT_RECURRENCE_EDIT_ICON_CLASS;
            appointmentDetails.appendChild(createElement('div', {
                className: ICON + ' ' + iconClass,
                styles: 'display:' + (this.parent.isAdaptive ? 'none' : 'block')
            }));
        }
        if (eventData.isLeft) {
            let iconLeft = createElement('div', {
                className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_LEFT_CLASS
            });
            prepend([iconLeft], appointmentDetails);
        }
        if (eventData.isRight) {
            let iconRight = createElement('div', {
                className: EVENT_INDICATOR_CLASS + ' ' + ICON + ' ' + EVENT_ICON_RIGHT_CLASS
            });
            append([iconRight], appointmentDetails);
        }
        return appointmentWrapper;
    }
    renderAppointmentMonth(event) {
        let startTime = event[this.fields.startTime];
        let endTime = event[this.fields.endTime];
        let day = this.parent.getIndexOfDate(this.dateRender, resetTime(startTime));
        if (day < 0) {
            return;
        }
        let overlapCount = this.getIndex(event, startTime);
        event.Index = overlapCount;
        let appTop = 0;
        let moreIndicatorHeight = 19;
        let appHeight = this.eventHeight;
        this.renderedEvents.push(extend({}, event, null, true));
        let diffInDays = event.data.count;
        if (startTime.getTime() <= endTime.getTime()) {
            let appWidth = (diffInDays * this.cellWidth) - 1;
            let cellTd = this.workCells[day];
            appTop = (overlapCount * (appHeight + EVENT_GAP));
            if (this.cellHeight > this.monthHeaderHeight + ((overlapCount + 1) * (appHeight + EVENT_GAP)) + moreIndicatorHeight) {
                let appointmentElement = this.createAppointmentElement(event);
                this.wireAppointmentEvents(appointmentElement);
                setStyleAttribute(appointmentElement, { 'width': appWidth + 'px', 'height': appHeight + 'px', 'top': appTop + 'px' });
                if (cellTd.querySelector('.' + APPOINTMENT_WRAPPER_CLASS)) {
                    cellTd.querySelector('.' + APPOINTMENT_WRAPPER_CLASS).appendChild(appointmentElement);
                }
                else {
                    let wrapper = createElement('div', { className: APPOINTMENT_WRAPPER_CLASS });
                    wrapper.appendChild(appointmentElement);
                    cellTd.appendChild(wrapper);
                }
                let args = { data: event, element: appointmentElement };
                this.parent.trigger(eventRendered, args);
            }
            else {
                for (let i = 0; i < diffInDays; i++) {
                    let cellTd = this.workCells[day + i];
                    if (cellTd && isNullOrUndefined(cellTd.querySelector('.' + MORE_INDICATOR_CLASS))) {
                        let startDateTime = new Date(this.dateRender[day + i].getTime());
                        let endDateTime = addDays(this.dateRender[day + i], 1);
                        let filterEvents = this.filterEvents(startDateTime, endDateTime, this.parent.eventsProcessed);
                        let appArea = this.cellHeight - this.monthHeaderHeight - moreIndicatorHeight;
                        let renderedAppCount = Math.floor(appArea / (appHeight + EVENT_GAP));
                        let count = (filterEvents.length - renderedAppCount) <= 0 ? 1 : (filterEvents.length - renderedAppCount);
                        let moreIndicatorElement = createElement('div', {
                            className: MORE_INDICATOR_CLASS,
                            innerHTML: '+' + count + '&nbsp;' + (this.parent.isAdaptive ? '' : this.parent.localeObj.getConstant('more')),
                            attrs: {
                                'tabindex': '0',
                                'data-start-date': startDateTime.getTime().toString(),
                                'data-end-date': endDateTime.getTime().toString()
                            }
                        });
                        moreIndicatorElement.style.top = appArea + 'px';
                        if (cellTd.querySelector('.' + APPOINTMENT_WRAPPER_CLASS)) {
                            cellTd.querySelector('.' + APPOINTMENT_WRAPPER_CLASS).appendChild(moreIndicatorElement);
                        }
                        else {
                            let wrapper = createElement('div', { className: APPOINTMENT_WRAPPER_CLASS });
                            wrapper.appendChild(moreIndicatorElement);
                            cellTd.appendChild(wrapper);
                        }
                        EventHandler.add(moreIndicatorElement, 'click', this.moreIndicatorClick, this);
                    }
                }
            }
        }
    }
    getIndex(record, date) {
        let appIndex = -1;
        let appointments = this.renderedEvents;
        if (appointments.length > 0) {
            let appointmentsList = [];
            for (let app of appointments) {
                if ((resetTime(app[this.fields.startTime]).getTime() <= resetTime(date).getTime()) &&
                    (resetTime(app[this.fields.endTime]).getTime() >= resetTime(date).getTime())) {
                    appointmentsList.push(app);
                }
            }
            let appLevel = appointmentsList.map((obj) => { return obj.Index; });
            appIndex = (appLevel.length > 0) ? this.getSmallestMissingNumber(appLevel) : 0;
        }
        return (appIndex === -1) ? 0 : appIndex;
    }
    moreIndicatorClick(event) {
        let target = closest(event.target, '.' + MORE_INDICATOR_CLASS);
        let startDate = new Date(parseInt(target.getAttribute('data-start-date'), 10));
        let endDate = new Date(parseInt(target.getAttribute('data-end-date'), 10));
        let filteredEvents = this.filterEvents(startDate, endDate, this.parent.eventsProcessed);
        let moreEventArgs = { date: startDate, event: filteredEvents, element: event.target };
        if (!isNullOrUndefined(startDate) && this.parent.isAdaptive) {
            this.parent.setProperties({ selectedDate: startDate }, true);
            this.parent.changeView('Day');
        }
        else {
            this.parent.quickPopup.moreEventClick(moreEventArgs);
        }
    }
}

/**
 * month view
 */
class Month extends ViewBase {
    /**
     * Constructor for month view
     */
    constructor(parent) {
        super(parent);
        this.dayNameFormat = 'wide';
        this.viewClass = 'e-month-view';
        this.isInverseTableSelect = false;
        this.workCellAction = new WorkCellInteraction(parent);
    }
    addEventListener() {
        this.parent.on(scrollUiUpdate, this.onScrollUiUpdate, this);
        this.parent.on(dataReady, this.onDataReady, this);
        this.parent.on(cellClick, this.onCellClick, this);
    }
    removeEventListener() {
        this.parent.off(scrollUiUpdate, this.onScrollUiUpdate);
        this.parent.off(dataReady, this.onDataReady);
        this.parent.off(cellClick, this.onCellClick);
    }
    onDataReady(args) {
        let monthEvent = new MonthEvent(this.parent);
        monthEvent.renderAppointments();
    }
    onCellClick(event) {
        // Here cell click
    }
    onContentScroll(e) {
        this.getDatesHeaderElement().firstChild.scrollLeft = e.target.scrollLeft;
    }
    onScrollUiUpdate(args) {
        let headerHeight = 0;
        if (this.parent.headerModule) {
            headerHeight += this.parent.headerModule.getHeaderElement().offsetHeight;
        }
        let header = this.getDatesHeaderElement();
        let content = this.getContentAreaElement();
        content.style.height = 'auto';
        content.style.height = formatUnit(this.parent.element.offsetHeight - headerHeight - header.offsetHeight - 2);
        // tslint:disable:no-any
        if (content.offsetWidth - content.clientWidth > 0) {
            let scrollBarWidth = getScrollBarWidth();
            header.firstChild.style[args.cssProperties.border] = scrollBarWidth > 0 ? '1px' : '0px';
            header.style[args.cssProperties.padding] = scrollBarWidth > 0 ? scrollBarWidth - 1 + 'px' : '0px';
        }
        else {
            header.firstChild.style[args.cssProperties.border] = '';
            header.style[args.cssProperties.padding] = '';
        }
        // tslint:enable:no-any
    }
    generateColLevels() {
        let count = this.parent.activeViewOptions.showWeekend ? WEEK_LENGTH : this.parent.activeViewOptions.workDays.length;
        let colLevels = [];
        let level = [];
        for (let col = 0; col < count; col++) {
            let classList = [HEADER_CELLS_CLASS];
            if (this.isCurrentMonth(this.parent.selectedDate) && new Date().getDay() === col) {
                classList.push(CURRENT_DAY_CLASS);
            }
            level.push({ date: this.renderDates[col], type: 'monthHeader', className: classList });
        }
        colLevels.push(level);
        return colLevels;
    }
    getDayNameFormat() {
        if (this.parent.isAdaptive) {
            return 'abbreviated';
        }
        return 'wide';
    }
    renderLayout(type) {
        this.dayNameFormat = this.getDayNameFormat();
        this.setPanel(createElement('div', { className: TABLE_WRAP_CLASS }));
        let clsList = [this.viewClass];
        clsList.push(type);
        addClass([this.element], clsList);
        this.renderPanel(type);
        this.element.appendChild(this.createTableLayout(OUTER_TABLE_CLASS));
        this.colLevels = this.generateColLevels();
        this.renderHeader();
        this.renderContent();
        this.parent.notify(contentReady, {});
    }
    wireCellEvents(element) {
        EventHandler.add(element, 'mousedown', this.workCellAction.cellMouseDown, this);
        EventHandler.add(element, 'click', this.workCellAction.cellClick, this);
        EventHandler.add(element, 'dblclick', this.workCellAction.cellDblClick, this);
    }
    renderHeader() {
        let tr = createElement('tr');
        let dateTd = createElement('td');
        dateTd.appendChild(this.renderDatesHeader());
        tr.appendChild(dateTd);
        prepend([tr], this.element.querySelector('tbody'));
    }
    renderContent() {
        let tr = createElement('tr');
        let workTd = createElement('td');
        workTd.appendChild(this.renderContentArea());
        tr.appendChild(workTd);
        this.element.querySelector('tbody').appendChild(tr);
        this.renderAppointmentContainer();
    }
    renderAppointmentContainer() {
        //Here needs to render mobile view appointment details on selected date
    }
    renderDatesHeader() {
        let container = createElement('div', { className: DATE_HEADER_CONTAINER_CLASS });
        let wrap = createElement('div', { className: DATE_HEADER_WRAP_CLASS });
        container.appendChild(wrap);
        let table = this.createTableLayout();
        let trEle = createElement('tr');
        let rowsCount = this.colLevels.length;
        let lastLevel = this.colLevels[rowsCount - 1];
        for (let i = 0; i < rowsCount; i++) {
            let level = this.colLevels[i];
            let ntr = trEle.cloneNode();
            let colspan = lastLevel.length / level.length;
            for (let j = 0; j < level.length; j++) {
                let td = level[j];
                td.colSpan = colspan;
                ntr.appendChild(this.createHeaderCell(td));
            }
            table.querySelector('tbody').appendChild(ntr);
        }
        wrap.appendChild(table);
        return container;
    }
    createHeaderCell(td) {
        let tdEle = createElement('th');
        if (td.className) {
            addClass([tdEle], td.className);
        }
        if (td.type === 'monthHeader') {
            let ele = createElement('span', { innerHTML: this.parent.getDayNames(this.dayNameFormat)[td.date.getDay()] });
            tdEle.appendChild(ele);
        }
        let args = { elementType: td.type, element: tdEle, date: td.date };
        this.parent.trigger(renderCell, args);
        return tdEle;
    }
    isOtherMonth(date) {
        return this.parent.selectedDate.getMonth() !== date.getMonth();
    }
    renderContentArea() {
        let wrap = createElement('div', { className: CONTENT_WRAP_CLASS });
        let tbl = this.createTableLayout(CONTENT_TABLE_CLASS);
        let tbody = tbl.querySelector('tbody');
        let tr = createElement('tr', { attrs: { role: 'row' } });
        let td = createElement('td', { attrs: { role: 'gridcell', 'aria-selected': 'false' } });
        let count = this.parent.activeViewOptions.showWeekend ? WEEK_LENGTH : this.parent.activeViewOptions.workDays.length;
        let noOfRows = this.renderDates.length / count;
        let startCol = 0;
        let endCol = count;
        for (let row = 0; row < noOfRows; row++) {
            let ntr = tr.cloneNode();
            for (startCol = 0 + startCol; startCol < endCol; startCol++) {
                let data = { date: this.renderDates[startCol], type: 'monthCells', className: [WORK_CELLS_CLASS] };
                let ntd = td.cloneNode();
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
                    let args = { date: data.date, type: data.type };
                    append([].slice.call(this.parent.getCellTemplate()(args)), ntd);
                }
                this.wireCellEvents(ntd);
                let args = { elementType: data.type, element: ntd, date: data.date };
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
    getDatesHeaderElement() {
        return this.element.querySelector('.' + DATE_HEADER_CONTAINER_CLASS);
    }
    getContentAreaElement() {
        return this.element.querySelector('.' + CONTENT_WRAP_CLASS);
    }
    renderDateHeaderElement(data, ntd) {
        let dateHeader = createElement('div', { className: DATE_HEADER_CLASS });
        dateHeader.innerHTML = (data.date.getDate() === 1 && !this.isCurrentDate(data.date) && !this.parent.isAdaptive) ?
            this.parent.globalize.formatDate(data.date, { format: 'MMM d' }) :
            this.parent.globalize.formatDate(data.date, { skeleton: 'd' });
        ntd.appendChild(dateHeader);
        if (this.getModuleName() === 'month') {
            addClass([dateHeader], NAVIGATE_CLASS);
        }
    }
    getRenderDates() {
        this.renderDates = [];
        let currentDate = resetTime(this.parent.selectedDate);
        let monthStart = getWeekFirstDate(firstDateOfMonth(currentDate), this.parent.firstDayOfWeek);
        let lastWeekOfMonth = getWeekFirstDate(lastDateOfMonth(currentDate), this.parent.firstDayOfWeek);
        let monthEnd = addDays(lastWeekOfMonth, WEEK_LENGTH - 1);
        let start = new Date(monthStart.getFullYear(), monthStart.getMonth(), monthStart.getDate());
        do {
            if (this.parent.activeViewOptions.showWeekend) {
                this.renderDates.push(start);
            }
            else {
                if (this.isWorkDay(start)) {
                    this.renderDates.push(start);
                }
            }
            start = addDays(start, 1);
        } while (start.getTime() <= monthEnd.getTime());
    }
    getNextPreviousDate(type) {
        if (type === 'next') {
            return addMonths(this.parent.selectedDate, 1);
        }
        else {
            return addMonths(this.parent.selectedDate, -1);
        }
    }
    getEndDateFromStartDate(start) {
        return addDays(new Date(start.getTime()), 1);
    }
    getDateRangeText() {
        if (this.parent.isAdaptive || isNullOrUndefined(this.parent.activeViewOptions.dateFormat)) {
            return this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
        }
        return this.formatDateRange(this.parent.selectedDate);
    }
    getLabelText(view) {
        return this.parent.localeObj.getConstant(view) + ' of ' +
            this.parent.globalize.formatDate(this.parent.selectedDate, { format: 'MMMM y' });
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'month';
    }
    /**
     * To destroy the month.
     * @return {void}
     * @private
     */
    destroy() {
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
}

/**
 * AgendaBase for event rendering
 */
class AgendaBase {
    /**
     * Constructor for AgendaBase
     */
    constructor(parent) {
        this.parent = parent;
        this.l10n = this.parent.localeObj;
    }
    createAgendaContentElement(type, listData, aTd) {
        let listElement;
        if (type === 'noEvents') {
            let noEvents = [{ 'subject': this.l10n.getConstant('noEvents') }];
            listElement = ListBase.createList(noEvents, {
                moduleName: 'agenda',
                listClass: this.parent.activeView.viewClass,
                itemClass: this.parent.activeView.viewClass,
                template: '<div class=' + AGENDA_NO_EVENT_CLASS + '>${subject}</div>'
            });
        }
        else {
            listElement = ListBase.createList(listData, {
                moduleName: 'agenda',
                listClass: this.parent.activeView.viewClass,
                itemClass: this.parent.activeView.viewClass
            });
            for (let li = 0, length = listData.length; li < length; li++) {
                let appWrapper = createElement('div', {
                    id: 'Appointment_' + listData[li][this.parent.eventFields.id],
                    className: APPOINTMENT_CLASS, attrs: {
                        'data-guid': listData[li].Guid,
                        'role': 'button',
                        'tabindex': '0',
                        'aria-readonly': 'false',
                        'aria-selected': 'false',
                        'aria-grabbed': 'true',
                        'aria-label': isNullOrUndefined(listData[li][this.parent.eventFields.subject]) ?
                            this.parent.eventSettings.fields.subject.default : listData[li][this.parent.eventFields.subject]
                    }
                });
                let templateEle;
                if (!isNullOrUndefined(this.parent.activeViewOptions.eventTemplate)) {
                    templateEle = this.parent.getAppointmentTemplate()(listData[li]);
                }
                else {
                    templateEle = this.createAppointment(listData[li]);
                }
                append([].slice.call(templateEle), appWrapper);
                listElement.children[li].innerHTML = appWrapper.outerHTML;
                let args = { data: listData[li], element: listElement.children[li] };
                this.parent.trigger(eventRendered, args);
            }
        }
        aTd.appendChild(listElement);
        addClass([aTd], AGENDA_DAY_BORDER_CLASS);
        return aTd;
    }
    createAppointment(event) {
        let fieldMapping = this.parent.eventFields;
        let recordSubject = isNullOrUndefined(event[fieldMapping.subject]) ?
            this.parent.eventSettings.fields.subject.default : event[fieldMapping.subject];
        let appSubjectWrap = createElement('div', { className: APPOINTMENT_SUBJECT_WRAP });
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
            let iconClass = (event[fieldMapping.id] === event[fieldMapping.recurrenceID]) ?
                EVENT_RECURRENCE_ICON_CLASS : EVENT_RECURRENCE_EDIT_ICON_CLASS;
            appSubjectWrap.appendChild(createElement('div', { className: ICON + ' ' + iconClass }));
        }
        let strDate = event[fieldMapping.startTime];
        let endDate = event[fieldMapping.endTime];
        let isAllDay = event[fieldMapping.isAllDay];
        let allDayStr = this.l10n.getConstant('allDay');
        let timeStr = this.parent.globalize.formatDate(strDate, { skeleton: 'hm' }) + ' - ' +
            this.parent.globalize.formatDate(endDate, { skeleton: 'hm' });
        if (!isNullOrUndefined(event.data)) {
            let eventString = (endDate.getTime() - strDate.getTime()) / MS_PER_DAY >= 1 ? allDayStr : timeStr;
            allDayStr = eventString + ' (' + this.l10n.getConstant('day') + ' ' + event.data.index + '/' +
                event.data.count + ')';
        }
        let appDateTime = createElement('div', {
            className: AGENDA_DATETIME_CLASS,
            innerHTML: (!isNullOrUndefined(event.data) || isAllDay) ? allDayStr : timeStr
        });
        return [appSubjectWrap, appDateTime];
    }
    processAgendaEvents(events) {
        let eventsProcessed = [];
        for (let event of events) {
            let splited = this.parent.eventBase.splitEventByDay(event);
            eventsProcessed = eventsProcessed.concat(splited.length > 1 ? splited : event);
        }
        return eventsProcessed;
    }
    wireEventActions() {
        let eventElement = [].slice.call(this.parent.element.querySelectorAll('.' + APPOINTMENT_CLASS));
        for (let element of eventElement) {
            this.parent.eventBase.wireAppointmentEvents(element);
        }
        let dateHeaderElement = [].slice.call(this.parent.element.querySelectorAll('.e-m-date'));
        for (let element of dateHeaderElement) {
            EventHandler.add(element, 'click', this.parent.agendaModule.dayNavigationClick, this);
        }
    }
}

/**
 * agenda view
 */
class Agenda extends ViewBase {
    /**
     * Constructor for agenda view
     */
    constructor(parent) {
        super(parent);
        this.viewClass = 'e-agenda-view';
        this.isInverseTableSelect = false;
        this.agendaDates = {};
        this.virtualScrollTop = 1;
        this.minDate = new Date(1900, 0, 1);
        this.maxDate = new Date(2099, 11, 31);
        this.agendaBase = new AgendaBase(parent);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'agenda';
    }
    renderLayout() {
        this.agendaDates = {};
        this.element = createElement('div', { className: TABLE_WRAP_CLASS });
        addClass([this.element], this.viewClass);
        this.element.appendChild(this.createTableLayout(OUTER_TABLE_CLASS));
        this.parent.element.querySelector('.' + TABLE_CONTAINER_CLASS).appendChild(this.element);
        let eTr = createElement('tr');
        this.element.querySelector('tbody').appendChild(eTr);
        let workTd = createElement('td');
        eTr.appendChild(workTd);
        let wrap = createElement('div', { className: CONTENT_WRAP_CLASS });
        workTd.appendChild(wrap);
        let tbl = this.createTableLayout(CONTENT_TABLE_CLASS);
        wrap.appendChild(tbl);
        let tBody = tbl.querySelector('tbody');
        let agendaDate = resetTime(this.parent.selectedDate);
        this.renderEmptyContent(tBody, agendaDate);
        this.wireEvents();
        this.parent.notify(contentReady, {});
    }
    eventLoad(args) {
        this.parent.eventsProcessed = this.agendaBase.processAgendaEvents(args.processedData);
        let agendaDate = resetTime(this.parent.selectedDate);
        let tBody = this.element.querySelector('.' + CONTENT_WRAP_CLASS + ' tbody');
        tBody.innerHTML = '';
        this.renderContent(tBody, agendaDate);
        this.agendaBase.wireEventActions();
        let contentArea = closest(tBody, '.' + CONTENT_WRAP_CLASS);
        contentArea.scrollTop = 1;
    }
    renderContent(tBody, agendaDate) {
        let fieldMapping = this.parent.eventFields;
        let firstDate = new Date(agendaDate.getTime());
        let lastDate = this.getEndDateFromStartDate(firstDate);
        let isObject = this.appointmentFiltering(firstDate, lastDate);
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
            let appoint = isObject;
            agendaDate = appoint[0][fieldMapping.startTime];
            this.updateHeaderText(appoint[0][fieldMapping.startTime]);
        }
        let endDate;
        if (!this.parent.hideEmptyAgendaDays || (this.parent.agendaDaysCount > 0 && isObject.length > 0)) {
            let noOfDays = (!this.parent.hideEmptyAgendaDays || !this.parent.activeViewOptions.allowVirtualScrolling ||
                this.parent.agendaDaysCount < isObject.length) ? this.parent.agendaDaysCount : isObject.length;
            for (let day = 0; day < noOfDays; day++) {
                let filterData = [];
                filterData = this.appointmentFiltering(agendaDate);
                let nTr = this.createTableRowElement(agendaDate, 'data');
                if (this.element.querySelector('tr[aria-rowindex="' + parseInt(nTr.getAttribute('aria-rowindex'), 10) + '"]')) {
                    continue;
                }
                let dTd = nTr.children[0];
                let aTd = nTr.children[1];
                if (filterData.length > 0 || (!this.parent.hideEmptyAgendaDays && filterData.length === 0)) {
                    let elementType = (!this.parent.hideEmptyAgendaDays && filterData.length === 0) ? 'noEvents' : 'data';
                    dTd.appendChild(this.createDateHeaderElement(agendaDate));
                    nTr.appendChild(dTd);
                    nTr.appendChild(this.agendaBase.createAgendaContentElement(elementType, filterData, aTd));
                    tBody.appendChild(nTr);
                }
                else if (this.parent.activeViewOptions.allowVirtualScrolling) {
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
        }
        else {
            this.renderEmptyContent(tBody, agendaDate);
            endDate = addDays(agendaDate, this.parent.agendaDaysCount - 1);
        }
        this.agendaDates = { start: firstDate, end: endDate };
    }
    renderEmptyContent(tBody, agendaDate) {
        let eTr = this.createTableRowElement(agendaDate, 'noEvents');
        let eTd = eTr.children[0];
        let noEvents = createElement('div', {
            className: AGENDA_EMPTY_EVENT_CLASS,
            innerHTML: this.l10n.getConstant('noEvents')
        });
        eTd.appendChild(noEvents);
        tBody.appendChild(eTr);
    }
    createTableRowElement(date, type) {
        let daysCount = getDaysCount(this.parent.selectedDate.getTime(), date.getTime());
        let tr = createElement('tr', { attrs: { 'role': 'row', 'aria-rowindex': daysCount.toString() } });
        let td = createElement('td', {
            attrs: {
                'class': AGENDA_CELLS_CLASS,
                'role': 'gridcell',
                'aria-selected': 'false',
                'aria-colindex': daysCount.toString(),
                'data-date': date.getTime().toString()
            }
        });
        let dTd = td.cloneNode();
        let aTd = td.cloneNode();
        tr.appendChild(dTd);
        if (type !== 'noEvents') {
            tr.appendChild(aTd);
        }
        return tr;
    }
    createDateHeaderElement(date) {
        let dateHeader;
        if (this.parent.activeViewOptions.dateHeaderTemplate) {
            dateHeader = createElement('div', { className: AGENDA_HEADER_CLASS });
            let templateArgs = { date: date, type: 'dateHeader' };
            let template = this.parent.getDateHeaderTemplate()(templateArgs);
            append([].slice.call(template), dateHeader);
        }
        else {
            dateHeader = this.getMobileDateElement(date, AGENDA_HEADER_CLASS);
        }
        return dateHeader;
    }
    agendaScrolling(event) {
        this.parent.quickPopup.quickPopup.close();
        if (this.parent.activeViewOptions.allowVirtualScrolling) {
            this.virtualScrolling(event);
        }
    }
    virtualScrolling(event) {
        let target = event.target;
        let scrollTop = target.scrollTop;
        let scrollHeight = target.scrollHeight;
        let offsetHeight = target.clientHeight;
        let totalHeight = scrollTop + offsetHeight;
        let direction = (this.virtualScrollTop < scrollTop) ? 'next' : 'previous';
        let tBody = target.querySelector('tbody');
        let emptyTBody = createElement('tbody');
        let topElement = this.getElementFromScrollerPosition(event, direction);
        let scrollDate = new Date(parseInt(topElement.getAttribute('data-date'), 0));
        let filterDate;
        let filterData;
        if (scrollTop === 0) {
            filterDate = this.getPreviousNextDate(addDays(scrollDate, -1), direction);
            filterData = this.appointmentFiltering(filterDate.start, filterDate.end);
            if (filterData.length > 0 || !this.parent.hideEmptyAgendaDays) {
                this.renderContent(emptyTBody, filterDate.start);
                tBody.innerHTML = emptyTBody.innerHTML + tBody.innerHTML;
                this.agendaBase.wireEventActions();
                for (let s = 0, element = tBody.children; s < element.length; s++) {
                    if (element[s].getAttribute('aria-rowindex') === topElement.getAttribute('aria-colindex')) {
                        let scrollToValue = element[s].offsetTop -
                            this.element.querySelector('.e-agenda-item').offsetHeight;
                        target.scrollTop = scrollToValue;
                        break;
                    }
                }
                this.updateHeaderText(scrollDate);
            }
        }
        else if (totalHeight === scrollHeight) {
            filterDate = this.getPreviousNextDate(addDays(scrollDate, 1), direction);
            filterData = this.appointmentFiltering(filterDate.start, filterDate.end);
            if (filterData.length > 0 || !this.parent.hideEmptyAgendaDays) {
                this.renderContent(emptyTBody, filterDate.start);
                tBody.innerHTML += emptyTBody.innerHTML;
                this.agendaBase.wireEventActions();
                this.updateHeaderText(scrollDate);
            }
        }
        else {
            this.updateHeaderText(scrollDate);
        }
        this.virtualScrollTop = scrollTop;
        let selectedElements = this.parent.eventBase.getSelectedAppointments();
        if (selectedElements.length > 0) {
            selectedElements[selectedElements.length - 1].focus();
        }
    }
    getElementFromScrollerPosition(event, direction) {
        let filterElement;
        let target = event.target;
        let scrollTop = target.scrollTop;
        let scrollHeight = target.scrollHeight;
        let offsetHeight = target.clientHeight;
        let totalHeight = scrollTop + offsetHeight;
        let liCollection = [].slice.call(target.querySelectorAll('.e-agenda-item'));
        let li;
        let liDetails;
        if (liCollection.length > 0) {
            if (scrollTop === 0) {
                li = liCollection[0];
                filterElement = closest(li, '.' + AGENDA_CELLS_CLASS);
            }
            else if (totalHeight === scrollHeight) {
                li = liCollection[liCollection.length - 1];
                filterElement = closest(li, '.' + AGENDA_CELLS_CLASS);
            }
            else {
                for (let a = 0, length = liCollection.length; a < length; a++) {
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
    updateHeaderText(date) {
        if (this.parent.showHeaderBar) {
            let dateRangeText = this.getDateRangeText(date);
            let headerElement = this.parent.headerModule.element.querySelector('.e-date-range');
            headerElement.setAttribute('aria-label', dateRangeText);
            headerElement.querySelector('.e-tbar-btn-text').innerHTML = dateRangeText;
        }
    }
    getPreviousNextDate(date, type) {
        let currentDate = new Date(date.getTime());
        let firstDate = this.getStartDateFromEndDate(date);
        let lastDate = this.getEndDateFromStartDate(date);
        let daysCount = 0;
        do {
            let filterData = this.appointmentFiltering(currentDate);
            if (filterData.length > 0 || !this.parent.hideEmptyAgendaDays) {
                daysCount++;
            }
            currentDate = addDays(currentDate, (type === 'next') ? 1 : -1);
            if (currentDate < firstDate || currentDate > lastDate) {
                break;
            }
        } while (daysCount !== this.parent.agendaDaysCount);
        let endDate = addDays(currentDate, (type === 'next') ? -1 : 1);
        return (type === 'next') ? { start: date, end: addDays(endDate, 1) } : { start: endDate, end: addDays(date, 1) };
    }
    appointmentFiltering(startDate, endDate) {
        let dateStart;
        let dateEnd;
        if (!isNullOrUndefined(startDate) && isNullOrUndefined(endDate)) {
            dateStart = resetTime(new Date(startDate.getTime()));
            dateEnd = setTime(new Date(dateStart.getTime()), MS_PER_DAY);
        }
        else {
            dateStart = new Date(startDate.getTime());
            dateEnd = new Date(endDate.getTime());
        }
        let filterData = this.parent.eventBase.filterEvents(dateStart, dateEnd);
        return filterData;
    }
    getStartDateFromEndDate(endDate) {
        let filterDate;
        let fieldMapping = this.parent.eventFields;
        if (this.parent.eventsProcessed.length > 0) {
            let firstDate = Math.min.apply(Math, this.parent.eventsProcessed.map((a) => {
                let date = a[fieldMapping.startTime];
                return date.getTime();
            }));
            filterDate = this.parent.hideEmptyAgendaDays ? new Date(firstDate) : this.minDate;
        }
        else {
            filterDate = this.parent.hideEmptyAgendaDays ? addMonths(endDate, -1) : this.minDate;
        }
        return resetTime(filterDate);
    }
    getEndDateFromStartDate(startDate) {
        let filterDate;
        let fieldMapping = this.parent.eventFields;
        if (this.parent.eventsProcessed.length > 0) {
            let lastDate = Math.max.apply(Math, this.parent.eventsProcessed.map((a) => {
                let date = a[fieldMapping.endTime];
                return date.getTime();
            }));
            filterDate = this.parent.hideEmptyAgendaDays ? new Date(lastDate) : this.maxDate;
        }
        else {
            filterDate = this.parent.hideEmptyAgendaDays ? addMonths(startDate, 1) : this.maxDate;
        }
        return resetTime(addDays(filterDate, 1));
    }
    getNextPreviousDate(type) {
        let noOfDays = (type === 'next') ? 1 : -1;
        return addDays(this.parent.selectedDate, noOfDays);
    }
    startDate() {
        return resetTime(this.parent.selectedDate);
    }
    endDate() {
        if (this.parent.activeViewOptions.allowVirtualScrolling) {
            return this.getEndDateFromStartDate(this.startDate());
        }
        else {
            return addDays(this.startDate(), this.parent.agendaDaysCount);
        }
    }
    getDateRangeText(date) {
        let formatDate = (this.parent.activeViewOptions.dateFormat) ? this.parent.activeViewOptions.dateFormat : 'MMMM y';
        if (this.parent.activeViewOptions.allowVirtualScrolling || this.parent.isAdaptive) {
            let currentDate = isNullOrUndefined(date) ? this.parent.selectedDate : date;
            return this.parent.globalize.formatDate(currentDate, { format: formatDate });
        }
        else {
            let startDate = this.parent.selectedDate;
            let endDate = addDays(startDate, this.parent.agendaDaysCount - 1);
            return this.formatDateRange(startDate, endDate);
        }
    }
    dayNavigationClick(e) {
        let date = this.parent.getDateFromElement(closest(e.currentTarget, '.' + AGENDA_CELLS_CLASS));
        if (!isNullOrUndefined(date) && !this.parent.isAdaptive) {
            this.parent.setProperties({ selectedDate: date }, true);
            this.parent.changeView('Day');
        }
    }
    wireEvents() {
        EventHandler.add(this.element.querySelector('.' + CONTENT_WRAP_CLASS), scroll, this.agendaScrolling, this);
    }
    unWireEvents() {
        EventHandler.remove(this.element.querySelector('.' + CONTENT_WRAP_CLASS), scroll, this.agendaScrolling);
        let dateHeaderElement = [].slice.call(this.element.querySelectorAll('.e-m-date'));
        for (let element of dateHeaderElement) {
            EventHandler.remove(element, 'click', this.dayNavigationClick);
        }
    }
    addEventListener() {
        this.parent.on(scrollUiUpdate, this.onAgendaScrollUiUpdate, this);
        this.parent.on(dataReady, this.eventLoad, this);
    }
    removeEventListener() {
        this.parent.off(scrollUiUpdate, this.onAgendaScrollUiUpdate);
        this.parent.off(dataReady, this.eventLoad);
    }
    onAgendaScrollUiUpdate(args) {
        let headerHeight = 2;
        if (this.parent.headerModule) {
            headerHeight += this.parent.headerModule.getHeaderElement().offsetHeight;
            if (this.parent.activeViewOptions.allowVirtualScrolling) {
                addClass(this.parent.headerModule.element.querySelectorAll('.e-prev,.e-next'), AGENDA_HIDDEN_CLASS);
                addClass([this.parent.headerModule.element.querySelector('.e-date-range')], AGENDA_ALIGN_CLASS);
            }
            else {
                removeClass(this.parent.headerModule.element.querySelectorAll('.e-prev,.e-next'), AGENDA_HIDDEN_CLASS);
                removeClass([this.parent.headerModule.element.querySelector('.e-date-range')], AGENDA_ALIGN_CLASS);
            }
        }
        let contentArea = this.element.querySelector('.' + CONTENT_WRAP_CLASS);
        contentArea.style.height = formatUnit(this.parent.element.offsetHeight - headerHeight);
    }
    /**
     * To destroy the agenda.
     * @return {void}
     * @private
     */
    destroy() {
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
}

/**
 * month agenda view
 */
class MonthAgenda extends Month {
    /**
     * Constructor
     */
    constructor(parent) {
        super(parent);
        this.dayNameFormat = 'narrow';
        this.viewClass = 'e-month-agenda-view';
        this.agendaDates = {};
        this.agendaBase = new AgendaBase(parent);
    }
    renderAppointmentContainer() {
        let contentArea = this.getContentAreaElement();
        let appWrap = createElement('div', { className: APPOINTMENT_WRAP_CLASS });
        contentArea.appendChild(appWrap);
        this.appendAppContainer(appWrap);
        this.setEventWrapperHeight();
    }
    getDayNameFormat() {
        if (this.parent.isAdaptive) {
            return 'narrow';
        }
        return 'abbreviated';
    }
    setEventWrapperHeight() {
        let headerHeight = (this.parent.headerModule ? this.parent.headerModule.getHeaderElement().offsetHeight : 0) + 2;
        let contentArea = this.getContentAreaElement().firstChild;
        let dateHeader = this.element.querySelector('.' + DATE_HEADER_WRAP_CLASS);
        let availableHeight = this.parent.element.offsetHeight - headerHeight - dateHeader.offsetHeight - contentArea.offsetHeight;
        let eventWrapper = this.element.querySelector('.' + APPOINTMENT_WRAP_CLASS);
        eventWrapper.style.height = formatUnit(availableHeight);
    }
    onDataReady(args) {
        this.setEventWrapperHeight();
        this.clearElements();
        this.parent.eventsProcessed = this.agendaBase.processAgendaEvents(args.processedData);
        let count = 0;
        for (let date of this.renderDates) {
            let filterData = this.appointmentFiltering(date);
            let workCell = this.element.querySelectorAll('.' + WORK_CELLS_CLASS)[count];
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
    }
    onCellClick(event) {
        let filterData = this.appointmentFiltering(event.startTime);
        this.onEventRender(filterData);
        this.parent.setProperties({ selectedDate: new Date('' + event.startTime) }, true);
    }
    onEventRender(events) {
        let appWrap = this.element.querySelector('.' + APPOINTMENT_WRAP_CLASS);
        appWrap.innerHTML = '';
        if (events.length > 0) {
            let appContainer = createElement('div', { className: APPOINTMENT_CONTAINER_CLASS });
            appWrap.appendChild(this.agendaBase.createAgendaContentElement('data', events, appContainer));
        }
        else {
            this.appendAppContainer(appWrap);
        }
        this.agendaBase.wireEventActions();
    }
    appointmentFiltering(date) {
        let dateStart = resetTime(new Date(date.getTime()));
        let dateEnd = setTime(new Date(dateStart.getTime()), MS_PER_DAY);
        return this.parent.eventBase.filterEvents(dateStart, dateEnd);
    }
    clearElements() {
        let appointmentIndicators = [].slice.call(this.element.querySelectorAll('.' + APPOINTMENT_INDICATOR_CLASS));
        for (let appointmentIndicator of appointmentIndicators) {
            remove(appointmentIndicator);
        }
        this.appendAppContainer(this.element.querySelector('.' + APPOINTMENT_WRAP_CLASS));
    }
    appendAppContainer(appWrap) {
        let app = createElement('div', { className: APPOINTMENT_CONTAINER_CLASS });
        addClass([app], AGENDA_NO_EVENT_CLASS);
        app.innerHTML = this.l10n.getConstant('noEvents');
        appWrap.innerHTML = '';
        appWrap.appendChild(app);
    }
    /**
     * Get module name.
     */
    getModuleName() {
        return 'monthAgenda';
    }
}

/**
 * Schedule component exported items
 */

/**
 * Recurrence-Editor component exported items
 */

/**
 * Export Schedule components
 */

export { Schedule, cellClick, cellDoubleClick, actionBegin, actionComplete, actionFailure, navigating, renderCell, eventClick, eventRendered, dataBinding, dataBound, popupOpen, initialLoad, initialEnd, dataReady, contentReady, scroll, scrollUiUpdate, uiUpdate, documentClick, cellMouseDown, WEEK_LENGTH, MS_PER_DAY, MS_PER_MINUTE, getWeekFirstDate, firstDateOfMonth, lastDateOfMonth, getWeekNumber, setTime, resetTime, getDateInMs, addDays, addMonths, addYears, getStartEndHours, getMaxDays, getDaysCount, getScrollBarWidth, HeaderRenderer, ViewBase, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, Timezone, localTimezoneName, timezoneData, RecurrenceEditor };
//# sourceMappingURL=ej2-schedule.es2015.js.map
