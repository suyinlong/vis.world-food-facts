/*
* @Author: Yinlong Su
* @Date:   2016-04-26 17:42:43
* @Last Modified by:   Yinlong Su
* @Last Modified time: 2016-04-27 12:50:05
*/

var map = new Datamap({
    scope: 'world',
    element: document.getElementById("views"),
    projection: 'mercator',
    height: 700,
    fills: {
        defaultFill: '#999999',
        available1: '#f0af0a',
        available2: 'lightskyblue',
        available3: 'tomato'
    },
    data: {
        USA: {fillKey: 'available1'},
        CHN: {fillKey: 'available3'},
        FRA: {fillKey: 'available2'}
    },
    done: function(datamap) {
        callback_map(datamap);
    }
});

var div_mask;
var div_popup_panel;
var div_popup_panel_transition;
var div_popup_panel_show_action = 'add';

function $(id) { return document.getElementById(id); }

function callback_map(datamap) {
    datamap.svg.selectAll('.datamaps-subunit')
        .on('click', function(geography) {
            //alert(geography.properties.name);
            showPopupPanel(geography.id);
        });
}

function alphaPopupPanel(dataset) {
    div_popup_panel_transition += 2;
    k = div_popup_panel_transition / 100;

    _left = ($('shadow-popup-panel').offsetLeft + 480) * k - 480;
    _top = ($('shadow-popup-panel').offsetTop + 250) * k - 250;

    scale = "scale(" + k + ", " + k + ")";

    div_popup_panel.attr("style", "opacity: " + k + "; transform: " + scale + "; left: " + _left + "px; top: " + _top + "px;");

    if (div_popup_panel_transition < 100)
        setTimeout(alphaPopupPanel, 10, dataset);
    else {
        div_popup_panel.attr("class", "popup-panel visible")
            .attr("style", "");
        makeBarChart(div_popup_panel_show_action, dataset);
        div_popup_panel_show_action = 'change';
    }

}

function showPopupPanel(id) {
    dataset = loadCountryData(id);

    if (dataset) {
        div_mask.attr("class", "mask visible");
        div_popup_panel.attr("class", "resizing-popup-panel visible");

        div_popup_panel_transition = -2;
        alphaPopupPanel(dataset);
    }


}

function hidePopupPanel() {
    div_mask.attr("class", "mask hidden");
    div_popup_panel.attr("class", "popup-panel hidden");
}

function loadCountryData(id) {
    console.log(id);
    cInfo = countryInfo[id];

    if (cInfo) {
        d3.select(".popup-panel-picture")
            .attr("style", "background-image: url(" + cInfo['PIC'] + ");");
        $("popup-panel-location").innerHTML = cInfo['LAB'];
        $("popup-panel-description").innerHTML = cInfo['DES'];
        return cInfo['DAT'];
    }

    return cInfo;
}

function compareto() {
    div_popup_panel_show_action = 'add';
    hidePopupPanel();
}

function removelast() {
    if (countryCount > 1)
        makeBarChart('remove', dataset_10_empty);
}

div_mask = d3.select(".mask");
div_popup_panel = d3.select(".popup-panel");

div_mask.on("click", function() {
        hidePopupPanel();
    })