/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', '/analytics/js/common/ita-core.js',
    'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojchart', 'jqueryui',
    'ojs/ojdatetimepicker'], function(oj, ko, $, ita) {

    ita.registerTool(
            {
                name: 'time-slider',
                init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    var vm = valueAccessor();
                    $.get('/analytics/html/timeseries/time-slider.html', function(resp) {
                        var $container = $(element);
                        $container.append(resp);
                        ko.applyBindings(vm, $(".time-filter")[0]);

                        var $sliderBar = $container.find(".slider-bar");
                        $sliderBar.slider({
                            range: true,
                            min: vm.totalStart().getTime(),
                            max: vm.totalEnd().getTime(),
                            values: [vm.viewStart().getTime(), vm.viewEnd().getTime()],
                            stop: function(event, ui) {
                                    var values = $(this).slider('values');
                                var newStart = values[0];
                                if (newStart !== vm.viewStart().getTime()) {
                                    vm.viewStart(new Date(newStart));
                                }

                                var newEnd = values[1];
                                if (newEnd !== vm.viewEnd().getTime()) {
                                    vm.viewEnd(new Date(newEnd));
                                }
                            },
                            slide: function(event, ui) {
                                var thiz = this;
                                if (vm.slide && typeof vm.slide === 'function') {
                                        var values = $(thiz).slider("values");
                                        vm.slide(new Date(values[0]), new Date(values[1]));
                                }
                            },
                            start: function(event, ui) {
                                // if mousedown on the slider-range ,event canceld
                                if (event.toElement === $sliderBar.find('.ui-slider-range')[0]) {
                                    event.preventDefault();
                                }
                            }
                        });

                        var $zoomInBtn = $('.time-filter > .slider-bar-zoom-in');
                        $zoomInBtn.click(function() {
                            var values = $sliderBar.slider("values");
                            var min = $sliderBar.slider("option", "min");
                            var max = $sliderBar.slider("option", "max");
                            var zoomInScale = 24 * 3600 * 1000;
                            var newValues = new Array();
                            newValues[0] = (min < values[0] - zoomInScale ? values[0] - zoomInScale : min);
                            newValues[1] = (max > values[1] + zoomInScale ? values[1] + zoomInScale : max);
                            $sliderBar.slider('values', [newValues[0], newValues[1]]);
                            $sliderBar.slider('option', 'slide').call($sliderBar);
                            $sliderBar.slider('option', 'stop').call($sliderBar);
                        });

                        var $zoomOutBtn = $('.time-filter > .slider-bar-zoom-out');
                        $zoomOutBtn.click(function() {
                            var values = $sliderBar.slider("values");
                            var min = $sliderBar.slider("option", "min");
                            var max = $sliderBar.slider("option", "max");
                            var zoomOutScale = 24 * 3600 * 1000;
                            var newValues = new Array();
                            if (values[1] - values[0] <= zoomOutScale) {
                                newValues[0] = values[0];
                                newValues[1] = values[1];
                            } else if (values[1] - values[0] <= 2 * zoomOutScale) {
                                newValues[0] = values[0] + zoomOutScale;
                                newValues[1] = values[1];
                            } else {
                                newValues[0] = values[0] + zoomOutScale;
                                newValues[1] = values[1] - +zoomOutScale;
                            }
                            $sliderBar.slider('values', [newValues[0], newValues[1]]);
                            $sliderBar.slider('option', 'slide').call($sliderBar);
                            $sliderBar.slider('option', 'stop').call($sliderBar);
                        });

                        var $range = $('.ui-slider-range');
                        $range.draggable({
                            axis: 'x',
                            containment: $sliderBar,
                            drag: function(event, ui) {
                                var thiz = this;
                                //Compute  handles' new position
                                var newOffsetLeft = ui.position.left;
                                var rangeWidth = $(thiz).width();
                                var $handle0 = $('.slider-bar > .ui-slider-handle').eq(0);
                                $handle0.css({left: newOffsetLeft});
                                var $handle1 = $('.slider-bar > .ui-slider-handle').eq(1);
                                $handle1.css({left: newOffsetLeft + rangeWidth});
                                var values = $sliderBar.slider("values");

                                //Compute slider's new values;
                                var interval = values[1] - values[0];
                                var min = $sliderBar.slider("option", "min");
                                var max = $sliderBar.slider("option", "max");
                                var weight = (max - min) / $sliderBar.width();
                                values[0] = min + $handle0.position().left * weight;
                                values[1] = values[0] + interval;
                                var newValues = new Array();

                                //in addition to  containment  limitation
                                if (values[1] >= max) {
                                    newValues[1] = max;
                                    newValues[0] = max - interval;
                                } else if (values[0] <= min) {
                                    newValues[0] = min;
                                    newValues[1] = min + interval;
                                } else {
                                    newValues[0] = values[0];
                                    newValues[1] = values[1];
                                }
                                // map slide event in slider 
                                $sliderBar.slider('values', [newValues[0], newValues[1]]);
                                $sliderBar.slider('option', 'slide').call($sliderBar);
                            },
                            stop: function(event, ui) {
                                // map stop event in slider 
                                $sliderBar.slider('option', 'stop').call($sliderBar);
                            }
                        });


                        var $splitterBar = $container.find(".splitter-bar");
                        var $scaleBar = $container.find(".scale-bar");
                        var drawSplitterScale = function() {
                            // constants
                            var HOUR = 60 * 60 * 1000;
                            var DAY = 24 * HOUR;

                            // Clean the two containers in case a redraw is triggered. 
                            $splitterBar.empty();
                            $scaleBar.empty();

                            // Calculate the start distance and start date align at day.
                            var dVal = vm.totalEnd().getTime() - vm.totalStart().getTime();
                            var splitterDistance = $scaleBar.width() * (DAY / dVal);
                            var startDate = Math.ceil(vm.totalStart().getTime() / DAY) * DAY;
                            var startPos = (startDate - vm.totalStart().getTime()) / DAY * splitterDistance;

                            // Calculate the step in case there will be too many scales to draw.
                            var minSplitterDistance = 20;
                            var step = 1;
                            var precalculatedDistance = splitterDistance;
                            while (precalculatedDistance < minSplitterDistance) {
                                step++;
                                precalculatedDistance += splitterDistance;
                            }

                            // month const list. 
                            var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                            var lastMonth = -1;
                            for (var currentPos = startPos, currentTime = startDate;
                                    currentPos < $scaleBar.width();
                                    currentPos += splitterDistance * step, currentTime += DAY * step) {
                                // Draw the splitter.        
                                var $splitter = $("<span></span>").css("left", currentPos + "px");
                                $splitterBar.append($splitter);
                                var currentTimeObj = new Date(currentTime);

                                // Calculate the scale text. 
                                var scaleText = '';
                                var currentMonth = currentTimeObj.getMonth();
                                // If it is the first time loop into the month,
                                // draw the date with the month prefix. Like: 'Apr 1'.
                                if (currentMonth !== lastMonth) {
                                    scaleText = MONTH_NAMES[currentMonth] + " ";
                                    lastMonth = currentMonth;
                                }
                                scaleText += currentTimeObj.getDate();

                                // Draw the scale.
                                var $scale = $("<span></span>").text(scaleText);
                                $scaleBar.append($scale);
                                // Adjust the scale to align to the middle of the splitter.
                                $scale.css("left", currentPos - $scale.width() / 2 + "px");
                            }
                        };

                        drawSplitterScale();
                        // Redraw the slider when browser window is resized.
                        $(window).resize(function() {
                            drawSplitterScale();
                        });

                        vm.viewStart.subscribe(function(newVal) {
                            $sliderBar.slider("values", [newVal.getTime(), vm.viewEnd().getTime()]);
                            fireViewRangeChange();
                        });
                        vm.viewEnd.subscribe(function(newVal) {
                            $sliderBar.slider("values", [vm.viewStart().getTime(), newVal.getTime()]);
                            fireViewRangeChange();
                        });
                        vm.totalStart.subscribe(function(newVal) {
                            $sliderBar.slider("option", "min", newVal.getTime());
                            drawSplitterScale();
                        });
                        vm.totalEnd.subscribe(function(newVal) {
                            $sliderBar.slider("option", "max", newVal.getTime());
                            drawSplitterScale();
                        });

                        function fireViewRangeChange() {
                            if (vm.viewRangeChange && typeof vm.viewRangeChange === 'function') {
                                vm.viewRangeChange(vm.viewStart(), vm.viewEnd());
                            }
                        }
                    });
                }
            }
    );

});