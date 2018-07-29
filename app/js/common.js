$(document).ready(function(){
    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [310, 310],
        max_cols: 6,
        max_rows: 6,
        resize: {
            enabled: true
        }
    });
});