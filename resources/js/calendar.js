import { Calendar } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

var calendarEl = document.getElementById("calendar");

let calendar = new Calendar(calendarEl, {
    plugins: [timeGridPlugin, listPlugin],
    initialView: "dayGridMonth",
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
    },
    locale: "ja",

    // 日付をクリック
    dateClick: function (info) {
        let id = $("#id").val();

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type: "post",
            url: '/calendar/' + id,
            data: {'date': info.dateStr},
            dataType: "json",
            scriptCharset: "utf-8"
        }).then((res) => {
            console.log(res);
        }).fail((error) => {
            console.log(error.statusText);
        });
    },
});
calendar.render();